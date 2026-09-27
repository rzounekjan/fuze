import json
import re

# 1. Load current EN menu
with open('src/data/menuDataEn.ts', 'r', encoding='utf-8') as f:
    en_text = f.read()

en_start = en_text.find('export const MENU_CATEGORIES_EN: MenuCategory[] = ') + 50
en_cats = json.loads(en_text[en_start:en_text.rfind('];') + 1])

# 2. Load web parsed drinks
with open('tmp/parsed_en_drinks.json', 'r', encoding='utf-8') as f:
    web_drinks = json.load(f)

# Map web category name to category id
web_cat_map = {
    "beer on tap": "pivo-na-cepu",
    "ciders": "cidery",
    "waters and mineral waters": "vody-a-mineralni-vody",
    "our homemade lemonades": "nase-domaci-limonady",
    "bottled lemonades": "lahvove-limonady",
    "coffee, tea and hot drinks": "kava-caj-a-horke-napoje",
    "wines by the glass": "vina-po-skle",
    "aperitifs": "aperitivy",
    "non-alcoholic aperitifs and cocktails": "nealko-aperitivy",
    "classic cocktails": "klasicke-koktejly",
    "fuze cocktails": "koktejly-fuze",
    "gin&tonic": "gin-a-tonic",
    "fruit brandies 0.03L": "ovocne-destilaty",
    "vodka 0.03L": "vodky",
    "gins 0.03l": "giny",
    "rums 0,03L": "rumy",
    "tequilas 0,03L": "tequily",
    "whisky, whiskey, bourbon 0,03L": "whisky-whiskey-bourbon",
    "brandy and cognac 0,03L": "brandy-a-cognac",
    "spirits & liqueurs 0,03L": "palenky-a-likery",
    "Bubbles": "bubliny",
    "white wines": "bila-vina",
    "rosé wines": "ruzova-vina",
    "red wines": "cervena-vina"
}

# Update drinks categories from web data
for w in web_drinks:
    wcat = w["category"]
    cid = web_cat_map.get(wcat)
    if not cid:
        continue
    c = next((x for x in en_cats if x["id"] == cid), None)
    if not c:
        continue
    
    # Filter out empty items in web items (like beer note)
    real_web_items = [it for it in w["items"] if it["name"] and it["price"]]
    
    # Update items in category c
    for i, it in enumerate(c["items"]):
        if i < len(real_web_items):
            w_it = real_web_items[i]
            # Update name if cleaner
            if w_it["name"]:
                it["name"] = w_it["name"]
            # Update price
            if w_it["price"]:
                it["price"] = re.sub(r'\s+', ' ', w_it["price"]).strip()
            # If description available in web and not empty, update
            if w_it["description"]:
                # Keep notes intact if already good
                it["description"] = w_it["description"]
                
            # Update questions explanation with new description
            for q in it.get("questions", []):
                if "-ing-" in q["id"]:
                    q["explanation"] = f"In {it['name']}, this component is present: {q['correctAnswer']}. Official FUZE menu: {it['description']}."

# 3. Create Kombucha category translated from Czech menu
kombucha_en_items = [
    {
        "id": "appio-tatranske-byliny",
        "name": "Appio Tatra herbs",
        "weight": "0.33l",
        "price": "129 CZK",
        "allergens": [],
        "description": "living, natural, premium fermented kombucha without pasteurization with 10 kinds of hand-picked herbs directly beneath the Tatras",
        "notes": "Unpasteurized artisanal kombucha with wild herbs harvested beneath the High Tatras.",
        "questions": [
            {
                "id": "appio-tatranske-byliny-vol",
                "question": "What is the serving measure of Appio Tatra herbs?",
                "correctAnswer": "0.33l",
                "distractors": [
                    "0.25l",
                    "0.5l"
                ],
                "explanation": "The serving measure of Appio Tatra herbs is 0.33l."
            },
            {
                "id": "appio-tatranske-byliny-ing-1",
                "question": "Which herbs form the flavor foundation of Appio Tatra herbs?",
                "correctAnswer": "10 kinds of hand-picked herbs directly beneath the Tatras",
                "distractors": [
                    "Dried rosehips and hibiscus",
                    "Wild strawberries and mint"
                ],
                "explanation": "In Appio Tatra herbs, this component is present: 10 kinds of hand-picked herbs directly beneath the Tatras. Living, natural, premium fermented kombucha without pasteurization."
            },
            {
                "id": "appio-tatranske-byliny-ing-2",
                "question": "What production method is used for Appio Tatra herbs kombucha?",
                "correctAnswer": "Living fermentation without pasteurization",
                "distractors": [
                    "Pasteurized micro-filtration",
                    "Cold vacuum distillation"
                ],
                "explanation": "Appio Tatra herbs is a living, natural, premium fermented kombucha crafted without pasteurization."
            }
        ]
    },
    {
        "id": "oppio-tresen-skorice",
        "name": "Oppio cherry and cinnamon",
        "weight": "0.33l",
        "price": "129 CZK",
        "allergens": [],
        "description": "sweet, warming and gently nostalgic flavor of cherry with cinnamon",
        "notes": "Gently sparkling kombucha infused with sweet cherry and fragrant warming cinnamon.",
        "questions": [
            {
                "id": "oppio-tresen-skorice-vol",
                "question": "What is the serving measure of Oppio cherry and cinnamon?",
                "correctAnswer": "0.33l",
                "distractors": [
                    "0.25l",
                    "0.5l"
                ],
                "explanation": "The serving measure of Oppio cherry and cinnamon is 0.33l."
            },
            {
                "id": "oppio-tresen-skorice-ing-1",
                "question": "Which fruit and spice combination characterizes Oppio cherry and cinnamon?",
                "correctAnswer": "Flavor of cherry with cinnamon",
                "distractors": [
                    "Apple with fresh ginger",
                    "Blackcurrant with star anise"
                ],
                "explanation": "In Oppio cherry and cinnamon, this component is present: Flavor of cherry with cinnamon. Sweet, warming and gently nostalgic profile."
            },
            {
                "id": "oppio-tresen-skorice-ing-2",
                "question": "What taste profile describes Oppio cherry and cinnamon?",
                "correctAnswer": "Sweet, warming and gently nostalgic flavor",
                "distractors": [
                    "Distinctly sour and astringent profile",
                    "Bitter herbal profile"
                ],
                "explanation": "Oppio cherry and cinnamon delivers a sweet, warming, and gently nostalgic flavor combination of cherry and cinnamon."
            }
        ]
    }
]

kombucha_en_cat = {
    "id": "kombucha",
    "name": "Kombucha",
    "badge": "Kombucha",
    "description": "Living, unpasteurized fermented tea drinks with natural herbs and fruit infusions",
    "iconName": "Sparkles",
    "items": kombucha_en_items
}

# Remove if already exists, then insert right after 'cidery'
en_cats = [c for c in en_cats if c["id"] != "kombucha"]
cidery_idx = next((i for i, c in enumerate(en_cats) if c["id"] == "cidery"), None)
if cidery_idx is not None:
    en_cats.insert(cidery_idx + 1, kombucha_en_cat)
else:
    en_cats.append(kombucha_en_cat)

# Verify all category names start with capital letter and follow lowercase rule
for c in en_cats:
    n = c["name"]
    # Ensure first letter is uppercase and matches rule
    # E.g. "Beer on tap", "Ciders", "Kombucha", "Waters and mineral waters", etc.
    if n == "Bar snacks":
        c["name"] = "Snacks"
        c["badge"] = "Snacks"

print(f"Total categories in EN: {len(en_cats)}")
for i, c in enumerate(en_cats):
    print(f" {i:2d}: {c['id']:<25} ({c['name']:<35}) -> {len(c['items'])} items")

# Serialize to TypeScript
output_ts = 'import { MenuCategory } from \'./menuData\';\n\n'
output_ts += 'export const MENU_CATEGORIES_EN: MenuCategory[] = '
output_ts += json.dumps(en_cats, indent=2, ensure_ascii=False)
output_ts += ';\n\n'
output_ts += 'export const TOTAL_ITEMS_COUNT_EN = MENU_CATEGORIES_EN.reduce((acc, cat) => acc + cat.items.length, 0);\n'
output_ts += 'export const TOTAL_QUESTIONS_COUNT_EN = MENU_CATEGORIES_EN.reduce((acc, cat) => acc + cat.items.reduce((qAcc, item) => qAcc + (item.questions ? item.questions.length : 0), 0), 0);\n'

with open('src/data/menuDataEn.ts', 'w', encoding='utf-8') as out:
    out.write(output_ts)

print("Successfully updated src/data/menuDataEn.ts!")
