import fs from 'fs';
import path from 'path';
import { MENU_CATEGORIES, MenuCategory, MenuItem, Question } from '../src/data/menuData';
import { MENU_CATEGORIES_EN } from '../src/data/menuDataEn';

function cleanText(t: string): string {
  if (!t) return '';
  let s = t.trim();
  s = s.replace(/^z\s+/i, '');
  s = s.replace(/^s\s+/i, '');
  s = s.replace(/^ve\s+/i, '');
  s = s.replace(/^v\s+/i, '');
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function cleanTextEn(t: string): string {
  if (!t) return '';
  let s = t.trim();
  s = s.replace(/^from\s+/i, '');
  s = s.replace(/^with\s+/i, '');
  s = s.replace(/^in\s+/i, '');
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Generate high quality ingredient question for CZ item
function getIngredientQuestionCz(item: MenuItem, cat: MenuCategory): Question {
  const qId = `${item.id}-ingredients`;
  const name = item.name;
  const desc = item.description;

  let questionText = `Které všechny ingredience a složky obsahuje ${name}?`;
  let correct = '';
  let distractors: [string, string] = ['', ''];
  let explanation = '';

  // Specific handling by category
  if (cat.id === 'alergeny') {
    questionText = `Které všechny potraviny, suroviny a zástupci spadají pod ${name}?`;
    correct = cleanText(desc);
    if (item.id === 'alergen-1') {
      distractors = [
        'Pouze čistá pšenice a žito (oves a ječmen do skupiny nepatří)',
        'Rýže, kukuřice, pohanka, jáhly a quinoa'
      ];
    } else if (item.id === 'alergen-2') {
      distractors = [
        'Olihně, chobotnice, ústřice a mušle (patří pod měkkýše č. 14)',
        'Losos, treska, candát a kapr (patří pod ryby č. 4)'
      ];
    } else if (item.id === 'alergen-3') {
      distractors = [
        'Pouze čisté vaječné bílky (žloutky do alergenu nespadají)',
        'Mléčné krémy, tvarohy a jogurty (patří pod alergen č. 7)'
      ];
    } else if (item.id === 'alergen-4') {
      distractors = [
        'Krevety, humři a raci (patří pod korýše č. 2)',
        'Slávky, ústřice a chobotnice (patří pod měkkýše č. 14)'
      ];
    } else if (item.id === 'alergen-5') {
      distractors = [
        'Vlašské ořechy, lískové ořechy a mandle (patří pod skořápkové plody č. 8)',
        'Slunečnicová semínka, dýňová semínka a mák'
      ];
    } else if (item.id === 'alergen-6') {
      distractors = [
        'Čočka, cizrna, fazole a hrách (běžné luštěniny mimo sóju)',
        'Pšeničný lepek a seitan (patří pod obiloviny č. 1)'
      ];
    } else if (item.id === 'alergen-7') {
      distractors = [
        'Sójové mléko, mandlové mléko a ovesný nápoj',
        'Vaječný žloutek, majonéza a tatarská omáčka (patří pod alergen č. 3)'
      ];
    } else if (item.id === 'alergen-8') {
      distractors = [
        'Arašídy (podzemnice olejná – patří pod samostatný alergen č. 5)',
        'Piniové oříšky, kokos a muškátový oříšek'
      ];
    } else if (item.id === 'alergen-9') {
      distractors = [
        'Petržel, pastiňák a mrkev (běžná kořenová zelenina mimo celer)',
        'Pórek, jarní cibulka a pažitka'
      ];
    } else if (item.id === 'alergen-10') {
      distractors = [
        'Křen, wasabi a ředkvičky (brukvovité kořeny mimo hořčici)',
        'Černý pepř, nové koření a bobkový list'
      ];
    } else if (item.id === 'alergen-11') {
      distractors = [
        'Lněná semínka, chia semínka a slunečnice',
        'Mák modrý a konopná semínka'
      ];
    } else if (item.id === 'alergen-12') {
      distractors = [
        'Kyselina citronová a kyselina askorbová (vitamin C)',
        'Dusitany a dusičnany v uzeninách (rychlosůl)'
      ];
    } else if (item.id === 'alergen-13') {
      distractors = [
        'Vojtěška, jetel a krmný hrách',
        'Cizrna, fazole mungo a edamame'
      ];
    } else if (item.id === 'alergen-14') {
      distractors = [
        'Krevety, langusty, humři a krabi (korýši – alergen č. 2)',
        'Candát, pstruh, úhoř a losos (ryby – alergen č. 4)'
      ];
    } else {
      distractors = [
        'Pouze vybrané průmyslové polotovary bez čerstvých surovin',
        'Běžná zelenina a ovoce bez alergenního potenciálu'
      ];
    }
    explanation = `Všechny suroviny a zástupci spadající pod ${name}: ${desc}.`;
    return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
  }

  if (cat.id === 'klasicke-koktejly' || cat.id === 'koktejly-fuze' || cat.id === 'aperitivy' || cat.id === 'nealkoholicke-aperitivy-a-koktejly' || cat.id === 'gin-a-tonic') {
    questionText = `Které všechny ingredience a složky obsahuje ${name}?`;
    correct = cleanText(desc);
    
    // Cocktail distractors
    if (item.id === 'negroni') {
      distractors = [
        'Gin, Aperol a suchý bílý vermut',
        'Vodka, Campari a sladký červený vermut'
      ];
    } else if (item.id === 'truffle-negroni') {
      distractors = [
        'Klasický gin, Aperol, kapka lanýžového oleje a soda',
        'Truffle gin, červené víno a angostura bitters'
      ];
    } else if (item.id === 'margarita') {
      distractors = [
        'Tequila, Aperol, pomerančový džus a cukrový sirup',
        'Bílý rum, Cointreau, citronová šťáva a sůl'
      ];
    } else if (item.id === 'mojito') {
      distractors = [
        'Vodka, bazalka, citron, bílý cukr a tonik',
        'Tmavý rum, máta, limetový sirup a zázvorové pivo'
      ];
    } else if (item.id === 'aperol-spritz') {
      distractors = [
        'Campari, bílé tiché víno, soda a plátek citronu',
        'Aperol, tonik, prosecco a snítka rozmarýnu'
      ];
    } else if (item.id === 'hugo-spritz') {
      distractors = [
        'Prosecco, jablečný likér, okurka a soda',
        'Bílé víno, bezinkový sirup, pomeranč a perlivá voda'
      ];
    } else if (item.id === 'mimosa') {
      distractors = [
        'Prosecco, grepový fresh a grenadina',
        'Cava, jablečný mošt a skořicový sirup'
      ];
    } else if (item.id === 'espresso-martini') {
      distractors = [
        'Rum, kávová sedlina, smetana a karamelový sirup',
        'Gin, espresso, Baileys a čokoládový likér'
      ];
    } else if (item.id === 'old-fashioned') {
      distractors = [
        'Koňak, medový sirup, pomerančový likér a soda',
        'Irská whiskey, třtinový sirup a citronová kůra'
      ];
    } else if (item.id.includes('tonic') || cat.id === 'gin-a-tonic') {
      distractors = [
        'Vodka s běžnou sodovkou a plátkem citronu',
        'Bílý rum s grepovým tonikem a snítkou tymiánu'
      ];
    } else {
      distractors = [
        'Vodka, jablečný džus, cukrový sirup a soda',
        'Bílý rum, ovocné pyré, tonic a plátek limety'
      ];
    }
    explanation = `Kompletní složení a receptura nápoje ${name}: ${desc}.`;
    return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
  }

  if (cat.id === 'nase-domaci-limonady' || cat.id === 'lahvove-limonady') {
    questionText = `Které všechny ingredience a složky tvoří nápoj ${name}?`;
    correct = cleanText(desc);
    distractors = [
      'Pasterovaný průmyslový sirup, syntetická tresť a neperlivá voda',
      'Jablečný koncentrát, citronový sirup, voda a máta'
    ];
    explanation = `Všechny suroviny a složení nápoje ${name}: ${desc}.`;
    return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
  }

  if (cat.id === 'pivo-na-cepu') {
    questionText = `Z jakých hlavních surovin, sladů a chmelů je uvařeno pivo ${name}?`;
    correct = cleanText(desc);
    distractors = [
      'Pšeničný slad, americký chmel Citra, koriandr a svrchní kvasnice',
      'Karamelový slad, pražený ječmen, chmel Saaz a spodní kvasnice'
    ];
    explanation = `Charakteristika a suroviny piva ${name}: ${desc}.`;
    return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
  }

  if (cat.id === 'kombucha') {
    questionText = `Které hlavní ingredience a složky tvoří fermentovaný nápoj ${name}?`;
    correct = cleanText(desc);
    distractors = [
      'Černý čaj sycený CO2 s umělými sladidly a chemickým octem',
      'Jablečný mošt s kvasinkami a citronovou kyselinou'
    ];
    explanation = `Složení nápoje ${name}: ${desc}.`;
    return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
  }

  if (cat.id === 'vody-a-mineralni-vody') {
    questionText = `Jaké specifické vlastnosti a složení má ${name}?`;
    correct = cleanText(desc);
    distractors = [
      'Destilovaná demineralizovaná voda s přidaným oxidem uhličitým',
      'Silně železitá léčivá minerálka s vysokým obsahem síry'
    ];
    explanation = `Složení a charakteristika vody ${name}: ${desc}.`;
    return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
  }

  if (cat.id === 'kava-caj-a-horke-napoje') {
    questionText = `Z jakých surovin a ingrediencí se připravuje nápoj ${name}?`;
    correct = cleanText(desc);
    distractors = [
      'Rozpustná granulovaná káva s horkou vodou ze zásobníku',
      'Standardní směs robusty s kondenzovaným slazeným mlékem'
    ];
    explanation = `Příprava a suroviny nápoje ${name}: ${desc}.`;
    return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
  }

  if (cat.id.includes('vina') || cat.id === 'bublinky') {
    questionText = `Které odrůdy révy, vinařství a charakteristiky definují víno ${name}?`;
    correct = cleanText(desc);
    distractors = [
      'Veltlínské zelené – rodinné vinařství Znojemsko, svěží a pepřnaté',
      'Sauvignon Blanc – suché zemské víno, Mikulovsko, tóny kopřiv a angreštu'
    ];
    explanation = `Odrůdový profil, původ a složení vína ${name}: ${desc}.`;
    return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
  }

  if (cat.id === 'ovocne-destilaty' || cat.id === 'vodky' || cat.id === 'rumy' || cat.id === 'tequily' || cat.id === 'whisky-whiskey-bourbon' || cat.id === 'brandy-a-cognac' || cat.id === 'palenky-a-likery') {
    questionText = `Z jaké základní suroviny, destilátu a zrání je vyroben nápoj ${name}?`;
    correct = cleanText(desc);
    distractors = [
      'Neutrální melasový líh s umělým aromatem bez zrání v sudu',
      'Obilný rektifikovaný destilát z kukuřice a syntetická esence'
    ];
    explanation = `Surovinový základ a výrobní charakteristika destilátu ${name}: ${desc}.`;
    return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
  }

  // Food categories (predkrmy, chutovky, polevky, salaty, sporak, gril, teple-omacky, studene-omacky, prilohy, dezerty)
  questionText = `Které všechny ingredience a složky obsahuje ${name}?`;
  correct = cleanText(desc);

  // Generate realistic culinary distractors
  if (item.id === 'tatarak') {
    correct = 'Hovězí květová špička, cornichons, marinovaná šalotka, pažitka, na hovězím loji opečená topinka, konfitovaný česnek a bramborová sláma';
    distractors = [
      'Hovězí svíčková, sterilované okurky, syrová bílá cibule, hořčice a topinka na rostlinném oleji',
      'Mleté hovězí zadní, nakládané perlové cibulky, petrželka a suchá neopečená bageta'
    ];
  } else if (item.id === 'svickova' || item.id === 'svickova-wellington') {
    distractors = [
      'Hovězí zadní maso, houskový knedlík, kompotované brusinky a plátek citronu',
      'Pečené telecí maso, bramborový knedlík, rybízové želé a zakysaná smetana'
    ];
  } else if (item.id.includes('burger')) {
    distractors = [
      'Klasická sezamová bulka, hovězí krk, plátkový čedar, rajče, ledový salát a kečup',
      'Brioška, trhané vepřové maso, uzený eidam, kyselá okurka a tatarská omáčka'
    ];
  } else if (item.id.includes('kulajda')) {
    distractors = [
      'Klasické vařené brambory, žampiony, vařené slepičí vejce a nasekaný čerstvý kopr',
      'Bramborové pyré, sušené bedly, míchaná vejce a petrželový olej'
    ];
  } else if (item.id.includes('koleno')) {
    distractors = [
      'Uzené vepřové koleno, sladkokyselá zelná obloha a plnotučná hořčice v kelímku',
      'Vařené hovězí koleno s kořenovou zeleninou a čerstvým chlebem'
    ];
  } else if (item.id.includes('rizek')) {
    distractors = [
      'Tenký kuřecí řízek v trojobalu, vařené brambory s máslem a kyselá okurka',
      'Vepřová kýta na přírodno, dušená rýže a broskvový kompot'
    ];
  } else if (item.id.includes('pastrami')) {
    distractors = [
      'Vepřová šunka od kosti, tavený sýr a kyselé okurky v bílém toastovém chlebu',
      'Hovězí roastbeef, čedar a dijonská hořčice v rozpečené bagetě'
    ];
  } else if (item.id.includes('zebra')) {
    distractors = [
      'Vařená uzená žebra, křen, hořčice a sterilovaný feferonkový salát',
      'Pečená hovězí žebra na medu, hranolky a tatarská omáčka'
    ];
  } else if (item.id.includes('kure')) {
    distractors = [
      'Smažené kuřecí paličky v kukuřičné strouhance s česnekovým dipem',
      'Dušené kuřecí čtvrtky na paprice s houskovým knedlíkem'
    ];
  } else if (item.id.includes('omacka')) {
    distractors = [
      'Zahuštěná jíšková omáčka z práškového bujónu s mlékem a hladkou moukou',
      'Rajčatový protlak provařený s kořenovou zeleninou a octem'
    ];
  } else if (item.id.includes('hranolky') || item.id.includes('brambory') || item.id.includes('kase')) {
    distractors = [
      'Mražené předsmažené polotovary s obyčejnou stolní solí',
      'Vařené nové brambory posypané petrželkou a suchým tvarohem'
    ];
  } else if (item.id.includes('chleb') || item.id.includes('brioska')) {
    distractors = [
      'Průmyslově balené bílé pečivo s margarínem',
      'Komerční pšeničný toastový chléb bez kvasu'
    ];
  } else if (item.id.includes('dortik') || item.id.includes('trhanec') || item.id.includes('zmrzlina')) {
    distractors = [
      'Rostlinná šlehačka, pudinkový krém v prášku a umělá ovocná poleva',
      'Piškotový korpus s máslovým krémem a kandovaným ovocem'
    ];
  } else {
    distractors = [
      'Běžný restaurační polotovar s univerzální hnědou omáčkou a sterilovanou zeleninou',
      'Klasická varianta z mražených surovin se syntetickým dochucovadlem'
    ];
  }

  explanation = `Všechny ingredience a složky pokrmu ${name}: ${desc}.`;
  return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
}

// Generate high quality ingredient question for EN item
function getIngredientQuestionEn(item: MenuItem, cat: MenuCategory): Question {
  const qId = `${item.id}-ingredients`;
  const name = item.name;
  const desc = item.description;

  let questionText = `Which ingredients and components does ${name} contain?`;
  let correct = '';
  let distractors: [string, string] = ['', ''];
  let explanation = '';

  if (cat.id === 'alergeny') {
    questionText = `Which foods, ingredients, and derivatives belong to ${name}?`;
    correct = cleanTextEn(desc);
    if (item.id === 'alergen-1') {
      distractors = [
        'Only pure wheat and rye (oats and barley are excluded)',
        'Rice, corn, buckwheat, millet, and quinoa'
      ];
    } else if (item.id === 'alergen-2') {
      distractors = [
        'Squid, octopus, oysters, and mussels (Molluscs Allergen 14)',
        'Salmon, cod, pike perch, and carp (Fish Allergen 4)'
      ];
    } else if (item.id === 'alergen-3') {
      distractors = [
        'Only egg whites (egg yolks do not count as allergens)',
        'Dairy creams, curd cheese, and yogurts (Milk Allergen 7)'
      ];
    } else if (item.id === 'alergen-4') {
      distractors = [
        'Shrimps, prawns, lobsters, and crayfish (Crustaceans Allergen 2)',
        'Mussels, oysters, and octopuses (Molluscs Allergen 14)'
      ];
    } else if (item.id === 'alergen-5') {
      distractors = [
        'Walnuts, hazelnuts, and almonds (Tree nuts Allergen 8)',
        'Sunflower seeds, pumpkin seeds, and poppy seeds'
      ];
    } else if (item.id === 'alergen-7') {
      distractors = [
        'Soy milk, almond milk, and oat drink',
        'Egg yolks, mayonnaise, and tartar sauce (Egg Allergen 3)'
      ];
    } else if (item.id === 'alergen-14') {
      distractors = [
        'Prawns, lobsters, crayfish, and crabs (Crustaceans Allergen 2)',
        'Salmon, trout, and tuna (Fish Allergen 4)'
      ];
    } else {
      distractors = [
        'Only industrial food additives without whole food ingredients',
        'Common fruits and vegetables without regulated allergen potential'
      ];
    }
    explanation = `All foods and ingredients belonging to ${name}: ${desc}.`;
    return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
  }

  if (cat.id === 'klasicke-koktejly' || cat.id === 'koktejly-fuze' || cat.id === 'aperitivy' || cat.id === 'nealkoholicke-aperitivy-a-koktejly' || cat.id === 'gin-a-tonic') {
    questionText = `Which ingredients make up the cocktail ${name}?`;
    correct = cleanTextEn(desc);
    if (item.id === 'negroni') {
      distractors = [
        'Gin, Aperol, and dry white vermouth',
        'Vodka, Campari, and sweet red vermouth'
      ];
    } else if (item.id === 'mojito') {
      distractors = [
        'Vodka, fresh basil, lemon, white sugar, and tonic water',
        'Dark rum, mint, lime syrup, and ginger beer'
      ];
    } else if (item.id === 'margarita') {
      distractors = [
        'Tequila, Aperol, orange juice, and sugar syrup',
        'White rum, Cointreau, lemon juice, and salt rim'
      ];
    } else {
      distractors = [
        'Vodka, apple juice, simple syrup, and soda',
        'White rum, fruit purée, tonic water, and lime wheel'
      ];
    }
    explanation = `Ingredients and recipe of ${name}: ${desc}.`;
    return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
  }

  if (cat.id === 'pivo-na-cepu') {
    questionText = `Which brewing ingredients and profile characterize ${name}?`;
    correct = cleanTextEn(desc);
    distractors = [
      'Wheat malt, Citra hops, coriander, and top-fermenting ale yeast',
      'Roasted barley, caramel malt, Saaz hops, and dark lager yeast'
    ];
    explanation = `Brewing profile and ingredients of ${name}: ${desc}.`;
    return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
  }

  if (cat.id.includes('vina') || cat.id === 'bublinky') {
    questionText = `Which grape variety, winery, and characteristics define ${name}?`;
    correct = cleanTextEn(desc);
    distractors = [
      'Grüner Veltliner – Znojmo sub-region, light, peppery finish',
      'Sauvignon Blanc – Mikulov, crisp acidity with gooseberry notes'
    ];
    explanation = `Origin, grape variety, and characteristics of ${name}: ${desc}.`;
    return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
  }

  if (cat.id === 'ovocne-destilaty' || cat.id === 'vodky' || cat.id === 'rumy' || cat.id === 'tequily' || cat.id === 'whisky-whiskey-bourbon' || cat.id === 'brandy-a-cognac' || cat.id === 'palenky-a-likery') {
    questionText = `What is the source ingredient and production method of ${name}?`;
    correct = cleanTextEn(desc);
    distractors = [
      'Industrial molasses alcohol with artificial flavoring, unaged',
      'Rectified grain neutral spirit from corn with synthetic essence'
    ];
    explanation = `Distillation base and origin of ${name}: ${desc}.`;
    return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
  }

  // Food categories
  questionText = `Which ingredients and components does ${name} contain?`;
  correct = cleanTextEn(desc);
  if (item.id === 'tatarak') {
    correct = 'Beef tip of the sirloin, cornichons, marinated shallots, chives, sourdough toasted on beef lard, confit garlic, and potato straw';
    distractors = [
      'Beef tenderloin, pickled cucumbers, raw white onion, mustard, and toast in vegetable oil',
      'Minced beef shoulder, capers, parsley, and dry toast with raw garlic'
    ];
  } else if (item.id.includes('burger')) {
    distractors = [
      'Standard sesame bun, beef chuck, sliced cheddar, tomato, iceberg lettuce, and ketchup',
      'Brioche bun, pulled pork, smoked gouda, pickled gherkins, and tartar sauce'
    ];
  } else if (item.id.includes('koleno')) {
    distractors = [
      'Smoked pork knuckle, sweet & sour cabbage salad, and yellow mustard cup',
      'Boiled beef shank with root vegetables and sourdough bread'
    ];
  } else if (item.id.includes('rizek')) {
    distractors = [
      'Breaded chicken cutlet, boiled potatoes with melted butter, and pickles',
      'Grilled pork loin, steamed rice, and canned peaches'
    ];
  } else {
    distractors = [
      'Standard commercial pre-made base with brown gravy and canned vegetables',
      'Traditional recipe made with frozen substitutes and synthetic seasonings'
    ];
  }

  explanation = `Complete ingredients and components of ${name}: ${desc}.`;
  return { id: qId, question: questionText, correctAnswer: correct, distractors, explanation };
}

// MAIN RUNNER
console.log('Generating ingredient questions for all items...');

let totalCzUpdated = 0;
for (const cat of MENU_CATEGORIES) {
  for (const item of cat.items) {
    const q = getIngredientQuestionCz(item, cat);
    // Remove if existing
    item.questions = item.questions.filter(existing => existing.id !== q.id);
    // Prepend to questions list so it is tested first!
    item.questions.unshift(q);
    totalCzUpdated++;
  }
}

let totalEnUpdated = 0;
for (const cat of MENU_CATEGORIES_EN) {
  for (const item of cat.items) {
    const q = getIngredientQuestionEn(item, cat);
    item.questions = item.questions.filter(existing => existing.id !== q.id);
    item.questions.unshift(q);
    totalEnUpdated++;
  }
}

console.log(`Updated ${totalCzUpdated} CZ items and ${totalEnUpdated} EN items.`);

// Output files
const menuDataTsContent = `export interface Question {
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

export const TOTAL_ITEMS_COUNT = MENU_CATEGORIES.reduce(
  (acc, cat) => acc + cat.items.length,
  0
);
`;

const menuDataEnTsContent = `import { MenuCategory } from './menuData';

export const MENU_CATEGORIES_EN: MenuCategory[] = ${JSON.stringify(MENU_CATEGORIES_EN, null, 2)};
`;

fs.writeFileSync('/app/applet/src/data/menuData.ts', menuDataTsContent, 'utf8');
fs.writeFileSync('/app/applet/src/data/menuDataEn.ts', menuDataEnTsContent, 'utf8');

console.log('Successfully written menuData.ts and menuDataEn.ts!');
