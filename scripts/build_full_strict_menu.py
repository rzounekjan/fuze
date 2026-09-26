import json
import re

# 1. Load current menuDataEn.ts
with open('src/data/menuDataEn.ts', 'r', encoding='utf-8') as f:
    text = f.read()

eq_idx = text.find('=')
bracket_idx = text.find('[', eq_idx)
semi_idx = text.rfind(';')
json_str = text[bracket_idx:semi_idx].strip()
categories = json.loads(json_str)

# 2. Strict category names & metadata from menueng and menueng2
CAT_METADATA = {
    "predkrmy": {
        "name": "appetizers and small dishes with beer",
        "badge": "Appetizers",
        "description": "Appetizers and small dishes to accompany beer, prepared by the FUZE kitchen."
    },
    "chutovky": {
        "name": "appetizers and small dishes with beer",
        "badge": "Bar Snacks",
        "description": "Crispy bar snacks and popcorn to accompany beer."
    },
    "polevky": {
        "name": "soups",
        "badge": "Soups",
        "description": "Soups prepared fresh daily in our kitchen."
    },
    "salaty": {
        "name": "salad",
        "badge": "Salad",
        "description": "Fresh salad variations."
    },
    "sporak": {
        "name": "from the stove and oven",
        "badge": "Stove & Oven",
        "description": "Specialties from the stove and oven."
    },
    "gril": {
        "name": "from the grill and wood-fired oven",
        "badge": "Grill & Wood Oven",
        "description": "Steaks, burgers and poultry from the grill and wood-fired oven."
    },
    "teple-omacky": {
        "name": "hot sauces",
        "badge": "Hot Sauces",
        "description": "Warm gourmet sauces."
    },
    "studene-omacky": {
        "name": "cold sauces",
        "badge": "Cold Sauces",
        "description": "Cold sauces, relishes and mayonnaise."
    },
    "prilohy": {
        "name": "Sides",
        "badge": "Sides",
        "description": "Fries, mashed potatoes, roasted vegetables and breads."
    },
    "dezerty": {
        "name": "Desserts",
        "badge": "Desserts",
        "description": "Desserts, cakes, shredded pancakes and ice cream."
    },
    "pivo-na-cepu": {
        "name": "beer on tap",
        "badge": "Beer on Tap",
        "description": "Our beers are crafted by our brewmaster Aleš Paik along with his colleagues Martin and Štěpán."
    },
    "kombucha": {
        "name": "ciders",
        "badge": "Ciders & Kombucha",
        "description": "Artisanal ciders and refreshing fermented tea drinks."
    },
    "vody-a-mineralni-vody": {
        "name": "waters and mineral waters",
        "badge": "Waters",
        "description": "Filtered water in a carafe, infused waters and mineral waters."
    },
    "nase-domaci-limonady": {
        "name": "our homemade lemonades",
        "badge": "Homemade Lemonades",
        "description": "Fresh homemade lemonades, iced teas and juices."
    },
    "lahvove-limonady": {
        "name": "bottled lemonades",
        "badge": "Bottled Lemonades",
        "description": "Bottled soft drinks, tonics and ginger beer."
    },
    "kava-caj-a-horke-napoje": {
        "name": "coffee, tea and hot drinks",
        "badge": "Coffee & Tea",
        "description": "Espresso, loose-leaf teas, hot chocolate and winter drinks."
    },
    "vina-po-skle": {
        "name": "wines by the glass",
        "badge": "By the Glass",
        "description": "Sparkling, white, rosé and red wines served by the glass."
    },
    "bublinky": {
        "name": "Bubbles",
        "badge": "Bubbles",
        "description": "Bottled sparkling wines, Charmat, Crémant and Champagne."
    },
    "bila-vina": {
        "name": "white wines",
        "badge": "White Wines",
        "description": "Bottled white wines from Moravia, Austria, Germany and California."
    },
    "ruzova-vina": {
        "name": "rosé wines",
        "badge": "Rosé Wines",
        "description": "Bottled rosé wines."
    },
    "cervena-vina": {
        "name": "red wines",
        "badge": "Red Wines",
        "description": "Bottled red wines from Moravia, Austria, Germany and California."
    },
    "aperitivy": {
        "name": "aperitifs",
        "badge": "Aperitifs",
        "description": "Aperol, spritzes, vermouths and port."
    },
    "nealkoholicke-aperitivy-a-koktejly": {
        "name": "non-alcoholic aperitifs and cocktails",
        "badge": "Non-Alcoholic",
        "description": "Non-alcoholic bitter aperitifs and virgin cocktails."
    },
    "klasicke-koktejly": {
        "name": "classic cocktails",
        "badge": "Classic Cocktails",
        "description": "Timeless classic cocktails."
    },
    "koktejly-fuze": {
        "name": "fuze cocktails",
        "badge": "FUZE Cocktails",
        "description": "Signature FUZE cocktails crafted by our bar team."
    },
    "gin-a-tonic": {
        "name": "gin&tonic",
        "badge": "Gin & Tonic",
        "description": "Selected gins paired with tonic."
    },
    "ovocne-destilaty": {
        "name": "fruit brandies 0.03L",
        "badge": "Fruit Brandies",
        "description": "Czech and Moravian fruit brandies (0.03 l)."
    },
    "vodky": {
        "name": "vodka 0.03L",
        "badge": "Vodka",
        "description": "Selected vodkas (0.03 l)."
    },
    "rumy": {
        "name": "rums 0,03L",
        "badge": "Rums",
        "description": "Aged Caribbean and Latin American rums (0.03 l)."
    },
    "tequily": {
        "name": "tequilas 0,03L",
        "badge": "Tequilas",
        "description": "100% agave tequilas (0.03 l)."
    },
    "whisky-whiskey-bourbon": {
        "name": "whisky, whiskey, bourbon 0,03L",
        "badge": "Whisky",
        "description": "Single malt and blended whiskies, Irish whiskeys and bourbons (0.03 l)."
    },
    "brandy-a-cognac": {
        "name": "brandy and cognac 0,03L",
        "badge": "Brandy & Cognac",
        "description": "Brandy and fine cognacs (0.03 l)."
    },
    "palenky-a-likery": {
        "name": "spirits & liqueurs 0,03L",
        "badge": "Spirits & Liqueurs",
        "description": "FUZOVICE, traditional herbal liqueurs and fruit liqueurs (0.03 l)."
    }
}

# 3. Strict item definitions (name, weight, price, allergens, description) from menueng and menueng2
ITEM_STRICT = {
    # STARTERS / APPETIZERS
    "tatarak": {
        "name": "Sliced beef tartare",
        "weight": "90g",
        "price": "239,-",
        "allergens": ["1", "3", "7"],
        "description": "from tip of the sirloin, tiny pickles, marinated shallots, parsley leaf, toasted on beef lard, and confit garlic",
        "notes": "from tip of the sirloin, tiny pickles, marinated shallots, parsley leaf, toasted on beef lard, and confit garlic"
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
        "description": "in Kasteel Rouge beer jelly, cherry sauce, toasted butter brioche",
        "notes": "in Kasteel Rouge beer jelly, cherry sauce, toasted butter brioche"
    },
    "veprovy-bok-platky": {
        "name": "Thin slices of pork belly",
        "weight": "100g",
        "price": "169,-",
        "allergens": ["10"],
        "description": "hop-smoked, crispy pork cracklings, over roasted apples and horseradish, fried peas",
        "notes": "hop-smoked, crispy pork cracklings, over roasted apples and horseradish, fried peas"
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
        "description": "with onion and paprika-mustard seed mayonnaise on toasted sourdough, horseradish and pickled vegetables",
        "notes": "with onion and paprika-mustard seed mayonnaise on toasted sourdough, horseradish and pickled vegetables"
    },
    # BAR SNACKS
    "lanyzovy-popcorn": {
        "name": "Truffle popcorn",
        "weight": "",
        "price": "139,-",
        "allergens": ["7"],
        "description": "with parmesan",
        "notes": "with parmesan"
    },
    "domaci-bramburky": {
        "name": "Homemade potatoes",
        "weight": "",
        "price": "125,-",
        "allergens": ["7"],
        "description": "spicy smoked mayonnaise",
        "notes": "spicy smoked mayonnaise"
    },
    # SOUPS
    "hovezi-consomme": {
        "name": "Beef consommé",
        "weight": "",
        "price": "109,-",
        "allergens": ["9"],
        "description": "delicate liver dumpling, vegetables",
        "notes": "delicate liver dumpling, vegetables"
    },
    "kremova-humri": {
        "name": "Creamy lobster soup",
        "weight": "",
        "price": "269,-",
        "allergens": ["1", "2", "3", "7", "9"],
        "description": "with saffron and brandy, topped with puff pastry",
        "notes": "with saffron and brandy, topped with puff pastry"
    },
    # SALADS
    "caesar-salat": {
        "name": "Caesar salad",
        "weight": "",
        "price": "289,-",
        "allergens": ["1", "3", "4", "7", "10"],
        "description": "with grilled chicken breast, parmesan, and croutons",
        "notes": "with grilled chicken breast, parmesan, and croutons"
    },
    "waldorf-salat": {
        "name": "Waldorf salad",
        "weight": "",
        "price": "245,-",
        "allergens": ["8", "9", "10"],
        "description": "with apples, celery, grapes, and walnut mayonnaise dressing",
        "notes": "with apples, celery, grapes, and walnut mayonnaise dressing"
    },
    # STOVE AND OVEN
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
        "description": "served with egg, baby potatoes and dill oil",
        "notes": "served with egg, baby potatoes and dill oil"
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
        "name": "Shrimp roll 12 pcs Argentine red shrimp",
        "weight": "",
        "price": "666,-",
        "allergens": ["1", "2", "3", "5", "7", "9", "10"],
        "description": "in a butter brioche, cocktail sauce with cognac, salad greens, our fries, Choron sauce",
        "notes": "in a butter brioche, cocktail sauce with cognac, salad greens, our fries, Choron sauce"
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
        "description": "tenderloin wrapped in mushroom and duck liver duxelles, seasoned with truffle, veal demi-glace, smoked potatoes",
        "notes": "tenderloin wrapped in mushroom and duck liver duxelles, seasoned with truffle, veal demi-glace, smoked potatoes"
    },
    "burger-foie-gras": {
        "name": "Beef burger",
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
    # GRILL & WOOD-FIRED OVEN
    "us-prime-steaky": {
        "name": "US Prime beef sirloin & ribeye",
        "weight": "250g",
        "price": "519 / 985,-",
        "allergens": [],
        "description": "US Prime beef sirloin 250g (519 CZK) | US Prime beef ribeye 250g (985 CZK)",
        "notes": "US Prime beef sirloin 250g | US Prime beef ribeye 250g"
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
    # HOT SAUCES
    "omacka-konakova": {
        "name": "Cognac sauce",
        "weight": "",
        "price": "69,-",
        "allergens": ["7", "9", "10"],
        "description": "Cognac sauce",
        "notes": "Warm cognac reduction sauce with veal stock and cream"
    },
    "omacka-choron": {
        "name": "Choron sauce",
        "weight": "",
        "price": "69,-",
        "allergens": ["3", "10"],
        "description": "Choron sauce",
        "notes": "Warm béarnaise-style sauce enriched with tomato reduction"
    },
    "omacka-fines-herbes": {
        "name": "Our fines herbes sauce",
        "weight": "",
        "price": "69,-",
        "allergens": ["4", "9", "10"],
        "description": "Our fines herbes sauce",
        "notes": "Our warm herb butter emulsion with fines herbes"
    },
    "omacka-lanyzova": {
        "name": "Truffle Sauce",
        "weight": "",
        "price": "79,-",
        "allergens": ["7", "10"],
        "description": "Truffle Sauce",
        "notes": "Warm truffle cream sauce"
    },
    # COLD SAUCES
    "omacka-pikantni-majo": {
        "name": "Spicy smoked mayonnaise",
        "weight": "",
        "price": "59,-",
        "allergens": ["3", "7"],
        "description": "Spicy smoked mayonnaise",
        "notes": "Spicy smoked mayonnaise"
    },
    "omacka-salsa-verde": {
        "name": "Our salsa verde",
        "weight": "",
        "price": "59,-",
        "allergens": [],
        "description": "Our salsa verde",
        "notes": "Our salsa verde"
    },
    "omacka-chimichurri": {
        "name": "Cucumber relish",
        "weight": "",
        "price": "65,-",
        "allergens": [],
        "description": "Cucumber relish",
        "notes": "Cucumber relish"
    },
    "omacka-kecup": {
        "name": "Ketchup",
        "weight": "",
        "price": "40,-",
        "allergens": [],
        "description": "Ketchup",
        "notes": "Ketchup"
    },
    # SIDES
    "nase-hranolky": {
        "name": "Our fries",
        "weight": "",
        "price": "89,-",
        "allergens": [],
        "description": "Our fries",
        "notes": "Our fries"
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
        "description": "Toasted garlic brioche",
        "notes": "Toasted garlic brioche"
    },
    "kvaskovy-chleb": {
        "name": "Sourdough bread",
        "weight": "",
        "price": "45,-",
        "allergens": ["1", "3", "7"],
        "description": "Sourdough bread",
        "notes": "Sourdough bread"
    },
    # DESSERTS
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
        "description": "with salted caramel and crunchy praline",
        "notes": "with salted caramel and crunchy praline"
    },
    "pivni-zmrzlina": {
        "name": "Beer ice cream",
        "weight": "",
        "price": "139,-",
        "allergens": ["1", "3", "7"],
        "description": "with malt crumble, whipped cream",
        "notes": "with malt crumble, whipped cream"
    },
    # BEER ON TAP
    "transfuze-12": {
        "name": "TransFUZE 12",
        "weight": "0,3l/0,5l",
        "price": "59/69 CZK",
        "allergens": [],
        "description": "Our traditional light lager, full-bodied with a fresh taste and balanced bitterness, unpasteurized, unfiltered",
        "notes": "Our traditional light lager, full-bodied with a fresh taste and balanced bitterness, unpasteurized, unfiltered"
    },
    "disfuze-10": {
        "name": "DisFuze 10",
        "weight": "0,3l/0,5l",
        "price": "59/69 CZK",
        "allergens": [],
        "description": "Light draft beer, Abv 3.5% Czech classic, honest \"desítka,\" very drinkable refreshing beer with higher bitterness.",
        "notes": "Light draft beer, Abv 3.5% Czech classic, honest \"desítka,\" very drinkable refreshing beer with higher bitterness."
    },
    "infuze-ipa-12": {
        "name": "InFUZE IPA 12",
        "weight": "0,4l",
        "price": "85 CZK",
        "allergens": [],
        "description": "style: Session IPA, 12-degree beer, 4.9% ABV top-fermented beer, light and refreshing, unpasteurized, unfiltered with citrus aroma, cold-hopped (dry hopping)",
        "notes": "style: Session IPA, 12-degree beer, 4.9% ABV top-fermented beer, light and refreshing, unpasteurized, unfiltered with citrus aroma, cold-hopped (dry hopping)"
    },
    "fuzenac-13": {
        "name": "FUZEnáč 13 semi-dark",
        "weight": "0,3l/0,5l",
        "price": "69/78 CZK",
        "allergens": [],
        "description": "Our bottom-fermented beer, amber color with a distinct smoky aroma, full malt smoked flavor, unpasteurized, unfiltered",
        "notes": "Our bottom-fermented beer, amber color with a distinct smoky aroma, full malt smoked flavor, unpasteurized, unfiltered"
    },
    "kasteel-rouge-18": {
        "name": "Kasteel Rouge 18",
        "weight": "0,25l",
        "price": "118 CZK",
        "allergens": [],
        "description": "Top-fermented, 8% dark beer aged 6 months on cherries, from Belgian brewery Van Honsebrouck, rich cherry flavor and aroma",
        "notes": "Top-fermented, 8% dark beer aged 6 months on cherries, from Belgian brewery Van Honsebrouck, rich cherry flavor and aroma"
    },
    "zichovec-passion-fruit": {
        "name": "Zichovec Passion Fruit 12",
        "weight": "0,4l",
        "price": "94 CZK",
        "allergens": [],
        "description": "Sour ale, intensely sour with a strong passion fruit flavor and aroma",
        "notes": "Sour ale, intensely sour with a strong passion fruit flavor and aroma"
    },
    "degustace-piv": {
        "name": "Beer tasting",
        "weight": "6x 0,15l",
        "price": "285 CZK",
        "allergens": [],
        "description": "6 samples of the above beers on a stylish board",
        "notes": "6 samples of the above beers on a stylish board"
    },
    "fuzero-nealko": {
        "name": "FUZEro",
        "weight": "0,4l",
        "price": "69 CZK",
        "allergens": [],
        "description": "our IPL, non-alcoholic lager hopped with American and cold New Zealand hops, with a delicate malt flavor, higher bitterness in the finish, and a beautiful, fresh hop aroma, unpasteurized, unfiltered",
        "notes": "our IPL, non-alcoholic lager hopped with American and cold New Zealand hops, with a delicate malt flavor, higher bitterness in the finish, and a beautiful, fresh hop aroma, unpasteurized, unfiltered"
    },
    "maisels-weisse": {
        "name": "Maisel`s Weisse Non-Alcoholic /bottled/",
        "weight": "0,33l",
        "price": "79 CZK",
        "allergens": [],
        "description": "bavarian Weizenbier, a non-alcoholic wheat beer",
        "notes": "bavarian Weizenbier, a non-alcoholic wheat beer"
    },
    "opre-cider": {
        "name": "Opre` Cider",
        "weight": "0,33l",
        "price": "89 CZK",
        "allergens": [],
        "description": "Craft apple cider from Slovak family farm",
        "notes": "Craft apple cider from Slovak family farm"
    },
    "opre-sour-cherry": {
        "name": "Opre` Sour Cherry",
        "weight": "0,33l",
        "price": "96 CZK",
        "allergens": [],
        "description": "Combines apple cider with refreshing cherry juice",
        "notes": "Combines apple cider with refreshing cherry juice"
    },
    # KOMBUCHA
    "loklok-original": {
        "name": "Loklok Kombucha Original",
        "weight": "0,33l",
        "price": "95 CZK",
        "allergens": [],
        "description": "Natural fermented green and black tea with probiotics",
        "notes": "Natural fermented green and black tea with probiotics"
    },
    "loklok-zazvor": {
        "name": "Loklok Kombucha Ginger",
        "weight": "0,33l",
        "price": "95 CZK",
        "allergens": [],
        "description": "Fermented sparkling tea with cold-pressed fresh ginger",
        "notes": "Fermented sparkling tea with cold-pressed fresh ginger"
    },
    "loklok-malina": {
        "name": "Loklok Kombucha Raspberry",
        "weight": "0,33l",
        "price": "95 CZK",
        "allergens": [],
        "description": "Sparkling fermented tea infused with real raspberry purée",
        "notes": "Sparkling fermented tea infused with real raspberry purée"
    },
    "jzt-kombucha": {
        "name": "JZT Kombucha Sencha & Assam",
        "weight": "0,33l",
        "price": "98 CZK",
        "allergens": [],
        "description": "Small-batch fermented Japanese Sencha and Indian Assam tea",
        "notes": "Small-batch fermented Japanese Sencha and Indian Assam tea"
    },
    # WATERS AND MINERAL WATERS
    "filtrovana-karafa": {
        "name": "Filtered water in a carafe",
        "weight": "0,75l",
        "price": "89 CZK",
        "allergens": [],
        "description": "Still / Sparkling",
        "notes": "Still / Sparkling"
    },
    "filtrovana-sklenice": {
        "name": "Glass of filtered water",
        "weight": "0,3l",
        "price": "35 CZK",
        "allergens": [],
        "description": "Still / Sparkling",
        "notes": "Still / Sparkling"
    },
    "infuzovana-voda": {
        "name": "Infused water in a carafe",
        "weight": "0,75l",
        "price": "99 CZK",
        "allergens": [],
        "description": "Citrus / Mint",
        "notes": "Citrus / Mint"
    },
    "mattoni-grand": {
        "name": "Mattoni Grand still",
        "weight": "0,33l",
        "price": "45 CZK",
        "allergens": [],
        "description": "natural decarbonated mineral water",
        "notes": "natural decarbonated mineral water"
    },
    "vratislavicka-kyselka": {
        "name": "Vratislavická mineral water",
        "weight": "0,75l",
        "price": "119 CZK",
        "allergens": [],
        "description": "natural mineral water, medium mineralized with silicon content, naturally carbonated",
        "notes": "natural mineral water, medium mineralized with silicon content, naturally carbonated"
    },
    # OUR HOMEMADE LEMONADES
    "grep-a-mango": {
        "name": "Grapefruit and mango",
        "weight": "0,4l",
        "price": "84 CZK",
        "allergens": [],
        "description": "Fresh homemade grapefruit and mango lemonade",
        "notes": "Grapefruit and mango"
    },
    "malina-a-bila-cokolada": {
        "name": "Raspberry and white chocolate",
        "weight": "0,4l",
        "price": "84 CZK",
        "allergens": [],
        "description": "Fresh homemade raspberry and white chocolate lemonade",
        "notes": "Raspberry and white chocolate"
    },
    "svestka-a-kardamom": {
        "name": "Plum and cardamom",
        "weight": "0,4l",
        "price": "84 CZK",
        "allergens": [],
        "description": "Fresh homemade plum and cardamom lemonade",
        "notes": "Plum and cardamom"
    },
    "domaci-citronada": {
        "name": "Homemade lemonade",
        "weight": "0,4l",
        "price": "84 CZK",
        "allergens": [],
        "description": "Classic homemade lemon and lime lemonade",
        "notes": "Homemade lemonade"
    },
    "nase-ledovy-caj": {
        "name": "Our homemade iced tea",
        "weight": "0,4l",
        "price": "86 CZK",
        "allergens": [],
        "description": "Jasmine and peach",
        "notes": "Jasmine and peach"
    },
    "fresh-juice": {
        "name": "Fresh juice",
        "weight": "0,2l",
        "price": "125 CZK",
        "allergens": [],
        "description": "Orange / Grapefruit",
        "notes": "Orange / Grapefruit"
    },
    # BOTTLED LEMONADES
    "coca-cola": {
        "name": "Coca Cola / Coca Cola Zero",
        "weight": "0,33l",
        "price": "65 CZK",
        "allergens": [],
        "description": "Classic Coca Cola or zero sugar Coca Cola",
        "notes": "Coca Cola / Coca Cola Zero"
    },
    "thomas-henry-tonic": {
        "name": "Thomas Henry Tonic",
        "weight": "0,2l",
        "price": "75 CZK",
        "allergens": [],
        "description": "Premium botanical tonic water",
        "notes": "Thomas Henry Tonic"
    },
    "fever-tree-tonic": {
        "name": "Fever-Tree Tonic",
        "weight": "0,2l",
        "price": "85 CZK",
        "allergens": [],
        "description": "Artisan tonic with natural quinine",
        "notes": "Fever-Tree Tonic"
    },
    "fever-tree-ginger-beer": {
        "name": "Fever-Tree Ginger Beer",
        "weight": "0,2l",
        "price": "85 CZK",
        "allergens": [],
        "description": "Fiery brewed ginger beer",
        "notes": "Fever-Tree Ginger Beer"
    },
    "red-bull": {
        "name": "Red Bull",
        "weight": "0,2l",
        "price": "99 CZK",
        "allergens": [],
        "description": "can",
        "notes": "can"
    },
    # COFFEE, TEA AND HOT DRINKS
    "espresso": {
        "name": "Espresso",
        "weight": "9g",
        "price": "66 CZK",
        "allergens": [],
        "description": "Single shot espresso (9g)",
        "notes": "Espresso"
    },
    "espresso-macchiato": {
        "name": "Espresso macchiato",
        "weight": "9g",
        "price": "78 CZK",
        "allergens": [],
        "description": "Espresso with milk foam (9g)",
        "notes": "Espresso macchiato"
    },
    "cappuccino": {
        "name": "Cappuccino",
        "weight": "9g",
        "price": "85 CZK",
        "allergens": [],
        "description": "Espresso, steamed milk, rich foam (9g)",
        "notes": "Cappuccino"
    },
    "caffe-latte": {
        "name": "Caffé latte",
        "weight": "9g",
        "price": "88 CZK",
        "allergens": [],
        "description": "Espresso with steamed milk in a tall glass (9g)",
        "notes": "Caffé latte"
    },
    "flat-white": {
        "name": "Flat white",
        "weight": "18g",
        "price": "99 CZK",
        "allergens": [],
        "description": "Double espresso with microfoam (18g)",
        "notes": "Flat white"
    },
    "double-espresso": {
        "name": "Double espresso",
        "weight": "18g",
        "price": "89 CZK",
        "allergens": [],
        "description": "Double shot espresso (18g)",
        "notes": "Double espresso"
    },
    "americano-lungo": {
        "name": "Americano caffé / Lungo",
        "weight": "9g",
        "price": "79 CZK",
        "allergens": [],
        "description": "Espresso diluted with hot water (9g)",
        "notes": "Americano caffé / Lungo"
    },
    "espresso-se-slehackou": {
        "name": "Espresso with whipped cream",
        "weight": "9g",
        "price": "85 CZK",
        "allergens": [],
        "description": "Espresso topped with fresh whipped cream (9g)",
        "notes": "Espresso with whipped cream"
    },
    "sypany-caj": {
        "name": "Loose-leaf tea",
        "weight": "",
        "price": "89 CZK",
        "allergens": [],
        "description": "black, green, or fruit",
        "notes": "black, green, or fruit"
    },
    "caj-mata-zazvor": {
        "name": "Tea with fresh mint or ginger",
        "weight": "",
        "price": "89 CZK",
        "allergens": [],
        "description": "Fresh mint or fresh ginger tea served with honey and lemon",
        "notes": "Tea with fresh mint or ginger"
    },
    "opre-gingerbread-cider": {
        "name": "Hot Gingerbread Cider",
        "weight": "0,33l",
        "price": "98 CZK",
        "allergens": [],
        "description": "Spicy, with a scent of cloves and cinnamon",
        "notes": "Spicy, with a scent of cloves and cinnamon"
    },
    "horka-cokolada": {
        "name": "Hot Chocolate",
        "weight": "",
        "price": "85 CZK",
        "allergens": [],
        "description": "With fresh whipped cream",
        "notes": "With fresh whipped cream"
    },
    "chai-latte": {
        "name": "Chai latte",
        "weight": "",
        "price": "99 CZK",
        "allergens": [],
        "description": "Tea with a mixture of exotic spices, sugar, and hot milk",
        "notes": "Tea with a mixture of exotic spices, sugar, and hot milk"
    },
    "svarene-vino": {
        "name": "Mulled wine",
        "weight": "0,15l",
        "price": "85 CZK",
        "allergens": [],
        "description": "Red / White, with spices and orange",
        "notes": "Red / White, with spices and orange"
    },
    # WINES BY THE GLASS
    "sklo-rulandske-sede": {
        "name": "Rulandské šedé",
        "weight": "0,15l",
        "price": "95 CZK",
        "allergens": [],
        "description": "Kolby Moravia, semi-dry",
        "notes": "Kolby Moravia, semi-dry"
    },
    "sklo-cuvee-kraus-bile": {
        "name": "Cuvée white",
        "weight": "0,15l",
        "price": "98 CZK",
        "allergens": [],
        "description": "Kraus Bohemia",
        "notes": "Kraus Bohemia"
    },
    "sklo-gruner-veltliner": {
        "name": "Grüner Veltliner",
        "weight": "0,15l",
        "price": "109 CZK",
        "allergens": [],
        "description": "Heuriger Austria",
        "notes": "Heuriger Austria"
    },
    "sklo-chardonnay-adulation": {
        "name": "Chardonnay",
        "weight": "0,15l",
        "price": "125 CZK",
        "allergens": [],
        "description": "Adulation California",
        "notes": "Adulation California"
    },
    "sklo-modry-portugal-rose": {
        "name": "Modrý Portugal rosé",
        "weight": "0,15l",
        "price": "95 CZK",
        "allergens": [],
        "description": "Kolby Moravia",
        "notes": "Kolby Moravia"
    },
    "sklo-modry-portugal-cervene": {
        "name": "Modrý Portugal",
        "weight": "0,15l",
        "price": "95 CZK",
        "allergens": [],
        "description": "Kolby Moravia",
        "notes": "Kolby Moravia"
    },
    "sklo-cuvee-kraus-cervene": {
        "name": "Red cuvée",
        "weight": "0,15l",
        "price": "98 CZK",
        "allergens": [],
        "description": "Kraus Bohemia",
        "notes": "Kraus Bohemia"
    },
    "sklo-pinot-noir-adulation": {
        "name": "Pinot Noir",
        "weight": "0,15l",
        "price": "125 CZK",
        "allergens": [],
        "description": "Adulation California",
        "notes": "Adulation California"
    },
    # BUBBLES
    "bubliny-charmat-palava": {
        "name": "Charmat from Vinselekt Pálava",
        "weight": "0,75L",
        "price": "699 CZK",
        "allergens": [],
        "description": "Vinselect Michlovský, extra dry – Moravia",
        "notes": "Vinselect Michlovský, extra dry – Moravia"
    },
    "bubliny-cremant-vinselekt": {
        "name": "Cremant de Vinselekt (Pinot, Chardonnay)",
        "weight": "0,75L",
        "price": "849 CZK",
        "allergens": [],
        "description": "Vinselect Michlovský, extra brut – Moravia",
        "notes": "Vinselect Michlovský, extra brut – Moravia"
    },
    "bubliny-angels-cowboys": {
        "name": "Angels & Cowboys",
        "weight": "0,75L",
        "price": "1199 CZK",
        "allergens": [],
        "description": "NV, brut - North Coast, California",
        "notes": "NV, brut - North Coast, California"
    },
    # WHITE WINES
    "bile-ryzlink-gotberg": {
        "name": "Riesling",
        "weight": "0,75L",
        "price": "469 CZK",
        "allergens": [],
        "description": "late harvest Gotberg – Pálava, Moravia",
        "notes": "late harvest Gotberg – Pálava, Moravia"
    },
    "bile-pinot-gris-reisten": {
        "name": "Pinot Gris",
        "weight": "0,75L",
        "price": "479 CZK",
        "allergens": [],
        "description": "late harvest Reisten – Mikulov, Moravia",
        "notes": "late harvest Reisten – Mikulov, Moravia"
    },
    "bile-hibernal-bilkovi": {
        "name": "Hibernal",
        "weight": "0,75L",
        "price": "495 CZK",
        "allergens": [],
        "description": "late harvest Bílkovi – Velkopavlovicko, Moravia",
        "notes": "late harvest Bílkovi – Velkopavlovicko, Moravia"
    },
    "bile-sauvignon-halkoci": {
        "name": "Sauvignon",
        "weight": "0,75L",
        "price": "626 CZK",
        "allergens": [],
        "description": "Typik VOC Lukáš Halkoci – Znojemsko, Moravia",
        "notes": "Typik VOC Lukáš Halkoci – Znojemsko, Moravia"
    },
    "bile-ryzlink-vlassky-sukal": {
        "name": "Welschriesling",
        "weight": "0,75L",
        "price": "660 CZK",
        "allergens": [],
        "description": "late harvest Milan Sůkal – Slovácko, Moravia",
        "notes": "late harvest Milan Sůkal – Slovácko, Moravia"
    },
    "bile-palava-michlovsky": {
        "name": "Pálava",
        "weight": "0,75L",
        "price": "506 CZK",
        "allergens": [],
        "description": "late harvest Vinselect Michlovský – Lednicko-Valtice area, Moravia",
        "notes": "late harvest Vinselect Michlovský – Lednicko-Valtice area, Moravia"
    },
    "bile-poysdorfer-saurussel": {
        "name": "Poysdorfer Saurüssel",
        "weight": "0,75L",
        "price": "629 CZK",
        "allergens": [],
        "description": "Grüner Veltliner, Hauser – Weinviertel, Austria",
        "notes": "Grüner Veltliner, Hauser – Weinviertel, Austria"
    },
    "bile-gruner-satzen-schwarzbock": {
        "name": "Grüner Veltliner",
        "weight": "0,75L",
        "price": "723 CZK",
        "allergens": [],
        "description": "Premium Ried Satzen DAC Schwarzbock – Weinviertel, Austria",
        "notes": "Premium Ried Satzen DAC Schwarzbock – Weinviertel, Austria"
    },
    "bile-riesling-eva-fricke": {
        "name": "Riesling Rheingau",
        "weight": "0,75L",
        "price": "999 CZK",
        "allergens": [],
        "description": "QbA Dry Eva Fricke – Rheingau, Germany",
        "notes": "QbA Dry Eva Fricke – Rheingau, Germany"
    },
    "bile-riesling-gunderloch-red-stone": {
        "name": "Riesling",
        "weight": "0,75L",
        "price": "595 CZK",
        "allergens": [],
        "description": "Red Stone QbA dry Gunderloch – Rheinhessen, Germany",
        "notes": "Red Stone QbA dry Gunderloch – Rheinhessen, Germany"
    },
    "bile-riesling-fritz-haag": {
        "name": "Riesling",
        "weight": "0,75L",
        "price": "975 CZK",
        "allergens": [],
        "description": "Tradition Brauneberg Fritz Haag – Mosel, Germany",
        "notes": "Tradition Brauneberg Fritz Haag – Mosel, Germany"
    },
    "bile-weisser-burgunder-philipp-kuhn": {
        "name": "Weisser Burgunder",
        "weight": "0,75L",
        "price": "725 CZK",
        "allergens": [],
        "description": "Pinot Blanc, Tradition Trocken Philipp Kuhn – Pfalz, Germany",
        "notes": "Pinot Blanc, Tradition Trocken Philipp Kuhn – Pfalz, Germany"
    },
    "bile-sauvignon-lapis-luna": {
        "name": "Sauvignon Blanc",
        "weight": "0,75L",
        "price": "789 CZK",
        "allergens": [],
        "description": "Lapis Luna - North Coast, California",
        "notes": "Lapis Luna - North Coast, California"
    },
    "bile-chardonnay-knotty-vines": {
        "name": "Chardonnay",
        "weight": "0,75L",
        "price": "975 CZK",
        "allergens": [],
        "description": "Knotty Vines – California",
        "notes": "Knotty Vines – California"
    },
    # ROSÉ WINES
    "ruzove-merlot-rose-bilkovi": {
        "name": "Merlot Rosé",
        "weight": "0,75L",
        "price": "405 CZK",
        "allergens": [],
        "description": "late harvest Bílkovi – Velkopavlovicko, Moravia",
        "notes": "late harvest Bílkovi – Velkopavlovicko, Moravia"
    },
    # RED WINES
    "cervene-pinot-noir-rouci-kraus": {
        "name": "Pinot Noir",
        "weight": "0,75L",
        "price": "425 CZK",
        "allergens": [],
        "description": "Roučí Malé Kraus – Mělnicko, Bohemia",
        "notes": "Roučí Malé Kraus – Mělnicko, Bohemia"
    },
    "cervene-dornfelder-bilkovi": {
        "name": "Dornfelder",
        "weight": "0,75L",
        "price": "419 CZK",
        "allergens": [],
        "description": "Bílkovi - Velkopavlovicko, Moravia",
        "notes": "Bílkovi - Velkopavlovicko, Moravia"
    },
    "cervene-cuvee-red-kolby": {
        "name": "Cuvée Red (Cabernet Sauvignon, Merlot)",
        "weight": "0,75L",
        "price": "649 CZK",
        "allergens": [],
        "description": "Kolby – Mikulovsko, Moravia",
        "notes": "Kolby – Mikulovsko, Moravia"
    },
    "cervene-nina-cuvee-bilkovi": {
        "name": "Nina Cuvée (Merlot, Blaufränkisch)",
        "weight": "0,75L",
        "price": "699 CZK",
        "allergens": [],
        "description": "Bílkovi – Velkopavlovicko, Moravia",
        "notes": "Bílkovi – Velkopavlovicko, Moravia"
    },
    "cervene-zweigelt-feller-artinger": {
        "name": "Zweigelt",
        "weight": "0,75L",
        "price": "660 CZK",
        "allergens": [],
        "description": "Weingut Feiler-Artinger – Burgenland, Austria",
        "notes": "Weingut Feiler-Artinger – Burgenland, Austria"
    },
    "cervene-pinot-noir-philipp-kuhn": {
        "name": "Pinot Noir",
        "weight": "0,75L",
        "price": "959 CZK",
        "allergens": [],
        "description": "Tradition Philip Kuhn – Pfalz, Germany",
        "notes": "Tradition Philip Kuhn – Pfalz, Germany"
    },
    "cervene-cabernet-lapis-luna": {
        "name": "Cabernet Sauvignon",
        "weight": "0,75L",
        "price": "789 CZK",
        "allergens": [],
        "description": "Lapis Luna - Lodi, California",
        "notes": "Lapis Luna - Lodi, California"
    },
    "cervene-zinfandel-hendry": {
        "name": "Zinfandel",
        "weight": "0,75L",
        "price": "995 CZK",
        "allergens": [],
        "description": "Hendry Ranch HRW - Napa Valley, California",
        "notes": "Hendry Ranch HRW - Napa Valley, California"
    },
    # APERITIFS
    "aperol-spritz": {
        "name": "Aperol Spritz",
        "weight": "",
        "price": "155 CZK",
        "allergens": [],
        "description": "Aperol, charmat, soda",
        "notes": "Aperol, charmat, soda"
    },
    "hugo-spritz": {
        "name": "Hugo Spritz",
        "weight": "",
        "price": "155 CZK",
        "allergens": [],
        "description": "charmat, elderflower elixir, lime, mint, soda",
        "notes": "charmat, elderflower elixir, lime, mint, soda"
    },
    "mimosa": {
        "name": "Mimosa",
        "weight": "",
        "price": "168 CZK",
        "allergens": [],
        "description": "charmat, pear and peach syrup, cucumber slices",
        "notes": "charmat, pear and peach syrup, cucumber slices"
    },
    "kir": {
        "name": "Kir",
        "weight": "",
        "price": "150 CZK",
        "allergens": [],
        "description": "white wine, Crème de cassis",
        "notes": "white wine, Crème de cassis"
    },
    "campari-bitter": {
        "name": "Campari Bitter",
        "weight": "",
        "price": "95 CZK",
        "allergens": [],
        "description": "Italian red bitter aperitif",
        "notes": "Campari Bitter"
    },
    "martini-dry": {
        "name": "Martini Dry",
        "weight": "",
        "price": "95 CZK",
        "allergens": [],
        "description": "Classic Italian extra dry vermouth",
        "notes": "Martini Dry"
    },
    "cinzano-rosso-bianco": {
        "name": "Cinzano",
        "weight": "",
        "price": "95 CZK",
        "allergens": [],
        "description": "Rosso / Bianco",
        "notes": "Rosso / Bianco"
    },
    "grahams-porto-10y": {
        "name": "Graham's Porto 10y",
        "weight": "",
        "price": "145 CZK",
        "allergens": [],
        "description": "Ten-year-old aged Tawny Port with mellow dried fruit notes",
        "notes": "Graham's Porto 10y"
    },
    # NON-ALCOHOLIC APERITIFS & COCKTAILS
    "crodino": {
        "name": "Crodino",
        "weight": "",
        "price": "85 CZK",
        "allergens": [],
        "description": "Non-alcoholic bitter aperitif",
        "notes": "Non-alcoholic bitter aperitif"
    },
    "martini-floreale-tonic": {
        "name": "Martini Floreale Alcohol free & Thomas Henry Tonic",
        "weight": "",
        "price": "165 CZK",
        "allergens": [],
        "description": "Non-alcoholic floral aperitif paired with botanical tonic",
        "notes": "Martini Floreale Alcohol free & Thomas Henry Tonic"
    },
    "bitter-soda-gasco": {
        "name": "Bitter soda J.Gasco",
        "weight": "",
        "price": "85 CZK",
        "allergens": [],
        "description": "Italian non-alcoholic bitter soda",
        "notes": "Bitter soda J.Gasco"
    },
    "tanqueray-00-tonic": {
        "name": "Tanqueray Alcohol Free & Fever-Tree Tonic",
        "weight": "",
        "price": "165 CZK",
        "allergens": [],
        "description": "Distilled non-alcoholic botanical gin paired with premium tonic",
        "notes": "Tanqueray Alcohol Free & Fever-Tree Tonic"
    },
    # CLASSIC COCKTAILS
    "negroni": {
        "name": "Negroni",
        "weight": "",
        "price": "185 CZK",
        "allergens": [],
        "description": "Campari, Tanqueray gin, Cinzano rosso",
        "notes": "Campari, Tanqueray gin, Cinzano rosso"
    },
    "margarita": {
        "name": "Margarita",
        "weight": "",
        "price": "195 CZK",
        "allergens": [],
        "description": "Tres Alegres tequila, Cointreau, lime juice, salt",
        "notes": "Tres Alegres tequila, Cointreau, lime juice, salt"
    },
    "mojito": {
        "name": "Mojito",
        "weight": "",
        "price": "185 CZK",
        "allergens": [],
        "description": "Rum, fresh lime, mint leaves, cane sugar, soda",
        "notes": "White rum, fresh lime, mint leaves, cane sugar, soda"
    },
    "frozen-strawberry-daiquiri": {
        "name": "Frozen Strawberry Daiquiri",
        "weight": "",
        "price": "195 CZK",
        "allergens": [],
        "description": "Rum, fresh strawberry purée, lime juice",
        "notes": "Rum, fresh strawberry purée, lime juice"
    },
    "cuba-libre": {
        "name": "Cuba Libre",
        "weight": "",
        "price": "165 CZK",
        "allergens": [],
        "description": "Rum, lime juice, Coca-Cola",
        "notes": "Rum, lime juice, Coca-Cola"
    },
    "mai-tai": {
        "name": "May-Tai",
        "weight": "",
        "price": "199 CZK",
        "allergens": [],
        "description": "White and dark rum, Curaçao, almond syrup, lime juice",
        "notes": "White and dark rum, Curaçao, almond syrup, lime juice"
    },
    "porn-star-martini": {
        "name": "Porn star Martini",
        "weight": "",
        "price": "232 CZK",
        "allergens": [],
        "description": "Vanilla vodka, passionfruit liqueur, lime juice, charmat",
        "notes": "Vanilla vodka, passionfruit liqueur, lime juice, charmat"
    },
    "skinny-bitch": {
        "name": "Skinny bitch",
        "weight": "",
        "price": "125 CZK",
        "allergens": [],
        "description": "Vodka, lime juice, soda",
        "notes": "Vodka, lime juice, soda"
    },
    "cosmopolitan": {
        "name": "Cosmopolitan",
        "weight": "",
        "price": "160 CZK",
        "allergens": [],
        "description": "Vodka, Cointreau, cranberry juice, lime juice",
        "notes": "Vodka, Cointreau, cranberry juice, lime juice"
    },
    "moscow-mule": {
        "name": "Moscow mule",
        "weight": "",
        "price": "185 CZK",
        "allergens": [],
        "description": "Vodka, ginger beer, lime",
        "notes": "Vodka, ginger beer, lime"
    },
    "french-martini": {
        "name": "French Martini",
        "weight": "",
        "price": "195 CZK",
        "allergens": [],
        "description": "Vodka, raspberry liqueur, pineapple juice",
        "notes": "Vodka, raspberry liqueur, pineapple juice"
    },
    "espresso-martini": {
        "name": "Espresso Martini",
        "weight": "",
        "price": "195 CZK",
        "allergens": [],
        "description": "Vodka, coffee liqueur, espresso",
        "notes": "Vodka, coffee liqueur, espresso"
    },
    "paloma": {
        "name": "Paloma",
        "weight": "",
        "price": "195 CZK",
        "allergens": [],
        "description": "tequila, lime juice, agave syrup, grapefruit J.Gasco Soda Rosa, salt",
        "notes": "tequila, lime juice, agave syrup, grapefruit J.Gasco Soda Rosa, salt"
    },
    # FUZE COCKTAILS
    "truffle-negroni": {
        "name": "Truffle Negroni",
        "weight": "",
        "price": "205 CZK",
        "allergens": [],
        "description": "truffle gin, Campari, Cinzano rosso",
        "notes": "truffle gin, Campari, Cinzano rosso"
    },
    "fizzy-fuze": {
        "name": "Fizzy Fuze",
        "weight": "",
        "price": "175 CZK",
        "allergens": [],
        "description": "Gin, lime juice, soda, elderberry syrup",
        "notes": "Gin, lime juice, soda, elderberry syrup"
    },
    "florencia-fashion": {
        "name": "Florence Fashion",
        "weight": "",
        "price": "245 CZK",
        "allergens": [],
        "description": "Whiskey, peach syrup, chocolate bitters",
        "notes": "Whiskey, peach syrup, chocolate bitters"
    },
    "am-spritz": {
        "name": "A.M. Spritz",
        "weight": "",
        "price": "185 CZK",
        "allergens": [],
        "description": "Crémant, gin, elderflower syrup, lime",
        "notes": "Crémant, gin, elderflower syrup, lime"
    },
    "passionata": {
        "name": "Passionate",
        "weight": "",
        "price": "175 CZK",
        "allergens": [],
        "description": "Rum, passion fruit, melon syrup, cranberry juice",
        "notes": "Rum, passion fruit, melon syrup, cranberry juice"
    },
    "apricot-cabaret": {
        "name": "Apricot Cabaret",
        "weight": "",
        "price": "239 CZK",
        "allergens": [],
        "description": "Bourbon whiskey, apricot brandy Svach, apricot purée, fresh lemon juice",
        "notes": "Bourbon whiskey, apricot brandy Svach, apricot purée, fresh lemon juice"
    },
    "spicy-apricot-margarita": {
        "name": "Spicy Apricot Margarita",
        "weight": "",
        "price": "219 CZK",
        "allergens": [],
        "description": "Tequila reposado, apricot purée, chili, fresh lime juice",
        "notes": "Tequila reposado, apricot purée, chili, fresh lime juice"
    },
    "apricot-daniels-sour": {
        "name": "Apricot Daniel's Sour",
        "weight": "",
        "price": "239 CZK",
        "allergens": [],
        "description": "Jack Daniel's Tennessee whiskey, apricot purée, fresh lemon juice, egg white",
        "notes": "Jack Daniel's Tennessee whiskey, apricot purée, fresh lemon juice, egg white"
    },
    # GIN & TONIC
    "gt-tanqueray": {
        "name": "Tanqueray & Thomas Henry Tonic",
        "weight": "",
        "price": "188 CZK",
        "allergens": [],
        "description": "Classic",
        "notes": "Classic"
    },
    "gt-fiesta-garage22": {
        "name": "Fiesta Garage 22 & Guilti tonic lime",
        "weight": "",
        "price": "219 CZK",
        "allergens": [],
        "description": "playful with lime",
        "notes": "playful with lime"
    },
    "gt-hendricks": {
        "name": "Hendrick`s & Thomas Henry Tonic",
        "weight": "",
        "price": "208 CZK",
        "allergens": [],
        "description": "With cucumber",
        "notes": "With cucumber"
    },
    "gt-endorphin-imagine": {
        "name": "Endorphin Magic imaGINe & Fever-Tree Tonic",
        "weight": "",
        "price": "239 CZK",
        "allergens": [],
        "description": "illusionistic with blueberries",
        "notes": "illusionistic with blueberries"
    },
    "gt-flame-of-passion": {
        "name": "Flame of Passion Pink Gin & Thomas Henry Pink Grapefruit Tonic",
        "weight": "",
        "price": "228 CZK",
        "allergens": [],
        "description": "Pink grapefruit",
        "notes": "Pink grapefruit"
    },
    "gt-endorphin-copper-moon": {
        "name": "Endorphin Copper Moon & Fever-Tree Mediterranean Tonic",
        "weight": "",
        "price": "228 CZK",
        "allergens": [],
        "description": "Mediterranean herbs",
        "notes": "Mediterranean herbs"
    },
    # FRUIT BRANDIES
    "slivovice-radlik": {
        "name": "Slivovitz",
        "weight": "0.03L",
        "price": "105 CZK",
        "allergens": [],
        "description": "Radlík (Plum brandy)",
        "notes": "Radlík (Plum brandy)"
    },
    "slivovice-ze-sudu-radlik": {
        "name": "Slivovice ze sudu",
        "weight": "0.03L",
        "price": "140 CZK",
        "allergens": [],
        "description": "Radlík (Barrel-aged plum brandy)",
        "notes": "Radlík (Barrel-aged plum brandy)"
    },
    "hruskovice-skanzen": {
        "name": "Hruškovice Williams",
        "weight": "0.03L",
        "price": "110 CZK",
        "allergens": [],
        "description": "Skanzen (Williams pear brandy)",
        "notes": "Skanzen (Williams pear brandy)"
    },
    "hruskovice-ze-sudu-radlik": {
        "name": "Hruškovice ze sudu",
        "weight": "0.03L",
        "price": "140 CZK",
        "allergens": [],
        "description": "Radlík (Barrel-aged pear brandy)",
        "notes": "Radlík (Barrel-aged pear brandy)"
    },
    "merunkovice-svach": {
        "name": "Meruňkovice",
        "weight": "0.03L",
        "price": "120 CZK",
        "allergens": [],
        "description": "Svach (Apricot brandy)",
        "notes": "Svach (Apricot brandy)"
    },
    "visnovice-zubri": {
        "name": "Višňovice",
        "weight": "0.03L",
        "price": "98 CZK",
        "allergens": [],
        "description": "Zubří (Cherry brandy)",
        "notes": "Zubří (Cherry brandy)"
    },
    "jablkovice-galli": {
        "name": "Jablkovice",
        "weight": "0.03L",
        "price": "98 CZK",
        "allergens": [],
        "description": "Galí (Apple brandy)",
        "notes": "Galí (Apple brandy)"
    },
    "rybizovice-raspenava": {
        "name": "Rybízovice",
        "weight": "0.03L",
        "price": "160 CZK",
        "allergens": [],
        "description": "Raspenava (Currant brandy)",
        "notes": "Raspenava (Currant brandy)"
    },
    "vinovice-ze-sudu-radlik": {
        "name": "Vínovice ze sudu",
        "weight": "0.03L",
        "price": "149 CZK",
        "allergens": [],
        "description": "Radlík (Barrel-aged grape brandy)",
        "notes": "Radlík (Barrel-aged grape brandy)"
    },
    "traminovice-kolby": {
        "name": "Tramínovice",
        "weight": "0.03L",
        "price": "135 CZK",
        "allergens": [],
        "description": "Kolby (Grape brandy)",
        "notes": "Kolby (Grape brandy)"
    },
    "ponesicka-mrkvovice": {
        "name": "Poněšická Mrkvovice",
        "weight": "0.03L",
        "price": "123 CZK",
        "allergens": [],
        "description": "(Carrot brandy)",
        "notes": "(Carrot brandy)"
    },
    "malinovice-silver-martenz": {
        "name": "Malinovice Silver",
        "weight": "0.03L",
        "price": "175 CZK",
        "allergens": [],
        "description": "Martenz (Raspberry Brandy)",
        "notes": "Martenz (Raspberry Brandy)"
    },
    # VODKA
    "anton-kaapl-legionar": {
        "name": "Anton Kaapl LEGIONARY",
        "weight": "0.03L",
        "price": "75 CZK",
        "allergens": [],
        "description": "Craft Czech family-distilled premium vodka",
        "notes": "Anton Kaapl LEGIONARY"
    },
    "nemiroff": {
        "name": "Nemiroff",
        "weight": "0.03L",
        "price": "85 CZK",
        "allergens": [],
        "description": "Classic premium wheat vodka",
        "notes": "Nemiroff"
    },
    "grey-goose": {
        "name": "Grey Goose",
        "weight": "0.03L",
        "price": "135 CZK",
        "allergens": [],
        "description": "Ultra-premium French wheat vodka",
        "notes": "Grey Goose"
    },
    # GINS
    "gin-tanqueray": {
        "name": "Tanqueray",
        "weight": "0.03l",
        "price": "89 CZK",
        "allergens": [],
        "description": "Classic London Dry Gin",
        "notes": "Tanqueray"
    },
    "gin-hendricks": {
        "name": "Hendrick`s",
        "weight": "0.03l",
        "price": "126 CZK",
        "allergens": [],
        "description": "Scottish gin infused with cucumber and rose",
        "notes": "Hendrick`s"
    },
    "gin-starej-dobrej": {
        "name": "Starej Dobrej Gin",
        "weight": "0.03l",
        "price": "159 CZK",
        "allergens": [],
        "description": "Poněšice",
        "notes": "Poněšice"
    },
    "gin-truffle-garage22": {
        "name": "Truffle gin",
        "weight": "0.03l",
        "price": "155 CZK",
        "allergens": [],
        "description": "Garage 22",
        "notes": "Garage 22"
    },
    # RUMS
    "havana-club-3": {
        "name": "Havana Club Anejo 3 Anos",
        "weight": "0,03L",
        "price": "66 CZK",
        "allergens": [],
        "description": "Classic Cuban white rum aged for 3 years",
        "notes": "Havana Club Anejo 3 Anos"
    },
    "el-dorado-12y": {
        "name": "El Dorado 12y",
        "weight": "0,03L",
        "price": "149 CZK",
        "allergens": [],
        "description": "Demerara rum aged 12 years in oak barrels",
        "notes": "El Dorado 12y"
    },
    "mount-gay-xo": {
        "name": "Mount Gay XO",
        "weight": "0,03L",
        "price": "186 CZK",
        "allergens": [],
        "description": "Barbados rum blend aged in American oak, bourbon, and cognac casks",
        "notes": "Mount Gay XO"
    },
    "abuelo-7y": {
        "name": "Abuelo 7y",
        "weight": "0,03L",
        "price": "135 CZK",
        "allergens": [],
        "description": "Panamanian rum aged for 7 years in select oak casks",
        "notes": "Abuelo 7y"
    },
    "eminente-reserva-7y": {
        "name": "Eminente Reserva 7y",
        "weight": "0,03L",
        "price": "172 CZK",
        "allergens": [],
        "description": "Rich full-bodied Cuban rum blend aged 7 years",
        "notes": "Eminente Reserva 7y"
    },
    "diplomatico": {
        "name": "Dimplomatico",
        "weight": "0,03L",
        "price": "149 CZK",
        "allergens": [],
        "description": "Venezuelan dark rum aged in oak barrels",
        "notes": "Dimplomatico"
    },
    "zacapa-23y": {
        "name": "Zacapa 23y",
        "weight": "0,03L",
        "price": "165 CZK",
        "allergens": [],
        "description": "Guatemalan Solera rum aged high in the mountains",
        "notes": "Zacapa 23y"
    },
    # TEQUILAS
    "tres-alegres-compadres": {
        "name": "Tres Alegres Compadres Blanco",
        "weight": "0,03L",
        "price": "89 CZK",
        "allergens": [],
        "description": "Crisp 100% Blue Agave blanco tequila",
        "notes": "Tres Alegres Compadres Blanco"
    },
    "herradura-reposado": {
        "name": "Herradura Reposado",
        "weight": "0,03L",
        "price": "168 CZK",
        "allergens": [],
        "description": "Estate-bottled 100% agave tequila aged 11 months in oak",
        "notes": "Herradura Reposado"
    },
    "corralejo-reposado": {
        "name": "Tequila Corralejo Reposado",
        "weight": "0,03L",
        "price": "149 CZK",
        "allergens": [],
        "description": "100% Agave",
        "notes": "100% Agave"
    },
    "cofradia-rose-catrina": {
        "name": "La Cofradia Reposado Rosé „ ed.Catrina ”",
        "weight": "0,03L",
        "price": "185 CZK",
        "allergens": [],
        "description": "Aged in French oak wine casks in hand-painted ceramic Catrina bottle",
        "notes": "La Cofradia Reposado Rosé „ ed.Catrina ”"
    },
    "cofradia-black-catrina": {
        "name": "La Cofradia Black „ ed.Catrina ”",
        "weight": "0,03L",
        "price": "185 CZK",
        "allergens": [],
        "description": "Special edition reposado in black ceramic artisan Catrina bottle",
        "notes": "La Cofradia Black „ ed.Catrina ”"
    },
    # WHISKY
    "goldcock-blended": {
        "name": "Goldcock blended",
        "weight": "0,03L",
        "price": "62 CZK",
        "allergens": [],
        "description": "Historic Czech blended whisky distilled from Moravian barley",
        "notes": "Goldcock blended"
    },
    "glenfiddich-15y": {
        "name": "Glenfiddich 15y",
        "weight": "0,03L",
        "price": "165 CZK",
        "allergens": [],
        "description": "Speyside single malt matured in Solera vat system",
        "notes": "Glenfiddich 15y"
    },
    "talisker-10y": {
        "name": "Talisker 10y",
        "weight": "0,03L",
        "price": "165 CZK",
        "allergens": [],
        "description": "Isle of Skye single malt with sea salt and peaty pepper finish",
        "notes": "Talisker 10y"
    },
    "monkey-shoulder": {
        "name": "Monkey Shoulder",
        "weight": "0,03L",
        "price": "112 CZK",
        "allergens": [],
        "description": "Blended malt Scotch whisky made from three Speyside single malts",
        "notes": "Monkey Shoulder"
    },
    "jameson": {
        "name": "Jameson",
        "weight": "0,03L",
        "price": "75 CZK",
        "allergens": [],
        "description": "Triple-distilled smooth Irish blended whiskey",
        "notes": "Jameson"
    },
    "jack-daniels": {
        "name": "Jack Daniels",
        "weight": "0,03L",
        "price": "105 CZK",
        "allergens": [],
        "description": "Charcoal-mellowed Tennessee sour mash whiskey",
        "notes": "Jack Daniels"
    },
    # BRANDY AND COGNAC
    "metaxa-5": {
        "name": "Metaxa *****",
        "weight": "0,03L",
        "price": "75 CZK",
        "allergens": [],
        "description": "Greek amber spirit blended with Muscat wine and Mediterranean botanicals",
        "notes": "Metaxa *****"
    },
    "remy-martin-1738": {
        "name": "Remy Martin 1738",
        "weight": "0,03L",
        "price": "170 CZK",
        "allergens": [],
        "description": "Fine Champagne Cognac aged in toasted French oak casks",
        "notes": "Remy Martin 1738"
    },
    # SPIRITS AND LIQUEURS
    "fuzovice": {
        "name": "Fuzovice",
        "weight": "0,03L",
        "price": "140 CZK",
        "allergens": [],
        "description": "FUZE/Agnes",
        "notes": "FUZE/Agnes"
    },
    "absinth-st-antoine": {
        "name": "Absinth St. Antoine",
        "weight": "0,03L",
        "price": "165 CZK",
        "allergens": [],
        "description": "Žufánek",
        "notes": "Žufánek"
    },
    "kminka-garage22": {
        "name": "Kmínka",
        "weight": "0,03L",
        "price": "78 CZK",
        "allergens": [],
        "description": "Garage 32 (Caraway spirit)",
        "notes": "Garage 32 (Caraway spirit)"
    },
    "kontusovka-zufanek": {
        "name": "Kontušovka",
        "weight": "0,03L",
        "price": "95 CZK",
        "allergens": [],
        "description": "Žufánek (Herbal liqueur)",
        "notes": "Žufánek (Herbal liqueur)"
    },
    "orechovy-liker-radlik": {
        "name": "Walnut liqueur",
        "weight": "0,03L",
        "price": "119 CZK",
        "allergens": [],
        "description": "Radlik",
        "notes": "Radlik"
    },
    "hustopecska-mandlovka": {
        "name": "Hustopečská Mandlovka",
        "weight": "0,03L",
        "price": "98 CZK",
        "allergens": [],
        "description": "(almond liqueur)",
        "notes": "(almond liqueur)"
    },
    "jagermeister": {
        "name": "Jägermeister",
        "weight": "0,03L",
        "price": "65 CZK",
        "allergens": [],
        "description": "Traditional German herbal liqueur made with 56 natural herbs and spices",
        "notes": "Jägermeister"
    },
    "podebradska-samicka": {
        "name": "Poděbradská Samička",
        "weight": "0,03L",
        "price": "58 CZK",
        "allergens": [],
        "description": "(Regional herbal liqueur)",
        "notes": "(Regional herbal liqueur)"
    },
    "becherovka-unfiltered": {
        "name": "Becherovka",
        "weight": "0,03L",
        "price": "65 CZK",
        "allergens": [],
        "description": "Unfiltered",
        "notes": "Unfiltered"
    },
    "smoked-grappa-tosolini": {
        "name": "Smoked Grappa Bepi Tosolini",
        "weight": "0,03L",
        "price": "195 CZK",
        "allergens": [],
        "description": "Artisanal Italian grape spirit smoked with toasted oak wood",
        "notes": "Smoked Grappa Bepi Tosolini"
    },
    "bezovy-elixir-jelinek": {
        "name": "Bezový elixír R.Jelínek",
        "weight": "0,03L",
        "price": "58 CZK",
        "allergens": [],
        "description": "(Elderflower liquer)",
        "notes": "(Elderflower liquer)"
    },
    "creme-de-cassis": {
        "name": "Créme de cassis",
        "weight": "0,03L",
        "price": "68 CZK",
        "allergens": [],
        "description": "Le Duc Charmant, Jenčík",
        "notes": "Le Duc Charmant, Jenčík"
    },
    "vajecnak-bartida": {
        "name": "Egg liqueur",
        "weight": "0,03L",
        "price": "50 CZK",
        "allergens": [],
        "description": "Bartida",
        "notes": "Bartida"
    },
    "griotte-bartida": {
        "name": "Griotte Original",
        "weight": "0,03L",
        "price": "50 CZK",
        "allergens": [],
        "description": "Bartida (Sour cherry liqueur)",
        "notes": "Bartida (Sour cherry liqueur)"
    },
    "zelena-bartida": {
        "name": "Zelená",
        "weight": "0,03L",
        "price": "50 CZK",
        "allergens": [],
        "description": "Bartida (Herbal mint liqueur)",
        "notes": "Bartida (Herbal mint liqueur)"
    },
    "zelena-svach": {
        "name": "Zelená",
        "weight": "0,03L",
        "price": "58 CZK",
        "allergens": [],
        "description": "Svach (Herbal mint liqueur)",
        "notes": "Svach (Herbal mint liqueur)"
    }
}

# 4. Update the categories and items in memory
for cat in categories:
    cid = cat["id"]
    if cid in CAT_METADATA:
        cat["name"] = CAT_METADATA[cid]["name"]
        cat["badge"] = CAT_METADATA[cid]["badge"]
        cat["description"] = CAT_METADATA[cid]["description"]
    
    for it in cat.get("items", []):
        iid = it["id"]
        if iid in ITEM_STRICT:
            spec = ITEM_STRICT[iid]
            it["name"] = spec["name"]
            if spec.get("weight") is not None:
                it["weight"] = spec["weight"]
            if spec.get("price") is not None:
                it["price"] = spec["price"]
            if spec.get("allergens") is not None:
                it["allergens"] = spec["allergens"]
            it["description"] = spec["description"]
            if "notes" in spec:
                it["notes"] = spec["notes"]

        # Ensure questions refer to the exact item name & ingredients
        for q in it.get("questions", []):
            # If question has old names, replace with strict official names
            q["question"] = q["question"].replace("Hand-Cut Beef Tartare", "Sliced beef tartare")
            q["question"] = q["question"].replace("Duck Foie Gras Pâté", "Foie gras pâté")
            q["question"] = q["question"].replace("House Veal Sausage with Morels", "Our veal sausage with morels")
            q["question"] = q["question"].replace("Hop-Smoked Pork Belly Slices", "Thin slices of pork belly")
            q["question"] = q["question"].replace("Crispy Chicken Croquettes", "Fried chicken croquettes")
            q["question"] = q["question"].replace("Chopped Olomouc Cheese (Tvarůžky)", "Olomouc curd cheese spread")
            q["question"] = q["question"].replace("House-Made Potato Chips", "Homemade potatoes")
            q["question"] = q["question"].replace("Double Beef Consommé", "Beef consommé")
            q["question"] = q["question"].replace("Creamy Lobster Bisque", "Creamy lobster soup")
            q["question"] = q["question"].replace("FUZE Caesar Salad", "Caesar salad")
            q["question"] = q["question"].replace("Thick-Cut Duroc Pork Schnitzel", "Thick-cut pork schnitzel")
            q["question"] = q["question"].replace("Beer-Marinated Pork Ribs", "Pork ribs")
            q["question"] = q["question"].replace("Braised Beef with Dill Sauce", "Braised beef with dill sauce")
            q["question"] = q["question"].replace("Pasta with Chicken & Porcini", "Pasta filled with delicate chicken mixture")
            q["question"] = q["question"].replace("Argentine Shrimp Roll", "Shrimp roll 12 pcs Argentine red shrimp")
            q["question"] = q["question"].replace("Deboned Rainbow Trout Fillet", "Fillet of deboned rainbow trout")
            q["question"] = q["question"].replace("Classic Beef Wellington", "Beef Wellington")
            q["question"] = q["question"].replace("Foie Gras & Blue Cheese Burger", "Beef burger")
            q["question"] = q["question"].replace("Thor's Hammer Beef Knuckle", "Thor's Hammer beef knuckle")
            q["question"] = q["question"].replace("Roasted Duroc Pork Belly", "Grilled pork belly")
            q["question"] = q["question"].replace("House Pastrami Sandwich", "Our pastrami from US Prime beef ribs")
            q["question"] = q["question"].replace("Tandoori Roasted Half Chicken", "½ Roasted chicken in our tandoori")
            q["question"] = q["question"].replace("Dulcey Chocolate Hop Cone Cake", "Ganache Cakes")
            q["question"] = q["question"].replace("Caramel Kaiserschmarrn", "Caramel shred pancake")
            q["question"] = q["question"].replace("House Craft Beer Ice Cream", "Beer ice cream")

            q["explanation"] = q["explanation"].replace("Hand-Cut Beef Tartare", "Sliced beef tartare")
            q["explanation"] = q["explanation"].replace("Duck Foie Gras Pâté", "Foie gras pâté")
            q["explanation"] = q["explanation"].replace("House Veal Sausage with Morels", "Our veal sausage with morels")
            q["explanation"] = q["explanation"].replace("Hop-Smoked Pork Belly Slices", "Thin slices of pork belly")
            q["explanation"] = q["explanation"].replace("Crispy Chicken Croquettes", "Fried chicken croquettes")
            q["explanation"] = q["explanation"].replace("Chopped Olomouc Cheese (Tvarůžky)", "Olomouc curd cheese spread")
            q["explanation"] = q["explanation"].replace("House-Made Potato Chips", "Homemade potatoes")
            q["explanation"] = q["explanation"].replace("Double Beef Consommé", "Beef consommé")
            q["explanation"] = q["explanation"].replace("Creamy Lobster Bisque", "Creamy lobster soup")

            # Check specific question updates
            if q["id"] == "tatarak-q1":
                q["question"] = "Which cut of beef is used for our beef tartare?"
                q["correctAnswer"] = "Tip of the sirloin (picanha / sirloin tip)"
                q["explanation"] = "The menu specifies that the beef tartare is made from the tip of the sirloin."
            elif q["id"] == "tatarak-q2":
                q["question"] = "In what fat is the crispy sourdough toast toasted for the beef tartare?"
                q["correctAnswer"] = "On beef lard"
                q["explanation"] = "The menu specifies that the sourdough bread is toasted on beef lard."
            elif q["id"] == "tatarak-q3":
                q["question"] = "Which ingredients are included in the Sliced beef tartare?"
                q["correctAnswer"] = "Tiny pickles, marinated shallots, and confit garlic"
                q["explanation"] = "The beef tartare contains tip of the sirloin, tiny pickles, marinated shallots, parsley leaf, toasted on beef lard, and confit garlic."
            elif q["id"] == "tatarak-q4":
                q["question"] = "Which pickled vegetables accompany the Sliced beef tartare?"
                q["correctAnswer"] = "Tiny pickles and marinated shallots"
                q["explanation"] = "The menu ingredients list tiny pickles and marinated shallots."
            elif q["id"] == "bok-q2":
                q["question"] = "What fruit and spicy ingredient is served with the thin slices of pork belly?"
                q["correctAnswer"] = "Over roasted apples and horseradish"
                q["explanation"] = "The menu ingredients state: hop-smoked, crispy pork cracklings, over roasted apples and horseradish, fried peas."
            elif q["id"] == "bok-q3":
                q["question"] = "Which crispy elements accompany the hop-smoked pork belly slices?"
                q["correctAnswer"] = "Crispy pork cracklings and fried peas"
                q["explanation"] = "The menu specifies crispy pork cracklings and fried peas."
            elif q["id"] == "klobasa-q3":
                q["question"] = "Which sweet and nutty ingredients are incorporated into our veal sausage?"
                q["correctAnswer"] = "Chestnuts and dried plums"
                q["explanation"] = "The menu specifies chestnuts and dried plums with truffle sauce and beer crumble."
            elif q["id"] == "foie-q1":
                q["question"] = "In what beer jelly is the Foie gras pâté encased?"
                q["correctAnswer"] = "In Kasteel Rouge beer jelly"
                q["explanation"] = "The menu specifies Foie gras pâté in Kasteel Rouge beer jelly, cherry sauce, and toasted butter brioche."
            elif q["id"] == "hovezi-consomme-q1":
                q["question"] = "What is served inside our Beef consommé?"
                q["correctAnswer"] = "Delicate liver dumpling and vegetables"
                q["explanation"] = "The menu lists: delicate liver dumpling, vegetables."
            elif q["id"] == "kremova-humri-q1":
                q["question"] = "What spices and spirit flavor our Creamy lobster soup, and what tops it?"
                q["correctAnswer"] = "Saffron and brandy, topped with puff pastry"
                q["explanation"] = "The menu specifies: with saffron and brandy, topped with puff pastry."
            elif q["id"] == "caesar-q1":
                q["question"] = "Which protein and cheese are featured in our Caesar salad?"
                q["correctAnswer"] = "Grilled chicken breast and parmesan"
                q["explanation"] = "The menu lists: with grilled chicken breast, parmesan, and croutons."
            elif q["id"] == "waldorf-q1":
                q["question"] = "What dressing and fruit are served with our Waldorf salad?"
                q["correctAnswer"] = "Apples, celery, grapes, and walnut mayonnaise dressing"
                q["explanation"] = "The menu specifies: with apples, celery, grapes, and walnut mayonnaise dressing."
            elif q["id"] == "pecene-koleno-q1":
                q["question"] = "What sides are served with our Roasted Pork Knuckle?"
                q["correctAnswer"] = "Mustard, grated horseradish, and cabbage salad with horseradish"
                q["explanation"] = "The menu specifies: mustard, grated horseradish, cabbage salad with horseradish."
            elif q["id"] == "veprovy-rizek-duroc-q1":
                q["question"] = "From which breed of pork is the Thick-cut pork schnitzel made?"
                q["correctAnswer"] = "Duroc pork"
                q["explanation"] = "The menu specifies: from Duroc pork, fines herbes sauce, potato mash, and crispy potato crisps."
            elif q["id"] == "veprovy-rizek-duroc-q2":
                q["question"] = "Which sauce and potato accompaniment serve with the Duroc schnitzel?"
                q["correctAnswer"] = "Fines herbes sauce, potato mash, and crispy potato crisps"
                q["explanation"] = "The menu specifies fines herbes sauce, potato mash, and crispy potato crisps."
            elif q["id"] == "veprova-zebra-q1":
                q["question"] = "How are the Pork ribs prepared and glazed?"
                q["correctAnswer"] = "Marinated and slow-roasted in beer with apple BBQ glaze and candied bacon"
                q["explanation"] = "The menu specifies: marinated and slow-roasted in our beer, candied bacon, pearl onions, apple BBQ glaze, cabbage salad with horseradish, and toasted garlic brioche."
            elif q["id"] == "hovezi-koprovka-q1":
                q["question"] = "What is served with our Braised beef with dill sauce?"
                q["correctAnswer"] = "Egg, baby potatoes and dill oil"
                q["explanation"] = "The menu specifies: served with egg, baby potatoes and dill oil."
            elif q["id"] == "testoviny-kureci-q1":
                q["question"] = "How are the Pasta filled with delicate chicken mixture prepared?"
                q["correctAnswer"] = "Baked in porcini sauce served with grilled oyster mushrooms and herb oil"
                q["explanation"] = "The menu specifies: baked in porcini sauce served with grilled oyster mushrooms and herb oil."
            elif q["id"] == "shrimp-roll-q1":
                q["question"] = "What shrimp and bread are used for our Shrimp roll?"
                q["correctAnswer"] = "12 pcs Argentine red shrimp in a butter brioche"
                q["explanation"] = "The menu specifies: in a butter brioche, cocktail sauce with cognac, salad greens, our fries, Choron sauce."
            elif q["id"] == "vykosteny-pstruh-q1":
                q["question"] = "How is the Fillet of deboned rainbow trout prepared?"
                q["correctAnswer"] = "Pan-seared in butter with choron sauce, roasted tomatoes, herb salad, and roasted winter vegetables"
                q["explanation"] = "The menu specifies: pan-seared in butter, choron sauce, roasted tomatoes, herb salad, and roasted winter vegetables."
            elif q["id"] == "svickova-wellington-q1":
                q["question"] = "What wraps the tenderloin in our Beef Wellington?"
                q["correctAnswer"] = "Mushroom and duck liver duxelles seasoned with truffle"
                q["explanation"] = "The menu specifies: tenderloin wrapped in mushroom and duck liver duxelles, seasoned with truffle, veal demi-glace, smoked potatoes."
            elif q["id"] == "burger-foie-gras-q1":
                q["question"] = "Which gourmet toppings are featured on our Beef burger?"
                q["correctAnswer"] = "Smoked blue cheese, duck foie gras, roasted onion mayonnaise, and potato straw"
                q["explanation"] = "The menu specifies: with smoked blue cheese and duck foie gras, roasted onion mayonnaise, potato straw and small homemade fries."
            elif q["id"] == "thors-hammer-q1":
                q["question"] = "How is Thor's Hammer beef knuckle prepared and which beer sauce accompanies it?"
                q["correctAnswer"] = "Slow-braised in tandoori with Kasteel Rouge sauce"
                q["explanation"] = "The menu specifies: slow-braised in our tandoori, Kasteel Rouge sauce, charred shallots, toasted garlic brioche, salsa verde, smoked potatoes, and cabbage salad with horseradish."
            elif q["id"] == "us-prime-burger-q1":
                q["question"] = "What toppings are on our US Prime beef burger?"
                q["correctAnswer"] = "Grilled bacon, cheddar, onion marmalade, and spicy mayonnaise"
                q["explanation"] = "The menu lists: grilled bacon, cheddar, onion marmalade, spicy mayonnaise."
            elif q["id"] == "grilovany-bucek-yuzu-q1":
                q["question"] = "Which citrus sauce and herb sauce accompany the Grilled pork belly?"
                q["correctAnswer"] = "Caramelized yuzu sauce and chimichurri sauce"
                q["explanation"] = "The menu specifies: caramelized yuzu sauce, grilled spring onion, chimichurri sauce."
            elif q["id"] == "nase-pastrami-q1":
                q["question"] = "What cheese and bread are used for Our pastrami from US Prime beef ribs?"
                q["correctAnswer"] = "Raclette cheese in toasted sourdough bread with cabbage salad"
                q["explanation"] = "The menu specifies: raclette cheese and cabbage salad with horseradish in toasted sourdough bread, pickled vegetables."
            elif q["id"] == "dortik-ganache-sisky-q1":
                q["question"] = "What shape and chocolate are used for our Ganache Cakes?"
                q["correctAnswer"] = "Hop cone shape made from Valrhona Dulcey chocolate"
                q["explanation"] = "The menu specifies: in the shape of hop cones made from Valrhona Dulcey chocolate, chocolate soil, and sour cherry sauce."
            elif q["id"] == "karamelovy-trhanec-q1":
                q["question"] = "What finishes our Caramel shred pancake?"
                q["correctAnswer"] = "Salted caramel and crunchy praline"
                q["explanation"] = "The menu specifies: with salted caramel and crunchy praline."
            elif q["id"] == "pivni-zmrzlina-q1":
                q["question"] = "What is served with our Beer ice cream?"
                q["correctAnswer"] = "Malt crumble and whipped cream"
                q["explanation"] = "The menu specifies: with malt crumble, whipped cream."

# 5. Write back to src/data/menuDataEn.ts
ts_content = "import { MenuCategory } from './menuData';\n\n"
ts_content += "export const MENU_CATEGORIES_EN: MenuCategory[] = "
ts_content += json.dumps(categories, ensure_ascii=False, indent=2)
ts_content += ";\n"

with open('src/data/menuDataEn.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"SUCCESS: Written {len(categories)} categories to src/data/menuDataEn.ts")
