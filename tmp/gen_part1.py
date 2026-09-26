import json

# Drink categories generator
drinks_categories = [
  {
    "id": "pivo-na-cepu",
    "name": "pivo na čepu",
    "badge": "Čepované pivo",
    "description": "Řemeslná nepasterizovaná a nefiltrovaná piva vařená sládkem Alešem Paikem a týmem v pivovaru FUZE",
    "iconName": "Beer",
    "items": [
      {
        "id": "transfuze-12",
        "name": "TransFUZE 12",
        "price": "59 / 69 Kč",
        "weight": "0,3l / 0,5l",
        "allergens": ["1"],
        "description": "Náš tradiční ležák plzeňského typu, plné svěží chuti a vyvážené hořkosti, nepasterizovaný, nefiltrovaný, čepujeme na hladinku",
        "questions": [
          {
            "id": "transfuze-q1",
            "question": "O jaký pivní styl se jedná u TransFUZE 12 a jak je ošetřen?",
            "correctAnswer": "Tradiční ležák plzeňského typu, nepasterizovaný a nefiltrovaný",
            "distractors": ["Svrchně kvašený Ale, filtrovaný", "Vídeňský ležák, pasterizovaný"],
            "explanation": "TransFUZE 12 je vlajkový tradiční světlý ležák plzeňského typu bez pasterizace a filtrace."
          },
          {
            "id": "transfuze-q2",
            "question": "Jakým způsobem se TransFUZE 12 standardně čepuje?",
            "correctAnswer": "Na hladinku s hustou krémovou pěnou",
            "distractors": ["Na dvakrát s vysokou suchou čepicí", "Výhradně na šnyt do malého skla"],
            "explanation": "TransFUZE se čepuje jedním tahem na hladinku pro zachování ideálního řízu a jemné krémové pěny."
          }
        ]
      },
      {
        "id": "disfuze-10",
        "name": "DisFUZE 10",
        "price": "59 / 69 Kč",
        "weight": "0,3l / 0,5l",
        "allergens": ["1"],
        "description": "Světlé výčepní pivo, Abv 3,5 %, česká klasika, poctivá desítka, velmi pitelné osvěžující pivo s vyšší hořkostí",
        "questions": [
          {
            "id": "disfuze-q1",
            "question": "Jakou stupňovitost a obsah alkoholu (Abv) má pivo DisFUZE?",
            "correctAnswer": "10° světlé výčepní s obsahem alkoholu 3,5 %",
            "distractors": ["11° světlý ležák s obsahem 4,5 %", "10° tmavé výčepní s obsahem 4,1 %"],
            "explanation": "DisFUZE 10 je lehké a velmi pitelné světlé výčepní pivo s 3,5 % objemu alkoholu."
          }
        ]
      },
      {
        "id": "infuze-ipa-12",
        "name": "InFUZE IPA 12",
        "price": "85 Kč",
        "weight": "0,4l",
        "allergens": ["1"],
        "description": "Styl Session IPA, 12 stupňové pivo, 4,9 % obj alk, svrchně kvašené pivo, lehké osvěžující, nepasterizované, nefiltrované s citrusovým aroma, chmeleno za studena",
        "questions": [
          {
            "id": "infuze-q1",
            "question": "O jaký pivní styl se jedná a jakým způsobem je docíleno citrusové aroma?",
            "correctAnswer": "Session IPA chmelená za studena (dry hopping)",
            "distractors": ["Double IPA s přídavkem pomerančové kůry", "Bavorský Bock kvašený v dřevěných sudech"],
            "explanation": "InFUZE IPA 12 je Session IPA chmelená za studena pro maximální svěží citrusové aroma."
          }
        ]
      },
      {
        "id": "fuzenac-13",
        "name": "FUZEnáč 13 polotmavý",
        "price": "69 / 78 Kč",
        "weight": "0,3l / 0,5l",
        "allergens": ["1"],
        "description": "Naše spodně kvašené pivo jantarové barvy a výrazně kouřového aroma, plná sladová uzená chuť. Nepasterizovaný, nefiltrovaný",
        "questions": [
          {
            "id": "fuzenac-q1",
            "question": "Jakou barvu a specifický chuťový charakter má pivo FUZEnáč 13?",
            "correctAnswer": "Jantarová barva s výrazně kouřovým aroma a uzenou sladovou chutí",
            "distractors": ["Tmavě černá barva s kávovo-čokoládovým profilem", "Zlatožlutá barva s květinovou hořkostí"],
            "explanation": "FUZEnáč 13 je spodně kvašený polotmavý speciál nakuřovaný bukovým dřevem s uzenou chutí."
          }
        ]
      },
      {
        "id": "kasteel-rouge-18",
        "name": "Kasteel Rouge 18",
        "price": "118 Kč",
        "weight": "0,25l",
        "allergens": ["1"],
        "description": "Svrchně kvašené, 8% tmavé pivo 6 měsíců zrající na višních, z belgického pivovaru Van Honsebrouck, s nádhernou chutí a plnou vůní zralých višní",
        "questions": [
          {
            "id": "kasteel-q1",
            "question": "Z jaké země pochází a jak dlouho zraje speciál Kasteel Rouge na višních?",
            "correctAnswer": "Belgie (pivovar Van Honsebrouck), zraje 6 měsíců na višních",
            "distractors": ["Německo (Bavorsko), zraje 3 měsíce na třešních", "Francie (Alsasko), zraje 12 měsíců na černém rybízu"],
            "explanation": "Kasteel Rouge pochází z belgického pivovaru Van Honsebrouck a celých 6 měsíců zraje na pravých višních."
          }
        ]
      },
      {
        "id": "zichovec-passion-fruit",
        "name": "Zichovec Passion Fruit 12",
        "price": "94 Kč",
        "weight": "0,4l",
        "allergens": ["1"],
        "description": "Sour Ale, celoroční kyseláč opravdu výrazné kyselosti a intenzivní marakujové vůně a chuti",
        "questions": [
          {
            "id": "zichovec-q1",
            "question": "K jakému pivnímu stylu a ovocnému profilu patří Zichovec Passion Fruit 12?",
            "correctAnswer": "Sour Ale (kyseláč) s marakujou (passion fruit)",
            "distractors": ["Wheat Ale (pšeničné) s mangem a banánem", "Fruit Porter s ostružinami"],
            "explanation": "Jedná se o Sour Ale – moderní svrchně kvašený kyseláč infuzovaný pravou marakujou."
          }
        ]
      },
      {
        "id": "degustace-piv",
        "name": "Degustace piv",
        "price": "285 Kč",
        "weight": "6x 0,15l",
        "allergens": ["1"],
        "description": "6 vzorků piv z aktuální nabídky na stylovém prkýnku",
        "questions": [
          {
            "id": "degustace-q1",
            "question": "Kolik vzorků a o jakém objemu obsahuje degustační prkýnko piv?",
            "correctAnswer": "6 vzorků o objemu 0,15 l",
            "distractors": ["4 vzorky o objemu 0,2 l", "5 vzorků o objemu 0,1 l"],
            "explanation": "Degustace obsahuje 6 degustačních skleniček o objemu 0,15 l."
          }
        ]
      },
      {
        "id": "fuzero-nealko",
        "name": "FUZEro (nealko)",
        "price": "69 Kč",
        "weight": "0,4l",
        "allergens": ["1"],
        "description": "Náš IPL, nealko ležák chmelený americkým a za studena novozélandským chmelem, s jemnou sladovou chutí, vyšší hořkostí v závěru a svěží vůní, nepasterizovaný, nefiltrovaný",
        "questions": [
          {
            "id": "fuzero-q1",
            "question": "Jaký pivní typ představuje FUZEro a jakými chmely je chmeleno?",
            "correctAnswer": "Nealkoholický IPL chmelený americkým a za studena novozélandským chmelem",
            "distractors": ["Klasický český nealko ležák chmelený pouze Žateckým poloraným červeňákem", "Nealkoholický stout s praženým ječmenem"],
            "explanation": "FUZEro je India Pale Lager (IPL) v nealko verzi s aromatickými americkými a novozélandskými chmely."
          }
        ]
      },
      {
        "id": "maisels-weisse",
        "name": "Maisel´s Weisse Alkoholfrei",
        "price": "79 Kč",
        "weight": "0,33l (lahvové)",
        "allergens": ["1"],
        "description": "Bavorský Weizenbier, tedy pšenice v nealkoholické podobě z bavorského rodinného pivovaru",
        "questions": [
          {
            "id": "maisels-q1",
            "question": "O jaký typ nealkoholického piva se v případě Maisel's Weisse jedná?",
            "correctAnswer": "Bavorské pšeničné pivo (Weizenbier)",
            "distractors": ["Irský nealko stout", "Český světlý filtrovaný ležák"],
            "explanation": "Maisel's Weisse je tradiční nealkoholické bavorské pšeničné pivo s typickými tóny banánů a hřebíčku."
          }
        ]
      },
      {
        "id": "opre-cider",
        "name": "Opre' Cider",
        "price": "89 Kč",
        "weight": "0,33l",
        "description": "Řemeslný jablečný cider ze slovenské rodinné farmy, přírodně kvašený",
        "questions": [
          {
            "id": "opre-q1",
            "question": "Odkud pochází řemeslný jablečný cider Opre'?",
            "correctAnswer": "Ze slovenské rodinné farmy",
            "distractors": ["Z jižní Moravy", "Z francouzské Normandie"],
            "explanation": "Opre' je poctivý řemeslný cider ze Slovenska."
          }
        ]
      },
      {
        "id": "opre-sour-cherry",
        "name": "Opre' Sour Cherry",
        "price": "96 Kč",
        "weight": "0,33l",
        "description": "Cider, který v sobě spojuje chuť jablečného cidru a osvěžující višňové šťávy",
        "questions": [
          {
            "id": "opre-cherry-q1",
            "question": "Jakou ovocnou šťávou je ochucen Opre' Sour Cherry?",
            "correctAnswer": "Čerstvou višňovou šťávou",
            "distractors": ["Malinovou šťávou", "Šťávou z černého rybízu"],
            "explanation": "Opre' Sour Cherry kombinuje jablečný mošt a přírodní višňovou šťávu."
          }
        ]
      }
    ]
  },
  {
    "id": "kombucha",
    "name": "kombucha",
    "badge": "Kombucha",
    "description": "Přírodní fermentované probiotické čaje plné živých kultur, antioxidantů a osvěžení",
    "iconName": "Sparkles",
    "items": [
      {
        "id": "loklok-original",
        "name": "Loklok Kombucha Original",
        "price": "95 Kč",
        "weight": "0,33l",
        "description": "Řemeslná kombucha s dlouhou 6měsíční fermentací, ceylonský čaj, citronová tráva a kapka citronové šťávy. Bez alkoholu a bohatá na probiotika Bacillus coagulans",
        "questions": [
          {
            "id": "loklok-orig-q1",
            "question": "Jak dlouho probíhá fermentace u prémiové české kombuchy Loklok?",
            "correctAnswer": "Přibližně 6 měsíců pomalé řízené fermentace",
            "distractors": ["7 až 10 dní", "3 týdny"],
            "explanation": "Loklok zraje výjimečně dlouho – přibližně 6 měsíců, což vytváří vyváženou chuť bez octovosti."
          }
        ]
      },
      {
        "id": "loklok-zazvor",
        "name": "Loklok Kombucha Zázvor",
        "price": "95 Kč",
        "weight": "0,33l",
        "description": "Přírodní nefiltrovaná fermentovaná kombucha s pikantním nálevem čerstvého kořene zázvoru",
        "questions": [
          {
            "id": "loklok-zaz-q1",
            "question": "Čím je dochucena zázvorová varianta Loklok kombuchy?",
            "correctAnswer": "Čerstvou šťávou a nálevem ze zázvoru",
            "distractors": ["Zázvorovým aroma a chilli", "Kandovaným zázvorem s medem"],
            "explanation": "Používá se pravá šťáva a výluh z čerstvého kořene zázvoru."
          }
        ]
      },
      {
        "id": "loklok-malina",
        "name": "Loklok Kombucha Malina",
        "price": "95 Kč",
        "weight": "0,33l",
        "description": "Jemně perlivá kombucha macerovaná se zralými malinami, osvěžující ovocná chuť s probiotickými kulturami",
        "questions": [
          {
            "id": "loklok-mal-q1",
            "question": "Jaký chuťový profil charakterizuje malinovou kombuchu Loklok?",
            "correctAnswer": "Ovocně svěží chuť se zralými malinami a jemným přírodním perlením",
            "distractors": ["Těžká sladká sirupovitá chuť", "Výrazně trpká chuť s tóny octa"],
            "explanation": "Díky dlouhé fermentaci a pravým malinám má drink lehkou svěží chuť s přírodním perlením."
          }
        ]
      },
      {
        "id": "jzt-kombucha",
        "name": "JZT Kombucha Sencha & Assam",
        "price": "98 Kč",
        "weight": "0,33l",
        "description": "Živá, nepasterizovaná a nefiltrovaná kombucha z prémiových čajů Sencha a Assam od pražských fermentačních mistrů JZT",
        "questions": [
          {
            "id": "jzt-q1",
            "question": "Z jakých výběrových čajů je uvařen základ pro JZT Kombuchu?",
            "correctAnswer": "Zelený čaj Sencha a černý čaj Assam",
            "distractors": ["Bílý čaj Pai Mu Tan a Darjeeling", "Matcha a Rooibos"],
            "explanation": "Základ tvoří vyvážený blend japonského zeleného čaje Sencha a indického černého čaje Assam."
          }
        ]
      }
    ]
  },
  {
    "id": "vody-a-mineralni-vody",
    "name": "vody a minerální vody",
    "badge": "Vody",
    "description": "Prémiové filtrované, infuzované a přírodní minerální vody",
    "iconName": "GlassWater",
    "items": [
      {
        "id": "filtrovana-karafa",
        "name": "Filtrovaná voda v karafě",
        "price": "89 Kč",
        "weight": "0,75l",
        "description": "Mikrofiltrovaná voda FUZE podávaná v designové karafě, neperlivá nebo perlivá",
        "questions": [
          {
            "id": "karafa-q1",
            "question": "V jakých variantách nasycení je nabízena filtrovaná voda v karafě 0,75 l?",
            "correctAnswer": "Neperlivá i perlivá",
            "distractors": ["Výhradně jemně perlivá", "Pouze neperlivá"],
            "explanation": "Host si může zvolit filtrovanou vodu neperlivou nebo perlivou."
          }
        ]
      },
      {
        "id": "filtrovana-sklenice",
        "name": "Sklenice filtrované vody",
        "price": "35 Kč",
        "weight": "0,3l",
        "description": "Čerstvá mikrofiltrovaná voda, neperlivá nebo perlivá",
        "questions": [
          {
            "id": "sklenice-q1",
            "question": "Jaký objem má sklenice filtrované vody?",
            "correctAnswer": "0,3 l",
            "distractors": ["0,2 l", "0,4 l"],
            "explanation": "Sklenice filtrované vody se servíruje v objemu 0,3 l."
          }
        ]
      },
      {
        "id": "infuzovana-voda",
        "name": "Infuzovaná voda v karafě",
        "price": "99 Kč",
        "weight": "0,75l",
        "description": "Filtrovaná voda v karafě s čerstvými plátky citrusů nebo snítkami máty",
        "questions": [
          {
            "id": "infuz-q1",
            "question": "Čím je infuzována voda v karafě 0,75 l?",
            "correctAnswer": "Citrusy nebo čerstvou mátou",
            "distractors": ["Okurkou a rozmarýnem", "Zázvorem a jablkem"],
            "explanation": "Infuzovaná karafa se nabízí ve variantě citrus nebo máta."
          }
        ]
      },
      {
        "id": "mattoni-grand",
        "name": "Mattoni Grand neperlivá",
        "price": "45 Kč",
        "weight": "0,33l",
        "description": "Přírodní minerální voda dekarbonovaná ve skleněné lahvi",
        "questions": [
          {
            "id": "mattoni-q1",
            "question": "O jaký druh vody se jedná u lahvové Mattoni Grand?",
            "correctAnswer": "Přírodní minerální voda dekarbonovaná (neperlivá) v 0,33 l lahvi",
            "distractors": ["Silně sycená minerální voda", "Pramenitá kojenecká voda"],
            "explanation": "Mattoni Grand 0,33 l je servírována ve skle v dekarbonované (neperlivé) verzi."
          }
        ]
      },
      {
        "id": "vratislavicka-kyselka",
        "name": "Vratislavická kyselka",
        "price": "119 Kč",
        "weight": "0,75l",
        "description": "Přírodní minerální voda středně mineralizovaná s obsahem křemíku, přirozeně sycená",
        "questions": [
          {
            "id": "vratislavicka-q1",
            "question": "Jaký cenný stopový prvek charakterizuje Vratislavickou kyselku?",
            "correctAnswer": "Křemík (středně mineralizovaná voda s obsahem křemíku)",
            "distractors": ["Vysoký obsah jódu", "Mimořádně vysoký vápník"],
            "explanation": "Vratislavická kyselka je vyhlášená přírodní minerálka s přirozeným obsahem biologicky dostupného křemíku."
          }
        ]
      }
    ]
  },
  {
    "id": "nase-domaci-limonady",
    "name": "naše domácí limonády",
    "badge": "Limonády",
    "description": "Čerstvě připravované domácí limonády z poctivého ovoce, bylin a fresh šťáv",
    "iconName": "CupSoda",
    "items": [
      {
        "id": "grep-a-mango",
        "name": "Grep a mango",
        "price": "84 Kč",
        "weight": "0,4l",
        "description": "Svěží grepová šťáva v kombinaci s exotickým mangovým pyré a sodou na ledu",
        "questions": [
          {
            "id": "grep-mango-q1",
            "question": "Které dvě hlavní ovocné složky tvoří tuto limonádu?",
            "correctAnswer": "Grep (grapefruit) a mangové pyré",
            "distractors": ["Pomeranč a marakuja", "Červený grep a jahody"],
            "explanation": "Kombinace grepu a manga nabízí vyváženou hořkosladkou a tropickou chuť."
          }
        ]
      },
      {
        "id": "malina-a-bila-cokolada",
        "name": "Malina a bílá čokoláda",
        "price": "84 Kč",
        "weight": "0,4l",
        "description": "Lahodné malinové pyré zjemněné tóny bílé čokolády, limeta, soda",
        "questions": [
          {
            "id": "malina-coko-q1",
            "question": "Jaká neobvyklá ingredience zjemňuje chuť malin v této domácí limonádě?",
            "correctAnswer": "Bílá čokoláda",
            "distractors": ["Kokosové mléko", "Vanilková smetana"],
            "explanation": "Malina a bílá čokoláda tvoří harmonickou a jemnou kombinaci sladkosti a ovocné kyselinky."
          }
        ]
      },
      {
        "id": "svestka-a-kardamom",
        "name": "Švestka a kardamom",
        "price": "84 Kč",
        "weight": "0,4l",
        "description": "Husté švestkové pyré se špetkou orientálního drceného kardamomu a sodou",
        "questions": [
          {
            "id": "svestka-kard-q1",
            "question": "Jaké aromatické koření doplňuje švestkový základ limonády?",
            "correctAnswer": "Kardamom",
            "distractors": ["Skořice a hřebíček", "Badyán a muškátový oříšek"],
            "explanation": "Limonáda je provoněná pravým drceným kardamomem."
          }
        ]
      },
      {
        "id": "domaci-citronada",
        "name": "Domácí citronáda",
        "price": "84 Kč",
        "weight": "0,4l",
        "description": "Klasická osvěžující citronáda z čerstvé citronové šťávy, třtinového cukru, máty a sody",
        "questions": [
          {
            "id": "citronada-q1",
            "question": "Jaký cukr se používá k doslazení poctivé domácí citronády?",
            "correctAnswer": "Třtinový cukrový sirup",
            "distractors": ["Umělé sladidlo", "Javorový sirup"],
            "explanation": "Domácí citronáda se míchá s čerstvým citronem a jemným třtinovým sirupem."
          }
        ]
      },
      {
        "id": "domaci-ledovy-caj",
        "name": "Náš domácí ledový čaj",
        "price": "86 Kč",
        "weight": "0,4l",
        "description": "Vařený jasmínový čaj, broskvové pyré, čerstvý citron a led",
        "questions": [
          {
            "id": "led-caj-q1",
            "question": "Z jakého čaje a s jakým ovocem se náš domácí ledový čaj připravuje?",
            "correctAnswer": "Jasmínový čaj a broskev",
            "distractors": ["Černý čaj Earl Grey a citron", "Zelený čaj Sencha a jahoda"],
            "explanation": "Základem je jemný jasmínový čaj spojený se šťavnatou broskví."
          }
        ]
      },
      {
        "id": "fresh-juice",
        "name": "Fresh juice (pomeranč / grep)",
        "price": "125 Kč",
        "weight": "0,2l",
        "description": "100% čerstvě lisovaná šťáva z vyzrálých pomerančů nebo růžových grepů",
        "questions": [
          {
            "id": "fresh-q1",
            "question": "Jaké dvě varianty čerstvě lisovaného freshe jsou v nabídce?",
            "correctAnswer": "Pomeranč nebo grapefruit (0,2 l)",
            "distractors": ["Jablko nebo mrkev", "Ananas nebo mandarinka"],
            "explanation": "Fresh juice se lisuje z pomerančů nebo grepů."
          }
        ]
      }
    ]
  },
  {
    "id": "lahvove-limonady",
    "name": "lahvové limonády",
    "badge": "Lahvové",
    "description": "Prémiové toniky, zázvorové pivo a nealkoholické limonády",
    "iconName": "CupSoda",
    "items": [
      {
        "id": "coca-cola",
        "name": "Coca Cola / Coca Cola zero",
        "price": "65 Kč",
        "weight": "0,33l (sklo)",
        "description": "Tradiční kolový nápoj v originální skleněné lahvi, klasická verze i bez cukru",
        "questions": [
          {
            "id": "cola-q1",
            "question": "V jakém balení a objemu se v restauraci Coca Cola servíruje?",
            "correctAnswer": "0,33 l ve skle",
            "distractors": ["0,25 l v plechu", "0,5 l rozlévaná z postmixu"],
            "explanation": "Podává se výhradně originální skleněná lahev 0,33 l."
          }
        ]
      },
      {
        "id": "thomas-henry-tonic",
        "name": "Thomas Henry Tonic",
        "price": "75 Kč",
        "weight": "0,2l",
        "description": "Prémiový berlínský tonik s vyšším obsahem chininu a jemnými květinově-citrusovými tóny",
        "questions": [
          {
            "id": "th-tonic-q1",
            "question": "Odkud značka prémiových toniků Thomas Henry pochází?",
            "correctAnswer": "Z Německa (Berlín)",
            "distractors": ["Z Velké Británie (Londýn)", "Z Rakouska (Vídeň)"],
            "explanation": "Thomas Henry je německý prémiový výrobce mixerů z Berlína."
          }
        ]
      },
      {
        "id": "fever-tree-tonic",
        "name": "Fever-Tree Tonic",
        "price": "85 Kč",
        "weight": "0,2l",
        "description": "Špičkový britský tonik vyrobený z přírodního chininu z Demokratické republiky Kongo a pramenité vody",
        "questions": [
          {
            "id": "ft-tonic-q1",
            "question": "Čím se vyznačuje tonik Fever-Tree oproti běžným tonikům?",
            "correctAnswer": "Přírodním chininem z kůry chinovníku ze střední Afriky a absencí umělých sladidel",
            "distractors": ["Vysokým obsahem syntetického chininu a kofeinu", "Výhradně infuzí chmelových šišek"],
            "explanation": "Fever-Tree používá nejkvalitnější přírodní chinin z hranic Rwandy a Konga."
          }
        ]
      },
      {
        "id": "fever-tree-ginger-beer",
        "name": "Fever-Tree Ginger Beer",
        "price": "85 Kč",
        "weight": "0,2l",
        "description": "Přírodně fermentované nealkoholické zázvorové pivo s výraznou pikantností tří odrůd zázvoru",
        "questions": [
          {
            "id": "ft-ginger-q1",
            "question": "Který ikonický míchaný koktejl se připravuje s tímto zázvorovým pivem?",
            "correctAnswer": "Moscow Mule",
            "distractors": ["Gin & Tonic", "Aperol Spritz"],
            "explanation": "Fever-Tree Ginger Beer je nezbytnou součástí koktejlu Moscow Mule."
          }
        ]
      },
      {
        "id": "red-bull",
        "name": "Red Bull",
        "price": "99 Kč",
        "weight": "0,2l",
        "description": "Ikonický energetický nápoj v plechovce",
        "questions": [
          {
            "id": "redbull-q1",
            "question": "Jaký objem má plechovka Red Bullu?",
            "correctAnswer": "0,2 l",
            "distractors": ["0,33 l", "0,25 l"],
            "explanation": "V nabídce je originální plechovka 0,2 l."
          }
        ]
      }
    ]
  },
  {
    "id": "kava-caj-a-horke-napoje",
    "name": "káva čaj a horké nápoje",
    "badge": "Káva & Teplé",
    "description": "Výběrová káva, sypané čaje, horká čokoláda, punče a svařené víno",
    "iconName": "Coffee",
    "items": [
      {
        "id": "espresso",
        "name": "Espresso",
        "price": "66 Kč",
        "weight": "9g kávy",
        "description": "Klasické espresso z 9g čerstvě mleté výběrové kávy s plným tělem a oříškovou cremou",
        "questions": [
          {
            "id": "espresso-q1",
            "question": "Z jaké přesné gramáže kávy se připravuje standardní espresso?",
            "correctAnswer": "9 g",
            "distractors": ["7 g", "14 g"],
            "explanation": "Standardní receptura pro espresso a cappuccino je nastavena na 9 g mleté kávy."
          }
        ]
      },
      {
        "id": "espresso-macchiato",
        "name": "Espresso macchiato",
        "price": "78 Kč",
        "weight": "9g kávy",
        "description": "Espresso s kapkou jemné mléčné mikropěny",
        "questions": [
          {
            "id": "macchiato-q1",
            "question": "Co tvoří espresso macchiato?",
            "correctAnswer": "Espresso (9g) zakončené lžičkou mikropěny",
            "distractors": ["Dvojité espresso s velkým množstvím mléka", "Lungo se šlehačkou"],
            "explanation": "Macchiato znamená 'skvrnitý' – espresso se skvrnou jemné mléčné pěny."
          }
        ]
      },
      {
        "id": "cappuccino",
        "name": "Cappuccino",
        "price": "85 Kč",
        "weight": "9g kávy",
        "description": "Espresso zjemněné sametově hladkým našlehaným teplým mlékem",
        "questions": [
          {
            "id": "cappuccino-q1",
            "question": "Jaká je správná textura mléčné pěny na cappuccinu?",
            "correctAnswer": "Lesklá, jemná mikropěna bez velkých bublin (tekutý samet)",
            "distractors": ["Suchá tuhá pěna tyčící se nad šálek", "Studené nenašlehané mléko"],
            "explanation": "Správně připravené cappuccino má hedvábnou mikropěnu spojenou s kávovou cremou."
          }
        ]
      },
      {
        "id": "caffe-latte",
        "name": "Caffé latte",
        "price": "88 Kč",
        "weight": "9g kávy",
        "description": "Mléčná káva ve vysokém skle s bohatou porcí horkého mléka a pěny",
        "questions": [
          {
            "id": "latte-q1",
            "question": "V jakém skle se podává Caffé latte?",
            "correctAnswer": "Ve vysoké sklenici na latte",
            "distractors": ["V nízkém keramickém šálku na cappuccino", "V panákové skleničce"],
            "explanation": "Caffé latte se tradičně podává ve vysoké čiré sklenici s podšálkem a lžičkou."
          }
        ]
      },
      {
        "id": "flat-white",
        "name": "Flat white",
        "price": "99 Kč",
        "weight": "18g kávy",
        "description": "Dvojité espresso (doppio) zalité jemnou mikropěnou pro intenzivní kávový profil",
        "questions": [
          {
            "id": "flatwhite-q1",
            "question": "Z kolika gramů kávy (a kolika shotů) se připravuje Flat white?",
            "correctAnswer": "18 g kávy (double shot espresso)",
            "distractors": ["9 g kávy (single shot)", "24 g kávy (triple shot)"],
            "explanation": "Flat white se připravuje z 18 g kávy jako double espresso s tenkou vrstvou mikropěny."
          }
        ]
      },
      {
        "id": "double-espresso",
        "name": "Double espresso",
        "price": "89 Kč",
        "weight": "18g kávy",
        "description": "Dvojitá dávka espressa pro silný povzbuzující zážitek",
        "questions": [
          {
            "id": "doppio-q1",
            "question": "Jaká je gramáž kávy u Double espressa?",
            "correctAnswer": "18 g",
            "distractors": ["14 g", "12 g"],
            "explanation": "Double espresso využívá 18 g výběrové kávy."
          }
        ]
      },
      {
        "id": "americano-lungo",
        "name": "Americano caffé / lungo",
        "price": "79 Kč",
        "weight": "9g kávy",
        "description": "Espresso prodloužené horkou vodou",
        "questions": [
          {
            "id": "americano-q1",
            "question": "Jak se připravuje Americano caffé?",
            "correctAnswer": "Espresso (9g) doplněné horkou vodou",
            "distractors": ["Překapávaná káva z filtru přes 10 minut", "Espresso s kapkou studeného mléka"],
            "explanation": "Americano vzniká prodloužením espressa horkou vodou."
          }
        ]
      },
      {
        "id": "espresso-se-slehackou",
        "name": "Espresso káva se šlehačkou",
        "price": "85 Kč",
        "weight": "9g kávy",
        "description": "Espresso ozdobené poctivou čerstvou šlehačkou",
        "questions": [
          {
            "id": "esp-sleh-q1",
            "question": "Jaká šlehačka zdobí tuto kávu?",
            "correctAnswer": "Čerstvá vyšlehaná smetana",
            "distractors": ["Rostlinná šlehačka ve spreji", "Kondenzované slazené mléko"],
            "explanation": "Káva se podává s pravou čerstvě vyšlehanou smetanou."
          }
        ]
      },
      {
        "id": "sypany-caj",
        "name": "Sypaný čaj (černý, zelený nebo ovocný)",
        "price": "89 Kč",
        "description": "Výběrový sypaný čaj servírovaný v konvičce s medem a citronem",
        "questions": [
          {
            "id": "sypany-q1",
            "question": "Jaké základní druhy sypaného čaje má obsluha v nabídce?",
            "correctAnswer": "Černý, zelený nebo ovocný",
            "distractors": ["Pouze heřmánkový a lipový", "Pouze bílý a pu-erh"],
            "explanation": "Lístek uvádí výběr mezi černým, zeleným a ovocným sypaným čajem."
          }
        ]
      },
      {
        "id": "caj-mata-zazvor",
        "name": "Čaj s čerstvou mátou nebo zázvorem",
        "price": "89 Kč",
        "description": "Horký nápoj z čerstvých snítek máty nebo plátků kořene zázvoru, med, citron",
        "questions": [
          {
            "id": "caj-cerstvy-q1",
            "question": "Z jakých čerstvých surovin se tento horký čaj připravuje?",
            "correctAnswer": "Z čerstvých lístků máty nebo plátků čerstvého zázvoru",
            "distractors": ["Ze sušených bylinných sáčků", "Ze zázvorového sirupu"],
            "explanation": "Používá se výhradně čerstvá máta nebo čerstvě krájený kořen zázvoru s medem a citronem."
          }
        ]
      },
      {
        "id": "opre-gingerbread",
        "name": "Opre' Gingerbread Cider (horký)",
        "price": "98 Kč",
        "weight": "0,33l",
        "description": "Horký řemeslný perníkový cider s vůní skořice, hřebíčku a badyánu",
        "questions": [
          {
            "id": "gingerbread-q1",
            "question": "Jakou příchuť a vůni koření nabízí horký Opre' Gingerbread Cider?",
            "correctAnswer": "Horký perníkový cider provoněný hřebíčkem a skořicí",
            "distractors": ["Vanilkový cider s rozinkami", "Chilli cider s pepřem"],
            "explanation": "Jedná se o oblíbený horký perníkový cider s kořením."
          }
        ]
      },
      {
        "id": "horka-cokolada",
        "name": "Horká čokoláda se šlehačkou",
        "price": "85 Kč",
        "description": "Bohatá horká čokoláda ozdobená čerstvou poctivou šlehačkou",
        "questions": [
          {
            "id": "coko-q1",
            "question": "Čím je servírována naše horká čokoláda?",
            "correctAnswer": "S čerstvou vyšlehanou smetanou",
            "distractors": ["S kopečkem vanilkové zmrzliny", "Se skořicovým posypem bez šlehačky"],
            "explanation": "Horká čokoláda je korunována čerstvou šlehačkou."
          }
        ]
      },
      {
        "id": "chai-latte",
        "name": "Chai latte",
        "price": "99 Kč",
        "description": "Čaj se směsí exotického koření (masala), třtinového cukru a horkého napěněného mléka",
        "questions": [
          {
            "id": "chailatte-q1",
            "question": "Z čeho se skládá Chai latte?",
            "correctAnswer": "Čajový extrakt se směsí exotického koření, cukru a horkého mléka",
            "distractors": ["Káva espresso s kardamomem", "Zelený čaj matcha s mlékem"],
            "explanation": "Chai latte kombinuje indické koření (masala), čaj a napěněné horké mléko."
          }
        ]
      },
      {
        "id": "svarene-vino",
        "name": "Svařené víno (bílé / červené)",
        "price": "85 Kč",
        "weight": "0,15l",
        "description": "Tradiční horké svařené víno s výběrovým kořením, badyánem, skořicí a plátkem pomeranče",
        "questions": [
          {
            "id": "svarak-q1",
            "question": "V jakých variantách se servíruje svařené víno?",
            "correctAnswer": "Červené i bílé (0,15 l)",
            "distractors": ["Pouze červené", "Pouze růžové"],
            "explanation": "Host si může vybrat červené nebo bílé svařené víno."
          }
        ]
      }
    ]
  }
]

with open('/tmp/drinks_part1.json', 'w') as f:
    json.dump(drinks_categories, f, ensure_ascii=False, indent=2)
print("Part 1 saved!")
