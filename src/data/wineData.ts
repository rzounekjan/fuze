import { MenuCategory } from './menuData';

export const WINE_CATEGORIES: MenuCategory[] = [
    {
    "id": "vina-po-skle",
    "name": "Vína po skle",
    "badge": "Vína po skle",
    "description": "Pečlivě vybraná šumivá, bílá, růžová a červená vína rozlévaná po skle",
    "iconName": "Wine",
    "items": [
      {
        "id": "sklo-charmat-palava",
        "name": "Charmat de Vinselekt Pálava",
        "weight": "0,1L / 0,75L",
        "price": "0,1L 99 Kč / 0,75L 699 Kč",
        "allergens": [
          "12"
        ],
        "description": "Vinselect Michlovský, Extra sec",
        "notes": "Vinselect Michlovský, Extra sec. Aromatické moravské šumivé víno z odrůdy Pálava vyrobené metodou Charmat.",
        "questions": [
          {
            "id": "sklo-charmat-palava-vol",
            "question": "Jaký je servírovací objem / míra položky Charmat de Vinselekt Pálava po skle?",
            "correctAnswer": "0,1l",
            "distractors": [
              "0,15 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra / objem položky Charmat de Vinselekt Pálava je 0,1l."
          },
          {
            "id": "sklo-charmat-palava-prod",
            "question": "Které vinařství vyrábí šumivé víno Charmat de Vinselekt Pálava?",
            "correctAnswer": "Vinselect Michlovský",
            "distractors": [
              "Gotberg",
              "Reisten"
            ],
            "explanation": "Víno pochází z vinařství Vinselect Michlovský."
          },
          {
            "id": "sklo-charmat-palava-type",
            "question": "Do jaké kategorie zbytkového cukru spadá Charmat de Vinselekt Pálava?",
            "correctAnswer": "Extra sec",
            "distractors": [
              "Brut Nature",
              "Demi Sec"
            ],
            "explanation": "Charmat de Vinselekt Pálava je zatříděn v kategorii Extra sec."
          },
          {
            "id": "sklo-charmat-palava-price",
            "question": "Jaká je prodejní cena rozlévané sklenky Charmat de Vinselekt Pálava (0,1l)?",
            "correctAnswer": "99 Kč",
            "distractors": [
              "115 Kč",
              "89 Kč"
            ],
            "explanation": "Cena rozlévané sklenky Charmat de Vinselekt Pálava je 99 Kč."
          },
          {
            "id": "sklo-charmat-palava-allergen",
            "question": "Který alergen obsahuje Charmat de Vinselekt Pálava?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 1 – Lepek",
              "Alergen č. 7 – Mléko"
            ],
            "explanation": "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "sklo-cremant-vinselekt",
        "name": "Cremant de Vinselekt",
        "weight": "0,1L / 0,75L",
        "price": "0,1L 115 Kč / 0,75L 849 Kč",
        "allergens": [
          "12"
        ],
        "description": "(Pinot, Chardonnay) Vinselect Michlovský, Extra brut",
        "notes": "(Pinot, Chardonnay) Vinselect Michlovský, Extra brut. Prémiový moravský crémant kvašený v lahvi.",
        "questions": [
          {
            "id": "sklo-cremant-vinselekt-vol",
            "question": "Jaký je servírovací objem / míra položky Cremant de Vinselekt po skle?",
            "correctAnswer": "0,1l",
            "distractors": [
              "0,15 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra / objem položky Cremant de Vinselekt je 0,1l."
          },
          {
            "id": "sklo-cremant-vinselekt-blend",
            "question": "Ze kterých odrůd je složen Cremant de Vinselekt?",
            "correctAnswer": "(Pinot, Chardonnay)",
            "distractors": [
              "(Ryzlink, Pálava)",
              "(Sauvignon, Pinot Gris)"
            ],
            "explanation": "Cremant de Vinselekt je kupáž odrůd Pinot a Chardonnay."
          },
          {
            "id": "sklo-cremant-vinselekt-prod",
            "question": "Které vinařství produkuje Cremant de Vinselekt?",
            "correctAnswer": "Vinselect Michlovský",
            "distractors": [
              "Gotberg",
              "Kolby"
            ],
            "explanation": "Vyrábí jej doc. Miloš Michlovský – Vinselect Michlovský."
          },
          {
            "id": "sklo-cremant-vinselekt-type",
            "question": "V jaké kategorii suchosti je připraven Cremant de Vinselekt?",
            "correctAnswer": "Extra brut",
            "distractors": [
              "Extra sec",
              "Sec"
            ],
            "explanation": "Cremant de Vinselekt spadá do kategorie Extra brut."
          },
          {
            "id": "sklo-cremant-vinselekt-price",
            "question": "Jaká je cena rozlévané sklenky Cremant de Vinselekt (0,1l)?",
            "correctAnswer": "115 Kč",
            "distractors": [
              "99 Kč",
              "125 Kč"
            ],
            "explanation": "Cena položky Cremant de Vinselekt (0,1l) je 115 Kč."
          },
          {
            "id": "sklo-cremant-vinselekt-allergen",
            "question": "Který alergen obsahuje Cremant de Vinselekt?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 1 – Lepek",
              "Alergen č. 8 – Skořápkové plody"
            ],
            "explanation": "Obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "sklo-rulandske-sede",
        "name": "Rulandské šedé",
        "weight": "0,15l",
        "price": "95 Kč",
        "allergens": [
          "12"
        ],
        "description": "Kolby Morava, polosuché",
        "notes": "Kolby Morava, polosuché. Ovocné, harmonické bílé víno z Pouzdřan s jemným zbytkovým cukrem.",
        "questions": [
          {
            "id": "sklo-rulandske-sede-vol",
            "question": "Jaký je servírovací objem položky Rulandské šedé po skle?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra je 0,15l."
          },
          {
            "id": "sklo-rulandske-sede-region",
            "question": "Které vinařství a z jaké oblasti vyrábí toto rozlévané Rulandské šedé?",
            "correctAnswer": "Kolby Morava",
            "distractors": [
              "Kraus Čechy",
              "Heuriger Rakousko"
            ],
            "explanation": "Víno pochází z vinařství Kolby na Moravě."
          },
          {
            "id": "sklo-rulandske-sede-type",
            "question": "V jakém chuťovém stylu je zatříděno Rulandské šedé Kolby?",
            "correctAnswer": "polosuché",
            "distractors": [
              "suché",
              "sladké"
            ],
            "explanation": "Rulandské šedé Kolby je polosuché."
          },
          {
            "id": "sklo-rulandske-sede-price",
            "question": "Jaká je cena rozlévané sklenky Rulandské šedé (0,15l)?",
            "correctAnswer": "95 Kč",
            "distractors": [
              "105 Kč",
              "89 Kč"
            ],
            "explanation": "Cena za 0,15l je 95 Kč."
          },
          {
            "id": "sklo-rulandske-sede-allergen",
            "question": "Který alergen obsahuje Rulandské šedé?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 7 – Mléko",
              "Alergen č. 6 – Sója"
            ],
            "explanation": "Obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "sklo-cuvee-bile",
        "name": "Cuvée bílé",
        "weight": "0,15l",
        "price": "98 Kč",
        "allergens": [
          "12"
        ],
        "description": "Kraus Čechy",
        "notes": "Kraus Čechy. Svěží suché bílé cuvée z mělnických vinic od profesora Krause.",
        "questions": [
          {
            "id": "sklo-cuvee-bile-vol",
            "question": "Jaký je servírovací objem položky Cuvée bílé po skle?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací objem je 0,15l."
          },
          {
            "id": "sklo-cuvee-bile-prod",
            "question": "Které vinařství z Čech produkuje toto bílé cuvée?",
            "correctAnswer": "Kraus Čechy",
            "distractors": [
              "Kolby Morava",
              "Adulation Kalifornie"
            ],
            "explanation": "Pochází z mělnického vinařství Kraus v Čechách."
          },
          {
            "id": "sklo-cuvee-bile-price",
            "question": "Jaká je cena sklenky Cuvée bílé Kraus (0,15l)?",
            "correctAnswer": "98 Kč",
            "distractors": [
              "95 Kč",
              "109 Kč"
            ],
            "explanation": "Cena je 98 Kč."
          },
          {
            "id": "sklo-cuvee-bile-allergen",
            "question": "Který alergen obsahuje Cuvée bílé Kraus?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 1 – Lepek",
              "Alergen č. 3 – Vejce"
            ],
            "explanation": "Obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "sklo-gruner-veltliner",
        "name": "Grüner Veltliner",
        "weight": "0,15l",
        "price": "109 Kč",
        "allergens": [
          "12"
        ],
        "description": "Heuriger Rakousko",
        "notes": "Heuriger Rakousko. Tradiční rakouský Veltlín s tóny zeleného jablka a bílého pepře.",
        "questions": [
          {
            "id": "sklo-gruner-veltliner-vol",
            "question": "Jaký je servírovací objem položky Grüner Veltliner po skle?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací objem je 0,15l."
          },
          {
            "id": "sklo-gruner-veltliner-region",
            "question": "Z jaké oblasti a stylu pochází toto rozlévané rakouské víno?",
            "correctAnswer": "Heuriger Rakousko",
            "distractors": [
              "Kolby Morava",
              "Kraus Čechy"
            ],
            "explanation": "Pochází z Rakouska ve stylu Heuriger."
          },
          {
            "id": "sklo-gruner-veltliner-price",
            "question": "Jaká je cena rozlévané sklenky Grüner Veltliner (0,15l)?",
            "correctAnswer": "109 Kč",
            "distractors": [
              "98 Kč",
              "125 Kč"
            ],
            "explanation": "Cena je 109 Kč."
          },
          {
            "id": "sklo-gruner-veltliner-allergen",
            "question": "Který alergen obsahuje Grüner Veltliner?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 2 – Korýši",
              "Alergen č. 1 – Lepek"
            ],
            "explanation": "Obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "sklo-chardonnay",
        "name": "Chardonnay",
        "weight": "0,15l",
        "price": "125 Kč",
        "allergens": [
          "12"
        ],
        "description": "Adulation Kalifornie",
        "notes": "Adulation Kalifornie. Bohaté kalifornské Chardonnay s tóny tropického ovoce, másla a vanilky.",
        "questions": [
          {
            "id": "sklo-chardonnay-vol",
            "question": "Jaký je servírovací objem rozlévaného Chardonnay Adulation?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací objem je 0,15l."
          },
          {
            "id": "sklo-chardonnay-region",
            "question": "Které vinařství a z jaké země produkuje toto Chardonnay?",
            "correctAnswer": "Adulation Kalifornie",
            "distractors": [
              "Kolby Morava",
              "Kraus Čechy"
            ],
            "explanation": "Vyrábí jej vinařství Adulation v Kalifornii (USA)."
          },
          {
            "id": "sklo-chardonnay-price",
            "question": "Jaká je cena sklenky Chardonnay Adulation (0,15l)?",
            "correctAnswer": "125 Kč",
            "distractors": [
              "109 Kč",
              "95 Kč"
            ],
            "explanation": "Cena za 0,15l je 125 Kč."
          },
          {
            "id": "sklo-chardonnay-allergen",
            "question": "Který alergen obsahuje Chardonnay Adulation?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 5 – Arašídy",
              "Alergen č. 7 – Mléko"
            ],
            "explanation": "Obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "sklo-modry-portugal-rose",
        "name": "Modrý Portugal rosé",
        "weight": "0,15l",
        "price": "95 Kč",
        "allergens": [
          "12"
        ],
        "description": "Kolby Morava",
        "notes": "Kolby Morava. Lehké a osvěžující růžové víno s tóny jahod a zahradního ovoce.",
        "questions": [
          {
            "id": "sklo-modry-portugal-rose-vol",
            "question": "Jaký je servírovací objem položky Modrý Portugal rosé po skle?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací objem je 0,15l."
          },
          {
            "id": "sklo-modry-portugal-rose-region",
            "question": "Které vinařství z Moravy vyrábí toto růžové víno po skle?",
            "correctAnswer": "Kolby Morava",
            "distractors": [
              "Kraus Čechy",
              "Gotberg Morava"
            ],
            "explanation": "Pochází z moravského vinařství Kolby."
          },
          {
            "id": "sklo-modry-portugal-rose-price",
            "question": "Jaká je prodejní cena rozlévaného Modrého Portugalu rosé (0,15l)?",
            "correctAnswer": "95 Kč",
            "distractors": [
              "98 Kč",
              "109 Kč"
            ],
            "explanation": "Cena za 0,15l je 95 Kč."
          },
          {
            "id": "sklo-modry-portugal-rose-allergen",
            "question": "Který alergen obsahuje Modrý Portugal rosé?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 4 – Ryby",
              "Alergen č. 1 – Lepek"
            ],
            "explanation": "Obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "sklo-modry-portugal",
        "name": "Modrý Portugal",
        "weight": "0,15l",
        "price": "95 Kč",
        "allergens": [
          "12"
        ],
        "description": "Kolby Morava",
        "notes": "Kolby Morava. Tradiční lehčí červené víno s rubínovou barvou, tóny třešní a sametovými tříslovinami.",
        "questions": [
          {
            "id": "sklo-modry-portugal-vol",
            "question": "Jaký je servírovací objem rozlévaného červeného vína Modrý Portugal?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací objem je 0,15l."
          },
          {
            "id": "sklo-modry-portugal-region",
            "question": "Které moravské vinařství dodává toto červené víno po skle?",
            "correctAnswer": "Kolby Morava",
            "distractors": [
              "Kraus Čechy",
              "Adulation Kalifornie"
            ],
            "explanation": "Dodává jej vinařství Kolby na Moravě."
          },
          {
            "id": "sklo-modry-portugal-price",
            "question": "Jaká je cena rozlévaného vína Modrý Portugal (0,15l)?",
            "correctAnswer": "95 Kč",
            "distractors": [
              "105 Kč",
              "89 Kč"
            ],
            "explanation": "Cena za 0,15l je 95 Kč."
          },
          {
            "id": "sklo-modry-portugal-allergen",
            "question": "Který alergen obsahuje Modrý Portugal?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 7 – Mléko",
              "Alergen č. 8 – Ořechy"
            ],
            "explanation": "Obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "sklo-cuvee-cervene",
        "name": "Cuvée červené",
        "weight": "0,15l",
        "price": "98 Kč",
        "allergens": [
          "12"
        ],
        "description": "Kraus Čechy",
        "notes": "Kraus Čechy. Charakteristické mělnické červené cuvée s tóny tmavého ovoce a lesních plodů.",
        "questions": [
          {
            "id": "sklo-cuvee-cervene-vol",
            "question": "Jaký je servírovací objem rozlévaného Cuvée červené?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací objem je 0,15l."
          },
          {
            "id": "sklo-cuvee-cervene-prod",
            "question": "Které české vinařství vyrábí toto červené cuvée?",
            "correctAnswer": "Kraus Čechy",
            "distractors": [
              "Kolby Morava",
              "Heuriger Rakousko"
            ],
            "explanation": "Vyrábí jej mělnické vinařství Kraus v Čechách."
          },
          {
            "id": "sklo-cuvee-cervene-price",
            "question": "Jaká je prodejní cena sklenky Cuvée červené Kraus (0,15l)?",
            "correctAnswer": "98 Kč",
            "distractors": [
              "95 Kč",
              "109 Kč"
            ],
            "explanation": "Cena za 0,15l je 98 Kč."
          },
          {
            "id": "sklo-cuvee-cervene-allergen",
            "question": "Který alergen obsahuje Cuvée červené Kraus?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 1 – Lepek",
              "Alergen č. 6 – Sója"
            ],
            "explanation": "Obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "sklo-pinot-noir",
        "name": "Pinot Noir",
        "weight": "0,15l",
        "price": "125 Kč",
        "allergens": [
          "12"
        ],
        "description": "Adulation Kalifornie",
        "notes": "Adulation Kalifornie. Sametový kalifornský Pinot Noir s tóny tmavých třešní, vanilky a jemného dřeva.",
        "questions": [
          {
            "id": "sklo-pinot-noir-vol",
            "question": "Jaký je servírovací objem sklenky kalifornského Pinot Noir Adulation?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací objem je 0,15l."
          },
          {
            "id": "sklo-pinot-noir-region",
            "question": "Odkud pochází toto červené víno Pinot Noir rozlévané po skle?",
            "correctAnswer": "Adulation Kalifornie",
            "distractors": [
              "Kolby Morava",
              "Kraus Čechy"
            ],
            "explanation": "Pochází z vinařství Adulation v Kalifornii (USA)."
          },
          {
            "id": "sklo-pinot-noir-price",
            "question": "Jaká je prodejní cena sklenky Pinot Noir Adulation (0,15l)?",
            "correctAnswer": "125 Kč",
            "distractors": [
              "115 Kč",
              "98 Kč"
            ],
            "explanation": "Cena je 125 Kč."
          },
          {
            "id": "sklo-pinot-noir-allergen",
            "question": "Který alergen obsahuje Pinot Noir Adulation?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 3 – Vejce",
              "Alergen č. 7 – Mléko"
            ],
            "explanation": "Obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      }
    ]
  },
  {
    id: "vina-bubliny",
    name: "Bubliny (Šumivá vína)",
    badge: "Bubliny",
    description: "Šumivá vína charmat, moravský crémant a kalifornský sekt kvašený v lahvi",
    iconName: "Sparkles",
    items: [
      {
        id: "bubliny-charmat-palava",
        name: "Charmat de Vinselekt Pálava",
        weight: "0,1L / 0,75L",
        price: "0,1L 99 Kč / 0,75L 699 Kč",
        allergens: ["12"],
        description: "Vinselect Michlovský, extra sec – Morava. Divoké perlení, opulentní vůně s nádechem růží a exotického ovoce, kulatá podmanivá chuť.",
        questions: [
          {
            id: "b-pal-q1",
            question: "Jakou metodou druhotného kvašení a ze které odrůdy je vyroben Charmat de Vinselekt?",
            correctAnswer: "Metodou charmat z aromatické odrůdy Pálava",
            distractors: ["Tradiční metodou z odrůdy Ryzlink vlašský", "Metodou ancestrale (pét-nat) z Muškátu moravského"],
            explanation: "Jedná se o šumivé víno vyrobené metodou charmat z odrůdy Pálava s opulentní vůní růží."
          }
        ]
      },
      {
        id: "bubliny-cremant-vinselekt",
        name: "Cremant de Vinselekt",
        weight: "0,1L / 0,75L",
        price: "0,1L 115 Kč / 0,75L 849 Kč",
        allergens: ["12"],
        description: "(Pinot, Chardonnay) Vinselect Michlovský, extra brut – Morava. Jemné impozantní perlení, elegantní aroma, harmonická krémová dochuť.",
        questions: [
          {
            id: "b-crem-q1",
            question: "Ze kterých dvou odrůd je složen moravský Cremant de Vinselekt?",
            correctAnswer: "Pinot a Chardonnay",
            distractors: ["Ryzlink rýnský a Veltlínské zelené", "Sauvignon a Pálava"],
            explanation: "Crémant je kupáží odrůd Pinot a Chardonnay v kategorii extra brut s harmonickou krémovou dochutí."
          }
        ]
      },
      {
        id: "bubliny-angels-cowboys",
        name: "Angels & Cowboys",
        weight: "0,75L",
        price: "1199 Kč",
        allergens: ["12"],
        description: "NV, brut – North Coast, Kalifornie. Druhotné zrání v láhvi, elegantní perlení, svěží sadové ovoce, citrusy, tóny briošky a chlebové kůrky.",
        questions: [
          {
            id: "b-ac-q1",
            question: "Jakou technologií zrání vzniká kalifornský sekt Angels & Cowboys?",
            correctAnswer: "Druhotným kvašením a zráním přímo v láhvi (tradiční metoda)",
            distractors: ["Kvašením v tlakových tancích (charmat)", "Syzením oxidem uhličitým"],
            explanation: "Víno zraje tradiční metodou přímo v láhvi, což vytváří jemné perlení a tóny briošky."
          }
        ]
      }
    ]
  },
  {
    id: "vina-bile",
    name: "Bílá vína (0,75l)",
    badge: "Bílá vína",
    description: "Špičková tichá bílá vína z předních poloh Moravy, Rakouska, Německa a Kalifornie",
    iconName: "Wine",
    items: [
      {
        id: "bile-ryzlink-gotberg",
        name: "Ryzlink rýnský – Gotberg",
        weight: "0,75L",
        price: "469 Kč",
        allergens: ["12"],
        description: "pozdní sběr Gotberg – Pálava, Morava",
        questions: []
      },
      {
        id: "bile-pinot-gris-reisten",
        name: "Pinot Gris – Reisten",
        weight: "0,75L",
        price: "479 Kč",
        allergens: ["12"],
        description: "pozdní sběr Reisten – Mikulovsko, Morava",
        questions: []
      },
      {
        id: "bile-hibernal-bilkovi",
        name: "Hibernal – Bílkovi",
        weight: "0,75L",
        price: "495 Kč",
        allergens: ["12"],
        description: "pozdní sběr Bílkovi – Velkopavlovicko, Morava",
        questions: []
      },
      {
        id: "bile-sauvignon-halkoci",
        name: "Sauvignon – Lukáš Halkoci",
        weight: "0,75L",
        price: "626 Kč",
        allergens: ["12"],
        description: "Typik VOC Lukáš Halkoci – Znojemsko, Morava",
        questions: []
      },
      {
        id: "bile-ryzlink-vlassky-sukal",
        name: "Ryzlink Vlašský – Milan Sůkal",
        weight: "0,75L",
        price: "660 Kč",
        allergens: ["12"],
        description: "pozdní sběr Milan Sůkal – Slovácko, Morava",
        questions: []
      },
      {
        id: "bile-palava-michlovsky",
        name: "Pálava – Vinselect Michlovský",
        weight: "0,75L",
        price: "506 Kč",
        allergens: ["12"],
        description: "pozdní sběr Vinselect Michlovský – Lednicko-Valtický areál, Morava",
        questions: []
      },
      {
        id: "bile-poysdorfer-saurussel",
        name: "Poysdorfer Saurüssel – Hauser",
        weight: "0,75L",
        price: "629 Kč",
        allergens: ["12"],
        description: "Veltlínské zelené, Hauser – Weinviertel, Rakousko",
        questions: []
      },
      {
        id: "bile-gruner-satzen-schwarzbock",
        name: "Grüner Veltliner – Schwarzbock",
        weight: "0,75L",
        price: "723 Kč",
        allergens: ["12"],
        description: "Premium Ried Satzen DAC Schwarzbock – Weinviertel, Rakousko",
        questions: []
      },
      {
        id: "bile-riesling-eva-fricke",
        name: "Riesling Rheingau – Eva Fricke",
        weight: "0,75L",
        price: "999 Kč",
        allergens: ["12"],
        description: "QbA Trocken Eva Fricke – Rheingau, Německo",
        questions: []
      },
      {
        id: "bile-riesling-gunderloch-red-stone",
        name: "Riesling – Gunderloch",
        weight: "0,75L",
        price: "595 Kč",
        allergens: ["12"],
        description: "Red Stone QbA trocken Gunderloch – Rheinhessen, Německo",
        questions: []
      },
      {
        id: "bile-riesling-fritz-haag",
        name: "Riesling – Fritz Haag",
        weight: "0,75L",
        price: "975 Kč",
        allergens: ["12"],
        description: "Tradition Brauneberg Fritz Haag – Mosel, Německo",
        questions: []
      },
      {
        id: "bile-weisser-burgunder-philipp-kuhn",
        name: "Weisser Burgunder – Philipp Kuhn",
        weight: "0,75L",
        price: "725 Kč",
        allergens: ["12"],
        description: "Rulandské bílé, Tradition Trocken Philipp Kuhn – Pfalz, Německo",
        questions: []
      },
      {
        id: "bile-sauvignon-lapis-luna",
        name: "Sauvignon Blanc – Lapis Luna",
        weight: "0,75L",
        price: "789 Kč",
        allergens: ["12"],
        description: "Lapis Luna – North Coast, Kalifornie",
        questions: []
      },
      {
        id: "bile-chardonnay-knotty-vines",
        name: "Chardonnay – Knotty Vines",
        weight: "0,75L",
        price: "975 Kč",
        allergens: ["12"],
        description: "Knotty Vines – Kalifornie",
        questions: []
      }
    ]
  },
  {
    "id": "vina-ruzove",
    "name": "Růžová vína (0,75l)",
    "badge": "Růžová vína",
    "description": "Svěží růžová vína z Moravy",
    "iconName": "Wine",
    "items": [
      {
        "id": "ruzove-merlot-rose-bilkovi",
        "name": "Merlot Rosé – Bílkovi",
        "weight": "0,75L",
        "price": "405 Kč",
        "allergens": [
          "12"
        ],
        "description": "pozdní sběr Bílkovi – Velkopavlovicko, Morava",
        "questions": [
          {
            "id": "ruzove-merlot-rose-bilkovi-vol",
            "question": "Jaký je servírovací objem lahve Merlot Rosé od Bílkových?",
            "correctAnswer": "0,75L",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací objem lahve Merlot Rosé je 0,75L."
          },
          {
            "id": "ruzove-merlot-rose-bilkovi-type",
            "question": "Jaký přívlastek má víno Merlot Rosé od vinařství Bílkovi?",
            "correctAnswer": "pozdní sběr",
            "distractors": [
              "kabinetní víno",
              "výběr z hroznů"
            ],
            "explanation": "Merlot Rosé od Bílkových je zatříděn v kategorii pozdní sběr."
          },
          {
            "id": "ruzove-merlot-rose-bilkovi-prod",
            "question": "Které vinařství a z jaké oblasti vyrábí toto růžové víno?",
            "correctAnswer": "Bílkovi – Velkopavlovicko, Morava",
            "distractors": [
              "Gotberg – Pálava",
              "Kolby – Mikulovsko"
            ],
            "explanation": "Víno pochází z rodinného vinařství Bílkovi z Velkopavlovicka na Moravě."
          },
          {
            "id": "ruzove-merlot-rose-bilkovi-price",
            "question": "Jaká je prodejní cena lahve Merlot Rosé Bílkovi?",
            "correctAnswer": "405 Kč",
            "distractors": [
              "465 Kč",
              "365 Kč"
            ],
            "explanation": "Cena lahve Merlot Rosé (0,75L) je 405 Kč."
          },
          {
            "id": "ruzove-merlot-rose-bilkovi-variety",
            "question": "Ze které modré odrůdy je vyrobeno toto růžové víno od vinařství Bílkovi?",
            "correctAnswer": "Merlot",
            "distractors": [
              "Frankovka",
              "Zweigelt"
            ],
            "explanation": "Víno je vyrobeno z odrůdy Merlot šetrným lisováním pro růžové víno."
          },
          {
            "id": "ruzove-merlot-rose-bilkovi-allergen",
            "question": "Který alergen obsahuje víno Merlot Rosé?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 1 – Lepek",
              "Alergen č. 7 – Mléko"
            ],
            "explanation": "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      }
    ]
  },
  {
    "id": "vina-cervena",
    "name": "Červená vína (0,75l)",
    "badge": "Červená vína",
    "description": "Špičková červená vína z Čech, Moravy, Rakouska, Německa a Kalifornie",
    "iconName": "Wine",
    "items": [
      {
        "id": "cervene-pinot-noir-kraus",
        "name": "Pinot Noir – Roučí Malé Kraus",
        "weight": "0,75L",
        "price": "425 Kč",
        "allergens": [
          "12"
        ],
        "description": "Roučí Malé Kraus – Mělnicko, Čechy",
        "questions": [
          {
            "id": "cervene-pinot-noir-kraus-vol",
            "question": "Jaký je servírovací objem lahve Pinot Noir Roučí Malé Kraus?",
            "correctAnswer": "0,75L",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací objem lahve je 0,75L."
          },
          {
            "id": "cervene-pinot-noir-kraus-prod",
            "question": "Které vinařství a z jaké oblasti produkuje tento Pinot Noir?",
            "correctAnswer": "Roučí Malé Kraus – Mělnicko, Čechy",
            "distractors": [
              "Vinařství Gotberg – Pálava",
              "Kolby – Pouzdřany"
            ],
            "explanation": "Víno pochází z vinařství Roučí Malé Kraus na Mělnicku v Čechách."
          },
          {
            "id": "cervene-pinot-noir-kraus-price",
            "question": "Jaká je prodejní cena lahve Pinot Noir Roučí Malé Kraus?",
            "correctAnswer": "425 Kč",
            "distractors": [
              "495 Kč",
              "380 Kč"
            ],
            "explanation": "Cena lahve Pinot Noir Roučí Malé Kraus je 425 Kč."
          },
          {
            "id": "cervene-pinot-noir-kraus-allergen",
            "question": "Který alergen obsahuje Pinot Noir Roučí Malé Kraus?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 1 – Lepek",
              "Alergen č. 7 – Mléko"
            ],
            "explanation": "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "cervene-dornfelder-bilkovi",
        "name": "Dornfelder – Bílkovi",
        "weight": "0,75L",
        "price": "419 Kč",
        "allergens": [
          "12"
        ],
        "description": "Bílkovi – Velkopavlovicko, Morava",
        "questions": [
          {
            "id": "cervene-dornfelder-bilkovi-vol",
            "question": "Jaký je servírovací objem lahve Dornfelder od Bílkových?",
            "correctAnswer": "0,75L",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací objem položky Dornfelder je 0,75L."
          },
          {
            "id": "cervene-dornfelder-bilkovi-prod",
            "question": "Které vinařství a z jaké moravské podoblasti produkuje tento Dornfelder?",
            "correctAnswer": "Bílkovi – Velkopavlovicko, Morava",
            "distractors": [
              "Reisten – Mikulovsko",
              "Sůkal – Slovácko"
            ],
            "explanation": "Dornfelder produkuje rodinné vinařství Bílkovi z Velkopavlovicka na Moravě."
          },
          {
            "id": "cervene-dornfelder-bilkovi-price",
            "question": "Jaká je prodejní cena lahve Dornfelder Bílkovi?",
            "correctAnswer": "419 Kč",
            "distractors": [
              "469 Kč",
              "379 Kč"
            ],
            "explanation": "Cena lahve Dornfelder od Bílkových je 419 Kč."
          },
          {
            "id": "cervene-dornfelder-bilkovi-allergen",
            "question": "Který alergen obsahuje Dornfelder Bílkovi?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 6 – Sója",
              "Alergen č. 3 – Vejce"
            ],
            "explanation": "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "cervene-cuvee-red-kolby",
        "name": "Cuvée Red – (Cabernet Sauvignon, Merlot) Kolby",
        "weight": "0,75L",
        "price": "649 Kč",
        "allergens": [
          "12"
        ],
        "description": "(Cabernet Sauvignon, Merlot) Kolby – Mikulovsko, Morava",
        "questions": [
          {
            "id": "cervene-cuvee-red-kolby-vol",
            "question": "Jaký je servírovací objem položky Cuvée Red Kolby?",
            "correctAnswer": "0,75L",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací objem lahve Cuvée Red Kolby je 0,75L."
          },
          {
            "id": "cervene-cuvee-red-kolby-grapes",
            "question": "Ze kterých dvou odrůd je složeno víno Cuvée Red Kolby?",
            "correctAnswer": "Cabernet Sauvignon a Merlot",
            "distractors": [
              "Frankovka a Zweigelt",
              "Pinot Noir a Dornfelder"
            ],
            "explanation": "Cuvée Red z vinařství Kolby je kupáží odrůd Cabernet Sauvignon a Merlot."
          },
          {
            "id": "cervene-cuvee-red-kolby-prod",
            "question": "Které vinařství z Mikulovska připravuje toto Cuvée Red?",
            "correctAnswer": "Kolby – Mikulovsko, Morava",
            "distractors": [
              "Gotberg – Pálava",
              "Bílkovi – Velkopavlovicko"
            ],
            "explanation": "Cuvée Red vyrábí vinařství Kolby v Pouzdřanech na Mikulovsku."
          },
          {
            "id": "cervene-cuvee-red-kolby-price",
            "question": "Jaká je prodejní cena lahve Cuvée Red Kolby?",
            "correctAnswer": "649 Kč",
            "distractors": [
              "599 Kč",
              "720 Kč"
            ],
            "explanation": "Cena lahve Cuvée Red Kolby je 649 Kč."
          },
          {
            "id": "cervene-cuvee-red-kolby-allergen",
            "question": "Který alergen obsahuje víno Cuvée Red Kolby?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 5 – Arašídy",
              "Alergen č. 1 – Lepek"
            ],
            "explanation": "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "cervene-nina-cuvee-bilkovi",
        "name": "Nina Cuvée – (Merlot, Frankovka) Bílkovi",
        "weight": "0,75L",
        "price": "699 Kč",
        "allergens": [
          "12"
        ],
        "description": "(Merlot, Frankovka) Bílkovi – Velkopavlovicko, Morava",
        "questions": [
          {
            "id": "cervene-nina-cuvee-bilkovi-vol",
            "question": "Jaký je servírovací objem lahve Nina Cuvée od Bílkových?",
            "correctAnswer": "0,75L",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací objem položky Nina Cuvée je 0,75L."
          },
          {
            "id": "cervene-nina-cuvee-bilkovi-grapes",
            "question": "Jaké dvě odrůdy tvoří kupáž Nina Cuvée od vinařství Bílkovi?",
            "correctAnswer": "Merlot a Frankovka",
            "distractors": [
              "Cabernet Sauvignon a Pinot Noir",
              "Dornfelder a Svatovavřinecké"
            ],
            "explanation": "Nina Cuvée je harmonická kupáž odrůd Merlot a Frankovka."
          },
          {
            "id": "cervene-nina-cuvee-bilkovi-prod",
            "question": "Které vinařství a z jaké oblasti produkuje Nina Cuvée?",
            "correctAnswer": "Bílkovi – Velkopavlovicko, Morava",
            "distractors": [
              "Kolby – Mikulovsko",
              "Kraus – Mělnicko"
            ],
            "explanation": "Nina Cuvée pochází z rodinného vinařství Bílkovi na Velkopavlovicku."
          },
          {
            "id": "cervene-nina-cuvee-bilkovi-price",
            "question": "Jaká je prodejní cena lahve Nina Cuvée Bílkovi?",
            "correctAnswer": "699 Kč",
            "distractors": [
              "629 Kč",
              "789 Kč"
            ],
            "explanation": "Cena lahve Nina Cuvée Bílkovi je 699 Kč."
          },
          {
            "id": "cervene-nina-cuvee-bilkovi-allergen",
            "question": "Který alergen obsahuje víno Nina Cuvée?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 7 – Mléko",
              "Alergen č. 9 – Celer"
            ],
            "explanation": "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "cervene-zweigelt-feiler-artinger",
        "name": "Zweigelt – Weingut Feiler-Artinger",
        "weight": "0,75L",
        "price": "660 Kč",
        "allergens": [
          "12"
        ],
        "description": "Weingut Feiler-Artinger – Burgenland, Rakousko",
        "questions": [
          {
            "id": "cervene-zweigelt-feiler-artinger-vol",
            "question": "Jaký je servírovací objem položky Zweigelt Weingut Feiler-Artinger?",
            "correctAnswer": "0,75L",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací objem lahve je 0,75L."
          },
          {
            "id": "cervene-zweigelt-feiler-artinger-prod",
            "question": "Ze které země a regionu pochází vinařství Feiler-Artinger?",
            "correctAnswer": "Burgenland, Rakousko",
            "distractors": [
              "Weinviertel, Rakousko",
              "Pfalz, Německo"
            ],
            "explanation": "Weingut Feiler-Artinger sídlí v rakouské vinařské oblasti Burgenland."
          },
          {
            "id": "cervene-zweigelt-feiler-artinger-price",
            "question": "Jaká je prodejní cena lahve Zweigelt Feiler-Artinger?",
            "correctAnswer": "660 Kč",
            "distractors": [
              "590 Kč",
              "720 Kč"
            ],
            "explanation": "Cena lahve Zweigelt Feiler-Artinger je 660 Kč."
          },
          {
            "id": "cervene-zweigelt-feiler-artinger-variety",
            "question": "O jakou typickou rakouskou odrůdu se jedná u tohoto červeného vína?",
            "correctAnswer": "Zweigelt",
            "distractors": [
              "Blaufränkisch",
              "St. Laurent"
            ],
            "explanation": "Jedná se o tradiční odrůdu Zweigelt (Zweigeltrebe)."
          },
          {
            "id": "cervene-zweigelt-feiler-artinger-allergen",
            "question": "Který alergen obsahuje Zweigelt Feiler-Artinger?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 2 – Korýši",
              "Alergen č. 1 – Lepek"
            ],
            "explanation": "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "cervene-pinot-noir-kuhn",
        "name": "Pinot Noir – Tradition Philip Kuhn",
        "weight": "0,75L",
        "price": "959 Kč",
        "allergens": [
          "12"
        ],
        "description": "Tradition Philip Kuhn – Pfalz, Německo",
        "questions": [
          {
            "id": "cervene-pinot-noir-kuhn-vol",
            "question": "Jaký je servírovací objem lahve německého Pinot Noir Philip Kuhn?",
            "correctAnswer": "0,75L",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací objem lahve je 0,75L."
          },
          {
            "id": "cervene-pinot-noir-kuhn-type",
            "question": "Jakou edici / typ představuje tento Pinot Noir od Philipa Kuhna?",
            "correctAnswer": "Tradition",
            "distractors": [
              "Reserve",
              "Grand Cru"
            ],
            "explanation": "Pinot Noir od Philipa Kuhna nese označení Tradition."
          },
          {
            "id": "cervene-pinot-noir-kuhn-prod",
            "question": "Ze které německé oblasti pochází vinař Philip Kuhn?",
            "correctAnswer": "Pfalz, Německo",
            "distractors": [
              "Mosel, Německo",
              "Rheingau, Německo"
            ],
            "explanation": "Vinařství Philip Kuhn sídlí v německé oblasti Pfalz."
          },
          {
            "id": "cervene-pinot-noir-kuhn-price",
            "question": "Jaká je prodejní cena lahve Pinot Noir Tradition Philip Kuhn?",
            "correctAnswer": "959 Kč",
            "distractors": [
              "879 Kč",
              "1090 Kč"
            ],
            "explanation": "Cena lahve Pinot Noir Tradition Philip Kuhn je 959 Kč."
          },
          {
            "id": "cervene-pinot-noir-kuhn-allergen",
            "question": "Který alergen obsahuje Pinot Noir Philip Kuhn?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 11 – Sezam",
              "Alergen č. 4 – Ryby"
            ],
            "explanation": "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "cervene-cabernet-sauvignon-lapis-luna",
        "name": "Cabernet Sauvignon – Lapis Luna",
        "weight": "0,75L",
        "price": "789 Kč",
        "allergens": [
          "12"
        ],
        "description": "Lapis Luna – Lodi, Kalifornie",
        "questions": [
          {
            "id": "cervene-cabernet-sauvignon-lapis-luna-vol",
            "question": "Jaký je servírovací objem vína Cabernet Sauvignon Lapis Luna?",
            "correctAnswer": "0,75L",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací objem položky Cabernet Sauvignon Lapis Luna je 0,75L."
          },
          {
            "id": "cervene-cabernet-sauvignon-lapis-luna-prod",
            "question": "Ze které kalifornské oblasti pochází Cabernet Sauvignon Lapis Luna?",
            "correctAnswer": "Lodi, Kalifornie",
            "distractors": [
              "Napa Valley, Kalifornie",
              "Sonoma, Kalifornie"
            ],
            "explanation": "Cabernet Sauvignon od Lapis Luna pochází z oblasti Lodi v Kalifornii."
          },
          {
            "id": "cervene-cabernet-sauvignon-lapis-luna-price",
            "question": "Jaká je prodejní cena lahve Cabernet Sauvignon Lapis Luna?",
            "correctAnswer": "789 Kč",
            "distractors": [
              "729 Kč",
              "859 Kč"
            ],
            "explanation": "Cena lahve Cabernet Sauvignon Lapis Luna je 789 Kč."
          },
          {
            "id": "cervene-cabernet-sauvignon-lapis-luna-variety",
            "question": "O jakou odrůdu se jedná u tohoto vína od Lapis Luna?",
            "correctAnswer": "Cabernet Sauvignon",
            "distractors": [
              "Merlot",
              "Syrah"
            ],
            "explanation": "Jedná se o odrůdu Cabernet Sauvignon."
          },
          {
            "id": "cervene-cabernet-sauvignon-lapis-luna-allergen",
            "question": "Který alergen obsahuje Cabernet Sauvignon Lapis Luna?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 8 – Ořechy",
              "Alergen č. 6 – Sója"
            ],
            "explanation": "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      },
      {
        "id": "cervene-zinfandel-hendry-ranch",
        "name": "Zinfandel – Hendry Ranch HRW",
        "weight": "0,75L",
        "price": "995 Kč",
        "allergens": [
          "12"
        ],
        "description": "Hendry Ranch HRW – Napa Valley, Kalifornie",
        "questions": [
          {
            "id": "cervene-zinfandel-hendry-ranch-vol",
            "question": "Jaký je servírovací objem lahve Zinfandel Hendry Ranch HRW?",
            "correctAnswer": "0,75L",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací objem lahve Zinfandel Hendry Ranch HRW je 0,75L."
          },
          {
            "id": "cervene-zinfandel-hendry-ranch-prod",
            "question": "Ze kterého slavného údolí v Kalifornii pochází Hendry Ranch HRW?",
            "correctAnswer": "Napa Valley, Kalifornie",
            "distractors": [
              "Lodi, Kalifornie",
              "Paso Robles, Kalifornie"
            ],
            "explanation": "Hendry Ranch HRW sídlí v prestižním údolí Napa Valley v Kalifornii."
          },
          {
            "id": "cervene-zinfandel-hendry-ranch-price",
            "question": "Jaká je prodejní cena lahve Zinfandel Hendry Ranch HRW?",
            "correctAnswer": "995 Kč",
            "distractors": [
              "895 Kč",
              "1150 Kč"
            ],
            "explanation": "Cena lahve Zinfandel Hendry Ranch HRW je 995 Kč."
          },
          {
            "id": "cervene-zinfandel-hendry-ranch-variety",
            "question": "Jaká typická kalifornská odrůda tvoří toto víno z Hendry Ranch?",
            "correctAnswer": "Zinfandel",
            "distractors": [
              "Cabernet Franc",
              "Malbec"
            ],
            "explanation": "Jedná se o vyhlášenou kalifornskou odrůdu Zinfandel."
          },
          {
            "id": "cervene-zinfandel-hendry-ranch-allergen",
            "question": "Který alergen obsahuje Zinfandel Hendry Ranch HRW?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 1 – Lepek",
              "Alergen č. 7 – Mléko"
            ],
            "explanation": "Víno obsahuje alergen č. 12 (Oxid siřičitý a siřičitany)."
          }
        ]
      }
    ]
  }
];
