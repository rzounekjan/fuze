import json

def run():
    with open('src/data/menuDataEn.ts', 'r', encoding='utf-8') as f:
        text = f.read()

    eq_idx = text.find('=')
    bracket_idx = text.find('[', eq_idx)
    semi_idx = text.rfind(';')
    json_str = text[bracket_idx:semi_idx].strip()
    categories = json.loads(json_str)

    # 1. Update Category names
    for cat in categories:
        if cat["id"] == "predkrmy":
            cat["name"] = "starters and small dishes"
            cat["badge"] = "Starters"
            cat["description"] = "Cold and warm starters and small dishes to accompany beer, prepared by the FUZE kitchen."
        elif cat["id"] == "chutovky":
            cat["name"] = "small dishes"
            cat["badge"] = "Bar Snacks"
            cat["description"] = "Crispy bar snacks and savory small dishes to accompany beer."

    # 2. Strict item updates (ingredients, names, weights, prices, notes)
    item_updates = {
        "tatarak": {
            "name": "Sliced beef tartare",
            "weight": "90g",
            "price": "239,-",
            "allergens": ["1", "3", "7"],
            "description": "from tip of the sirloin, tiny pickles, marinated shallots, parsley leaf, sourdough toast fried in beef lard, and confit garlic, potato straw",
            "notes": "from tip of the sirloin, tiny pickles, marinated shallots, parsley leaf, sourdough toast fried in beef lard, and confit garlic, potato straw"
        },
        "klobasa-smrze": {
            "name": "Our veal sausage with morels",
            "weight": "100g",
            "price": "219,-",
            "allergens": ["1", "3", "7", "8", "10"],
            "description": "chestnuts and dried plums, truffle sauce, beer crumble",
            "notes": "chestnuts and dried plums, truffle sauce, beer crumble"
        },
        "foie-gras": {
            "name": "Foie gras pâté",
            "weight": "100g",
            "price": "315,-",
            "allergens": ["1", "3", "7"],
            "description": "in Kasteel Rouge beer jelly, sour cherry sauce, toasted butter brioche",
            "notes": "in Kasteel Rouge beer jelly, sour cherry sauce, toasted butter brioche"
        },
        "veprovy-bok-platky": {
            "name": "Thin slices of pork belly",
            "weight": "100g",
            "price": "169,-",
            "allergens": ["10"],
            "description": "hop-smoked, crispy pork cracklings, purée of roasted apples and horseradish, fried peas",
            "notes": "hop-smoked, crispy pork cracklings, purée of roasted apples and horseradish, fried peas"
        },
        "kureci-krokety": {
            "name": "Fried chicken croquettes",
            "weight": "100g",
            "price": "175,-",
            "allergens": ["1", "3", "7", "14"],
            "description": "with cheddar, our salsa verde, lovage mayonnaise",
            "notes": "with cheddar, our salsa verde, lovage mayonnaise"
        },
        "olomoucke-tvaruzky": {
            "name": "Olomouc curd cheese spread",
            "weight": "",
            "price": "199,-",
            "allergens": ["1", "3", "7", "10"],
            "description": "with onion, marjoram and paprika-mustard seed mayonnaise on toasted sourdough, horseradish and pickled vegetables",
            "notes": "with onion, marjoram and paprika-mustard seed mayonnaise on toasted sourdough, horseradish and pickled vegetables"
        },
        "lanyzovy-popcorn": {
            "name": "Truffle popcorn",
            "weight": "",
            "price": "139,-",
            "allergens": ["7"],
            "description": "with parmesan",
            "notes": "with parmesan"
        },
        "domaci-bramburky": {
            "name": "Homemade potato chips",
            "weight": "",
            "price": "125,-",
            "allergens": ["7"],
            "description": "spicy smoked mayonnaise",
            "notes": "spicy smoked mayonnaise"
        },
        "hovezi-consomme": {
            "name": "Beef consommé",
            "weight": "",
            "price": "109,-",
            "allergens": ["1", "3", "7", "9"],
            "description": "delicate liver dumpling, vegetables",
            "notes": "delicate liver dumpling, vegetables"
        },
        "kremova-humri": {
            "name": "Creamy lobster soup",
            "weight": "",
            "price": "269,-",
            "allergens": ["1", "2", "3", "7", "9"],
            "description": "with sausage and vegetables, baked under puff pastry",
            "notes": "with sausage and vegetables, baked under puff pastry"
        },
        "caesar-salat": {
            "name": "Caesar salad",
            "weight": "",
            "price": "289,-",
            "allergens": ["1", "3", "4", "7", "10"],
            "description": "with oven-roasted pulled chicken, crispy bacon, parmesan, and croutons",
            "notes": "with oven-roasted pulled chicken, crispy bacon, parmesan, and croutons"
        },
        "waldorf-salat": {
            "name": "Waldorf salad",
            "weight": "",
            "price": "245,-",
            "allergens": ["8", "9", "10"],
            "description": "with apples, celery stalk, grapes, pickled walnuts, and mayonnaise dressing",
            "notes": "with apples, celery stalk, grapes, pickled walnuts, and mayonnaise dressing"
        },
        "pecene-koleno": {
            "name": "Roasted Pork Knuckle",
            "weight": "1pc",
            "price": "459,-",
            "allergens": ["1", "10"],
            "description": "/offered daily until sold out/ mustard, grated horseradish, cabbage salad with horseradish",
            "notes": "/offered daily until sold out/ mustard, grated horseradish, cabbage salad with horseradish"
        },
        "veprovy-rizek-duroc": {
            "name": "Thick-cut pork schnitzel",
            "weight": "200g",
            "price": "309,-",
            "allergens": ["1", "3", "4", "7", "10"],
            "description": "from Duroc pork, fines herbes sauce, potato mash, and crispy potato crisps",
            "notes": "from Duroc pork, fines herbes sauce, potato mash, and crispy potato crisps"
        },
        "veprova-zebra": {
            "name": "Pork ribs",
            "weight": "500g",
            "price": "379,-",
            "allergens": ["1", "3", "6", "7", "10"],
            "description": "marinated and slow-roasted in our beer, candied bacon, pearl onions, apple BBQ glaze, our cabbage salad with horseradish, and toasted garlic brioche",
            "notes": "marinated and slow-roasted in our beer, candied bacon, pearl onions, apple BBQ glaze, our cabbage salad with horseradish, and toasted garlic brioche"
        },
        "hovezi-koprovka": {
            "name": "Braised beef with dill sauce",
            "weight": "200g",
            "price": "345,-",
            "allergens": ["1", "3", "7"],
            "description": "served with egg, baby fingerling potatoes and dill oil",
            "notes": "served with egg, baby fingerling potatoes and dill oil"
        },
        "testoviny-kureci": {
            "name": "Pasta filled with delicate chicken mixture",
            "weight": "",
            "price": "299,-",
            "allergens": ["1", "3", "7"],
            "description": "baked in porcini sauce served with grilled oyster mushrooms and herb oil",
            "notes": "baked in porcini sauce served with grilled oyster mushrooms and herb oil"
        },
        "shrimp-roll": {
            "name": "Shrimp roll",
            "weight": "12 pcs",
            "price": "666,-",
            "allergens": ["1", "2", "3", "5", "7", "9", "10"],
            "description": "12 pcs Argentine red shrimp in a butter brioche, cocktail sauce with cognac, salad greens, our fries, Choron sauce",
            "notes": "12 pcs Argentine red shrimp in a butter brioche, cocktail sauce with cognac, salad greens, our fries, Choron sauce"
        },
        "vykosteny-pstruh": {
            "name": "Fillet of deboned rainbow trout",
            "weight": "180g",
            "price": "399,-",
            "allergens": ["3", "4", "7"],
            "description": "pan-seared in butter, choron sauce, roasted tomatoes, herb salad, and roasted winter vegetables",
            "notes": "pan-seared in butter, choron sauce, roasted tomatoes, herb salad, and roasted winter vegetables"
        },
        "svickova-wellington": {
            "name": "Beef Wellington",
            "weight": "200g",
            "price": "675,-",
            "allergens": ["1", "3", "7", "10"],
            "description": "tenderloin wrapped in mushroom and duck liver duxelles seasoned with truffle, cognac sauce, smoked potatoes",
            "notes": "tenderloin wrapped in mushroom and duck liver duxelles seasoned with truffle, cognac sauce, smoked potatoes"
        },
        "burger-foie-gras": {
            "name": "Beef burger with foie gras and smoked blue cheese",
            "weight": "200g",
            "price": "449,-",
            "allergens": ["1", "3", "7"],
            "description": "with smoked blue cheese and duck foie gras, roasted onion mayonnaise, potato straw and small homemade fries",
            "notes": "with smoked blue cheese and duck foie gras, roasted onion mayonnaise, potato straw and small homemade fries"
        },
        "thors-hammer": {
            "name": "Thor's Hammer beef knuckle",
            "weight": "700g",
            "price": "1490,-",
            "allergens": ["1", "11"],
            "description": "slow-braised in our tandoori, Kasteel Rouge sauce, charred shallots, toasted garlic brioche, our salsa verde, smoked potatoes, and our cabbage salad with horseradish. Serves 2 to 4 people",
            "notes": "slow-braised in our tandoori, Kasteel Rouge sauce, charred shallots, toasted garlic brioche, our salsa verde, smoked potatoes, and our cabbage salad with horseradish. Serves 2 to 4 people"
        },
        "us-prime-steaky": {
            "name": "US Prime beef sirloin & ribeye",
            "weight": "250g",
            "price": "519 / 985,-",
            "allergens": [],
            "description": "250g US Prime beef sirloin (519 CZK) or 250g US Prime beef ribeye (985 CZK) served with blistered Padrón peppers",
            "notes": "250g US Prime beef sirloin (519 CZK) or 250g US Prime beef ribeye (985 CZK) served with blistered Padrón peppers"
        },
        "us-prime-burger": {
            "name": "US Prime beef burger",
            "weight": "200g",
            "price": "369,-",
            "allergens": ["1", "3", "7", "10"],
            "description": "grilled bacon, cheddar, onion marmalade, spicy mayonnaise",
            "notes": "grilled bacon, cheddar, onion marmalade, spicy mayonnaise"
        },
        "grilovany-bucek-yuzu": {
            "name": "Grilled pork belly",
            "weight": "300g",
            "price": "299,-",
            "allergens": ["2", "4", "6"],
            "description": "caramelized yuzu sauce, grilled spring onion, chimichurri sauce",
            "notes": "caramelized yuzu sauce, grilled spring onion, chimichurri sauce"
        },
        "nase-pastrami": {
            "name": "Our pastrami from US Prime beef ribs",
            "weight": "200g",
            "price": "455,-",
            "allergens": ["1", "3", "7", "10"],
            "description": "raclette cheese and cabbage salad with horseradish in toasted sourdough bread, pickled vegetables",
            "notes": "raclette cheese and cabbage salad with horseradish in toasted sourdough bread, pickled vegetables"
        },
        "pecene-kure-pec": {
            "name": "½ Roasted chicken in our tandoori",
            "weight": "",
            "price": "279,-",
            "allergens": ["1", "4", "7", "10"],
            "description": "BBQ version: brushed with spicy barbecue sauce, crispy onions, and herb butter /1/7/ | TRUFFLE version: drizzled with truffle butter, potato crisps, chives /7/ | CAESAR version: brushed with anchovy, parmesan, and mustard sauce, served with fried capers /4/7/10/",
            "notes": "BBQ version, TRUFFLE version or CAESAR version"
        },
        "omacka-konakova": {
            "name": "Cognac sauce",
            "weight": "",
            "price": "69,-",
            "allergens": ["7", "9", "10"],
            "description": "warm cream reduction with cognac, cream and veal jus",
            "notes": "warm cream reduction with cognac, cream and veal jus"
        },
        "omacka-choron": {
            "name": "Warm Choron sauce",
            "weight": "",
            "price": "69,-",
            "allergens": ["3", "10"],
            "description": "classic warm béarnaise emulsion enriched with tomato reduction and tarragon",
            "notes": "classic warm béarnaise emulsion enriched with tomato reduction and tarragon"
        },
        "omacka-fines-herbes": {
            "name": "Our fines herbes sauce",
            "weight": "",
            "price": "69,-",
            "allergens": ["4", "9", "10"],
            "description": "warm herb reduction from fresh herbs with a buttery note",
            "notes": "warm herb reduction from fresh herbs with a buttery note"
        },
        "omacka-lanyzova": {
            "name": "Truffle sauce",
            "weight": "",
            "price": "79,-",
            "allergens": ["7", "10"],
            "description": "velvety warm cream reduction with truffle butter and black truffles",
            "notes": "velvety warm cream reduction with truffle butter and black truffles"
        },
        "omacka-pikantni-majo": {
            "name": "Spicy smoked mayonnaise",
            "weight": "",
            "price": "59,-",
            "allergens": ["3", "7"],
            "description": "house mayonnaise seasoned with smoked paprika and chilli",
            "notes": "house mayonnaise seasoned with smoked paprika and chilli"
        },
        "omacka-salsa-verde": {
            "name": "Our salsa verde",
            "weight": "",
            "price": "59,-",
            "allergens": [],
            "description": "fresh cold green sauce of herbs, capers and anchovies",
            "notes": "fresh cold green sauce of herbs, capers and anchovies"
        },
        "omacka-chimichurri": {
            "name": "Chimichurri sauce",
            "weight": "",
            "price": "65,-",
            "allergens": [],
            "description": "fresh Argentine herb sauce made of parsley, oregano, garlic, chilli and olive oil",
            "notes": "fresh Argentine herb sauce made of parsley, oregano, garlic, chilli and olive oil"
        },
        "omacka-kecup": {
            "name": "Ketchup",
            "weight": "",
            "price": "40,-",
            "allergens": [],
            "description": "premium quality tomato ketchup",
            "notes": "premium quality tomato ketchup"
        },
        "nase-hranolky": {
            "name": "Our fries",
            "weight": "",
            "price": "89,-",
            "allergens": [],
            "description": "freshly fried crispy potato fries",
            "notes": "freshly fried crispy potato fries"
        },
        "hranolky-red-leicester": {
            "name": "Fries with truffle mayonnaise and Red Leicester cheese",
            "weight": "",
            "price": "149,-",
            "allergens": ["3", "7"],
            "description": "with truffle mayonnaise and Red Leicester cheese",
            "notes": "with truffle mayonnaise and Red Leicester cheese"
        },
        "bramborova-kase": {
            "name": "Potato mash",
            "weight": "",
            "price": "89,-",
            "allergens": ["7"],
            "description": "with butter and potato crisps",
            "notes": "with butter and potato crisps"
        },
        "zauzene-rohlicek-brambory": {
            "name": "Smoked potatoes",
            "weight": "",
            "price": "99,-",
            "allergens": ["7"],
            "description": "with butter",
            "notes": "with butter"
        },
        "salat-trhane-listy": {
            "name": "Salad of torn lettuce leaves",
            "weight": "",
            "price": "129,-",
            "allergens": ["10"],
            "description": "with green tomatoes and beer vinaigrette",
            "notes": "with green tomatoes and beer vinaigrette"
        },
        "pecena-zimni-zelenina": {
            "name": "Roasted winter vegetables",
            "weight": "",
            "price": "129,-",
            "allergens": ["9"],
            "description": "with cardamom and maple syrup",
            "notes": "with cardamom and maple syrup"
        },
        "zelny-salat-kren": {
            "name": "Cabbage salad with horseradish",
            "weight": "",
            "price": "99,-",
            "allergens": ["3", "7", "11"],
            "description": "with raisins, wine vinegar, and mayonnaise",
            "notes": "with raisins, wine vinegar, and mayonnaise"
        },
        "cesnekova-brioska": {
            "name": "Toasted garlic brioche",
            "weight": "",
            "price": "79,-",
            "allergens": ["1", "3", "7"],
            "description": "toasted fluffy butter brioche with garlic butter",
            "notes": "toasted fluffy butter brioche with garlic butter"
        },
        "kvaskovy-chleb": {
            "name": "Sourdough bread",
            "weight": "",
            "price": "45,-",
            "allergens": ["1", "3", "7"],
            "description": "fresh artisanal crispy sourdough bread",
            "notes": "fresh artisanal crispy sourdough bread"
        },
        "dortik-ganache-sisky": {
            "name": "Ganache Cakes",
            "weight": "",
            "price": "209,-",
            "allergens": ["1", "3", "7", "8"],
            "description": "in the shape of hop cones made from Valrhona Dulcey chocolate, chocolate soil, and sour cherry sauce",
            "notes": "in the shape of hop cones made from Valrhona Dulcey chocolate, chocolate soil, and sour cherry sauce"
        },
        "karamelovy-trhanec": {
            "name": "Caramel shred pancake",
            "weight": "",
            "price": "169,-",
            "allergens": ["1", "3", "7"],
            "description": "with roasted plums and eggnog ice cream",
            "notes": "with roasted plums and eggnog ice cream"
        },
        "pivni-zmrzlina": {
            "name": "Beer ice cream",
            "weight": "",
            "price": "139,-",
            "allergens": ["1", "3", "7"],
            "description": "with malt crumble, whipped cream",
            "notes": "with malt crumble, whipped cream"
        }
    }

    # Apply item updates
    for cat in categories:
        for it in cat["items"]:
            if it["id"] in item_updates:
                upd = item_updates[it["id"]]
                for k, v in upd.items():
                    it[k] = v

    # 3. Synchronize questions with updated descriptions and true ingredients
    for cat in categories:
        for it in cat["items"]:
            for q in it.get("questions", []):
                qid = q["id"]
                if qid == "tatarak-q3":
                    q["question"] = "Which ingredients are included in the Sliced beef tartare?"
                    q["correctAnswer"] = "Tiny pickles, marinated shallots, confit garlic, and potato straw"
                    q["distractors"] = ["Quail egg yolk and capers", "Dijon mustard and anchovies"]
                    q["explanation"] = "The beef tartare contains tip of the sirloin, tiny pickles, marinated shallots, parsley leaf, sourdough toast fried in beef lard, confit garlic, and potato straw."
                elif qid == "klobasa-q2":
                    q["question"] = "Which sauce accompanies our house veal sausage with morels?"
                    q["correctAnswer"] = "Truffle sauce"
                    q["distractors"] = ["Cognac cream sauce", "Mustard jus"]
                    q["explanation"] = "The sausage is served with a rich, velvety truffle sauce and beer crumble."
                elif qid == "veprovy-bok-q2":
                    q["question"] = "What fruit and spicy ingredient is served with the thin slices of pork belly?"
                    q["correctAnswer"] = "Purée of roasted apples and horseradish"
                    q["distractors"] = ["Pear and horseradish purée", "Plum and ginger purée"]
                    q["explanation"] = "The menu ingredients state: hop-smoked, crispy pork cracklings, purée of roasted apples and horseradish, fried peas."
                elif qid == "humri-q2":
                    q["question"] = "Which meat component is included in the lobster soup?"
                    q["correctAnswer"] = "Sausage"
                    q["distractors"] = ["Smoked pork belly", "Duck confit"]
                    q["explanation"] = "The lobster soup contains sausage and root vegetables, baked under a golden puff pastry crust."
                elif qid == "caesar-q1":
                    q["question"] = "Which meat and cheese are featured in our Caesar salad?"
                    q["correctAnswer"] = "Oven-roasted pulled chicken, crispy bacon, and parmesan"
                    q["distractors"] = ["Grilled steak strips and cheddar", "Sous-vide chicken breast and gouda"]
                    q["explanation"] = "The menu specifies oven-roasted pulled chicken, crispy roasted bacon, parmesan, and croutons."
                elif qid == "veprova-zebra-q2":
                    q["question"] = "What bread is served with the beer-marinated pork ribs?"
                    q["correctAnswer"] = "Toasted garlic brioche"
                    q["distractors"] = ["Toasted sourdough bread", "Caraway rye bread"]
                    q["explanation"] = "The menu specifies that pork ribs are served with toasted garlic brioche (opečená česneková brioška)."
                elif qid == "shrimp-roll-q1":
                    q["question"] = "What shrimp and bread are used for our Shrimp roll?"
                    q["correctAnswer"] = "12 pcs Argentine red shrimp in a butter brioche"
                    q["distractors"] = ["Black tiger shrimp in a sesame brioche", "Nordic shrimp in a sourdough baguette"]
                    q["explanation"] = "The dish is made with 12 pieces of Argentine red shrimp in a butter brioche."
                elif qid == "shrimp-roll-q2":
                    q["question"] = "Which two sauces accompany the Shrimp Roll and its fries?"
                    q["correctAnswer"] = "Cocktail sauce with cognac and warm Choron sauce"
                    q["distractors"] = ["Lemon-herb mayonnaise and salsa verde", "Tartar sauce and remoulade"]
                    q["explanation"] = "The shrimp roll features cocktail sauce with cognac inside the brioche and is served with warm Choron sauce for the fries."
                elif qid == "svickova-wellington-q2":
                    q["question"] = "Which sauce and potato side accompany the Beef Wellington?"
                    q["correctAnswer"] = "Cognac sauce and smoked fingerling potatoes"
                    q["distractors"] = ["Veal demi-glace and fries", "Green peppercorn sauce and mashed potatoes"]
                    q["explanation"] = "The Beef Wellington is paired with rich Cognac sauce (koňaková omáčka) and smoked potatoes."
                elif qid == "thors-hammer-q1":
                    q["question"] = "Which sauce is served with the 700g Thor's Hammer beef knuckle?"
                    q["correctAnswer"] = "Kasteel Rouge beer sauce"
                    q["distractors"] = ["FUZEnáč 13° dark smoked beer sauce", "Cognac cream sauce"]
                    q["explanation"] = "The beef knuckle is slow-braised and served with a rich sauce made from Belgian cherry beer Kasteel Rouge."
                elif qid == "vykosteny-pstruh-q2":
                    q["question"] = "Which vegetable garnishes accompany the pan-seared trout?"
                    q["correctAnswer"] = "Roasted tomatoes, herb salad, and roasted winter vegetables"
                    q["distractors"] = ["Butter-glazed seasonal vegetables and parsley potatoes", "Creamy spinach and roasted garlic"]
                    q["explanation"] = "The menu specifies: pan-seared in butter, choron sauce, roasted tomatoes, herb salad, and roasted winter vegetables."
                elif qid in ("trhanec-q1", "karamelovy-trhanec-q1"):
                    q["question"] = "Which fruit and ice cream accompany our Caramel shred pancake?"
                    q["correctAnswer"] = "Roasted plums and house eggnog ice cream"
                    q["distractors"] = ["Salted caramel and crunchy praline", "Apple compote and vanilla ice cream"]
                    q["explanation"] = "The menu specifies: with roasted plums and eggnog ice cream (s pečenými švestkami, zmrzlina z vaječného likéru)."
                elif qid == "chimi-q1":
                    q["question"] = "Which grilled dish on the menu is served with Chimichurri sauce?"
                    q["correctAnswer"] = "Grilled pork belly with yuzu glaze"
                    q["distractors"] = ["Beer-marinated pork ribs", "Deboned trout fillet"]
                    q["explanation"] = "Chimichurri sauce is served with the grilled pork belly with caramelized yuzu sauce."
                elif qid == "chimi-q2":
                    q["question"] = "What is the menu price for a side portion of Chimichurri sauce?"
                    q["correctAnswer"] = "65,-"
                    q["distractors"] = ["49,-", "79,-"]
                    q["explanation"] = "A side portion of fresh Chimichurri sauce is priced at 65 CZK."

    ts_content = "import { MenuCategory } from './menuData';\n\n"
    ts_content += "export const MENU_CATEGORIES_EN: MenuCategory[] = "
    ts_content += json.dumps(categories, ensure_ascii=False, indent=2)
    ts_content += ";\n"

    with open('src/data/menuDataEn.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f"SUCCESS: Updated {len(categories)} categories in src/data/menuDataEn.ts")

if __name__ == '__main__':
    run()
