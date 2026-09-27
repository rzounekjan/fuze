import json
import re

ALLERGENS_CZ = {
    '1': ('Obiloviny obsahující lepek', 'Alergen č. 1 – Obiloviny obsahující lepek', 'kváskové pečivo, mouka, strouhanka, slad v pivu'),
    '2': ('Korýši a výrobky z nich', 'Alergen č. 2 – Korýši a výrobky z nich', 'krevety, krabi, humři, krevetová pasta'),
    '3': ('Vejce a výrobky z nich', 'Alergen č. 3 – Vejce a výrobky z nich', 'vejce, žloutek, majonéza, těstoviny'),
    '4': ('Ryby a výrobky z nich', 'Alergen č. 4 – Ryby a výrobky z nich', 'pstruh, rybí maso, ančovičky, worcester'),
    '5': ('Jádra podzemnice olejné (arašídy)', 'Alergen č. 5 – Jádra podzemnice olejné (arašídy)', 'arašídy, arašídový olej, satay'),
    '6': ('Sójové boby (sója) a výrobky z nich', 'Alergen č. 6 – Sójové boby (sója)', 'sójová omáčka, edamame, tofu, lecitin'),
    '7': ('Mléko a výrobky z něj (včetně laktózy)', 'Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)', 'máslo, sýr, smetana, tvaroh, mléčná pěna'),
    '8': ('Skořápkové plody (ořechy) a výrobky z nich', 'Alergen č. 8 – Skořápkové plody (ořechy)', 'vlašské ořechy, mandle, lískové ořechy'),
    '9': ('Celer a výrobky z něj', 'Alergen č. 9 – Celer a výrobky z něj', 'celer v polévce, vývar, celerová nať'),
    '10': ('Hořčice a výrobky z ní', 'Alergen č. 10 – Hořčice a výrobky z ní', 'hořčičné semínko, dijonská hořčice, dresink'),
    '11': ('Sezamová semena (sezam) a výrobky z nich', 'Alergen č. 11 – Sezamová semena (sezam)', 'sezamový olej, tahini, sezam na briošce'),
    '12': ('Oxid siřičitý a siřičitany', 'Alergen č. 12 – Oxid siřičitý a siřičitany', 'víno, sekty, sušené ovoce'),
    '13': ('Vlčí bob (lupina) a výrobky z nich', 'Alergen č. 13 – Vlčí bob (lupina)', 'lupinová mouka v pečivu'),
    '14': ('Měkkýši a výrobky z nich', 'Alergen č. 14 – Měkkýši a výrobky z nich', 'slávky, chobotnice, kalamáry, ústřicová omáčka'),
}

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

POOLS_CZ = {
  'meat': ['Hovězí květová špička', 'Vepřová panenka', 'Telecí kýta', 'Kachní prsa', 'Vykoštěný pstruh', 'Hovězí svíčková', 'Vepřový bok Duroc', 'Jelení hřbet', 'Jehněčí kotletka', 'Krůtí prsa'],
  'veggie': ['Okurčičky cornichons', 'Marinované šalotky', 'Pečená kořenová zelenina', 'Kysané bílé zelí', 'Nakládané perlové cibulky', 'Grilované papričky Padrón', 'Sterilované feferonky', 'Kvašené okurky (kvašáky)', 'Sušená rajčata', 'Nakládaný zázvor'],
  'herbs': ['Čerstvá pažitka', 'Libeček', 'Estragon', 'Majoránka', 'Koriandr', 'Hladkolistá petrželka', 'Drcený kmín', 'Mletý kardamom', 'Čerstvý rozmarýn', 'Tymián'],
  'bread': ['Na hovězím loji opečená topinka', 'Máslová brioška', 'Kváskový chléb', 'Bramborová sláma', 'Bramborová kaše', 'Bramborové křupky', 'Naše hranolky', 'Zauzené rohlíčkové brambory', 'Pivní sušenka', 'Křupavé vepřové krekry'],
  'sauce': ['Lanýžová omáčka', 'Omáčka Choron', 'Naše salsa verde', 'Višňová omáčka', 'Jablečná BBQ omáčka', 'Libečková majonéza', 'Pikantní zauzená majonéza', 'Koňaková omáčka', 'Koprová omáčka', 'Sýr čedar'],
}

POOLS_EN = {
  'meat': ['Beef sirloin tip', 'Pork tenderloin', 'Veal leg', 'Duck breast', 'Deboned trout', 'Beef tenderloin', 'Duroc pork belly', 'Venison saddle', 'Lamb chop', 'Turkey breast'],
  'veggie': ['Cornichons', 'Marinated shallots', 'Roasted root vegetables', 'Sauerkraut', 'Pickled pearl onions', 'Grilled Padron peppers', 'Pickled chili peppers', 'Fermented dill pickles', 'Sun-dried tomatoes', 'Pickled ginger'],
  'herbs': ['Fresh chives', 'Lovage', 'Tarragon', 'Marjoram', 'Coriander / cilantro', 'Flat-leaf parsley', 'Crushed caraway', 'Ground cardamom', 'Fresh rosemary', 'Thyme'],
  'bread': ['Toasted sourdough on beef lard', 'Butter brioche', 'Sourdough bread', 'Potato straw', 'Mashed potatoes', 'Potato crisps', 'Homemade fries', 'Smoked fingerling potatoes', 'Beer biscuit', 'Crispy pork cracklings'],
  'sauce': ['Truffle sauce', 'Choron sauce', 'Our salsa verde', 'Sour cherry sauce', 'Apple BBQ sauce', 'Lovage mayonnaise', 'Spicy smoked mayonnaise', 'Cognac sauce', 'Dill sauce', 'Cheddar cheese'],
}

def get_allergen_distractors(code, item_allergens, lang='cz'):
    all_codes = [str(i) for i in range(1, 15)]
    candidates = [c for c in all_codes if c != code and c not in item_allergens]
    seed = int(code)
    idx1 = seed % len(candidates)
    idx2 = (seed + 5) % len(candidates)
    if idx2 == idx1:
        idx2 = (idx1 + 1) % len(candidates)
    c1, c2 = candidates[idx1], candidates[idx2]
    if lang == 'cz':
        return [ALLERGENS_CZ[c1][1], ALLERGENS_CZ[c2][1]]
    else:
        return [ALLERGENS_EN[c1][1], ALLERGENS_EN[c2][1]]

def get_weight_distractors(weight, lang='cz'):
    norm = weight.lower().replace(' ', '')
    is_en = (lang == 'en')
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
    if '1ks' in norm or '1pc' in norm:
        return ['2 pcs', '1/2 pc'] if is_en else ['2 ks', '1/2 ks']
    if '12ks' in norm or '12pcs' in norm:
        return ['8 pcs', '16 pcs'] if is_en else ['8 ks', '16 ks']
    return ['100 g', '200 g']

def get_ingredient_prompt_cz(name, ing):
    ing_lower = ing.lower()
    if 'česnek' in ing_lower:
        return f"V jaké formě či úpravě je česnek součástí podsložky {name}?"
    if any(k in ing_lower for k in ['topink', 'chléb', 'briošk', 'brambor', 'slám', 'kaše', 'hranolk', 'krekr', 'sušenka']):
        return f"Jaká příloha, pečivo či křupavá složka doplňuje podsložku {name}?"
    if any(k in ing_lower for k in ['okurk', 'cornichon']):
        return f"Který druh nakládaných okurek obsahuje podsložka {name}?"
    if any(k in ing_lower for k in ['šalot', 'cibul']):
        return f"Jaký druh cibulky či šalotky je součástí receptury {name}?"
    if any(k in ing_lower for k in ['pažitk', 'bylin', 'estragon', 'libečk', 'majorán', 'koriandr', 'kmín', 'kardamom']):
        return f"Která bylinka, koření či aromatická surovina dochucuje {name}?"
    if any(k in ing_lower for k in ['omáčk', 'salsa', 'majonéz', 'jus', 'redukce', 'dresing', 'kečup']):
        return f"Která omáčka, dresink či redukce patří k podsložce {name}?"
    if any(k in ing_lower for k in ['sýr', 'máslo', 'čedar', 'parmaz', 'niva', 'raclette', 'tvarůž']):
        return f"Který sýr či mléčná přísada je součástí receptury {name}?"
    if any(k in ing_lower for k in ['maso', 'hověz', 'vepř', 'kuř', 'špičk', 'řízek', 'kýt', 'krk', 'bok', 'steak', 'tartar', 'pstruh', 'krevet', 'klobás', 'foie gras', 'pastrami']):
        return f"Která masová surovina tvoří základ podsložky {name}?"
    if any(k in ing_lower for k in ['zelen', 'rajč', 'jablk', 'celer', 'hrozn', 'salát', 'hrách']):
        return f"Kterou zeleninovou či ovocnou složku obsahuje podsložka {name}?"
    return f"Která z následujících surovin patří do podsložky {name}?"

def get_ingredient_prompt_en(name, ing):
    ing_lower = ing.lower()
    if 'garlic' in ing_lower:
        return f"In what culinary form is garlic included in {name}?"
    if any(k in ing_lower for k in ['sourdough', 'toast', 'brioche', 'bread', 'potato', 'fries', 'straw', 'cracker', 'biscuit']):
        return f"Which bread, side, or crispy garnish accompanies {name}?"
    if any(k in ing_lower for k in ['cornichon', 'pickle']):
        return f"Which pickled ingredient is included in {name}?"
    if any(k in ing_lower for k in ['shallot', 'onion']):
        return f"Which onion or shallot ingredient is included in {name}?"
    if any(k in ing_lower for k in ['chive', 'herb', 'tarragon', 'lovage', 'marjoram', 'coriander', 'caraway', 'cardamom']):
        return f"Which fresh herb or spice seasoning finishes {name}?"
    if any(k in ing_lower for k in ['sauce', 'salsa', 'mayonnaise', 'jus', 'reduction', 'dressing', 'ketchup']):
        return f"Which sauce, dressing, or reduction accompanies {name}?"
    if any(k in ing_lower for k in ['cheese', 'butter', 'cheddar', 'parmesan', 'blue cheese', 'raclette']):
        return f"Which cheese or dairy ingredient is included in {name}?"
    if any(k in ing_lower for k in ['beef', 'pork', 'chicken', 'duck', 'trout', 'sirloin', 'steak', 'meat', 'shrimp', 'veal', 'foie gras', 'sausage', 'pastrami']):
        return f"Which meat or seafood ingredient forms the base of {name}?"
    if any(k in ing_lower for k in ['cabbage', 'tomato', 'grape', 'celery', 'apple', 'peas']):
        return f"Which vegetable or fruit component is included in {name}?"
    return f"Which ingredient is part of {name}?"

def select_ingredient_distractors(ing, all_ings, index, lang='cz'):
    pools = POOLS_CZ if lang == 'cz' else POOLS_EN
    ing_lower = ing.lower()
    if any(k in ing_lower for k in ['topink', 'chléb', 'briošk', 'brambor', 'slám', 'kaše', 'hranolk', 'krekr', 'toast', 'bread', 'brioche', 'potato', 'fries', 'straw', 'cracker']):
        cat = 'bread'
    elif any(k in ing_lower for k in ['okurk', 'cornichon', 'šalot', 'zelen', 'cibul', 'rajč', 'jablk', 'celer', 'hrozn', 'pickle', 'shallot', 'vegetable', 'onion', 'apple', 'cabbage']):
        cat = 'veggie'
    elif any(k in ing_lower for k in ['pažitk', 'bylin', 'estragon', 'libečk', 'majorán', 'koriandr', 'kmín', 'kardamom', 'česnek', 'chive', 'herb', 'tarragon', 'lovage', 'pepper', 'garlic']):
        cat = 'herbs'
    elif any(k in ing_lower for k in ['omáčk', 'salsa', 'majonéz', 'jus', 'redukce', 'dresing', 'sýr', 'máslo', 'čedar', 'parmaz', 'sauce', 'dressing', 'mayo', 'cheese', 'butter']):
        cat = 'sauce'
    else:
        cat = 'meat'

    pool = pools[cat]
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
    s = re.sub(r'^(and|a)\s+', '', s, flags=re.I)
    return s[0].upper() + s[1:] if s else s

def build_questions_for_item(item_cz, item_en):
    questions_cz = []
    questions_en = []
    
    # 1. Weight / volume question
    weight_cz = item_cz.get('weight')
    weight_en = item_en.get('weight') or weight_cz
    if weight_cz:
        is_weight = 'g' in weight_cz and 'l' not in weight_cz
        is_piece = 'ks' in weight_cz or 'pc' in weight_cz
        
        prompt_cz = f"Jaká je gramáž porce podsložky {item_cz['name']}?" if is_weight else (
            f"Jaká je velikost porce podsložky {item_cz['name']}?" if is_piece else f"Jaký je servírovací objem / míra podsložky {item_cz['name']}?"
        )
        prompt_en = f"What is the portion weight of {item_en['name']}?" if is_weight else (
            f"What is the portion size of {item_en['name']}?" if is_piece else f"What is the serving measure of {item_en['name']}?"
        )
        
        dist_cz = get_weight_distractors(weight_cz, 'cz')
        dist_en = get_weight_distractors(weight_en, 'en')
        
        questions_cz.append({
            "id": f"{item_cz['id']}-vol",
            "question": prompt_cz,
            "correctAnswer": weight_cz,
            "distractors": dist_cz,
            "explanation": f"Gramáž / velikost porce podsložky {item_cz['name']} je {weight_cz}."
        })
        questions_en.append({
            "id": f"{item_en['id']}-vol",
            "question": prompt_en,
            "correctAnswer": weight_en,
            "distractors": dist_en,
            "explanation": f"The portion size / weight of {item_en['name']} is {weight_en}."
        })

    # 2. Ingredient questions
    desc_cz = item_cz.get('description', '')
    desc_en = item_en.get('description', '')
    parts_cz = [p.strip() for p in desc_cz.split(',') if p.strip()]
    parts_en = [p.strip() for p in desc_en.split(',') if p.strip()]
    count = max(len(parts_cz), len(parts_en))
    while len(parts_cz) < count:
        parts_cz.append(parts_cz[-1] if parts_cz else item_cz['name'])
    while len(parts_en) < count:
        parts_en.append(parts_en[-1] if parts_en else item_en['name'])
        
    for i in range(count):
        ing_cz = parts_cz[i]
        ing_en = parts_en[i]
        ans_cz = format_answer(ing_cz)
        ans_en = format_answer(ing_en)
        
        dist_cz = select_ingredient_distractors(ing_cz, parts_cz, i, 'cz')
        dist_en = select_ingredient_distractors(ing_en, parts_en, i, 'en')
        
        prompt_cz = get_ingredient_prompt_cz(item_cz['name'], ing_cz)
        prompt_en = get_ingredient_prompt_en(item_en['name'], ing_en)
        
        questions_cz.append({
            "id": f"{item_cz['id']}-ing-{i+1}",
            "question": prompt_cz,
            "correctAnswer": ans_cz,
            "distractors": dist_cz,
            "explanation": f"V podsložce {item_cz['name']} je obsaženo: {ans_cz}. Kompletní receptura položky: {desc_cz}."
        })
        questions_en.append({
            "id": f"{item_en['id']}-ing-{i+1}",
            "question": prompt_en,
            "correctAnswer": ans_en,
            "distractors": dist_en,
            "explanation": f"In {item_en['name']}, this component is present: {ans_en}. Full recipe ingredients: {desc_en}."
        })

    # 3. Allergen questions (one per allergen)
    allergens = item_cz.get('allergens', [])
    for code in allergens:
        info_cz = ALLERGENS_CZ.get(code, (f'Alergen č. {code}', f'Alergen č. {code}', ''))
        info_en = ALLERGENS_EN.get(code, (f'Allergen No. {code}', f'Allergen No. {code}', ''))
        dist_cz = get_allergen_distractors(code, allergens, 'cz')
        dist_en = get_allergen_distractors(code, allergens, 'en')
        
        all_list_cz = ', '.join([ALLERGENS_CZ[c][0] for c in allergens if c in ALLERGENS_CZ])
        all_list_en = ', '.join([ALLERGENS_EN[c][0] for c in allergens if c in ALLERGENS_EN])
        
        questions_cz.append({
            "id": f"{item_cz['id']}-allergen-{code}",
            "question": f"Který z následujících alergenů obsahuje podsložka {item_cz['name']}?",
            "correctAnswer": info_cz[1],
            "distractors": dist_cz,
            "explanation": f"{item_cz['name']} obsahuje {info_cz[1]} ({info_cz[2]}). Všechny evidované alergeny této podsložky: {all_list_cz}."
        })
        questions_en.append({
            "id": f"{item_en['id']}-allergen-{code}",
            "question": f"Which of the following allergens is present in {item_en['name']}?",
            "correctAnswer": info_en[1],
            "distractors": dist_en,
            "explanation": f"{item_en['name']} contains {info_en[1]} ({info_en[2]}). All allergens present in this item: {all_list_en}."
        })
        
    item_cz['questions'] = questions_cz
    item_en['questions'] = questions_en

print('Helper definitions ready.')
