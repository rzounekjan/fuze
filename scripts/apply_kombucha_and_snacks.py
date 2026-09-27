import json

# 1. Update Czech Menu (menuData.ts)
with open('src/data/menuData.ts', 'r', encoding='utf-8') as f:
    cz_text = f.read()

cz_start_tag = 'export const MENU_CATEGORIES: MenuCategory[] = '
cz_start = cz_text.find(cz_start_tag) + len(cz_start_tag)
cz_end = cz_text.rfind('];') + 1
cz_cats = json.loads(cz_text[cz_start:cz_end])

kombucha_cz_items = [
    {
        "id": "appio-tatranske-byliny",
        "name": "Appio tatranské byliny",
        "weight": "0,33l",
        "price": "129 Kč",
        "allergens": [],
        "description": "Živá, přírodní, prémiová fermentovaná kombucha bez pasterizace s 10 druhy ručně sbíraných bylin přímo pod Tatrami",
        "notes": "Nepasterizovaná řemeslná kombucha s bylinami sbíranými pod Tatrami.",
        "questions": [
            {
                "id": "appio-tatranske-byliny-vol",
                "question": "Jaký je servírovací objem / míra podsložky Appio tatranské byliny?",
                "correctAnswer": "0,33l",
                "distractors": [
                    "0,25l",
                    "0,5l"
                ],
                "explanation": "Servírovací objem podsložky Appio tatranské byliny je 0,33l."
            },
            {
                "id": "appio-tatranske-byliny-ing-1",
                "question": "Které byliny tvoří základ chuti podsložky Appio tatranské byliny?",
                "correctAnswer": "10 druhů ručně sbíraných bylin přímo pod Tatrami",
                "distractors": [
                    "Sušené šípky a ibišek",
                    "Lesní jahody a máta"
                ],
                "explanation": "V podsložce Appio tatranské byliny je obsaženo: 10 druhů ručně sbíraných bylin přímo pod Tatrami. Kompletní popis: Živá, přírodní, prémiová fermentovaná kombucha bez pasterizace s 10 druhy ručně sbíraných bylin přímo pod Tatrami."
            },
            {
                "id": "appio-tatranske-byliny-ing-2",
                "question": "Jakou technologií je vyrobena kombucha Appio tatranské byliny?",
                "correctAnswer": "Živá fermentace bez pasterizace",
                "distractors": [
                    "Pasterizovaná filtrace",
                    "Destilace za studena"
                ],
                "explanation": "Appio tatranské byliny je živá, přírodní, prémiová fermentovaná kombucha bez pasterizace."
            }
        ]
    },
    {
        "id": "oppio-tresen-skorice",
        "name": "Oppio třešeň a skořice",
        "weight": "0,33l",
        "price": "129 Kč",
        "allergens": [],
        "description": "sladká, hřejivá a jemně nostalgická chuť třešně se skořicí",
        "notes": "Jemně perlivá kombucha s příchutí třešně a hřejivé skořice.",
        "questions": [
            {
                "id": "oppio-tresen-skorice-vol",
                "question": "Jaký je servírovací objem / míra podsložky Oppio třešeň a skořice?",
                "correctAnswer": "0,33l",
                "distractors": [
                    "0,25l",
                    "0,5l"
                ],
                "explanation": "Servírovací objem podsložky Oppio třešeň a skořice je 0,33l."
            },
            {
                "id": "oppio-tresen-skorice-ing-1",
                "question": "Která ovocná a kořeněná kombinace charakterizuje podsložku Oppio třešeň a skořice?",
                "correctAnswer": "Chuť třešně se skořicí",
                "distractors": [
                    "Jablko se zázvorem",
                    "Černý rybíz s badyánem"
                ],
                "explanation": "V podsložce Oppio třešeň a skořice je obsaženo: Chuť třešně se skořicí. Popis: sladká, hřejivá a jemně nostalgická chuť třešně se skořicí."
            },
            {
                "id": "oppio-tresen-skorice-ing-2",
                "question": "Jaký chuťový profil má podsložka Oppio třešeň a skořice?",
                "correctAnswer": "Sladká, hřejivá a jemně nostalgická chuť",
                "distractors": [
                    "Výrazně kyselá a trpká chuť",
                    "Hořká bylinná chuť"
                ],
                "explanation": "Oppio třešeň a skořice má sladkou, hřejivou a jemně nostalgickou chuť třešně se skořicí."
            }
        ]
    }
]

kombucha_cz_cat = {
    "id": "kombucha",
    "name": "Kombucha",
    "badge": "Kombucha",
    "description": "Živé, nepasterizované fermentované kombuchy s přírodními bylinami a ovocem",
    "iconName": "Sparkles",
    "items": kombucha_cz_items
}

# Check if kombucha already exists in cz_cats
cz_kombucha_idx = next((i for i, c in enumerate(cz_cats) if c['id'] == 'kombucha'), None)
if cz_kombucha_idx is not None:
    cz_cats[cz_kombucha_idx] = kombucha_cz_cat
else:
    # Insert right after 'cidery'
    cidery_idx = next((i for i, c in enumerate(cz_cats) if c['id'] == 'cidery'), None)
    if cidery_idx is not None:
        cz_cats.insert(cidery_idx + 1, kombucha_cz_cat)
    else:
        cz_cats.append(kombucha_cz_cat)

cz_output = cz_text[:cz_start] + json.dumps(cz_cats, indent=2, ensure_ascii=False) + ';\n\n'
cz_output += 'export const TOTAL_ITEMS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);\n'
cz_output += 'export const TOTAL_QUESTIONS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.reduce((qAcc, item) => qAcc + (item.questions ? item.questions.length : 0), 0), 0);\n'

with open('src/data/menuData.ts', 'w', encoding='utf-8') as f:
    f.write(cz_output)

print("Updated menuData.ts with Kombucha category!")

# 2. Update English Menu (menuDataEn.ts)
with open('src/data/menuDataEn.ts', 'r', encoding='utf-8') as f:
    en_text = f.read()

en_start_tag = 'export const MENU_CATEGORIES_EN: MenuCategory[] = '
en_start = en_text.find(en_start_tag) + len(en_start_tag)
en_end = en_text.rfind('];') + 1
en_cats = json.loads(en_text[en_start:en_end])

# Rename "Bar snacks" -> "Snacks" in category "chutovky"
for c in en_cats:
    if c['id'] == 'chutovky':
        c['name'] = 'Snacks'
        c['badge'] = 'Snacks'
        print("Renamed chutovky in English to 'Snacks'!")

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
                    "0.25 L",
                    "0.5 L"
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
                    "0.25 L",
                    "0.5 L"
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

en_kombucha_idx = next((i for i, c in enumerate(en_cats) if c['id'] == 'kombucha'), None)
if en_kombucha_idx is not None:
    en_cats[en_kombucha_idx] = kombucha_en_cat
else:
    cidery_en_idx = next((i for i, c in enumerate(en_cats) if c['id'] == 'cidery'), None)
    if cidery_en_idx is not None:
        en_cats.insert(cidery_en_idx + 1, kombucha_en_cat)
    else:
        en_cats.append(kombucha_en_cat)

en_output = en_text[:en_start] + json.dumps(en_cats, indent=2, ensure_ascii=False) + ';\n\n'
en_output += 'export const TOTAL_ITEMS_COUNT_EN = MENU_CATEGORIES_EN.reduce((acc, cat) => acc + cat.items.length, 0);\n'
en_output += 'export const TOTAL_QUESTIONS_COUNT_EN = MENU_CATEGORIES_EN.reduce((acc, cat) => acc + cat.items.reduce((qAcc, item) => qAcc + (item.questions ? item.questions.length : 0), 0), 0);\n'

with open('src/data/menuDataEn.ts', 'w', encoding='utf-8') as f:
    f.write(en_output)

print("Updated menuDataEn.ts with Snacks renaming and Kombucha category!")
