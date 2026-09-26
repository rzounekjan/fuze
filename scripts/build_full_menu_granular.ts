import fs from 'fs';
import path from 'path';
import { MENU_CATEGORIES, MenuCategory, MenuItem, Question } from '../src/data/menuData';
import { MENU_CATEGORIES_EN } from '../src/data/menuDataEn';

// EU 14 Allergens
export const ALLERGENS_CZ: Record<string, { code: string; name: string; full: string; example: string }> = {
  '1': { code: '1', name: 'Obiloviny obsahující lepek', full: 'Alergen č. 1 – Obiloviny obsahující lepek', example: 'kváskové pečivo, mouka, strouhanka, slad v pivu' },
  '2': { code: '2', name: 'Korýši a výrobky z nich', full: 'Alergen č. 2 – Korýši a výrobky z nich', example: 'krevety, krabi, humři, krevetová pasta' },
  '3': { code: '3', name: 'Vejce a výrobky z nich', full: 'Alergen č. 3 – Vejce a výrobky z nich', example: 'vejce, žloutek, majonéza, těstoviny' },
  '4': { code: '4', name: 'Ryby a výrobky z nich', full: 'Alergen č. 4 – Ryby a výrobky z nich', example: 'pstruh, rybí maso, ančovičky, worcester' },
  '5': { code: '5', name: 'Jádra podzemnice olejné (arašídy)', full: 'Alergen č. 5 – Jádra podzemnice olejné (arašídy)', example: 'arašídy, arašídový olej, satay' },
  '6': { code: '6', name: 'Sójové boby (sója) a výrobky z nich', full: 'Alergen č. 6 – Sójové boby (sója)', example: 'sójová omáčka, edamame, tofu, lecitin' },
  '7': { code: '7', name: 'Mléko a výrobky z něj (včetně laktózy)', full: 'Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)', example: 'máslo, sýr, smetana, tvaroh, mléčná pěna' },
  '8': { code: '8', name: 'Skořápkové plody (ořechy) a výrobky z nich', full: 'Alergen č. 8 – Skořápkové plody (ořechy)', example: 'vlašské ořechy, mandle, lískové ořechy' },
  '9': { code: '9', name: 'Celer a výrobky z něj', full: 'Alergen č. 9 – Celer a výrobky z něj', example: 'celer v polévce, vývar, celerová nať' },
  '10': { code: '10', name: 'Hořčice a výrobky z ní', full: 'Alergen č. 10 – Hořčice a výrobky z ní', example: 'hořčičné semínko, dijonská hořčice, dresink' },
  '11': { code: '11', name: 'Sezamová semena (sezam) a výrobky z nich', full: 'Alergen č. 11 – Sezamová semena (sezam)', example: 'sezamový olej, tahini, sezam na briošce' },
  '12': { code: '12', name: 'Oxid siřičitý a siřičitany', full: 'Alergen č. 12 – Oxid siřičitý a siřičitany', example: 'víno, sekty, sušené ovoce' },
  '13': { code: '13', name: 'Vlčí bob (lupina) a výrobky z něj', full: 'Alergen č. 13 – Vlčí bob (lupina)', example: 'lupinová mouka v pečivu' },
  '14': { code: '14', name: 'Měkkýši a výrobky z nich', full: 'Alergen č. 14 – Měkkýši a výrobky z nich', example: 'slávky, chobotnice, kalamáry, ústřicová omáčka' },
};

export const ALLERGENS_EN: Record<string, { code: string; name: string; full: string; example: string }> = {
  '1': { code: '1', name: 'Cereals containing gluten', full: 'Allergen No. 1 – Cereals containing gluten', example: 'sourdough bread, flour, breadcrumbs, barley malt' },
  '2': { code: '2', name: 'Crustaceans and products thereof', full: 'Allergen No. 2 – Crustaceans and products thereof', example: 'prawns, shrimps, crabs, lobster' },
  '3': { code: '3', name: 'Eggs and products thereof', full: 'Allergen No. 3 – Eggs and products thereof', example: 'eggs, egg yolk, mayonnaise, pasta' },
  '4': { code: '4', name: 'Fish and products thereof', full: 'Allergen No. 4 – Fish and products thereof', example: 'trout, anchovies, fish sauce, worcestershire' },
  '5': { code: '5', name: 'Peanuts and products thereof', full: 'Allergen No. 5 – Peanuts and products thereof', example: 'peanuts, peanut oil, satay sauce' },
  '6': { code: '6', name: 'Soybeans and products thereof', full: 'Allergen No. 6 – Soybeans and products thereof', example: 'soy sauce, edamame, tofu, soy lecithin' },
  '7': { code: '7', name: 'Milk and products thereof (including lactose)', full: 'Allergen No. 7 – Milk and products thereof (including lactose)', example: 'butter, cheese, cream, curd, milk foam' },
  '8': { code: '8', name: 'Tree nuts and products thereof', full: 'Allergen No. 8 – Tree nuts and products thereof', example: 'walnuts, almonds, hazelnuts, cashews' },
  '9': { code: '9', name: 'Celery and products thereof', full: 'Allergen No. 9 – Celery and products thereof', example: 'celeriac in broth, celery stalk, celery seed' },
  '10': { code: '10', name: 'Mustard and products thereof', full: 'Allergen No. 10 – Mustard and products thereof', example: 'mustard seeds, dijon mustard, vinaigrette' },
  '11': { code: '11', name: 'Sesame seeds and products thereof', full: 'Allergen No. 11 – Sesame seeds and products thereof', example: 'sesame oil, tahini, sesame brioche' },
  '12': { code: '12', name: 'Sulphur dioxide and sulphites', full: 'Allergen No. 12 – Sulphur dioxide and sulphites', example: 'wine, champagne, dried fruit' },
  '13': { code: '13', name: 'Lupin and products thereof', full: 'Allergen No. 13 – Lupin and products thereof', example: 'lupin flour in baked goods' },
  '14': { code: '14', name: 'Molluscs and products thereof', full: 'Allergen No. 14 – Molluscs and products thereof', example: 'mussels, squid, octopus, oyster sauce' },
};

// Realistic distractor pools for ingredients
const POOLS_CZ = {
  meat: ['Hovězí květová špička', 'Vepřová panenka', 'Telecí kýta', 'Kachní prsa', 'Vykoštěný pstruh', 'Hovězí svíčková', 'Vepřový bok Duroc', 'Jelení hřbet', 'Jehněčí kotletka', 'Krůtí prsa'],
  veggie: ['Okurčičky cornichons', 'Marinované šalotky', 'Pečená kořenová zelenina', 'Kysané bílé zelí', 'Nakládané perlové cibulky', 'Grilované papričky Padrón', 'Sterilované feferonky', 'Kvašené okurky (kvašáky)', 'Sušená rajčata', 'Nakládaný zázvor'],
  herbs: ['Čerstvá pažitka', 'Libeček', 'Estragon', 'Majoránka', 'Koriandr', 'Hladkolistá petrželka', 'Drcený kmín', 'Mletý kardamom', 'Čerstvý rozmarýn', 'Tymián'],
  bread: ['Na hovězím loji opečená topinka', 'Máslová brioška', 'Kváskový chléb', 'Bramborová sláma', 'Bramborová kaše', 'Bramborové křupky', 'Naše hranolky', 'Zauzené rohlíčkové brambory', 'Pivní sušenka', 'Křupavé vepřové krekry'],
  sauce: ['Lanýžová omáčka', 'Omáčka Choron', 'Naše salsa verde', 'Višňová omáčka', 'Jablečná BBQ omáčka', 'Libečková majonéza', 'Pikantní zauzená majonéza', 'Koňaková omáčka', 'Koprová omáčka', 'Sýr čedar'],
  beer: ['Plzeňský ječný slad', 'Mnichovský slad', 'Žatecký poloraný červeňák', 'Chmel Citra', 'Chmel Mandarina Bavaria', 'Kvasnice spodního kvašení', 'Kvasnice svrchního kvašení', 'Pšeničný slad', 'Pražený karamelový slad', 'Chmel Sládek'],
  wine: ['Pozdní sběr', 'Zrání v dubovém sudu', 'Vinařství Gotberg', 'Vinařství Kolby', 'Vinařství Kraus', 'Vinařství Michlovský', 'Mikulovská podoblast', 'Velkopavlovická podoblast', 'Mělnická podoblast', 'Kyselina a minerální tóny'],
  cocktail: ['Řemeslný gin', 'Bílý rum', 'Stařený rum', 'Modrá agáve (tequila)', 'Campari', 'Cointreau', 'Cinzano rosso', 'Čerstvá limetová šťáva', 'Sodová voda', 'Tonik Thomas Henry'],
  soft: ['Mangové pyré', 'Čerstvý grapefruitový fresh', 'Malinové pyré', 'Bílá čokoláda', 'Švestkové pyré', 'Drcený kardamom', 'Zázvorový výluh', 'Citronová tráva', 'Výběrová káva arabica', 'Horké plnotučné mléko'],
  spirit: ['Tradiční kotlíková destilace', 'Švestkový kvas', 'Hrušky Williams', 'Zlatožluté meruňky', 'Zrání v dubovém sudu', 'Filtrace přes dřevěné uhlí', 'Pramenitá horská voda', 'Třtinová melasa', '100% modrá agáve', 'Macerát z bylin'],
  allergen: ['Pšenice a ječmen', 'Slepičí a křepelčí vejce', 'Krevety a humři', 'Kravské a kozí mléko', 'Podzemnice olejná (arašídy)', 'Sójová omáčka a tofu', 'Vlašské a lískové ořechy', 'Celer bulvový a řapíkatý', 'Plnotučná a dijonská hořčice', 'Sezamová semena a tahini']
};

const POOLS_EN = {
  meat: ['Beef sirloin tip', 'Pork tenderloin', 'Veal leg', 'Duck breast', 'Deboned trout', 'Beef tenderloin', 'Duroc pork belly', 'Venison saddle', 'Lamb chop', 'Turkey breast'],
  veggie: ['Cornichons', 'Marinated shallots', 'Roasted root vegetables', 'Sauerkraut', 'Pickled pearl onions', 'Grilled Padron peppers', 'Pickled chili peppers', 'Fermented dill pickles', 'Sun-dried tomatoes', 'Pickled ginger'],
  herbs: ['Fresh chives', 'Lovage', 'Tarragon', 'Marjoram', 'Coriander / cilantro', 'Flat-leaf parsley', 'Crushed caraway', 'Ground cardamom', 'Fresh rosemary', 'Thyme'],
  bread: ['Toasted sourdough on beef lard', 'Butter brioche', 'Sourdough bread', 'Potato straw', 'Mashed potatoes', 'Potato crisps', 'Homemade fries', 'Smoked fingerling potatoes', 'Beer biscuit', 'Crispy pork cracklings'],
  sauce: ['Truffle sauce', 'Choron sauce', 'Our salsa verde', 'Sour cherry sauce', 'Apple BBQ sauce', 'Lovage mayonnaise', 'Spicy smoked mayonnaise', 'Cognac sauce', 'Dill sauce', 'Cheddar cheese'],
  beer: ['Pilsner barley malt', 'Munich malt', 'Saaz semi-early red hop', 'Citra hops', 'Mandarina Bavaria hops', 'Bottom-fermenting lager yeast', 'Top-fermenting ale yeast', 'Wheat malt', 'Roasted caramel malt', 'Sladek hops'],
  wine: ['Late harvest', 'Aging in oak barrels', 'Gotberg winery', 'Kolby winery', 'Kraus winery', 'Michlovsky winery', 'Mikulov subregion', 'Velke Pavlovice subregion', 'Melnik subregion', 'Vibrant acidity and mineral notes'],
  cocktail: ['Craft gin', 'White rum', 'Aged dark rum', 'Blue agave tequila', 'Campari', 'Cointreau', 'Cinzano rosso', 'Fresh lime juice', 'Soda water', 'Thomas Henry tonic'],
  soft: ['Mango purée', 'Fresh grapefruit juice', 'Raspberry purée', 'White chocolate', 'Plum purée', 'Crushed cardamom', 'Ginger infusion', 'Lemongrass', 'Specialty arabica coffee', 'Hot whole milk'],
  spirit: ['Traditional pot still distillation', 'Fermented plum mash', 'Williams pears', 'Golden apricots', 'Oak barrel aging', 'Charcoal filtration', 'Mountain spring water', 'Cane molasses', '100% blue agave', 'Botanical maceration'],
  allergen: ['Wheat and barley', 'Chicken and quail eggs', 'Prawns and lobsters', 'Cow and goat milk', 'Peanuts and peanut butter', 'Soy sauce and tofu', 'Walnuts and hazelnuts', 'Celeriac and celery stalks', 'Dijon and wholegrain mustard', 'Sesame seeds and tahini']
};

function selectIngredientDistractors(
  ingredient: string, 
  allIngredients: string[], 
  catId: string, 
  index: number, 
  lang: 'cz' | 'en'
): [string, string] {
  const poolMap = lang === 'cz' ? POOLS_CZ : POOLS_EN;
  const ingLower = ingredient.toLowerCase();
  let selectedCategory: keyof typeof POOLS_CZ = 'meat';

  if (catId === 'alergeny') {
    selectedCategory = 'allergen';
  } else if (catId.includes('vina') || catId === 'bublinky') {
    selectedCategory = 'wine';
  } else if (catId.includes('pivo')) {
    selectedCategory = 'beer';
  } else if (catId.includes('koktejl') || catId.includes('aperitiv') || catId.includes('gin')) {
    selectedCategory = 'cocktail';
  } else if (catId.includes('destilat') || catId.includes('vodk') || catId.includes('rum') || catId.includes('tequil') || catId.includes('whisky') || catId.includes('palenk')) {
    selectedCategory = 'spirit';
  } else if (catId.includes('limonad') || catId.includes('vody') || catId.includes('kava')) {
    selectedCategory = 'soft';
  } else {
    // Food items - order of checks matters
    if (/topink|chléb|briošk|brambor|slám|kaše|hranolk|krekr|toast|bread|brioche|potato|fries|straw|cracker/.test(ingLower)) {
      selectedCategory = 'bread';
    } else if (/okurk|cornichon|šalot|zelen|cibul|rajč|jablk|celer|hrozn|pickle|shallot|vegetable|onion|apple|cabbage/.test(ingLower)) {
      selectedCategory = 'veggie';
    } else if (/pažitk|bylin|estragon|libečk|majorán|koriandr|kmín|kardamom|česnek|chive|herb|tarragon|lovage|pepper|garlic/.test(ingLower)) {
      selectedCategory = 'herbs';
    } else if (/omáčk|salsa|majonéz|jus|redukce|dresing|sýr|máslo|čedar|parmaz|sauce|dressing|mayo|cheese|butter/.test(ingLower)) {
      selectedCategory = 'sauce';
    } else {
      selectedCategory = 'meat';
    }
  }

  const pool = poolMap[selectedCategory];
  const allLower = allIngredients.map(s => s.toLowerCase());
  const available = pool.filter(cand => {
    const candLower = cand.toLowerCase();
    if (candLower === ingLower) return false;
    return !allLower.some(existing => existing.includes(candLower) || candLower.includes(existing));
  });

  const candList = available.length >= 2 ? available : pool;
  const idx1 = (index * 2 + 1) % candList.length;
  let idx2 = (index * 2 + 2) % candList.length;
  if (idx2 === idx1) idx2 = (idx1 + 1) % candList.length;

  return [candList[idx1], candList[idx2]];
}

// Select two distinct allergen distractors not present in item.allergens
function getAllergenDistractors(currentCode: string, itemAllergens: string[], lang: 'cz' | 'en'): [string, string] {
  const allCodes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
  const candidates = allCodes.filter(c => c !== currentCode && !itemAllergens.includes(c));
  
  const seed = parseInt(currentCode, 10);
  const idx1 = seed % candidates.length;
  let idx2 = (seed + 5) % candidates.length;
  if (idx2 === idx1) idx2 = (idx1 + 1) % candidates.length;

  const c1 = candidates[idx1];
  const c2 = candidates[idx2];

  if (lang === 'cz') {
    return [ALLERGENS_CZ[c1].full, ALLERGENS_CZ[c2].full];
  } else {
    return [ALLERGENS_EN[c1].full, ALLERGENS_EN[c2].full];
  }
}

// Generate realistic distractors for measurement unit questions (volumes/weights)
function getMeasureDistractors(unit: string, lang: 'cz' | 'en'): [string, string] {
  const norm = unit.toLowerCase().replace(/\s+/g, '');
  const isEn = lang === 'en';

  if (norm.includes('g') && !norm.includes('l')) {
    if (norm === '9g') return isEn ? ['7 g', '14 g'] : ['7 g', '14 g'];
    if (norm === '18g') return isEn ? ['9 g', '14 g'] : ['9 g', '14 g'];
    return isEn ? ['10 g', '15 g'] : ['10 g', '15 g'];
  }

  // Volume options
  const standardCz = ['0,02 l', '0,03 l', '0,04 l', '0,05 l', '0,06 l', '0,08 l', '0,1 l', '0,15 l', '0,2 l', '0,25 l', '0,3 l', '0,33 l', '0,4 l', '0,5 l', '0,75 l'];
  const standardEn = ['0.02 l', '0.03 l', '0.04 l', '0.05 l', '0.06 l', '0.08 l', '0.1 l', '0.15 l', '0.2 l', '0.25 l', '0.3 l', '0.33 l', '0.4 l', '0.5 l', '0.75 l'];

  if (norm === '0,03l' || norm === '0.03l') {
    return isEn ? ['0.05 l', '0.02 l'] : ['0,05 l', '0,02 l'];
  }
  if (norm === '0,04l' || norm === '0.04l') {
    return isEn ? ['0.05 l', '0.02 l'] : ['0,05 l', '0,02 l'];
  }
  if (norm === '0,06l' || norm === '0.06l') {
    return isEn ? ['0.08 l', '0.04 l'] : ['0,08 l', '0,04 l'];
  }
  if (norm === '0,08l' || norm === '0.08l') {
    return isEn ? ['0.06 l', '0.1 l'] : ['0,06 l', '0,1 l'];
  }
  if (norm === '0,15l' || norm === '0.15l') {
    return isEn ? ['0.2 l', '0.1 l'] : ['0,2 l', '0,1 l'];
  }
  if (norm === '0,175l' || norm === '0.175l') {
    return isEn ? ['0.25 l', '0.1 l'] : ['0,25 l', '0,1 l'];
  }
  if (norm === '0,2l' || norm === '0.2l') {
    return isEn ? ['0.3 l', '0.1 l'] : ['0,3 l', '0,1 l'];
  }
  if (norm === '0,25l' || norm === '0.25l') {
    return isEn ? ['0.33 l', '0.2 l'] : ['0,33 l', '0,2 l'];
  }
  if (norm === '0,3l' || norm === '0.3l') {
    return isEn ? ['0.5 l', '0.4 l'] : ['0,5 l', '0,4 l'];
  }
  if (norm === '0,33l' || norm === '0.33l') {
    return isEn ? ['0.5 l', '0.25 l'] : ['0,5 l', '0,25 l'];
  }
  if (norm === '0,4l' || norm === '0.4l') {
    return isEn ? ['0.5 l', '0.3 l'] : ['0,5 l', '0,3 l'];
  }
  if (norm === '0,5l' || norm === '0.5l') {
    return isEn ? ['0.3 l', '0.4 l'] : ['0,3 l', '0,4 l'];
  }
  if (norm === '0,75l' || norm === '0.75l') {
    return isEn ? ['0.5 l', '1.0 l'] : ['0,5 l', '1,0 l'];
  }

  const pool = isEn ? standardEn : standardCz;
  const filtered = pool.filter(p => p.toLowerCase().replace(/\s+/g, '') !== norm);
  return [filtered[0] || '0.5 l', filtered[1] || '0.3 l'];
}

// Parses description, extracting leading measurement unit (liters or grams) so it is not split by punctuation
function parseDescriptionWithMeasure(desc: string): { measureUnit: string | null; ingredients: string[] } {
  let cleaned = desc.trim();
  
  // 1. Detect if starts with volume or weight
  const volMatch = cleaned.match(/^(\d+([,\.]\d+)?\s*(?:l|cl|dl|ml|g|kg))\b\s*(.*)$/i);
  let measureUnit: string | null = null;
  let restOfDesc = cleaned;
  
  if (volMatch) {
    measureUnit = volMatch[1].replace(/([0-9])([a-zA-Z%])/, '$1 $2').trim();
    restOfDesc = volMatch[3];
  }

  // 2. Protect decimal numbers in restOfDesc before comma split so "3,5 %" is never split
  const protectedDesc = restOfDesc.replace(/(\d+),(\d+)/g, '$1.__DECIMAL_COMMA__.$2');
  
  // Split by comma
  const rawParts = protectedDesc
    .replace(/\.\s*$/, '')
    .split(/,\s*/)
    .map(s => s.replace(/\.__DECIMAL_COMMA__\./g, ',').trim())
    .filter(Boolean);

  return { measureUnit, ingredients: rawParts };
}

function parseDescriptionWithMeasureEn(desc: string): { measureUnit: string | null; ingredients: string[] } {
  let cleaned = desc.trim();
  
  const volMatch = cleaned.match(/^(\d+([,\.]\d+)?\s*(?:l|cl|dl|ml|g|kg))\b\s*(.*)$/i);
  let measureUnit: string | null = null;
  let restOfDesc = cleaned;
  
  if (volMatch) {
    measureUnit = volMatch[1].replace(/([0-9])([a-zA-Z%])/, '$1 $2').trim();
    restOfDesc = volMatch[3];
  }

  const protectedDesc = restOfDesc.replace(/(\d+),(\d+)/g, '$1.__DECIMAL_COMMA__.$2');
  
  const rawParts = protectedDesc
    .replace(/\.\s*$/, '')
    .split(/,\s*/)
    .map(s => s.replace(/\.__DECIMAL_COMMA__\./g, ',').trim().replace(/^and\s+/i, ''))
    .filter(Boolean);

  return { measureUnit, ingredients: rawParts };
}

// Build ingredient question text
function getIngredientQuestionPromptCz(item: MenuItem, ing: string, index: number, catId: string): string {
  const ingLower = ing.toLowerCase();
  if (catId === 'alergeny') {
    return `Která z těchto potravin či surovin spadá pod skupinu ${item.name}?`;
  }
  if (/česnek/.test(ingLower)) {
    return `V jaké formě či úpravě je česnek součástí podsložky ${item.name}?`;
  }
  if (/topink|chléb|briošk|brambor|slám|kaše|hranolk|krekr|sušenka/.test(ingLower)) {
    return `Jaká příloha, pečivo či křupavá složka doplňuje podsložku ${item.name}?`;
  }
  if (/okurk|cornichon/.test(ingLower)) {
    return `Který druh nakládaných okurek obsahuje podsložka ${item.name}?`;
  }
  if (/šalot|cibul/.test(ingLower)) {
    return `Jaký druh cibulky či šalotky je součástí receptury ${item.name}?`;
  }
  if (/pažitk|bylin|estragon|libečk|majorán|koriandr|kmín|kardamom/.test(ingLower)) {
    return `Která bylinka, koření či aromatická surovina dochucuje ${item.name}?`;
  }
  if (/omáčk|salsa|majonéz|jus|redukce|dresing|kečup/.test(ingLower)) {
    return `Která omáčka, dresink či redukce patří k podsložce ${item.name}?`;
  }
  if (/sýr|máslo|čedar|parmaz|niva|raclette|tvarůž/.test(ingLower)) {
    return `Který sýr či mléčná přísada je součástí receptury ${item.name}?`;
  }
  if (/maso|hověz|vepř|kuř|špičk|řízek|kýt|krk|bok|steak|tartar|pstruh|krevet|klobás|foie gras|pastrami/.test(ingLower)) {
    return `Která masová surovina tvoří základ podsložky ${item.name}?`;
  }
  if (/zelen|rajč|jablk|celer|hrozn|salát|hrách/.test(ingLower)) {
    return `Kterou zeleninovou či ovocnou složku obsahuje podsložka ${item.name}?`;
  }
  if (/gin|rum|tequila|vodka|whisky|bourbon|koňak|campari|cointreau|cinzano|aperol/.test(ingLower)) {
    return `Který destilát nebo likér je klíčovou složkou nápoje ${item.name}?`;
  }
  if (/slad|chmel|kvašení|kvasnice|ležák/.test(ingLower)) {
    return `Která pivovarská surovina nebo vlastnost charakterizuje ${item.name}?`;
  }
  if (/hrozn|odrůd|vinařství|sběr|pálava|morava|sauvignon|riesling|pinot/.test(ingLower)) {
    return `Která odrůdová či vinařská vlastnost charakterizuje víno ${item.name}?`;
  }
  return `Která z následujících surovin patří do podsložky ${item.name}?`;
}

function getIngredientQuestionPromptEn(item: MenuItem, ing: string, index: number, catId: string): string {
  const ingLower = ing.toLowerCase();
  if (catId === 'alergeny') {
    return `Which food or ingredient belongs to the allergen group ${item.name}?`;
  }
  if (/garlic/.test(ingLower)) {
    return `In what culinary form is garlic included in ${item.name}?`;
  }
  if (/sourdough|toast|brioche|bread|potato|fries|straw|cracker|biscuit/.test(ingLower)) {
    return `Which bread, side, or crispy garnish accompanies ${item.name}?`;
  }
  if (/cornichon|pickle/.test(ingLower)) {
    return `Which pickled ingredient is included in ${item.name}?`;
  }
  if (/shallot|onion/.test(ingLower)) {
    return `Which onion or shallot ingredient is included in ${item.name}?`;
  }
  if (/chive|herb|tarragon|lovage|marjoram|coriander|caraway|cardamom/.test(ingLower)) {
    return `Which fresh herb or spice seasoning finishes ${item.name}?`;
  }
  if (/sauce|salsa|mayonnaise|jus|reduction|dressing|ketchup/.test(ingLower)) {
    return `Which sauce, dressing, or reduction accompanies ${item.name}?`;
  }
  if (/cheese|butter|cheddar|parmesan|blue cheese|raclette/.test(ingLower)) {
    return `Which cheese or dairy ingredient is included in ${item.name}?`;
  }
  if (/beef|pork|chicken|duck|trout|sirloin|steak|meat|shrimp|veal|foie gras|sausage|pastrami/.test(ingLower)) {
    return `Which meat or seafood ingredient forms the base of ${item.name}?`;
  }
  if (/cabbage|tomato|grape|celery|apple|peas/.test(ingLower)) {
    return `Which vegetable or fruit component is included in ${item.name}?`;
  }
  if (/gin|rum|tequila|vodka|whisky|bourbon|cognac|campari|cointreau|cinzano|aperol/.test(ingLower)) {
    return `Which spirit or liqueur is a signature component of ${item.name}?`;
  }
  if (/malt|hop|yeast|lager|ferment/.test(ingLower)) {
    return `Which brewing raw material or trait characterizes ${item.name}?`;
  }
  if (/grape|winery|harvest|acidity|subregion/.test(ingLower)) {
    return `Which grape variety, winery, or characteristic belongs to ${item.name}?`;
  }
  return `Which ingredient is part of ${item.name}?`;
}

// Clean and capitalize ingredient for display as correctAnswer
function formatAnswer(str: string): string {
  let s = str.trim().replace(/^and\s+/i, '').replace(/^a\s+/i, '');
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Special curated normalization of descriptions so that comma counts match exactly and reflect true ingredients
const CUSTOM_DESCRIPTIONS_CZ: Record<string, string> = {
  'tatarak': 'z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka, konfitovaný česnek, bramborová sláma',
  'lanyzovy-popcorn': 'kukuřičný popcorn, lanýžový olej, strouhaný parmazán',
  'domaci-bramburky': 'smažené bramborové lupínky, mořská sůl, pikantní zauzená majonéza',
  'hovezi-consomme': 'silný hovězí vývar, jemný játrový knedlíček, kořenová zelenina',
  'kremova-humri': 'humří a mořská polévka, mořská klobáska, kořenová zelenina, zapečené listové těsto',
  'caesar-salat': 'trhané kuře pečené v peci, opečená slanina, parmezán, křupavé krutony, ančovičkový dresink',
  'waldorf-salat': 'křupavá jablka, řapíkatý celer, bobule hroznového vína, nakládané vlašské ořechy, majonézový dresing',
  'pecene-koleno': 'pečené vepřové koleno, plnotučná hořčice, strouhaný křen, zelný salát s křenem',
  'veprovy-rizek-duroc': 'vepřová kotleta Duroc, omáčka fines herbes, bramborová kaše, bramborové křupky',
  'veprova-zebra': 'vepřová žebra marinovaná s pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, zelný salát s křenem, opečená česneková brioška',
  'hovezi-koprovka': 'tažené hovězí maso, jemná koprová omáčka, vařené vejce, rohlíčkové brambory, koprový olej',
  'testoviny-kureci': 'těstoviny s kuřecí směsí, smetanová hříbková omáčka, grilovaná hlíva ústřičná, bylinkový olej',
  'shrimp-roll': 'argentinské červené krevety, máslová brioška, koktejlová omáčka s koňakem, naše hranolky, omáčka Choron',
  'vykosteny-pstruh': 'filátka vykoštěného pstruha na másle, omáčka Choron, pečená rajčátka, bylinkový salát, pečená zimní zelenina',
  'svickova-wellington': 'hovězí svíčková v listovém těstě, houbová směs duxelles s lanýži, koňaková omáčka, zauzené rohlíčkové brambory',
  'thors-hammer': '700g hovězí koleno z hliněné pece, omáčka z piva Kasteel Rouge, pálené šalotky, opečená česneková brioška, salsa verde, zauzené brambory, zelný salát',
  'burger-foie-gras': 'vyzrálé hovězí maso, kachní foie gras, uzená niva, majonéza z pečené cibule, bramborová sláma, malé hranolky',
  'us-prime-steaky': 'US Prime květová špička nebo vysoký roštěnec, opečené papričky Padrón, mořská sůl Maldon',
  'us-prime-burger': 'vyzrálé hovězí US Prime, opečená slanina, sýr čedar, cibulová marmeláda, pikantní majonéza',
  'veprovy-bucek-yuzu': 'grilovaný vepřový bůček, karamelizovaná yuzu omáčka, grilovaná jarní cibulka, chimichurri omáčka',
  'nase-pastrami': 'US Prime hovězí žebro z pece, sýr raclette, zelný salát s křenem, opečený kváskový chléb, nakládaná zelenina',
  'pul-kure-pecene': 'kuře pečené v hliněné peci, varianta BBQ nebo TRUFFLE nebo CAESAR, čerstvé bylinky',
  'omacka-konakova': 'teplá smetanová redukce, pravý koňak, poctivý telecí jus',
  'omacka-choron': 'bearnská teplá emulze, rajčatová redukce, čerstvý estragon, máslo',
  'omacka-fines-herbes': 'teplá bylinková redukce, čerstvá petrželka, pažitka a kerblík, máslový tón',
  'omacka-lanyzova': 'krémová smetanová redukce, lanýžové máslo, černé lanýže',
  'omacka-pikantni-majo': 'domácí majonéza, uzená paprika, drcené chilli',
  'omacka-salsa-verde': 'čerstvé zelené bylinky, nasekané kapary, ančovičky, olivový olej',
  'omacka-chimichurri': 'čerstvá petrželka a oregano, česnek, chilli papričky, panenský olivový olej',
  'omacka-kecup': 'vyzrálá rajčata, kvasný ocet, třtinový cukr, směs koření',
  'nase-hranolky': 'čerstvě krájené brambory, hovězí lůj na smažení, mořská sůl',
  'hranolky-lanyz-leicester': 'čerstvé smažené hranolky, lanýžová majonéza, strouhaný sýr Red Leicester',
  'bramborova-kase': 'vařené brambory, poctivé máslo, plnotučné mléko, bramborová sláma',
  'zauzene-rohlicek-brambory': 'rohlíčkové brambory, zauzení bukovým dřevem, čerstvé máslo, mořská sůl',
  'salat-listovy-rajce': 'trhané salátové listy, nakládané zelené rajče, pivní vinaigrette',
  'pecena-zimni-zelenina': 'kořenová zimní zelenina, mletý kardamom, čistý javorový sirup',
  'zelny-salat-kren': 'krouhané bílé zelí, strouhaný čerstvý křen, rozinky, vinný ocet, jemná majonéza',
  'cesnekova-brioska': 'nadýchaná máslová brioška, česnekové máslo, bylinková sůl',
  'kvaskovy-chleb': 'žitno-pšeničný kvásek, žitná a pšeničná mouka, drcený kmín, mořská sůl',
  'dortik-ganache-chmel': 'čokoláda Valrhona Dulcey, čokoládová hlína, višňová omáčka',
  'karamelovy-trhanec': 'nadýchaný císařský trhanec, pečené švestky, zmrzlina z vaječného likéru',
  'pivni-zmrzlina': 'domácí zmrzlina z ležáku, sladová žmolenka, čerstvá šlehačka'
};

const CUSTOM_DESCRIPTIONS_EN: Record<string, string> = {
  'tatarak': 'from tip of the sirloin, cornichons, marinated shallots, chives, toasted sourdough on beef lard, confit garlic, potato straw',
  'lanyzovy-popcorn': 'corn popcorn, truffle oil, grated parmesan',
  'domaci-bramburky': 'fried potato crisps, sea salt, spicy smoked mayonnaise',
  'hovezi-consomme': 'rich beef broth, delicate liver dumpling, root vegetables',
  'kremova-humri': 'lobster and seafood broth, seafood sausage, root vegetables, baked puff pastry',
  'caesar-salat': 'oven-roasted pulled chicken, crispy bacon, parmesan, crispy croutons, anchovy dressing',
  'waldorf-salat': 'crisp apples, celery stalk, grapes, pickled walnuts, mayonnaise dressing',
  'pecene-koleno': 'roasted pork knuckle, wholegrain mustard, grated horseradish, cabbage salad with horseradish',
  'veprovy-rizek-duroc': 'Duroc pork cutlet, fines herbes sauce, potato mash, potato crisps',
  'veprova-zebra': 'beer-marinated pork ribs, candied bacon, pearl onions, apple BBQ sauce, cabbage horseradish salad, toasted garlic brioche',
  'hovezi-koprovka': 'slow-braised beef, delicate dill sauce, boiled egg, fingerling potatoes, dill oil',
  'testoviny-kureci': 'pasta stuffed with chicken mixture, creamy porcini sauce, grilled oyster mushrooms, herb oil',
  'shrimp-roll': 'Argentine red shrimps, butter brioche, cognac cocktail sauce, homemade fries, Choron sauce',
  'vykosteny-pstruh': 'butter-pan-fried trout fillets, Choron sauce, roasted cherry tomatoes, herb salad, roasted winter vegetables',
  'svickova-wellington': 'beef tenderloin in puff pastry, truffle duxelles mushroom filling, cognac sauce, smoked fingerling potatoes',
  'thors-hammer': '700g beef shank from clay oven, Kasteel Rouge beer sauce, charred shallots, toasted garlic brioche, salsa verde, smoked potatoes, cabbage salad',
  'burger-foie-gras': 'aged beef patty, duck foie gras, smoked blue cheese, roasted onion mayonnaise, potato straw, small fries',
  'us-prime-steaky': 'US Prime sirloin tip or ribeye, blistered Padron peppers, Maldon sea salt',
  'us-prime-burger': 'aged US Prime beef, grilled bacon, cheddar cheese, onion marmalade, spicy mayonnaise',
  'veprovy-bucek-yuzu': 'grilled pork belly, caramelized yuzu glaze, charred scallions, chimichurri sauce',
  'nase-pastrami': 'US Prime beef rib from clay oven, raclette cheese, horseradish cabbage salad, toasted sourdough bread, pickled vegetables',
  'pul-kure-pecene': 'clay-oven-roasted half chicken, choice of BBQ or TRUFFLE or CAESAR, fresh herbs',
  'omacka-konakova': 'warm cream reduction, genuine cognac, rich veal jus',
  'omacka-choron': 'warm bearnaise emulsion, tomato reduction, fresh tarragon, butter',
  'omacka-fines-herbes': 'warm herbal reduction, fresh parsley, chives and chervil, butter note',
  'omacka-lanyzova': 'velvety cream reduction, truffle butter, black truffles',
  'omacka-pikantni-majo': 'homemade mayonnaise, smoked paprika, crushed chili',
  'omacka-salsa-verde': 'fresh green herbs, chopped capers, anchovies, olive oil',
  'omacka-chimichurri': 'fresh parsley and oregano, garlic, chili pepper, virgin olive oil',
  'omacka-kecup': 'sun-ripened tomatoes, vinegar, cane sugar, spice blend',
  'nase-hranolky': 'fresh-cut potatoes, beef lard for frying, sea salt',
  'hranolky-lanyz-leicester': 'fresh fried fries, truffle mayonnaise, grated Red Leicester cheese',
  'bramborova-kase': 'boiled potatoes, farmhouse butter, whole milk, potato straw',
  'zauzene-rohlicek-brambory': 'fingerling potatoes, beechwood smoking, fresh butter, sea salt',
  'salat-listovy-rajce': 'mixed salad leaves, pickled green tomato, beer vinaigrette',
  'pecena-zimni-zelenina': 'winter root vegetables, ground cardamom, pure maple syrup',
  'zelny-salat-kren': 'shredded white cabbage, freshly grated horseradish, raisins, wine vinegar, delicate mayonnaise',
  'cesnekova-brioska': 'fluffy butter brioche, garlic butter, herb salt',
  'kvaskovy-chleb': 'rye-wheat sourdough starter, rye and wheat flour, caraway seeds, sea salt',
  'dortik-ganache-chmel': 'Valrhona Dulcey chocolate, chocolate soil, sour cherry sauce',
  'karamelovy-trhanec': 'fluffy imperial shredded pancake, roasted plums, eggnog liqueur ice cream',
  'pivni-zmrzlina': 'house-made lager ice cream, malt crumble, fresh whipped cream'
};

// Process an item and build all its granular questions
function buildItemQuestions(
  itemCz: MenuItem,
  itemEn: MenuItem,
  catCz: MenuCategory,
  catEn: MenuCategory
) {
  // Override description if custom defined
  if (CUSTOM_DESCRIPTIONS_CZ[itemCz.id]) {
    itemCz.description = CUSTOM_DESCRIPTIONS_CZ[itemCz.id];
  }
  if (CUSTOM_DESCRIPTIONS_EN[itemEn.id]) {
    itemEn.description = CUSTOM_DESCRIPTIONS_EN[itemEn.id];
  }

  // Parse measure unit (liters/grams) and ingredients with decimal commas protected
  const parsedCz = parseDescriptionWithMeasure(itemCz.description);
  const parsedEn = parseDescriptionWithMeasureEn(itemEn.description);

  const measureUnitCz = parsedCz.measureUnit;
  const measureUnitEn = parsedEn.measureUnit || (measureUnitCz ? measureUnitCz.replace(',', '.') : null);

  const rawPartsCz = parsedCz.ingredients;
  const rawPartsEn = parsedEn.ingredients;

  // Equalize length if needed
  const count = Math.max(rawPartsCz.length, rawPartsEn.length);
  const partsCz = [...rawPartsCz];
  const partsEn = [...rawPartsEn];
  while (partsCz.length < count) partsCz.push(partsCz[partsCz.length - 1] || itemCz.name);
  while (partsEn.length < count) partsEn.push(partsEn[partsEn.length - 1] || itemEn.name);

  const questionsCz: Question[] = [];
  const questionsEn: Question[] = [];

  // A. MEASUREMENT UNIT QUESTION (Měrná jednotka zvlášť v otázce)
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

  // B. INGREDIENT QUESTIONS (Ingredience za měrnou jednotkou a další ingredience)
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

  // C. ALLERGEN QUESTIONS (1 question for each allergen the item contains)
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

// MAIN RUNNER
console.log('Starting granular question generator across all 34 categories...');
let totalQuestionsCount = 0;

for (let c = 0; c < MENU_CATEGORIES.length; c++) {
  const catCz = MENU_CATEGORIES[c];
  const catEn = MENU_CATEGORIES_EN[c];

  for (let i = 0; i < catCz.items.length; i++) {
    const itemCz = catCz.items[i];
    const itemEn = catEn.items[i];

    buildItemQuestions(itemCz, itemEn, catCz, catEn);
    totalQuestionsCount += itemCz.questions.length;

    if (itemCz.id === 'tatarak') {
      console.log('=== TATARÁK CHECK (CZ) ===');
      console.log('Total Questions:', itemCz.questions.length);
      itemCz.questions.forEach((q, idx) => {
        console.log(`Q${idx + 1} (${q.id}): ${q.question} => ${q.correctAnswer}`);
      });
      console.log('=== TATARÁK CHECK (EN) ===');
      console.log('Total Questions:', itemEn.questions.length);
      itemEn.questions.forEach((q, idx) => {
        console.log(`Q${idx + 1} (${q.id}): ${q.question} => ${q.correctAnswer}`);
      });
    }
  }
}

console.log('Total questions generated across all items:', totalQuestionsCount);

// Save updated menuData.ts
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

export const MENU_CATEGORIES: MenuCategory[] = ${JSON.stringify(MENU_CATEGORIES, null, 2)};

export const TOTAL_ITEMS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
export const TOTAL_QUESTIONS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.reduce((qAcc, it) => qAcc + it.questions.length, 0), 0);
`;

const contentEn = `import { MenuCategory } from './menuData';

export const MENU_CATEGORIES_EN: MenuCategory[] = ${JSON.stringify(MENU_CATEGORIES_EN, null, 2)};
`;

fs.writeFileSync(targetFileCz, contentCz, 'utf-8');
console.log('Successfully wrote updated menuData.ts');

fs.writeFileSync(targetFileEn, contentEn, 'utf-8');
console.log('Successfully wrote updated menuDataEn.ts');
