import json

with open('src/data/menuData.ts', 'r', encoding='utf-8') as f:
    cz_text = f.read()

cz_start_tag = 'export const MENU_CATEGORIES: MenuCategory[] = '
cz_start = cz_text.find(cz_start_tag) + len(cz_start_tag)
cz_end = cz_text.rfind('];') + 1
cz_cats = json.loads(cz_text[cz_start:cz_end])

beer_cat = next((c for c in cz_cats if c['id'] == 'pivo-na-cepu'), None)
if not beer_cat:
    raise Exception("pivo-na-cepu category not found in menuData.ts")

new_takeaway_beers = [
    {
        "id": "transfuze-sebou",
        "name": "TransFUZE",
        "weight": "0,5l",
        "price": "69 Kč",
        "allergens": ["1"],
        "description": "odneste si své oblíbené pivko s sebou - v plechovce a nebo čerstvě načepované v PET lahvi",
        "notes": "Balení s sebou: v plechovce nebo čerstvě načepované v PET lahvi.",
        "questions": [
            {
                "id": "transfuze-sebou-vol",
                "question": "Jaký je objem balení piva TransFUZE s sebou?",
                "correctAnswer": "0,5l",
                "distractors": ["0,3l", "1,0l"],
                "explanation": "Objem balení podsložky TransFUZE s sebou je 0,5l."
            },
            {
                "id": "transfuze-sebou-pkg",
                "question": "V jakém balení si můžete odnést pivo TransFUZE s sebou?",
                "correctAnswer": "V plechovce a nebo čerstvě načepované v PET lahvi",
                "distractors": ["Pouze ve skleněné zálohované lahvi", "V nerezovém party soudku 5l"],
                "explanation": "TransFUZE: odneste si své oblíbené pivko s sebou - v plechovce a nebo čerstvě načepované v PET lahvi."
            },
            {
                "id": "transfuze-sebou-allergen-1",
                "question": "Který z následujících alergenů obsahuje pivo TransFUZE?",
                "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
                "distractors": ["Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)", "Alergen č. 12 – Oxid siřičitý a siřičitany"],
                "explanation": "TransFUZE obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu)."
            }
        ]
    },
    {
        "id": "disfuze-sebou",
        "name": "DisFUZE",
        "weight": "0,5l",
        "price": "69 Kč",
        "allergens": ["1"],
        "description": "odneste si své oblíbené pivko s sebou - v plechovce a nebo čerstvě načepované v PET lahvi",
        "notes": "Balení s sebou: v plechovce nebo čerstvě načepované v PET lahvi.",
        "questions": [
            {
                "id": "disfuze-sebou-vol",
                "question": "Jaký je objem balení piva DisFUZE s sebou?",
                "correctAnswer": "0,5l",
                "distractors": ["0,3l", "1,0l"],
                "explanation": "Objem balení podsložky DisFUZE s sebou je 0,5l."
            },
            {
                "id": "disfuze-sebou-pkg",
                "question": "V jakém balení si můžete odnést pivo DisFUZE s sebou?",
                "correctAnswer": "V plechovce a nebo čerstvě načepované v PET lahvi",
                "distractors": ["Pouze ve skleněné zálohované lahvi", "V nerezovém party soudku 5l"],
                "explanation": "DisFUZE: odneste si své oblíbené pivko s sebou - v plechovce a nebo čerstvě načepované v PET lahvi."
            },
            {
                "id": "disfuze-sebou-allergen-1",
                "question": "Který z následujících alergenů obsahuje pivo DisFUZE?",
                "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
                "distractors": ["Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)", "Alergen č. 12 – Oxid siřičitý a siřičitany"],
                "explanation": "DisFUZE obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu)."
            }
        ]
    },
    {
        "id": "fuzenac-sebou",
        "name": "FUZEnáč",
        "weight": "0,5l",
        "price": "78 Kč",
        "allergens": ["1"],
        "description": "odneste si své oblíbené pivko s sebou -v plechovce a nebo čerstvě načepované v PET lahvi",
        "notes": "Balení s sebou: v plechovce nebo čerstvě načepované v PET lahvi.",
        "questions": [
            {
                "id": "fuzenac-sebou-vol",
                "question": "Jaký je objem balení piva FUZEnáč s sebou?",
                "correctAnswer": "0,5l",
                "distractors": ["0,3l", "1,0l"],
                "explanation": "Objem balení podsložky FUZEnáč s sebou je 0,5l."
            },
            {
                "id": "fuzenac-sebou-pkg",
                "question": "V jakém balení si můžete odnést pivo FUZEnáč s sebou?",
                "correctAnswer": "V plechovce a nebo čerstvě načepované v PET lahvi",
                "distractors": ["Pouze ve skleněné zálohované lahvi", "V nerezovém party soudku 5l"],
                "explanation": "FUZEnáč: odneste si své oblíbené pivko s sebou -v plechovce a nebo čerstvě načepované v PET lahvi."
            },
            {
                "id": "fuzenac-sebou-allergen-1",
                "question": "Který z následujících alergenů obsahuje pivo FUZEnáč?",
                "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
                "distractors": ["Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)", "Alergen č. 12 – Oxid siřičitý a siřičitany"],
                "explanation": "FUZEnáč obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu)."
            }
        ]
    },
    {
        "id": "infuze-sebou",
        "name": "InFUZE",
        "weight": "0,5l",
        "price": "106 Kč",
        "allergens": ["1"],
        "description": "odneste si své oblíbené pivko s sebou - v plechovce a nebo čerstvě načepované v PET lahvi",
        "notes": "Balení s sebou: v plechovce nebo čerstvě načepované v PET lahvi.",
        "questions": [
            {
                "id": "infuze-sebou-vol",
                "question": "Jaký je objem balení piva InFUZE s sebou?",
                "correctAnswer": "0,5l",
                "distractors": ["0,3l", "1,0l"],
                "explanation": "Objem balení podsložky InFUZE s sebou je 0,5l."
            },
            {
                "id": "infuze-sebou-pkg",
                "question": "V jakém balení si můžete odnést pivo InFUZE s sebou?",
                "correctAnswer": "V plechovce a nebo čerstvě načepované v PET lahvi",
                "distractors": ["Pouze ve skleněné zálohované lahvi", "V nerezovém party soudku 5l"],
                "explanation": "InFUZE: odneste si své oblíbené pivko s sebou - v plechovce a nebo čerstvě načepované v PET lahvi."
            },
            {
                "id": "infuze-sebou-allergen-1",
                "question": "Který z následujících alergenů obsahuje pivo InFUZE?",
                "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
                "distractors": ["Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)", "Alergen č. 12 – Oxid siřičitý a siřičitany"],
                "explanation": "InFUZE obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu)."
            }
        ]
    }
]

# Remove existing if already present (for idempotency)
existing_ids = {item['id'] for item in new_takeaway_beers}
beer_cat['items'] = [it for it in beer_cat['items'] if it['id'] not in existing_ids]

# Append new beers
beer_cat['items'].extend(new_takeaway_beers)

cz_output = cz_text[:cz_start] + json.dumps(cz_cats, indent=2, ensure_ascii=False) + ';\n\n'
cz_output += 'export const TOTAL_ITEMS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);\n'
cz_output += 'export const TOTAL_QUESTIONS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.reduce((qAcc, item) => qAcc + (item.questions ? item.questions.length : 0), 0), 0);\n'

with open('src/data/menuData.ts', 'w', encoding='utf-8') as f:
    f.write(cz_output)

print("Successfully added 4 takeaway beers to 'Pivo na čepu' in Czech menu!")
