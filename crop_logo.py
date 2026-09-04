import re

with open('public/logo.svg', 'r', encoding='utf-8') as f:
    text = f.read()

# Filter out background paths that fill the entire outer frame #0C1220, #FDFDFD, #FEFEFE if they touch outer bounds
paths = re.findall(r'<path\s+fill="([^"]+)"[^>]*d="([^"]+)"', text, re.DOTALL)
print(f"Total paths: {len(paths)}")

color_bounds = {}
filtered_paths = []

for fill, d in paths:
    # Get all floats
    nums = [float(x) for x in re.findall(r'[-+]?\d+\.\d+', d)]
    if len(nums) < 4:
        continue
    xs = nums[0::2]
    ys = nums[1::2]
    minx, maxx = min(xs), max(xs)
    miny, maxy = min(ys), max(ys)
    
    # If this path is just the massive 1080x1080 background border container (like 1 to 1080)
    if (minx <= 2 and maxx >= 960 and miny <= 2 and maxy >= 1080):
        print(f"Skipping background border path {fill}: minx={minx}, maxx={maxx}, miny={miny}, maxy={maxy}")
        continue
    
    if fill.upper() in ['#FDFDFD', '#FEFEFE', '#FFFFFF'] and (maxx - minx > 800 and maxy - miny > 800):
        print(f"Skipping white background canvas {fill}")
        continue

    filtered_paths.append((fill, d, minx, miny, maxx, maxy))

print(f"Retained core logo paths: {len(filtered_paths)}")
min_x = min(p[2] for p in filtered_paths)
min_y = min(p[3] for p in filtered_paths)
max_x = max(p[4] for p in filtered_paths)
max_y = max(p[5] for p in filtered_paths)

padding = 20
crop_x = max(0, min_x - padding)
crop_y = max(0, min_y - padding)
crop_w = (max_x - min_x) + (padding * 2)
crop_h = (max_y - min_y) + (padding * 2)

print(f"TIGHT VIEWBOX: viewBox=\"{crop_x:.1f} {crop_y:.1f} {crop_w:.1f} {crop_h:.1f}\"")
print(f"Bounds: min_x={min_x}, min_y={min_y}, max_x={max_x}, max_y={max_y}")

# Create cropped tight SVG
cropped_svg = f'''<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="{crop_x:.1f} {crop_y:.1f} {crop_w:.1f} {crop_h:.1f}" width="{crop_w:.1f}" height="{crop_h:.1f}">\n'''
for fill, d, _, _, _, _ in filtered_paths:
    cropped_svg += f'<path fill="{fill}" opacity="1.000000" stroke="none" d="{d}"></path>\n'
cropped_svg += '</svg>'

with open('public/logo.svg', 'w', encoding='utf-8') as out_f:
    out_f.write(cropped_svg)

print("Saved tightly cropped public/logo.svg successfully!")
