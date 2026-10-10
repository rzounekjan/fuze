import fs from 'fs';

// Red wines definition for menuData.ts
export const CERVENA_VINA_CATEGORY = {
  id: "cervena-vina",
  name: "Červená vína",
  badge: "Červená vína",
  description: "Výběr lahvových červených vín z Čech, Moravy, Rakouska, Německa a Kalifornie",
  iconName: "Wine",
  items: [
    {
      id: "cervene-pinot-noir-kraus",
      name: "Pinot Noir",
      weight: "0,75L",
      price: "425 Kč",
      allergens: ["12"],
      description: "Roučí Malé Kraus – Mělnicko, Čechy",
      notes: "Roučí Malé Kraus – Mělnicko, Čechy. Elegantní tóny třešní, lesního ovoce a jemná tříslovina.",
      questions: [
        {
          id: "cervene-pinot-noir-kraus-vol",
          question: "Jaký je servírovací objem lahve Pinot Noir Roučí Malé Kraus?",
          correctAnswer: "0,75L",
          distractors: ["0,5 l", "1,0 l"],
          explanation: "Servírovací objem lahve je 0,75L."
        },
        {
          id: "cervene-pinot-noir-kraus-prod",
          question: "Které vinařství a z jaké oblasti produkuje tento Pinot Noir?",
          correctAnswer: "Roučí Malé Kraus – Mělnicko, Čechy",
          distractors: ["Vinařství Gotberg – Pálava", "Kolby – Pouzdřany"],
          explanation: "Víno pochází z vinařství Roučí Malé Kraus na Mělnicku v Čechách."
        },
        {
          id: "cervene-pinot-noir-kraus-price",
          question: "Jaká je prodejní cena lahve Pinot Noir Roučí Malé Kraus?",
          correctAnswer: "425 Kč",
          distractors: ["495 Kč", "380 Kč"],
          explanation: "Cena lahve Pinot Noir Roučí Malé Kraus je 425 Kč."
        },
        {
          id: "cervene-pinot-noir-kraus-allergen",
          question: "Který alergen obsahuje Pinot Noir Roučí Malé Kraus?",
          correctAnswer: "Alergen č. 12 – Oxid siřičitý a siřičitany",
          distractors: ["Alergen č. 1 – Lepek", "Alergen č. 7 – Mléko"],
          explanation: "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
        }
      ]
    },
    {
      id: "cervene-dornfelder-bilkovi",
      name: "Dornfelder",
      weight: "0,75L",
      price: "419 Kč",
      allergens: ["12"],
      description: "Bílkovi – Velkopavlovicko, Morava",
      notes: "Bílkovi – Velkopavlovicko, Morava. Tmavá granátová barva, aroma zralých ostružin, černého rybízu a povidel, sametová chuť.",
      questions: [
        {
          id: "cervene-dornfelder-bilkovi-vol",
          question: "Jaký je servírovací objem lahve Dornfelder od Bílkových?",
          correctAnswer: "0,75L",
          distractors: ["0,5 l", "1,0 l"],
          explanation: "Servírovací objem položky Dornfelder je 0,75L."
        },
        {
          id: "cervene-dornfelder-bilkovi-prod",
          question: "Které vinařství a z jaké moravské podoblasti produkuje tento Dornfelder?",
          correctAnswer: "Bílkovi – Velkopavlovicko, Morava",
          distractors: ["Reisten – Mikulovsko", "Sůkal – Slovácko"],
          explanation: "Dornfelder produkuje rodinné vinařství Bílkovi z Velkopavlovicka na Moravě."
        },
        {
          id: "cervene-dornfelder-bilkovi-price",
          question: "Jaká je prodejní cena lahve Dornfelder Bílkovi?",
          correctAnswer: "419 Kč",
          distractors: ["469 Kč", "379 Kč"],
          explanation: "Cena lahve Dornfelder od Bílkových je 419 Kč."
        },
        {
          id: "cervene-dornfelder-bilkovi-allergen",
          question: "Který alergen obsahuje Dornfelder Bílkovi?",
          correctAnswer: "Alergen č. 12 – Oxid siřičitý a siřičitany",
          distractors: ["Alergen č. 6 – Sója", "Alergen č. 3 – Vejce"],
          explanation: "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
        }
      ]
    },
    {
      id: "cervene-cuvee-red-kolby",
      name: "Cuvée Red",
      weight: "0,75L",
      price: "649 Kč",
      allergens: ["12"],
      description: "(Cabernet Sauvignon, Merlot) Kolby – Mikulovsko, Morava",
      notes: "(Cabernet Sauvignon, Merlot) Kolby – Mikulovsko, Morava. Harmonická kupáž s tóny tmavého lesního ovoce, čokolády a ušlechtilého dřeva.",
      questions: [
        {
          id: "cervene-cuvee-red-kolby-vol",
          question: "Jaký je servírovací objem položky Cuvée Red Kolby?",
          correctAnswer: "0,75L",
          distractors: ["0,5 l", "1,0 l"],
          explanation: "Servírovací objem lahve Cuvée Red Kolby je 0,75L."
        },
        {
          id: "cervene-cuvee-red-kolby-grapes",
          question: "Ze kterých dvou odrůd je složeno víno Cuvée Red Kolby?",
          correctAnswer: "Cabernet Sauvignon a Merlot",
          distractors: ["Frankovka a Zweigelt", "Pinot Noir a Dornfelder"],
          explanation: "Cuvée Red z vinařství Kolby je kupáží odrůd Cabernet Sauvignon a Merlot."
        },
        {
          id: "cervene-cuvee-red-kolby-prod",
          question: "Které vinařství z Mikulovska připravuje toto Cuvée Red?",
          correctAnswer: "Kolby – Mikulovsko, Morava",
          distractors: ["Gotberg – Pálava", "Bílkovi – Velkopavlovicko"],
          explanation: "Cuvée Red vyrábí vinařství Kolby v Pouzdřanech na Mikulovsku."
        },
        {
          id: "cervene-cuvee-red-kolby-price",
          question: "Jaká je prodejní cena lahve Cuvée Red Kolby?",
          correctAnswer: "649 Kč",
          distractors: ["599 Kč", "720 Kč"],
          explanation: "Cena lahve Cuvée Red Kolby je 649 Kč."
        },
        {
          id: "cervene-cuvee-red-kolby-allergen",
          question: "Který alergen obsahuje víno Cuvée Red Kolby?",
          correctAnswer: "Alergen č. 12 – Oxid siřičitý a siřičitany",
          distractors: ["Alergen č. 5 – Arašídy", "Alergen č. 1 – Lepek"],
          explanation: "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
        }
      ]
    },
    {
      id: "cervene-nina-cuvee-bilkovi",
      name: "Nina Cuvée",
      weight: "0,75L",
      price: "699 Kč",
      allergens: ["12"],
      description: "(Merlot, Frankovka) Bílkovi – Velkopavlovicko, Morava",
      notes: "(Merlot, Frankovka) Bílkovi – Velkopavlovicko, Morava. Šťavnaté cuvée s tóny zralých třešní, moruší a jemného koření.",
      questions: [
        {
          id: "cervene-nina-cuvee-bilkovi-vol",
          question: "Jaký je servírovací objem lahve Nina Cuvée od Bílkových?",
          correctAnswer: "0,75L",
          distractors: ["0,5 l", "1,0 l"],
          explanation: "Servírovací objem položky Nina Cuvée je 0,75L."
        },
        {
          id: "cervene-nina-cuvee-bilkovi-grapes",
          question: "Jaké dvě odrůdy tvoří kupáž Nina Cuvée od vinařství Bílkovi?",
          correctAnswer: "Merlot a Frankovka",
          distractors: ["Cabernet Sauvignon a Pinot Noir", "Dornfelder a Svatovavřinecké"],
          explanation: "Nina Cuvée je harmonická kupáž odrůd Merlot a Frankovka."
        },
        {
          id: "cervene-nina-cuvee-bilkovi-prod",
          question: "Které vinařství a z jaké oblasti produkuje Nina Cuvée?",
          correctAnswer: "Bílkovi – Velkopavlovicko, Morava",
          distractors: ["Kolby – Mikulovsko", "Kraus – Mělnicko"],
          explanation: "Nina Cuvée pochází z rodinného vinařství Bílkovi na Velkopavlovicku."
        },
        {
          id: "cervene-nina-cuvee-bilkovi-price",
          question: "Jaká je prodejní cena lahve Nina Cuvée Bílkovi?",
          correctAnswer: "699 Kč",
          distractors: ["629 Kč", "789 Kč"],
          explanation: "Cena lahve Nina Cuvée Bílkovi je 699 Kč."
        },
        {
          id: "cervene-nina-cuvee-bilkovi-allergen",
          question: "Který alergen obsahuje víno Nina Cuvée?",
          correctAnswer: "Alergen č. 12 – Oxid siřičitý a siřičitany",
          distractors: ["Alergen č. 7 – Mléko", "Alergen č. 9 – Celer"],
          explanation: "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
        }
      ]
    },
    {
      id: "cervene-zweigelt-feiler-artinger",
      name: "Zweigelt",
      weight: "0,75L",
      price: "660 Kč",
      allergens: ["12"],
      description: "Weingut Feiler-Artinger – Burgenland, Rakousko",
      notes: "Weingut Feiler-Artinger – Burgenland, Rakousko. Klasický rakouský Zweigelt s tóny černých višní, pepře a měkkou tříslovinou.",
      questions: [
        {
          id: "cervene-zweigelt-feiler-artinger-vol",
          question: "Jaký je servírovací objem položky Zweigelt Weingut Feiler-Artinger?",
          correctAnswer: "0,75L",
          distractors: ["0,5 l", "1,0 l"],
          explanation: "Servírovací objem lahve je 0,75L."
        },
        {
          id: "cervene-zweigelt-feiler-artinger-prod",
          question: "Ze které země a regionu pochází vinařství Feiler-Artinger?",
          correctAnswer: "Burgenland, Rakousko",
          distractors: ["Weinviertel, Rakousko", "Pfalz, Německo"],
          explanation: "Weingut Feiler-Artinger sídlí v rakouské vinařské oblasti Burgenland."
        },
        {
          id: "cervene-zweigelt-feiler-artinger-price",
          question: "Jaká je prodejní cena lahve Zweigelt Feiler-Artinger?",
          correctAnswer: "660 Kč",
          distractors: ["590 Kč", "720 Kč"],
          explanation: "Cena lahve Zweigelt Feiler-Artinger je 660 Kč."
        },
        {
          id: "cervene-zweigelt-feiler-artinger-variety",
          question: "O jakou typickou rakouskou odrůdu se jedná u tohoto červeného vína?",
          correctAnswer: "Zweigelt",
          distractors: ["Blaufränkisch", "St. Laurent"],
          explanation: "Jedná se o tradiční odrůdu Zweigelt (Zweigeltrebe)."
        },
        {
          id: "cervene-zweigelt-feiler-artinger-allergen",
          question: "Který alergen obsahuje Zweigelt Feiler-Artinger?",
          correctAnswer: "Alergen č. 12 – Oxid siřičitý a siřičitany",
          distractors: ["Alergen č. 2 – Korýši", "Alergen č. 1 – Lepek"],
          explanation: "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
        }
      ]
    },
    {
      id: "cervene-pinot-noir-kuhn",
      name: "Pinot Noir",
      weight: "0,75L",
      price: "959 Kč",
      allergens: ["12"],
      description: "Tradition Philip Kuhn – Pfalz, Německo",
      notes: "Tradition Philip Kuhn – Pfalz, Německo. Špičkový německý Spätburgunder s tóny divokých malin, kouře, koření a ušlechtilého dřeva.",
      questions: [
        {
          id: "cervene-pinot-noir-kuhn-vol",
          question: "Jaký je servírovací objem lahve německého Pinot Noir Philip Kuhn?",
          correctAnswer: "0,75L",
          distractors: ["0,5 l", "1,0 l"],
          explanation: "Servírovací objem lahve je 0,75L."
        },
        {
          id: "cervene-pinot-noir-kuhn-type",
          question: "Jakou edici / typ představuje tento Pinot Noir od Philipa Kuhna?",
          correctAnswer: "Tradition",
          distractors: ["Reserve", "Grand Cru"],
          explanation: "Pinot Noir od Philipa Kuhna nese označení Tradition."
        },
        {
          id: "cervene-pinot-noir-kuhn-prod",
          question: "Ze které německé oblasti pochází vinař Philip Kuhn?",
          correctAnswer: "Pfalz, Německo",
          distractors: ["Mosel, Německo", "Rheingau, Německo"],
          explanation: "Vinařství Philip Kuhn sídlí v německé oblasti Pfalz."
        },
        {
          id: "cervene-pinot-noir-kuhn-price",
          question: "Jaká je prodejní cena lahve Pinot Noir Tradition Philip Kuhn?",
          correctAnswer: "959 Kč",
          distractors: ["879 Kč", "1090 Kč"],
          explanation: "Cena lahve Pinot Noir Tradition Philip Kuhn je 959 Kč."
        },
        {
          id: "cervene-pinot-noir-kuhn-allergen",
          question: "Který alergen obsahuje Pinot Noir Philip Kuhn?",
          correctAnswer: "Alergen č. 12 – Oxid siřičitý a siřičitany",
          distractors: ["Alergen č. 11 – Sezam", "Alergen č. 4 – Ryby"],
          explanation: "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
        }
      ]
    },
    {
      id: "cervene-cabernet-sauvignon-lapis-luna",
      name: "Cabernet Sauvignon",
      weight: "0,75L",
      price: "789 Kč",
      allergens: ["12"],
      description: "Lapis Luna – Lodi, Kalifornie",
      notes: "Lapis Luna – Lodi, Kalifornie. Výrazný kalifornský Cabernet plný tónů ostružin, vanilky, černého rybízu a dubu s dlouhým závěrem.",
      questions: [
        {
          id: "cervene-cabernet-sauvignon-lapis-luna-vol",
          question: "Jaký je servírovací objem vína Cabernet Sauvignon Lapis Luna?",
          correctAnswer: "0,75L",
          distractors: ["0,5 l", "1,0 l"],
          explanation: "Servírovací objem položky Cabernet Sauvignon Lapis Luna je 0,75L."
        },
        {
          id: "cervene-cabernet-sauvignon-lapis-luna-prod",
          question: "Ze které kalifornské oblasti pochází Cabernet Sauvignon Lapis Luna?",
          correctAnswer: "Lodi, Kalifornie",
          distractors: ["Napa Valley, Kalifornie", "Sonoma, Kalifornie"],
          explanation: "Cabernet Sauvignon od Lapis Luna pochází z oblasti Lodi v Kalifornii."
        },
        {
          id: "cervene-cabernet-sauvignon-lapis-luna-price",
          question: "Jaká je prodejní cena lahve Cabernet Sauvignon Lapis Luna?",
          correctAnswer: "789 Kč",
          distractors: ["729 Kč", "859 Kč"],
          explanation: "Cena lahve Cabernet Sauvignon Lapis Luna je 789 Kč."
        },
        {
          id: "cervene-cabernet-sauvignon-lapis-luna-variety",
          question: "O jakou odrůdu se jedná u tohoto vína od Lapis Luna?",
          correctAnswer: "Cabernet Sauvignon",
          distractors: ["Merlot", "Syrah"],
          explanation: "Jedná se o odrůdu Cabernet Sauvignon."
        },
        {
          id: "cervene-cabernet-sauvignon-lapis-luna-allergen",
          question: "Který alergen obsahuje Cabernet Sauvignon Lapis Luna?",
          correctAnswer: "Alergen č. 12 – Oxid siřičitý a siřičitany",
          distractors: ["Alergen č. 8 – Ořechy", "Alergen č. 6 – Sója"],
          explanation: "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
        }
      ]
    },
    {
      id: "cervene-zinfandel-hendry-ranch",
      name: "Zinfandel",
      weight: "0,75L",
      price: "995 Kč",
      allergens: ["12"],
      description: "Hendry Ranch HRW – Napa Valley, Kalifornie",
      notes: "Hendry Ranch HRW – Napa Valley, Kalifornie. Kultovní kalifornský Zinfandel, mohutné tělo s tóny švestek, skořice, pepře a vanilky.",
      questions: [
        {
          id: "cervene-zinfandel-hendry-ranch-vol",
          question: "Jaký je servírovací objem lahve Zinfandel Hendry Ranch HRW?",
          correctAnswer: "0,75L",
          distractors: ["0,5 l", "1,0 l"],
          explanation: "Servírovací objem lahve Zinfandel Hendry Ranch HRW je 0,75L."
        },
        {
          id: "cervene-zinfandel-hendry-ranch-prod",
          question: "Ze kterého slavného údolí v Kalifornii pochází Hendry Ranch HRW?",
          correctAnswer: "Napa Valley, Kalifornie",
          distractors: ["Lodi, Kalifornie", "Paso Robles, Kalifornie"],
          explanation: "Hendry Ranch HRW sídlí v prestižním údolí Napa Valley v Kalifornii."
        },
        {
          id: "cervene-zinfandel-hendry-ranch-price",
          question: "Jaká je prodejní cena lahve Zinfandel Hendry Ranch HRW?",
          correctAnswer: "995 Kč",
          distractors: ["895 Kč", "1150 Kč"],
          explanation: "Cena lahve Zinfandel Hendry Ranch HRW je 995 Kč."
        },
        {
          id: "cervene-zinfandel-hendry-ranch-variety",
          question: "Jaká typická kalifornská odrůda tvoří toto víno z Hendry Ranch?",
          correctAnswer: "Zinfandel",
          distractors: ["Cabernet Franc", "Malbec"],
          explanation: "Jedná se o vyhlášenou kalifornskou odrůdu Zinfandel."
        },
        {
          id: "cervene-zinfandel-hendry-ranch-allergen",
          question: "Který alergen obsahuje Zinfandel Hendry Ranch HRW?",
          correctAnswer: "Alergen č. 12 – Oxid siřičitý a siřičitany",
          distractors: ["Alergen č. 1 – Lepek", "Alergen č. 7 – Mléko"],
          explanation: "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
        }
      ]
    }
  ]
};

// English category for menuDataEn.ts
export const CERVENA_VINA_CATEGORY_EN = {
  id: "cervena-vina",
  name: "Red wines",
  badge: "Red wines",
  description: "Finest bottled red wines from Bohemia, Moravia, Austria, Germany, and California",
  iconName: "Wine",
  items: [
    {
      id: "cervene-pinot-noir-kraus",
      name: "Pinot Noir",
      weight: "0,75L",
      price: "425 CZK",
      allergens: ["12"],
      description: "Roučí Malé Kraus – Mělnicko, Bohemia",
      notes: "Roučí Malé Kraus – Mělnicko, Bohemia. Elegant cherry notes, wild berry aromas, delicate tannins.",
      questions: [
        {
          id: "cervene-pinot-noir-kraus-vol-en",
          question: "What is the bottle volume of Pinot Noir Roučí Malé Kraus?",
          correctAnswer: "0,75L",
          distractors: ["0.5 l", "1.0 l"],
          explanation: "The bottle volume is 0,75L."
        },
        {
          id: "cervene-pinot-noir-kraus-prod-en",
          question: "Which winery and wine region produces this Pinot Noir?",
          correctAnswer: "Roučí Malé Kraus – Mělnicko, Bohemia",
          distractors: ["Gotberg – Pálava", "Kolby – Pouzdřany"],
          explanation: "It is produced by Roučí Malé Kraus from Mělnicko, Bohemia."
        },
        {
          id: "cervene-pinot-noir-kraus-price-en",
          question: "What is the bottle price of Pinot Noir Roučí Malé Kraus?",
          correctAnswer: "425 CZK",
          distractors: ["495 CZK", "380 CZK"],
          explanation: "The bottle price is 425 CZK."
        },
        {
          id: "cervene-pinot-noir-kraus-allergen-en",
          question: "Which allergen is contained in Pinot Noir Roučí Malé Kraus?",
          correctAnswer: "Allergen No. 12 – Sulphur dioxide and sulphites",
          distractors: ["Allergen No. 1 – Gluten", "Allergen No. 7 – Milk"],
          explanation: "Contains allergen No. 12 (Sulphur dioxide and sulphites)."
        }
      ]
    },
    {
      id: "cervene-dornfelder-bilkovi",
      name: "Dornfelder",
      weight: "0,75L",
      price: "419 CZK",
      allergens: ["12"],
      description: "Bílkovi – Velkopavlovicko, Moravia",
      notes: "Bílkovi – Velkopavlovicko, Moravia. Deep ruby color, rich aroma of ripe blackberries, blackcurrant, and plum butter with silky finish.",
      questions: [
        {
          id: "cervene-dornfelder-bilkovi-vol-en",
          question: "What is the bottle volume of Dornfelder Bílkovi?",
          correctAnswer: "0,75L",
          distractors: ["0.5 l", "1.0 l"],
          explanation: "The bottle volume is 0,75L."
        },
        {
          id: "cervene-dornfelder-bilkovi-prod-en",
          question: "Which winery produces this Dornfelder from Velkopavlovicko?",
          correctAnswer: "Bílkovi – Velkopavlovicko, Moravia",
          distractors: ["Reisten – Mikulovsko", "Sůkal – Slovácko"],
          explanation: "It is produced by family winery Bílkovi from Velkopavlovicko, Moravia."
        },
        {
          id: "cervene-dornfelder-bilkovi-price-en",
          question: "What is the bottle price of Dornfelder Bílkovi?",
          correctAnswer: "419 CZK",
          distractors: ["469 CZK", "379 CZK"],
          explanation: "The bottle price is 419 CZK."
        },
        {
          id: "cervene-dornfelder-bilkovi-allergen-en",
          question: "Which allergen does Dornfelder Bílkovi contain?",
          correctAnswer: "Allergen No. 12 – Sulphur dioxide and sulphites",
          distractors: ["Allergen No. 6 – Soy", "Allergen No. 3 – Eggs"],
          explanation: "Contains allergen No. 12 (Sulphur dioxide and sulphites)."
        }
      ]
    },
    {
      id: "cervene-cuvee-red-kolby",
      name: "Cuvée Red",
      weight: "0,75L",
      price: "649 CZK",
      allergens: ["12"],
      description: "(Cabernet Sauvignon, Merlot) Kolby – Mikulovsko, Moravia",
      notes: "(Cabernet Sauvignon, Merlot) Kolby – Mikulovsko, Moravia. Harmonious blend with dark berries, bittersweet chocolate, and fine oak.",
      questions: [
        {
          id: "cervene-cuvee-red-kolby-vol-en",
          question: "What is the bottle volume of Cuvée Red Kolby?",
          correctAnswer: "0,75L",
          distractors: ["0.5 l", "1.0 l"],
          explanation: "The bottle volume is 0,75L."
        },
        {
          id: "cervene-cuvee-red-kolby-grapes-en",
          question: "Which two grape varieties compose Cuvée Red Kolby?",
          correctAnswer: "Cabernet Sauvignon and Merlot",
          distractors: ["Blaufränkisch and Zweigelt", "Pinot Noir and Dornfelder"],
          explanation: "Cuvée Red Kolby is a blend of Cabernet Sauvignon and Merlot."
        },
        {
          id: "cervene-cuvee-red-kolby-prod-en",
          question: "Which winery produces this Cuvée Red?",
          correctAnswer: "Kolby – Mikulovsko, Moravia",
          distractors: ["Gotberg – Pálava", "Bílkovi – Velkopavlovicko"],
          explanation: "It is produced by winery Kolby from Pouzdřany, Mikulovsko."
        },
        {
          id: "cervene-cuvee-red-kolby-price-en",
          question: "What is the bottle price of Cuvée Red Kolby?",
          correctAnswer: "649 CZK",
          distractors: ["599 CZK", "720 CZK"],
          explanation: "The bottle price is 649 CZK."
        },
        {
          id: "cervene-cuvee-red-kolby-allergen-en",
          question: "Which allergen is contained in Cuvée Red Kolby?",
          correctAnswer: "Allergen No. 12 – Sulphur dioxide and sulphites",
          distractors: ["Allergen No. 5 – Peanuts", "Allergen No. 1 – Gluten"],
          explanation: "Contains allergen No. 12 (Sulphur dioxide and sulphites)."
        }
      ]
    },
    {
      id: "cervene-nina-cuvee-bilkovi",
      name: "Nina Cuvée",
      weight: "0,75L",
      price: "699 CZK",
      allergens: ["12"],
      description: "(Merlot, Frankovka) Bílkovi – Velkopavlovicko, Moravia",
      notes: "(Merlot, Frankovka) Bílkovi – Velkopavlovicko, Moravia. Juicy red blend featuring ripe cherries, mulberries, and subtle spice notes.",
      questions: [
        {
          id: "cervene-nina-cuvee-bilkovi-vol-en",
          question: "What is the bottle volume of Nina Cuvée Bílkovi?",
          correctAnswer: "0,75L",
          distractors: ["0.5 l", "1.0 l"],
          explanation: "The bottle volume is 0,75L."
        },
        {
          id: "cervene-nina-cuvee-bilkovi-grapes-en",
          question: "Which grape varieties are blended in Nina Cuvée Bílkovi?",
          correctAnswer: "Merlot and Frankovka",
          distractors: ["Cabernet Sauvignon and Pinot Noir", "Dornfelder and St. Laurent"],
          explanation: "Nina Cuvée is a blend of Merlot and Frankovka (Blaufränkisch)."
        },
        {
          id: "cervene-nina-cuvee-bilkovi-prod-en",
          question: "Which producer crafts Nina Cuvée?",
          correctAnswer: "Bílkovi – Velkopavlovicko, Moravia",
          distractors: ["Kolby – Mikulovsko", "Kraus – Mělnicko"],
          explanation: "Nina Cuvée is produced by family winery Bílkovi in Velkopavlovicko."
        },
        {
          id: "cervene-nina-cuvee-bilkovi-price-en",
          question: "What is the bottle price of Nina Cuvée Bílkovi?",
          correctAnswer: "699 CZK",
          distractors: ["629 CZK", "789 CZK"],
          explanation: "The bottle price is 699 CZK."
        },
        {
          id: "cervene-nina-cuvee-bilkovi-allergen-en",
          question: "Which allergen is present in Nina Cuvée?",
          correctAnswer: "Allergen No. 12 – Sulphur dioxide and sulphites",
          distractors: ["Allergen No. 7 – Milk", "Allergen No. 9 – Celery"],
          explanation: "Contains allergen No. 12 (Sulphur dioxide and sulphites)."
        }
      ]
    },
    {
      id: "cervene-zweigelt-feiler-artinger",
      name: "Zweigelt",
      weight: "0,75L",
      price: "660 CZK",
      allergens: ["12"],
      description: "Weingut Feiler-Artinger – Burgenland, Austria",
      notes: "Weingut Feiler-Artinger – Burgenland, Austria. Classic Austrian Zweigelt with dark sour cherries, white pepper, and smooth tannins.",
      questions: [
        {
          id: "cervene-zweigelt-feiler-artinger-vol-en",
          question: "What is the bottle volume of Zweigelt Feiler-Artinger?",
          correctAnswer: "0,75L",
          distractors: ["0.5 l", "1.0 l"],
          explanation: "The bottle volume is 0,75L."
        },
        {
          id: "cervene-zweigelt-feiler-artinger-prod-en",
          question: "Which winery and Austrian region produces this Zweigelt?",
          correctAnswer: "Weingut Feiler-Artinger – Burgenland, Austria",
          distractors: ["Weinviertel, Austria", "Pfalz, Germany"],
          explanation: "Weingut Feiler-Artinger is based in Burgenland, Austria."
        },
        {
          id: "cervene-zweigelt-feiler-artinger-price-en",
          question: "What is the bottle price of Zweigelt Feiler-Artinger?",
          correctAnswer: "660 CZK",
          distractors: ["590 CZK", "720 CZK"],
          explanation: "The bottle price is 660 CZK."
        },
        {
          id: "cervene-zweigelt-feiler-artinger-variety-en",
          question: "What traditional Austrian red grape variety is this wine?",
          correctAnswer: "Zweigelt",
          distractors: ["Blaufränkisch", "St. Laurent"],
          explanation: "It is made from the classic Austrian red grape Zweigelt."
        },
        {
          id: "cervene-zweigelt-feiler-artinger-allergen-en",
          question: "Which allergen is in Zweigelt Feiler-Artinger?",
          correctAnswer: "Allergen No. 12 – Sulphur dioxide and sulphites",
          distractors: ["Allergen No. 2 – Crustaceans", "Allergen No. 1 – Gluten"],
          explanation: "Contains allergen No. 12 (Sulphur dioxide and sulphites)."
        }
      ]
    },
    {
      id: "cervene-pinot-noir-kuhn",
      name: "Pinot Noir",
      weight: "0,75L",
      price: "959 CZK",
      allergens: ["12"],
      description: "Tradition Philip Kuhn – Pfalz, Germany",
      notes: "Tradition Philip Kuhn – Pfalz, Germany. Outstanding German Pinot Noir (Spätburgunder) Tradition. Wild raspberries, subtle woodsmoke, and spicy depth.",
      questions: [
        {
          id: "cervene-pinot-noir-kuhn-vol-en",
          question: "What is the bottle volume of Pinot Noir Tradition by Philip Kuhn?",
          correctAnswer: "0,75L",
          distractors: ["0.5 l", "1.0 l"],
          explanation: "The bottle volume is 0,75L."
        },
        {
          id: "cervene-pinot-noir-kuhn-type-en",
          question: "What tier label does this Pinot Noir by Philip Kuhn carry?",
          correctAnswer: "Tradition",
          distractors: ["Reserve", "Grand Cru"],
          explanation: "The wine belongs to Philip Kuhn's Tradition tier."
        },
        {
          id: "cervene-pinot-noir-kuhn-prod-en",
          question: "Which German wine region is Philip Kuhn located in?",
          correctAnswer: "Pfalz, Germany",
          distractors: ["Mosel, Germany", "Rheingau, Germany"],
          explanation: "Philip Kuhn is located in the Pfalz region of Germany."
        },
        {
          id: "cervene-pinot-noir-kuhn-price-en",
          question: "What is the bottle price of Pinot Noir Tradition Philip Kuhn?",
          correctAnswer: "959 CZK",
          distractors: ["879 CZK", "1090 CZK"],
          explanation: "The bottle price is 959 CZK."
        },
        {
          id: "cervene-pinot-noir-kuhn-allergen-en",
          question: "Which allergen is present in Pinot Noir Philip Kuhn?",
          correctAnswer: "Allergen No. 12 – Sulphur dioxide and sulphites",
          distractors: ["Allergen No. 11 – Sesame", "Allergen No. 4 – Fish"],
          explanation: "Contains allergen No. 12 (Sulphur dioxide and sulphites)."
        }
      ]
    },
    {
      id: "cervene-cabernet-sauvignon-lapis-luna",
      name: "Cabernet Sauvignon",
      weight: "0,75L",
      price: "789 CZK",
      allergens: ["12"],
      description: "Lapis Luna – Lodi, California",
      notes: "Lapis Luna – Lodi, California. Rich Californian Cabernet featuring blackcurrant, dark berries, vanilla, and toasted oak with a lingering finish.",
      questions: [
        {
          id: "cervene-cabernet-sauvignon-lapis-luna-vol-en",
          question: "What is the bottle volume of Cabernet Sauvignon Lapis Luna?",
          correctAnswer: "0,75L",
          distractors: ["0.5 l", "1.0 l"],
          explanation: "The bottle volume is 0,75L."
        },
        {
          id: "cervene-cabernet-sauvignon-lapis-luna-prod-en",
          question: "From which California region does Cabernet Sauvignon Lapis Luna originate?",
          correctAnswer: "Lodi, California",
          distractors: ["Napa Valley, California", "Sonoma, California"],
          explanation: "Lapis Luna Cabernet Sauvignon hails from Lodi, California."
        },
        {
          id: "cervene-cabernet-sauvignon-lapis-luna-price-en",
          question: "What is the bottle price of Cabernet Sauvignon Lapis Luna?",
          correctAnswer: "789 CZK",
          distractors: ["729 CZK", "859 CZK"],
          explanation: "The bottle price is 789 CZK."
        },
        {
          id: "cervene-cabernet-sauvignon-lapis-luna-variety-en",
          question: "What famous red grape variety is this wine?",
          correctAnswer: "Cabernet Sauvignon",
          distractors: ["Merlot", "Syrah"],
          explanation: "It is 100% Cabernet Sauvignon."
        },
        {
          id: "cervene-cabernet-sauvignon-lapis-luna-allergen-en",
          question: "Which allergen is in Cabernet Sauvignon Lapis Luna?",
          correctAnswer: "Allergen No. 12 – Sulphur dioxide and sulphites",
          distractors: ["Allergen No. 8 – Nuts", "Allergen No. 6 – Soy"],
          explanation: "Contains allergen No. 12 (Sulphur dioxide and sulphites)."
        }
      ]
    },
    {
      id: "cervene-zinfandel-hendry-ranch",
      name: "Zinfandel",
      weight: "0,75L",
      price: "995 CZK",
      allergens: ["12"],
      description: "Hendry Ranch HRW – Napa Valley, California",
      notes: "Hendry Ranch HRW – Napa Valley, California. Iconic California Zinfandel from Napa Valley with plums, cinnamon, cracked pepper, and vanilla.",
      questions: [
        {
          id: "cervene-zinfandel-hendry-ranch-vol-en",
          question: "What is the bottle volume of Zinfandel Hendry Ranch HRW?",
          correctAnswer: "0,75L",
          distractors: ["0.5 l", "1.0 l"],
          explanation: "The bottle volume is 0,75L."
        },
        {
          id: "cervene-zinfandel-hendry-ranch-prod-en",
          question: "From which premier California valley does Hendry Ranch HRW come?",
          correctAnswer: "Napa Valley, California",
          distractors: ["Lodi, California", "Paso Robles, California"],
          explanation: "Hendry Ranch HRW is located in Napa Valley, California."
        },
        {
          id: "cervene-zinfandel-hendry-ranch-price-en",
          question: "What is the bottle price of Zinfandel Hendry Ranch HRW?",
          correctAnswer: "995 CZK",
          distractors: ["895 CZK", "1150 CZK"],
          explanation: "The bottle price is 995 CZK."
        },
        {
          id: "cervene-zinfandel-hendry-ranch-variety-en",
          question: "What iconic California grape variety is this wine?",
          correctAnswer: "Zinfandel",
          distractors: ["Cabernet Franc", "Malbec"],
          explanation: "This wine is made from California's signature Zinfandel grape."
        },
        {
          id: "cervene-zinfandel-hendry-ranch-allergen-en",
          question: "Which allergen is contained in Zinfandel Hendry Ranch HRW?",
          correctAnswer: "Allergen No. 12 – Sulphur dioxide and sulphites",
          distractors: ["Allergen No. 1 – Gluten", "Allergen No. 7 – Milk"],
          explanation: "Contains allergen No. 12 (Sulphur dioxide and sulphites)."
        }
      ]
    }
  ]
};

// Red wines definition for libraryData.ts
export const RED_WINES_LIBRARY_CZ = [
  {
    id: "cervene-pinot-noir-kraus",
    name: "Pinot Noir Roučí Malé Kraus",
    category: "wine_red",
    categoryName: "Červená vína",
    producer: "Roučí Malé Kraus",
    origin: "Česká republika",
    region: "Mělnicko, Čechy",
    volume: "0,75L",
    abv: "13,0 % obj.",
    price: "425 Kč",
    rawIngredients: "100% Pinot Noir (Rulandské modré).",
    productionProcess: "Klasická macerace na rmutu v otevřených kádích, zrání v dubových sudech na mělnických křídových půdách.",
    flavorProfile: "Elegantní svěží červené víno s tóny zralých třešní, lesních jahod a brusinek, jemná ušlechtilá tříslovina a minerální dochuť.",
    foodPairing: "Výtečné k pečené kachně, telecímu masu, houbovému rizotu a vyzrálým sýrům.",
    staffNotes: "Český Pinot Noir z mělnické oblasti od vinařství Kraus. Skvělá jemnost a pitelnost.",
    tags: ["víno", "červené víno", "Pinot Noir", "Rulandské modré", "Kraus", "Mělník", "Čechy"]
  },
  {
    id: "cervene-dornfelder-bilkovi",
    name: "Dornfelder Bílkovi",
    category: "wine_red",
    categoryName: "Červená vína",
    producer: "Bílkovi",
    origin: "Česká republika",
    region: "Velkopavlovicko, Morava",
    volume: "0,75L",
    abv: "12,5 % obj.",
    price: "419 Kč",
    rawIngredients: "100% Dornfelder.",
    productionProcess: "Řízená fermentace na slupkách pro maximální extrakci barvy a ovocného buketu, zrání v nerezových tancích s dotekem dubu.",
    flavorProfile: "Hluboká granátová barva, intenzivní aroma černého rybízu, ostružin a povidel, sametově plná a hebká chuť.",
    foodPairing: "Ideální ke zvěřině, pečeným tmavým masům, steakům a zrajícím sýrům.",
    staffNotes: "Výrazně ovocný, tmavý Dornfelder z Velkých Bílovic od rodinného vinařství Bílkovi.",
    tags: ["víno", "červené víno", "Dornfelder", "Bílkovi", "Velkopavlovicko", "Morava"]
  },
  {
    id: "cervene-cuvee-red-kolby",
    name: "Cuvée Red Kolby",
    category: "wine_red",
    categoryName: "Červená vína",
    producer: "Kolby",
    origin: "Česká republika",
    region: "Mikulovsko, Morava",
    volume: "0,75L",
    abv: "13,5 % obj.",
    price: "649 Kč",
    rawIngredients: "Kupáž Cabernet Sauvignon a Merlot.",
    productionProcess: "Dlouhá macerace hroznů, fermentace a následné zrání ve francouzských dubových sudech barrique.",
    flavorProfile: "Harmonické a plné víno s tóny cassis, borůvek, hořké čokolády, cedru a jemného koření s pevnou strukturou.",
    foodPairing: "Dokonalé k hovězímu rib-eye steaku, jehněčímu hřbetu a zvěřinovým specialitám.",
    staffNotes: "Vlajkové červené cuvée vinařství Kolby z Pouzdřan spojující sílu Cabernetu a sametovost Merlotu.",
    tags: ["víno", "červené víno", "Cuvée Red", "Cabernet Sauvignon", "Merlot", "Kolby", "Mikulovsko", "Morava"]
  },
  {
    id: "cervene-nina-cuvee-bilkovi",
    name: "Nina Cuvée Bílkovi",
    category: "wine_red",
    categoryName: "Červená vína",
    producer: "Bílkovi",
    origin: "Česká republika",
    region: "Velkopavlovicko, Morava",
    volume: "0,75L",
    abv: "13,0 % obj.",
    price: "699 Kč",
    rawIngredients: "Kupáž Merlot a Frankovka.",
    productionProcess: "Společná macerace a kvašení vybraných hroznů odrůd Merlot a Frankovka, školení v dubových sudech.",
    flavorProfile: "Šťavnatá plná chuť se stopami zralých višní, moruší, švestek a jemně pikantní kořenitosti Frankovky.",
    foodPairing: "Skvěle doplňuje pečenou vepřovou panenku, trhané hovězí maso a burgery.",
    staffNotes: "Exkluzivní cuvée Merlotu a Frankovky věnované dceři Nině od vinařství Bílkovi.",
    tags: ["víno", "červené víno", "Nina Cuvée", "Merlot", "Frankovka", "Bílkovi", "Velkopavlovicko", "Morava"]
  },
  {
    id: "cervene-zweigelt-feiler-artinger",
    name: "Zweigelt Weingut Feiler-Artinger",
    category: "wine_red",
    categoryName: "Červená vína",
    producer: "Weingut Feiler-Artinger",
    origin: "Rakousko",
    region: "Burgenland, Rakousko",
    volume: "0,75L",
    abv: "13,0 % obj.",
    price: "660 Kč",
    rawIngredients: "100% Zweigelt (Zweigeltrebe).",
    productionProcess: "Biodynamické pěstování na březích Neziderského jezera, spontánní kvašení a zrání ve velkých dřevěných sudech.",
    flavorProfile: "Typický rakouský Zweigelt s tóny černých višní, ostružin, jemného bílého pepře a hladkou hedvábnou tříslovinou.",
    foodPairing: "Perfektní k vídeňskému řízku, pečené drůbeži a těstovinám s masovým ragú.",
    staffNotes: "Špičkový rakouský Zweigelt z Rustu v Burgenlandu od prestižního vinařství Feiler-Artinger.",
    tags: ["víno", "červené víno", "Zweigelt", "Feiler-Artinger", "Burgenland", "Rakousko"]
  },
  {
    id: "cervene-pinot-noir-kuhn",
    name: "Pinot Noir Tradition Philip Kuhn",
    category: "wine_red",
    categoryName: "Červená vína",
    producer: "Philip Kuhn",
    origin: "Německo",
    region: "Pfalz, Německo",
    volume: "0,75L",
    abv: "13,5 % obj.",
    price: "959 Kč",
    rawIngredients: "100% Spätburgunder (Pinot Noir).",
    productionProcess: "Vysokohorské vápencové polohy v Laumersheimu, tradiční kvašení v dřevěných kádích a zrání ve francouzských barrique sudech.",
    flavorProfile: "Ušlechtilý komplexní Pinot Noir s aromatem lesních malin, višní, kouře, podrostu a jemného koření s dlouhým minerálním dozvukem.",
    foodPairing: "Výtečný k jehněčím kotletkám, pečenému holouběti a jemným paštikám z kachních jater.",
    staffNotes: "Vyhlášený německý Spätburgunder řady Tradition od předního pfalzského vinaře Philipa Kuhna.",
    tags: ["víno", "červené víno", "Pinot Noir", "Spätburgunder", "Philip Kuhn", "Tradition", "Pfalz", "Německo"]
  },
  {
    id: "cervene-cabernet-sauvignon-lapis-luna",
    name: "Cabernet Sauvignon Lapis Luna",
    category: "wine_red",
    categoryName: "Červená vína",
    producer: "Lapis Luna",
    origin: "USA",
    region: "Lodi, Kalifornie",
    volume: "0,75L",
    abv: "14,0 % obj.",
    price: "789 Kč",
    rawIngredients: "100% Cabernet Sauvignon.",
    productionProcess: "Teplé klima oblasti Lodi, pomalá fermentace a zrání v sudech z amerického a francouzského dubu po dobu 12 měsíců.",
    flavorProfile: "Mohutné, plné a šťavnaté víno s tóny ostružin, zralého černého rybízu, vanilky, kakaa a sladkého dubového koření.",
    foodPairing: "Ideální k hovězím steakům, BBQ žebrům, burgerům a vyzrálému čedaru.",
    staffNotes: "Populární kalifornský Cabernet Sauvignon z Lodi se stylovou etiketou a bohatým sametovým tělem.",
    tags: ["víno", "červené víno", "Cabernet Sauvignon", "Lapis Luna", "Lodi", "Kalifornie", "USA"]
  },
  {
    id: "cervene-zinfandel-hendry-ranch",
    name: "Zinfandel Hendry Ranch HRW",
    category: "wine_red",
    categoryName: "Červená vína",
    producer: "Hendry Ranch HRW",
    origin: "USA",
    region: "Napa Valley, Kalifornie",
    volume: "0,75L",
    abv: "14,8 % obj.",
    price: "995 Kč",
    rawIngredients: "100% Zinfandel.",
    productionProcess: "Staré keře na vinicích Hendry Ranch na úpatí pohoří Mayacamas v Napa Valley, zrání v sudech z francouzského dubu.",
    flavorProfile: "Ikonické robustní víno s vrstvami přezrálých švestek, sušených fíků, čerstvě mletého pepře, vanilky a hořké čokolády.",
    foodPairing: "Dokonalé k pečenému hovězímu hrudí, zvěřinovému guláši a vyzrálým intenzivním sýrům.",
    staffNotes: "Prvotřídní kalifornský Zinfandel z prestižního Napa Valley od legendárního vinařství Hendry Ranch.",
    tags: ["víno", "červené víno", "Zinfandel", "Hendry Ranch", "HRW", "Napa Valley", "Kalifornie", "USA"]
  }
];

// English library items
export const RED_WINES_LIBRARY_EN = [
  {
    id: "cervene-pinot-noir-kraus",
    name: "Pinot Noir Roučí Malé Kraus",
    category: "wine_red",
    categoryName: "Red Wines",
    producer: "Roučí Malé Kraus",
    origin: "Czech Republic",
    region: "Mělnicko, Bohemia",
    volume: "0,75L",
    abv: "13.0 % vol.",
    price: "425 CZK",
    rawIngredients: "100% Pinot Noir (Rulandské modré).",
    productionProcess: "Traditional open-vat maceration, aging in oak barrels on Bohemian limestone soils.",
    flavorProfile: "Elegant fresh red wine with ripe cherries, wild strawberries, cranberries, fine tannins, and a mineral finish.",
    foodPairing: "Superb with roast duck, veal, mushroom risotto, and mature cheeses.",
    staffNotes: "Fine Bohemian Pinot Noir from Mělník by Kraus winery with admirable balance and drinkability.",
    tags: ["wine", "red wine", "Pinot Noir", "Kraus", "Mělník", "Bohemia", "Czech Republic"]
  },
  {
    id: "cervene-dornfelder-bilkovi",
    name: "Dornfelder Bílkovi",
    category: "wine_red",
    categoryName: "Red Wines",
    producer: "Bílkovi",
    origin: "Czech Republic",
    region: "Velkopavlovicko, Moravia",
    volume: "0,75L",
    abv: "12.5 % vol.",
    price: "419 CZK",
    rawIngredients: "100% Dornfelder.",
    productionProcess: "Controlled skin fermentation for rich color and aromatic fruit extraction, aged in stainless steel with subtle oak contact.",
    flavorProfile: "Deep garnet hue, intense aromas of blackcurrant, blackberries, and plum jam, velvety smooth and lush mouthfeel.",
    foodPairing: "Great with venison, roast game, grilled beef steaks, and aged cheeses.",
    staffNotes: "Deeply fruit-forward Moravian Dornfelder from family estate Bílkovi in Velké Bílovice.",
    tags: ["wine", "red wine", "Dornfelder", "Bílkovi", "Velkopavlovicko", "Moravia", "Czech Republic"]
  },
  {
    id: "cervene-cuvee-red-kolby",
    name: "Cuvée Red Kolby",
    category: "wine_red",
    categoryName: "Red Wines",
    producer: "Kolby",
    origin: "Czech Republic",
    region: "Mikulovsko, Moravia",
    volume: "0,75L",
    abv: "13.5 % vol.",
    price: "649 CZK",
    rawIngredients: "Blend of Cabernet Sauvignon and Merlot.",
    productionProcess: "Extended skin maceration followed by aging in French barrique oak barrels.",
    flavorProfile: "Full and harmonious red blend with notes of cassis, blueberries, dark chocolate, cedarwood, and refined tannins.",
    foodPairing: "Exceptional with grilled rib-eye steak, rack of lamb, and roasted game meats.",
    staffNotes: "Flagship red blend from Kolby winery combining Cabernet structure and Merlot plushness.",
    tags: ["wine", "red wine", "Cuvée Red", "Cabernet Sauvignon", "Merlot", "Kolby", "Mikulovsko", "Moravia"]
  },
  {
    id: "cervene-nina-cuvee-bilkovi",
    name: "Nina Cuvée Bílkovi",
    category: "wine_red",
    categoryName: "Red Wines",
    producer: "Bílkovi",
    origin: "Czech Republic",
    region: "Velkopavlovicko, Moravia",
    volume: "0,75L",
    abv: "13.0 % vol.",
    price: "699 CZK",
    rawIngredients: "Blend of Merlot and Frankovka (Blaufränkisch).",
    productionProcess: "Co-fermentation of carefully selected Merlot and Blaufränkisch grapes, matured in seasoned oak casks.",
    flavorProfile: "Juicy, full-flavored palate packed with ripe cherries, mulberries, and a spicy kick of Frankovka.",
    foodPairing: "Complements roast pork tenderloin, pulled beef, and gourmet burgers.",
    staffNotes: "Special cuvée dedicated to daughter Nina crafted by Bílkovi winery.",
    tags: ["wine", "red wine", "Nina Cuvée", "Merlot", "Frankovka", "Bílkovi", "Velkopavlovicko", "Moravia"]
  },
  {
    id: "cervene-zweigelt-feiler-artinger",
    name: "Zweigelt Weingut Feiler-Artinger",
    category: "wine_red",
    categoryName: "Red Wines",
    producer: "Weingut Feiler-Artinger",
    origin: "Austria",
    region: "Burgenland, Austria",
    volume: "0,75L",
    abv: "13.0 % vol.",
    price: "660 CZK",
    rawIngredients: "100% Zweigelt.",
    productionProcess: "Biodynamically farmed near Lake Neusiedl, spontaneous fermentation, matured in large wooden casks.",
    flavorProfile: "Quintessential Austrian Zweigelt bursting with tart sour cherries, wild berries, white pepper, and silky tannins.",
    foodPairing: "Matches Wiener Schnitzel, roasted poultry, and rich pasta with ragù.",
    staffNotes: "Benchmark Austrian Zweigelt from Rust in Burgenland by acclaimed producer Feiler-Artinger.",
    tags: ["wine", "red wine", "Zweigelt", "Feiler-Artinger", "Burgenland", "Austria"]
  },
  {
    id: "cervene-pinot-noir-kuhn",
    name: "Pinot Noir Tradition Philip Kuhn",
    category: "wine_red",
    categoryName: "Red Wines",
    producer: "Philip Kuhn",
    origin: "Germany",
    region: "Pfalz, Germany",
    volume: "0,75L",
    abv: "13.5 % vol.",
    price: "959 CZK",
    rawIngredients: "100% Spätburgunder (Pinot Noir).",
    productionProcess: "Limestone soils in Laumersheim, traditional wooden cask fermentation, aged in French barriques.",
    flavorProfile: "Noble, complex Pinot Noir with wild raspberries, dark cherries, subtle smoke, forest floor, and a long mineral finish.",
    foodPairing: "Superb with lamb chops, roast squab, and rich duck liver pâté.",
    staffNotes: "Celebrated German Spätburgunder Tradition by Pfalz master Philip Kuhn.",
    tags: ["wine", "red wine", "Pinot Noir", "Spätburgunder", "Philip Kuhn", "Tradition", "Pfalz", "Germany"]
  },
  {
    id: "cervene-cabernet-sauvignon-lapis-luna",
    name: "Cabernet Sauvignon Lapis Luna",
    category: "wine_red",
    categoryName: "Red Wines",
    producer: "Lapis Luna",
    origin: "USA",
    region: "Lodi, California",
    volume: "0,75L",
    abv: "14.0 % vol.",
    price: "789 CZK",
    rawIngredients: "100% Cabernet Sauvignon.",
    productionProcess: "Sun-drenched Lodi fruit, steady temperature fermentation, aged 12 months in French and American oak.",
    flavorProfile: "Lush California Cabernet featuring blackberries, cassis, vanilla cream, cocoa, and sweet toasted oak.",
    foodPairing: "Great with prime rib-eye steak, barbecue ribs, and sharp cheddar.",
    staffNotes: "Crowd-pleasing California Cabernet from Lodi with eye-catching label and velvety texture.",
    tags: ["wine", "red wine", "Cabernet Sauvignon", "Lapis Luna", "Lodi", "California", "USA"]
  },
  {
    id: "cervene-zinfandel-hendry-ranch",
    name: "Zinfandel Hendry Ranch HRW",
    category: "wine_red",
    categoryName: "Red Wines",
    producer: "Hendry Ranch HRW",
    origin: "USA",
    region: "Napa Valley, California",
    volume: "0,75L",
    abv: "14.8 % vol.",
    price: "995 CZK",
    rawIngredients: "100% Zinfandel.",
    productionProcess: "Old-vine blocks at the foot of Mount Veeder in Napa Valley, aged in fine French oak casks.",
    flavorProfile: "Monumental California Zinfandel packed with dark plums, dried figs, cracked black pepper, vanilla, and dark chocolate.",
    foodPairing: "Outstanding with slow-smoked beef brisket, venison stew, and sharp artisanal cheeses.",
    staffNotes: "Benchmark Napa Valley Zinfandel from historic Hendry Ranch with magnificent concentration.",
    tags: ["wine", "red wine", "Zinfandel", "Hendry Ranch", "HRW", "Napa Valley", "California", "USA"]
  }
];
