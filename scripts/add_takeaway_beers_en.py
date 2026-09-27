import json

with open('src/data/menuDataEn.ts', 'r', encoding='utf-8') as f:
    en_text = f.read()

en_start = en_text.find('export const MENU_CATEGORIES_EN: MenuCategory[] = ') + 50
en_cats = json.loads(en_text[en_start:en_text.rfind('];') + 1])

beer_cat = next((c for c in en_cats if c['id'] == 'pivo-na-cepu'), None)
if not beer_cat:
    raise Exception("pivo-na-cepu not found in menuDataEn.ts")

new_en_takeaway_beers = [
    {
        "id": "transfuze-sebou",
        "name": "TransFUZE",
        "weight": "0.5l",
        "price": "69 CZK",
        "allergens": ["1"],
        "description": "take your favorite beer to go - in a can or freshly tapped in a PET bottle",
        "notes": "Takeaway beer: in a can or freshly tapped in a PET bottle.",
        "questions": [
            {
                "id": "transfuze-sebou-vol",
                "question": "What is the packaging volume of TransFUZE beer to go?",
                "correctAnswer": "0.5l",
                "distractors": ["0.3l", "1.0l"],
                "explanation": "The packaging volume of TransFUZE beer to go is 0.5l."
            },
            {
                "id": "transfuze-sebou-pkg",
                "question": "In what packaging can you take TransFUZE beer to go?",
                "correctAnswer": "In a can or freshly tapped in a PET bottle",
                "distractors": ["Only in a returnable glass bottle", "In a 5l stainless steel mini keg"],
                "explanation": "TransFUZE: take your favorite beer to go - in a can or freshly tapped in a PET bottle."
            },
            {
                "id": "transfuze-sebou-allergen-1",
                "question": "Which allergen is present in TransFUZE beer?",
                "correctAnswer": "Allergen No. 1 – Cereals containing gluten",
                "distractors": ["Allergen No. 7 – Milk and milk products (including lactose)", "Allergen No. 12 – Sulphur dioxide and sulphites"],
                "explanation": "TransFUZE beer contains Allergen No. 1 – Cereals containing gluten (malt in beer)."
            }
        ]
    },
    {
        "id": "disfuze-sebou",
        "name": "DisFUZE",
        "weight": "0.5l",
        "price": "69 CZK",
        "allergens": ["1"],
        "description": "take your favorite beer to go - in a can or freshly tapped in a PET bottle",
        "notes": "Takeaway beer: in a can or freshly tapped in a PET bottle.",
        "questions": [
            {
                "id": "disfuze-sebou-vol",
                "question": "What is the packaging volume of DisFUZE beer to go?",
                "correctAnswer": "0.5l",
                "distractors": ["0.3l", "1.0l"],
                "explanation": "The packaging volume of DisFUZE beer to go is 0.5l."
            },
            {
                "id": "disfuze-sebou-pkg",
                "question": "In what packaging can you take DisFUZE beer to go?",
                "correctAnswer": "In a can or freshly tapped in a PET bottle",
                "distractors": ["Only in a returnable glass bottle", "In a 5l stainless steel mini keg"],
                "explanation": "DisFUZE: take your favorite beer to go - in a can or freshly tapped in a PET bottle."
            },
            {
                "id": "disfuze-sebou-allergen-1",
                "question": "Which allergen is present in DisFUZE beer?",
                "correctAnswer": "Allergen No. 1 – Cereals containing gluten",
                "distractors": ["Allergen No. 7 – Milk and milk products (including lactose)", "Allergen No. 12 – Sulphur dioxide and sulphites"],
                "explanation": "DisFUZE beer contains Allergen No. 1 – Cereals containing gluten (malt in beer)."
            }
        ]
    },
    {
        "id": "fuzenac-sebou",
        "name": "FUZEnáč",
        "weight": "0.5l",
        "price": "78 CZK",
        "allergens": ["1"],
        "description": "take your favorite beer to go - in a can or freshly tapped in a PET bottle",
        "notes": "Takeaway beer: in a can or freshly tapped in a PET bottle.",
        "questions": [
            {
                "id": "fuzenac-sebou-vol",
                "question": "What is the packaging volume of FUZEnáč beer to go?",
                "correctAnswer": "0.5l",
                "distractors": ["0.3l", "1.0l"],
                "explanation": "The packaging volume of FUZEnáč beer to go is 0.5l."
            },
            {
                "id": "fuzenac-sebou-pkg",
                "question": "In what packaging can you take FUZEnáč beer to go?",
                "correctAnswer": "In a can or freshly tapped in a PET bottle",
                "distractors": ["Only in a returnable glass bottle", "In a 5l stainless steel mini keg"],
                "explanation": "FUZEnáč: take your favorite beer to go - in a can or freshly tapped in a PET bottle."
            },
            {
                "id": "fuzenac-sebou-allergen-1",
                "question": "Which allergen is present in FUZEnáč beer?",
                "correctAnswer": "Allergen No. 1 – Cereals containing gluten",
                "distractors": ["Allergen No. 7 – Milk and milk products (including lactose)", "Allergen No. 12 – Sulphur dioxide and sulphites"],
                "explanation": "FUZEnáč beer contains Allergen No. 1 – Cereals containing gluten (malt in beer)."
            }
        ]
    },
    {
        "id": "infuze-sebou",
        "name": "InFUZE",
        "weight": "0.5l",
        "price": "106 CZK",
        "allergens": ["1"],
        "description": "take your favorite beer to go - in a can or freshly tapped in a PET bottle",
        "notes": "Takeaway beer: in a can or freshly tapped in a PET bottle.",
        "questions": [
            {
                "id": "infuze-sebou-vol",
                "question": "What is the packaging volume of InFUZE beer to go?",
                "correctAnswer": "0.5l",
                "distractors": ["0.3l", "1.0l"],
                "explanation": "The packaging volume of InFUZE beer to go is 0.5l."
            },
            {
                "id": "infuze-sebou-pkg",
                "question": "In what packaging can you take InFUZE beer to go?",
                "correctAnswer": "In a can or freshly tapped in a PET bottle",
                "distractors": ["Only in a returnable glass bottle", "In a 5l stainless steel mini keg"],
                "explanation": "InFUZE: take your favorite beer to go - in a can or freshly tapped in a PET bottle."
            },
            {
                "id": "infuze-sebou-allergen-1",
                "question": "Which allergen is present in InFUZE beer?",
                "correctAnswer": "Allergen No. 1 – Cereals containing gluten",
                "distractors": ["Allergen No. 7 – Milk and milk products (including lactose)", "Allergen No. 12 – Sulphur dioxide and sulphites"],
                "explanation": "InFUZE beer contains Allergen No. 1 – Cereals containing gluten (malt in beer)."
            }
        ]
    }
]

# Ensure idempotency
existing_ids = {it['id'] for it in new_en_takeaway_beers}
beer_cat['items'] = [it for it in beer_cat['items'] if it['id'] not in existing_ids]

# Append new takeaway beers
beer_cat['items'].extend(new_en_takeaway_beers)

# Serialize to TypeScript
output_ts = 'import { MenuCategory } from \'./menuData\';\n\n'
output_ts += 'export const MENU_CATEGORIES_EN: MenuCategory[] = '
output_ts += json.dumps(en_cats, indent=2, ensure_ascii=False)
output_ts += ';\n\n'
output_ts += 'export const TOTAL_ITEMS_COUNT_EN = MENU_CATEGORIES_EN.reduce((acc, cat) => acc + cat.items.length, 0);\n'
output_ts += 'export const TOTAL_QUESTIONS_COUNT_EN = MENU_CATEGORIES_EN.reduce((acc, cat) => acc + cat.items.reduce((qAcc, item) => qAcc + (item.questions ? item.questions.length : 0), 0), 0);\n'

with open('src/data/menuDataEn.ts', 'w', encoding='utf-8') as out:
    out.write(output_ts)

print("Successfully added 4 takeaway beers to 'Beer on tap' in menuDataEn.ts!")
