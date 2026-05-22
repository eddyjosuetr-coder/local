from PIL import Image
import sys

def remove_black_background(input_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        r, g, b, a = item
        max_val = max(r, g, b)
        
        if max_val < 15:
            newData.append((0, 0, 0, 0))
        elif max_val < 80:
            # Anti-aliasing for edges
            alpha = int((max_val - 15) / (80 - 15) * 255)
            # Boost the color brightness slightly so the dark edge doesn't look like a black halo
            boost = 255 / max(max_val, 1)
            new_r = min(255, int(r * boost * 0.5 + r * 0.5))
            new_g = min(255, int(g * boost * 0.5 + g * 0.5))
            new_b = min(255, int(b * boost * 0.5 + b * 0.5))
            newData.append((r, g, b, alpha))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(input_path, "PNG")

remove_black_background(r"C:\Users\USUARIO\Documents\local\laura-restaurant\src\assets\restaurant_logo.png")
print("Background removed successfully.")
