import json
import re

# 1. Load CZ menu categories to get category structure and item IDs
with open('src/data/menuData.ts', 'r', encoding='utf-8') as f:
    cz_text = f.read()

cz_start = cz_text.find('export const MENU_CATEGORIES: MenuCategory[] = ') + len('export const MENU_CATEGORIES: MenuCategory[] = ')
cz_end = cz_text.rfind('];') + 1
cz_cats = json.loads(cz_text[cz_start:cz_end])

# 2. Load existing EN categories to retrieve existing questions/descriptions for drinks & allergens
with open('src/data/menuDataEn.ts', 'r', encoding='utf-8') as f:
    en_text = f.read()

en_start = en_text.find('export const MENU_CATEGORIES_EN: MenuCategory[] = ') + len('export const MENU_CATEGORIES_EN: MenuCategory[] = ')
en_end = en_text.rfind('];') + 1
en_cats_existing = json.loads(en_text[en_start:en_end])

# Index existing EN items
en_existing_items = {}
for c in en_cats_existing:
    for it in c.get('items', []):
        en_existing_items[it['id']] = it

# Allergen info
ALLERGENS_EN = {
    '1': ('Cereals containing gluten', 'Allergen No. 1 – Cereals containing gluten', 'sourdough bread, flour, breadcrumbs, barley malt'),
    '2': ('Crustaceans and products thereof', 'Allergen No. 2 – Crustaceans and products thereof', 'prawns, shrimps, crabs, lobster'),
    '3': ('Eggs and products thereof', 'Allergen No. 3 – Eggs and products thereof', 'eggs, egg yolk, mayonnaise, pasta'),
    '4': ('Fish and products thereof', 'Allergen No. 4 – Fish and products thereof', 'trout, anchovies, fish sauce, worcestershire'),
    '5': ('Peanuts and products thereof', 'Allergen No. 5 – Peanuts and products thereof', 'peanuts, peanut oil, satay sauce'),
    '6': ('Soybeans and products thereof', 'Allergen No. 6 – Soybeans and products thereof', 'soy sauce, edamame, tofu, soy lecithin'),
    '7': ('Milk and products thereof (including lactose)', 'Allergen No. 7 – Milk and products thereof (including lactose)', 'butter, cheese, cream, curd, milk foam'),
    '8': ('Tree nuts and products thereof', 'Allergen No. 8 – Tree nuts and products thereof', 'walnuts, almonds, hazelnuts, cashews'),
    '9': ('Celery and products thereof', 'Allergen No. 9 – Celery and products thereof', 'celeriac in broth, celery stalk, celery seed'),
    '10': ('Mustard and products thereof', 'Allergen No. 10 – Mustard and products thereof', 'mustard seeds, dijon mustard, vinaigrette'),
    '11': ('Sesame seeds and products thereof', 'Allergen No. 11 – Sesame seeds and products thereof', 'sesame oil, tahini, sesame brioche'),
    '12': ('Sulphur dioxide and sulphites', 'Allergen No. 12 – Sulphur dioxide and sulphites', 'wine, champagne, dried fruit'),
    '13': ('Lupin and products thereof', 'Allergen No. 13 – Lupin and products thereof', 'lupin flour in baked goods'),
    '14': ('Molluscs and products thereof', 'Allergen No. 14 – Molluscs and products thereof', 'mussels, squid, octopus, oyster sauce'),
}

POOLS_EN = {
  'meat': ['Beef sirloin tip', 'Pork tenderloin', 'Veal leg', 'Duck breast', 'Deboned trout', 'Beef tenderloin', 'Duroc pork belly', 'Venison saddle', 'Lamb chop', 'Turkey breast'],
  'veggie': ['Cornichons', 'Marinated shallots', 'Roasted root vegetables', 'Sauerkraut', 'Pickled pearl onions', 'Grilled Padron peppers', 'Pickled chili peppers', 'Fermented dill pickles', 'Sun-dried tomatoes', 'Pickled ginger'],
  'herbs': ['Fresh chives', 'Lovage', 'Tarragon', 'Marjoram', 'Coriander / cilantro', 'Flat-leaf parsley', 'Crushed caraway', 'Ground cardamom', 'Fresh rosemary', 'Thyme'],
  'bread': ['Toasted sourdough on beef lard', 'Butter brioche', 'Sourdough bread', 'Potato straw', 'Mashed potatoes', 'Potato crisps', 'Homemade fries', 'Smoked fingerling potatoes', 'Beer biscuit', 'Crispy pork cracklings'],
  'sauce': ['Truffle sauce', 'Choron sauce', 'Our salsa verde', 'Sour cherry sauce', 'Apple BBQ glaze', 'Lovage mayonnaise', 'Spicy smoked mayonnaise', 'Cognac sauce', 'Dill sauce', 'Cheddar cheese'],
}

def get_allergen_distractors(code, item_allergens):
    all_codes = [str(i) for i in range(1, 15)]
    candidates = [c for c in all_codes if c != code and c not in item_allergens]
    seed = int(code)
    idx1 = seed % len(candidates)
    idx2 = (seed + 5) % len(candidates)
    if idx2 == idx1:
        idx2 = (idx1 + 1) % len(candidates)
    c1, c2 = candidates[idx1], candidates[idx2]
    return [ALLERGENS_EN[c1][1], ALLERGENS_EN[c2][1]]

def get_weight_distractors(weight):
    norm = weight.lower().replace(' ', '')
    if '90g' in norm:
        return ['100 g', '150 g']
    if '100g' in norm:
        return ['150 g', '200 g']
    if '180g' in norm:
        return ['150 g', '200 g']
    if '200g' in norm:
        return ['150 g', '250 g']
    if '250g' in norm:
        return ['200 g', '300 g']
    if '300g' in norm:
        return ['250 g', '350 g']
    if '500g' in norm:
        return ['400 g', '600 g']
    if '700g' in norm:
        return ['500 g', '800 g']
    if '0.03' in norm or '0,03' in norm:
        return ['0.02 L', '0.04 L']
    if '0.04' in norm or '0,04' in norm:
        return ['0.03 L', '0.05 L']
    if '0.1' in norm or '0,1' in norm:
        return ['0.15 L', '0.2 L']
    if '0.15' in norm or '0,15' in norm:
        return ['0.1 L', '0.2 L']
    if '0.2' in norm or '0,2' in norm:
        return ['0.15 L', '0.3 L']
    if '0.25' in norm or '0,25' in norm:
        return ['0.3 L', '0.5 L']
    if '0.3' in norm or '0,3' in norm:
        return ['0.2 L', '0.4 L']
    if '0.33' in norm or '0,33' in norm:
        return ['0.25 L', '0.5 L']
    if '0.4' in norm or '0,4' in norm:
        return ['0.3 L', '0.5 L']
    if '0.5' in norm or '0,5' in norm:
        return ['0.3 L', '0.4 L']
    if '0.75' in norm or '0,75' in norm:
        return ['0.5 L', '1.0 L']
    if '1l' in norm or '1 l' in norm:
        return ['0.5 L', '0.75 L']
    return ['100 g', '200 g']

def get_ingredient_prompt_en(name, ing):
    ing_lower = ing.lower()
    if 'garlic' in ing_lower:
        return f"In what culinary form is garlic included in {name}?"
    if any(k in ing_lower for k in ['sourdough', 'toast', 'brioche', 'bread', 'potato', 'fries', 'straw', 'cracker', 'biscuit', 'soil', 'crumble']):
        return f"Which bread, side, or crispy garnish accompanies {name}?"
    if any(k in ing_lower for k in ['cornichon', 'pickle', 'shallot', 'cabbage', 'slaw', 'relish']):
        return f"Which pickled or prepared vegetable is included in {name}?"
    if any(k in ing_lower for k in ['chive', 'herb', 'tarragon', 'lovage', 'marjoram', 'coriander', 'caraway', 'cardamom', 'parsley']):
        return f"Which fresh herb or spice seasoning finishes {name}?"
    if any(k in ing_lower for k in ['sauce', 'salsa', 'mayonnaise', 'jus', 'reduction', 'dressing', 'ketchup', 'glaze']):
        return f"Which sauce, dressing, or glaze accompanies {name}?"
    if any(k in ing_lower for k in ['cheese', 'butter', 'cheddar', 'parmesan', 'blue cheese', 'raclette', 'curd']):
        return f"Which cheese or dairy component is included in {name}?"
    if any(k in ing_lower for k in ['beef', 'pork', 'chicken', 'duck', 'trout', 'sirloin', 'steak', 'meat', 'shrimp', 'veal', 'foie gras', 'sausage', 'pastrami', 'knuckle', 'ribs']):
        return f"Which meat or seafood ingredient forms the base of {name}?"
    if any(k in ing_lower for k in ['vegetable', 'tomato', 'grape', 'celery', 'apple', 'peas', 'mushroom', 'morel', 'plum', 'chestnut']):
        return f"Which vegetable, fruit, or mushroom component is included in {name}?"
    return f"Which ingredient is part of {name}?"

def select_ingredient_distractors(ing, all_ings, index):
    ing_lower = ing.lower()
    if any(k in ing_lower for k in ['toast', 'bread', 'brioche', 'potato', 'fries', 'straw', 'cracker', 'crumble', 'mash']):
        cat = 'bread'
    elif any(k in ing_lower for k in ['pickle', 'shallot', 'vegetable', 'onion', 'apple', 'cabbage', 'tomato', 'grape', 'celery', 'mushroom', 'peas', 'cornichon']):
        cat = 'veggie'
    elif any(k in ing_lower for k in ['chive', 'herb', 'tarragon', 'lovage', 'pepper', 'garlic', 'parsley', 'cardamom', 'caraway']):
        cat = 'herbs'
    elif any(k in ing_lower for k in ['sauce', 'dressing', 'mayo', 'mayonnaise', 'cheese', 'butter', 'glaze', 'salsa', 'cheddar', 'parmesan']):
        cat = 'sauce'
    else:
        cat = 'meat'

    pool = POOLS_EN[cat]
    all_lower = [s.lower() for s in all_ings]
    available = [c for c in pool if c.lower() != ing_lower and not any(c.lower() in x or x in c.lower() for x in all_lower)]
    cand_list = available if len(available) >= 2 else pool
    idx1 = (index * 2 + 1) % len(cand_list)
    idx2 = (index * 2 + 2) % len(cand_list)
    if idx2 == idx1:
        idx2 = (idx1 + 1) % len(cand_list)
    return [cand_list[idx1], cand_list[idx2]]

def format_answer(s):
    s = s.strip()
    s = re.sub(r'^(and|with)\s+', '', s, flags=re.I)
    return s[0].upper() + s[1:] if s else s

def build_questions_for_en_item(item):
    questions = []
    
    # 1. Weight / serving measure question
    weight = item.get('weight')
    if weight:
        is_weight = 'g' in weight and 'l' not in weight
        is_piece = 'ks' in weight or 'pc' in weight
        
        prompt = f"What is the portion weight of {item['name']}?" if is_weight else (
            f"What is the portion size of {item['name']}?" if is_piece else f"What is the serving measure of {item['name']}?"
        )
        dist = get_weight_distractors(weight)
        questions.append({
            "id": f"{item['id']}-vol",
            "question": prompt,
            "correctAnswer": weight,
            "distractors": dist,
            "explanation": f"The portion size / weight of {item['name']} is {weight}."
        })

    # 2. Ingredient questions
    desc = item.get('description', '')
    parts = [p.strip() for p in re.split(r'[,;]|\band\b', desc) if p.strip() and len(p.strip()) > 2]
    filtered_parts = []
    for p in parts:
        clean = re.sub(r'\(.*?\)', '', p).strip()
        if clean and len(clean) > 2 and not clean.startswith('serves') and not clean.startswith('offered'):
            filtered_parts.append(clean)

    for i, ing in enumerate(filtered_parts[:8]):
        ans = format_answer(ing)
        dist = select_ingredient_distractors(ing, filtered_parts, i)
        prompt = get_ingredient_prompt_en(item['name'], ing)
        questions.append({
            "id": f"{item['id']}-ing-{i+1}",
            "question": prompt,
            "correctAnswer": ans,
            "distractors": dist,
            "explanation": f"In {item['name']}, this component is present: {ans}. Full recipe ingredients: {desc}."
        })

    # 3. Allergen questions
    allergens = item.get('allergens', [])
    for code in allergens:
        if code in ALLERGENS_EN:
            info = ALLERGENS_EN[code]
            dist = get_allergen_distractors(code, allergens)
            all_list = ', '.join([ALLERGENS_EN[c][0] for c in allergens if c in ALLERGENS_EN])
            questions.append({
                "id": f"{item['id']}-allergen-{code}",
                "question": f"Which of the following allergens is present in {item['name']}?",
                "correctAnswer": info[1],
                "distractors": dist,
                "explanation": f"{item['name']} contains {info[1]} ({info[2]}). All allergens present in this item: {all_list}."
            })
            
    item['questions'] = questions

# English category definitions (exact titles starting with capital letter, then lowercase)
CATEGORIES_EN_CONFIG = [
    ("predkrmy", "Appetizers and small dishes", "Author appetizers highlighting aged ingredients, local craft, and beer pairing", "Utensils"),
    ("chutovky", "Bar snacks", "Savory finger foods and quick bar bites perfect with fresh draft beer", "Cookie"),
    ("polevky", "Soups", "Rich traditional broths and delicate creamy soups prepared from scratch", "Soup"),
    ("salaty", "Salads", "Fresh, vibrant salads with house dressings and premium additions", "Salad"),
    ("sporak", "From the stove and oven", "Hearty traditional mains, slow-braised cuts, and rich sauces", "Flame"),
    ("gril", "From the grill and wood-fired oven", "Prime cuts, burgers, and smoked meats charred over open fire and embers", "Flame"),
    ("teple-omacky", "Hot sauces", "Warm artisanal sauces, rich pepper reductions, and creamy emulsions", "Soup"),
    ("studene-omacky", "Cold sauces", "House mayonnaise, fresh herb salsas, and flavorful dips", "Droplet"),
    ("prilohy", "Side dishes", "Freshly made potato preparations, seasonal vegetables, and artisan breads", "Utensils"),
    ("dezerty", "Desserts", "Creative sweet finishes celebrating Czech flavors, beer, and fine chocolate", "Cake"),
    ("pro-deti", "For children", "Kid-friendly portions and timeless favorites prepared with quality ingredients", "Smile"),
    ("pivo-na-cepu", "Beer on tap", "Fresh tank Pilsner Urquell, Kozel, and rotating craft draft beers", "Beer"),
    ("cidery", "Ciders", "Artisanal fermented apple and fruit ciders", "Sparkles"),
    ("vody-a-mineralni-vody", "Waters and mineral waters", "Still, sparkling, and natural mineral waters", "GlassWater"),
    ("nase-domaci-limonady", "Our homemade lemonades", "Handcrafted sodas made with fresh fruits, purees, and herbs", "CupSoda"),
    ("lahvove-limonady", "Bottled lemonades", "Premium bottled tonics, sodas, and refreshing soft drinks", "CupSoda"),
    ("kava-caj-a-horke-napoje", "Coffee, tea and hot drinks", "Nordbeans specialty coffee, loose-leaf teas, and warming seasonal drinks", "Coffee"),
    ("vina-po-skle", "Wines by the glass", "Carefully curated selection of Czech, Austrian, and world wines by the glass", "Wine"),
    ("aperitivy", "Aperitifs", "Classic and sparkling aperitifs to stimulate the appetite", "Martini"),
    ("nealko-aperitivy", "Non-alcoholic aperitifs and cocktails", "Zero-proof aperitifs and signature alcohol-free mixed drinks", "Martini"),
    ("klasicke-koktejly", "Classic cocktails", "Time-honored bartending classics mixed to exact standard recipes", "Martini"),
    ("koktejly-fuze", "Fuze cocktails", "Signature in-house craft cocktails blending modern mixology with beer & spirits", "Martini"),
    ("gin-a-tonic", "Gin & tonic", "Curated pairings of craft gins and premium matching tonics", "GlassWater"),
    ("ovocne-destilaty", "Fruit brandies 0.03l", "Traditional single-fruit distillates from acclaimed Czech master distillers", "Flame"),
    ("vodky", "Vodka 0.03l", "Premium grain and artisanal vodkas served in 0.03L measures", "Flame"),
    ("giny", "Gins 0.03l", "Exceptional artisanal and international gins served neat in 0.03L measures", "Flame"),
    ("rumy", "Rums 0.03l", "Aged Caribbean, Central American, and Cuban rums served in 0.03L measures", "Flame"),
    ("tequily", "Tequilas 0.03l", "100% blue agave tequilas and handcrafted artisanal editions in 0.03L measures", "Flame"),
    ("whisky-whiskey-bourbon", "Whisky, whiskey, bourbon 0.03l", "Scotch single malts, Irish whiskeys, Czech grain whisky, and Kentucky bourbon", "Flame"),
    ("brandy-a-cognac", "Brandy & cognac 0.03l", "Noble aged brandies and French cognacs in 0.03L measures", "Flame"),
    ("palenky-a-likery", "Spirits & liqueurs 0.03l", "Czech herbal liqueurs, absinthe, nut spirits, and traditional digestifs", "Flame"),
    ("bubliny", "Bubbles", "Sparkling wines, crémants, and champagnes by the bottle", "Sparkles"),
    ("bila-vina", "White wines", "Finest white wines from Moravia, Austria, Germany, and the New World", "Wine"),
    ("ruzova-vina", "Rosé wines", "Crisp and fruity rosé wines", "Wine"),
    ("cervena-vina", "Red wines", "Full-bodied and elegant red wines from Czech and international terroirs", "Wine"),
    ("alergeny", "Allergens (1–14)", "Official EU food allergens list, ingredients, and risk management", "ShieldAlert"),
]

# Food items with exact English translations from standardmenu4_b.js / https://www.fuzepraha.cz/en/menu/food-menu/
FOOD_ITEMS_EN = {
    "predkrmy": [
        {
            "id": "tatarak",
            "name": "Sliced beef tartare",
            "weight": "90g",
            "price": "239 CZK",
            "allergens": ["1", "3", "7"],
            "description": "from tip of the sirloin, tiny pickles, marinated shallots, parsley leaf, toasted sourdough on beef lard, confit garlic, potato straw",
            "notes": "Hand-sliced prime beef tartare served with crispy potato straw and sourdough bread toasted on beef tallow."
        },
        {
            "id": "klobasa-smrze",
            "name": "Our veal sausage with morels",
            "weight": "100g",
            "price": "219 CZK",
            "allergens": ["1", "3", "7", "8", "10"],
            "description": "chestnuts, dried plums, truffle sauce, beer crumble",
            "notes": "House-made artisanal veal sausage with morels, chestnuts, dried plums, and rich truffle sauce."
        },
        {
            "id": "foie-gras",
            "name": "Foie gras pâté",
            "weight": "100g",
            "price": "315 CZK",
            "allergens": ["1", "3", "7"],
            "description": "in Kasteel Rouge beer jelly, cherry sauce, toasted butter brioche",
            "notes": "Delicate duck foie gras pâté glazed with Kasteel Rouge beer jelly, accompanied by sour cherry sauce and warm brioche."
        },
        {
            "id": "veprovy-bok-platky",
            "name": "Thin slices of pork belly",
            "weight": "100g",
            "price": "169 CZK",
            "allergens": ["10"],
            "description": "hop-smoked, crispy pork cracklings, over roasted apples and horseradish, fried peas",
            "notes": "Tender hop-smoked pork belly slices served with savory cracklings and sweet-tangy roasted apple horseradish."
        },
        {
            "id": "kureci-krokety",
            "name": "Fried chicken croquettes",
            "weight": "100g",
            "price": "175 CZK",
            "allergens": ["1", "3", "7", "14"],
            "description": "with cheddar, our salsa verde, lovage mayonnaise",
            "notes": "Crispy fried chicken croquettes with melted cheddar, paired with herbal lovage mayo and zesty salsa verde."
        },
        {
            "id": "olomoucke-tvaruzky",
            "name": "Olomouc curd cheese spread",
            "price": "199 CZK",
            "allergens": ["1", "3", "7", "10"],
            "description": "with onion, paprika-mustard seed mayonnaise, on toasted sourdough, horseradish, pickled vegetables",
            "notes": "Traditional Czech pungent Olomouc curd cheese spread with paprika-mustard mayonnaise on toasted artisan bread."
        }
    ],
    "chutovky": [
        {
            "id": "lanyzovy-popcorn",
            "name": "Truffle popcorn",
            "price": "139 CZK",
            "allergens": ["7"],
            "description": "with parmesan",
            "notes": "Freshly popped gourmet corn tossed with aromatic truffle essence and grated aged parmesan."
        },
        {
            "id": "domaci-bramburky",
            "name": "Homemade potatoes",
            "price": "125 CZK",
            "allergens": ["7"],
            "description": "spicy smoked mayonnaise",
            "notes": "Crispy house-fried potato crisps seasoned lightly and served with smoky spicy mayonnaise."
        }
    ],
    "polevky": [
        {
            "id": "hovezi-consomme",
            "name": "Beef consommé",
            "price": "109 CZK",
            "allergens": ["9"],
            "description": "delicate liver dumpling, root vegetables",
            "notes": "Rich clear double beef broth served with traditional delicate liver dumpling and sliced root vegetables."
        },
        {
            "id": "humrovy-krem",
            "name": "Creamy lobster soup",
            "price": "269 CZK",
            "allergens": ["1", "2", "3", "7", "9"],
            "description": "with saffron and brandy, topped with puff pastry",
            "notes": "Luxurious velvety lobster bisque infused with saffron and brandy, baked under a flaky golden puff pastry lid."
        }
    ],
    "salaty": [
        {
            "id": "caesar-salat",
            "name": "Caesar salad",
            "price": "289 CZK",
            "allergens": ["1", "3", "4", "7", "10"],
            "description": "with grilled chicken breast, parmesan, croutons",
            "notes": "Crisp romaine salad with succulent grilled chicken breast, shaved parmesan, garlic croutons, and rich anchovy dressing."
        },
        {
            "id": "waldorf-salat",
            "name": "Waldorf salad",
            "price": "245 CZK",
            "allergens": ["8", "9", "10"],
            "description": "with apples, celery, grapes, walnut mayonnaise dressing",
            "notes": "Refreshing classic salad combining crisp apples, celery stalks, juicy grapes, and roasted walnuts in creamy mayonnaise."
        }
    ],
    "sporak": [
        {
            "id": "pecene-koleno",
            "name": "Roasted pork knuckle",
            "price": "459 CZK",
            "allergens": ["1", "10"],
            "description": "mustard, grated horseradish, cabbage salad with horseradish (offered daily until sold out)",
            "notes": "Slow-roasted tender pork knuckle with crispy skin, served with sharp mustard, freshly grated horseradish, and cabbage slaw."
        },
        {
            "id": "rizek-duroc",
            "name": "Thick-cut pork schnitzel",
            "weight": "200g",
            "price": "309 CZK",
            "allergens": ["1", "3", "4", "7", "10"],
            "description": "from Duroc pork, fines herbes sauce, potato mash, crispy potato crisps",
            "notes": "Juicy thick-cut schnitzel from premium Duroc pork, accompanied by smooth buttery mash and herb sauce."
        },
        {
            "id": "veprove-zebro",
            "name": "Pork ribs",
            "weight": "500g",
            "price": "379 CZK",
            "allergens": ["1", "3", "6", "7", "10"],
            "description": "marinated and slow-roasted in our beer, candied bacon, pearl onions, apple BBQ glaze, cabbage salad with horseradish, toasted garlic brioche",
            "notes": "Mouthwatering beer-braised pork ribs glazed in sweet apple BBQ, with crispy candied bacon and warm garlic brioche."
        },
        {
            "id": "hovezi-koprovka",
            "name": "Braised beef with dill sauce",
            "weight": "200g",
            "price": "345 CZK",
            "allergens": ["1", "3", "7"],
            "description": "served with soft-boiled egg, baby potatoes, dill oil",
            "notes": "Classic Czech creamy dill sauce with tender braised beef, roasted baby potatoes, and fragrant herb dill oil."
        },
        {
            "id": "testoviny-kure",
            "name": "Pasta filled with delicate chicken mixture",
            "price": "299 CZK",
            "allergens": ["1", "3", "7"],
            "description": "baked in porcini sauce, served with grilled oyster mushrooms, herb oil",
            "notes": "Artisanal stuffed pasta pillows filled with chicken mousse, baked in earthy porcini mushroom cream."
        },
        {
            "id": "shrimp-roll",
            "name": "Shrimp roll 12 pcs Argentine red shrimp",
            "price": "666 CZK",
            "allergens": ["1", "2", "3", "5", "7", "9", "10"],
            "description": "in a butter brioche, cocktail sauce with cognac, salad greens, our fries, Choron sauce",
            "notes": "Decadent toasted butter brioche loaded with 12 Argentine red shrimp, cognac cocktail sauce, and house fries."
        },
        {
            "id": "pstruh-filatka",
            "name": "Fillet of deboned rainbow trout",
            "weight": "180g",
            "price": "399 CZK",
            "allergens": ["3", "4", "7"],
            "description": "pan-seared in butter, choron sauce, roasted tomatoes, herb salad, roasted winter vegetables",
            "notes": "Fresh trout fillet pan-fried in brown butter, complemented by rich Choron sauce and roasted winter vegetables."
        },
        {
            "id": "svickova-wellington",
            "name": "Beef Wellington",
            "weight": "200g",
            "price": "675 CZK",
            "allergens": ["1", "3", "7", "10"],
            "description": "tenderloin wrapped in mushroom and duck liver duxelles, seasoned with truffle, veal demi-glace, smoked potatoes",
            "notes": "Prime beef tenderloin en croûte with duck liver duxelles and truffle, finished with glossy veal demi-glace."
        },
        {
            "id": "hovezi-burger-gourmet",
            "name": "Beef burger",
            "weight": "200g",
            "price": "449 CZK",
            "allergens": ["1", "3", "7"],
            "description": "with smoked blue cheese, duck foie gras, roasted onion mayonnaise, potato straw, small homemade fries",
            "notes": "Gourmet beef patty topped with decadent duck foie gras, melted smoked blue cheese, and potato straw."
        },
        {
            "id": "thors-hammer",
            "name": "Thor`s Hammer beef knuckle",
            "weight": "700g",
            "price": "1490 CZK",
            "allergens": ["1", "11"],
            "description": "slow-braised in our tandoori, Kasteel Rouge sauce, charred shallots, toasted garlic brioche, our salsa verde, smoked potatoes, cabbage salad with horseradish (serves 2 to 4 people)",
            "notes": "Monumental bone-in beef shank braised in tandoori with rich Kasteel Rouge beer glaze, ideal for sharing."
        }
    ],
    "gril": [
        {
            "id": "hovezi-kvetova-spicka",
            "name": "US Prime beef sirloin",
            "weight": "250g",
            "price": "519 CZK",
            "allergens": [],
            "description": "roasted Padrón peppers",
            "notes": "Prime USDA sirloin cap grilled over hardwood to perfection, served with blistered Spanish Padrón peppers."
        },
        {
            "id": "hovezi-vysoky-rostenec",
            "name": "US Prime beef ribeye",
            "weight": "250g",
            "price": "985 CZK",
            "allergens": [],
            "description": "roasted Padrón peppers",
            "notes": "Magnificently marbled US Prime ribeye steak with deep wood-fired char, paired with blistered Padrón peppers."
        },
        {
            "id": "hovezi-burger-gril",
            "name": "US Prime beef burger",
            "weight": "200g",
            "price": "369 CZK",
            "allergens": ["1", "3", "7", "10"],
            "description": "grilled bacon, cheddar, onion marmalade, spicy mayonnaise",
            "notes": "Wood-grilled US Prime beef burger with smoky bacon, melted cheddar, sweet caramelized onion, and spicy mayo."
        },
        {
            "id": "grilovany-veprovy-bok",
            "name": "Grilled pork belly",
            "weight": "300g",
            "price": "299 CZK",
            "allergens": ["2", "4", "6"],
            "description": "caramelized yuzu sauce, grilled spring onion, chimichurri sauce",
            "notes": "Succulent pork belly grilled over embers, glazed with tart-sweet yuzu citrus and topped with fresh chimichurri."
        },
        {
            "id": "hovezi-pastrami",
            "name": "Our pastrami from US Prime beef ribs",
            "weight": "200g",
            "price": "455 CZK",
            "allergens": ["1", "3", "7", "10"],
            "description": "raclette cheese, cabbage salad with horseradish, in toasted sourdough bread, pickled vegetables",
            "notes": "House-cured and smoked US Prime beef rib pastrami layered with melted alpine raclette on rustic sourdough."
        },
        {
            "id": "pecene-kure-pec",
            "name": "½ Roasted chicken in our tandoori",
            "price": "279 CZK",
            "allergens": ["1", "4", "7", "10"],
            "description": "BBQ version: brushed with spicy barbecue sauce, crispy onions, and herb butter (1, 7); TRUFFLE version: drizzled with truffle butter, potato crisps, chives (7); CAESAR version: brushed with anchovy, parmesan, and mustard sauce, served with fried capers (4, 7, 10)",
            "notes": "Half chicken roasted in authentic clay tandoori oven, selectable in BBQ, Truffle, or Caesar seasoning style."
        }
    ],
    "teple-omacky": [
        {
            "id": "peprova-omacka",
            "name": "Pepper sauce",
            "price": "69 CZK",
            "allergens": ["7", "9", "10"],
            "description": "creamy peppercorn sauce with cracked green and black pepper",
            "notes": "Classic rich peppercorn cream sauce with deep savory notes."
        },
        {
            "id": "choron-omacka",
            "name": "Choron sauce",
            "price": "69 CZK",
            "allergens": ["3", "10"],
            "description": "warm béarnaise with tomato reduction and tarragon",
            "notes": "Buttery emulsified sauce with sweet tomato reduction and aromatic fresh herbs."
        },
        {
            "id": "fines-herbes-omacka",
            "name": "Our fines herbes sauce",
            "price": "69 CZK",
            "allergens": ["4", "9", "10"],
            "description": "delicate aromatic fines herbes sauce",
            "notes": "Velvety warm herb sauce featuring chervil, chives, parsley, and tarragon."
        },
        {
            "id": "lanyzova-omacka",
            "name": "Truffle sauce",
            "price": "79 CZK",
            "allergens": ["7", "10"],
            "description": "rich creamy truffle sauce",
            "notes": "Intensely fragrant truffle sauce finished with cream and demi-glace."
        }
    ],
    "studene-omacky": [
        {
            "id": "pikantni-uzena-majo",
            "name": "Spicy smoked mayonnaise",
            "price": "59 CZK",
            "allergens": ["3", "7"],
            "description": "spicy smoked mayonnaise with smoked paprika and chipotle",
            "notes": "Creamy house mayonnaise infused with wood smoke and chili warmth."
        },
        {
            "id": "nase-salsa-verde",
            "name": "Our salsa verde",
            "price": "59 CZK",
            "allergens": [],
            "description": "fresh herb salsa verde with capers and olive oil",
            "notes": "Zesty green sauce packed with parsley, mint, capers, and extra virgin olive oil."
        },
        {
            "id": "okurkovy-relish",
            "name": "Cucumber relish",
            "price": "65 CZK",
            "allergens": [],
            "description": "sweet and tangy cucumber relish with shallots and mustard seeds",
            "notes": "Crunchy pickled cucumber condiment balancing sweetness and acidity."
        },
        {
            "id": "kecup",
            "name": "Ketchup",
            "price": "40 CZK",
            "allergens": [],
            "description": "classic tomato ketchup",
            "notes": "Rich slow-simmered tomato condiment."
        }
    ],
    "prilohy": [
        {
            "id": "nase-hranolky",
            "name": "Our fries",
            "price": "89 CZK",
            "allergens": [],
            "description": "crispy golden homemade fries",
            "notes": "Double-fried hand-cut potatoes with sea salt."
        },
        {
            "id": "hranolky-lanyz",
            "name": "Fries with truffle mayonnaise and Red Leicester cheese",
            "price": "149 CZK",
            "allergens": ["3", "7"],
            "description": "crispy fries with truffle mayonnaise, grated Red Leicester cheese",
            "notes": "Indulgent loaded fries tossed in truffle mayo and melted English Red Leicester."
        },
        {
            "id": "bramborova-kase",
            "name": "Potato mash",
            "price": "89 CZK",
            "allergens": ["7"],
            "description": "with butter, potato crisps",
            "notes": "Silky smooth potato mash enriched with farm butter and crunchy crisps."
        },
        {
            "id": "uzene-brambory",
            "name": "Smoked potatoes",
            "price": "99 CZK",
            "allergens": ["7"],
            "description": "with butter",
            "notes": "Baby potatoes gently hot-smoked and tossed in melted butter."
        },
        {
            "id": "salat-listy",
            "name": "Salad of torn lettuce leaves",
            "price": "129 CZK",
            "allergens": ["10"],
            "description": "with green tomatoes, beer vinaigrette",
            "notes": "Fresh garden leaf salad dressed in craft beer vinaigrette and pickled green tomatoes."
        },
        {
            "id": "pecena-zimni-zelenina",
            "name": "Roasted winter vegetables",
            "price": "129 CZK",
            "allergens": ["9"],
            "description": "with cardamom, maple syrup",
            "notes": "Oven-roasted seasonal roots glazed with pure maple syrup and ground cardamom."
        },
        {
            "id": "zelny-salat",
            "name": "Cabbage salad with horseradish",
            "price": "99 CZK",
            "allergens": ["3", "7", "11"],
            "description": "with raisins, wine vinegar, mayonnaise",
            "notes": "Crisp shredded cabbage slaw with pungent fresh horseradish and sweet raisins."
        },
        {
            "id": "cesnekova-brioska",
            "name": "Toasted garlic brioche",
            "price": "79 CZK",
            "allergens": ["1", "3", "7"],
            "description": "toasted butter brioche with confit garlic and herbs",
            "notes": "Thick-sliced brioche griddled with aromatic garlic butter."
        },
        {
            "id": "kvaskovy-chleb",
            "name": "Sourdough bread",
            "price": "45 CZK",
            "allergens": ["1", "3", "7"],
            "description": "crusty artisanal sourdough bread",
            "notes": "Freshly sliced traditional sourdough loaf with crunchy crust and open crumb."
        }
    ],
    "dezerty": [
        {
            "id": "dortiky-ganache",
            "name": "Ganache cakes",
            "price": "209 CZK",
            "allergens": ["1", "3", "7", "8"],
            "description": "in the shape of hop cones made from Valrhona Dulcey chocolate, chocolate soil, sour cherry sauce",
            "notes": "Signature dessert sculpted as hop cones in caramelized blonde chocolate over edible soil and tart cherry coulis."
        },
        {
            "id": "karamelovy-trhanec",
            "name": "Caramel shred pancake",
            "price": "169 CZK",
            "allergens": ["1", "3", "7"],
            "description": "with salted caramel, crunchy praline, baked plums, eggnog ice cream",
            "notes": "Fluffy caramelized Kaiserschmarrn accompanied by spiced plums and rich eggnog ice cream."
        },
        {
            "id": "pivni-zmrzlina",
            "name": "Beer ice cream",
            "price": "139 CZK",
            "allergens": ["1", "3", "7"],
            "description": "with malt crumble, whipped cream",
            "notes": "Unique artisanal ice cream made with Fuze craft beer, toasted malt crunch, and fresh whipped cream."
        }
    ],
    "pro-deti": [
        {
            "id": "detsky-kureci-rizek",
            "name": "Chicken schnitzel",
            "weight": "100g",
            "price": "125 CZK",
            "allergens": ["1", "3", "7"],
            "description": "with mashed potatoes",
            "notes": "Tender chicken breast schnitzel breaded and fried golden, served with creamy potato mash."
        },
        {
            "id": "cheeseburger",
            "name": "Mini cheeseburger",
            "weight": "100g",
            "price": "129 CZK",
            "allergens": ["1", "3", "7", "10"],
            "description": "with cheddar, lettuce, tomato, ketchup, homemade fries",
            "notes": "Kid-friendly beef burger with melted mild cheddar, fresh veggies, and golden fries."
        },
        {
            "id": "krupicova-kase",
            "name": "Semolina porridge",
            "price": "119 CZK",
            "allergens": ["1", "7"],
            "description": "made from espuma with cocoa and butter, fruit compote",
            "notes": "Light and airy semolina froth dusted with premium dark cocoa and golden melted butter."
        }
    ]
}

# New drink translations when missing in older EN menu
NEW_DRINKS_EN = {
    "fuzero": {
        "name": "FUZEro",
        "weight": "0.4l",
        "price": "69 CZK",
        "allergens": ["1"],
        "description": "our full-flavored non-alcoholic beer with delicate hop aroma",
        "notes": "Refreshing zero-alcohol craft brew on draft."
    },
    "sklenice-filtrovane-vody": {
        "name": "Glass of filtered water",
        "weight": "0.3l",
        "price": "39 CZK",
        "allergens": [],
        "description": "pure filtered water, still or sparkling",
        "notes": "Chilled micro-filtered fresh water."
    },
    "sklo-charmat-palava": {
        "name": "Charmat de Vinselekt Pálava",
        "weight": "0.1l",
        "price": "115 CZK",
        "allergens": ["12"],
        "description": "sparkling wine, Vinselekt Michlovský, Moravia",
        "notes": "Aromatic sparkling wine by the glass."
    },
    "sklo-cremant-vinselekt": {
        "name": "Crémant de Vinselekt",
        "weight": "0.1l",
        "price": "135 CZK",
        "allergens": ["12"],
        "description": "Pinot, Chardonnay, traditional method extra brut, Vinselekt Michlovský",
        "notes": "Refined bottle-fermented traditional sparkler."
    },
    "sklo-cuvee-bile": {
        "name": "White Cuvée",
        "weight": "0.15l",
        "price": "105 CZK",
        "allergens": ["12"],
        "description": "fresh crisp white wine cuvée",
        "notes": "Pleasant everyday white blend."
    },
    "sklo-chardonnay": {
        "name": "Chardonnay – Adulation",
        "weight": "0.15l",
        "price": "145 CZK",
        "allergens": ["12"],
        "description": "California Chardonnay with vanilla oak notes",
        "notes": "Full-bodied California white with tropical fruits and subtle oak."
    },
    "sklo-modry-portugal": {
        "name": "Modrý Portugal – Kolby",
        "weight": "0.15l",
        "price": "115 CZK",
        "allergens": ["12"],
        "description": "light elegant red wine with red berry notes, Kolby",
        "notes": "Smooth approachable Moravian red."
    },
    "sklo-cuvee-cervene": {
        "name": "Red Cuvée – Kraus",
        "weight": "0.15l",
        "price": "115 CZK",
        "allergens": ["12"],
        "description": "balanced harmonious red blend, Kraus winery",
        "notes": "Velvety dry red cuvée from Mělník."
    },
    "sklo-pinot-noir": {
        "name": "Pinot Noir – Adulation",
        "weight": "0.15l",
        "price": "155 CZK",
        "allergens": ["12"],
        "description": "ripe cherries and subtle spice, California Pinot Noir",
        "notes": "Expressive California red wine."
    },
    "gin-tanqueray": {
        "name": "Tanqueray London Dry Gin",
        "weight": "0.03l",
        "price": "85 CZK",
        "allergens": [],
        "description": "classic London Dry gin with distinct juniper and citrus notes",
        "notes": "Iconic four-botanical distilled gin."
    },
    "gin-hendricks": {
        "name": "Hendrick`s Gin",
        "weight": "0.03l",
        "price": "105 CZK",
        "allergens": [],
        "description": "Scottish gin distilled with cucumber and Bulgarian rose petal essence",
        "notes": "Uniquely refreshing botanical Scottish gin."
    },
    "gin-starej-dobrej": {
        "name": "Starej Dobrej Gin",
        "weight": "0.03l",
        "price": "85 CZK",
        "allergens": [],
        "description": "traditional Czech artisanal gin with rich herbal profile",
        "notes": "Craft small-batch Czech gin."
    },
    "gin-truffle": {
        "name": "Truffle Gin",
        "weight": "0.03l",
        "price": "125 CZK",
        "allergens": [],
        "description": "exclusive craft gin infused with aromatic winter truffles",
        "notes": "Earthy and luxurious gastronomic spirit."
    }
}

# Assemble final categories list
final_categories_en = []

for cat_idx, (cat_id, cat_name, cat_desc, cat_icon) in enumerate(CATEGORIES_EN_CONFIG):
    # Find matching CZ category to get item structure
    cz_cat = next((c for c in cz_cats if c['id'] == cat_id), None)
    if not cz_cat:
        print(f"Warning: No matching CZ category found for {cat_id}")
        continue

    cat_items = []
    
    # Is it a food category (0 through 10)?
    if cat_id in FOOD_ITEMS_EN:
        for f_item in FOOD_ITEMS_EN[cat_id]:
            item_copy = dict(f_item)
            build_questions_for_en_item(item_copy)
            cat_items.append(item_copy)
    else:
        # Drinks / allergens category (11 to 35):
        # Match each item from cz_cat with English counterpart
        for cz_it in cz_cat['items']:
            it_id = cz_it['id']
            if it_id in en_existing_items:
                en_it = dict(en_existing_items[it_id])
                # Ensure weight and price are up to date with cz_it if cz_it was recently updated
                if 'weight' in cz_it and cz_it['weight']:
                    en_it['weight'] = cz_it['weight'].replace(',', '.')
                if 'price' in cz_it and cz_it['price']:
                    en_it['price'] = cz_it['price'].replace('Kč', 'CZK')
                if 'allergens' in cz_it:
                    en_it['allergens'] = cz_it['allergens']
                cat_items.append(en_it)
            elif it_id in NEW_DRINKS_EN:
                new_it = dict(NEW_DRINKS_EN[it_id])
                new_it['id'] = it_id
                build_questions_for_en_item(new_it)
                cat_items.append(new_it)
            else:
                # Fallback: construct item from cz_it
                fallback_it = {
                    "id": cz_it['id'],
                    "name": cz_it['name'],
                    "description": cz_it.get('description', ''),
                    "price": cz_it.get('price', '').replace('Kč', 'CZK'),
                    "allergens": cz_it.get('allergens', [])
                }
                if 'weight' in cz_it and cz_it['weight']:
                    fallback_it['weight'] = cz_it['weight'].replace(',', '.')
                if 'notes' in cz_it:
                    fallback_it['notes'] = cz_it['notes']
                build_questions_for_en_item(fallback_it)
                cat_items.append(fallback_it)

    final_categories_en.append({
        "id": cat_id,
        "name": cat_name,
        "badge": cat_name,
        "description": cat_desc,
        "iconName": cat_icon,
        "items": cat_items
    })

print(f"Generated {len(final_categories_en)} categories.")
for i, c in enumerate(final_categories_en):
    print(f" {i:2d}: {c['id']:<25} ({c['name']:<35}) -> {len(c['items'])} items")

# Serialize to TypeScript
output_ts = 'import { MenuCategory } from \'./menuData\';\n\n'
output_ts += 'export const MENU_CATEGORIES_EN: MenuCategory[] = '
output_ts += json.dumps(final_categories_en, indent=2, ensure_ascii=False)
output_ts += ';\n\n'
output_ts += 'export const TOTAL_ITEMS_COUNT_EN = MENU_CATEGORIES_EN.reduce((acc, cat) => acc + cat.items.length, 0);\n'
output_ts += 'export const TOTAL_QUESTIONS_COUNT_EN = MENU_CATEGORIES_EN.reduce((acc, cat) => acc + cat.items.reduce((qAcc, item) => qAcc + (item.questions ? item.questions.length : 0), 0), 0);\n'

with open('src/data/menuDataEn.ts', 'w', encoding='utf-8') as out:
    out.write(output_ts)

print("Successfully written src/data/menuDataEn.ts!")
