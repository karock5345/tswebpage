from PIL import Image
import os
import json

# Source and destination directories
source_dir = r"D:\Projects\tswebpage\TS-Job-1.95-HTML"
dest_dir = r"D:\Projects\tswebpage\reboot-main\reboot-react\public\assets\images\job-references"

# Create destination directory if it doesn't exist
os.makedirs(dest_dir, exist_ok=True)

# Image mappings based on the HTML document structure
# Format: job_id: image_filename
image_mappings = {
    1: "TS-Job Reference v1.95_html_98151c78.jpg",  # Immigration Department
    2: "TS-Job Reference v1.95_html_392d1518.jpg",  # PCCW
    3: "TS-Job Reference v1.95_html_7c00a288.jpg",  # Hong Kong and China Gas
    4: "TS-Job Reference v1.95_html_4fc8adf5.jpg",  # Inland Revenue
    5: "TS-Job Reference v1.95_html_90964c4c.jpg",  # Café de Coral
    6: "TS-Job Reference v1.95_html_2d12e30e.jpg",  # Rating and Valuation
    7: "TS-Job Reference v1.95_html_6d9cb541.jpg",  # Company Registry
    8: "TS-Job Reference v1.95_html_279e92c5.jpg",  # GIA Hong Kong Laboratory
    9: "TS-Job Reference v1.95_html_6db5a512.jpg",  # Christian Family Service
    10: "TS-Job Reference v1.95_html_8849f3c8.jpg", # Roche Diagnostics
    11: "TS-Job Reference v1.95_html_745e517b.jpg", # Bose Limited
    12: "TS-Job Reference v1.95_html_89ebafe8.jpg", # FTLife Insurance
    13: "TS-Job Reference v1.95_html_35a7c4df.jpg", # Saizeriya
    14: "TS-Job Reference v1.95_html_df716b6b.jpg", # Prime Credit
    15: "TS-Job Reference v1.95_html_6bd29d10.jpg", # Shun Hing Technology
    16: "TS-Job Reference v1.95_html_a3e5673c.jpg", # Besta Technology
    17: "TS-Job Reference v1.95_html_cb40b377.jpg", # Hong Kong Public Libraries
    18: "TS-Job Reference v1.95_html_7693d35a.jpg", # Crown Motors
    19: "TS-Job Reference v1.95_html_8e5446c9.png", # HKU SPACE
    20: "TS-Job Reference v1.95_html_f9f8e0e8.jpg", # Quality Healthcare
    21: "TS-Job Reference v1.95_html_62184975.png", # Fortis Asia Holdings
    22: "TS-Job Reference v1.95_html_3c5b2c7c.jpg", # Cathay Pacific Airways
    23: "TS-Job Reference v1.95_html_641aa732.jpg", # Macao Water Supply
    24: "TS-Job Reference v1.95_html_a72bf0e8.jpg", # City Super
    25: "TS-Job Reference v1.95_html_14f1ee1e.jpg", # Hong Kong International Airport
    26: "TS-Job Reference v1.95_html_60a12ed6.jpg", # IKEA
    27: "TS-Job Reference v1.95_html_367960ef.jpg", # Labour Department
    28: "TS-Job Reference v1.95_html_771f36ad.jpg", # Pizza Hut
    29: "TS-Job Reference v1.95_html_ecf7b64f.jpg", # Ocean Park
    30: "TS-Job Reference v1.95_html_d799df47.jpg", # Eastern Harbour Tunnel
    31: "TS-Job Reference v1.95_html_a7a84b66.jpg", # Asia Airfreight Terminal
    32: "TS-Job Reference v1.95_html_c8ddf18.jpg",  # Transport Department
    33: "TS-Job Reference v1.95_html_b43bdfe9.jpg", # CNPC Hong Kong
    34: "TS-Job Reference v1.95_html_da9be119.jpg", # Bank of China Insurance
    35: "TS-Job Reference v1.95_html_2688e465.jpg", # Hong Kong Cable TV
}

def resize_image(source_path, dest_path, size=(600, 600)):
    """Resize image to specified size while maintaining aspect ratio"""
    try:
        with Image.open(source_path) as img:
            # Convert to RGB if necessary (for PNG with alpha channel)
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            
            # Resize with aspect ratio maintained
            img.thumbnail(size, Image.Resampling.LANCZOS)
            
            # Create a white background of target size
            background = Image.new('RGB', size, (255, 255, 255))
            
            # Calculate position to center the image
            offset = ((size[0] - img.size[0]) // 2, (size[1] - img.size[1]) // 2)
            background.paste(img, offset)
            
            # Save as JPG
            background.save(dest_path, 'JPEG', quality=90, optimize=True)
            print(f"✓ Processed: {os.path.basename(dest_path)}")
            return True
    except Exception as e:
        print(f"✗ Error processing {os.path.basename(source_path)}: {str(e)}")
        return False

# Process all images
processed_count = 0
for job_id, image_file in image_mappings.items():
    source_path = os.path.join(source_dir, image_file)
    
    # Create output filename based on job ID
    dest_filename = f"job-ref-{job_id:02d}.jpg"
    dest_path = os.path.join(dest_dir, dest_filename)
    
    if os.path.exists(source_path):
        if resize_image(source_path, dest_path):
            processed_count += 1
    else:
        print(f"✗ Source file not found: {image_file}")

print(f"\n{'='*60}")
print(f"Processing complete: {processed_count}/{len(image_mappings)} images processed")
print(f"Output directory: {dest_dir}")
print(f"{'='*60}")
