import html
import re
import json

with open("tmp/menubot_standardmenu4_b.js", "r", encoding="utf-8") as f:
    raw = f.read()

raw = raw.replace('\\/', '/')
raw = raw.replace('&nbsp;', ' ')
raw = raw.replace("\\'", "'")
raw = html.unescape(raw)

items_sections = re.findall(r'<div class="menu__item">(.*?)(?=<div class="menu__item">|$)', raw, flags=re.DOTALL)
print(f"Total menu__item sections: {len(items_sections)}")

data = []

for idx, sec in enumerate(items_sections):
    title_m = re.search(r'<h3 class="title title--small menu__type">(.*?)</h3>', sec)
    cat_title = title_m.group(1).strip() if title_m else "NO TITLE"
    
    boxes = re.findall(r'<div class="menu__box">(.*?)</div>', sec, flags=re.DOTALL)
    cat_items = []
    print(f"\nCategory {idx}: {cat_title} ({len(boxes)} items)")
    for b in boxes:
        name_m = re.search(r'<strong[^>]*>(.*?)</strong>', b)
        name = name_m.group(1).strip() if name_m else "UNKNOWN"
        
        # Look for weight after strong
        after_strong = b[name_m.end():] if name_m else b
        weight_m = re.search(r'^\s*([0-9]+(?:\s*-\s*[0-9]+)?(?:g|ml|ks)?)', after_strong)
        weight = weight_m.group(1).strip() if weight_m else ""
        if not (weight.endswith('g') or weight.endswith('ml') or weight.endswith('ks')):
            # check if numbers were followed by g
            w_check = re.search(r'([0-9]+(?:\s*-\s*[0-9]+)?\s*g)', after_strong[:30])
            if w_check:
                weight = w_check.group(1).replace(' ', '')
            else:
                weight = ""
        
        allergens_m = re.search(r'<small>(.*?)</small>', b)
        allergens_raw = allergens_m.group(1).strip() if allergens_m else ""
        # Clean allergens: e.g. /l/3/7/ -> [1, 3, 7] (note: sometimes 'l' instead of '1')
        allergens_cleaned = allergens_raw.replace('l', '1').replace('I', '1')
        allergen_nums = [n for n in re.findall(r'\d+', allergens_cleaned)]
        
        price_m = re.search(r'<p class="menu__price">(.*?)</p>', b)
        price_raw = price_m.group(1).strip() if price_m else ""
        price_num = re.search(r'\d+', price_raw.replace(' ', ''))
        price = f"{price_num.group(0)} CZK" if price_num else price_raw
        
        text_m = re.search(r'<br>(.*?)</p>', b, flags=re.DOTALL)
        desc = text_m.group(1).strip() if text_m else ""
        desc = re.sub(r'<[^>]+>', ' ', desc).strip()
        desc = re.sub(r'\s+', ' ', desc)
        
        cat_items.append({
            "name": name,
            "weight": weight,
            "allergens_raw": allergens_raw,
            "allergens": allergen_nums,
            "price": price,
            "description": desc
        })
        print(f"   - {name} | {weight} | {allergen_nums} | {price} | {desc}")

    data.append({
        "category": cat_title,
        "items": cat_items
    })

with open("tmp/parsed_en_food.json", "w", encoding="utf-8") as out:
    json.dump(data, out, indent=2, ensure_ascii=False)
