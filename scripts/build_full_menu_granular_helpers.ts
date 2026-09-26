import { MenuItem } from '../src/data/menuData';
import { ALLERGENS_CZ, ALLERGENS_EN } from './build_full_menu_granular';

// Pools
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

export function formatAnswer(str: string): string {
  let s = str.trim().replace(/^and\s+/i, '').replace(/^a\s+/i, '');
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function parseDescriptionWithMeasure(desc: string): { measureUnit: string | null; ingredients: string[] } {
  let cleaned = desc.trim();
  
  const volMatch = cleaned.match(/^(\d+([,\.]\d+)?\s*(?:l|cl|dl|ml|g|kg|ks))\b\s*(.*)$/i);
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
    .map(s => s.replace(/\.__DECIMAL_COMMA__\./g, ',').trim())
    .filter(Boolean);

  return { measureUnit, ingredients: rawParts };
}

export function parseDescriptionWithMeasureEn(desc: string): { measureUnit: string | null; ingredients: string[] } {
  let cleaned = desc.trim();
  
  const volMatch = cleaned.match(/^(\d+([,\.]\d+)?\s*(?:l|cl|dl|ml|g|kg|pc|pcs))\b\s*(.*)$/i);
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

export function selectIngredientDistractors(
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

export function getAllergenDistractors(currentCode: string, itemAllergens: string[], lang: 'cz' | 'en'): [string, string] {
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

export function getMeasureDistractors(unit: string, lang: 'cz' | 'en'): [string, string] {
  const norm = unit.toLowerCase().replace(/\s+/g, '');
  const isEn = lang === 'en';

  if (norm.includes('g') && !norm.includes('l')) {
    if (norm === '90g') return isEn ? ['100 g', '150 g'] : ['100 g', '150 g'];
    if (norm === '100g') return isEn ? ['150 g', '200 g'] : ['150 g', '200 g'];
    if (norm === '180g') return isEn ? ['150 g', '200 g'] : ['150 g', '200 g'];
    if (norm === '200g') return isEn ? ['150 g', '250 g'] : ['150 g', '250 g'];
    if (norm === '250g') return isEn ? ['200 g', '300 g'] : ['200 g', '300 g'];
    if (norm === '300g') return isEn ? ['250 g', '350 g'] : ['250 g', '350 g'];
    if (norm === '500g') return isEn ? ['400 g', '600 g'] : ['400 g', '600 g'];
    if (norm === '700g') return isEn ? ['500 g', '800 g'] : ['500 g', '800 g'];
    return isEn ? ['100 g', '200 g'] : ['100 g', '200 g'];
  }

  if (norm.includes('ks') || norm.includes('pc')) {
    return isEn ? ['2 pcs', '1/2 pc'] : ['2 ks', '1/2 ks'];
  }

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

export function getIngredientQuestionPromptCz(item: MenuItem, ing: string, index: number, catId: string): string {
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

export function getIngredientQuestionPromptEn(item: MenuItem, ing: string, index: number, catId: string): string {
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
