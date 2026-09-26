import fs from 'fs';
import path from 'path';
import { MENU_CATEGORIES, MenuCategory, MenuItem, Question } from '../src/data/menuData';
import { MENU_CATEGORIES_EN } from '../src/data/menuDataEn';
import { ALLERGENS_CZ, ALLERGENS_EN } from './build_full_menu_granular';

// 1. EXACT CATEGORY METADATA ACCORDING TO USER'S SPECIFICATION
interface CategoryMeta {
  nameCz: string;
  badgeCz: string;
  descCz: string;
  nameEn: string;
  badgeEn: string;
  descEn: string;
  iconName: string;
}

const CATEGORY_METAS: Record<string, CategoryMeta> = {
  'predkrmy': {
    nameCz: 'Předkrmy a malá jídla',
    badgeCz: 'Předkrmy a malá jídla',
    descCz: 'Autorské předkrmy s důrazem na vyzrálé suroviny, lokální řemeslo a párování s pivem',
    nameEn: 'Appetizers and small dishes',
    badgeEn: 'Appetizers & small dishes',
    descEn: 'Signature starters paired perfectly with beer',
    iconName: 'Utensils'
  },
  'chutovky': {
    nameCz: 'Chuťovka',
    badgeCz: 'Chuťovka',
    descCz: 'Drobné delikatesy a slané pochoutky ideální ke sklence piva či vína',
    nameEn: 'Bar snacks',
    badgeEn: 'Bar Snacks',
    descEn: 'Small bites and savory snacks to accompany drinks',
    iconName: 'Sparkles'
  },
  'polevky': {
    nameCz: 'Polévky',
    badgeCz: 'Polévky',
    descCz: 'Poctivé horké vývary a krémy z nejlepších surovin',
    nameEn: 'Soups',
    badgeEn: 'Soups',
    descEn: 'Hearty broths and creamy soups made with premium ingredients',
    iconName: 'Soup'
  },
  'salaty': {
    nameCz: 'Saláty',
    badgeCz: 'Saláty',
    descCz: 'Svěží zeleninové saláty s vyladěnou zálivkou',
    nameEn: 'Salads',
    badgeEn: 'Salads',
    descEn: 'Crisp salads with balanced dressings',
    iconName: 'Salad'
  },
  'sporak': {
    nameCz: 'Ze sporáku a trouby',
    badgeCz: 'Ze sporáku a trouby',
    descCz: 'Tradiční i moderní hlavní chody pomalu tažené a pečené',
    nameEn: 'From the stove and oven',
    badgeEn: 'Stove & oven',
    descEn: 'Slow-cooked classics and oven-baked main courses',
    iconName: 'CookingPot'
  },
  'gril': {
    nameCz: 'Z grilu a pece na dřevo',
    badgeCz: 'Z grilu a pece na dřevo',
    descCz: 'Šťavnaté steaky, burgery a speciality pečené na dřevě',
    nameEn: 'From the grill and wood-fired oven',
    badgeEn: 'Grill & wood oven',
    descEn: 'Juicy steaks, burgers, and wood-fired specialties',
    iconName: 'FlameKindling'
  },
  'teple-omacky': {
    nameCz: 'Teplé omáčky',
    badgeCz: 'Teplé omáčky',
    descCz: 'Teplé kulinářské redukce a emulze k masům a přílohám',
    nameEn: 'Hot sauces',
    badgeEn: 'Hot sauces',
    descEn: 'Warm culinary reductions and emulsions',
    iconName: 'Droplet'
  },
  'studene-omacky': {
    nameCz: 'Studené omáčky',
    badgeCz: 'Studené omáčky',
    descCz: 'Domácí majonézy, salsy a studené omáčky',
    nameEn: 'Cold sauces',
    badgeEn: 'Cold sauces',
    descEn: 'Homemade mayonnaises, salsas, and cold sauces',
    iconName: 'Droplet'
  },
  'prilohy': {
    nameCz: 'Přílohy',
    badgeCz: 'Přílohy',
    descCz: 'Čerstvé bramborové přílohy, briošky a zelenina',
    nameEn: 'Sides',
    badgeEn: 'Sides',
    descEn: 'Fresh potato sides, brioches, and vegetables',
    iconName: 'Wheat'
  },
  'dezerty': {
    nameCz: 'Dezerty',
    badgeCz: 'Dezerty',
    descCz: 'Řemeslné sladké tečky a autorská pivní zmrzlina',
    nameEn: 'Desserts',
    badgeEn: 'Desserts',
    descEn: 'Artisanal desserts and house beer ice cream',
    iconName: 'Cake'
  },
  'pro-deti': {
    nameCz: 'Pro děti',
    badgeCz: 'Pro děti',
    descCz: 'Vyvážená a oblíbená jídla připravená speciálně pro malé návštěvníky',
    nameEn: 'For children',
    badgeEn: 'For children',
    descEn: 'Specially prepared dishes loved by our youngest guests',
    iconName: 'Utensils'
  },
  'pivo-na-cepu': {
    nameCz: 'pivo na čepu',
    badgeCz: 'Čepované pivo',
    descCz: 'Řemeslná piva z našeho pivovaru FUZE i vybrané speciály čepované na hladinku',
    nameEn: 'beer on tap',
    badgeEn: 'Beer on tap',
    descEn: 'Craft beers from our FUZE brewery and guest specialties poured with fine foam',
    iconName: 'Beer'
  },
  'kombucha': {
    nameCz: 'cidery a kombucha',
    badgeCz: 'Cidery & Kombucha',
    descCz: 'Přírodní fermentované nápoje, slovenské cidery Opre` a řemeslné kombuchy',
    nameEn: 'ciders & kombucha',
    badgeEn: 'Ciders & Kombucha',
    descEn: 'Naturally fermented beverages, Slovak Opre` ciders, and craft kombucha',
    iconName: 'Sparkles'
  },
  'vody-a-mineralni-vody': {
    nameCz: 'vody a minerální vody',
    badgeCz: 'Vody & Minerálky',
    descCz: 'Čistá pramenitá a filtrovaná voda, infuzované osvěžení',
    nameEn: 'waters and mineral waters',
    badgeEn: 'Waters',
    descEn: 'Pure spring, filtered, and naturally infused table waters',
    iconName: 'GlassWater'
  },
  'nase-domaci-limonady': {
    nameCz: 'naše domácí limonády',
    badgeCz: 'Domácí limonády',
    descCz: 'Čerstvě míchané limonády z ovocných pyré, bylin a koření',
    nameEn: 'our homemade lemonades',
    badgeEn: 'Homemade lemonades',
    descEn: 'Freshly stirred lemonades made from real fruit purées, herbs, and spices',
    iconName: 'CupSoda'
  },
  'lahvove-limonady': {
    nameCz: 'lahvové limonády',
    badgeCz: 'Lahvové limonády',
    descCz: 'Výběr prémiových toniků a nealkoholických nápojů',
    nameEn: 'bottled lemonades',
    badgeEn: 'Bottled lemonades',
    descEn: 'Selection of premium mixers, tonics, and soft drinks',
    iconName: 'CupSoda'
  },
  'kava-caj-a-horke-napoje': {
    nameCz: 'káva, čaj a horké nápoje',
    badgeCz: 'Káva & Čaj',
    descCz: 'Čerstvě pražená výběrová káva a sypané čaje',
    nameEn: 'coffee, tea and hot drinks',
    badgeEn: 'Coffee & Tea',
    descEn: 'Freshly roasted specialty coffee and whole-leaf premium teas',
    iconName: 'Coffee'
  },
  'vina-po-skle': {
    nameCz: 'vína po skle',
    badgeCz: 'Vína po skle',
    descCz: 'Výběr moravských a evropských vín rozlévaných po skleničce',
    nameEn: 'wines by the glass',
    badgeEn: 'Wines by the glass',
    descEn: 'Handpicked Moravian and European wines served by the glass',
    iconName: 'Wine'
  },
  'bublinky': {
    nameCz: 'bubliny',
    badgeCz: 'Bubliny',
    descCz: 'Šumivá vína, moravský sekt a šampaňské pro slavnostní chvíle',
    nameEn: 'Bubbles',
    badgeEn: 'Sparkling wines',
    descEn: 'Sparkling wines, Moravian Crémant, and Champagne for special moments',
    iconName: 'Sparkles'
  },
  'bila-vina': {
    nameCz: 'bílá vína',
    badgeCz: 'Bílá vína',
    descCz: 'Svěží i plná bílá vína z předních moravských a evropských vinařství',
    nameEn: 'white wines',
    badgeEn: 'White wines',
    descEn: 'Crisp and full-bodied white wines from Moravia and renowned European terroirs',
    iconName: 'Wine'
  },
  'ruzova-vina': {
    nameCz: 'růžová vína',
    badgeCz: 'Růžová vína',
    descCz: 'Ovocná a svěží růžová vína ideální k lehkým pokrmům',
    nameEn: 'rosé wines',
    badgeEn: 'Rosé wines',
    descEn: 'Fruity and fresh rosé wines perfect with light dishes',
    iconName: 'Wine'
  },
  'cervena-vina': {
    nameCz: 'červená vína',
    badgeCz: 'Červená vína',
    descCz: 'Plná a vyzrálá červená vína z Moravy, Francie, Itálie i Nového světa',
    nameEn: 'red wines',
    badgeEn: 'Red wines',
    descEn: 'Bold and elegant red wines from Moravia, France, Italy, and the New World',
    iconName: 'Wine'
  },
  'aperitivy': {
    nameCz: 'aperitivy',
    badgeCz: 'Aperitivy',
    descCz: 'Klasické i moderní spritzy na povzbuzení chuti před jídlem',
    nameEn: 'aperitifs',
    badgeEn: 'Aperitifs',
    descEn: 'Classic and modern spritzes to awaken the palate before dining',
    iconName: 'Martini'
  },
  'nealkoholicke-aperitivy-a-koktejly': {
    nameCz: 'nealko aperitivy a koktejly',
    badgeCz: 'Nealko koktejly',
    descCz: 'Plnohodnotné míchané drinky bez kapky alkoholu',
    nameEn: 'non-alcoholic aperitifs and cocktails',
    badgeEn: 'Mocktails',
    descEn: 'Complex handcrafted mixed drinks without a drop of alcohol',
    iconName: 'Martini'
  },
  'klasicke-koktejly': {
    nameCz: 'klasické koktejly',
    badgeCz: 'Klasické koktejly',
    descCz: 'Světoznámé barmanské ikony namíchané podle původních receptur',
    nameEn: 'classic cocktails',
    badgeEn: 'Classic cocktails',
    descEn: 'World-famous cocktail icons crafted according to original golden-age recipes',
    iconName: 'Martini'
  },
  'koktejly-fuze': {
    nameCz: 'koktejly fuze',
    badgeCz: 'FUZE koktejly',
    descCz: 'Autorské signature koktejly vytvořené speciálně pro restaurant FUZE',
    nameEn: 'fuze cocktails',
    badgeEn: 'FUZE cocktails',
    descEn: 'Signature fusion cocktails created exclusively for restaurant FUZE',
    iconName: 'Martini'
  },
  'gin-a-tonic': {
    nameCz: 'gin&tonic',
    badgeCz: 'Gin & Tonic',
    descCz: 'Perfektní kombinace řemeslných ginů s prémiovými toniky a bylinami',
    nameEn: 'gin&tonic',
    badgeEn: 'Gin & Tonic',
    descEn: 'Perfect pairings of artisanal gins with premium tonics and botanicals',
    iconName: 'GlassWater'
  },
  'ovocne-destilaty': {
    nameCz: 'ovocné destiláty 0,03L',
    badgeCz: 'Ovocné destiláty',
    descCz: 'Prémiové pálenky z vyzrálého českého ovoce od mistrů destilatérů',
    nameEn: 'fruit brandies 0.03L',
    badgeEn: 'Fruit brandies',
    descEn: 'Premium eau-de-vie brandies crafted from ripe local orchard fruit',
    iconName: 'Flame'
  },
  'vodky': {
    nameCz: 'vodky 0,03L',
    badgeCz: 'Vodky',
    descCz: 'Prvotřídní obilné a řemeslné vodky nejvyšší čistoty',
    nameEn: 'vodka 0.03L',
    badgeEn: 'Vodka',
    descEn: 'First-rate grain and craft vodkas of exceptional purity',
    iconName: 'Flame'
  },
  'rumy': {
    nameCz: 'rumy 0,03L',
    badgeCz: 'Rumy',
    descCz: 'Tradiční karibské rumy zrající v dubových sudech po bourbonu',
    nameEn: 'rums 0,03L',
    badgeEn: 'Rums',
    descEn: 'Traditional Caribbean rums aged patiently in charred oak bourbon barrels',
    iconName: 'Flame'
  },
  'tequily': {
    nameCz: 'tequily 0,03L',
    badgeCz: 'Tequily',
    descCz: '100% destiláty z modré agáve z mexického Jalisca a řemeslné mezcaly',
    nameEn: 'tequilas 0,03L',
    badgeEn: 'Tequilas',
    descEn: '100% blue agave tequilas from Jalisco and artisan smoky mezcals',
    iconName: 'Flame'
  },
  'whisky-whiskey-bourbon': {
    nameCz: 'whisky, whiskey, bourbon 0,03L',
    badgeCz: 'Whisky & Bourbon',
    descCz: 'Skotské single malts, jemné irské whiskey i plné americké bourbony',
    nameEn: 'whisky, whiskey, bourbon 0,03L',
    badgeEn: 'Whisky & Bourbon',
    descEn: 'Scotch single malts, smooth Irish whiskeys, and rich Kentucky bourbons',
    iconName: 'Flame'
  },
  'brandy-a-cognac': {
    nameCz: 'brandy & cognac 0,03L',
    badgeCz: 'Brandy & Cognac',
    descCz: 'Ušlechtilé vinné destiláty a francouzské koňaky Fine Champagne',
    nameEn: 'brandy and cognac 0,03L',
    badgeEn: 'Brandy & Cognac',
    descEn: 'Noble aged wine spirits and prestigious French Fine Champagne cognacs',
    iconName: 'Flame'
  },
  'palenky-a-likery': {
    nameCz: 'pálenky & likéry 0,03L',
    badgeCz: 'Pálenky & Likéry',
    descCz: 'Naše Fuzovice z pivní mladiny, tradiční bylinné a ovocné likéry',
    nameEn: 'spirits & liqueurs 0,03L',
    badgeEn: 'Spirits & Liqueurs',
    descEn: 'Our signature Fuzovice beer eau-de-vie, herbal infusions, and traditional liqueurs',
    iconName: 'Flame'
  },
  'alergeny': {
    nameCz: 'Alergeny (1–14)',
    badgeCz: 'Alergeny',
    descCz: 'Zákonný přehled 14 hlavních potravinových alergenů podle nařízení EU',
    nameEn: 'Allergens (1–14)',
    badgeEn: 'Allergens',
    descEn: 'Statutory list of 14 key food allergens defined by EU regulation',
    iconName: 'ShieldAlert'
  }
};

// 2. EXACT ITEM UPDATES FROM THE USER'S PROVIDED MENU TEXT
interface ItemUpdate {
  nameCz?: string;
  nameEn?: string;
  weight?: string;
  priceCz?: string;
  priceEn?: string;
  allergens?: string[];
  notes?: string;
  descCz: string;
  descEn: string;
}

const EXACT_ITEM_UPDATES: Record<string, ItemUpdate> = {
  // --- PŘEDKRMY A MALÁ JÍDLA ---
  'tatarak': {
    nameCz: 'Krájený hovězí tatarák',
    nameEn: 'Sliced beef tartare',
    weight: '90g',
    priceCz: '239 Kč',
    priceEn: '239 CZK',
    allergens: ['1', '3', '7'],
    descCz: 'z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka a konfitovaný česnek, bramborová sláma',
    descEn: 'from tip of the sirloin, tiny pickles, marinated shallots, parsley leaf, sourdough toasted on beef lard, confit garlic, potato straw'
  },
  'klobasa-smrze': {
    nameCz: 'Naše telecí klobása se smrži',
    nameEn: 'Our veal sausage with morels',
    weight: '100g',
    priceCz: '219 Kč',
    priceEn: '219 CZK',
    allergens: ['1', '3', '7', '8', '10'],
    descCz: 'kaštany a sušenými švestkami, lanýžová omáčka, pivní sušenka',
    descEn: 'chestnuts and dried plums, truffle sauce, beer crumble'
  },
  'foie-gras': {
    nameCz: 'Paštika z kachních foie gras',
    nameEn: 'Foie gras pâté',
    weight: '100g',
    priceCz: '315 Kč',
    priceEn: '315 CZK',
    allergens: ['1', '3', '7'],
    descCz: 'v želé z piva Kasteel Rouge, višňová omáčka, opečená máslová brioška',
    descEn: 'in Kasteel Rouge beer jelly, cherry sauce, toasted butter brioche'
  },
  'veprovy-bok-platky': {
    nameCz: 'Tenké plátky vepřového boku',
    nameEn: 'Thin slices of pork belly',
    weight: '100g',
    priceCz: '169 Kč',
    priceEn: '169 CZK',
    allergens: ['1', '4', '10'],
    descCz: 'zauzeného chmelem, křupavé vepřové krekry, pyré z pečených jablek a hořčice, smažený hrách',
    descEn: 'hop-smoked, crispy pork cracklings, over roasted apples and horseradish, fried peas'
  },
  'kureci-krokety': {
    nameCz: 'Smažené kuřecí krokety',
    nameEn: 'Fried chicken croquettes',
    weight: '100g',
    priceCz: '175 Kč',
    priceEn: '175 CZK',
    allergens: ['1', '3', '7', '14'],
    descCz: 's čedarem, naše salsa verde, libečková majonéza',
    descEn: 'with cheddar, our salsa verde, lovage mayonnaise'
  },
  'olomoucke-tvaruzky': {
    nameCz: 'Sekané olomoucké tvarůžky',
    nameEn: 'Olomouc curd cheese spread',
    priceCz: '199 Kč',
    priceEn: '199 CZK',
    allergens: ['1', '3', '7', '10'],
    descCz: 's cibulkou, majonézou s paprikou a hořčičným semínkem na opečeném kváskovém chlebu, křen, kyselá zeleninka',
    descEn: 'with onion and paprika-mustard seed mayonnaise on toasted sourdough, horseradish and pickled vegetables'
  },

  // --- CHUŤOVKA ---
  'lanyzovy-popcorn': {
    nameCz: 'Lanýžový popcorn',
    nameEn: 'Truffle popcorn',
    priceCz: '139 Kč',
    priceEn: '139 CZK',
    allergens: ['7'],
    descCz: 's parmazánem',
    descEn: 'with parmesan'
  },
  'domaci-bramburky': {
    nameCz: 'Naše domácí brambůrky',
    nameEn: 'Homemade potatoes',
    priceCz: '125 Kč',
    priceEn: '125 CZK',
    allergens: ['7'],
    descCz: 'pikantní zauzená majonéza',
    descEn: 'spicy smoked mayonnaise'
  },

  // --- POLÉVKY ---
  'hovezi-consomme': {
    nameCz: 'Hovězí consommé',
    nameEn: 'Beef consommé',
    priceCz: '109 Kč',
    priceEn: '109 CZK',
    allergens: ['9'],
    descCz: 'jemný játrový knedlíček, zelenina',
    descEn: 'delicate liver dumpling, vegetables'
  },
  'kremova-humri': {
    nameCz: 'Krémová humří polévka',
    nameEn: 'Creamy lobster soup',
    priceCz: '269 Kč',
    priceEn: '269 CZK',
    allergens: ['1', '2', '3', '7', '9'],
    descCz: 's klobáskou a zeleninou, zapečená listovým těstem',
    descEn: 'with saffron and brandy, topped with puff pastry'
  },

  // --- SALÁTY ---
  'caesar-salat': {
    nameCz: 'Caesar salát',
    nameEn: 'Caesar salad',
    priceCz: '289 Kč',
    priceEn: '289 CZK',
    allergens: ['1', '3', '4', '7', '10'],
    descCz: 's trhaným kuřetem pečeným v peci, opečenou slaninou, parmezánem a krutony',
    descEn: 'with oven-roasted pulled chicken, crispy bacon, parmesan and croutons'
  },
  'waldorf-salat': {
    nameCz: 'Waldorf salát',
    nameEn: 'Waldorf salad',
    priceCz: '245 Kč',
    priceEn: '245 CZK',
    allergens: ['8', '9', '10'],
    descCz: 'jablka, řapíkatý celer, hrozny, nakládané vlašské ořechy, majonézový dresing',
    descEn: 'apples, celery, grapes, pickled walnuts, walnut mayonnaise dressing'
  },

  // --- ZE SPORÁKU A TROUBY ---
  'pecene-koleno': {
    nameCz: 'Pečené vepřové koleno',
    nameEn: 'Roasted Pork Knuckle',
    weight: '1ks',
    priceCz: '459 Kč',
    priceEn: '459 CZK',
    allergens: ['1', '10'],
    notes: 'v nabídce každý den vždy do vyprodání',
    descCz: 'hořčice, strouhaný křen, zelný salát s křenem',
    descEn: 'mustard, grated horseradish, cabbage salad with horseradish'
  },
  'veprovy-rizek-duroc': {
    nameCz: 'Vysoký vepřový řízek',
    nameEn: 'Thick-cut pork schnitzel',
    weight: '200g',
    priceCz: '309 Kč',
    priceEn: '309 CZK',
    allergens: ['1', '3', '4', '7', '10'],
    descCz: 'z plemene Duroc, omáčka fines herbes, bramborová kaše a bramborové křupky',
    descEn: 'from Duroc pork, fines herbes sauce, potato mash, and crispy potato crisps'
  },
  'veprova-zebra': {
    nameCz: 'Vepřová žebra',
    nameEn: 'Pork ribs',
    weight: '500g',
    priceCz: '379 Kč',
    priceEn: '379 CZK',
    allergens: ['1', '3', '6', '7', '10'],
    descCz: 'marinovaná a pečená s naším pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, náš zelný salát s křenem, opečená česneková brioška',
    descEn: 'marinated and slow-roasted in our beer, candied bacon, pearl onions, apple BBQ glaze, our cabbage salad with horseradish, toasted garlic brioche'
  },
  'hovezi-koprovka': {
    nameCz: 'Tažené hovězí maso s koprovou omáčkou',
    nameEn: 'Braised beef with dill sauce',
    weight: '200g',
    priceCz: '345 Kč',
    priceEn: '345 CZK',
    allergens: ['1', '3', '7'],
    descCz: 'vejce, rohlíčkové brambory, koprový olej',
    descEn: 'served with egg, baby potatoes and dill oil'
  },
  'testoviny-kureci': {
    nameCz: 'Těstoviny plněné jemnou kuřecí směsí',
    nameEn: 'Pasta filled with delicate chicken mixture',
    priceCz: '299 Kč',
    priceEn: '299 CZK',
    allergens: ['1', '3', '7'],
    descCz: 'zapečené v hříbkové omáčce, grilovaná hlíva ústřičná, bylinkový olej',
    descEn: 'baked in porcini sauce, grilled oyster mushrooms, herb oil'
  },
  'shrimp-roll': {
    nameCz: 'Shrimp roll',
    nameEn: 'Shrimp roll 12 pcs Argentine red shrimp',
    priceCz: '666 Kč',
    priceEn: '666 CZK',
    allergens: ['1', '2', '3', '5', '7', '9', '10'],
    descCz: '12ks argentinských červených krevet v máslové briošce, koktejlová omáčka s koňakem, salátek, naše hranolky, choron omáčka',
    descEn: 'in a butter brioche, cocktail sauce with cognac, salad greens, our fries, Choron sauce'
  },
  'vykosteny-pstruh': {
    nameCz: 'Filátka vykostěného pstruha',
    nameEn: 'Fillet of deboned rainbow trout',
    weight: '180g',
    priceCz: '399 Kč',
    priceEn: '399 CZK',
    allergens: ['3', '4', '7'],
    descCz: 'opečená na másle, choron omáčka, pečená rajčátka, bylinkový salát, pečená zimní zelenina',
    descEn: 'pan-seared in butter, choron sauce, roasted tomatoes, herb salad, and roasted winter vegetables'
  },
  'svickova-wellington': {
    nameCz: 'Svíčková Wellington',
    nameEn: 'BeefWellington',
    weight: '200g',
    priceCz: '675 Kč',
    priceEn: '675 CZK',
    allergens: ['1', '3', '7', '10'],
    descCz: 'pečená dorůžova se směsí duxelles ochucené lanýži, koňaková omáčka, zauzené rohlíčkové brambory',
    descEn: 'tenderloin wrapped in mushroom and duck liver duxelles, seasoned with truffle, veal demi-glace, smoked potatoes'
  },
  'burger-foie-gras': {
    nameCz: 'Hovězí burger',
    nameEn: 'Beef burger',
    weight: '200g',
    priceCz: '449 Kč',
    priceEn: '449 CZK',
    allergens: ['1', '3', '7'],
    descCz: 's uzenou nivou a kachními foie gras, majonéza z pečené cibule, bramborová sláma, malé domácí hranolky',
    descEn: 'with smoked blue cheese and duck foie gras, roasted onion mayonnaise, potato straw and small homemade fries'
  },
  'thors-hammer': {
    nameCz: 'Thor`s Hammer hovězí koleno',
    nameEn: 'Thor`s Hammer beef knuckle',
    weight: '700g',
    priceCz: '1490 Kč',
    priceEn: '1490 CZK',
    allergens: ['1', '11'],
    descCz: 'tažené v naší hliněné peci, omáčka z Kasteel Rouge, pálené šalotky, opečená česneková brioška, naše salsa verde, zauzené rohlíčkové brambory, náš zelný salát s křenem',
    descEn: 'slow-braised in our tandoori, Kasteel Rouge sauce, charred shallots, toasted garlic brioche, our salsa verde, smoked potatoes, and our cabbage salad with horseradish'
  },

  // --- Z GRILU A PECE NA DŘEVO ---
  'us-prime-steaky': {
    nameCz: 'US Prime hovězí steaky (Květová špička & Vysoký roštěnec)',
    nameEn: 'US Prime beef steaks (Sirloin & Ribeye)',
    weight: '250g',
    priceCz: '519 / 985 Kč',
    priceEn: '519 / 985 CZK',
    descCz: 'US Prime hovězí květová špička 250g (519 Kč) nebo US Prime vysoký roštěnec 250g (985 Kč), opečené papričky Padrón',
    descEn: 'US Prime beef sirloin 250g (519 CZK) or US Prime beef ribeye 250g (985 CZK), blistered Padron peppers'
  },
  'us-prime-burger': {
    nameCz: 'US Prime hovězí burger',
    nameEn: 'US Prime beef burger',
    weight: '200g',
    priceCz: '369 Kč',
    priceEn: '369 CZK',
    allergens: ['1', '3', '7', '10'],
    descCz: 'opečená slanina, čedar, cibulová marmeláda a pikantní majonéza',
    descEn: 'grilled bacon, cheddar, onion marmalade, spicy mayonnaise'
  },
  'grilovany-bucek-yuzu': {
    nameCz: 'Grilovaný vepřový bůček',
    nameEn: 'Grilled pork belly',
    weight: '300g',
    priceCz: '299 Kč',
    priceEn: '299 CZK',
    allergens: ['2', '4', '6'],
    descCz: 'karamelizovaná yuzu omáčka, grilovaná jarní cibulka, chimmichurri omáčka',
    descEn: 'caramelized yuzu sauce, grilled spring onion, chimichurri sauce'
  },
  'nase-pastrami': {
    nameCz: 'Naše pastrami',
    nameEn: 'Our pastrami',
    weight: '200g',
    priceCz: '455 Kč',
    priceEn: '455 CZK',
    allergens: ['1', '3', '7', '10'],
    descCz: 'z US Prime hovězího žebra pečeného v hliněné peci, sýr raclette a zelný salát s křenem v opečeném kváskovém chlebu, nakládaná zelenina',
    descEn: 'from US Prime beef ribs baked in clay oven, raclette cheese and cabbage salad with horseradish in toasted sourdough bread, pickled vegetables'
  },
  'pul-kure-pecene': {
    nameCz: '½ Kuře pečené v naší hliněné peci',
    nameEn: '½ Roasted chicken in our tandoori',
    priceCz: '279 Kč',
    priceEn: '279 CZK',
    descCz: 'jako BBQ potřené pikantní jablečnou omáčkou, křupavá cibulka a bylinkové máslo 1/7, jako TRUFFLE přelité lanýžovým máslem, bramborové křupky, pažitka 7, jako CAESAR potřené omáčkou z ančoviček, parmezánu a hořčice, smažené kapary 4/7/10',
    descEn: 'BBQ version with spicy apple sauce, crispy onions and herb butter 1/7, TRUFFLE version with truffle butter, potato crisps and chives 7, CAESAR version with anchovy, parmesan and mustard sauce, fried capers 4/7/10'
  },
  'pecene-kure-pec': {
    nameCz: '½ Kuře pečené v naší hliněné peci',
    nameEn: '½ Roasted chicken in our tandoori',
    priceCz: '279 Kč',
    priceEn: '279 CZK',
    descCz: 'jako BBQ potřené pikantní jablečnou omáčkou, křupavá cibulka a bylinkové máslo 1/7, jako TRUFFLE přelité lanýžovým máslem, bramborové křupky, pažitka 7, jako CAESAR potřené omáčkou z ančoviček, parmezánu a hořčice, smažené kapary 4/7/10',
    descEn: 'BBQ version with spicy apple sauce, crispy onions and herb butter 1/7, TRUFFLE version with truffle butter, potato crisps and chives 7, CAESAR version with anchovy, parmesan and mustard sauce, fried capers 4/7/10'
  },

  // --- TEPLÉ OMÁČKY ---
  'omacka-konakova': {
    nameCz: 'Koňaková',
    nameEn: 'Cognac sauce',
    priceCz: '69 Kč',
    priceEn: '69 CZK',
    allergens: ['7', '9', '10'],
    descCz: 'teplá koňaková omáčka',
    descEn: 'warm cognac sauce'
  },
  'omacka-choron': {
    nameCz: 'Choron',
    nameEn: 'Choron sauce',
    priceCz: '69 Kč',
    priceEn: '69 CZK',
    allergens: ['3', '10'],
    descCz: 'teplá rajčatová omáčka choron',
    descEn: 'warm choron sauce'
  },
  'omacka-fines-herbes': {
    nameCz: 'Naše fines herbes',
    nameEn: 'Our fines herbes sauce',
    priceCz: '69 Kč',
    priceEn: '69 CZK',
    allergens: ['4', '9', '10'],
    descCz: 'teplá bylinková omáčka fines herbes',
    descEn: 'warm fines herbes sauce'
  },
  'omacka-lanyzova': {
    nameCz: 'Lanýžová',
    nameEn: 'Truffle Sauce',
    priceCz: '79 Kč',
    priceEn: '79 CZK',
    allergens: ['7', '10'],
    descCz: 'teplá krémová lanýžová omáčka',
    descEn: 'warm creamy truffle sauce'
  },

  // --- STUDENÉ OMÁČKY ---
  'omacka-pikantni-majo': {
    nameCz: 'Pikantní zauzená majonéza',
    nameEn: 'Spicy smoked mayonnaise',
    priceCz: '59 Kč',
    priceEn: '59 CZK',
    allergens: ['3', '7'],
    descCz: 'pikantní zauzená majonéza',
    descEn: 'spicy smoked mayonnaise'
  },
  'omacka-salsa-verde': {
    nameCz: 'Naše salsa verde',
    nameEn: 'Our salsa verde',
    priceCz: '59 Kč',
    priceEn: '59 CZK',
    descCz: 'naše bylinková salsa verde',
    descEn: 'our herbal salsa verde'
  },
  'omacka-chimichurri': {
    nameCz: 'Chimmichurri omáčka',
    nameEn: 'Chimichurri sauce',
    priceCz: '65 Kč',
    priceEn: '65 CZK',
    descCz: 'čerstvé bylinky, petrželka a oregano, česnek, chilli, olivový olej',
    descEn: 'fresh herbs, parsley and oregano, garlic, chili, olive oil'
  },
  'omacka-kecup': {
    nameCz: 'Kečup',
    nameEn: 'Ketchup',
    priceCz: '40 Kč',
    priceEn: '40 CZK',
    descCz: 'vyzrálá rajčata, kvasný ocet, směs koření',
    descEn: 'sun-ripened tomatoes, vinegar, spice blend'
  },

  // --- PŘÍLOHY ---
  'nase-hranolky': {
    nameCz: 'Naše hranolky',
    nameEn: 'Our fries',
    priceCz: '89 Kč',
    priceEn: '89 CZK',
    descCz: 'čerstvé brambory, hovězí lůj na smažení, mořská sůl',
    descEn: 'fresh potatoes, beef lard for frying, sea salt'
  },
  'hranolky-red-leicester': {
    nameCz: 'Hranolky',
    nameEn: 'Fries',
    priceCz: '149 Kč',
    priceEn: '149 CZK',
    allergens: ['3', '7'],
    descCz: 's lanýžovou majonézou a sýrem Red Leicester',
    descEn: 'with truffle mayonnaise and Red Leicester cheese'
  },
  'bramborova-kase': {
    nameCz: 'Bramborová kaše',
    nameEn: 'Potato mash',
    priceCz: '89 Kč',
    priceEn: '89 CZK',
    allergens: ['7'],
    descCz: 'máslo, bramborová sláma',
    descEn: 'butter, potato straw'
  },
  'zauzene-rohlicek-brambory': {
    nameCz: 'Zauzené rohlíčkové brambory',
    nameEn: 'Smoked potatoes',
    priceCz: '99 Kč',
    priceEn: '99 CZK',
    allergens: ['7'],
    descCz: 'máslo',
    descEn: 'butter'
  },
  'salat-trhane-listy': {
    nameCz: 'Salát z trhaných salátových listů',
    nameEn: 'Salad of torn lettuce leaves',
    priceCz: '129 Kč',
    priceEn: '129 CZK',
    allergens: ['10'],
    descCz: 'a zeleného rajčete, pivní vinaigrette',
    descEn: 'and green tomato, beer vinaigrette'
  },
  'pecena-zimni-zelenina': {
    nameCz: 'Pečená zimní zelenina',
    nameEn: 'Roasted winter vegetables',
    priceCz: '129 Kč',
    priceEn: '129 CZK',
    allergens: ['9'],
    descCz: 's kardamomem a javorovým sirupem',
    descEn: 'with cardamom and maple syrup'
  },
  'zelny-salat-kren': {
    nameCz: 'Náš zelný salát s křenem',
    nameEn: 'Cabbage salad with horseradish',
    priceCz: '99 Kč',
    priceEn: '99 CZK',
    allergens: ['3', '7', '11'],
    descCz: 'rozinkami, vinným octem a majonézou',
    descEn: 'raisins, wine vinegar, and mayonnaise'
  },
  'cesnekova-brioska': {
    nameCz: 'Opečená česneková brioška',
    nameEn: 'Toasted garlic brioche',
    priceCz: '79 Kč',
    priceEn: '79 CZK',
    allergens: ['1', '3', '7'],
    descCz: 'česnekové máslo, opečená brioška',
    descEn: 'garlic butter, toasted brioche'
  },
  'kvaskovy-chleb': {
    nameCz: 'Kváskový chléb',
    nameEn: 'Sourdough bread',
    priceCz: '45 Kč',
    priceEn: '45 CZK',
    allergens: ['1', '3', '7'],
    descCz: 'tradiční kvásek, drcený kmín',
    descEn: 'traditional sourdough, crushed caraway'
  },

  // --- DEZERTY ---
  'dortik-ganache-sisky': {
    nameCz: 'Dortíky s ganache',
    nameEn: 'Ganache Cakes',
    priceCz: '209 Kč',
    priceEn: '209 CZK',
    allergens: ['1', '3', '7', '8'],
    descCz: 've tvaru chmelových šišek z čokolády Valrhona Dulcey, čokoládová hlína a višňová omáčka',
    descEn: 'in the shape of hop cones made from Valrhona Dulcey chocolate, chocolate soil, and sour cherry sauce'
  },
  'karamelovy-trhanec': {
    nameCz: 'Karamelový trhanec',
    nameEn: 'Caramel shred pancake',
    priceCz: '169 Kč',
    priceEn: '169 CZK',
    allergens: ['1', '3', '7'],
    descCz: 's pečenými švestkami, zmrzlina z vaječného likéru',
    descEn: 'with roasted plums, eggnog liqueur ice cream'
  },
  'pivni-zmrzlina': {
    nameCz: 'Naše pivní zmrzlina',
    nameEn: 'Beer ice cream',
    priceCz: '139 Kč',
    priceEn: '139 CZK',
    allergens: ['1', '3', '7'],
    descCz: 'se sladovou žmolenkou, šlehačka',
    descEn: 'with malt crumble, whipped cream'
  },

  // --- PRO DĚTI ---
  'kureci-rizek': {
    nameCz: 'Kuřecí řízek',
    nameEn: 'Chicken schnitzel',
    weight: '100g',
    priceCz: '125 Kč',
    priceEn: '125 CZK',
    allergens: ['1', '3', '7'],
    descCz: 'bramborová kaše',
    descEn: 'mashed potatoes'
  },
  'cheeseburger-deti': {
    nameCz: 'Cheeseburger',
    nameEn: 'Mini cheeseburger',
    weight: '100g',
    priceCz: '129 Kč',
    priceEn: '129 CZK',
    allergens: ['1', '3', '7', '10'],
    descCz: 's čedarem, salátem, rajčaty a kečupem, domácí hranolky',
    descEn: 'with cheddar, lettuce, tomato and ketchup, fries'
  },
  'krupicova-kase': {
    nameCz: 'Krupicová kaše',
    nameEn: 'Semolina porridge',
    priceCz: '119 Kč',
    priceEn: '119 CZK',
    allergens: ['1', '7'],
    descCz: 'z espumy s kakaem a máslem',
    descEn: 'from foam with cocoa and butter'
  }
};

// 3. Question generation helpers
import {
  formatAnswer,
  parseDescriptionWithMeasure,
  parseDescriptionWithMeasureEn,
  getMeasureDistractors,
  selectIngredientDistractors,
  getAllergenDistractors,
  getIngredientQuestionPromptCz,
  getIngredientQuestionPromptEn
} from './build_full_menu_granular_helpers';

export function runFullMenuFix() {
  console.log('--- EXECUTING COMPLETE MENU FIX FOR CZ AND EN ---');

  const categoryIdsOrder = [
    'predkrmy',
    'chutovky',
    'polevky',
    'salaty',
    'sporak',
    'gril',
    'teple-omacky',
    'studene-omacky',
    'prilohy',
    'dezerty',
    'pro-deti',
    'pivo-na-cepu',
    'kombucha',
    'vody-a-mineralni-vody',
    'nase-domaci-limonady',
    'lahvove-limonady',
    'kava-caj-a-horke-napoje',
    'vina-po-skle',
    'bublinky',
    'bila-vina',
    'ruzova-vina',
    'cervena-vina',
    'aperitivy',
    'nealkoholicke-aperitivy-a-koktejly',
    'klasicke-koktejly',
    'koktejly-fuze',
    'gin-a-tonic',
    'ovocne-destilaty',
    'vodky',
    'rumy',
    'tequily',
    'whisky-whiskey-bourbon',
    'brandy-a-cognac',
    'palenky-a-likery',
    'alergeny'
  ];

  const existingMapCz: Record<string, MenuCategory> = {};
  MENU_CATEGORIES.forEach(c => { existingMapCz[c.id] = c; });

  const existingMapEn: Record<string, MenuCategory> = {};
  MENU_CATEGORIES_EN.forEach(c => { existingMapEn[c.id] = c; });

  // Ensure 'pro-deti' category exists
  if (!existingMapCz['pro-deti']) {
    existingMapCz['pro-deti'] = {
      id: 'pro-deti',
      name: 'Pro děti',
      badge: 'Pro děti',
      description: 'Vyvážená a oblíbená jídla připravená speciálně pro malé návštěvníky',
      iconName: 'Utensils',
      items: [
        {
          id: 'kureci-rizek',
          name: 'Kuřecí řízek',
          weight: '100g',
          price: '125 Kč',
          allergens: ['1', '3', '7'],
          description: 'bramborová kaše',
          questions: []
        },
        {
          id: 'cheeseburger-deti',
          name: 'Cheeseburger',
          weight: '100g',
          price: '129 Kč',
          allergens: ['1', '3', '7', '10'],
          description: 's čedarem, salátem, rajčaty a kečupem, domácí hranolky',
          questions: []
        },
        {
          id: 'krupicova-kase',
          name: 'Krupicová kaše',
          price: '119 Kč',
          allergens: ['1', '7'],
          description: 'z espumy s kakaem a máslem',
          questions: []
        }
      ]
    };
  }

  if (!existingMapEn['pro-deti']) {
    existingMapEn['pro-deti'] = {
      id: 'pro-deti',
      name: 'For children',
      badge: 'For children',
      description: 'Specially prepared dishes loved by our youngest guests',
      iconName: 'Utensils',
      items: [
        {
          id: 'kureci-rizek',
          name: 'Chicken schnitzel',
          weight: '100g',
          price: '125 CZK',
          allergens: ['1', '3', '7'],
          description: 'mashed potatoes',
          questions: []
        },
        {
          id: 'cheeseburger-deti',
          name: 'Mini cheeseburger',
          weight: '100g',
          price: '129 CZK',
          allergens: ['1', '3', '7', '10'],
          description: 'with cheddar, lettuce, tomato and ketchup, fries',
          questions: []
        },
        {
          id: 'krupicova-kase',
          name: 'Semolina porridge',
          price: '119 CZK',
          allergens: ['1', '7'],
          description: 'from foam with cocoa and butter',
          questions: []
        }
      ]
    };
  }

  // Ensure 'omacka-chimichurri' in studené omáčky has exact id, name, and price
  ['studene-omacky'].forEach(catId => {
    const catCz = existingMapCz[catId];
    const catEn = existingMapEn[catId];
    if (catCz) {
      const idx = catCz.items.findIndex(it => it.id === 'omacka-chimichurri' || it.id === 'omacka-okurkovy-relish');
      if (idx !== -1) {
        catCz.items[idx].id = 'omacka-chimichurri';
        catCz.items[idx].name = 'Chimmichurri omáčka';
        catCz.items[idx].price = '65 Kč';
        catCz.items[idx].description = 'čerstvé bylinky, petrželka a oregano, česnek, chilli, olivový olej';
      }
    }
    if (catEn) {
      const idx = catEn.items.findIndex(it => it.id === 'omacka-chimichurri' || it.id === 'omacka-okurkovy-relish');
      if (idx !== -1) {
        catEn.items[idx].id = 'omacka-chimichurri';
        catEn.items[idx].name = 'Chimichurri sauce';
        catEn.items[idx].price = '65 CZK';
        catEn.items[idx].description = 'fresh herbs, parsley and oregano, garlic, chili, olive oil';
      }
    }
  });

  const finalCategoriesCz: MenuCategory[] = [];
  const finalCategoriesEn: MenuCategory[] = [];

  for (const catId of categoryIdsOrder) {
    const meta = CATEGORY_METAS[catId];
    const catCz = existingMapCz[catId];
    const catEn = existingMapEn[catId];

    if (!catCz || !catEn) {
      console.warn(`Category ${catId} not found in existing data.`);
      continue;
    }

    if (meta) {
      catCz.name = meta.nameCz;
      catCz.badge = meta.badgeCz;
      catCz.description = meta.descCz;
      catCz.iconName = meta.iconName;

      catEn.name = meta.nameEn;
      catEn.badge = meta.badgeEn;
      catEn.description = meta.descEn;
      catEn.iconName = meta.iconName;
    }

    // Apply exact item updates
    for (let i = 0; i < catCz.items.length; i++) {
      const itCz = catCz.items[i];
      const itEn = catEn.items[i];

      const update = EXACT_ITEM_UPDATES[itCz.id];
      if (update) {
        if (update.nameCz) itCz.name = update.nameCz;
        if (update.nameEn) itEn.name = update.nameEn;
        if (update.weight) {
          itCz.weight = update.weight;
          itEn.weight = update.weight;
        }
        if (update.priceCz) itCz.price = update.priceCz;
        if (update.priceEn) itEn.price = update.priceEn;
        if (update.allergens) {
          itCz.allergens = update.allergens;
          itEn.allergens = update.allergens;
        }
        if (update.notes) {
          itCz.notes = update.notes;
        }
        itCz.description = update.descCz;
        itEn.description = update.descEn;
      }
    }

    finalCategoriesCz.push(catCz);
    finalCategoriesEn.push(catEn);
  }

  // Generate all granular questions
  let totalQuestionsCount = 0;

  for (let c = 0; c < finalCategoriesCz.length; c++) {
    const catCz = finalCategoriesCz[c];
    const catEn = finalCategoriesEn[c];

    for (let i = 0; i < catCz.items.length; i++) {
      const itemCz = catCz.items[i];
      const itemEn = catEn.items[i];

      buildItemQuestions(itemCz, itemEn, catCz, catEn);
      totalQuestionsCount += itemCz.questions.length;
    }
  }

  console.log(`Successfully generated ${totalQuestionsCount} questions across ${finalCategoriesCz.length} categories.`);

  // Write to files
  const targetFileCz = path.resolve(process.cwd(), 'src/data/menuData.ts');
  const targetFileEn = path.resolve(process.cwd(), 'src/data/menuDataEn.ts');

  const contentCz = `export interface Question {
  id: string;
  question: string;
  correctAnswer: string;
  distractors: [string, string];
  explanation: string;
}

export interface MenuItem {
  id: string;
  name: string;
  weight?: string;
  price?: string;
  allergens?: string[];
  description: string;
  notes?: string;
  questions: Question[];
}

export interface MenuCategory {
  id: string;
  name: string;
  badge?: string;
  description: string;
  iconName: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = ${JSON.stringify(finalCategoriesCz, null, 2)};

export const TOTAL_ITEMS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
export const TOTAL_QUESTIONS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.reduce((qAcc, it) => qAcc + it.questions.length, 0), 0);
`;

  const contentEn = `import { MenuCategory } from './menuData';

export const MENU_CATEGORIES_EN: MenuCategory[] = ${JSON.stringify(finalCategoriesEn, null, 2)};
`;

  fs.writeFileSync(targetFileCz, contentCz, 'utf-8');
  console.log('Saved updated menuData.ts');

  fs.writeFileSync(targetFileEn, contentEn, 'utf-8');
  console.log('Saved updated menuDataEn.ts');
}

function buildItemQuestions(
  itemCz: MenuItem,
  itemEn: MenuItem,
  catCz: MenuCategory,
  catEn: MenuCategory
) {
  const parsedCz = parseDescriptionWithMeasure(itemCz.description);
  const parsedEn = parseDescriptionWithMeasureEn(itemEn.description);

  const measureUnitCz = parsedCz.measureUnit || (itemCz.weight || null);
  const measureUnitEn = parsedEn.measureUnit || (itemEn.weight || (measureUnitCz ? measureUnitCz.replace(',', '.') : null));

  const rawPartsCz = parsedCz.ingredients;
  const rawPartsEn = parsedEn.ingredients;

  const count = Math.max(rawPartsCz.length, rawPartsEn.length);
  const partsCz = [...rawPartsCz];
  const partsEn = [...rawPartsEn];
  while (partsCz.length < count) partsCz.push(partsCz[partsCz.length - 1] || itemCz.name);
  while (partsEn.length < count) partsEn.push(partsEn[partsEn.length - 1] || itemEn.name);

  const questionsCz: Question[] = [];
  const questionsEn: Question[] = [];

  // A. MEASUREMENT UNIT QUESTION
  if (measureUnitCz) {
    const isWeightCz = measureUnitCz.includes('g') && !measureUnitCz.includes('l');
    const promptCz = isWeightCz
      ? `Jaká je gramáž porce podsložky ${itemCz.name}?`
      : `Jaký je servírovací objem / míra podsložky ${itemCz.name}?`;
    
    const isWeightEn = (measureUnitEn || '').includes('g') && !(measureUnitEn || '').includes('l');
    const promptEn = isWeightEn
      ? `What is the portion weight of ${itemEn.name}?`
      : `What is the serving volume / measure of ${itemEn.name}?`;

    const distCz = getMeasureDistractors(measureUnitCz, 'cz');
    const distEn = getMeasureDistractors(measureUnitEn || measureUnitCz, 'en');

    const qCz: Question = {
      id: `${itemCz.id}-vol`,
      question: promptCz,
      correctAnswer: measureUnitCz,
      distractors: distCz,
      explanation: isWeightCz
        ? `Gramáž porce podsložky ${itemCz.name} je ${measureUnitCz}.`
        : `Servírovací míra / objem podsložky ${itemCz.name} je ${measureUnitCz}.`
    };

    const qEn: Question = {
      id: `${itemEn.id}-vol`,
      question: promptEn,
      correctAnswer: measureUnitEn || measureUnitCz,
      distractors: distEn,
      explanation: isWeightEn
        ? `The portion weight of ${itemEn.name} is ${measureUnitEn || measureUnitCz}.`
        : `The serving measure of ${itemEn.name} is ${measureUnitEn || measureUnitCz}.`
    };

    questionsCz.push(qCz);
    questionsEn.push(qEn);
  }

  // B. INGREDIENT QUESTIONS
  for (let i = 0; i < count; i++) {
    const ingCz = partsCz[i];
    const ingEn = partsEn[i];
    const ansCz = formatAnswer(ingCz);
    const ansEn = formatAnswer(ingEn);

    const distCz = selectIngredientDistractors(ingCz, partsCz, catCz.id, i, 'cz');
    const distEn = selectIngredientDistractors(ingEn, partsEn, catEn.id, i, 'en');

    const promptCz = getIngredientQuestionPromptCz(itemCz, ingCz, i, catCz.id);
    const promptEn = getIngredientQuestionPromptEn(itemEn, ingEn, i, catEn.id);

    const qCz: Question = {
      id: `${itemCz.id}-ing-${i + 1}`,
      question: promptCz,
      correctAnswer: ansCz,
      distractors: distCz,
      explanation: `V podsložce ${itemCz.name} je obsaženo: ${ansCz}. Kompletní receptura položky: ${itemCz.description}.`
    };

    const qEn: Question = {
      id: `${itemEn.id}-ing-${i + 1}`,
      question: promptEn,
      correctAnswer: ansEn,
      distractors: distEn,
      explanation: `In ${itemEn.name}, this component is present: ${ansEn}. Full recipe ingredients: ${itemEn.description}.`
    };

    questionsCz.push(qCz);
    questionsEn.push(qEn);
  }

  // C. ALLERGEN QUESTIONS
  const allergens = itemCz.allergens || [];
  for (let a = 0; a < allergens.length; a++) {
    const code = allergens[a];
    const allInfoCz = ALLERGENS_CZ[code] || { name: `Alergen č. ${code}`, full: `Alergen č. ${code}`, example: '' };
    const allInfoEn = ALLERGENS_EN[code] || { name: `Allergen No. ${code}`, full: `Allergen No. ${code}`, example: '' };

    const distCz = getAllergenDistractors(code, allergens, 'cz');
    const distEn = getAllergenDistractors(code, allergens, 'en');

    const allListCz = allergens.map(c => ALLERGENS_CZ[c]?.name || c).join(', ');
    const allListEn = allergens.map(c => ALLERGENS_EN[c]?.name || c).join(', ');

    const qCz: Question = {
      id: `${itemCz.id}-allergen-${code}`,
      question: `Který z následujících alergenů obsahuje podsložka ${itemCz.name}?`,
      correctAnswer: allInfoCz.full,
      distractors: distCz,
      explanation: `${itemCz.name} obsahuje ${allInfoCz.full} (${allInfoCz.example}). Všechny evidované alergeny této podsložky: ${allListCz}.`
    };

    const qEn: Question = {
      id: `${itemEn.id}-allergen-${code}`,
      question: `Which of the following allergens is present in ${itemEn.name}?`,
      correctAnswer: allInfoEn.full,
      distractors: distEn,
      explanation: `${itemEn.name} contains ${allInfoEn.full} (${allInfoEn.example}). All allergens present in this item: ${allListEn}.`
    };

    questionsCz.push(qCz);
    questionsEn.push(qEn);
  }

  itemCz.questions = questionsCz;
  itemEn.questions = questionsEn;
}
