import json
from scripts.en_food import CAT_FOOD, ITEMS_FOOD, QUESTIONS_FOOD
from scripts.en_drinks import CAT_DRINKS, ITEMS_DRINKS, QUESTIONS_DRINKS
from scripts.en_wines import CAT_WINES, ITEMS_WINES, QUESTIONS_WINES
from scripts.en_spirits import CAT_SPIRITS, ITEMS_SPIRITS, QUESTIONS_SPIRITS
from scripts.en_supplement import ITEMS_SUPPLEMENT, QUESTIONS_SUPPLEMENT

cats_all = {**CAT_FOOD, **CAT_DRINKS, **CAT_WINES, **CAT_SPIRITS}
items_all = {**ITEMS_FOOD, **ITEMS_DRINKS, **ITEMS_WINES, **ITEMS_SPIRITS, **ITEMS_SUPPLEMENT}
questions_all = {**QUESTIONS_FOOD, **QUESTIONS_DRINKS, **QUESTIONS_WINES, **QUESTIONS_SPIRITS, **QUESTIONS_SUPPLEMENT}

with open('/tmp/full_menu_cz.json', 'r', encoding='utf-8') as f:
    cz_data = json.load(f)

en_categories = []

for cz_cat in cz_data:
    cat_id = cz_cat['id']
    cat_meta = cats_all[cat_id]
    
    en_cat = {
        "id": cat_id,
        "name": cat_meta["name"],
        "badge": cat_meta["badge"],
        "description": cat_meta["description"],
        "iconName": cz_cat.get("iconName", "Utensils"),
        "items": []
    }
    
    for cz_item in cz_cat.get("items", []):
        item_id = cz_item["id"]
        item_meta = items_all[item_id]
        
        en_item = {
            "id": item_id,
            "name": item_meta["name"],
            "weight": item_meta.get("weight") if item_meta.get("weight") is not None else cz_item.get("weight"),
            "price": item_meta.get("price") if item_meta.get("price") is not None else cz_item.get("price"),
            "allergens": cz_item.get("allergens", []),
            "description": item_meta["description"]
        }
        
        if "notes" in item_meta:
            en_item["notes"] = item_meta["notes"]
        elif "notes" in cz_item:
            en_item["notes"] = cz_item["notes"]
            
        en_item["questions"] = []
        for cz_q in cz_item.get("questions", []):
            q_id = cz_q["id"]
            q_meta = questions_all[q_id]
            
            en_q = {
                "id": q_id,
                "question": q_meta["question"],
                "correctAnswer": q_meta["correctAnswer"],
                "distractors": q_meta["distractors"],
                "explanation": q_meta["explanation"]
            }
            en_item["questions"].append(en_q)
            
        en_cat["items"].append(en_item)
        
    en_categories.append(en_cat)

ts_content = "import { MenuCategory } from './menuData';\n\n"
ts_content += "export const MENU_CATEGORIES_EN: MenuCategory[] = "
ts_content += json.dumps(en_categories, ensure_ascii=False, indent=2)
ts_content += ";\n"

with open('src/data/menuDataEn.ts', 'w', encoding='utf-8') as out:
    out.write(ts_content)

print(f"Successfully generated src/data/menuDataEn.ts with {len(en_categories)} categories, {sum(len(c['items']) for c in en_categories)} items and {sum(len(item['questions']) for c in en_categories for item in c['items'])} questions.")
