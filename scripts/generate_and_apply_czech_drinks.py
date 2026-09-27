import json
import re

# Load allergen definitions
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
    if '0,06' in v:
        return ['0,04 l', '0,08 l']
    if '0,08' in v:
        return ['0,05 l', '0,1 l']
    if '0,175' in v:
        return ['0,15 l', '0,2 l']
    if '0,2l' in v:
        return ['0,25 l', '0,33 l']
    if '9g' in v:
        return ['7 g', '14 g']
    if '18g' in v:
        return ['9 g', '14 g']
    if '6x' in v:
        return ['4x 0,15 l', '8x 0,15 l']
    return ['0,3 l', '0,5 l']

POOLS_DRINKS = [
    "Světlý ležák plzeňského typu", "Jablečný mošt z rodinné farmy", "Čerstvý grepový fresh",
    "Bezinkový sirup a čerstvá máta", "Tonik Thomas Henry s chininem", "Čerstvě pražená výběrová káva",
    "Vanilkový sirup a limetová šťáva", "Třtinový cukr s limetkou", "Italský aperitiv Campari",
    "Černý sypaný čaj s bergamotem", "Jasmínový zelený čaj", "Belgické višňové pivo",
    "Limetová šťáva", "Pomerančová kůra a hřebíček", "Mučenkový likér a vanilka",
    "Kávový likér Kahlúa", "Zázvorové pivo Fever-Tree", "Čerstvý rozmarýn a jalovec"
]

def get_ingredient_distractors(clean_ans, idx):
    avail = [d for d in POOLS_DRINKS if d.lower() not in clean_ans.lower() and clean_ans.lower() not in d.lower()]
    idx1 = (idx * 2) % len(avail)
    idx2 = (idx * 2 + 1) % len(avail)
    if idx2 == idx1:
        idx2 = (idx1 + 2) % len(avail)
    return [avail[idx1], avail[idx2]]

def build_drink_questions(item):
    questions = []
    
    # 1. Volume / weight question
    vol = item.get('weight')
    if vol:
        is_coffee = 'g' in vol
        is_beer_deg = '6x' in vol
        prompt = (
            f"Jaká je navážka kávy u položky {item['name']}?" if is_coffee else (
                f"Jaké je složení a porce degustačního setu {item['name']}?" if is_beer_deg else (
                    f"Jaký je servírovací objem / míra položky {item['name']}?"
                )
            )
        )
        dist = get_volume_distractors(vol)
        questions.append({
            "id": f"{item['id']}-vol",
            "question": prompt,
            "correctAnswer": vol,
            "distractors": dist,
            "explanation": f"Servírovací míra / objem položky {item['name']} je {vol}."
        })
        
    # 2. Ingredient / characteristic questions
    desc = item.get('description', '')
    parts = [p.strip() for p in re.split(r'[,|]', desc) if len(p.strip()) > 3]
    if not parts:
        parts = [desc] if desc else [item['name']]
        
    for i, p in enumerate(parts[:2]):
        clean_ans = p[0].upper() + p[1:] if p else p
        dist = get_ingredient_distractors(clean_ans, i + len(item['id']))
        questions.append({
            "id": f"{item['id']}-ing-{i+1}",
            "question": f"Která surovina, původ či charakteristika patří k položce {item['name']}?",
            "correctAnswer": clean_ans,
            "distractors": dist,
            "explanation": f"U položky {item['name']} je uvedeno: {clean_ans}. Kompletní popis: {desc}."
        })
        
    # 3. Allergen questions
    allergens = item.get('allergens', [])
    for code in allergens:
        info = ALLERGENS_CZ.get(code, (f'Alergen č. {code}', f'Alergen č. {code}', ''))
        dist = get_allergen_distractors(code, allergens)
        all_list = ', '.join([ALLERGENS_CZ[c][0] for c in allergens if c in ALLERGENS_CZ])
        questions.append({
            "id": f"{item['id']}-allergen-{code}",
            "question": f"Který z následujících alergenů obsahuje položka {item['name']}?",
            "correctAnswer": info[1],
            "distractors": dist,
            "explanation": f"{item['name']} obsahuje {info[1]} ({info[2]}). Všechny evidované alergeny: {all_list}."
        })
        
    item['questions'] = questions

# Definition of the 24 drink categories from https://www.fuzepraha.cz/menu/napoje/
DRINK_CATEGORIES = [
    {
        "id": "pivo-na-cepu",
        "name": "Pivo na čepu",
        "badge": "Pivo na čepu",
        "description": "Čerstvě čepovaná piva z našeho pivovaru vařená sládkem Alešem Paikem a hostující speciály",
        "iconName": "Beer",
        "items": [
            {
                "id": "transfuze-12",
                "name": "TransFUZE 12",
                "weight": "0,3l / 0,5l",
                "price": "59/69 Kč",
                "allergens": ["1"],
                "description": "náš tradiční ležák plzeňského typu, plné svěží chuti a vyvážené hořkosti, nepasterizovaný, nefiltrovaný"
            },
            {
                "id": "disfuze-10",
                "name": "DisFuze 10",
                "weight": "0,3l / 0,5l",
                "price": "59/69 Kč",
                "allergens": ["1"],
                "description": "světlé výčepní pivo, Abv 3,5 %, česká klasika, poctivá desítka, velmi pitelné osvěžující pivo s vyšší hořkostí"
            },
            {
                "id": "infuze-ipa-12",
                "name": "InFUZE IPA 12",
                "weight": "0,4l",
                "price": "85 Kč",
                "allergens": ["1"],
                "description": "styl: Session IPA, 12 stupňové pivo, 4,9 % obj alk svrchně kvašené pivo, lehké osvěžující, nepasterizované, nefiltrované s citrusovým aroma, chmeleno za studena"
            },
            {
                "id": "fuzenac-13",
                "name": "FUZEnáč 13 polotmavý",
                "weight": "0,3l / 0,5l",
                "price": "69/78 Kč",
                "allergens": ["1"],
                "description": "naše spodně kvašené pivo jantarové barvy a výrazně kouřového aroma, plná sladová uzená chuť, nepasterizovaný, nefiltrovaný"
            },
            {
                "id": "kasteel-rouge-18",
                "name": "Kasteel Rouge 18",
                "weight": "0,25l",
                "price": "118 Kč",
                "allergens": ["1"],
                "description": "svrchně kvašené, 8% tmavé pivo 6 měsíců zrající na višních, z belgického pivovaru Van Honsebrouck, s nádhernou chutí a plnou vůní zralých višní"
            },
            {
                "id": "zichovec-passion-fruit",
                "name": "Zichovec Passion Fruit 12",
                "weight": "0,4l",
                "price": "94 Kč",
                "allergens": ["1"],
                "description": "Sour Ale, celoroční kyseláč opravdu výrazné kyselosti a intenzivní marakujové vůně a chuti"
            },
            {
                "id": "degustace-piv",
                "name": "Degustace piv",
                "weight": "6x 0,15l",
                "price": "285 Kč",
                "allergens": ["1"],
                "description": "6 vzorků piv z naší nabídky na stylovém dřevěném prkýnku"
            },
            {
                "id": "fuzero",
                "name": "FUZEro",
                "weight": "0,4l",
                "price": "69 Kč",
                "allergens": ["1"],
                "description": "náš IPL, nealko ležák chmelený americkým a za studena novozélandským chmelem, s jemnou sladovou chutí, vyšší hořkostí v závěru a krásnou svěží chmelovou vůní, nepasterizovaný, nefiltrovaný"
            },
            {
                "id": "maisels-weisse",
                "name": "Maisel´s Weisse Alkoholfrei /lahvové/",
                "weight": "0,33l",
                "price": "79 Kč",
                "allergens": ["1"],
                "description": "bavorský Weizenbier, pšenice v nealkoholické podobě"
            }
        ]
    },
    {
        "id": "cidery",
        "name": "Cidery",
        "badge": "Cidery",
        "description": "Přírodně fermentované řemeslné jablečné cidery ze slovenské rodinné farmy",
        "iconName": "Sparkles",
        "items": [
            {
                "id": "opre-cider",
                "name": "Opre` Cider",
                "weight": "0,33l",
                "price": "89 Kč",
                "allergens": ["12"],
                "description": "řemeslný jablečný cider ze slovenské rodinné farmy"
            },
            {
                "id": "opre-sour-cherry",
                "name": "Opre` Sour Cherry",
                "weight": "0,33l",
                "price": "96 Kč",
                "allergens": ["12"],
                "description": "cider, který v sobě spojuje chuť jablečného cidru a osvěžující višňové šťávy"
            }
        ]
    },
    {
        "id": "vody-a-mineralni-vody",
        "name": "Vody a minerální vody",
        "badge": "Vody a minerální vody",
        "description": "Čerstvě filtrovaná voda a prémiové přírodní minerální vody",
        "iconName": "GlassWater",
        "items": [
            {
                "id": "filtrovana-karafa",
                "name": "Filtrovaná voda v karafě",
                "weight": "0,75l",
                "price": "89 Kč",
                "allergens": [],
                "description": "neperlivá / perlivá filtrovaná voda v karafě"
            },
            {
                "id": "sklenice-filtrovane-vody",
                "name": "Sklenice filtrované vody",
                "weight": "0,3l",
                "price": "35 Kč",
                "allergens": [],
                "description": "neperlivá / perlivá sklenice filtrované vody"
            },
            {
                "id": "infuzovana-voda",
                "name": "Infuzovaná voda",
                "weight": "0,75l",
                "price": "99 Kč",
                "allergens": [],
                "description": "v karafě citrus / máta"
            },
            {
                "id": "mattoni-grand",
                "name": "Mattoni Grand neperlivá",
                "weight": "0,33l",
                "price": "45 Kč",
                "allergens": [],
                "description": "přírodní minerální voda dekarbonová"
            },
            {
                "id": "vratislavicka-kyselka",
                "name": "Vratislavická kyselka",
                "weight": "0,75l",
                "price": "119 Kč",
                "allergens": [],
                "description": "přírodní minerální voda středně mineralizovaná s obsahem křemíku, přirozeně sycená"
            }
        ]
    },
    {
        "id": "nase-domaci-limonady",
        "name": "Naše domácí limonády",
        "badge": "Naše domácí limonády",
        "description": "Domácí ovocné a bylinkové limonády připravované z poctivých surovin",
        "iconName": "CupSoda",
        "items": [
            {
                "id": "grep-a-mango",
                "name": "Grep a mango",
                "weight": "0,4l",
                "price": "84 Kč",
                "allergens": [],
                "description": "domácí limonáda grep a mango"
            },
            {
                "id": "malina-a-bila-cokolada",
                "name": "Malina a bílá čokoláda",
                "weight": "0,4l",
                "price": "84 Kč",
                "allergens": [],
                "description": "domácí limonáda malina a bílá čokoláda"
            },
            {
                "id": "svestka-a-kardamom",
                "name": "Švestka a kardamom",
                "weight": "0,4l",
                "price": "84 Kč",
                "allergens": [],
                "description": "domácí limonáda švestka a kardamom"
            },
            {
                "id": "domaci-citronada",
                "name": "Domácí citronáda",
                "weight": "0,4l",
                "price": "84 Kč",
                "allergens": [],
                "description": "osvěžující domácí citronáda"
            },
            {
                "id": "nase-ledovy-caj",
                "name": "Náš domácí ledový čaj",
                "weight": "0,4l",
                "price": "86 Kč",
                "allergens": [],
                "description": "jasmín a broskev"
            },
            {
                "id": "fresh-juice",
                "name": "Fresh juice",
                "weight": "0,2l",
                "price": "125 Kč",
                "allergens": [],
                "description": "čerstvě lisovaná šťáva pomeranč / grep"
            }
        ]
    },
    {
        "id": "lahvove-limonady",
        "name": "Lahvové limonády",
        "badge": "Lahvové limonády",
        "description": "Prémiové lahvové limonády, toniky a nealkoholické nápoje",
        "iconName": "CupSoda",
        "items": [
            {
                "id": "coca-cola",
                "name": "Coca Cola / Coca Cola zero",
                "weight": "0,33l",
                "price": "65 Kč",
                "allergens": [],
                "description": "klasická Coca Cola nebo Coca Cola zero v lahvičce"
            },
            {
                "id": "thomas-henry-tonic",
                "name": "Thomas Henry Tonic",
                "weight": "0,2l",
                "price": "75 Kč",
                "allergens": [],
                "description": "prémiový suchý tonik s výraznou chininovou hořkostí"
            },
            {
                "id": "fever-tree-tonic",
                "name": "Fever-Tree Tonic",
                "weight": "0,2l",
                "price": "85 Kč",
                "allergens": [],
                "description": "prémiový tonik s přírodním chininem ze střední Afriky"
            },
            {
                "id": "fever-tree-ginger-beer",
                "name": "Fever-Tree Ginger Beer",
                "weight": "0,2l",
                "price": "85 Kč",
                "allergens": [],
                "description": "zázvorové pivo ze tří druhů čerstvého zázvoru"
            },
            {
                "id": "red-bull",
                "name": "Red Bull",
                "weight": "0,2l",
                "price": "99 Kč",
                "allergens": [],
                "description": "energetický nápoj v plechovce"
            }
        ]
    },
    {
        "id": "kava-caj-a-horke-napoje",
        "name": "Káva, čaj a horké nápoje",
        "badge": "Káva, čaj a horké nápoje",
        "description": "Výběrová káva, sypané čaje a hřejivé nápoje pro chvíle pohody",
        "iconName": "Coffee",
        "items": [
            {
                "id": "espresso",
                "name": "Espresso",
                "weight": "9g",
                "price": "66 Kč",
                "allergens": [],
                "description": "klasické espresso z výběrové kávy"
            },
            {
                "id": "espresso-macchiato",
                "name": "Espresso macchiato",
                "weight": "9g",
                "price": "78 Kč",
                "allergens": ["7"],
                "description": "espresso s kapkou sametové mléčné pěny"
            },
            {
                "id": "cappuccino",
                "name": "Cappuccino",
                "weight": "9g",
                "price": "85 Kč",
                "allergens": ["7"],
                "description": "espresso s horkým mlékem a jemnou mléčnou pěnou"
            },
            {
                "id": "caffe-latte",
                "name": "Caffé latte",
                "weight": "9g",
                "price": "88 Kč",
                "allergens": ["7"],
                "description": "jemná káva s velkou dávkou našlehaného mléka"
            },
            {
                "id": "flat-white",
                "name": "Flat white",
                "weight": "18g",
                "price": "99 Kč",
                "allergens": ["7"],
                "description": "dvojité espresso zjemněné sametovou mléčnou mikropěnou"
            },
            {
                "id": "double-espresso",
                "name": "Double espresso",
                "weight": "18g",
                "price": "89 Kč",
                "allergens": [],
                "description": "dvojitá dávka espressa pro intenzivní chuť"
            },
            {
                "id": "americano-lungo",
                "name": "Americano caffé / lungo",
                "weight": "9g",
                "price": "79 Kč",
                "allergens": [],
                "description": "espresso prodloužené horkou vodou"
            },
            {
                "id": "espresso-se-slehackou",
                "name": "Espresso káva se šlehačkou",
                "weight": "9g",
                "price": "85 Kč",
                "allergens": ["7"],
                "description": "espresso káva dozdobená čerstvou šlehačkou"
            },
            {
                "id": "sypany-caj",
                "name": "Sypaný čaj",
                "weight": None,
                "price": "89 Kč",
                "allergens": [],
                "description": "černý, zelený nebo ovocný sypaný čaj"
            },
            {
                "id": "caj-mata-zazvor",
                "name": "Čaj s čerstvou mátou nebo zázvorem",
                "weight": None,
                "price": "89 Kč",
                "allergens": [],
                "description": "čaj z čerstvé máty nebo zázvoru s medem a citronem"
            },
            {
                "id": "opre-gingerbread-cider",
                "name": "Opre` Gingerbread Cider",
                "weight": "0,33l",
                "price": "98 Kč",
                "allergens": ["12"],
                "description": "horký perníkový cider s vůní hřebíčku a skořice"
            },
            {
                "id": "horka-cokolada",
                "name": "Horká čokoláda",
                "weight": None,
                "price": "85 Kč",
                "allergens": ["7"],
                "description": "horká čokoláda s čerstvou šlehačkou"
            },
            {
                "id": "chai-latte",
                "name": "Chai latte",
                "weight": None,
                "price": "99 Kč",
                "allergens": ["7"],
                "description": "čaj se směsí exotického koření, cukru a horkého mléka"
            },
            {
                "id": "svarene-vino",
                "name": "Svařené víno",
                "weight": "0,15l",
                "price": "85 Kč",
                "allergens": ["12"],
                "description": "s kořením a pomerančem červené / bílé"
            }
        ]
    },
    {
        "id": "vina-po-skle",
        "name": "Vína po skle",
        "badge": "Vína po skle",
        "description": "Pečlivě vybraná šumivá, bílá, růžová a červená vína rozlévaná po skle",
        "iconName": "Wine",
        "items": [
            {
                "id": "sklo-charmat-palava",
                "name": "Charmat de Vinselekt Pálava",
                "weight": "0,1l",
                "price": "99 Kč",
                "allergens": ["12"],
                "description": "Vinselect Michlovský, Extra sec"
            },
            {
                "id": "sklo-cremant-vinselekt",
                "name": "Cremant de Vinselekt",
                "weight": "0,1l",
                "price": "115 Kč",
                "allergens": ["12"],
                "description": "(Pinot, Chardonnay) Vinselect Michlovský, Extra brut"
            },
            {
                "id": "sklo-rulandske-sede",
                "name": "Rulandské šedé",
                "weight": "0,15l",
                "price": "95 Kč",
                "allergens": ["12"],
                "description": "Kolby Morava, polosuché"
            },
            {
                "id": "sklo-cuvee-bile",
                "name": "Cuvée bílé",
                "weight": "0,15l",
                "price": "98 Kč",
                "allergens": ["12"],
                "description": "Kraus Čechy"
            },
            {
                "id": "sklo-gruner-veltliner",
                "name": "Grüner Veltliner",
                "weight": "0,15l",
                "price": "109 Kč",
                "allergens": ["12"],
                "description": "Heuriger Rakousko"
            },
            {
                "id": "sklo-chardonnay",
                "name": "Chardonnay",
                "weight": "0,15l",
                "price": "125 Kč",
                "allergens": ["12"],
                "description": "Adulation Kalifornie"
            },
            {
                "id": "sklo-modry-portugal-rose",
                "name": "Modrý Portugal rosé",
                "weight": "0,15l",
                "price": "95 Kč",
                "allergens": ["12"],
                "description": "Kolby Morava"
            },
            {
                "id": "sklo-modry-portugal",
                "name": "Modrý Portugal",
                "weight": "0,15l",
                "price": "95 Kč",
                "allergens": ["12"],
                "description": "Kolby Morava"
            },
            {
                "id": "sklo-cuvee-cervene",
                "name": "Cuvée červené",
                "weight": "0,15l",
                "price": "98 Kč",
                "allergens": ["12"],
                "description": "Kraus Čechy"
            },
            {
                "id": "sklo-pinot-noir",
                "name": "Pinot Noir",
                "weight": "0,15l",
                "price": "125 Kč",
                "allergens": ["12"],
                "description": "Adulation Kalifornie"
            }
        ]
    },
    {
        "id": "aperitivy",
        "name": "Aperitivy",
        "badge": "Aperitivy",
        "description": "Klasické a šumivé aperitivy k povzbuzení chuti",
        "iconName": "Martini",
        "items": [
            {
                "id": "aperol-spritz",
                "name": "Aperol Spritz",
                "weight": None,
                "price": "155 Kč",
                "allergens": [],
                "description": "Aperol, charmat, soda"
            },
            {
                "id": "hugo-spritz",
                "name": "Hugo Spritz",
                "weight": None,
                "price": "155 Kč",
                "allergens": [],
                "description": "charmat, bezový elixír, limeta, máta, soda"
            },
            {
                "id": "mimosa",
                "name": "Mimosa",
                "weight": None,
                "price": "168 Kč",
                "allergens": [],
                "description": "charmat, pomerančový fresh, cukrový sirup"
            },
            {
                "id": "kir",
                "name": "Kir",
                "weight": None,
                "price": "165 Kč",
                "allergens": [],
                "description": "créme de cassis, charmat"
            },
            {
                "id": "campari-bitter",
                "name": "Campari Bitter",
                "weight": "0,06l",
                "price": "87 Kč",
                "allergens": [],
                "description": "italský nahořklý bylinný aperitiv"
            },
            {
                "id": "martini-dry",
                "name": "Martini Dry",
                "weight": "0,08l",
                "price": "79 Kč",
                "allergens": [],
                "description": "suchý bílý italský vermut"
            },
            {
                "id": "cinzano-rosso-bianco",
                "name": "Cinzano Rosso / Bianco",
                "weight": "0,08l",
                "price": "79 Kč",
                "allergens": [],
                "description": "italský vermut červený nebo bílý"
            },
            {
                "id": "grahams-porto-10y",
                "name": "Grahams Porto Tawny 10y",
                "weight": "0,06l",
                "price": "225 Kč",
                "allergens": ["12"],
                "description": "desetileté portugalské portské víno zrající v dubových sudech"
            }
        ]
    },
    {
        "id": "nealko-aperitivy",
        "name": "Nealko aperitivy a koktejly",
        "badge": "Nealko aperitivy a koktejly",
        "description": "Sofistikované osvěžující koktejly a aperitivy bez kapky alkoholu",
        "iconName": "Martini",
        "items": [
            {
                "id": "crodino",
                "name": "Crodino",
                "weight": "0,175l",
                "price": "109 Kč",
                "allergens": [],
                "description": "nealkoholický bitter"
            },
            {
                "id": "martini-floreale-tonic",
                "name": "Martini Floreale Alcohol free & Thomas Henry Tonic",
                "weight": None,
                "price": "165 Kč",
                "allergens": [],
                "description": "nealkoholické Martini, tonik, sušený pomeranč"
            },
            {
                "id": "bitter-soda-gasco",
                "name": "Bitter soda J.Gasco",
                "weight": "0,2l",
                "price": "115 Kč",
                "allergens": [],
                "description": "nealkoholický bitter soda"
            },
            {
                "id": "tanqueray-00-tonic",
                "name": "Tanqueray Alcohol Free & Fever-Tree Tonic",
                "weight": None,
                "price": "199 Kč",
                "allergens": [],
                "description": "nealkoholický G&T s limetou"
            }
        ]
    },
    {
        "id": "klasicke-koktejly",
        "name": "Klasické koktejly",
        "badge": "Klasické koktejly",
        "description": "Ikonické světové koktejly míchané podle originálních barových receptur",
        "iconName": "Martini",
        "items": [
            {
                "id": "negroni",
                "name": "Negroni",
                "weight": None,
                "price": "195 Kč",
                "allergens": [],
                "description": "gin, Campari, Cinzano rosso"
            },
            {
                "id": "margarita",
                "name": "Margarita",
                "weight": None,
                "price": "185 Kč",
                "allergens": [],
                "description": "tequila, Cointreau, limetová šťáva"
            },
            {
                "id": "mojito",
                "name": "Mojito",
                "weight": None,
                "price": "185 Kč",
                "allergens": [],
                "description": "rum, máta, limeta, třtinový cukr"
            },
            {
                "id": "frozen-strawberry-daiquiri",
                "name": "Frozen Strawberry Daiquiri",
                "weight": None,
                "price": "195 Kč",
                "allergens": [],
                "description": "rum, limetová šťáva, cukrový sirup, jahody"
            },
            {
                "id": "cuba-libre",
                "name": "Cuba Libre",
                "weight": None,
                "price": "165 Kč",
                "allergens": [],
                "description": "rum, citrónová šťáva, Coca Cola"
            },
            {
                "id": "mai-tai",
                "name": "Mai-Tai",
                "weight": None,
                "price": "199 Kč",
                "allergens": ["8"],
                "description": "bílý a tmavý rum, curacao, mandlový likér, limetová šťáva"
            },
            {
                "id": "porn-star-martini",
                "name": "Porn star Martini",
                "weight": None,
                "price": "232 Kč",
                "allergens": [],
                "description": "vanilková vodka, mučenkový likér, vanilkový sirup, limetová šťáva, charmat"
            },
            {
                "id": "skinny-bitch",
                "name": "Skinny bitch",
                "weight": None,
                "price": "125 Kč",
                "allergens": [],
                "description": "vodka, limetová šťáva, soda"
            },
            {
                "id": "cosmopolitan",
                "name": "Cosmopolitan",
                "weight": None,
                "price": "160 Kč",
                "allergens": [],
                "description": "vodka, Cointreau, brusinkový džus, limetová šťáva"
            },
            {
                "id": "moscow-mule",
                "name": "Moscow mule",
                "weight": None,
                "price": "185 Kč",
                "allergens": [],
                "description": "vodka, limetová šťáva, ginger beer"
            },
            {
                "id": "french-martini",
                "name": "French Martini",
                "weight": None,
                "price": "195 Kč",
                "allergens": [],
                "description": "vodka, malinový likér, ananasový džus"
            },
            {
                "id": "espresso-martini",
                "name": "Espresso Martini",
                "weight": None,
                "price": "195 Kč",
                "allergens": [],
                "description": "vodka, Kahlúa, cukrový sirup, espresso"
            },
            {
                "id": "paloma",
                "name": "Paloma",
                "weight": None,
                "price": "195 Kč",
                "allergens": [],
                "description": "tequila, limitován šťáva, agáve sirup, grepfruit J.Gasco Soda Rosa, sůl"
            }
        ]
    },
    {
        "id": "koktejly-fuze",
        "name": "Koktejly fuze",
        "badge": "Koktejly fuze",
        "description": "Originální autorské koktejly vytvořené týmem barmanů restaurace FUZE",
        "iconName": "Martini",
        "items": [
            {
                "id": "truffle-negroni",
                "name": "Truffle Negroni",
                "weight": None,
                "price": "205 Kč",
                "allergens": [],
                "description": "truffle gin, Campari, Cinzano rosso"
            },
            {
                "id": "fizzy-fuze",
                "name": "Fizzy Fuze",
                "weight": None,
                "price": "175 Kč",
                "allergens": [],
                "description": "gin, liči džus, ananasový džus, bezinkový sirup, limetová šťáva, soda"
            },
            {
                "id": "florencia-fashion",
                "name": "Florencia Fashion",
                "weight": None,
                "price": "245 Kč",
                "allergens": [],
                "description": "whisky, švestkový sirup, čokoládový bitters"
            },
            {
                "id": "am-spritz",
                "name": "A.M. Spritz",
                "weight": None,
                "price": "185 Kč",
                "allergens": [],
                "description": "crémant, gin, broskvový sirup, limetová šťáva"
            },
            {
                "id": "passionata",
                "name": "Passionata",
                "weight": None,
                "price": "175 Kč",
                "allergens": [],
                "description": "rum, mučenka, melounový sirup, brusinkový džus"
            }
        ]
    },
    {
        "id": "gin-a-tonic",
        "name": "Gin&tonic",
        "badge": "Gin&tonic",
        "description": "Perfektně vyladěné kombinace prémiových ginů a vybraných toniků",
        "iconName": "GlassWater",
        "items": [
            {
                "id": "gt-tanqueray",
                "name": "Tanqueray & Thomas Henry Tonic",
                "weight": None,
                "price": "188 Kč",
                "allergens": [],
                "description": "klasický s limetou"
            },
            {
                "id": "gt-fiesta-garage22",
                "name": "Fiesta Garage 22 & Guilti tonic lime",
                "weight": None,
                "price": "219 Kč",
                "allergens": [],
                "description": "zábavný s limetou"
            },
            {
                "id": "gt-hendricks",
                "name": "Hendrick`s & Thomas Henry Tonic",
                "weight": None,
                "price": "208 Kč",
                "allergens": [],
                "description": "svěží s okurkou"
            },
            {
                "id": "gt-endorphin-imagine",
                "name": "Endorphin Magic imaGINe & Fever-Tree Tonic",
                "weight": None,
                "price": "239 Kč",
                "allergens": [],
                "description": "iluzionistický s borůvkami"
            },
            {
                "id": "gt-flame-of-passion",
                "name": "Flame of Passion Pink Gin & Thomas Henry Pink Grapefruit Tonic",
                "weight": None,
                "price": "228 Kč",
                "allergens": [],
                "description": "podmanivý se sušeným grepem"
            },
            {
                "id": "gt-endorphin-copper-moon",
                "name": "Endorphin Copper Moon & Fever-Tree Mediterranean Tonic",
                "weight": None,
                "price": "228 Kč",
                "allergens": [],
                "description": "plný bylinek a pepře"
            }
        ]
    },
    {
        "id": "ovocne-destilaty",
        "name": "Ovocné destiláty 0,03l",
        "badge": "Ovocné destiláty",
        "description": "Špičkové české ovocné pálenky z vyhlášených řemeslných palíren",
        "iconName": "Flame",
        "items": [
            {
                "id": "slivovice-radlik",
                "name": "Slivovice",
                "weight": "0,03l",
                "price": "105 Kč",
                "allergens": [],
                "description": "Radlík, jemná švestková pálenka z oceňovaného lihovaru"
            },
            {
                "id": "slivovice-ze-sudu-radlik",
                "name": "Slivovice ze sudu",
                "weight": "0,03l",
                "price": "140 Kč",
                "allergens": [],
                "description": "Radlík, švestkový destilát dozrávající v dubových sudech"
            },
            {
                "id": "hruskovice-skanzen",
                "name": "Hruškovice Williams",
                "weight": "0,03l",
                "price": "110 Kč",
                "allergens": [],
                "description": "Skanzen, poctivý hruškový destilát z aromatických hrušek Williams"
            },
            {
                "id": "hruskovice-ze-sudu-radlik",
                "name": "Hruškovice ze sudu",
                "weight": "0,03l",
                "price": "140 Kč",
                "allergens": [],
                "description": "Radlík, hruškový destilát zušlechtěný v dřevěných sudech"
            },
            {
                "id": "merunkovice-svach",
                "name": "Meruňkovice",
                "weight": "0,03l",
                "price": "120 Kč",
                "allergens": [],
                "description": "Svach, voňavá meruňková pálenka z jihočeské palírny Svach"
            },
            {
                "id": "visnovice-zubri",
                "name": "Višňovice",
                "weight": "0,03l",
                "price": "98 Kč",
                "allergens": [],
                "description": "Zubří, poctivý destilát ze zralých višní z valašského Zubří"
            },
            {
                "id": "jablkovice-galli",
                "name": "Jablkovice",
                "weight": "0,03l",
                "price": "98 Kč",
                "allergens": [],
                "description": "Galli, čistý a svěží jablečný destilát z lihovaru Galli"
            },
            {
                "id": "rybizovice-raspenava",
                "name": "Rybízovice",
                "weight": "0,03l",
                "price": "160 Kč",
                "allergens": [],
                "description": "Raspenava, raritní vysoce ceněný destilát z černého a červeného rybízu"
            },
            {
                "id": "vinovice-ze-sudu-radlik",
                "name": "Vínovice ze sudu",
                "weight": "0,03l",
                "price": "149 Kč",
                "allergens": [],
                "description": "Radlík, ušlechtilý vinný destilát školený v dubových sudech"
            },
            {
                "id": "traminovice-kolby",
                "name": "Tramínovice",
                "weight": "0,03l",
                "price": "135 Kč",
                "allergens": [],
                "description": "Kolby, odrůdová pálenka z hroznů Tramínu červeného z vinařství Kolby"
            },
            {
                "id": "ponesicka-mrkvovice",
                "name": "Poněšická Mrkvovice",
                "weight": "0,03l",
                "price": "123 Kč",
                "allergens": [],
                "description": "Poněšice, unikátní raritní zeleninový destilát z karotky z lihovaru Poněšice"
            },
            {
                "id": "malinovice-silver-martenz",
                "name": "Malinovice Silver",
                "weight": "0,03l",
                "price": "175 Kč",
                "allergens": [],
                "description": "Martenz, luxusní malinový průtahový destilát z lesních malin"
            }
        ]
    },
    {
        "id": "vodky",
        "name": "Vodky 0,03l",
        "badge": "Vodky",
        "description": "Prémiové čisté vodky z České republiky i ze světa",
        "iconName": "Flame",
        "items": [
            {
                "id": "anton-kaapl-legionar",
                "name": "Anton Kaapl LEGIONÄR",
                "weight": "0,03l",
                "price": "75 Kč",
                "allergens": [],
                "description": "jihočeská řemeslná vodka z rodinného lihovaru Jílovice, destilovaná s měkkou šumavskou pramenitou vodou"
            },
            {
                "id": "nemiroff",
                "name": "Nemiroff",
                "weight": "0,03l",
                "price": "85 Kč",
                "allergens": [],
                "description": "slavná pšeničná vodka s vícestupňovou filtrací"
            },
            {
                "id": "grey-goose",
                "name": "Grey Goose",
                "weight": "0,03l",
                "price": "135 Kč",
                "allergens": [],
                "description": "luxusní francouzská pšeničná vodka z oblasti Picardie"
            }
        ]
    },
    {
        "id": "giny",
        "name": "Giny 0,03l",
        "badge": "Giny",
        "description": "Prémiové řemeslné giny z tuzemska i ze světa",
        "iconName": "Flame",
        "items": [
            {
                "id": "gin-tanqueray",
                "name": "Tanqueray",
                "weight": "0,03l",
                "price": "89 Kč",
                "allergens": [],
                "description": "klasický britský London Dry Gin destilovaný se čtyřmi bylinami"
            },
            {
                "id": "gin-hendricks",
                "name": "Hendrick`s",
                "weight": "0,03l",
                "price": "126 Kč",
                "allergens": [],
                "description": "skotský řemeslný gin s infuzí okurky a růže"
            },
            {
                "id": "gin-starej-dobrej",
                "name": "Starej Dobrej Gin",
                "weight": "0,03l",
                "price": "159 Kč",
                "allergens": [],
                "description": "Poněšice, řemeslný český bylinný gin z rodinné palírny Poněšice"
            },
            {
                "id": "gin-truffle",
                "name": "Truffle gin",
                "weight": "0,03l",
                "price": "155 Kč",
                "allergens": [],
                "description": "Garage 22, unikátní holešovický gin destilovaný s pravými černými lanýži"
            }
        ]
    },
    {
        "id": "rumy",
        "name": "Rumy 0,03l",
        "badge": "Rumy",
        "description": "Vyzrálé třtinové rumy z Karibiku, Střední a Jižní Ameriky",
        "iconName": "Flame",
        "items": [
            {
                "id": "havana-club-3",
                "name": "Havana Club Anejo 3 Anos",
                "weight": "0,03l",
                "price": "66 Kč",
                "allergens": [],
                "description": "tradiční kubánský bílý rum zrající 3 roky v sudech z bílého dubu"
            },
            {
                "id": "el-dorado-12y",
                "name": "El Dorado 12y",
                "weight": "0,03l",
                "price": "149 Kč",
                "allergens": [],
                "description": "guyanský melasový rum zrající 12 let u řeky Demerara"
            },
            {
                "id": "mount-gay-xo",
                "name": "Mount Gay XO",
                "weight": "0,03l",
                "price": "186 Kč",
                "allergens": [],
                "description": "prémiový barbadoský rum z nejstarší palírny na světě (od roku 1703)"
            },
            {
                "id": "abuelo-7y",
                "name": "Abuelo 7y",
                "weight": "0,03l",
                "price": "135 Kč",
                "allergens": [],
                "description": "panamský rum z vlastní třtinové melasy, zrající 7 let v malých sudech"
            },
            {
                "id": "eminente-reserva-7y",
                "name": "Eminente Reserva 7y",
                "weight": "0,03l",
                "price": "172 Kč",
                "allergens": [],
                "description": "kubánský prémiový rum s vysokým podílem stařených aguardientes"
            },
            {
                "id": "diplomatico",
                "name": "Diplomático",
                "weight": "0,03l",
                "price": "149 Kč",
                "allergens": [],
                "description": "venezuelský rum zrající až 12 let v sudech po bourbonu, sametově sladký s tóny karamelu"
            },
            {
                "id": "zacapa-23y",
                "name": "Zacapa 23y",
                "weight": "0,03l",
                "price": "165 Kč",
                "allergens": [],
                "description": "guatemalský rum z panenského medu zrající systémem Solera v nadmořské výšce 2300 m"
            }
        ]
    },
    {
        "id": "tequily",
        "name": "Tequily 0,03l",
        "badge": "Tequily",
        "description": "Prémiové tequily ze 100% modré agáve a sběratelské edice",
        "iconName": "Flame",
        "items": [
            {
                "id": "tres-alegres-compadres",
                "name": "Tres Alegres Compadres Blanco",
                "weight": "0,03l",
                "price": "89 Kč",
                "allergens": [],
                "description": "100% modrá agáve, neuleželá čistá tequila s citrusovými tóny"
            },
            {
                "id": "herradura-reposado",
                "name": "Herradura Reposado",
                "weight": "0,03l",
                "price": "168 Kč",
                "allergens": [],
                "description": "prémiová tequila zrající 11 měsíců v sudech z bílého dubu"
            },
            {
                "id": "corralejo-reposado",
                "name": "Tequila Corralejo Reposado",
                "weight": "0,03l",
                "price": "149 Kč",
                "allergens": [],
                "description": "100% Agave, zrající v kombinaci amerických, francouzských a mexických dubových sudů"
            },
            {
                "id": "cofradia-rose-catrina",
                "name": "La Cofradia Reposado Rosé „ed. Catrina”",
                "weight": "0,03l",
                "price": "185 Kč",
                "allergens": [],
                "description": "limitovaná edice v ručně malované keramické lahvi, zrající v sudech po červeném víně"
            },
            {
                "id": "cofradia-black-catrina",
                "name": "La Cofradia Black „ed. Catrina”",
                "weight": "0,03l",
                "price": "185 Kč",
                "allergens": [],
                "description": "černá sběratelská keramická edice Catrina, zrající v silně vypálených dubových sudech"
            }
        ]
    },
    {
        "id": "whisky-whiskey-bourbon",
        "name": "Whisky, whiskey, bourbon 0,03l",
        "badge": "Whisky, whiskey, bourbon",
        "description": "Výběr skotských single malt, irských whiskey, amerických bourbonů i moravské whisky",
        "iconName": "Flame",
        "items": [
            {
                "id": "goldcock-blended",
                "name": "Goldcock blended",
                "weight": "0,03l",
                "price": "62 Kč",
                "allergens": [],
                "description": "česká whisky z Těšetic z moravského ječmene, zrající v českých dubových sudech"
            },
            {
                "id": "glenfiddich-15y",
                "name": "Glenfiddich 15y",
                "weight": "0,03l",
                "price": "165 Kč",
                "allergens": [],
                "description": "skotská single malt whisky zrající systémem Solera ve třech typech sudů"
            },
            {
                "id": "talisker-10y",
                "name": "Talisker 10y",
                "weight": "0,03l",
                "price": "165 Kč",
                "allergens": [],
                "description": "ostrovní single malt whisky z ostrova Skye, rašelinová a kouřová s mořskou solí"
            },
            {
                "id": "monkey-shoulder",
                "name": "Monkey Shoulder",
                "weight": "0,03l",
                "price": "112 Kč",
                "allergens": [],
                "description": "skotská blended malt whisky míchaná ze tří předních palíren oblasti Speyside"
            },
            {
                "id": "jameson",
                "name": "Jameson",
                "weight": "0,03l",
                "price": "75 Kč",
                "allergens": [],
                "description": "třikrát destilovaná irská whiskey pro maximální jemnost"
            },
            {
                "id": "jack-daniels",
                "name": "Jack Daniels",
                "weight": "0,03l",
                "price": "105 Kč",
                "allergens": [],
                "description": "Tennessee whiskey filtrovaná přes dřevěné uhlí z cukrového javoru"
            }
        ]
    },
    {
        "id": "brandy-a-cognac",
        "name": "Brandy & cognac 0,03l",
        "badge": "Brandy & cognac",
        "description": "Ušlechtilé vinné destiláty a koňaky zrající v dubových sudech",
        "iconName": "Flame",
        "items": [
            {
                "id": "metaxa-5",
                "name": "Metaxa *****",
                "weight": "0,03l",
                "price": "75 Kč",
                "allergens": [],
                "description": "řecká brandy s muškátovými víny z ostrovů Samos a Lemnos a bylinami"
            },
            {
                "id": "remy-martin-1738",
                "name": "Remy Martin 1738",
                "weight": "0,03l",
                "price": "170 Kč",
                "allergens": [],
                "description": "prestižní francouzský koňak Fine Champagne Accord Royal zrající v opálených sudech"
            }
        ]
    },
    {
        "id": "palenky-a-likery",
        "name": "Pálenky & likéry 0,03l",
        "badge": "Pálenky & likéry",
        "description": "Tradiční bylinné a ovocné likéry, speciality a řemeslné pálenky",
        "iconName": "Flame",
        "items": [
            {
                "id": "fuzovice",
                "name": "Fuzovice",
                "weight": "0,03l",
                "price": "140 Kč",
                "allergens": [],
                "description": "FUZE/Agnes 45 %, autorská pálenka z pivní mladiny s chmelem Mandarina Bavaria"
            },
            {
                "id": "absinth-st-antoine",
                "name": "Absinth St. Antoine",
                "weight": "0,03l",
                "price": "165 Kč",
                "allergens": [],
                "description": "Žufánek, přírodní destilovaný absint z pravého pelyňku, anýzu a fenyklu"
            },
            {
                "id": "kminka-garage22",
                "name": "Kmínka",
                "weight": "0,03l",
                "price": "78 Kč",
                "allergens": [],
                "description": "Garage 22, moderní řemeslný likér s destilovaným kmínem a citrusovou kůrou"
            },
            {
                "id": "kontusovka-zufanek",
                "name": "Kontušovka",
                "weight": "0,03l",
                "price": "95 Kč",
                "allergens": [],
                "description": "Žufánek, tradiční anýzový bylinný likér s koriandrem, fenyklem a badyánem"
            },
            {
                "id": "orechovy-liker-radlik",
                "name": "Ořechový likér",
                "weight": "0,03l",
                "price": "119 Kč",
                "allergens": ["8"],
                "description": "Radlík, jemný ořechový likér macerovaný ze zelených svatojánských ořechů"
            },
            {
                "id": "hustopecska-mandlovka",
                "name": "Hustopečská Mandlovka",
                "weight": "0,03l",
                "price": "98 Kč",
                "allergens": [],
                "description": "originální moravská mandlová lihovina z Hustopečí"
            },
            {
                "id": "jagermeister",
                "name": "Jägermeister",
                "weight": "0,03l",
                "price": "65 Kč",
                "allergens": [],
                "description": "německý bylinný likér z 56 bylin, květů, kořenů a plodů"
            },
            {
                "id": "podebradska-samicka",
                "name": "Poděbradská Samička",
                "weight": "0,03l",
                "price": "58 Kč",
                "allergens": [],
                "description": "tradiční polabský bylinný likér s vyváženou hořkosladkou chutí"
            },
            {
                "id": "becherovka-unfiltered",
                "name": "Becherovka",
                "weight": "0,03l",
                "price": "65 Kč",
                "allergens": [],
                "description": "Unfiltered, karlovarský bylinný likér v nefiltrované prémiové podobě"
            },
            {
                "id": "smoked-grappa-tosolini",
                "name": "Smoked Grappa Bepi Tosolini",
                "weight": "0,03l",
                "price": "195 Kč",
                "allergens": [],
                "description": "italská grappa z vylisovaných hroznů uzená dubovým dřevem"
            },
            {
                "id": "bezovy-elixir-jelinek",
                "name": "Bezový elixír R.Jelínek",
                "weight": "0,03l",
                "price": "58 Kč",
                "allergens": [],
                "description": "likér z květů černého bezu od vizovického Rudolfa Jelínka"
            },
            {
                "id": "creme-de-cassis",
                "name": "Créme de cassis",
                "weight": "0,03l",
                "price": "68 Kč",
                "allergens": [],
                "description": "Le Duc Charmant, Jenčík, lahodný hustý likér z černého rybízu"
            },
            {
                "id": "vajecnak-bartida",
                "name": "Vaječňák",
                "weight": "0,03l",
                "price": "50 Kč",
                "allergens": ["3", "7"],
                "description": "Bartida, poctivý vaječný likér s vysokým podílem žloutků a rumem"
            },
            {
                "id": "griotte-bartida",
                "name": "Griotte Original",
                "weight": "0,03l",
                "price": "50 Kč",
                "allergens": [],
                "description": "Bartida, prémiový likér s vysokým podílem čisté višňové šťávy"
            },
            {
                "id": "zelena-bartida",
                "name": "Zelená",
                "weight": "0,03l",
                "price": "50 Kč",
                "allergens": [],
                "description": "Bartida, prémiový peprmintový likér z přírodního oleje máty peprné"
            },
            {
                "id": "zelena-svach",
                "name": "Zelená",
                "weight": "0,03l",
                "price": "58 Kč",
                "allergens": [],
                "description": "Svach, řemeslný peprmintový likér z pravé macerované máty peprné"
            }
        ]
    },
    {
        "id": "bubliny",
        "name": "Bubliny",
        "badge": "Bubliny",
        "description": "Špičková šumivá vína, sekty a crémanty z Moravy i Kalifornie",
        "iconName": "Sparkles",
        "items": [
            {
                "id": "bubliny-charmat-palava",
                "name": "Charmat de Vinselekt Pálava",
                "weight": "0,75l",
                "price": "699 Kč",
                "allergens": ["12"],
                "description": "Vinselect Michlovský, extra sec – Morava"
            },
            {
                "id": "bubliny-cremant-vinselekt",
                "name": "Cremant de Vinselekt (Pinot, Chardonnay)",
                "weight": "0,75l",
                "price": "849 Kč",
                "allergens": ["12"],
                "description": "Vinselect Michlovský, extra brut – Morava"
            },
            {
                "id": "bubliny-angels-cowboys",
                "name": "Angels & Cowboys",
                "weight": "0,75l",
                "price": "1199 Kč",
                "allergens": ["12"],
                "description": "NV, brut - North Coast, Kalifornie"
            }
        ]
    },
    {
        "id": "bila-vina",
        "name": "Bílá vína",
        "badge": "Bílá vína",
        "description": "Výběr lahvových bílých vín z Moravy, Rakouska, Německa a Kalifornie",
        "iconName": "Wine",
        "items": [
            {
                "id": "bile-ryzlink-gotberg",
                "name": "Ryzlink rýnský",
                "weight": "0,75l",
                "price": "469 Kč",
                "allergens": ["12"],
                "description": "pozdní sběr Gotberg – Pálava, Morava"
            },
            {
                "id": "bile-pinot-gris-reisten",
                "name": "Pinot Gris",
                "weight": "0,75l",
                "price": "479 Kč",
                "allergens": ["12"],
                "description": "pozdní sběr Reisten – Mikulovsko, Morava"
            },
            {
                "id": "bile-hibernal-bilkovi",
                "name": "Hibernal",
                "weight": "0,75l",
                "price": "495 Kč",
                "allergens": ["12"],
                "description": "pozdní sběr Bílkovi – Velkopavlovicko, Morava"
            },
            {
                "id": "bile-sauvignon-halkoci",
                "name": "Sauvignon",
                "weight": "0,75l",
                "price": "626 Kč",
                "allergens": ["12"],
                "description": "Typik VOC Lukáš Halkoci – Znojemsko, Morava"
            },
            {
                "id": "bile-ryzlink-vlassky-sukal",
                "name": "Ryzlink Vlašský",
                "weight": "0,75l",
                "price": "660 Kč",
                "allergens": ["12"],
                "description": "pozdní sběr Milan Sůkal – Slovácko, Morava"
            },
            {
                "id": "bile-palava-michlovsky",
                "name": "Pálava",
                "weight": "0,75l",
                "price": "506 Kč",
                "allergens": ["12"],
                "description": "pozdní sběr Vinselect Michlovský – Lednicko-Valtický areál, Morava"
            },
            {
                "id": "bile-poysdorfer-saurussel",
                "name": "Poysdorfer Saurüssel",
                "weight": "0,75l",
                "price": "629 Kč",
                "allergens": ["12"],
                "description": "Veltlínské zelené, Hauser – Weinviertel, Rakousko"
            },
            {
                "id": "bile-gruner-satzen-schwarzbock",
                "name": "Grüner Veltliner",
                "weight": "0,75l",
                "price": "723 Kč",
                "allergens": ["12"],
                "description": "Premium Ried Satzen DAC Schwarzbock – Weinviertel, Rakousko"
            },
            {
                "id": "bile-riesling-eva-fricke",
                "name": "Riesling Rheingau",
                "weight": "0,75l",
                "price": "999 Kč",
                "allergens": ["12"],
                "description": "QbA Trocken Eva Fricke – Rheingau, Německo"
            },
            {
                "id": "bile-riesling-gunderloch-red-stone",
                "name": "Riesling",
                "weight": "0,75l",
                "price": "595 Kč",
                "allergens": ["12"],
                "description": "Red Stone QbA trocken Gunderloch – Rheinhessen, Německo"
            },
            {
                "id": "bile-riesling-fritz-haag",
                "name": "Riesling",
                "weight": "0,75l",
                "price": "975 Kč",
                "allergens": ["12"],
                "description": "Tradition Brauneberg Fritz Haag – Mosel, Německo"
            },
            {
                "id": "bile-weisser-burgunder-philipp-kuhn",
                "name": "Weisser Burgunder",
                "weight": "0,75l",
                "price": "725 Kč",
                "allergens": ["12"],
                "description": "Rulandské bílé, Tradition Trocken Philipp Kuhn – Pfalz, Německo"
            },
            {
                "id": "bile-sauvignon-lapis-luna",
                "name": "Sauvignon Blanc",
                "weight": "0,75l",
                "price": "789 Kč",
                "allergens": ["12"],
                "description": "Lapis Luna - North Coast, Kalifornie"
            },
            {
                "id": "bile-chardonnay-knotty-vines",
                "name": "Chardonnay",
                "weight": "0,75l",
                "price": "975 Kč",
                "allergens": ["12"],
                "description": "Knotty Vines – Kalifornie"
            }
        ]
    },
    {
        "id": "ruzova-vina",
        "name": "Růžová vína",
        "badge": "Růžová vína",
        "description": "Svěží moravské růžové víno s ovocnými tóny",
        "iconName": "Wine",
        "items": [
            {
                "id": "ruzove-merlot-rose-bilkovi",
                "name": "Merlot Rosé",
                "weight": "0,75l",
                "price": "405 Kč",
                "allergens": ["12"],
                "description": "pozdní sběr Bílkovi – Velkopavlovicko, Morava"
            }
        ]
    },
    {
        "id": "cervena-vina",
        "name": "Červená vína",
        "badge": "Červená vína",
        "description": "Plná a elegantní červená vína z Čech, Moravy, Rakouska, Německa i Kalifornie",
        "iconName": "Wine",
        "items": [
            {
                "id": "cervene-pinot-noir-rouci-kraus",
                "name": "Pinot Noir",
                "weight": "0,75l",
                "price": "425 Kč",
                "allergens": ["12"],
                "description": "Roučí Malé Kraus – Mělnicko, Čechy"
            },
            {
                "id": "cervene-dornfelder-bilkovi",
                "name": "Dornfelder",
                "weight": "0,75l",
                "price": "419 Kč",
                "allergens": ["12"],
                "description": "Bílkovi - Velkopavlovicko, Morava"
            },
            {
                "id": "cervene-cuvee-red-kolby",
                "name": "Cuvée Red (Cabernet Sauvignon, Merlot)",
                "weight": "0,75l",
                "price": "649 Kč",
                "allergens": ["12"],
                "description": "Kolby – Mikulovsko, Morava"
            },
            {
                "id": "cervene-nina-cuvee-bilkovi",
                "name": "Nina Cuvée (Merlo, Frankovka)",
                "weight": "0,75l",
                "price": "699 Kč",
                "allergens": ["12"],
                "description": "Bílkovi – Velkopavlovicko, Morava"
            },
            {
                "id": "cervene-zweigelt-feller-artinger",
                "name": "Zweigelt",
                "weight": "0,75l",
                "price": "660 Kč",
                "allergens": ["12"],
                "description": "Weingut Feiler-Artinger – Burgenland, Rakousko"
            },
            {
                "id": "cervene-pinot-noir-philipp-kuhn",
                "name": "Pinot Noir",
                "weight": "0,75l",
                "price": "959 Kč",
                "allergens": ["12"],
                "description": "Tradition Philip Kuhn – Pfalz, Německo"
            },
            {
                "id": "cervene-cabernet-lapis-luna",
                "name": "Cabernet Sauvignon",
                "weight": "0,75l",
                "price": "789 Kč",
                "allergens": ["12"],
                "description": "Lapis Luna - Lodi, Kalifornie"
            },
            {
                "id": "cervene-zinfandel-hendry",
                "name": "Zinfandel",
                "weight": "0,75l",
                "price": "995 Kč",
                "allergens": ["12"],
                "description": "Hendry Ranch HRW - Napa Valley, Kalifornie"
            }
        ]
    }
]

# Generate questions for each drink item
print("Generating questions for drink items...")
for cat in DRINK_CATEGORIES:
    for it in cat['items']:
        build_drink_questions(it)
        if it.get('weight') is None:
            it.pop('weight', None)

# Now read existing menuData.ts
with open('src/data/menuData.ts', 'r', encoding='utf-8') as f:
    text_cz = f.read()

start_cz = text_cz.find('export const MENU_CATEGORIES: MenuCategory[] = [') + len('export const MENU_CATEGORIES: MenuCategory[] = ')
end_cz = text_cz.rfind('];') + 1
existing_cats = json.loads(text_cz[start_cz:end_cz])

# Keep food categories (0 to 10)
food_cats = existing_cats[:11]

# Ensure "Chuťovky" naming
for fc in food_cats:
    if fc['id'] == 'chutovky':
        fc['name'] = 'Chuťovky'
        fc['badge'] = 'Chuťovky'

# Keep Alergeny category (last)
alergeny_cat = None
for c in existing_cats:
    if c['id'] == 'alergeny':
        alergeny_cat = c
        break

if not alergeny_cat:
    alergeny_cat = existing_cats[-1]

# Assemble final categories list
final_categories = food_cats + DRINK_CATEGORIES + [alergeny_cat]

# Serialize
counts_export = """

export const TOTAL_ITEMS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
export const TOTAL_QUESTIONS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.reduce((qAcc, item) => qAcc + (item.questions ? item.questions.length : 0), 0), 0);
"""

output_ts = text_cz[:start_cz] + json.dumps(final_categories, ensure_ascii=False, indent=2) + ';' + counts_export

with open('src/data/menuData.ts', 'w', encoding='utf-8') as f:
    f.write(output_ts)

print(f"Successfully updated menuData.ts! Total categories: {len(final_categories)}")
