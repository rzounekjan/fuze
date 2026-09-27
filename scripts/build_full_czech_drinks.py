import json
import re

ALLERGENS_CZ = {
    '1': ('Obiloviny obsahující lepek', 'Alergen č. 1 – Obiloviny obsahující lepek', 'slad v pivu, kváskové pečivo, mouka, strouhanka'),
    '2': ('Korýši a výrobky z nich', 'Alergen č. 2 – Korýši a výrobky z nich', 'krevety, krabi, humři, krevetová pasta'),
    '3': ('Vejce a výrobky z nich', 'Alergen č. 3 – Vejce a výrobky z nich', 'vejce, žloutek, majonéza, vaječný likér'),
    '4': ('Ryby a výrobky z nich', 'Alergen č. 4 – Ryby a výrobky z nich', 'pstruh, rybí maso, ančovičky, worcester'),
    '5': ('Jádra podzemnice olejné (arašídy)', 'Alergen č. 5 – Jádra podzemnice olejné (arašídy)', 'arašídy, arašídový olej'),
    '6': ('Sójové boby (sója) a výrobky z nich', 'Alergen č. 6 – Sójové boby (sója)', 'sójová omáčka, edamame, tofu, lecitin'),
    '7': ('Mléko a výrobky z něj (včetně laktózy)', 'Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)', 'mléko, smetana, máslo, sýr, tvaroh, mléčná pěna'),
    '8': ('Skořápkové plody (ořechy) a výrobky z nich', 'Alergen č. 8 – Skořápkové plody (ořechy)', 'mandle, vlašské ořechy, mandlový likér'),
    '9': ('Celer a výrobky z něj', 'Alergen č. 9 – Celer a výrobky z něj', 'celer v polévce, vývar, celerová nať'),
    '10': ('Hořčice a výrobky z ní', 'Alergen č. 10 – Hořčice a výrobky z ní', 'hořčičné semínko, dijonská hořčice, dresink'),
    '11': ('Sezamová semena (sezam) a výrobky z nich', 'Alergen č. 11 – Sezamová semena (sezam)', 'sezamový olej, tahini, sezam na briošce'),
    '12': ('Oxid siřičitý a siřičitany', 'Alergen č. 12 – Oxid siřičitý a siřičitany', 'víno, sekty, cidery, sušené ovoce'),
    '13': ('Vlčí bob (lupina) a výrobky z nich', 'Alergen č. 13 – Vlčí bob (lupina)', 'lupinová mouka v pečivu'),
    '14': ('Měkkýši a výrobky z nich', 'Alergen č. 14 – Měkkýši a výrobky z nich', 'slávky, chobotnice, kalamáry, ústřicová omáčka'),
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
    return [ALLERGENS_CZ[c1][1], ALLERGENS_CZ[c2][1]]

def get_volume_distractors(vol):
    v = vol.strip().lower()
    if '0,03' in v:
        return ['0,04 l', '0,05 l']
    if '0,15' in v:
        return ['0,1 l', '0,2 l']
    if '0,1l' in v or '0,1 l' in v:
        return ['0,15 l', '0,2 l']
    if '0,25' in v:
        return ['0,3 l', '0,33 l']
    if '0,33' in v:
        return ['0,25 l', '0,5 l']
    if '0,4' in v:
        return ['0,3 l', '0,5 l']
    if '0,75' in v:
        return ['0,5 l', '1,0 l']
    if '0,3l / 0,5l' in v or '0,3l/0,5l' in v:
        return ['0,25 l / 0,4 l', '0,4 l / 0,5 l']
    if '9g' in v:
        return ['7 g', '14 g']
    if '18g' in v:
        return ['9 g', '14 g']
    if '6x' in v:
        return ['4x 0,15 l', '8x 0,15 l']
    return ['0,3 l', '0,5 l']

def build_questions_for_drink(item):
    questions = []
    
    # 1. Volume question
    vol = item.get('weight')
    if vol:
        is_coffee = 'g' in vol
        is_beer_deg = '6x' in vol
        prompt = (
            f"Jaká je navážka kávy u nápoje {item['name']}?" if is_coffee else (
                f"Jaké složení a objem má degustační set {item['name']}?" if is_beer_deg else (
                    f"Jaký je servírovací objem / míra nápoje {item['name']}?"
                )
            )
        )
        dist = get_volume_distractors(vol)
        questions.append({
            "id": f"{item['id']}-vol",
            "question": prompt,
            "correctAnswer": vol,
            "distractors": dist,
            "explanation": f"Servírovací míra / objem nápoje {item['name']} je {vol}."
        })
        
    # 2. Ingredient / characteristic questions
    desc = item.get('description', '')
    parts = [p.strip() for p in desc.split(',') if len(p.strip()) > 3]
    if not parts:
        parts = [desc] if desc else [item['name']]
        
    # Pick up to 2 distinct parts
    for i, p in enumerate(parts[:2]):
        clean_ans = p[0].upper() + p[1:] if p else p
        cand_distractors = [
            "Bezinkový sirup a máta", "Čerstvý grepový fresh", "Světlý ležák plzeňského typu",
            "Pomerančová kůra a hřebíček", "Třtinový cukr s limetou", "Jasmínový zelený čaj"
        ]
        # ensure distractors don't equal answer
        dists = [d for d in cand_distractors if d.lower() not in clean_ans.lower()][:2]
        while len(dists) < 2:
            dists.append("Limetová šťáva")
            
        questions.append({
            "id": f"{item['id']}-ing-{i+1}",
            "question": f"Která surovina, původ či vlastnost charakterizuje nápoj {item['name']}?",
            "correctAnswer": clean_ans,
            "distractors": dists,
            "explanation": f"V popisu podsložky {item['name']} je uvedeno: {clean_ans}. Kompletní charakteristika položky: {desc}."
        })
        
    # 3. Allergen questions
    allergens = item.get('allergens', [])
    for code in allergens:
        info = ALLERGENS_CZ.get(code, (f'Alergen č. {code}', f'Alergen č. {code}', ''))
        dist = get_allergen_distractors(code, allergens)
        all_list = ', '.join([ALLERGENS_CZ[c][0] for c in allergens if c in ALLERGENS_CZ])
        questions.append({
            "id": f"{item['id']}-allergen-{code}",
            "question": f"Který z následujících alergenů obsahuje nápoj {item['name']}?",
            "correctAnswer": info[1],
            "distractors": dist,
            "explanation": f"{item['name']} obsahuje {info[1]} ({info[2]}). Všechny evidované alergeny: {all_list}."
        })
        
    item['questions'] = questions

print('Loaded drink question builder.')
