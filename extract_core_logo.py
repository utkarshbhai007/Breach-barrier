import re
from collections import Counter

with open('C:/Users/yashp/Downloads/Mobile Devices/1000102372.svg', 'r', encoding='utf-8') as f:
    text = f.read()

paths = re.findall(r'<path\s+fill="([^"]+)"[^>]*d="([^"]+)"', text, re.DOTALL)
print("Total paths in original SVG:", len(paths))

colors = Counter([p[0] for p in paths])
print("Color distribution:")
for c, count in colors.most_common(20):
    print(f"  {c}: {count} paths")

# Let's inspect paths that are NOT white, black frame, or full screen
meaningful_paths = []
for fill, d in paths:
    nums = [float(x) for x in re.findall(r'[-+]?\d+\.\d+', d)]
    if len(nums) < 4:
        continue
    xs = nums[0::2]
    ys = nums[1::2]
    minx, maxx = min(xs), max(xs)
    miny, maxy = min(ys), max(ys)
    w = maxx - minx
    h = maxy - miny
    
    # If it is not full background
    if w < 1000 or h < 1000:
        meaningful_paths.append((fill, d, minx, miny, maxx, maxy, w, h))

print(f"Meaningful non-full-canvas paths: {len(meaningful_paths)}")
if meaningful_paths:
    min_x = min(p[2] for p in meaningful_paths)
    min_y = min(p[3] for p in meaningful_paths)
    max_x = max(p[4] for p in meaningful_paths)
    max_y = max(p[5] for p in meaningful_paths)
    print(f"Core Logo bounds: min_x={min_x:.1f}, min_y={min_y:.1f}, max_x={max_x:.1f}, max_y={max_y:.1f}, w={max_x-min_x:.1f}, h={max_y-min_y:.1f}")

    pad = 15
    vx = max(0, min_x - pad)
    vy = max(0, min_y - pad)
    vw = (max_x - min_x) + (pad * 2)
    vh = (max_y - min_y) + (pad * 2)
    
    cropped_svg = f'''<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="{vx:.1f} {vy:.1f} {vw:.1f} {vh:.1f}" width="{vw:.1f}" height="{vh:.1f}">\n'''
    for fill, d, _, _, _, _, _, _ in meaningful_paths:
        cropped_svg += f'<path fill="{fill}" opacity="1.000000" stroke="none" d="{d}"></path>\n'
    cropped_svg += '</svg>'
    
    with open('public/logo.svg', 'w', encoding='utf-8') as out_f:
        out_f.write(cropped_svg)
    print(f"Updated public/logo.svg with tight cropped viewBox={vx:.1f} {vy:.1f} {vw:.1f} {vh:.1f}!")
