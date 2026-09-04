import re

with open('C:/Users/yashp/Downloads/Mobile Devices/1000102372.svg', 'r', encoding='utf-8') as f:
    text = f.read()

paths = re.findall(r'<path\s+fill="([^"]+)"[^>]*d="([^"]+)"', text, re.DOTALL)

path_data = []
for idx, (fill, d) in enumerate(paths):
    nums = [float(x) for x in re.findall(r'[-+]?\d+\.\d+', d)]
    if len(nums) < 4:
        continue
    xs = nums[0::2]
    ys = nums[1::2]
    minx, maxx = min(xs), max(xs)
    miny, maxy = min(ys), max(ys)
    path_data.append((idx, fill, minx, miny, maxx, maxy, maxx-minx, maxy-miny, d))

# Sort by width*height descending
path_data.sort(key=lambda p: p[6]*p[7], reverse=True)

print("Top 10 Largest Paths in SVG:")
for p in path_data[:10]:
    print(f"Index {p[0]}: fill={p[1]}, x=[{p[2]:.1f}, {p[4]:.1f}] w={p[6]:.1f}, y=[{p[3]:.1f}, {p[5]:.1f}] h={p[7]:.1f}, Area={p[6]*p[7]:.1f}")
