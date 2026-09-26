import json
import re

# Load CZ
with open('src/data/menuData.ts', 'r', encoding='utf-8') as f:
    text_cz = f.read()

start_cz = text_cz.find('export const MENU_CATEGORIES: MenuCategory[] = [') + len('export const MENU_CATEGORIES: MenuCategory[] = ')
end_cz = text_cz.rfind('];') + 1
cats_cz = json.loads(text_cz[start_cz:end_cz])

# Load EN
with open('src/data/menuDataEn.ts', 'r', encoding='utf-8') as f:
    text_en = f.read()

start_en = text_en.find('export const MENU_CATEGORIES_EN: MenuCategory[] = [') + len('export const MENU_CATEGORIES_EN: MenuCategory[] = ')
end_en = text_en.rfind('];') + 1
cats_en = json.loads(text_en[start_en:end_en])

# Corrections table
UPDATES = {
    # STARTERS
    'tatarak': {
        'cz': {
            'name': 'Krájený hovězí tatarák',
            'weight': '90g',
            'price': '239,-',
            'allergens': ['1', '3', '7'],
            'description': 'z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka a konfitovaný česnek',
        },
        'en': {
            'name': 'Sliced beef tartare',
            'weight': '90g',
            'price': '239,-',
            'allergens': ['1', '3', '7'],
            'description': 'from tip of the sirloin, tiny pickles, marinated shallots, parsley leaf, toasted on beef lard, and confit garlic',
        }
    },
    'klobasa-smrze': {
        'cz': {
            'name': 'Naše telecí klobása se smrži',
            'weight': '100g',
            'price': '219,-',
            'allergens': ['1', '3', '7', '8', '10'],
            'description': 'kaštany a sušenými švestkami, lanýžová omáčka, pivní sušenka',
        },
        'en': {
            'name': 'Our veal sausage with morels',
            'weight': '100g',
            'price': '219,-',
            'allergens': ['1', '3', '7', '8', '10'],
            'description': 'chestnuts and dried plums, truffle sauce, beer crumble',
        }
    },
    'foie-gras': {
        'cz': {
            'name': 'Paštika z kachních foie gras',
            'weight': '100g',
            'price': '315,-',
            'allergens': ['1', '3', '7'],
            'description': 'v želé z piva Kasteel Rouge, višňová omáčka, opečená máslová brioška',
        },
        'en': {
            'name': 'Foie gras pâté',
            'weight': '100g',
            'price': '315,-',
            'allergens': ['1', '3', '7'],
            'description': 'in Kasteel Rouge beer jelly, cherry sauce, toasted butter brioche',
        }
    },
    'veprovy-bok-platky': {
        'cz': {
            'name': 'Tenké plátky vepřového boku',
            'weight': '100g',
            'price': '169,-',
            'allergens': ['10'],
            'description': 'zauzeného chmelem, křupavé vepřové krekry, pyré z pečených jablek a hořčice, smažený hrách',
        },
        'en': {
            'name': 'Thin slices of pork belly',
            'weight': '100g',
            'price': '169,-',
            'allergens': ['10'],
            'description': 'hop-smoked, crispy pork cracklings, over roasted apples and horseradish, fried peas',
        }
    },
    'kureci-krokety': {
        'cz': {
            'name': 'Smažené kuřecí krokety',
            'weight': '100g',
            'price': '175,-',
            'allergens': ['1', '3', '7', '14'],
            'description': 's čedarem, naše salsa verde, libečková majonéza',
        },
        'en': {
            'name': 'Fried chicken croquettes',
            'weight': '100g',
            'price': '175,-',
            'allergens': ['1', '3', '7', '14'],
            'description': 'with cheddar, our salsa verde, lovage mayonnaise',
        }
    },
    'olomoucke-tvaruzky': {
        'cz': {
            'name': 'Sekané olomoucké tvarůžky',
            'price': '199,-',
            'allergens': ['1', '3', '7', '10'],
            'description': 's cibulkou, majonézou s paprikou a hořčičným semínkem na opečeném kváskovém chlebu, křen, kyselá zeleninka',
        },
        'en': {
            'name': 'Olomouc curd cheese spread',
            'price': '199,-',
            'allergens': ['1', '3', '7', '10'],
            'description': 'with onion and paprika-mustard seed mayonnaise on toasted sourdough, horseradish and pickled vegetables',
        }
    },
    # BAR SNACKS (CHUŤOVKA)
    'lanyzovy-popcorn': {
        'cz': {
            'name': 'Lanýžový popcorn',
            'price': '139,-',
            'allergens': ['7'],
            'description': 's parmazánem',
        },
        'en': {
            'name': 'Truffle popcorn',
            'price': '139,-',
            'allergens': ['7'],
            'description': 'with parmesan',
        }
    },
    'domaci-bramburky': {
        'cz': {
            'name': 'Naše domácí brambůrky',
            'price': '125,-',
            'allergens': ['7'],
            'description': 'pikantní zauzená majonéza',
        },
        'en': {
            'name': 'Homemade potatoes',
            'price': '125,-',
            'allergens': ['7'],
            'description': 'spicy smoked mayonnaise',
        }
    },
    # SOUPS (POLÉVKY)
    'hovezi-consomme': {
        'cz': {
            'name': 'Hovězí consommé',
            'price': '109,-',
            'allergens': ['9'],
            'description': 'jemný játrový knedlíček, zelenina',
        },
        'en': {
            'name': 'Beef consommé',
            'price': '109,-',
            'allergens': ['9'],
            'description': 'delicate liver dumpling, vegetables',
        }
    },
    'kremova-humri': {
        'cz': {
            'name': 'Krémová humří polévka',
            'price': '269,-',
            'allergens': ['1', '2', '3', '7', '9'],
            'description': 's klobáskou a zeleninou, zapečená listovým těstem',
        },
        'en': {
            'name': 'Creamy lobster soup',
            'price': '269,-',
            'allergens': ['1', '2', '3', '7', '9'],
            'description': 'with saffron and brandy, topped with puff pastry',
        }
    },
    # SALADS
    'caesar-salat': {
        'cz': {
            'name': 'Caesar salát s trhaným kuřetem',
            'price': '289,-',
            'allergens': ['1', '3', '4', '7', '10'],
            'description': 'opečenou slaninou, parmezánem a krutony',
        },
        'en': {
            'name': 'Caesar salad',
            'price': '289,-',
            'allergens': ['1', '3', '4', '7', '10'],
            'description': 'with grilled chicken breast, parmesan, and croutons',
        }
    },
    'waldorf-salat': {
        'cz': {
            'name': 'Waldorf salát',
            'price': '245,-',
            'allergens': ['8', '9', '10'],
            'description': 'jablka, řapíkatý celer, hrozny, nakládané vlašské ořechy, majonézový dresing',
        },
        'en': {
            'name': 'Waldorf salad',
            'price': '245,-',
            'allergens': ['8', '9', '10'],
            'description': 'with apples, celery, grapes, and walnut mayonnaise dressing',
        }
    },
    # FROM STOVE AND OVEN
    'pecene-koleno': {
        'cz': {
            'name': 'Pečené vepřové koleno',
            'weight': '1ks',
            'price': '459,-',
            'allergens': ['1', '10'],
            'description': '/v nabídce každý den vždy do vyprodání/ hořčice, strouhaný křen, zelný salát s křenem',
        },
        'en': {
            'name': 'Roasted Pork Knuckle',
            'weight': '1pc',
            'price': '459,-',
            'allergens': ['1', '10'],
            'description': '/offered daily until sold out/ mustard, grated horseradish, cabbage salad with horseradish',
        }
    },
    'veprovy-rizek-duroc': {
        'cz': {
            'name': 'Vysoký vepřový řízek z plemene Duroc',
            'weight': '200g',
            'price': '309,-',
            'allergens': ['1', '3', '4', '7', '10'],
            'description': 'z plemene Duroc, omáčka fines herbes, bramborová kaše a bramborové křupky',
        },
        'en': {
            'name': 'Thick-cut pork schnitzel',
            'weight': '200g',
            'price': '309,-',
            'allergens': ['1', '3', '4', '7', '10'],
            'description': 'from Duroc pork, fines herbes sauce, potato mash, and crispy potato crisps',
        }
    },
    'veprova-zebra': {
        'cz': {
            'name': 'Vepřová žebra marinovaná s pivem',
            'weight': '500g',
            'price': '379,-',
            'allergens': ['1', '3', '6', '7', '10'],
            'description': 'marinovaná a pečená s naším pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, náš zelný salát s křenem, opečená česneková brioška',
        },
        'en': {
            'name': 'Pork ribs',
            'weight': '500g',
            'price': '379,-',
            'allergens': ['1', '3', '6', '7', '10'],
            'description': 'marinated and slow-roasted in our beer, candied bacon, pearl onions, apple BBQ glaze, our cabbage salad with horseradish, and toasted garlic brioche',
        }
    },
    'hovezi-koprovka': {
        'cz': {
            'name': 'Tažené hovězí maso s koprovou omáčkou',
            'weight': '200g',
            'price': '345,-',
            'allergens': ['1', '3', '7'],
            'description': 'vejce, rohlíčkové brambory, koprový olej',
        },
        'en': {
            'name': 'Braised beef with dill sauce',
            'weight': '200g',
            'price': '345,-',
            'allergens': ['1', '3', '7'],
            'description': 'served with egg, baby potatoes and dill oil',
        }
    },
    'testoviny-kureci': {
        'cz': {
            'name': 'Těstoviny plněné jemnou kuřecí směsí',
            'price': '299,-',
            'allergens': ['1', '3', '7'],
            'description': 'zapečené v hříbkové omáčce, grilovaná hlíva ústřičná, bylinkový olej',
        },
        'en': {
            'name': 'Pasta filled with delicate chicken mixture',
            'price': '299,-',
            'allergens': ['1', '3', '7'],
            'description': 'baked in porcini sauce served with grilled oyster mushrooms and herb oil',
        }
    },
    'shrimp-roll': {
        'cz': {
            'name': 'Shrimp roll 12ks argentinských červených krevet',
            'price': '666,-',
            'allergens': ['1', '2', '3', '5', '7', '9', '10'],
            'description': 'v máslové briošce, koktejlová omáčka s koňakem, salátek, naše hranolky, choron omáčka',
        },
        'en': {
            'name': 'Shrimp roll 12 pcs Argentine red shrimp',
            'price': '666,-',
            'allergens': ['1', '2', '3', '5', '7', '9', '10'],
            'description': 'in a butter brioche, cocktail sauce with cognac, salad greens, our fries, Choron sauce',
        }
    },
    'vykosteny-pstruh': {
        'cz': {
            'name': 'Filátka vykoštěného pstruha',
            'weight': '180g',
            'price': '399,-',
            'allergens': ['3', '4', '7'],
            'description': 'opečená na másle, choron omáčka, pečená rajčátka, bylinkový salát, pečená zimní zelenina',
        },
        'en': {
            'name': 'Fillet of deboned rainbow trout',
            'weight': '180g',
            'price': '399,-',
            'allergens': ['3', '4', '7'],
            'description': 'pan-seared in butter, choron sauce, roasted tomatoes, herb salad, and roasted winter vegetables',
        }
    },
    'svickova-wellington': {
        'cz': {
            'name': 'Svíčková Wellington',
            'weight': '200g',
            'price': '675,-',
            'allergens': ['1', '3', '7', '10'],
            'description': 'pečená dorůžova se směsí duxelles ochucené lanýži, koňaková omáčka, zauzené rohlíčkové brambory',
        },
        'en': {
            'name': 'Beef Wellington',
            'weight': '200g',
            'price': '675,-',
            'allergens': ['1', '3', '7', '10'],
            'description': 'tenderloin wrapped in mushroom and duck liver duxelles, seasoned with truffle, veal demi-glace, smoked potatoes',
        }
    },
    'thors-hammer': {
        'cz': {
            'name': "Thor's Hammer hovězí koleno",
            'weight': '700g',
            'price': '1.490,-',
            'allergens': ['1', '11'],
            'description': 'tažené v naší hliněné peci, omáčka z Kasteel Rouge, pálené šalotky, opečená česneková brioška, naše salsa verde, zauzené rohlíčkové brambory, náš zelný salát s křenem. Pro 2 až 4 osoby',
        },
        'en': {
            'name': "Thor's Hammer beef knuckle",
            'weight': '700g',
            'price': '1490,-',
            'allergens': ['1', '11'],
            'description': 'slow-braised in our tandoori, Kasteel Rouge sauce, charred shallots, toasted garlic brioche, our salsa verde, smoked potatoes, and our cabbage salad with horseradish. Serves 2 to 4 people',
        }
    },
    'burger-foie-gras': {
        'cz': {
            'name': 'Hovězí burger',
            'weight': '200g',
            'price': '449,-',
            'allergens': ['1', '3', '7'],
            'description': 's uzenou nivou a kachními foie gras, majonéza z pečené cibule, bramborová sláma, malé domácí hranolky',
        },
        'en': {
            'name': 'Beef burger',
            'weight': '200g',
            'price': '449,-',
            'allergens': ['1', '3', '7'],
            'description': 'with smoked blue cheese and duck foie gras, roasted onion mayonnaise, potato straw and small homemade fries',
        }
    },
    # GRILL
    'us-prime-steaky': {
        'cz': {
            'name': 'US Prime Steaky (Květová špička & Vysoký roštěnec)',
            'weight': '250g',
            'price': '519,- / 985,-',
            'allergens': [],
            'description': 'US Prime hovězí květová špička (250g / 519 Kč) nebo US Prime vysoký roštěnec (250g / 985 Kč)',
        },
        'en': {
            'name': 'US Prime beef sirloin & ribeye',
            'weight': '250g',
            'price': '519 / 985,-',
            'allergens': [],
            'description': 'US Prime beef sirloin (250g / 519 CZK) or US Prime beef ribeye (250g / 985 CZK)',
        }
    },
    'us-prime-burger': {
        'cz': {
            'name': 'US Prime hovězí burger',
            'weight': '200g',
            'price': '369,-',
            'allergens': ['1', '3', '7', '10'],
            'description': 'opečená slanina, čedar, cibulová marmeláda a pikantní majonéza',
        },
        'en': {
            'name': 'US Prime beef burger',
            'weight': '200g',
            'price': '369,-',
            'allergens': ['1', '3', '7', '10'],
            'description': 'grilled bacon, cheddar, onion marmalade, spicy mayonnaise',
        }
    },
    'grilovany-bucek-yuzu': {
        'cz': {
            'name': 'Grilovaný vepřový bůček',
            'weight': '300g',
            'price': '299,-',
            'allergens': ['2', '4', '6'],
            'description': 'karamelizovaná yuzu omáčka, grilovaná jarní cibulka, chimichurri omáčka',
        },
        'en': {
            'name': 'Grilled pork belly',
            'weight': '300g',
            'price': '299,-',
            'allergens': ['2', '4', '6'],
            'description': 'caramelized yuzu sauce, grilled spring onion, chimichurri sauce',
        }
    },
    'nase-pastrami': {
        'cz': {
            'name': 'Naše pastrami z US Prime hovězího žebra',
            'weight': '200g',
            'price': '455,-',
            'allergens': ['1', '3', '7', '10'],
            'description': 'sýr raclette a zelný salát s křenem v opečeném kváskovém chlebu, nakládaná zelenina',
        },
        'en': {
            'name': 'Our pastrami from US Prime beef ribs',
            'weight': '200g',
            'price': '455,-',
            'allergens': ['1', '3', '7', '10'],
            'description': 'raclette cheese and cabbage salad with horseradish in toasted sourdough bread, pickled vegetables',
        }
    },
    'pecene-kure-pec': {
        'cz': {
            'name': '½ Kuře pečené v naší hliněné peci',
            'price': '279,-',
            'allergens': ['1', '4', '7', '10'],
            'description': 'BBQ (pikantní jablečná omáčka, křupavá cibulka, bylinkové máslo), TRUFFLE (lanýžové máslo, bramborové křupky, pažitka) nebo CAESAR (omáčka z ančoviček, parmezánu a hořčice, smažené kapary)',
        },
        'en': {
            'name': '½ Roasted chicken in our tandoori',
            'price': '279,-',
            'allergens': ['1', '4', '7', '10'],
            'description': 'BBQ version (spicy barbecue sauce, crispy onions, herb butter), TRUFFLE version (truffle butter, potato crisps, chives), CAESAR version (anchovy, parmesan, mustard sauce, fried capers)',
        }
    },
    # SAUCES
    'omacka-chimichurri': {
        'cz': {
            'name': 'Okurkový relish',
            'price': '65,-',
            'allergens': [],
            'description': 'nakládané okurčičky, hořčičné semínko, kopr, jemný nálev',
        },
        'en': {
            'name': 'Cucumber relish',
            'price': '65,-',
            'allergens': [],
            'description': 'pickled cucumbers, mustard seeds, dill, delicate vinegar marinade',
        }
    },
    # SIDES
    'bramborova-kase': {
        'cz': {
            'name': 'Bramborová kaše',
            'price': '89,-',
            'allergens': ['7'],
            'description': 'máslo, bramborové křupky',
        },
        'en': {
            'name': 'Potato mash',
            'price': '89,-',
            'allergens': ['7'],
            'description': 'with butter and potato crisps',
        }
    },
    'zauzene-rohlicek-brambory': {
        'cz': {
            'name': 'Zauzené rohlíčkové brambory',
            'price': '99,-',
            'allergens': ['7'],
            'description': 'máslo',
        },
        'en': {
            'name': 'Smoked potatoes',
            'price': '99,-',
            'allergens': ['7'],
            'description': 'with butter',
        }
    },
    'salat-trhane-listy': {
        'cz': {
            'name': 'Salát z trhaných salátových listů a zeleného rajčete',
            'price': '129,-',
            'allergens': ['10'],
            'description': 'a zeleného rajčete, pivní vinaigrette',
        },
        'en': {
            'name': 'Salad of torn lettuce leaves',
            'price': '129,-',
            'allergens': ['10'],
            'description': 'with green tomatoes and beer vinaigrette',
        }
    },
    'pecena-zimni-zelenina': {
        'cz': {
            'name': 'Pečená zimní zelenina s kardamomem a javorovým sirupem',
            'price': '129,-',
            'allergens': ['9'],
            'description': 's kardamomem a javorovým sirupem',
        },
        'en': {
            'name': 'Roasted winter vegetables',
            'price': '129,-',
            'allergens': ['9'],
            'description': 'with cardamom and maple syrup',
        }
    },
    'zelny-salat-kren': {
        'cz': {
            'name': 'Náš zelný salát s křenem',
            'price': '99,-',
            'allergens': ['3', '7', '11'],
            'description': 'rozinkami, vinným octem a majonézou',
        },
        'en': {
            'name': 'Cabbage salad with horseradish',
            'price': '99,-',
            'allergens': ['3', '7', '11'],
            'description': 'with raisins, wine vinegar, and mayonnaise',
        }
    },
    # DESSERTS
    'dortik-ganache-sisky': {
        'cz': {
            'name': 'Dortíky s ganache ve tvaru chmelových šišek',
            'price': '209,-',
            'allergens': ['1', '3', '7', '8'],
            'description': 've tvaru chmelových šišek z čokolády Valrhona Dulcey, čokoládová hlína a višňová omáčka',
        },
        'en': {
            'name': 'Ganache Cakes',
            'price': '209,-',
            'allergens': ['1', '3', '7', '8'],
            'description': 'in the shape of hop cones made from Valrhona Dulcey chocolate, chocolate soil, and sour cherry sauce',
        }
    },
    'karamelovy-trhanec': {
        'cz': {
            'name': 'Karamelový trhanec',
            'price': '169,-',
            'allergens': ['1', '3', '7'],
            'description': 's pečenými švestkami, zmrzlina z vaječného likéru',
        },
        'en': {
            'name': 'Caramel shred pancake',
            'price': '169,-',
            'allergens': ['1', '3', '7'],
            'description': 'with roasted plums, eggnog ice cream',
        }
    },
    'pivni-zmrzlina': {
        'cz': {
            'name': 'Naše pivní zmrzlina',
            'price': '139,-',
            'allergens': ['1', '3', '7'],
            'description': 'se sladovou žmolenkou, šlehačka',
        },
        'en': {
            'name': 'Beer ice cream',
            'price': '139,-',
            'allergens': ['1', '3', '7'],
            'description': 'with malt crumble, whipped cream',
        }
    }
}

# Update categories
CATEGORY_NAMES = {
    'predkrmy': {
        'cz': {'name': 'předkrmy a malá jídla k pivu', 'badge': 'Předkrmy'},
        'en': {'name': 'appetizers and small dishes with beer', 'badge': 'Appetizers'}
    },
    'chutovky': {
        'cz': {'name': 'chuťovka', 'badge': 'Chuťovka'},
        'en': {'name': 'bar snacks', 'badge': 'Bar Snacks'}
    },
    'polevky': {
        'cz': {'name': 'polévky', 'badge': 'Polévky'},
        'en': {'name': 'soups', 'badge': 'Soups'}
    },
    'salaty': {
        'cz': {'name': 'saláty', 'badge': 'Saláty'},
        'en': {'name': 'salad', 'badge': 'Salad'}
    },
    'sporak': {
        'cz': {'name': 'ze sporáku a trouby', 'badge': 'Sporák & Trouba'},
        'en': {'name': 'from the stove and oven', 'badge': 'Stove & Oven'}
    },
    'gril': {
        'cz': {'name': 'z grilu a pece na dřevo', 'badge': 'Gril & Pec'},
        'en': {'name': 'from the grill and wood-fired oven', 'badge': 'Grill & Wood Oven'}
    },
    'teple-omacky': {
        'cz': {'name': 'teplé omáčky', 'badge': 'Teplé omáčky'},
        'en': {'name': 'hot sauces', 'badge': 'Hot Sauces'}
    },
    'studene-omacky': {
        'cz': {'name': 'studené omáčky', 'badge': 'Studené omáčky'},
        'en': {'name': 'cold sauces', 'badge': 'Cold Sauces'}
    },
    'prilohy': {
        'cz': {'name': 'přílohy', 'badge': 'Přílohy'},
        'en': {'name': 'Sides', 'badge': 'Sides'}
    },
    'dezerty': {
        'cz': {'name': 'dezerty', 'badge': 'Dezerty'},
        'en': {'name': 'Desserts', 'badge': 'Desserts'}
    },
    'pivo-na-cepu': {
        'cz': {'name': 'pivo na čepu', 'badge': 'Pivo na čepu'},
        'en': {'name': 'beer on tap', 'badge': 'Beer on Tap'}
    },
    'kombucha': {
        'cz': {'name': 'cidery', 'badge': 'Cidery'},
        'en': {'name': 'ciders', 'badge': 'Ciders'}
    },
    'vody-a-mineralni-vody': {
        'cz': {'name': 'vody a minerální vody', 'badge': 'Vody'},
        'en': {'name': 'waters and mineral waters', 'badge': 'Waters'}
    },
    'nase-domaci-limonady': {
        'cz': {'name': 'naše domácí limonády', 'badge': 'Domácí limonády'},
        'en': {'name': 'our homemade lemonades', 'badge': 'Homemade Lemonades'}
    },
    'lahvove-limonady': {
        'cz': {'name': 'lahvové limonády', 'badge': 'Lahvové nápoje'},
        'en': {'name': 'bottled lemonades', 'badge': 'Bottled Lemonades'}
    },
    'kava-caj-a-horke-napoje': {
        'cz': {'name': 'káva, čaj a horké nápoje', 'badge': 'Káva & Čaj'},
        'en': {'name': 'coffee, tea and hot drinks', 'badge': 'Coffee & Tea'}
    },
    'vina-po-skle': {
        'cz': {'name': 'vína po skle', 'badge': 'Vína po skle'},
        'en': {'name': 'wines by the glass', 'badge': 'By the Glass'}
    },
    'bublinky': {
        'cz': {'name': 'bubliny', 'badge': 'Bubliny'},
        'en': {'name': 'Bubbles', 'badge': 'Bubbles'}
    },
    'bila-vina': {
        'cz': {'name': 'bílá vína', 'badge': 'Bílá vína'},
        'en': {'name': 'white wines', 'badge': 'White Wines'}
    },
    'ruzova-vina': {
        'cz': {'name': 'růžová vína', 'badge': 'Růžová vína'},
        'en': {'name': 'rosé wines', 'badge': 'Rosé Wines'}
    },
    'cervena-vina': {
        'cz': {'name': 'červená vína', 'badge': 'Červená vína'},
        'en': {'name': 'red wines', 'badge': 'Red Wines'}
    },
    'aperitivy': {
        'cz': {'name': 'aperitivy', 'badge': 'Aperitivy'},
        'en': {'name': 'aperitifs', 'badge': 'Aperitifs'}
    },
    'nealkoholicke-aperitivy-a-koktejly': {
        'cz': {'name': 'nealko aperitivy a koktejly', 'badge': 'Nealko'},
        'en': {'name': 'non-alcoholic aperitifs and cocktails', 'badge': 'Non-Alcoholic'}
    },
    'klasicke-koktejly': {
        'cz': {'name': 'klasické koktejly', 'badge': 'Klasické koktejly'},
        'en': {'name': 'classic cocktails', 'badge': 'Classic Cocktails'}
    },
    'koktejly-fuze': {
        'cz': {'name': 'koktejly fuze', 'badge': 'FUZE koktejly'},
        'en': {'name': 'fuze cocktails', 'badge': 'FUZE Cocktails'}
    },
    'gin-a-tonic': {
        'cz': {'name': 'gin&tonic', 'badge': 'Gin & Tonic'},
        'en': {'name': 'gin&tonic', 'badge': 'Gin & Tonic'}
    },
    'ovocne-destilaty': {
        'cz': {'name': 'ovocné destiláty 0,03L', 'badge': 'Ovocné destiláty'},
        'en': {'name': 'fruit brandies 0.03L', 'badge': 'Fruit Brandies'}
    },
    'vodky': {
        'cz': {'name': 'vodky 0,03L', 'badge': 'Vodka'},
        'en': {'name': 'vodka 0.03L', 'badge': 'Vodka'}
    },
    'rumy': {
        'cz': {'name': 'rumy 0,03L', 'badge': 'Rumy'},
        'en': {'name': 'rums 0,03L', 'badge': 'Rums'}
    },
    'tequily': {
        'cz': {'name': 'tequily 0,03L', 'badge': 'Tequily'},
        'en': {'name': 'tequilas 0,03L', 'badge': 'Tequilas'}
    },
    'whisky-whiskey-bourbon': {
        'cz': {'name': 'whisky, whiskey, bourbon 0,03L', 'badge': 'Whisky & Bourbon'},
        'en': {'name': 'whisky, whiskey, bourbon 0,03L', 'badge': 'Whisky & Bourbon'}
    },
    'brandy-a-cognac': {
        'cz': {'name': 'brandy & cognac 0,03L', 'badge': 'Brandy & Koňak'},
        'en': {'name': 'brandy and cognac 0,03L', 'badge': 'Brandy & Cognac'}
    },
    'palenky-a-likery': {
        'cz': {'name': 'pálenky & likéry 0,03L', 'badge': 'Pálenky & Likéry'},
        'en': {'name': 'spirits & liqueurs 0,03L', 'badge': 'Spirits & Liqueurs'}
    }
}

for c_cz, c_en in zip(cats_cz, cats_en):
    cid = c_cz['id']
    if cid in CATEGORY_NAMES:
        c_cz['name'] = CATEGORY_NAMES[cid]['cz']['name']
        if 'badge' in CATEGORY_NAMES[cid]['cz']:
            c_cz['badge'] = CATEGORY_NAMES[cid]['cz']['badge']
        c_en['name'] = CATEGORY_NAMES[cid]['en']['name']
        if 'badge' in CATEGORY_NAMES[cid]['en']:
            c_en['badge'] = CATEGORY_NAMES[cid]['en']['badge']

    for it_cz, it_en in zip(c_cz['items'], c_en['items']):
        iid = it_cz['id']
        if iid in UPDATES:
            u_cz = UPDATES[iid]['cz']
            u_en = UPDATES[iid]['en']
            for k, v in u_cz.items():
                it_cz[k] = v
            for k, v in u_en.items():
                it_en[k] = v

print('Categories & items updated in memory.')

# Save back to menuData.ts and menuDataEn.ts
with open('src/data/menuData.ts', 'w', encoding='utf-8') as f:
    f.write(f'''export interface Question {{
  id: string;
  question: string;
  correctAnswer: string;
  distractors: [string, string];
  explanation: string;
}}

export interface MenuItem {{
  id: string;
  name: string;
  weight?: string;
  price?: string;
  allergens?: string[];
  description: string;
  notes?: string;
  questions: Question[];
}}

export interface MenuCategory {{
  id: string;
  name: string;
  badge?: string;
  description: string;
  iconName: string;
  items: MenuItem[];
}}

export const MENU_CATEGORIES: MenuCategory[] = {json.dumps(cats_cz, ensure_ascii=False, indent=2)};

export const TOTAL_ITEMS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
export const TOTAL_QUESTIONS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.reduce((qAcc, it) => qAcc + it.questions.length, 0), 0);
''')

with open('src/data/menuDataEn.ts', 'w', encoding='utf-8') as f:
    f.write(f'''import {{ MenuCategory }} from './menuData';

export const MENU_CATEGORIES_EN: MenuCategory[] = {json.dumps(cats_en, ensure_ascii=False, indent=2)};
''')

print('Successfully written updated menuData.ts and menuDataEn.ts')
