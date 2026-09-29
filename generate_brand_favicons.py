import os
import cv2
import numpy as np
from PIL import Image, ImageDraw

def generate_favicons():
    public_dir = 'public'
    
    # 1. Load the authentic 512x512 render
    src_path = os.path.join(public_dir, 'android-chrome-512x512.png')
    im512_src = Image.open(src_path).convert('RGBA')
    arr512 = np.array(im512_src)

    # 2. Extract emblem with clean antialiased alpha
    bg_color = np.array([15, 23, 42]) # #0F172A
    diff = np.sqrt(np.sum((arr512[:, :, :3] - bg_color)**2, axis=-1))
    alpha = np.clip((diff - 8) / 35.0 * 255, 0, 255).astype(np.uint8)
    
    arr_trans = np.zeros((512, 512, 4), dtype=np.uint8)
    arr_trans[:, :, :3] = arr512[:, :, :3]
    arr_trans[:, :, 3] = alpha
    im_pure_trans = Image.fromarray(arr_trans)

    # 3. Crop to exact emblem bounding box
    y_idx, x_idx = np.where(alpha > 10)
    crop_box = (x_idx.min(), y_idx.min(), x_idx.max() + 1, y_idx.max() + 1)
    icon_cropped = im_pure_trans.crop(crop_box)
    w_crop, h_crop = icon_cropped.size

    # Target icon size: 385px gives optimal visibility and margin
    target_size = 385
    scale = target_size / max(w_crop, h_crop)
    new_w = int(w_crop * scale)
    new_h = int(h_crop * scale)
    icon_scaled = icon_cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
    pos_x = (512 - new_w) // 2
    pos_y = (512 - new_h) // 2

    # 4. Master Solid Background Canvas (for apple-touch-icon, android-chrome)
    master_solid = Image.new('RGBA', (512, 512), (15, 23, 42, 255))
    master_solid.paste(icon_scaled, (pos_x, pos_y), icon_scaled)

    # 5. Master Squircle Canvas (for favicon-16, 32, 48, ico)
    master_squircle = master_solid.copy()
    mask = Image.new('L', (512, 512), 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([(0, 0), (511, 511)], radius=112, fill=255)
    master_squircle.putalpha(mask)

    # 6. Generate PNG Favicons
    fav_16 = master_squircle.resize((16, 16), Image.Resampling.LANCZOS)
    fav_32 = master_squircle.resize((32, 32), Image.Resampling.LANCZOS)
    fav_48 = master_squircle.resize((48, 48), Image.Resampling.LANCZOS)
    
    fav_16.save(os.path.join(public_dir, 'favicon-16x16.png'))
    fav_32.save(os.path.join(public_dir, 'favicon-32x32.png'))
    fav_48.save(os.path.join(public_dir, 'favicon-48x48.png'))
    print("Saved favicon-16x16.png, favicon-32x32.png, favicon-48x48.png")

    # 7. Generate Apple Touch Icon (180x180 solid background)
    apple_icon = master_solid.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save(os.path.join(public_dir, 'apple-touch-icon.png'))
    print("Saved apple-touch-icon.png (180x180 solid)")

    # 8. Generate Android Chrome Icons (192x192, 512x512 solid background)
    android_192 = master_solid.resize((192, 192), Image.Resampling.LANCZOS)
    android_192.save(os.path.join(public_dir, 'android-chrome-192x192.png'))
    master_solid.save(os.path.join(public_dir, 'android-chrome-512x512.png'))
    print("Saved android-chrome-192x192.png, android-chrome-512x512.png")

    # 9. Generate multi-resolution favicon.ico
    master_squircle.save(
        os.path.join(public_dir, 'favicon.ico'),
        format='ICO',
        sizes=[(16, 16), (32, 32), (48, 48)]
    )
    print("Saved multi-size favicon.ico (16x16, 32x32, 48x48)")

    # 10. Generate Vector SVG Favicon
    white_mask = cv2.imread('C:/Users/ASUS/.gemini/antigravity-ide/brain/29149617-9eb1-4161-a74a-5c8d45f27597/scratch/mask512_white.png', cv2.IMREAD_GRAYSCALE)
    red_mask = cv2.imread('C:/Users/ASUS/.gemini/antigravity-ide/brain/29149617-9eb1-4161-a74a-5c8d45f27597/scratch/mask512_red.png', cv2.IMREAD_GRAYSCALE)

    # Exclude node raster circle so we can draw a perfect SVG circle
    red_mask_no_node = red_mask.copy()
    red_mask_no_node[150:185, 395:425] = 0

    r_cnt, _ = cv2.findContours(red_mask_no_node, cv2.RETR_TREE, cv2.CHAIN_APPROX_TC89_KCOS)
    w_cnt, _ = cv2.findContours(white_mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_TC89_KCOS)

    # Center and scaling matching the raster icons
    cx, cy = 255.5, 255.5
    scale_svg = 385.0 / 328.0

    def transform_pts(pts):
        return (pts - np.array([cx, cy])) * scale_svg + np.array([cx, cy])

    def contour_to_d(contours, epsilon=0.9):
        d_list = []
        for c in contours:
            if cv2.contourArea(c) < 30: continue
            approx = cv2.approxPolyDP(c, epsilon, True)
            pts = approx.reshape(-1, 2).astype(float)
            if len(pts) < 3: continue
            pts = transform_pts(pts)
            d = f"M {pts[0][0]:.1f} {pts[0][1]:.1f} " + " ".join([f"L {p[0]:.1f} {p[1]:.1f}" for p in pts[1:]]) + " Z"
            d_list.append(d)
        return " ".join(d_list)

    w_d = contour_to_d(w_cnt, epsilon=0.9)
    r_d = contour_to_d(r_cnt, epsilon=0.9)

    node_center = transform_pts(np.array([407.0, 169.0]))
    node_r_outer = 13.0 * scale_svg
    node_r_inner = 5.5 * scale_svg

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bbBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="100%" stop-color="#070B14" />
    </linearGradient>
  </defs>
  <!-- Background Brand Badge (Squircle) -->
  <rect width="512" height="512" rx="112" fill="url(#bbBg)" />
  <!-- White Shield & Monogram Elements -->
  <path d="{w_d}" fill="#FFFFFF" fill-rule="evenodd" />
  <!-- Cyber Red Shield & Orbit Elements -->
  <path d="{r_d}" fill="#EA4343" fill-rule="evenodd" />
  <!-- Cyber Red Sensor Node -->
  <circle cx="{node_center[0]:.1f}" cy="{node_center[1]:.1f}" r="{node_r_outer:.1f}" fill="#EA4343" />
  <circle cx="{node_center[0]:.1f}" cy="{node_center[1]:.1f}" r="{node_r_inner:.1f}" fill="#0F172A" />
</svg>
'''
    with open(os.path.join(public_dir, 'favicon.svg'), 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print("Saved vector favicon.svg")

if __name__ == '__main__':
    generate_favicons()
