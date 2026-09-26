import json, re

# Load current menuDataEn.ts
with open('src/data/menuDataEn.ts', 'r', encoding='utf-8') as f:
    text_en = f.read()

var_match = re.search(r'export const (MENU_CATEGORIES_EN): MenuCategory\[\] = (\[[\s\S]*?\n\]);', text_en)
if not var_match:
    raise ValueError("Could not find MENU_CATEGORIES_EN in menuDataEn.ts")

categories = json.loads(var_match.group(2))

# Define dictionary of updates for all 57 items
ALCOHOL_UPDATES = {
    # --- GIN & TONIC ---
    "gt-tanqueray": {
        "description": "Classic with lime, dry London Dry profile and German quinine tonic",
        "questions": [
            {
                "id": "gt-tanqueray-ing-1",
                "question": "Which gin and tonic pairing is served in Tanqueray & Thomas Henry?",
                "correctAnswer": "Tanqueray London Dry Gin & Thomas Henry Tonic Water",
                "distractors": ["Bombay Sapphire & Fever-Tree", "Beefeater & Schweppes"],
                "explanation": "Tanqueray & Thomas Henry pairs crisp Tanqueray London Dry Gin with premium German Thomas Henry Tonic Water."
            },
            {
                "id": "gt-tanqueray-ing-2",
                "question": "Which garnish and taste profile characterizes Tanqueray & Thomas Henry?",
                "correctAnswer": "Classic with lime, dry London Dry profile and German quinine tonic",
                "distractors": ["Fresh cucumber ribbon with floral notes", "Grapefruit wedge with pink berry tonic"],
                "explanation": "This serve is characterized by a classic slice of fresh lime, dry London Dry juniper botanicals, and classic quinine tonic."
            }
        ]
    },
    "gt-fiesta-garage22": {
        "description": "Playful with lime, craft Prague gin from Holešovice and lime tonic",
        "questions": [
            {
                "id": "gt-fiesta-garage22-ing-1",
                "question": "Which craft gin from Prague is used in Fiesta Gin & Fever-Tree Lime?",
                "correctAnswer": "Garage 22 Fiesta Gin from Prague's Holešovice",
                "distractors": ["Endorphin Gin from Moravia", "Little Urban Distillery Gin from Brno"],
                "explanation": "Fiesta Gin & Fever-Tree Lime features craft Fiesta Gin distilled in Prague's Holešovice quarter by Garage 22."
            },
            {
                "id": "gt-fiesta-garage22-ing-2",
                "question": "Which garnish and mixer complements Fiesta Gin & Fever-Tree Lime?",
                "correctAnswer": "Fresh lime and Fever-Tree Lime Tonic",
                "distractors": ["Dehydrated blood orange and Mediterranean tonic", "Rosemary sprig and Indian tonic"],
                "explanation": "The serve is complemented by fresh lime and zesty Fever-Tree Lime Tonic for a vibrant, citrusy profile."
            }
        ]
    },
    "gt-hendricks": {
        "description": "Fresh with cucumber, Scottish gin infused with cucumber and Bulgarian rose",
        "questions": [
            {
                "id": "gt-hendricks-ing-1",
                "question": "Which signature botanicals are infused into the Scottish gin in Hendrick's & Thomas Henry?",
                "correctAnswer": "Cucumber and Bulgarian Damask rose petals",
                "distractors": ["Spanish orange blossom and rosemary", "Elderflower and blackcurrant leaves"],
                "explanation": "Hendrick's Gin is famous for its artisanal distillation infused with crisp cucumber and fragrant Bulgarian Damask rose."
            },
            {
                "id": "gt-hendricks-ing-2",
                "question": "Which garnish and mixer is served with Hendrick's & Thomas Henry?",
                "correctAnswer": "Fresh cucumber wheel and Thomas Henry Tonic",
                "distractors": ["Lime wedge and ginger ale", "Dried juniper berries and soda"],
                "explanation": "The drink is served with fresh cucumber slices and German Thomas Henry Tonic to highlight its botanical notes."
            }
        ]
    },
    "gt-endorphin-imagine": {
        "description": "Illusionist with blueberries, color-changing gin infused with butterfly pea flower",
        "questions": [
            {
                "id": "gt-endorphin-imagine-ing-1",
                "question": "Which natural botanical gives Endorphin Imagine its magical color-changing property?",
                "correctAnswer": "Infused with butterfly pea flower (Clitoria ternatea)",
                "distractors": ["Organic blue spirulina extract", "Macerated wild Moravian blueberries"],
                "explanation": "Endorphin Imagine changes its color naturally when mixed with tonic thanks to infusion of butterfly pea flower petals."
            },
            {
                "id": "gt-endorphin-imagine-ing-2",
                "question": "Which garnish and tonic is paired with Endorphin Imagine?",
                "correctAnswer": "Blueberries and Thomas Henry Botanical Tonic",
                "distractors": ["Fresh mint sprig and plain soda", "Dried lemon wheel and Indian tonic"],
                "explanation": "This enchanting gin is served with juicy fresh blueberries and fragrant Thomas Henry Botanical Tonic."
            }
        ]
    },
    "gt-flame-of-passion": {
        "description": "Captivating with dried grapefruit, subtle fruity pink gin with grapefruit tonic",
        "questions": [
            {
                "id": "gt-flame-of-passion-ing-1",
                "question": "What style of craft gin defines Endorphin Flame of Passion?",
                "correctAnswer": "Subtle fruity pink craft gin paired with grapefruit tonic",
                "distractors": ["Heavy juniper dry gin with olive brine", "Old Tom sweetened gin with herbal bitters"],
                "explanation": "Flame of Passion is an enticing, delicately fruity pink craft gin paired harmoniously with grapefruit tonic."
            },
            {
                "id": "gt-flame-of-passion-ing-2",
                "question": "Which signature garnish is served with Endorphin Flame of Passion?",
                "correctAnswer": "Dehydrated pink grapefruit slice",
                "distractors": ["Fresh green lime wedge", "Brandied Marasca cherry"],
                "explanation": "The serve is garnished with an aromatic dried pink grapefruit wheel to amplify citrus aromas."
            }
        ]
    },
    "gt-endorphin-copper-moon": {
        "description": "Rich in herbs and pepper, craft gin and Mediterranean tonic",
        "questions": [
            {
                "id": "gt-endorphin-copper-moon-ing-1",
                "question": "Which aromatic profile characterizes Endorphin Copper Moon?",
                "correctAnswer": "Craft gin rich in herbs and pepper",
                "distractors": ["Sweet candied berry gin", "Citrus-forward lemonade gin"],
                "explanation": "Endorphin Copper Moon is known for its bold, savory botanical composition driven by garden herbs and cracked pepper."
            },
            {
                "id": "gt-endorphin-copper-moon-ing-2",
                "question": "Which premium mixer completes Endorphin Copper Moon?",
                "correctAnswer": "Fever-Tree Mediterranean Tonic",
                "distractors": ["Schweppes Ginger Beer", "Double Dutch Cucumber & Watermelon"],
                "explanation": "It is paired with herbal Fever-Tree Mediterranean Tonic, which enhances the gin's peppery botanicals."
            }
        ]
    },

    # --- FRUIT BRANDIES (ovocne-destilaty) ---
    "slivovice-radlik": {
        "description": "0.03l gentle plum brandy from the award-winning South Bohemian distillery Radlík near Jílové u Prahy",
        "questions": [
            {
                "id": "slivovice-radlik-vol",
                "question": "What is the serving volume / measure of Slivovice Radlík?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Slivovice Radlík is 0.03 l."
            },
            {
                "id": "slivovice-radlik-ing-1",
                "question": "Which distillery and region produces Slivovice Radlík?",
                "correctAnswer": "Gentle plum brandy from the award-winning distillery Radlík near Jílové u Prahy",
                "distractors": ["Rudolf Jelínek distillery in Vizovice", "Svachovka distillery in Český Krumlov"],
                "explanation": "Slivovice Radlík is a refined, gentle plum spirit distilled at the acclaimed Radlík craft distillery near Jílové u Prahy."
            }
        ]
    },
    "slivovice-ze-sudu-radlik": {
        "description": "0.03l plum spirit aged in oak wood casks, golden in color with vanilla notes",
        "questions": [
            {
                "id": "slivovice-ze-sudu-radlik-vol",
                "question": "What is the serving volume / measure of Slivovice ze sudu Radlík?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Slivovice ze sudu Radlík is 0.03 l."
            },
            {
                "id": "slivovice-ze-sudu-radlik-ing-1",
                "question": "What maturation process gives Slivovice ze sudu Radlík its golden appearance?",
                "correctAnswer": "Plum spirit aged in oak wood casks",
                "distractors": ["Cold maceration with fresh green plums", "Stainless steel tank resting with caramel coloring"],
                "explanation": "This spirit is carefully matured in wooden oak casks from Radlík distillery, gaining subtle golden depth."
            },
            {
                "id": "slivovice-ze-sudu-radlik-ing-2",
                "question": "Which sensory flavor notes emerge from the oak maturation of Slivovice ze sudu Radlík?",
                "correctAnswer": "Golden color with delicate vanilla undertones from wood maturation",
                "distractors": ["Intense peaty smoke and iodine notes", "Sharp green apple and menthol bite"],
                "explanation": "Oak aging imparts a lustrous golden hue accompanied by round vanilla and woody sweetness."
            }
        ]
    },
    "hruskovice-skanzen": {
        "description": "0.03l intensely aromatic spirit from ripe Williams pears from Skanzen Modrá distillery",
        "questions": [
            {
                "id": "hruskovice-skanzen-vol",
                "question": "What is the serving volume / measure of Hruškovice Williams Skanzen?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Hruškovice Williams Skanzen is 0.03 l."
            },
            {
                "id": "hruskovice-skanzen-ing-1",
                "question": "Which fruit variety and distillery is used for Hruškovice Williams Skanzen?",
                "correctAnswer": "Intensely aromatic fruit brandy from ripe Williams pears from Skanzen Modrá",
                "distractors": ["Wild forest pears distilled at Zubří", "Conference pears aged in acacia wood"],
                "explanation": "This fruit brandy is distilled exclusively from fragrant, sweet Williams pears at Skanzen Modrá distillery."
            }
        ]
    },
    "hruskovice-ze-sudu-radlik": {
        "description": "0.03l pear spirit aged in oak casks, harmonious blend of orchard fruit and delicate wood",
        "questions": [
            {
                "id": "hruskovice-ze-sudu-radlik-vol",
                "question": "What is the serving volume / measure of Hruškovice ze sudu Radlík?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Hruškovice ze sudu Radlík is 0.03 l."
            },
            {
                "id": "hruskovice-ze-sudu-radlik-ing-1",
                "question": "How is Hruškovice ze sudu Radlík produced?",
                "correctAnswer": "Pear spirit aged in oak casks",
                "distractors": ["Unaged pear spirit in glass demijohns", "Pear liqueur sweetened with honey syrup"],
                "explanation": "Hruškovice ze sudu Radlík is a 100% pear spirit aged in small oak casks to soften the fruit alcohol."
            },
            {
                "id": "hruskovice-ze-sudu-radlik-ing-2",
                "question": "What taste balance does Hruškovice ze sudu Radlík achieve?",
                "correctAnswer": "Harmonious union of orchard fruit and delicate wood tannins",
                "distractors": ["Dominant bitter almond finish", "Crisp tart citrus acidity"],
                "explanation": "Barrel aging brings together natural sweet pear aroma and refined, gentle oak wood complexity."
            }
        ]
    },
    "merunkovice-svach": {
        "description": "0.03l delicious apricot brandy from family distillery Svachovka near Český Krumlov",
        "questions": [
            {
                "id": "merunkovice-svach-vol",
                "question": "What is the serving volume / measure of Meruňkovice Svach?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Meruňkovice Svach is 0.03 l."
            },
            {
                "id": "merunkovice-svach-ing-1",
                "question": "Which family distillery crafts Meruňkovice Svach?",
                "correctAnswer": "Delicious apricot brandy from family distillery Svachovka near Český Krumlov",
                "distractors": ["Radlík distillery near Prague", "Poněšice distillery near Hluboká"],
                "explanation": "Meruňkovice Svach is crafted from ripe apricots at the family-run Svachovka distillery near Český Krumlov."
            }
        ]
    },
    "visnovice-zubri": {
        "description": "0.03l authentic sour cherry spirit from Wallachian Zubří with delicate almond undertones from cherry pits",
        "questions": [
            {
                "id": "visnovice-zubri-vol",
                "question": "What is the serving volume / measure of Višňovice Zubří?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Višňovice Zubří is 0.03 l."
            },
            {
                "id": "visnovice-zubri-ing-1",
                "question": "Where does Višňovice Zubří originate and what distinguishes its taste?",
                "correctAnswer": "Authentic spirit from ripe sour cherries from Wallachian Zubří with delicate almond undertones",
                "distractors": ["Sweetened sour cherry liqueur from Moravia", "Oak-aged wild black cherry distillate from Bohemia"],
                "explanation": "Višňovice Zubří is a pure fruit distillate from Wallachia, offering ripe cherry notes and subtle almond marzipan tones from the pits."
            }
        ]
    },
    "jablkovice-galli": {
        "description": "0.03l crisp and fresh apple brandy from selected Czech apples from Galli distillery",
        "questions": [
            {
                "id": "jablkovice-galli-vol",
                "question": "What is the serving volume / measure of Jablkovice Galli?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Jablkovice Galli is 0.03 l."
            },
            {
                "id": "jablkovice-galli-ing-1",
                "question": "Which fruit and producer forms Jablkovice Galli?",
                "correctAnswer": "Crisp and fresh apple brandy from selected Czech apples from Galli distillery",
                "distractors": ["Pear and quince spirit from Skanzen", "Calvados style spirit aged in French oak from Normandy"],
                "explanation": "Jablkovice Galli is an unaged, vibrant fruit eau-de-vie distilled from top quality Czech orchard apples by Galli distillery."
            }
        ]
    },
    "rybizovice-raspenava": {
        "description": "0.03l rare and highly prized eau-de-vie from black and red currants from Raspenava",
        "questions": [
            {
                "id": "rybizovice-raspenava-vol",
                "question": "What is the serving volume / measure of Rybízovice Raspenava?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Rybízovice Raspenava is 0.03 l."
            },
            {
                "id": "rybizovice-raspenava-ing-1",
                "question": "Which precious fruit is distilled for Rybízovice Raspenava?",
                "correctAnswer": "Rare and highly prized eau-de-vie from black and red currants from Raspenava",
                "distractors": ["Macerated gooseberries and elderberries", "Fermented wild blueberries and blackberries"],
                "explanation": "Rybízovice Raspenava is a rare Czech specialty distilled from aromatic black and red currants in Northern Bohemia."
            }
        ]
    },
    "vinovice-ze-sudu-radlik": {
        "description": "0.03l grape spirit matured in oak barrels from Radlík distillery",
        "questions": [
            {
                "id": "vinovice-ze-sudu-radlik-vol",
                "question": "What is the serving volume / measure of Vínovice ze sudu Radlík?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Vínovice ze sudu Radlík is 0.03 l."
            },
            {
                "id": "vinovice-ze-sudu-radlik-ing-1",
                "question": "What spirit type and aging method is used for Vínovice ze sudu Radlík?",
                "correctAnswer": "Grape spirit matured in oak barrels from Radlík distillery",
                "distractors": ["Plum brandy aged in acacia casks", "Apple cider eau-de-vie aged in chestnut wood"],
                "explanation": "Vínovice ze sudu Radlík is distilled from wine grapes and mellowed in oak barrels at Radlík."
            }
        ]
    },
    "traminovice-kolby": {
        "description": "0.03l varietal grape brandy from Gewürztraminer (Tramín červený) grapes from Kolby winery (Pouzdřany)",
        "questions": [
            {
                "id": "traminovice-kolby-vol",
                "question": "What is the serving volume / measure of Tramínovice Kolby?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Tramínovice Kolby is 0.03 l."
            },
            {
                "id": "traminovice-kolby-ing-1",
                "question": "Which specific grape variety and winery is Tramínovice Kolby distilled from?",
                "correctAnswer": "Varietal grape brandy from Gewürztraminer (Tramín červený) from Kolby winery",
                "distractors": ["Riesling grape mash from Gotberg winery", "Pálava late harvest pomace from Reisten"],
                "explanation": "Tramínovice Kolby is an aromatic varietal brandy distilled from fragrant Gewürztraminer grapes from Kolby winery in Pouzdřany."
            }
        ]
    },
    "ponesicka-mrkvovice": {
        "description": "0.03l unique and rare vegetable eau-de-vie from sweet carrots from legendary South Bohemian Poněšice distillery",
        "questions": [
            {
                "id": "ponesicka-mrkvovice-vol",
                "question": "What is the serving volume / measure of Poněšická Mrkvovice?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Poněšická Mrkvovice is 0.03 l."
            },
            {
                "id": "ponesicka-mrkvovice-ing-1",
                "question": "Which unusual root vegetable and iconic distillery creates Poněšická Mrkvovice?",
                "correctAnswer": "Unique and rare vegetable eau-de-vie from sweet carrots from legendary distillery Poněšice",
                "distractors": ["Parsnip and celery spirit from Radlík", "Beetroot eau-de-vie from Svachovka"],
                "explanation": "Poněšická Mrkvovice is an extraordinary, award-winning artisanal spirit distilled from sweet carrots at South Bohemia's Poněšice distillery."
            }
        ]
    },
    "malinovice-silver-martenz": {
        "description": "0.03l luxurious raspberry geist distilled from selected wild raspberries with intense forest berry aroma",
        "questions": [
            {
                "id": "malinovice-silver-martenz-vol",
                "question": "What is the serving volume / measure of Malinovice Silver Martenz?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Malinovice Silver Martenz is 0.03 l."
            },
            {
                "id": "malinovice-silver-martenz-ing-1",
                "question": "Which premium berry and sensory profile defines Malinovice Silver Martenz?",
                "correctAnswer": "Luxurious raspberry geist distilled from selected wild raspberries with intense forest aroma",
                "distractors": ["Cultivated strawberry spirit with vanilla", "Blackberry and elderberry brandy"],
                "explanation": "Malinovice Silver Martenz is an exclusive raspberry geist capturing the intense fragrance of woodland wild raspberries."
            }
        ]
    },

    # --- VODKAS ---
    "anton-kaapl-legionar": {
        "description": "0.03l premium South Bohemian craft vodka from family distillery Jílovice, distilled with soft Bohemian Forest (Šumava) spring water",
        "questions": [
            {
                "id": "anton-kaapl-legionar-vol",
                "question": "What is the serving volume / measure of Anton Kaapl LEGIONARY?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Anton Kaapl LEGIONARY is 0.03 l."
            },
            {
                "id": "anton-kaapl-legionar-ing-1",
                "question": "Which distillery and origin crafts Anton Kaapl LEGIONARY?",
                "correctAnswer": "Premium South Bohemian craft vodka from family distillery Jílovice",
                "distractors": ["Industrial wheat vodka from Prague", "Moravian potato vodka from Třebíč"],
                "explanation": "Anton Kaapl LEGIONÄR is a refined craft vodka produced at the family-owned Jílovice distillery in South Bohemia."
            },
            {
                "id": "anton-kaapl-legionar-ing-2",
                "question": "Which natural water source is used in distilling Anton Kaapl LEGIONARY?",
                "correctAnswer": "Distilled with soft Bohemian Forest (Šumava) spring water",
                "distractors": ["Limestone mineral water from Karlštejn", "Deionized city tap water with reverse osmosis"],
                "explanation": "Anton Kaapl is renowned for blending its distillate with exceptionally soft, pristine spring water from the Bohemian Forest (Šumava)."
            }
        ]
    },
    "nemiroff": {
        "description": "0.03l celebrated premium wheat vodka with multi-stage filtration",
        "questions": [
            {
                "id": "nemiroff-vol",
                "question": "What is the serving volume / measure of Nemiroff?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Nemiroff is 0.03 l."
            },
            {
                "id": "nemiroff-ing-1",
                "question": "Which grain and production method defines Nemiroff vodka?",
                "correctAnswer": "Celebrated premium wheat vodka with multi-stage filtration",
                "distractors": ["Rye grain vodka aged in charred barrels", "Corn-based spirit with triple copper distillation"],
                "explanation": "Nemiroff is an internationally acclaimed wheat-based vodka renowned for its multi-stage purity filtration."
            }
        ]
    },
    "grey-goose": {
        "description": "0.03l luxurious French vodka crafted from winter wheat from Picardy and limestone-filtered spring water from Gensac-la-Pallue",
        "questions": [
            {
                "id": "grey-goose-vol",
                "question": "What is the serving volume / measure of Grey Goose?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Grey Goose is 0.03 l."
            },
            {
                "id": "grey-goose-ing-1",
                "question": "Which French region and grain is chosen to craft Grey Goose vodka?",
                "correctAnswer": "Soft winter wheat from the Picardy region in France",
                "distractors": ["Organic rye from Champagne", "Malted barley from Brittany"],
                "explanation": "Grey Goose is crafted in France using single-origin soft winter wheat grown in the Picardy agricultural region."
            },
            {
                "id": "grey-goose-ing-2",
                "question": "Which natural water source blends Grey Goose vodka?",
                "correctAnswer": "Limestone-filtered spring water from Gensac-la-Pallue (Cognac)",
                "distractors": ["Alpine glacier meltwater from Chamonix", "Artesian spring water from Normandy"],
                "explanation": "The vodka is blended with naturally filtered pure spring water drawn through Champagne limestone in Gensac-la-Pallue."
            }
        ]
    },

    # --- RUMS ---
    "havana-club-3": {
        "description": "0.03l traditional Cuban white rum aged 3 years in white oak casks, essential base for Mojito and Daiquiri",
        "questions": [
            {
                "id": "havana-club-3-vol",
                "question": "What is the serving volume / measure of Havana Club Anejo 3 Anos?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Havana Club Anejo 3 Anos is 0.03 l."
            },
            {
                "id": "havana-club-3-ing-1",
                "question": "How long and in what wood is Havana Club 3 Anos aged?",
                "correctAnswer": "Traditional Cuban white rum aged 3 years in white oak casks",
                "distractors": ["Unaged raw cane rum in stainless steel", "Aged 7 years in French cognac casks"],
                "explanation": "Havana Club Anejo 3 Anos is aged for 3 years in white oak barrels in Cuba, giving it its pale straw color and roundness."
            },
            {
                "id": "havana-club-3-ing-2",
                "question": "Which classic cocktails is Havana Club 3 Anos the essential base for?",
                "correctAnswer": "Essential base for authentic Mojito and Daiquiri",
                "distractors": ["Base for Dark & Stormy and Zombie", "Base for Piña Colada and Mai Tai only"],
                "explanation": "Its balanced sugarcane and citrus profile makes it the quintessential Cuban rum for Mojitos and Daiquiris."
            }
        ]
    },
    "el-dorado-12y": {
        "description": "0.03l Guyanese molasses rum aged 12 years in the tropics along Demerara river, rich notes of honey, raisins, and caramel",
        "questions": [
            {
                "id": "el-dorado-12y-vol",
                "question": "What is the serving volume / measure of El Dorado 12y?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of El Dorado 12y is 0.03 l."
            },
            {
                "id": "el-dorado-12y-ing-1",
                "question": "Where is El Dorado 12y distilled and aged?",
                "correctAnswer": "Guyanese molasses rum aged 12 years along the Demerara river",
                "distractors": ["Barbados pot still rum aged 10 years", "Jamaica high ester rum aged 15 years"],
                "explanation": "El Dorado 12y is distilled in historic wooden stills along the Demerara River in Guyana and aged 12 tropical years."
            },
            {
                "id": "el-dorado-12y-ing-2",
                "question": "What tasting notes characterize El Dorado 12y?",
                "correctAnswer": "Rich notes of honey, dark raisins, and caramel",
                "distractors": ["Crisp lime zest, mint, and sea salt", "Smoky peat, iodine, and green grass"],
                "explanation": "Tropical aging yields luxurious aromas of Demerara sugar, honey, dark raisins, and rich caramel."
            }
        ]
    },
    "mount-gay-xo": {
        "description": "0.03l premium Barbadian rum from the world's oldest operating distillery (since 1703), blend of reserves aged in bourbon, cognac, and American whiskey casks",
        "questions": [
            {
                "id": "mount-gay-xo-vol",
                "question": "What is the serving volume / measure of Mount Gay XO?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Mount Gay XO is 0.03 l."
            },
            {
                "id": "mount-gay-xo-ing-1",
                "question": "What historic distinction does Mount Gay distillery in Barbados hold?",
                "correctAnswer": "Barbadian rum from the world's oldest operating rum distillery (since 1703)",
                "distractors": ["Oldest distillery in Martinique (founded 1888)", "First column still distillery in Cuba (founded 1862)"],
                "explanation": "Mount Gay in Barbados holds the oldest surviving rum deed in the world, dating back to 1703."
            },
            {
                "id": "mount-gay-xo-ing-2",
                "question": "What wood casks are used to mature the reserves in Mount Gay XO?",
                "correctAnswer": "Blend of reserves aged in bourbon, cognac, and American whiskey casks",
                "distractors": ["Aged solely in virgin Spanish sherry butts", "Matured exclusively in used port wine pipes"],
                "explanation": "Mount Gay XO is a complex master blend aged in ex-bourbon, American whiskey, and French cognac casks."
            }
        ]
    },
    "abuelo-7y": {
        "description": "0.03l Panamanian rum made from estate-grown cane molasses, aged 7 years in small white oak barrels",
        "questions": [
            {
                "id": "abuelo-7y-vol",
                "question": "What is the serving volume / measure of Abuelo 7y?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Abuelo 7y is 0.03 l."
            },
            {
                "id": "abuelo-7y-ing-1",
                "question": "Where does Abuelo 7y rum originate and what is its sugarcane source?",
                "correctAnswer": "Panamanian rum crafted from estate-grown sugarcane molasses",
                "distractors": ["Colombian rum distilled from imported molasses", "Costa Rican rum made from wild mountain cane"],
                "explanation": "Ron Abuelo is made by Varela Hermanos in Panama from their own estate-cultivated sugarcane plantations."
            },
            {
                "id": "abuelo-7y-ing-2",
                "question": "What aging method gives Abuelo 7y its smooth character?",
                "correctAnswer": "Aged 7 years in select small white oak barrels",
                "distractors": ["Aged 2 years in stainless steel vats", "Solera aged in wine vats for 5 years"],
                "explanation": "The rum rests for 7 years in small carefully selected American white oak casks."
            }
        ]
    },
    "eminente-reserva-7y": {
        "description": "0.03l Cuban premium rum with a high 70% share of aged aguardientes (cane spirits), aged in whisky casks",
        "questions": [
            {
                "id": "eminente-reserva-7y-vol",
                "question": "What is the serving volume / measure of Eminente Reserva 7y?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Eminente Reserva 7y is 0.03 l."
            },
            {
                "id": "eminente-reserva-7y-ing-1",
                "question": "What unique composition sets Cuban Eminente Reserva 7y apart?",
                "correctAnswer": "Cuban premium rum with a high 70% share of aged aguardientes (cane spirits)",
                "distractors": ["100% column light rum with zero aguardiente", "Blend of French agricultural rum and Jamaican rum"],
                "explanation": "Eminente features an unusually rich 70% proportion of aged aguardientes, recreating the complexity of 19th-century Cuban rums."
            },
            {
                "id": "eminente-reserva-7y-ing-2",
                "question": "Which barrels are used to mature Eminente Reserva 7y?",
                "correctAnswer": "Matured in ex-whisky white oak casks",
                "distractors": ["New heavily charred alligator oak casks", "Ex-sherry Pedro Ximénez barrels"],
                "explanation": "The rich aguardiente blend is aged for a minimum of 7 years in ex-whisky white oak casks in central Cuba."
            }
        ]
    },
    "diplomatico": {
        "description": "0.03l Venezuelan rum aged up to 12 years in bourbon casks, velvety sweet with notes of chocolate, vanilla, and orange peel",
        "questions": [
            {
                "id": "diplomatico-vol",
                "question": "What is the serving volume / measure of Diplomático Reserva Exclusiva?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Diplomático Reserva Exclusiva is 0.03 l."
            },
            {
                "id": "diplomatico-ing-1",
                "question": "How long and where is Diplomático Reserva Exclusiva matured?",
                "correctAnswer": "Venezuelan rum aged up to 12 years in bourbon casks",
                "distractors": ["Puerto Rican rum aged 3 years in cognac casks", "Dominican rum aged 8 years in port barrels"],
                "explanation": "Distilled at the foot of the Andes in Venezuela, it is aged up to 12 years in ex-bourbon white oak barrels."
            },
            {
                "id": "diplomatico-ing-2",
                "question": "Which tasting notes distinguish Diplomático Reserva Exclusiva?",
                "correctAnswer": "Velvety sweet body layered with chocolate, vanilla, and orange peel",
                "distractors": ["Bone-dry herbal finish with lemongrass", "High-ester funk with overripe bananas and petrol"],
                "explanation": "Diplomático is celebrated for its decadent profile of melted chocolate, dark cocoa, sweet vanilla, and orange zest."
            }
        ]
    },
    "zacapa-23y": {
        "description": "0.03l Guatemalan rum from virgin sugarcane honey, aged via the Solera system at an altitude of 2,300 meters",
        "questions": [
            {
                "id": "zacapa-23y-vol",
                "question": "What is the serving volume / measure of Zacapa 23y?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Zacapa 23y is 0.03 l."
            },
            {
                "id": "zacapa-23y-ing-1",
                "question": "What raw material and aging altitude defines Ron Zacapa 23y?",
                "correctAnswer": "Guatemalan rum from virgin sugarcane honey, aged via Solera system at 2,300 m",
                "distractors": ["Brazilian cane juice aged at sea level", "Mexican molasses aged in tropical lowlands"],
                "explanation": "Zacapa is crafted from first-press virgin sugarcane honey and aged 'above the clouds' at 2,300m in Guatemala."
            }
        ]
    },

    # --- TEQUILAS ---
    "tres-alegres-compadres": {
        "description": "0.03l unaged pure tequila from 100% blue agave with notes of wild herbs, citrus, and roasted agave",
        "questions": [
            {
                "id": "tres-alegres-compadres-vol",
                "question": "What is the serving volume / measure of Tres Alegres Compadres Blanco?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Tres Alegres Compadres Blanco is 0.03 l."
            },
            {
                "id": "tres-alegres-compadres-ing-1",
                "question": "What agave content defines Tres Alegres Compadres Blanco?",
                "correctAnswer": "Unaged pure tequila crafted from 100% blue agave",
                "distractors": ["Mixto tequila with 51% agave and cane spirit", "Smoked wild espadín mezcal"],
                "explanation": "Tres Alegres Compadres Blanco is an unaged 100% blue Weber agave tequila capturing crisp agave purity."
            },
            {
                "id": "tres-alegres-compadres-ing-2",
                "question": "Which aromatic profile describes Tres Alegres Compadres Blanco?",
                "correctAnswer": "Fresh notes of wild herbs, bright citrus, and sweet roasted agave",
                "distractors": ["Heavy vanilla cream and charred wood smoke", "Rich caramel, dark raisins, and cinnamon"],
                "explanation": "The unaged blanco palate expresses crisp green herbs, fresh citrus oils, and rich roasted agave piñas."
            }
        ]
    },
    "herradura-reposado": {
        "description": "0.03l premium tequila aged a full 11 months in American white oak barrels (standards require only 2 months)",
        "questions": [
            {
                "id": "herradura-reposado-vol",
                "question": "What is the serving volume / measure of Herradura Reposado?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Herradura Reposado is 0.03 l."
            },
            {
                "id": "herradura-reposado-ing-1",
                "question": "What sets the maturation of Herradura Reposado apart from ordinary reposados?",
                "correctAnswer": "Aged a full 11 months in American white oak barrels (law requires only 2 months)",
                "distractors": ["Aged 2 months in stainless steel tanks with oak chips", "Aged 3 years in used Mexican mezcal vats"],
                "explanation": "While Mexican tequila regulations require only 2 months for reposado, Herradura ages for 11 full months."
            }
        ]
    },
    "corralejo-reposado": {
        "description": "0.03l 100% Agave, aged 4 months in a unique combination of American, French, and Mexican oak barrels",
        "questions": [
            {
                "id": "corralejo-reposado-vol",
                "question": "What is the serving volume / measure of Tequila Corralejo Reposado?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Tequila Corralejo Reposado is 0.03 l."
            },
            {
                "id": "corralejo-reposado-ing-1",
                "question": "What unique barrel combination is used for Corralejo Reposado?",
                "correctAnswer": "100% Agave aged 4 months in American, French, and Mexican oak barrels",
                "distractors": ["Aged solely in single virgin American white oak", "Matured exclusively in French Sauternes wine casks"],
                "explanation": "Corralejo uses a rare triple-wood aging technique combining American white oak, French limousine oak, and Mexican Encino oak."
            }
        ]
    },
    "cofradia-rose-catrina": {
        "description": "0.03l limited edition in hand-painted ceramic skull bottle Catrina, aged in red wine barrels with a pink hue",
        "questions": [
            {
                "id": "cofradia-rose-catrina-vol",
                "question": "What is the serving volume / measure of La Cofradia Reposado Rosé Catrina?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of La Cofradia Reposado Rosé Catrina is 0.03 l."
            },
            {
                "id": "cofradia-rose-catrina-ing-1",
                "question": "How is the collector's bottle and spirit of La Cofradia Rosé Catrina crafted?",
                "correctAnswer": "Limited edition in hand-painted ceramic Catrina skull bottle, aged in red wine barrels",
                "distractors": ["Clear industrial glass bottle with artificial food dye", "Clay jug infused with dried hibiscus flowers"],
                "explanation": "Presented in an iconic artisanal hand-painted ceramic Catrina skull, this reposado rests in red wine barrels to take on a gentle rosy hue."
            }
        ]
    },
    "cofradia-black-catrina": {
        "description": "0.03l black collectible ceramic Catrina edition, tequila aged in heavily charred oak barrels with a smoky body",
        "questions": [
            {
                "id": "cofradia-black-catrina-vol",
                "question": "What is the serving volume / measure of La Cofradia Black Catrina?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of La Cofradia Black Catrina is 0.03 l."
            },
            {
                "id": "cofradia-black-catrina-ing-1",
                "question": "What aging technique gives La Cofradia Black Catrina its distinctive character?",
                "correctAnswer": "Black collectible ceramic Catrina edition, tequila aged in heavily charred oak barrels",
                "distractors": ["Infused with Mexican dark cocoa beans", "Smoked in underground pit ovens like artisanal mezcal"],
                "explanation": "This collectible black edition is matured in deeply toasted and charred oak barrels, bestowing rich wood depth and smoky body."
            }
        ]
    },

    # --- WHISKY, WHISKEY, BOURBON ---
    "goldcock-blended": {
        "description": "0.03l traditional Czech whisky from Těšetice made from Moravian barley, matured in Czech oak casks crafted in Těšetice coopery",
        "questions": [
            {
                "id": "goldcock-blended-vol",
                "question": "What is the serving volume / measure of Goldcock blended?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Goldcock blended is 0.03 l."
            },
            {
                "id": "goldcock-blended-ing-1",
                "question": "Which Czech distillery and barley produces Goldcock whisky?",
                "correctAnswer": "Traditional Czech whisky from Těšetice distilled from Moravian barley",
                "distractors": ["Prunéřov distillery made from Bohemian wheat", "Svachovka distillery made from South Bohemian rye"],
                "explanation": "Goldcock is an iconic Czech whisky distilled in Těšetice (now Rudolf Jelínek) using 100% Moravian malted barley."
            },
            {
                "id": "goldcock-blended-ing-2",
                "question": "What barrels are uniquely used to mature Goldcock whisky?",
                "correctAnswer": "Matured in Czech oak casks crafted in the local Těšetice cooperage",
                "distractors": ["Imported ex-bourbon casks from Kentucky", "Ex-sherry butts from Jerez de la Frontera"],
                "explanation": "Goldcock is aged in authentic casks made from native Czech oak, built by master coopers in Těšetice."
            }
        ]
    },
    "glenfiddich-15y": {
        "description": "0.03l Scottish single malt whisky matured using a unique Solera vat in three cask types: sherry, bourbon, and new oak",
        "questions": [
            {
                "id": "glenfiddich-15y-vol",
                "question": "What is the serving volume / measure of Glenfiddich 15y?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Glenfiddich 15y is 0.03 l."
            },
            {
                "id": "glenfiddich-15y-ing-1",
                "question": "What innovative system is used to mature Glenfiddich 15y?",
                "correctAnswer": "Scottish single malt whisky matured using a unique Solera vat system",
                "distractors": ["Continuous column distillation in Islay", "Static single cask aging without vatting"],
                "explanation": "Glenfiddich 15y is married in a large handcrafted Oregon pine Solera vat that is never kept more than half empty."
            },
            {
                "id": "glenfiddich-15y-ing-2",
                "question": "Which three cask types are blended together in the Glenfiddich 15y Solera vat?",
                "correctAnswer": "Aged in three cask types: European sherry, American bourbon, and virgin oak",
                "distractors": ["Port pipes, Madeira drums, and rum casks", "Cognac barriques, white wine barrels, and stout casks"],
                "explanation": "The expression harmonizes malt matured in Spanish Oloroso sherry oak, American bourbon oak, and brand-new virgin oak."
            }
        ]
    },
    "talisker-10y": {
        "description": "0.03l iconic maritime single malt whisky from the rugged Isle of Skye, intensely peaty and smoky with sea salt and black pepper",
        "questions": [
            {
                "id": "talisker-10y-vol",
                "question": "What is the serving volume / measure of Talisker 10y?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Talisker 10y is 0.03 l."
            },
            {
                "id": "talisker-10y-ing-1",
                "question": "Which Scottish island is home to Talisker distillery?",
                "correctAnswer": "Iconic maritime single malt whisky from the rugged Scottish Isle of Skye",
                "distractors": ["Islay off the western coast", "Orkney in the far north"],
                "explanation": "Talisker is the oldest and most legendary distillery on the windswept Scottish Isle of Skye."
            },
            {
                "id": "talisker-10y-ing-2",
                "question": "What tasting notes define the classic profile of Talisker 10y?",
                "correctAnswer": "Intensely peaty and smoky with sea salt brine and black pepper",
                "distractors": ["Sweet vanilla cream, green apples, and honeydew melon", "Light floral heather honey with dry cut grass"],
                "explanation": "Talisker 10y is world-famous for its maritime smoke, sea spray minerality, and distinctive fiery black pepper finish."
            }
        ]
    },
    "monkey-shoulder": {
        "description": "0.03l Scottish blended malt whisky marrying malts from three renowned Speyside distilleries, smooth with rich vanilla notes",
        "questions": [
            {
                "id": "monkey-shoulder-vol",
                "question": "What is the serving volume / measure of Monkey Shoulder?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Monkey Shoulder is 0.03 l."
            },
            {
                "id": "monkey-shoulder-ing-1",
                "question": "What style of Scotch whisky is Monkey Shoulder?",
                "correctAnswer": "Scottish blended malt whisky marrying malts from three renowned Speyside distilleries",
                "distractors": ["Grain whisky blended with imported neutral spirit", "Single grain whisky aged in peated casks"],
                "explanation": "Monkey Shoulder is a 100% malt whisky ('blended malt') marrying single malts from three top Speyside distilleries."
            },
            {
                "id": "monkey-shoulder-ing-2",
                "question": "What flavor characteristics define Monkey Shoulder?",
                "correctAnswer": "Velvety smooth texture with notes of rich vanilla, honey, and spiced oak",
                "distractors": ["Heavy medicinal peat and iodine campfire smoke", "Sharp bitter rye grain and citrus pith"],
                "explanation": "Matured in first-fill ex-bourbon casks, it delivers approachable sweetness, warm vanilla, and gentle baking spices."
            }
        ]
    },
    "jameson": {
        "description": "0.03l world's best-selling Irish whiskey, triple distilled for exceptional smoothness",
        "questions": [
            {
                "id": "jameson-vol",
                "question": "What is the serving volume / measure of Jameson?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Jameson is 0.03 l."
            },
            {
                "id": "jameson-ing-1",
                "question": "What hallmark production method defines Jameson Irish Whiskey?",
                "correctAnswer": "World's best-selling Irish whiskey, triple distilled for exceptional smoothness",
                "distractors": ["Double distilled through direct coal-fired stills", "Unmalted grain mash aged in heavily peated casks"],
                "explanation": "Jameson is triple distilled in Ireland, which removes heavy impurities and delivers its celebrated approachable smoothness."
            }
        ]
    },
    "jack-daniels": {
        "description": "0.03l Tennessee whiskey filtered drop by drop through a 10-foot layer of sugar maple charcoal (Lincoln County Process)",
        "questions": [
            {
                "id": "jack-daniels-vol",
                "question": "What is the serving volume / measure of Jack Daniels?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Jack Daniels is 0.03 l."
            },
            {
                "id": "jack-daniels-ing-1",
                "question": "Which historic process defines Jack Daniel's as a Tennessee Whiskey?",
                "correctAnswer": "Filtered drop by drop through a 10-foot layer of sugar maple charcoal (Lincoln County Process)",
                "distractors": ["Aged in underground cellars with limestone filtration", "Cold-filtered through toasted oak chips and peat"],
                "explanation": "Jack Daniel's undergoes charcoal mellowing (Lincoln County Process), dripping slowly through 10 feet of hard sugar maple charcoal."
            }
        ]
    },

    # --- BRANDY & COGNAC ---
    "metaxa-5": {
        "description": "0.03l Greek amber spirit blended with Muscat wines from Aegean islands Samos and Lemnos and Mediterranean botanicals",
        "questions": [
            {
                "id": "metaxa-5-vol",
                "question": "What is the serving volume / measure of Metaxa *****?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Metaxa ***** is 0.03 l."
            },
            {
                "id": "metaxa-5-ing-1",
                "question": "Which ingredients are blended into Metaxa 5 Stars?",
                "correctAnswer": "Greek spirit blended with Muscat wines from Aegean islands Samos and Lemnos and Mediterranean botanicals",
                "distractors": ["Pure French wine distillate aged in Limousin oak", "Spanish grape brandy macerated with green walnuts"],
                "explanation": "Metaxa is unique in blending aged grape distillates with aromatic sweet Muscat wines from Samos and Lemnos and secret herbs."
            }
        ]
    },
    "remy-martin-1738": {
        "description": "0.03l prestigious French Fine Champagne Cognac (1738 Accord Royal) matured in toasted oak barrels, rich with figs, plums, and caramel",
        "questions": [
            {
                "id": "remy-martin-1738-vol",
                "question": "What is the serving volume / measure of Remy Martin 1738?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Remy Martin 1738 is 0.03 l."
            },
            {
                "id": "remy-martin-1738-ing-1",
                "question": "What prestigious classification does Remy Martin 1738 Accord Royal hold?",
                "correctAnswer": "Prestigious French Fine Champagne Cognac (1738 Accord Royal) matured in toasted oak barrels",
                "distractors": ["Armagnac distilled from Folle Blanche grapes", "Calvados Pays d'Auge aged in cider casks"],
                "explanation": "1738 Accord Royal is an authentic Cognac Fine Champagne, distilled exclusively from Grande and Petite Champagne cru grapes."
            },
            {
                "id": "remy-martin-1738-ing-2",
                "question": "What tasting notes distinguish Remy Martin 1738?",
                "correctAnswer": "Opulent notes of ripe figs, baked plums, and melted caramel",
                "distractors": ["Tart green apple, cucumber, and dry chalk", "Smoky bonfire peat, leather, and sea salt"],
                "explanation": "Toasted oak aging develops deep flavors of dried fruit, ripe figs, stewed plums, butterscotch, and warm baking spices."
            }
        ]
    },

    # --- SPIRITS & LIQUEURS (palenky-a-likery) ---
    "fuzovice": {
        "description": "0.03l FUZE/Agnes 45 %, our signature custom beer spirit distilled from brewery wort brewed from Pilsner and Munich malt with Mandarina Bavaria hops",
        "questions": [
            {
                "id": "fuzovice-vol",
                "question": "What is the serving volume / measure of Fuzovice?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Fuzovice is 0.03 l."
            },
            {
                "id": "fuzovice-ing-1",
                "question": "Which craft collaboration and alcohol content defines Fuzovice?",
                "correctAnswer": "FUZE/Agnes 45 % signature custom beer spirit",
                "distractors": ["FUZE/Radlík 40% plum spirit", "FUZE/Svach 50% apple schnapps"],
                "explanation": "Fuzovice is our bespoke house spirit (45% ABV) distilled in cooperation with the artisan Agnes Bohdaneč distillery."
            },
            {
                "id": "fuzovice-ing-2",
                "question": "What brewery recipe was mashed to distill Fuzovice?",
                "correctAnswer": "Distilled from brewery wort brewed from Pilsner and Munich malt with Mandarina Bavaria hops",
                "distractors": ["Brewed from roasted black malt and wild hops", "Distilled from wheat beer mash fermented with Belgian yeast"],
                "explanation": "Fuzovice is distilled from brewery wort made with Pilsner and Munich malts, hopped with aromatic Mandarina Bavaria hops."
            }
        ]
    },
    "absinth-st-antoine": {
        "description": "0.03l Žufánek, all-natural distilled absinthe made from real grand wormwood (Artemisia absinthium), anise, and fennel",
        "questions": [
            {
                "id": "absinth-st-antoine-vol",
                "question": "What is the serving volume / measure of Absinth St. Antoine?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Absinth St. Antoine is 0.03 l."
            },
            {
                "id": "absinth-st-antoine-ing-1",
                "question": "Which renowned craft family distillery produces Absinth St. Antoine?",
                "correctAnswer": "Žufánek craft distillery in Moravia",
                "distractors": ["Rudolf Jelínek in Vizovice", "Anton Kaapl in Jílovice"],
                "explanation": "Absinth St. Antoine is crafted by the celebrated Žufánek family distillery in Moravia."
            },
            {
                "id": "absinth-st-antoine-ing-2",
                "question": "What primary herb defines genuine Absinth St. Antoine?",
                "correctAnswer": "All-natural distilled absinthe from genuine grand wormwood (Artemisia absinthium)",
                "distractors": ["Macerated peppermint and lemon balm with green dye", "Distilled Roman chamomile and gentian root"],
                "explanation": "It is an authentic distilled French-style verte absinthe made with genuine grand wormwood grown on Žufánek's own fields."
            },
            {
                "id": "absinth-st-antoine-ing-3",
                "question": "Which classic botanicals complete the holy trinity in Absinth St. Antoine?",
                "correctAnswer": "Green anise and sweet Florence fennel",
                "distractors": ["Caraway seed and coriander", "Nutmeg and juniper berries"],
                "explanation": "The classic absinthe holy trinity consists of grand wormwood, green anise, and sweet Florence fennel."
            }
        ]
    },
    "kminka-garage22": {
        "description": "0.03l Garage 22, modern craft liqueur with distilled Czech caraway seeds and citrus peel from Prague's Holešovice",
        "questions": [
            {
                "id": "kminka-garage22-vol",
                "question": "What is the serving volume / measure of Kmínka?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Kmínka is 0.03 l."
            },
            {
                "id": "kminka-garage22-ing-1",
                "question": "Which modern craft distillery in Prague produces Kmínka?",
                "correctAnswer": "Garage 22 distillery from Prague's Holešovice",
                "distractors": ["Radlík distillery", "Bartida distillery"],
                "explanation": "Kmínka is crafted by Garage 22, Prague's first craft distillery located in the vibrant Holešovice district."
            },
            {
                "id": "kminka-garage22-ing-2",
                "question": "Which botanicals give Kmínka its contemporary flavor profile?",
                "correctAnswer": "Modern craft liqueur with distilled Czech caraway and citrus peel",
                "distractors": ["Fennel seeds and roasted chicory root", "Dill seed and wild mountain thyme"],
                "explanation": "Kmínka reinvents traditional Bohemian caraway liqueur by redistilling fragrant Czech caraway with zesty citrus peel."
            }
        ]
    },
    "kontusovka-zufanek": {
        "description": "0.03l Žufánek, traditional historic Bohemian herbal liqueur with anise, coriander, fennel, and star anise after an authentic 19th-century recipe",
        "questions": [
            {
                "id": "kontusovka-zufanek-vol",
                "question": "What is the serving volume / measure of Kontušovka?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Kontušovka is 0.03 l."
            },
            {
                "id": "kontusovka-zufanek-ing-1",
                "question": "Which family craft distillery revives traditional Kontušovka?",
                "correctAnswer": "Žufánek craft family distillery",
                "distractors": ["Agnes Bohdaneč distillery", "Galli distillery"],
                "explanation": "Kontušovka is resurrected and distilled by Martin Žufánek and his family in Boršice u Blatnice."
            },
            {
                "id": "kontusovka-zufanek-ing-2",
                "question": "Which spice and herb foundation defines historic Kontušovka?",
                "correctAnswer": "Traditional historic Bohemian anise liqueur with coriander",
                "distractors": ["Thyme and ginger liqueur with honey", "Cinnamon and clove digestive with pepper"],
                "explanation": "Historic Kontušovka is centered around aromatic green anise and crushed coriander seeds."
            },
            {
                "id": "kontusovka-zufanek-ing-3",
                "question": "Which complementary botanicals and history complete Žufánek's Kontušovka?",
                "correctAnswer": "Fennel and star anise according to an authentic 19th-century recipe",
                "distractors": ["Rosemary and dried sage from an ancient monastery recipe", "Cardamom and allspice according to a 1920s pub recipe"],
                "explanation": "Žufánek follows an original recipe dating back to 1801, infusing anise, star anise, coriander, and fennel."
            }
        ]
    },
    "orechovy-liker-radlik": {
        "description": "0.03l Radlík, gentle walnut liqueur macerated from unripe green St. John's walnuts and a secret spice blend",
        "questions": [
            {
                "id": "orechovy-liker-radlik-vol",
                "question": "What is the serving volume / measure of Walnut liqueur (Ořechový likér)?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Walnut liqueur is 0.03 l."
            },
            {
                "id": "orechovy-liker-radlik-ing-1",
                "question": "Which craft distillery creates this artisan Walnut liqueur?",
                "correctAnswer": "Radlík craft distillery near Jílové u Prahy",
                "distractors": ["Poněšice distillery", "Bartida distillery"],
                "explanation": "This exquisite walnut liqueur (Ořechovka) is produced at the acclaimed Radlík distillery near Prague."
            },
            {
                "id": "orechovy-liker-radlik-ing-2",
                "question": "What seasonal ingredient is macerated to make Radlík's Walnut liqueur?",
                "correctAnswer": "Gentle liqueur macerated from green St. John's walnuts and secret aromatic spices",
                "distractors": ["Roasted mature walnuts steeped in neutral grain alcohol", "Ground walnut shells infused in plum brandy"],
                "explanation": "It is crafted by macerating unripe green walnuts harvested around St. John's Day (late June) with secret spices."
            }
        ]
    },
    "hustopecska-mandlovka": {
        "description": "0.03l original Moravian almond spirit specialty from the unique almond orchards in Hustopeče",
        "questions": [
            {
                "id": "hustopecska-mandlovka-vol",
                "question": "What is the serving volume / measure of Hustopečská Mandlovka?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Hustopečská Mandlovka is 0.03 l."
            },
            {
                "id": "hustopecska-mandlovka-ing-1",
                "question": "Where does Hustopečská Mandlovka originate and what is its signature aroma?",
                "correctAnswer": "Original Moravian almond spirit specialty from the unique almond orchards in Hustopeče",
                "distractors": ["Italian amaretto infused with apricot pits", "Austrian marzipan schnapps from Wachau"],
                "explanation": "Hustopečská Mandlovka is a beloved South Moravian spirit made from the unique historic almond tree orchards of Hustopeče."
            }
        ]
    },
    "jagermeister": {
        "description": "0.03l German herbal liqueur made from 56 botanicals, flowers, roots, and fruits, aged 1 year in oak barrels",
        "questions": [
            {
                "id": "jagermeister-vol",
                "question": "What is the serving volume / measure of Jägermeister?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Jägermeister is 0.03 l."
            },
            {
                "id": "jagermeister-ing-1",
                "question": "How many natural botanicals are blended into Jägermeister?",
                "correctAnswer": "German herbal liqueur masterfully blended from 56 herbs, blossoms, roots, and fruits",
                "distractors": ["Czech herbal blend of 21 herbs", "French herbal liqueur of 130 alpine plants"],
                "explanation": "Jägermeister is famously macerated from a closely guarded blend of 56 herbs, spices, roots, and fruits from around the world."
            },
            {
                "id": "jagermeister-ing-2",
                "question": "How is Jägermeister matured before bottling?",
                "correctAnswer": "Aged for one full year in massive German oak barrels",
                "distractors": ["Bottled immediately after cold filtration", "Aged 3 months in stainless steel vats"],
                "explanation": "The herbal concentrate is rested and aged in gigantic oak barrels in Wolfenbüttel, Germany, for one full year."
            }
        ]
    },
    "podebradska-samicka": {
        "description": "0.03l traditional Elbe region herbal liqueur with a harmonious bittersweet profile",
        "questions": [
            {
                "id": "podebradska-samicka-vol",
                "question": "What is the serving volume / measure of Poděbradská Samička?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Poděbradská Samička is 0.03 l."
            },
            {
                "id": "podebradska-samicka-ing-1",
                "question": "What regional heritage and taste defines Poděbradská Samička?",
                "correctAnswer": "Traditional Elbe region herbal liqueur with a harmonious bittersweet profile",
                "distractors": ["Moravian sweet honey herbal liqueur from Beskydy", "Bohemian Forest bitter gentian schnapps"],
                "explanation": "Poděbradská Samička is a historic spa-town herbal liqueur from Poděbrady in the Elbe lowlands with a balanced bittersweet herbal bouquet."
            }
        ]
    },
    "becherovka-unfiltered": {
        "description": "0.03l Karlovy Vary herbal liqueur in unfiltered premium edition with golden haze and intense herbal taste",
        "questions": [
            {
                "id": "becherovka-unfiltered-vol",
                "question": "What is the serving volume / measure of Becherovka Unfiltered?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Becherovka Unfiltered is 0.03 l."
            },
            {
                "id": "becherovka-unfiltered-ing-1",
                "question": "What characterizes the premium Unfiltered edition of Becherovka?",
                "correctAnswer": "Karlovy Vary herbal liqueur in unfiltered premium edition with golden haze and richer botanicals",
                "distractors": ["Standard clear Becherovka with added lemon juice", "Oak-cask aged Becherovka with sugar syrup"],
                "explanation": "Becherovka Neprofiltrovaná bypasses micro-filtration, preserving natural essential oils, a subtle golden haze, and full herbal character."
            }
        ]
    },
    "smoked-grappa-tosolini": {
        "description": "0.03l noble Italian grappa distilled from grape pomace smoked over oak wood by family distillery Bepi Tosolini in Udine",
        "questions": [
            {
                "id": "smoked-grappa-tosolini-vol",
                "question": "What is the serving volume / measure of Smoked Grappa Bepi Tosolini?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Smoked Grappa Bepi Tosolini is 0.03 l."
            },
            {
                "id": "smoked-grappa-tosolini-ing-1",
                "question": "What is the spirit base of Smoked Grappa Bepi Tosolini?",
                "correctAnswer": "Noble Italian grappa distilled from pressed grape pomace",
                "distractors": ["Aged wine distillate from Trebbiano grapes", "Apple pomace brandy from South Tyrol"],
                "explanation": "Grappa is authentic Italian pomace brandy distilled from the skins, seeds, and pulp of fresh grapes."
            },
            {
                "id": "smoked-grappa-tosolini-ing-2",
                "question": "Which artisanal method distinguishes Bepi Tosolini's Smoked Grappa?",
                "correctAnswer": "Smoked over oak wood by the artisanal Bepi Tosolini family distillery in Udine",
                "distractors": ["Peat smoked in Scotland before distillation", "Aged in heavily burned bourbon casks in Kentucky"],
                "explanation": "Distilled in Udine, Friuli, the grape pomace is smoked over seasoned oak chips before artisanal steam distillation."
            }
        ]
    },
    "bezovy-elixir-jelinek": {
        "description": "0.03l Moravian elderflower liqueur made from fragrant elder blossoms by Rudolf Jelínek in Vizovice",
        "questions": [
            {
                "id": "bezovy-elixir-jelinek-vol",
                "question": "What is the serving volume / measure of Bezový elixír R.Jelínek?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Bezový elixír R.Jelínek is 0.03 l."
            },
            {
                "id": "bezovy-elixir-jelinek-ing-1",
                "question": "What flower and famous Moravian distillery produces this liqueur?",
                "correctAnswer": "Moravian elderflower liqueur made from fragrant elder blossoms by Rudolf Jelínek in Vizovice",
                "distractors": ["Linden blossom liqueur distilled in Prague", "Chamomile and dandelion spirit from Bohemia"],
                "explanation": "Bezový elixír is crafted by Rudolf Jelínek in Vizovice by macerating hand-picked Moravian black elderberry flowers."
            }
        ]
    },
    "creme-de-cassis": {
        "description": "0.03l Le Duc Charmant / Jenčík, luscious blackcurrant liqueur",
        "questions": [
            {
                "id": "creme-de-cassis-vol",
                "question": "What is the serving volume / measure of Créme de cassis?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Créme de cassis is 0.03 l."
            },
            {
                "id": "creme-de-cassis-ing-1",
                "question": "Which craft producer crafts this Créme de cassis?",
                "correctAnswer": "Le Duc Charmant / Jenčík & dcery family distillery",
                "distractors": ["Bartida craft distillery", "Svachovka distillery"],
                "explanation": "Le Duc Charmant Créme de cassis is produced by the traditional South Bohemian family distillery Jenčík a dcery."
            },
            {
                "id": "creme-de-cassis-ing-2",
                "question": "What fruit forms the rich, velvety core of Créme de cassis?",
                "correctAnswer": "Luscious, velvety liqueur made from ripe blackcurrants",
                "distractors": ["Sweet wild blackberries with plum spirit", "Red currant and cranberry blend with honey"],
                "explanation": "Créme de cassis is a classic dense, deep purple fruit liqueur macerated from ripe blackcurrants (cassis)."
            }
        ]
    },
    "vajecnak-bartida": {
        "description": "0.03l honest thick egg liqueur with exceptionally high egg yolk content and a splash of cane rum",
        "questions": [
            {
                "id": "vajecnak-bartida-vol",
                "question": "What is the serving volume / measure of Vaječňák Bartida (Egg liqueur)?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Vaječňák Bartida is 0.03 l."
            },
            {
                "id": "vajecnak-bartida-ing-1",
                "question": "What recipe makes Bartida's Vaječňák exceptionally rich and creamy?",
                "correctAnswer": "Honest thick egg liqueur with exceptionally high egg yolk content and a splash of cane rum",
                "distractors": ["Powdered artificial egg mix with neutral grain vodka", "Condensed milk with brandy and caramel syrup"],
                "explanation": "Bartida Vaječňák features one of the highest egg yolk proportions on the market and is enriched with fine sugarcane rum."
            }
        ]
    },
    "griotte-bartida": {
        "description": "0.03l premium sour cherry liqueur with high proportion of pure sour cherry juice and fruit eau-de-vie",
        "questions": [
            {
                "id": "griotte-bartida-vol",
                "question": "What is the serving volume / measure of Griotte Original Bartida?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Griotte Original Bartida is 0.03 l."
            },
            {
                "id": "griotte-bartida-ing-1",
                "question": "What ingredients define Bartida's premium Griotte Original?",
                "correctAnswer": "Premium sour cherry liqueur with high proportion of pure sour cherry juice and fruit eau-de-vie",
                "distractors": ["Synthetic sour cherry aroma sweetened with corn syrup", "Black cherry wine reduction with vodka"],
                "explanation": "Bartida Griotte contains a very high concentration of natural sour cherry juice blended with pure fruit distillates."
            }
        ]
    },
    "zelena-bartida": {
        "description": "0.03l premium peppermint liqueur crafted from genuine natural peppermint essential oil",
        "questions": [
            {
                "id": "zelena-bartida-vol",
                "question": "What is the serving volume / measure of Zelená Bartida?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Zelená Bartida is 0.03 l."
            },
            {
                "id": "zelena-bartida-ing-1",
                "question": "What natural flavoring distinguishes Bartida's Zelená peppermint liqueur?",
                "correctAnswer": "Premium peppermint liqueur crafted from genuine natural peppermint essential oil",
                "distractors": ["Synthetic spearmint food coloring and artificial flavoring", "Eucalyptus and menthol crystals dissolved in neutral spirit"],
                "explanation": "Bartida's Zelená uses pure distilled peppermint oil (Mentha piperita) for an authentic, cooling herbal taste."
            }
        ]
    },
    "zelena-svach": {
        "description": "0.03l craft South Bohemian peppermint liqueur from Svachovka distillery made with real macerated peppermint",
        "questions": [
            {
                "id": "zelena-svach-vol",
                "question": "What is the serving volume / measure of Zelená Svach?",
                "correctAnswer": "0.03 l",
                "distractors": ["0.05 l", "0.02 l"],
                "explanation": "The standard serving measure of Zelená Svach is 0.03 l."
            },
            {
                "id": "zelena-svach-ing-1",
                "question": "How does Svachovka distillery produce its craft Zelená liqueur?",
                "correctAnswer": "Craft South Bohemian peppermint liqueur from Svachovka distillery made with real macerated peppermint",
                "distractors": ["Cold mix of peppermint syrup and grain alcohol", "Wintergreen mint infusion aged in oak barrels"],
                "explanation": "Svachovka creates an artisanal craft peppermint liqueur by directly macerating real peppermint leaves in fine spirit."
            }
        ]
    }
}

updated_items = 0
for cat in categories:
    for it in cat.get('items', []):
        if it['id'] in ALCOHOL_UPDATES:
            upd = ALCOHOL_UPDATES[it['id']]
            it['description'] = upd['description']
            it['questions'] = upd['questions']
            updated_items += 1

print(f"Successfully updated {updated_items} alcohol items in EN menu categories.")

# Serialize back
new_json_str = json.dumps(categories, indent=2, ensure_ascii=False)
new_text = text_en[:var_match.start(2)] + new_json_str + text_en[var_match.end(2):]

with open('src/data/menuDataEn.ts', 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Updated src/data/menuDataEn.ts successfully!")
