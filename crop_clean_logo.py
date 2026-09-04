import re

with open('C:/Users/yashp/Downloads/Mobile Devices/1000102372.svg', 'r', encoding='utf-8') as f:
    text = f.read()

paths = re.findall(r'<path\s+fill="([^"]+)"[^>]*d="([^"]+)"', text, re.DOTALL)

# Exclude the 2 side bars and the 2 full canvas rectangles
excluded_indices = [0, 1, 2, 3, 4]

logo_paths = []
all_xs = []
all_ys = []

for idx, (fill, d) in enumerate(paths):
    if idx in excluded_indices:
        continue
    nums = [float(x) for x in re.findall(r'[-+]?\d+\.\d+', d)]
    if len(nums) < 4:
        continue
    xs = nums[0::2]
    ys = nums[1::2]
    minx, maxx = min(xs), max(xs)
    miny, maxy = min(ys), max(ys)
    
    # Exclude anything touching the extreme outer margin bars
    if minx < 130 or maxx > 950 or miny < 20 or maxy > 1050:
        continue
    
    all_xs.extend(xs)
    all_ys.extend(ys)
    logo_paths.append((fill, d))

min_x = min(all_xs)
min_y = min(all_ys)
max_x = max(all_xs)
max_y = max(all_ys)
w = max_x - min_x
h = max_y - min_y

print(f"CLEAN LOGO BOUNDS: min_x={min_x:.1f}, min_y={min_y:.1f}, max_x={max_x:.1f}, max_y={max_y:.1f}, width={w:.1f}, height={h:.1f}")

padding = 10
vx = min_x - padding
vy = min_y - padding
vw = w + (padding * 2)
vh = h + (padding * 2)

cropped_svg = f'''<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="{vx:.1f} {vy:.1f} {vw:.1f} {vh:.1f}" width="{vw:.1f}" height="{vh:.1f}">\n'''
for fill, d in logo_paths:
    cropped_svg += f'<path fill="{fill}" opacity="1.000000" stroke="none" d="{d}"></path>\n'
cropped_svg += '</svg>'

with open('public/logo.svg', 'w', encoding='utf-8') as out_f:
    out_f.write(cropped_svg)

with open('public/favicon.svg', 'w', encoding='utf-8') as out_f:
    out_f.write(cropped_svg)

print(f"Generated clean, perfectly cropped logo.svg with viewBox='{vx:.1f} {vy:.1f} {vw:.1f} {vh:.1f}'!")
