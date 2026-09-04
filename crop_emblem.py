import re

with open('C:/Users/yashp/Downloads/Mobile Devices/1000102372.svg', 'r', encoding='utf-8') as f:
    text = f.read()

paths = re.findall(r'<path\s+fill="([^"]+)"[^>]*d="([^"]+)"', text, re.DOTALL)

# Find paths that are part of the actual graphic icon
icon_paths = []
white_colors = ['#FFFFFF', '#FEFEFE', '#FDFDFD', '#FCFCFC', '#FBFBFB', '#FAFAFA', '#F9F9F9', '#F8F8F8', '#F9F0FB', '#F9F4F9', '#FCF4FD', '#EDEDED', '#F4F4F4', '#DAD9DA', '#E5E5E5']

for fill, d in paths:
    nums = [float(x) for x in re.findall(r'[-+]?\d+\.\d+', d)]
    if len(nums) < 4:
        continue
    xs = nums[0::2]
    ys = nums[1::2]
    minx, maxx = min(xs), max(xs)
    miny, maxy = min(ys), max(ys)
    
    # Check if this is a dark/purple/colored element
    if fill.upper() not in [w.upper() for w in white_colors]:
        icon_paths.append((fill, d, minx, miny, maxx, maxy))

print(f"Colored/Dark Icon Paths found: {len(icon_paths)}")
if icon_paths:
    min_x = min(p[2] for p in icon_paths)
    min_y = min(p[3] for p in icon_paths)
    max_x = max(p[4] for p in icon_paths)
    max_y = max(p[5] for p in icon_paths)
    print(f"Colored Icon Bounds: min_x={min_x:.1f}, min_y={min_y:.1f}, max_x={max_x:.1f}, max_y={max_y:.1f}, w={max_x-min_x:.1f}, h={max_y-min_y:.1f}")

    # Also collect any inner highlights that fall within this bounding box
    all_logo_paths = []
    for fill, d in paths:
        nums = [float(x) for x in re.findall(r'[-+]?\d+\.\d+', d)]
        if len(nums) < 4:
            continue
        xs = nums[0::2]
        ys = nums[1::2]
        px_min, px_max = min(xs), max(xs)
        py_min, py_max = min(ys), max(ys)
        
        # If path is inside or intersecting the icon bounds
        if px_min >= min_x - 10 and px_max <= max_x + 10 and py_min >= min_y - 10 and py_max <= max_y + 10:
            all_logo_paths.append((fill, d))
            
    print(f"Total logo paths inside cropped area: {len(all_logo_paths)}")
    
    pad = 10
    crop_x = max(0, min_x - pad)
    crop_y = max(0, min_y - pad)
    crop_w = (max_x - min_x) + (pad * 2)
    crop_h = (max_y - min_y) + (pad * 2)
    
    cropped_svg = f'''<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="{crop_x:.1f} {crop_y:.1f} {crop_w:.1f} {crop_h:.1f}" width="{crop_w:.1f}" height="{crop_h:.1f}">\n'''
    for fill, d in all_logo_paths:
        cropped_svg += f'<path fill="{fill}" opacity="1.000000" stroke="none" d="{d}"></path>\n'
    cropped_svg += '</svg>'
    
    with open('public/logo.svg', 'w', encoding='utf-8') as out_f:
        out_f.write(cropped_svg)
    with open('public/favicon.svg', 'w', encoding='utf-8') as out_f:
        out_f.write(cropped_svg)
    print(f"Successfully cropped logo.svg with viewBox='{crop_x:.1f} {crop_y:.1f} {crop_w:.1f} {crop_h:.1f}'!")
