export interface Question {
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

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    "id": "predkrmy",
    "name": "předkrmy a malá jídla",
    "badge": "Předkrmy",
    "description": "Autorské předkrmy s důrazem na vyzrálé suroviny, lokální řemeslo a párování s pivem",
    "iconName": "Utensils",
    "items": [
      {
        "id": "tatarak",
        "name": "Krájený hovězí tatarák",
        "weight": "90g",
        "price": "239,-",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka, konfitovaný česnek, bramborová sláma",
        "notes": "Maso je krájené, nikoli mleté. Topinka se opéká na hovězím loji pro plnou chuť.",
        "questions": [
          {
            "id": "tatarak-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Krájený hovězí tatarák?",
            "correctAnswer": "Z květové špičky",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Krájený hovězí tatarák je obsaženo: Z květové špičky. Kompletní receptura položky: z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka, konfitovaný česnek, bramborová sláma."
          },
          {
            "id": "tatarak-ing-2",
            "question": "Který druh nakládaných okurek obsahuje podsložka Krájený hovězí tatarák?",
            "correctAnswer": "Okurčičky cornichons",
            "distractors": [
              "Grilované papričky Padrón",
              "Sterilované feferonky"
            ],
            "explanation": "V podsložce Krájený hovězí tatarák je obsaženo: Okurčičky cornichons. Kompletní receptura položky: z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka, konfitovaný česnek, bramborová sláma."
          },
          {
            "id": "tatarak-ing-3",
            "question": "Jaký druh cibulky či šalotky je součástí receptury Krájený hovězí tatarák?",
            "correctAnswer": "Marinované šalotky",
            "distractors": [
              "Kvašené okurky (kvašáky)",
              "Sušená rajčata"
            ],
            "explanation": "V podsložce Krájený hovězí tatarák je obsaženo: Marinované šalotky. Kompletní receptura položky: z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka, konfitovaný česnek, bramborová sláma."
          },
          {
            "id": "tatarak-ing-4",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Krájený hovězí tatarák?",
            "correctAnswer": "Pažitka",
            "distractors": [
              "Čerstvý rozmarýn",
              "Tymián"
            ],
            "explanation": "V podsložce Krájený hovězí tatarák je obsaženo: Pažitka. Kompletní receptura položky: z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka, konfitovaný česnek, bramborová sláma."
          },
          {
            "id": "tatarak-ing-5",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Krájený hovězí tatarák?",
            "correctAnswer": "Na hovězím loji opečená topinka",
            "distractors": [
              "Kváskový chléb",
              "Bramborová kaše"
            ],
            "explanation": "V podsložce Krájený hovězí tatarák je obsaženo: Na hovězím loji opečená topinka. Kompletní receptura položky: z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka, konfitovaný česnek, bramborová sláma."
          },
          {
            "id": "tatarak-ing-6",
            "question": "V jaké formě či úpravě je česnek součástí podsložky Krájený hovězí tatarák?",
            "correctAnswer": "Konfitovaný česnek",
            "distractors": [
              "Majoránka",
              "Koriandr"
            ],
            "explanation": "V podsložce Krájený hovězí tatarák je obsaženo: Konfitovaný česnek. Kompletní receptura položky: z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka, konfitovaný česnek, bramborová sláma."
          },
          {
            "id": "tatarak-ing-7",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Krájený hovězí tatarák?",
            "correctAnswer": "Bramborová sláma",
            "distractors": [
              "Zauzené rohlíčkové brambory",
              "Pivní sušenka"
            ],
            "explanation": "V podsložce Krájený hovězí tatarák je obsaženo: Bramborová sláma. Kompletní receptura položky: z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka, konfitovaný česnek, bramborová sláma."
          },
          {
            "id": "tatarak-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Krájený hovězí tatarák?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Krájený hovězí tatarák obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "tatarak-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Krájený hovězí tatarák?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Krájený hovězí tatarák obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "tatarak-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Krájený hovězí tatarák?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Krájený hovězí tatarák obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "klobasa-smrze",
        "name": "Naše telecí klobása se smrži",
        "weight": "100g",
        "price": "219,-",
        "allergens": [
          "1",
          "3",
          "7",
          "10"
        ],
        "description": "kaštany a sušenými švestkami, lanýžová omáčka, pivní sušenka",
        "notes": "Jemné telecí dílo obohacené luxusními jarními houbami smrži a sušeným ovocem.",
        "questions": [
          {
            "id": "klobasa-smrze-ing-1",
            "question": "Která z následujících surovin patří do podsložky Naše telecí klobása se smrži?",
            "correctAnswer": "Kaštany a sušenými švestkami",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Naše telecí klobása se smrži je obsaženo: Kaštany a sušenými švestkami. Kompletní receptura položky: kaštany a sušenými švestkami, lanýžová omáčka, pivní sušenka."
          },
          {
            "id": "klobasa-smrze-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Naše telecí klobása se smrži?",
            "correctAnswer": "Lanýžová omáčka",
            "distractors": [
              "Jablečná BBQ omáčka",
              "Libečková majonéza"
            ],
            "explanation": "V podsložce Naše telecí klobása se smrži je obsaženo: Lanýžová omáčka. Kompletní receptura položky: kaštany a sušenými švestkami, lanýžová omáčka, pivní sušenka."
          },
          {
            "id": "klobasa-smrze-ing-3",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Naše telecí klobása se smrži?",
            "correctAnswer": "Pivní sušenka",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Naše telecí klobása se smrži je obsaženo: Pivní sušenka. Kompletní receptura položky: kaštany a sušenými švestkami, lanýžová omáčka, pivní sušenka."
          },
          {
            "id": "klobasa-smrze-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Naše telecí klobása se smrži?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Naše telecí klobása se smrži obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "klobasa-smrze-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Naše telecí klobása se smrži?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Naše telecí klobása se smrži obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "klobasa-smrze-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Naše telecí klobása se smrži?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Naše telecí klobása se smrži obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "klobasa-smrze-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Naše telecí klobása se smrži?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 2 – Korýši a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "Naše telecí klobása se smrži obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "foie-gras",
        "name": "Paštika z kachních foie gras",
        "weight": "100g",
        "price": "315,-",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "v želé z piva Kasteel Rouge, višňová omáčka, opečená máslová brioška",
        "notes": "Dokonalé spojení tučných kachních jater s višňovým belgickým speciálem Kasteel Rouge.",
        "questions": [
          {
            "id": "foie-gras-ing-1",
            "question": "Která z následujících surovin patří do podsložky Paštika z kachních foie gras?",
            "correctAnswer": "V želé z piva Kasteel Rouge",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Paštika z kachních foie gras je obsaženo: V želé z piva Kasteel Rouge. Kompletní receptura položky: v želé z piva Kasteel Rouge, višňová omáčka, opečená máslová brioška."
          },
          {
            "id": "foie-gras-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Paštika z kachních foie gras?",
            "correctAnswer": "Višňová omáčka",
            "distractors": [
              "Jablečná BBQ omáčka",
              "Libečková majonéza"
            ],
            "explanation": "V podsložce Paštika z kachních foie gras je obsaženo: Višňová omáčka. Kompletní receptura položky: v želé z piva Kasteel Rouge, višňová omáčka, opečená máslová brioška."
          },
          {
            "id": "foie-gras-ing-3",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Paštika z kachních foie gras?",
            "correctAnswer": "Opečená máslová brioška",
            "distractors": [
              "Naše hranolky",
              "Zauzené rohlíčkové brambory"
            ],
            "explanation": "V podsložce Paštika z kachních foie gras je obsaženo: Opečená máslová brioška. Kompletní receptura položky: v želé z piva Kasteel Rouge, višňová omáčka, opečená máslová brioška."
          },
          {
            "id": "foie-gras-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Paštika z kachních foie gras?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Paštika z kachních foie gras obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "foie-gras-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Paštika z kachních foie gras?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Paštika z kachních foie gras obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "foie-gras-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Paštika z kachních foie gras?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Paštika z kachních foie gras obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "veprovy-bok-platky",
        "name": "Tenké plátky vepřového boku",
        "weight": "100g",
        "price": "169,-",
        "allergens": [
          "1",
          "4",
          "10"
        ],
        "description": "zauzeného chmelem, křupavé vepřové krekry, pyré z pečených jablek a hořčice, smažený hrách",
        "notes": "Unikátní technika uzení na pivovarském chmelu pro zemitě bylinkový tón.",
        "questions": [
          {
            "id": "veprovy-bok-platky-ing-1",
            "question": "Která pivovarská surovina nebo vlastnost charakterizuje Tenké plátky vepřového boku?",
            "correctAnswer": "Zauzeného chmelem",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Tenké plátky vepřového boku je obsaženo: Zauzeného chmelem. Kompletní receptura položky: zauzeného chmelem, křupavé vepřové krekry, pyré z pečených jablek a hořčice, smažený hrách."
          },
          {
            "id": "veprovy-bok-platky-ing-2",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Tenké plátky vepřového boku?",
            "correctAnswer": "Křupavé vepřové krekry",
            "distractors": [
              "Bramborová sláma",
              "Bramborová kaše"
            ],
            "explanation": "V podsložce Tenké plátky vepřového boku je obsaženo: Křupavé vepřové krekry. Kompletní receptura položky: zauzeného chmelem, křupavé vepřové krekry, pyré z pečených jablek a hořčice, smažený hrách."
          },
          {
            "id": "veprovy-bok-platky-ing-3",
            "question": "Která z následujících surovin patří do podsložky Tenké plátky vepřového boku?",
            "correctAnswer": "Pyré z pečených jablek a hořčice",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Tenké plátky vepřového boku je obsaženo: Pyré z pečených jablek a hořčice. Kompletní receptura položky: zauzeného chmelem, křupavé vepřové krekry, pyré z pečených jablek a hořčice, smažený hrách."
          },
          {
            "id": "veprovy-bok-platky-ing-4",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Tenké plátky vepřového boku?",
            "correctAnswer": "Smažený hrách",
            "distractors": [
              "Jelení hřbet",
              "Jehněčí kotletka"
            ],
            "explanation": "V podsložce Tenké plátky vepřového boku je obsaženo: Smažený hrách. Kompletní receptura položky: zauzeného chmelem, křupavé vepřové krekry, pyré z pečených jablek a hořčice, smažený hrách."
          },
          {
            "id": "veprovy-bok-platky-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Tenké plátky vepřového boku?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "Tenké plátky vepřového boku obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Ryby a výrobky z nich, Hořčice a výrobky z ní."
          },
          {
            "id": "veprovy-bok-platky-allergen-4",
            "question": "Který z následujících alergenů obsahuje podsložka Tenké plátky vepřového boku?",
            "correctAnswer": "Alergen č. 4 – Ryby a výrobky z nich",
            "distractors": [
              "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Tenké plátky vepřového boku obsahuje Alergen č. 4 – Ryby a výrobky z nich (pstruh, rybí maso, ančovičky, worcester). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Ryby a výrobky z nich, Hořčice a výrobky z ní."
          },
          {
            "id": "veprovy-bok-platky-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Tenké plátky vepřového boku?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)"
            ],
            "explanation": "Tenké plátky vepřového boku obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Ryby a výrobky z nich, Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "kureci-krokety",
        "name": "Smažené kuřecí krokety",
        "weight": "100g",
        "price": "175,-",
        "allergens": [
          "1",
          "3",
          "7",
          "14"
        ],
        "description": "s čedarem, naše salsa verde, libečková majonéza",
        "questions": [
          {
            "id": "kureci-krokety-ing-1",
            "question": "Který sýr či mléčná přísada je součástí receptury Smažené kuřecí krokety?",
            "correctAnswer": "S čedarem",
            "distractors": [
              "Omáčka Choron",
              "Višňová omáčka"
            ],
            "explanation": "V podsložce Smažené kuřecí krokety je obsaženo: S čedarem. Kompletní receptura položky: s čedarem, naše salsa verde, libečková majonéza."
          },
          {
            "id": "kureci-krokety-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Smažené kuřecí krokety?",
            "correctAnswer": "Naše salsa verde",
            "distractors": [
              "Jablečná BBQ omáčka",
              "Pikantní zauzená majonéza"
            ],
            "explanation": "V podsložce Smažené kuřecí krokety je obsaženo: Naše salsa verde. Kompletní receptura položky: s čedarem, naše salsa verde, libečková majonéza."
          },
          {
            "id": "kureci-krokety-ing-3",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Smažené kuřecí krokety?",
            "correctAnswer": "Libečková majonéza",
            "distractors": [
              "Hladkolistá petrželka",
              "Drcený kmín"
            ],
            "explanation": "V podsložce Smažené kuřecí krokety je obsaženo: Libečková majonéza. Kompletní receptura položky: s čedarem, naše salsa verde, libečková majonéza."
          },
          {
            "id": "kureci-krokety-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Smažené kuřecí krokety?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Smažené kuřecí krokety obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Měkkýši a výrobky z nich."
          },
          {
            "id": "kureci-krokety-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Smažené kuřecí krokety?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Smažené kuřecí krokety obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Měkkýši a výrobky z nich."
          },
          {
            "id": "kureci-krokety-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Smažené kuřecí krokety?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Smažené kuřecí krokety obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Měkkýši a výrobky z nich."
          },
          {
            "id": "kureci-krokety-allergen-14",
            "question": "Který z následujících alergenů obsahuje podsložka Smažené kuřecí krokety?",
            "correctAnswer": "Alergen č. 14 – Měkkýši a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Smažené kuřecí krokety obsahuje Alergen č. 14 – Měkkýši a výrobky z nich (slávky, chobotnice, kalamáry, ústřicová omáčka). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Měkkýši a výrobky z nich."
          }
        ]
      },
      {
        "id": "olomoucke-tvaruzky",
        "name": "Sekané olomoucké tvarůžky",
        "price": "199,-",
        "allergens": [
          "1",
          "3",
          "7",
          "10"
        ],
        "description": "s cibulkou, majoránkou a paprikou a hořčičným semínkem na opečeném kváskovém chlebu, křen, kyselá zeleninka",
        "questions": [
          {
            "id": "olomoucke-tvaruzky-ing-1",
            "question": "Jaký druh cibulky či šalotky je součástí receptury Sekané olomoucké tvarůžky?",
            "correctAnswer": "S cibulkou",
            "distractors": [
              "Marinované šalotky",
              "Pečená kořenová zelenina"
            ],
            "explanation": "V podsložce Sekané olomoucké tvarůžky je obsaženo: S cibulkou. Kompletní receptura položky: s cibulkou, majoránkou a paprikou a hořčičným semínkem na opečeném kváskovém chlebu, křen, kyselá zeleninka."
          },
          {
            "id": "olomoucke-tvaruzky-ing-2",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Sekané olomoucké tvarůžky?",
            "correctAnswer": "Majoránkou a paprikou a hořčičným semínkem na opečeném kváskovém chlebu",
            "distractors": [
              "Majoránka",
              "Koriandr"
            ],
            "explanation": "V podsložce Sekané olomoucké tvarůžky je obsaženo: Majoránkou a paprikou a hořčičným semínkem na opečeném kváskovém chlebu. Kompletní receptura položky: s cibulkou, majoránkou a paprikou a hořčičným semínkem na opečeném kváskovém chlebu, křen, kyselá zeleninka."
          },
          {
            "id": "olomoucke-tvaruzky-ing-3",
            "question": "Která z následujících surovin patří do podsložky Sekané olomoucké tvarůžky?",
            "correctAnswer": "Křen",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Sekané olomoucké tvarůžky je obsaženo: Křen. Kompletní receptura položky: s cibulkou, majoránkou a paprikou a hořčičným semínkem na opečeném kváskovém chlebu, křen, kyselá zeleninka."
          },
          {
            "id": "olomoucke-tvaruzky-ing-4",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Sekané olomoucké tvarůžky?",
            "correctAnswer": "Kyselá zeleninka",
            "distractors": [
              "Kvašené okurky (kvašáky)",
              "Sušená rajčata"
            ],
            "explanation": "V podsložce Sekané olomoucké tvarůžky je obsaženo: Kyselá zeleninka. Kompletní receptura položky: s cibulkou, majoránkou a paprikou a hořčičným semínkem na opečeném kváskovém chlebu, křen, kyselá zeleninka."
          },
          {
            "id": "olomoucke-tvaruzky-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Sekané olomoucké tvarůžky?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Sekané olomoucké tvarůžky obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "olomoucke-tvaruzky-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Sekané olomoucké tvarůžky?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Sekané olomoucké tvarůžky obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "olomoucke-tvaruzky-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Sekané olomoucké tvarůžky?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Sekané olomoucké tvarůžky obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "olomoucke-tvaruzky-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Sekané olomoucké tvarůžky?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 2 – Korýši a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "Sekané olomoucké tvarůžky obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      }
    ]
  },
  {
    "id": "chutovky",
    "name": "chuťovka",
    "badge": "Chuťovky",
    "description": "Drobné pochutiny a křupavé doplňky k pivním speciálům a koktejlům",
    "iconName": "Flame",
    "items": [
      {
        "id": "lanyzovy-popcorn",
        "name": "Lanýžový popcorn",
        "price": "139,-",
        "allergens": [
          "7"
        ],
        "description": "kukuřičný popcorn, lanýžový olej, strouhaný parmazán",
        "questions": [
          {
            "id": "lanyzovy-popcorn-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Lanýžový popcorn?",
            "correctAnswer": "Kukuřičný popcorn",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Lanýžový popcorn je obsaženo: Kukuřičný popcorn. Kompletní receptura položky: kukuřičný popcorn, lanýžový olej, strouhaný parmazán."
          },
          {
            "id": "lanyzovy-popcorn-ing-2",
            "question": "Která z následujících surovin patří do podsložky Lanýžový popcorn?",
            "correctAnswer": "Lanýžový olej",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Lanýžový popcorn je obsaženo: Lanýžový olej. Kompletní receptura položky: kukuřičný popcorn, lanýžový olej, strouhaný parmazán."
          },
          {
            "id": "lanyzovy-popcorn-ing-3",
            "question": "Který sýr či mléčná přísada je součástí receptury Lanýžový popcorn?",
            "correctAnswer": "Strouhaný parmazán",
            "distractors": [
              "Libečková majonéza",
              "Pikantní zauzená majonéza"
            ],
            "explanation": "V podsložce Lanýžový popcorn je obsaženo: Strouhaný parmazán. Kompletní receptura položky: kukuřičný popcorn, lanýžový olej, strouhaný parmazán."
          },
          {
            "id": "lanyzovy-popcorn-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Lanýžový popcorn?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Lanýžový popcorn obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "domaci-bramburky",
        "name": "Naše domácí brambůrky",
        "price": "125,-",
        "allergens": [
          "7"
        ],
        "description": "smažené bramborové lupínky, mořská sůl, pikantní zauzená majonéza",
        "questions": [
          {
            "id": "domaci-bramburky-ing-1",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Naše domácí brambůrky?",
            "correctAnswer": "Smažené bramborové lupínky",
            "distractors": [
              "Máslová brioška",
              "Kváskový chléb"
            ],
            "explanation": "V podsložce Naše domácí brambůrky je obsaženo: Smažené bramborové lupínky. Kompletní receptura položky: smažené bramborové lupínky, mořská sůl, pikantní zauzená majonéza."
          },
          {
            "id": "domaci-bramburky-ing-2",
            "question": "Která z následujících surovin patří do podsložky Naše domácí brambůrky?",
            "correctAnswer": "Mořská sůl",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Naše domácí brambůrky je obsaženo: Mořská sůl. Kompletní receptura položky: smažené bramborové lupínky, mořská sůl, pikantní zauzená majonéza."
          },
          {
            "id": "domaci-bramburky-ing-3",
            "question": "Která omáčka, dresink či redukce patří k podsložce Naše domácí brambůrky?",
            "correctAnswer": "Pikantní zauzená majonéza",
            "distractors": [
              "Libečková majonéza",
              "Koňaková omáčka"
            ],
            "explanation": "V podsložce Naše domácí brambůrky je obsaženo: Pikantní zauzená majonéza. Kompletní receptura položky: smažené bramborové lupínky, mořská sůl, pikantní zauzená majonéza."
          },
          {
            "id": "domaci-bramburky-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Naše domácí brambůrky?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Naše domácí brambůrky obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      }
    ]
  },
  {
    "id": "polevky",
    "name": "polévky",
    "badge": "Polévky",
    "description": "Tradiční poctivé vývary a vydatné zapečené polévky",
    "iconName": "Soup",
    "items": [
      {
        "id": "hovezi-consomme",
        "name": "Hovězí consommé",
        "price": "109,-",
        "allergens": [
          "9"
        ],
        "description": "silný hovězí vývar, jemný játrový knedlíček, kořenová zelenina",
        "questions": [
          {
            "id": "hovezi-consomme-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Hovězí consommé?",
            "correctAnswer": "Silný hovězí vývar",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Hovězí consommé je obsaženo: Silný hovězí vývar. Kompletní receptura položky: silný hovězí vývar, jemný játrový knedlíček, kořenová zelenina."
          },
          {
            "id": "hovezi-consomme-ing-2",
            "question": "Která z následujících surovin patří do podsložky Hovězí consommé?",
            "correctAnswer": "Jemný játrový knedlíček",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Hovězí consommé je obsaženo: Jemný játrový knedlíček. Kompletní receptura položky: silný hovězí vývar, jemný játrový knedlíček, kořenová zelenina."
          },
          {
            "id": "hovezi-consomme-ing-3",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Hovězí consommé?",
            "correctAnswer": "Kořenová zelenina",
            "distractors": [
              "Sterilované feferonky",
              "Kvašené okurky (kvašáky)"
            ],
            "explanation": "V podsložce Hovězí consommé je obsaženo: Kořenová zelenina. Kompletní receptura položky: silný hovězí vývar, jemný játrový knedlíček, kořenová zelenina."
          },
          {
            "id": "hovezi-consomme-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka Hovězí consommé?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Hovězí consommé obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Celer a výrobky z něj."
          }
        ]
      },
      {
        "id": "kremova-humri",
        "name": "Krémová humří polévka",
        "price": "269,-",
        "allergens": [
          "1",
          "2",
          "3",
          "7",
          "9"
        ],
        "description": "humří a mořská polévka, mořská klobáska, kořenová zelenina, zapečené listové těsto",
        "notes": "Servíruje se v misce zapečené křupavou kupolí z listového těsta přímo z pece.",
        "questions": [
          {
            "id": "kremova-humri-ing-1",
            "question": "Která z následujících surovin patří do podsložky Krémová humří polévka?",
            "correctAnswer": "Humří a mořská polévka",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Krémová humří polévka je obsaženo: Humří a mořská polévka. Kompletní receptura položky: humří a mořská polévka, mořská klobáska, kořenová zelenina, zapečené listové těsto."
          },
          {
            "id": "kremova-humri-ing-2",
            "question": "Která masová surovina tvoří základ podsložky Krémová humří polévka?",
            "correctAnswer": "Mořská klobáska",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Krémová humří polévka je obsaženo: Mořská klobáska. Kompletní receptura položky: humří a mořská polévka, mořská klobáska, kořenová zelenina, zapečené listové těsto."
          },
          {
            "id": "kremova-humri-ing-3",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Krémová humří polévka?",
            "correctAnswer": "Kořenová zelenina",
            "distractors": [
              "Sterilované feferonky",
              "Kvašené okurky (kvašáky)"
            ],
            "explanation": "V podsložce Krémová humří polévka je obsaženo: Kořenová zelenina. Kompletní receptura položky: humří a mořská polévka, mořská klobáska, kořenová zelenina, zapečené listové těsto."
          },
          {
            "id": "kremova-humri-ing-4",
            "question": "Která z následujících surovin patří do podsložky Krémová humří polévka?",
            "correctAnswer": "Zapečené listové těsto",
            "distractors": [
              "Jelení hřbet",
              "Jehněčí kotletka"
            ],
            "explanation": "V podsložce Krémová humří polévka je obsaženo: Zapečené listové těsto. Kompletní receptura položky: humří a mořská polévka, mořská klobáska, kořenová zelenina, zapečené listové těsto."
          },
          {
            "id": "kremova-humri-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Krémová humří polévka?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Krémová humří polévka obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj."
          },
          {
            "id": "kremova-humri-allergen-2",
            "question": "Který z následujících alergenů obsahuje podsložka Krémová humří polévka?",
            "correctAnswer": "Alergen č. 2 – Korýši a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Krémová humří polévka obsahuje Alergen č. 2 – Korýši a výrobky z nich (krevety, krabi, humři, krevetová pasta). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj."
          },
          {
            "id": "kremova-humri-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Krémová humří polévka?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Krémová humří polévka obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj."
          },
          {
            "id": "kremova-humri-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Krémová humří polévka?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Krémová humří polévka obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj."
          },
          {
            "id": "kremova-humri-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka Krémová humří polévka?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Krémová humří polévka obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj."
          }
        ]
      }
    ]
  },
  {
    "id": "salaty",
    "name": "saláty",
    "badge": "Saláty",
    "description": "Čerstvé salátové variace s pečeným masem a vyváženými dresinky",
    "iconName": "Salad",
    "items": [
      {
        "id": "caesar-salat",
        "name": "Caesar salát",
        "price": "289,-",
        "allergens": [
          "1",
          "3",
          "4",
          "7",
          "10"
        ],
        "description": "trhané kuře pečené v peci, opečená slanina, parmezán, křupavé krutony, ančovičkový dresink",
        "questions": [
          {
            "id": "caesar-salat-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Caesar salát?",
            "correctAnswer": "Trhané kuře pečené v peci",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Caesar salát je obsaženo: Trhané kuře pečené v peci. Kompletní receptura položky: trhané kuře pečené v peci, opečená slanina, parmezán, křupavé krutony, ančovičkový dresink."
          },
          {
            "id": "caesar-salat-ing-2",
            "question": "Která z následujících surovin patří do podsložky Caesar salát?",
            "correctAnswer": "Opečená slanina",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Caesar salát je obsaženo: Opečená slanina. Kompletní receptura položky: trhané kuře pečené v peci, opečená slanina, parmezán, křupavé krutony, ančovičkový dresink."
          },
          {
            "id": "caesar-salat-ing-3",
            "question": "Která z následujících surovin patří do podsložky Caesar salát?",
            "correctAnswer": "Parmezán",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Caesar salát je obsaženo: Parmezán. Kompletní receptura položky: trhané kuře pečené v peci, opečená slanina, parmezán, křupavé krutony, ančovičkový dresink."
          },
          {
            "id": "caesar-salat-ing-4",
            "question": "Která z následujících surovin patří do podsložky Caesar salát?",
            "correctAnswer": "Křupavé krutony",
            "distractors": [
              "Jelení hřbet",
              "Jehněčí kotletka"
            ],
            "explanation": "V podsložce Caesar salát je obsaženo: Křupavé krutony. Kompletní receptura položky: trhané kuře pečené v peci, opečená slanina, parmezán, křupavé krutony, ančovičkový dresink."
          },
          {
            "id": "caesar-salat-ing-5",
            "question": "Která z následujících surovin patří do podsložky Caesar salát?",
            "correctAnswer": "Ančovičkový dresink",
            "distractors": [
              "Krůtí prsa",
              "Hovězí květová špička"
            ],
            "explanation": "V podsložce Caesar salát je obsaženo: Ančovičkový dresink. Kompletní receptura položky: trhané kuře pečené v peci, opečená slanina, parmezán, křupavé krutony, ančovičkový dresink."
          },
          {
            "id": "caesar-salat-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Caesar salát?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Caesar salát obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "caesar-salat-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Caesar salát?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Caesar salát obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "caesar-salat-allergen-4",
            "question": "Který z následujících alergenů obsahuje podsložka Caesar salát?",
            "correctAnswer": "Alergen č. 4 – Ryby a výrobky z nich",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Caesar salát obsahuje Alergen č. 4 – Ryby a výrobky z nich (pstruh, rybí maso, ančovičky, worcester). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "caesar-salat-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Caesar salát?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Caesar salát obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "caesar-salat-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Caesar salát?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Caesar salát obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "waldorf-salat",
        "name": "Waldorf salát",
        "price": "245,-",
        "allergens": [
          "8",
          "9",
          "10"
        ],
        "description": "křupavá jablka, řapíkatý celer, bobule hroznového vína, nakládané vlašské ořechy, majonézový dresing",
        "questions": [
          {
            "id": "waldorf-salat-ing-1",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Waldorf salát?",
            "correctAnswer": "Křupavá jablka",
            "distractors": [
              "Marinované šalotky",
              "Pečená kořenová zelenina"
            ],
            "explanation": "V podsložce Waldorf salát je obsaženo: Křupavá jablka. Kompletní receptura položky: křupavá jablka, řapíkatý celer, bobule hroznového vína, nakládané vlašské ořechy, majonézový dresing."
          },
          {
            "id": "waldorf-salat-ing-2",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Waldorf salát?",
            "correctAnswer": "Řapíkatý celer",
            "distractors": [
              "Kysané bílé zelí",
              "Nakládané perlové cibulky"
            ],
            "explanation": "V podsložce Waldorf salát je obsaženo: Řapíkatý celer. Kompletní receptura položky: křupavá jablka, řapíkatý celer, bobule hroznového vína, nakládané vlašské ořechy, majonézový dresing."
          },
          {
            "id": "waldorf-salat-ing-3",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Waldorf salát?",
            "correctAnswer": "Bobule hroznového vína",
            "distractors": [
              "Grilované papričky Padrón",
              "Sterilované feferonky"
            ],
            "explanation": "V podsložce Waldorf salát je obsaženo: Bobule hroznového vína. Kompletní receptura položky: křupavá jablka, řapíkatý celer, bobule hroznového vína, nakládané vlašské ořechy, majonézový dresing."
          },
          {
            "id": "waldorf-salat-ing-4",
            "question": "Která z následujících surovin patří do podsložky Waldorf salát?",
            "correctAnswer": "Nakládané vlašské ořechy",
            "distractors": [
              "Jelení hřbet",
              "Jehněčí kotletka"
            ],
            "explanation": "V podsložce Waldorf salát je obsaženo: Nakládané vlašské ořechy. Kompletní receptura položky: křupavá jablka, řapíkatý celer, bobule hroznového vína, nakládané vlašské ořechy, majonézový dresing."
          },
          {
            "id": "waldorf-salat-ing-5",
            "question": "Která omáčka, dresink či redukce patří k podsložce Waldorf salát?",
            "correctAnswer": "Majonézový dresing",
            "distractors": [
              "Sýr čedar",
              "Lanýžová omáčka"
            ],
            "explanation": "V podsložce Waldorf salát je obsaženo: Majonézový dresing. Kompletní receptura položky: křupavá jablka, řapíkatý celer, bobule hroznového vína, nakládané vlašské ořechy, majonézový dresing."
          },
          {
            "id": "waldorf-salat-allergen-8",
            "question": "Který z následujících alergenů obsahuje podsložka Waldorf salát?",
            "correctAnswer": "Alergen č. 8 – Skořápkové plody (ořechy)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 3 – Vejce a výrobky z nich"
            ],
            "explanation": "Waldorf salát obsahuje Alergen č. 8 – Skořápkové plody (ořechy) (vlašské ořechy, mandle, lískové ořechy). Všechny evidované alergeny této podsložky: Skořápkové plody (ořechy) a výrobky z nich, Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "waldorf-salat-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka Waldorf salát?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Waldorf salát obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Skořápkové plody (ořechy) a výrobky z nich, Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "waldorf-salat-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Waldorf salát?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Waldorf salát obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Skořápkové plody (ořechy) a výrobky z nich, Celer a výrobky z něj, Hořčice a výrobky z ní."
          }
        ]
      }
    ]
  },
  {
    "id": "sporak",
    "name": "ze sporáku a trouby",
    "badge": "Hlavní jídla",
    "description": "Dlouze pečená a tažená masa, tradiční omáčky a rybí speciality",
    "iconName": "CookingPot",
    "items": [
      {
        "id": "pecene-koleno",
        "name": "Pečené vepřové koleno",
        "weight": "1ks",
        "price": "459,-",
        "allergens": [
          "1",
          "10"
        ],
        "description": "pečené vepřové koleno, plnotučná hořčice, strouhaný křen, zelný salát s křenem",
        "notes": "Připravováno denně v limitovaném počtu porcí do vyprodání.",
        "questions": [
          {
            "id": "pecene-koleno-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Pečené vepřové koleno?",
            "correctAnswer": "Pečené vepřové koleno",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Pečené vepřové koleno je obsaženo: Pečené vepřové koleno. Kompletní receptura položky: pečené vepřové koleno, plnotučná hořčice, strouhaný křen, zelný salát s křenem."
          },
          {
            "id": "pecene-koleno-ing-2",
            "question": "Která z následujících surovin patří do podsložky Pečené vepřové koleno?",
            "correctAnswer": "Plnotučná hořčice",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Pečené vepřové koleno je obsaženo: Plnotučná hořčice. Kompletní receptura položky: pečené vepřové koleno, plnotučná hořčice, strouhaný křen, zelný salát s křenem."
          },
          {
            "id": "pecene-koleno-ing-3",
            "question": "Která z následujících surovin patří do podsložky Pečené vepřové koleno?",
            "correctAnswer": "Strouhaný křen",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Pečené vepřové koleno je obsaženo: Strouhaný křen. Kompletní receptura položky: pečené vepřové koleno, plnotučná hořčice, strouhaný křen, zelný salát s křenem."
          },
          {
            "id": "pecene-koleno-ing-4",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Pečené vepřové koleno?",
            "correctAnswer": "Zelný salát s křenem",
            "distractors": [
              "Jelení hřbet",
              "Jehněčí kotletka"
            ],
            "explanation": "V podsložce Pečené vepřové koleno je obsaženo: Zelný salát s křenem. Kompletní receptura položky: pečené vepřové koleno, plnotučná hořčice, strouhaný křen, zelný salát s křenem."
          },
          {
            "id": "pecene-koleno-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Pečené vepřové koleno?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Pečené vepřové koleno obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Hořčice a výrobky z ní."
          },
          {
            "id": "pecene-koleno-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Pečené vepřové koleno?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Pečené vepřové koleno obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "veprovy-rizek-duroc",
        "name": "Vysoký vepřový řízek z plemene Duroc",
        "weight": "200g",
        "price": "309,-",
        "allergens": [
          "1",
          "3",
          "4",
          "7",
          "10"
        ],
        "description": "vepřová kotleta Duroc, omáčka fines herbes, bramborová kaše, bramborové křupky",
        "questions": [
          {
            "id": "veprovy-rizek-duroc-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Vysoký vepřový řízek z plemene Duroc?",
            "correctAnswer": "Vepřová kotleta Duroc",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Vysoký vepřový řízek z plemene Duroc je obsaženo: Vepřová kotleta Duroc. Kompletní receptura položky: vepřová kotleta Duroc, omáčka fines herbes, bramborová kaše, bramborové křupky."
          },
          {
            "id": "veprovy-rizek-duroc-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Vysoký vepřový řízek z plemene Duroc?",
            "correctAnswer": "Omáčka fines herbes",
            "distractors": [
              "Majoránka",
              "Koriandr"
            ],
            "explanation": "V podsložce Vysoký vepřový řízek z plemene Duroc je obsaženo: Omáčka fines herbes. Kompletní receptura položky: vepřová kotleta Duroc, omáčka fines herbes, bramborová kaše, bramborové křupky."
          },
          {
            "id": "veprovy-rizek-duroc-ing-3",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Vysoký vepřový řízek z plemene Duroc?",
            "correctAnswer": "Bramborová kaše",
            "distractors": [
              "Zauzené rohlíčkové brambory",
              "Pivní sušenka"
            ],
            "explanation": "V podsložce Vysoký vepřový řízek z plemene Duroc je obsaženo: Bramborová kaše. Kompletní receptura položky: vepřová kotleta Duroc, omáčka fines herbes, bramborová kaše, bramborové křupky."
          },
          {
            "id": "veprovy-rizek-duroc-ing-4",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Vysoký vepřový řízek z plemene Duroc?",
            "correctAnswer": "Bramborové křupky",
            "distractors": [
              "Křupavé vepřové krekry",
              "Na hovězím loji opečená topinka"
            ],
            "explanation": "V podsložce Vysoký vepřový řízek z plemene Duroc je obsaženo: Bramborové křupky. Kompletní receptura položky: vepřová kotleta Duroc, omáčka fines herbes, bramborová kaše, bramborové křupky."
          },
          {
            "id": "veprovy-rizek-duroc-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Vysoký vepřový řízek z plemene Duroc?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Vysoký vepřový řízek z plemene Duroc obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprovy-rizek-duroc-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Vysoký vepřový řízek z plemene Duroc?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Vysoký vepřový řízek z plemene Duroc obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprovy-rizek-duroc-allergen-4",
            "question": "Který z následujících alergenů obsahuje podsložka Vysoký vepřový řízek z plemene Duroc?",
            "correctAnswer": "Alergen č. 4 – Ryby a výrobky z nich",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Vysoký vepřový řízek z plemene Duroc obsahuje Alergen č. 4 – Ryby a výrobky z nich (pstruh, rybí maso, ančovičky, worcester). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprovy-rizek-duroc-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Vysoký vepřový řízek z plemene Duroc?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Vysoký vepřový řízek z plemene Duroc obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprovy-rizek-duroc-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Vysoký vepřový řízek z plemene Duroc?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Vysoký vepřový řízek z plemene Duroc obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "veprova-zebra",
        "name": "Vepřová žebra marinovaná s pivem",
        "weight": "500g",
        "price": "379,-",
        "allergens": [
          "1",
          "3",
          "6",
          "7",
          "10"
        ],
        "description": "vepřová žebra marinovaná s pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, zelný salát s křenem, opečená česneková brioška",
        "questions": [
          {
            "id": "veprova-zebra-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Vepřová žebra marinovaná s pivem?",
            "correctAnswer": "Vepřová žebra marinovaná s pivem",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Vepřová žebra marinovaná s pivem je obsaženo: Vepřová žebra marinovaná s pivem. Kompletní receptura položky: vepřová žebra marinovaná s pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, zelný salát s křenem, opečená česneková brioška."
          },
          {
            "id": "veprova-zebra-ing-2",
            "question": "Která z následujících surovin patří do podsložky Vepřová žebra marinovaná s pivem?",
            "correctAnswer": "Kandovaná slanina",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Vepřová žebra marinovaná s pivem je obsaženo: Kandovaná slanina. Kompletní receptura položky: vepřová žebra marinovaná s pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, zelný salát s křenem, opečená česneková brioška."
          },
          {
            "id": "veprova-zebra-ing-3",
            "question": "Jaký druh cibulky či šalotky je součástí receptury Vepřová žebra marinovaná s pivem?",
            "correctAnswer": "Perlové cibulky",
            "distractors": [
              "Sterilované feferonky",
              "Kvašené okurky (kvašáky)"
            ],
            "explanation": "V podsložce Vepřová žebra marinovaná s pivem je obsaženo: Perlové cibulky. Kompletní receptura položky: vepřová žebra marinovaná s pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, zelný salát s křenem, opečená česneková brioška."
          },
          {
            "id": "veprova-zebra-ing-4",
            "question": "Která omáčka, dresink či redukce patří k podsložce Vepřová žebra marinovaná s pivem?",
            "correctAnswer": "Jablečná bbq omáčka",
            "distractors": [
              "Koprová omáčka",
              "Sýr čedar"
            ],
            "explanation": "V podsložce Vepřová žebra marinovaná s pivem je obsaženo: Jablečná bbq omáčka. Kompletní receptura položky: vepřová žebra marinovaná s pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, zelný salát s křenem, opečená česneková brioška."
          },
          {
            "id": "veprova-zebra-ing-5",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Vepřová žebra marinovaná s pivem?",
            "correctAnswer": "Zelný salát s křenem",
            "distractors": [
              "Krůtí prsa",
              "Hovězí květová špička"
            ],
            "explanation": "V podsložce Vepřová žebra marinovaná s pivem je obsaženo: Zelný salát s křenem. Kompletní receptura položky: vepřová žebra marinovaná s pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, zelný salát s křenem, opečená česneková brioška."
          },
          {
            "id": "veprova-zebra-ing-6",
            "question": "V jaké formě či úpravě je česnek součástí podsložky Vepřová žebra marinovaná s pivem?",
            "correctAnswer": "Opečená česneková brioška",
            "distractors": [
              "Máslová brioška",
              "Kváskový chléb"
            ],
            "explanation": "V podsložce Vepřová žebra marinovaná s pivem je obsaženo: Opečená česneková brioška. Kompletní receptura položky: vepřová žebra marinovaná s pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, zelný salát s křenem, opečená česneková brioška."
          },
          {
            "id": "veprova-zebra-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Vepřová žebra marinovaná s pivem?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Vepřová žebra marinovaná s pivem obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Sójové boby (sója) a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprova-zebra-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Vepřová žebra marinovaná s pivem?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Vepřová žebra marinovaná s pivem obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Sójové boby (sója) a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprova-zebra-allergen-6",
            "question": "Který z následujících alergenů obsahuje podsložka Vepřová žebra marinovaná s pivem?",
            "correctAnswer": "Alergen č. 6 – Sójové boby (sója)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Vepřová žebra marinovaná s pivem obsahuje Alergen č. 6 – Sójové boby (sója) (sójová omáčka, edamame, tofu, lecitin). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Sójové boby (sója) a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprova-zebra-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Vepřová žebra marinovaná s pivem?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Vepřová žebra marinovaná s pivem obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Sójové boby (sója) a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprova-zebra-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Vepřová žebra marinovaná s pivem?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Vepřová žebra marinovaná s pivem obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Sójové boby (sója) a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "hovezi-koprovka",
        "name": "Tažené hovězí maso s koprovou omáčkou",
        "weight": "200g",
        "price": "345,-",
        "allergens": [
          "3",
          "7"
        ],
        "description": "tažené hovězí maso, jemná koprová omáčka, vařené vejce, rohlíčkové brambory, koprový olej",
        "questions": [
          {
            "id": "hovezi-koprovka-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Tažené hovězí maso s koprovou omáčkou?",
            "correctAnswer": "Tažené hovězí maso",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Tažené hovězí maso s koprovou omáčkou je obsaženo: Tažené hovězí maso. Kompletní receptura položky: tažené hovězí maso, jemná koprová omáčka, vařené vejce, rohlíčkové brambory, koprový olej."
          },
          {
            "id": "hovezi-koprovka-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Tažené hovězí maso s koprovou omáčkou?",
            "correctAnswer": "Jemná koprová omáčka",
            "distractors": [
              "Višňová omáčka",
              "Jablečná BBQ omáčka"
            ],
            "explanation": "V podsložce Tažené hovězí maso s koprovou omáčkou je obsaženo: Jemná koprová omáčka. Kompletní receptura položky: tažené hovězí maso, jemná koprová omáčka, vařené vejce, rohlíčkové brambory, koprový olej."
          },
          {
            "id": "hovezi-koprovka-ing-3",
            "question": "Která z následujících surovin patří do podsložky Tažené hovězí maso s koprovou omáčkou?",
            "correctAnswer": "Vařené vejce",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Tažené hovězí maso s koprovou omáčkou je obsaženo: Vařené vejce. Kompletní receptura položky: tažené hovězí maso, jemná koprová omáčka, vařené vejce, rohlíčkové brambory, koprový olej."
          },
          {
            "id": "hovezi-koprovka-ing-4",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Tažené hovězí maso s koprovou omáčkou?",
            "correctAnswer": "Rohlíčkové brambory",
            "distractors": [
              "Pivní sušenka",
              "Křupavé vepřové krekry"
            ],
            "explanation": "V podsložce Tažené hovězí maso s koprovou omáčkou je obsaženo: Rohlíčkové brambory. Kompletní receptura položky: tažené hovězí maso, jemná koprová omáčka, vařené vejce, rohlíčkové brambory, koprový olej."
          },
          {
            "id": "hovezi-koprovka-ing-5",
            "question": "Která z následujících surovin patří do podsložky Tažené hovězí maso s koprovou omáčkou?",
            "correctAnswer": "Koprový olej",
            "distractors": [
              "Krůtí prsa",
              "Hovězí květová špička"
            ],
            "explanation": "V podsložce Tažené hovězí maso s koprovou omáčkou je obsaženo: Koprový olej. Kompletní receptura položky: tažené hovězí maso, jemná koprová omáčka, vařené vejce, rohlíčkové brambory, koprový olej."
          },
          {
            "id": "hovezi-koprovka-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Tažené hovězí maso s koprovou omáčkou?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Tažené hovězí maso s koprovou omáčkou obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "hovezi-koprovka-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Tažené hovězí maso s koprovou omáčkou?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 1 – Obiloviny obsahující lepek"
            ],
            "explanation": "Tažené hovězí maso s koprovou omáčkou obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "testoviny-kureci",
        "name": "Těstoviny plněné jemnou kuřecí směsí",
        "price": "299,-",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "těstoviny s kuřecí směsí, smetanová hříbková omáčka, grilovaná hlíva ústřičná, bylinkový olej",
        "questions": [
          {
            "id": "testoviny-kureci-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Těstoviny plněné jemnou kuřecí směsí?",
            "correctAnswer": "Těstoviny s kuřecí směsí",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Těstoviny plněné jemnou kuřecí směsí je obsaženo: Těstoviny s kuřecí směsí. Kompletní receptura položky: těstoviny s kuřecí směsí, smetanová hříbková omáčka, grilovaná hlíva ústřičná, bylinkový olej."
          },
          {
            "id": "testoviny-kureci-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Těstoviny plněné jemnou kuřecí směsí?",
            "correctAnswer": "Smetanová hříbková omáčka",
            "distractors": [
              "Višňová omáčka",
              "Jablečná BBQ omáčka"
            ],
            "explanation": "V podsložce Těstoviny plněné jemnou kuřecí směsí je obsaženo: Smetanová hříbková omáčka. Kompletní receptura položky: těstoviny s kuřecí směsí, smetanová hříbková omáčka, grilovaná hlíva ústřičná, bylinkový olej."
          },
          {
            "id": "testoviny-kureci-ing-3",
            "question": "Která z následujících surovin patří do podsložky Těstoviny plněné jemnou kuřecí směsí?",
            "correctAnswer": "Grilovaná hlíva ústřičná",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Těstoviny plněné jemnou kuřecí směsí je obsaženo: Grilovaná hlíva ústřičná. Kompletní receptura položky: těstoviny s kuřecí směsí, smetanová hříbková omáčka, grilovaná hlíva ústřičná, bylinkový olej."
          },
          {
            "id": "testoviny-kureci-ing-4",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Těstoviny plněné jemnou kuřecí směsí?",
            "correctAnswer": "Bylinkový olej",
            "distractors": [
              "Mletý kardamom",
              "Čerstvý rozmarýn"
            ],
            "explanation": "V podsložce Těstoviny plněné jemnou kuřecí směsí je obsaženo: Bylinkový olej. Kompletní receptura položky: těstoviny s kuřecí směsí, smetanová hříbková omáčka, grilovaná hlíva ústřičná, bylinkový olej."
          },
          {
            "id": "testoviny-kureci-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Těstoviny plněné jemnou kuřecí směsí?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Těstoviny plněné jemnou kuřecí směsí obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "testoviny-kureci-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Těstoviny plněné jemnou kuřecí směsí?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Těstoviny plněné jemnou kuřecí směsí obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "testoviny-kureci-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Těstoviny plněné jemnou kuřecí směsí?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Těstoviny plněné jemnou kuřecí směsí obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "shrimp-roll",
        "name": "Shrimp roll",
        "price": "666,-",
        "allergens": [
          "1",
          "2",
          "3",
          "5",
          "7",
          "9",
          "10"
        ],
        "description": "argentinské červené krevety, máslová brioška, koktejlová omáčka s koňakem, naše hranolky, omáčka Choron",
        "questions": [
          {
            "id": "shrimp-roll-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Shrimp roll?",
            "correctAnswer": "Argentinské červené krevety",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Shrimp roll je obsaženo: Argentinské červené krevety. Kompletní receptura položky: argentinské červené krevety, máslová brioška, koktejlová omáčka s koňakem, naše hranolky, omáčka Choron."
          },
          {
            "id": "shrimp-roll-ing-2",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Shrimp roll?",
            "correctAnswer": "Máslová brioška",
            "distractors": [
              "Bramborová kaše",
              "Bramborové křupky"
            ],
            "explanation": "V podsložce Shrimp roll je obsaženo: Máslová brioška. Kompletní receptura položky: argentinské červené krevety, máslová brioška, koktejlová omáčka s koňakem, naše hranolky, omáčka Choron."
          },
          {
            "id": "shrimp-roll-ing-3",
            "question": "Která omáčka, dresink či redukce patří k podsložce Shrimp roll?",
            "correctAnswer": "Koktejlová omáčka s koňakem",
            "distractors": [
              "Pikantní zauzená majonéza",
              "Koňaková omáčka"
            ],
            "explanation": "V podsložce Shrimp roll je obsaženo: Koktejlová omáčka s koňakem. Kompletní receptura položky: argentinské červené krevety, máslová brioška, koktejlová omáčka s koňakem, naše hranolky, omáčka Choron."
          },
          {
            "id": "shrimp-roll-ing-4",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Shrimp roll?",
            "correctAnswer": "Naše hranolky",
            "distractors": [
              "Křupavé vepřové krekry",
              "Na hovězím loji opečená topinka"
            ],
            "explanation": "V podsložce Shrimp roll je obsaženo: Naše hranolky. Kompletní receptura položky: argentinské červené krevety, máslová brioška, koktejlová omáčka s koňakem, naše hranolky, omáčka Choron."
          },
          {
            "id": "shrimp-roll-ing-5",
            "question": "Která omáčka, dresink či redukce patří k podsložce Shrimp roll?",
            "correctAnswer": "Omáčka Choron",
            "distractors": [
              "Lanýžová omáčka",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce Shrimp roll je obsaženo: Omáčka Choron. Kompletní receptura položky: argentinské červené krevety, máslová brioška, koktejlová omáčka s koňakem, naše hranolky, omáčka Choron."
          },
          {
            "id": "shrimp-roll-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Shrimp roll?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Shrimp roll obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "shrimp-roll-allergen-2",
            "question": "Který z následujících alergenů obsahuje podsložka Shrimp roll?",
            "correctAnswer": "Alergen č. 2 – Korýši a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Shrimp roll obsahuje Alergen č. 2 – Korýši a výrobky z nich (krevety, krabi, humři, krevetová pasta). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "shrimp-roll-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Shrimp roll?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 6 – Sójové boby (sója)"
            ],
            "explanation": "Shrimp roll obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "shrimp-roll-allergen-5",
            "question": "Který z následujících alergenů obsahuje podsložka Shrimp roll?",
            "correctAnswer": "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Shrimp roll obsahuje Alergen č. 5 – Jádra podzemnice olejné (arašídy) (arašídy, arašídový olej, satay). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "shrimp-roll-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Shrimp roll?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Shrimp roll obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "shrimp-roll-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka Shrimp roll?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Shrimp roll obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "shrimp-roll-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Shrimp roll?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 6 – Sójové boby (sója)"
            ],
            "explanation": "Shrimp roll obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "vykosteny-pstruh",
        "name": "Filátka vykoštěného pstruha",
        "weight": "180g",
        "price": "399,-",
        "allergens": [
          "3",
          "4",
          "7"
        ],
        "description": "filátka vykoštěného pstruha na másle, omáčka Choron, pečená rajčátka, bylinkový salát, pečená zimní zelenina",
        "questions": [
          {
            "id": "vykosteny-pstruh-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Filátka vykoštěného pstruha?",
            "correctAnswer": "Filátka vykoštěného pstruha na másle",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Filátka vykoštěného pstruha je obsaženo: Filátka vykoštěného pstruha na másle. Kompletní receptura položky: filátka vykoštěného pstruha na másle, omáčka Choron, pečená rajčátka, bylinkový salát, pečená zimní zelenina."
          },
          {
            "id": "vykosteny-pstruh-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Filátka vykoštěného pstruha?",
            "correctAnswer": "Omáčka Choron",
            "distractors": [
              "Jablečná BBQ omáčka",
              "Libečková majonéza"
            ],
            "explanation": "V podsložce Filátka vykoštěného pstruha je obsaženo: Omáčka Choron. Kompletní receptura položky: filátka vykoštěného pstruha na másle, omáčka Choron, pečená rajčátka, bylinkový salát, pečená zimní zelenina."
          },
          {
            "id": "vykosteny-pstruh-ing-3",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Filátka vykoštěného pstruha?",
            "correctAnswer": "Pečená rajčátka",
            "distractors": [
              "Grilované papričky Padrón",
              "Sterilované feferonky"
            ],
            "explanation": "V podsložce Filátka vykoštěného pstruha je obsaženo: Pečená rajčátka. Kompletní receptura položky: filátka vykoštěného pstruha na másle, omáčka Choron, pečená rajčátka, bylinkový salát, pečená zimní zelenina."
          },
          {
            "id": "vykosteny-pstruh-ing-4",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Filátka vykoštěného pstruha?",
            "correctAnswer": "Bylinkový salát",
            "distractors": [
              "Mletý kardamom",
              "Čerstvý rozmarýn"
            ],
            "explanation": "V podsložce Filátka vykoštěného pstruha je obsaženo: Bylinkový salát. Kompletní receptura položky: filátka vykoštěného pstruha na másle, omáčka Choron, pečená rajčátka, bylinkový salát, pečená zimní zelenina."
          },
          {
            "id": "vykosteny-pstruh-ing-5",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Filátka vykoštěného pstruha?",
            "correctAnswer": "Pečená zimní zelenina",
            "distractors": [
              "Nakládaný zázvor",
              "Okurčičky cornichons"
            ],
            "explanation": "V podsložce Filátka vykoštěného pstruha je obsaženo: Pečená zimní zelenina. Kompletní receptura položky: filátka vykoštěného pstruha na másle, omáčka Choron, pečená rajčátka, bylinkový salát, pečená zimní zelenina."
          },
          {
            "id": "vykosteny-pstruh-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Filátka vykoštěného pstruha?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Filátka vykoštěného pstruha obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "vykosteny-pstruh-allergen-4",
            "question": "Který z následujících alergenů obsahuje podsložka Filátka vykoštěného pstruha?",
            "correctAnswer": "Alergen č. 4 – Ryby a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Filátka vykoštěného pstruha obsahuje Alergen č. 4 – Ryby a výrobky z nich (pstruh, rybí maso, ančovičky, worcester). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "vykosteny-pstruh-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Filátka vykoštěného pstruha?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Filátka vykoštěného pstruha obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "svickova-wellington",
        "name": "Svíčková Wellington",
        "weight": "200g",
        "price": "675,-",
        "allergens": [
          "1",
          "3",
          "7",
          "10"
        ],
        "description": "hovězí svíčková v listovém těstě, houbová směs duxelles s lanýži, koňaková omáčka, zauzené rohlíčkové brambory",
        "questions": [
          {
            "id": "svickova-wellington-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Svíčková Wellington?",
            "correctAnswer": "Hovězí svíčková v listovém těstě",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Svíčková Wellington je obsaženo: Hovězí svíčková v listovém těstě. Kompletní receptura položky: hovězí svíčková v listovém těstě, houbová směs duxelles s lanýži, koňaková omáčka, zauzené rohlíčkové brambory."
          },
          {
            "id": "svickova-wellington-ing-2",
            "question": "Která z následujících surovin patří do podsložky Svíčková Wellington?",
            "correctAnswer": "Houbová směs duxelles s lanýži",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Svíčková Wellington je obsaženo: Houbová směs duxelles s lanýži. Kompletní receptura položky: hovězí svíčková v listovém těstě, houbová směs duxelles s lanýži, koňaková omáčka, zauzené rohlíčkové brambory."
          },
          {
            "id": "svickova-wellington-ing-3",
            "question": "Která omáčka, dresink či redukce patří k podsložce Svíčková Wellington?",
            "correctAnswer": "Koňaková omáčka",
            "distractors": [
              "Libečková majonéza",
              "Pikantní zauzená majonéza"
            ],
            "explanation": "V podsložce Svíčková Wellington je obsaženo: Koňaková omáčka. Kompletní receptura položky: hovězí svíčková v listovém těstě, houbová směs duxelles s lanýži, koňaková omáčka, zauzené rohlíčkové brambory."
          },
          {
            "id": "svickova-wellington-ing-4",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Svíčková Wellington?",
            "correctAnswer": "Zauzené rohlíčkové brambory",
            "distractors": [
              "Pivní sušenka",
              "Křupavé vepřové krekry"
            ],
            "explanation": "V podsložce Svíčková Wellington je obsaženo: Zauzené rohlíčkové brambory. Kompletní receptura položky: hovězí svíčková v listovém těstě, houbová směs duxelles s lanýži, koňaková omáčka, zauzené rohlíčkové brambory."
          },
          {
            "id": "svickova-wellington-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Svíčková Wellington?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Svíčková Wellington obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "svickova-wellington-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Svíčková Wellington?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Svíčková Wellington obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "svickova-wellington-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Svíčková Wellington?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Svíčková Wellington obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "svickova-wellington-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Svíčková Wellington?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 2 – Korýši a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "Svíčková Wellington obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "thors-hammer",
        "name": "700g Thor's Hammer hovězí koleno",
        "weight": "700g",
        "price": "1.490,-",
        "allergens": [
          "1",
          "11"
        ],
        "description": "700g hovězí koleno z hliněné pece, omáčka z piva Kasteel Rouge, pálené šalotky, opečená česneková brioška, salsa verde, zauzené brambory, zelný salát",
        "notes": "Monumentální jídlo pečené pomalu v hliněné peci určené ke sdílení pro 2 až 4 hosty.",
        "questions": [
          {
            "id": "thors-hammer-vol",
            "question": "Jaká je gramáž porce podsložky 700g Thor's Hammer hovězí koleno?",
            "correctAnswer": "700 g",
            "distractors": [
              "10 g",
              "15 g"
            ],
            "explanation": "Gramáž porce podsložky 700g Thor's Hammer hovězí koleno je 700 g."
          },
          {
            "id": "thors-hammer-ing-1",
            "question": "Která masová surovina tvoří základ podsložky 700g Thor's Hammer hovězí koleno?",
            "correctAnswer": "Hovězí koleno z hliněné pece",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce 700g Thor's Hammer hovězí koleno je obsaženo: Hovězí koleno z hliněné pece. Kompletní receptura položky: 700g hovězí koleno z hliněné pece, omáčka z piva Kasteel Rouge, pálené šalotky, opečená česneková brioška, salsa verde, zauzené brambory, zelný salát."
          },
          {
            "id": "thors-hammer-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce 700g Thor's Hammer hovězí koleno?",
            "correctAnswer": "Omáčka z piva Kasteel Rouge",
            "distractors": [
              "Jablečná BBQ omáčka",
              "Libečková majonéza"
            ],
            "explanation": "V podsložce 700g Thor's Hammer hovězí koleno je obsaženo: Omáčka z piva Kasteel Rouge. Kompletní receptura položky: 700g hovězí koleno z hliněné pece, omáčka z piva Kasteel Rouge, pálené šalotky, opečená česneková brioška, salsa verde, zauzené brambory, zelný salát."
          },
          {
            "id": "thors-hammer-ing-3",
            "question": "Jaký druh cibulky či šalotky je součástí receptury 700g Thor's Hammer hovězí koleno?",
            "correctAnswer": "Pálené šalotky",
            "distractors": [
              "Grilované papričky Padrón",
              "Sterilované feferonky"
            ],
            "explanation": "V podsložce 700g Thor's Hammer hovězí koleno je obsaženo: Pálené šalotky. Kompletní receptura položky: 700g hovězí koleno z hliněné pece, omáčka z piva Kasteel Rouge, pálené šalotky, opečená česneková brioška, salsa verde, zauzené brambory, zelný salát."
          },
          {
            "id": "thors-hammer-ing-4",
            "question": "V jaké formě či úpravě je česnek součástí podsložky 700g Thor's Hammer hovězí koleno?",
            "correctAnswer": "Opečená česneková brioška",
            "distractors": [
              "Zauzené rohlíčkové brambory",
              "Pivní sušenka"
            ],
            "explanation": "V podsložce 700g Thor's Hammer hovězí koleno je obsaženo: Opečená česneková brioška. Kompletní receptura položky: 700g hovězí koleno z hliněné pece, omáčka z piva Kasteel Rouge, pálené šalotky, opečená česneková brioška, salsa verde, zauzené brambory, zelný salát."
          },
          {
            "id": "thors-hammer-ing-5",
            "question": "Která omáčka, dresink či redukce patří k podsložce 700g Thor's Hammer hovězí koleno?",
            "correctAnswer": "Salsa verde",
            "distractors": [
              "Lanýžová omáčka",
              "Omáčka Choron"
            ],
            "explanation": "V podsložce 700g Thor's Hammer hovězí koleno je obsaženo: Salsa verde. Kompletní receptura položky: 700g hovězí koleno z hliněné pece, omáčka z piva Kasteel Rouge, pálené šalotky, opečená česneková brioška, salsa verde, zauzené brambory, zelný salát."
          },
          {
            "id": "thors-hammer-ing-6",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku 700g Thor's Hammer hovězí koleno?",
            "correctAnswer": "Zauzené brambory",
            "distractors": [
              "Máslová brioška",
              "Kváskový chléb"
            ],
            "explanation": "V podsložce 700g Thor's Hammer hovězí koleno je obsaženo: Zauzené brambory. Kompletní receptura položky: 700g hovězí koleno z hliněné pece, omáčka z piva Kasteel Rouge, pálené šalotky, opečená česneková brioška, salsa verde, zauzené brambory, zelný salát."
          },
          {
            "id": "thors-hammer-ing-7",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka 700g Thor's Hammer hovězí koleno?",
            "correctAnswer": "Zelný salát",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce 700g Thor's Hammer hovězí koleno je obsaženo: Zelný salát. Kompletní receptura položky: 700g hovězí koleno z hliněné pece, omáčka z piva Kasteel Rouge, pálené šalotky, opečená česneková brioška, salsa verde, zauzené brambory, zelný salát."
          },
          {
            "id": "thors-hammer-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka 700g Thor's Hammer hovězí koleno?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "700g Thor's Hammer hovězí koleno obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Sezamová semena (sezam) a výrobky z nich."
          },
          {
            "id": "thors-hammer-allergen-11",
            "question": "Který z následujících alergenů obsahuje podsložka 700g Thor's Hammer hovězí koleno?",
            "correctAnswer": "Alergen č. 11 – Sezamová semena (sezam)",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 6 – Sójové boby (sója)"
            ],
            "explanation": "700g Thor's Hammer hovězí koleno obsahuje Alergen č. 11 – Sezamová semena (sezam) (sezamový olej, tahini, sezam na briošce). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Sezamová semena (sezam) a výrobky z nich."
          }
        ]
      },
      {
        "id": "burger-foie-gras",
        "name": "Hovězí burger s foie gras a uzenou nivou",
        "weight": "200g",
        "price": "449,-",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "vyzrálé hovězí maso, kachní foie gras, uzená niva, majonéza z pečené cibule, bramborová sláma, malé hranolky",
        "questions": [
          {
            "id": "burger-foie-gras-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Hovězí burger s foie gras a uzenou nivou?",
            "correctAnswer": "Vyzrálé hovězí maso",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Hovězí burger s foie gras a uzenou nivou je obsaženo: Vyzrálé hovězí maso. Kompletní receptura položky: vyzrálé hovězí maso, kachní foie gras, uzená niva, majonéza z pečené cibule, bramborová sláma, malé hranolky."
          },
          {
            "id": "burger-foie-gras-ing-2",
            "question": "Která masová surovina tvoří základ podsložky Hovězí burger s foie gras a uzenou nivou?",
            "correctAnswer": "Kachní foie gras",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Hovězí burger s foie gras a uzenou nivou je obsaženo: Kachní foie gras. Kompletní receptura položky: vyzrálé hovězí maso, kachní foie gras, uzená niva, majonéza z pečené cibule, bramborová sláma, malé hranolky."
          },
          {
            "id": "burger-foie-gras-ing-3",
            "question": "Který sýr či mléčná přísada je součástí receptury Hovězí burger s foie gras a uzenou nivou?",
            "correctAnswer": "Uzená niva",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Hovězí burger s foie gras a uzenou nivou je obsaženo: Uzená niva. Kompletní receptura položky: vyzrálé hovězí maso, kachní foie gras, uzená niva, majonéza z pečené cibule, bramborová sláma, malé hranolky."
          },
          {
            "id": "burger-foie-gras-ing-4",
            "question": "Jaký druh cibulky či šalotky je součástí receptury Hovězí burger s foie gras a uzenou nivou?",
            "correctAnswer": "Majonéza z pečené cibule",
            "distractors": [
              "Kvašené okurky (kvašáky)",
              "Sušená rajčata"
            ],
            "explanation": "V podsložce Hovězí burger s foie gras a uzenou nivou je obsaženo: Majonéza z pečené cibule. Kompletní receptura položky: vyzrálé hovězí maso, kachní foie gras, uzená niva, majonéza z pečené cibule, bramborová sláma, malé hranolky."
          },
          {
            "id": "burger-foie-gras-ing-5",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Hovězí burger s foie gras a uzenou nivou?",
            "correctAnswer": "Bramborová sláma",
            "distractors": [
              "Na hovězím loji opečená topinka",
              "Máslová brioška"
            ],
            "explanation": "V podsložce Hovězí burger s foie gras a uzenou nivou je obsaženo: Bramborová sláma. Kompletní receptura položky: vyzrálé hovězí maso, kachní foie gras, uzená niva, majonéza z pečené cibule, bramborová sláma, malé hranolky."
          },
          {
            "id": "burger-foie-gras-ing-6",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Hovězí burger s foie gras a uzenou nivou?",
            "correctAnswer": "Malé hranolky",
            "distractors": [
              "Kváskový chléb",
              "Bramborová kaše"
            ],
            "explanation": "V podsložce Hovězí burger s foie gras a uzenou nivou je obsaženo: Malé hranolky. Kompletní receptura položky: vyzrálé hovězí maso, kachní foie gras, uzená niva, majonéza z pečené cibule, bramborová sláma, malé hranolky."
          },
          {
            "id": "burger-foie-gras-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Hovězí burger s foie gras a uzenou nivou?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Hovězí burger s foie gras a uzenou nivou obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "burger-foie-gras-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Hovězí burger s foie gras a uzenou nivou?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Hovězí burger s foie gras a uzenou nivou obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "burger-foie-gras-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Hovězí burger s foie gras a uzenou nivou?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Hovězí burger s foie gras a uzenou nivou obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      }
    ]
  },
  {
    "id": "gril",
    "name": "z grilu a pece na dřevo",
    "badge": "Gril & Pece",
    "description": "Špičkové steaky US Prime, burgery z pece a monumentální masové speciality",
    "iconName": "FlameKindling",
    "items": [
      {
        "id": "us-prime-steaky",
        "name": "US Prime Steaky (Květová špička & Vysoký roštěnec)",
        "weight": "250g",
        "price": "519,- / 985,-",
        "description": "US Prime květová špička nebo vysoký roštěnec, opečené papričky Padrón, mořská sůl Maldon",
        "questions": [
          {
            "id": "us-prime-steaky-ing-1",
            "question": "Která masová surovina tvoří základ podsložky US Prime Steaky (Květová špička & Vysoký roštěnec)?",
            "correctAnswer": "US Prime květová špička nebo vysoký roštěnec",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce US Prime Steaky (Květová špička & Vysoký roštěnec) je obsaženo: US Prime květová špička nebo vysoký roštěnec. Kompletní receptura položky: US Prime květová špička nebo vysoký roštěnec, opečené papričky Padrón, mořská sůl Maldon."
          },
          {
            "id": "us-prime-steaky-ing-2",
            "question": "Která z následujících surovin patří do podsložky US Prime Steaky (Květová špička & Vysoký roštěnec)?",
            "correctAnswer": "Opečené papričky Padrón",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce US Prime Steaky (Květová špička & Vysoký roštěnec) je obsaženo: Opečené papričky Padrón. Kompletní receptura položky: US Prime květová špička nebo vysoký roštěnec, opečené papričky Padrón, mořská sůl Maldon."
          },
          {
            "id": "us-prime-steaky-ing-3",
            "question": "Která z následujících surovin patří do podsložky US Prime Steaky (Květová špička & Vysoký roštěnec)?",
            "correctAnswer": "Mořská sůl Maldon",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce US Prime Steaky (Květová špička & Vysoký roštěnec) je obsaženo: Mořská sůl Maldon. Kompletní receptura položky: US Prime květová špička nebo vysoký roštěnec, opečené papričky Padrón, mořská sůl Maldon."
          }
        ]
      },
      {
        "id": "us-prime-burger",
        "name": "US Prime hovězí burger",
        "weight": "200g",
        "price": "349,-",
        "allergens": [
          "1",
          "3",
          "7",
          "10"
        ],
        "description": "vyzrálé hovězí US Prime, opečená slanina, sýr čedar, cibulová marmeláda, pikantní majonéza",
        "questions": [
          {
            "id": "us-prime-burger-ing-1",
            "question": "Která masová surovina tvoří základ podsložky US Prime hovězí burger?",
            "correctAnswer": "Vyzrálé hovězí US Prime",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce US Prime hovězí burger je obsaženo: Vyzrálé hovězí US Prime. Kompletní receptura položky: vyzrálé hovězí US Prime, opečená slanina, sýr čedar, cibulová marmeláda, pikantní majonéza."
          },
          {
            "id": "us-prime-burger-ing-2",
            "question": "Která z následujících surovin patří do podsložky US Prime hovězí burger?",
            "correctAnswer": "Opečená slanina",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce US Prime hovězí burger je obsaženo: Opečená slanina. Kompletní receptura položky: vyzrálé hovězí US Prime, opečená slanina, sýr čedar, cibulová marmeláda, pikantní majonéza."
          },
          {
            "id": "us-prime-burger-ing-3",
            "question": "Který sýr či mléčná přísada je součástí receptury US Prime hovězí burger?",
            "correctAnswer": "Sýr čedar",
            "distractors": [
              "Libečková majonéza",
              "Pikantní zauzená majonéza"
            ],
            "explanation": "V podsložce US Prime hovězí burger je obsaženo: Sýr čedar. Kompletní receptura položky: vyzrálé hovězí US Prime, opečená slanina, sýr čedar, cibulová marmeláda, pikantní majonéza."
          },
          {
            "id": "us-prime-burger-ing-4",
            "question": "Jaký druh cibulky či šalotky je součástí receptury US Prime hovězí burger?",
            "correctAnswer": "Cibulová marmeláda",
            "distractors": [
              "Kvašené okurky (kvašáky)",
              "Sušená rajčata"
            ],
            "explanation": "V podsložce US Prime hovězí burger je obsaženo: Cibulová marmeláda. Kompletní receptura položky: vyzrálé hovězí US Prime, opečená slanina, sýr čedar, cibulová marmeláda, pikantní majonéza."
          },
          {
            "id": "us-prime-burger-ing-5",
            "question": "Která omáčka, dresink či redukce patří k podsložce US Prime hovězí burger?",
            "correctAnswer": "Pikantní majonéza",
            "distractors": [
              "Lanýžová omáčka",
              "Omáčka Choron"
            ],
            "explanation": "V podsložce US Prime hovězí burger je obsaženo: Pikantní majonéza. Kompletní receptura položky: vyzrálé hovězí US Prime, opečená slanina, sýr čedar, cibulová marmeláda, pikantní majonéza."
          },
          {
            "id": "us-prime-burger-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka US Prime hovězí burger?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "US Prime hovězí burger obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "us-prime-burger-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka US Prime hovězí burger?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "US Prime hovězí burger obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "us-prime-burger-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka US Prime hovězí burger?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "US Prime hovězí burger obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "us-prime-burger-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka US Prime hovězí burger?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 2 – Korýši a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "US Prime hovězí burger obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "grilovany-bucek-yuzu",
        "name": "Grilovaný vepřový bůček s yuzu",
        "weight": "300g",
        "price": "299,-",
        "allergens": [
          "2",
          "4",
          "6"
        ],
        "description": "karamelizovaná yuzu omáčka, grilovaná jarní cibulka, chimichurri omáčka",
        "questions": [
          {
            "id": "grilovany-bucek-yuzu-ing-1",
            "question": "Která omáčka, dresink či redukce patří k podsložce Grilovaný vepřový bůček s yuzu?",
            "correctAnswer": "Karamelizovaná yuzu omáčka",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce Grilovaný vepřový bůček s yuzu je obsaženo: Karamelizovaná yuzu omáčka. Kompletní receptura položky: karamelizovaná yuzu omáčka, grilovaná jarní cibulka, chimichurri omáčka."
          },
          {
            "id": "grilovany-bucek-yuzu-ing-2",
            "question": "Jaký druh cibulky či šalotky je součástí receptury Grilovaný vepřový bůček s yuzu?",
            "correctAnswer": "Grilovaná jarní cibulka",
            "distractors": [
              "Kysané bílé zelí",
              "Nakládané perlové cibulky"
            ],
            "explanation": "V podsložce Grilovaný vepřový bůček s yuzu je obsaženo: Grilovaná jarní cibulka. Kompletní receptura položky: karamelizovaná yuzu omáčka, grilovaná jarní cibulka, chimichurri omáčka."
          },
          {
            "id": "grilovany-bucek-yuzu-ing-3",
            "question": "Která omáčka, dresink či redukce patří k podsložce Grilovaný vepřový bůček s yuzu?",
            "correctAnswer": "Chimichurri omáčka",
            "distractors": [
              "Libečková majonéza",
              "Pikantní zauzená majonéza"
            ],
            "explanation": "V podsložce Grilovaný vepřový bůček s yuzu je obsaženo: Chimichurri omáčka. Kompletní receptura položky: karamelizovaná yuzu omáčka, grilovaná jarní cibulka, chimichurri omáčka."
          },
          {
            "id": "grilovany-bucek-yuzu-allergen-2",
            "question": "Který z následujících alergenů obsahuje podsložka Grilovaný vepřový bůček s yuzu?",
            "correctAnswer": "Alergen č. 2 – Korýši a výrobky z nich",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Grilovaný vepřový bůček s yuzu obsahuje Alergen č. 2 – Korýši a výrobky z nich (krevety, krabi, humři, krevetová pasta). Všechny evidované alergeny této podsložky: Korýši a výrobky z nich, Ryby a výrobky z nich, Sójové boby (sója) a výrobky z nich."
          },
          {
            "id": "grilovany-bucek-yuzu-allergen-4",
            "question": "Který z následujících alergenů obsahuje podsložka Grilovaný vepřový bůček s yuzu?",
            "correctAnswer": "Alergen č. 4 – Ryby a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Grilovaný vepřový bůček s yuzu obsahuje Alergen č. 4 – Ryby a výrobky z nich (pstruh, rybí maso, ančovičky, worcester). Všechny evidované alergeny této podsložky: Korýši a výrobky z nich, Ryby a výrobky z nich, Sójové boby (sója) a výrobky z nich."
          },
          {
            "id": "grilovany-bucek-yuzu-allergen-6",
            "question": "Který z následujících alergenů obsahuje podsložka Grilovaný vepřový bůček s yuzu?",
            "correctAnswer": "Alergen č. 6 – Sójové boby (sója)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 1 – Obiloviny obsahující lepek"
            ],
            "explanation": "Grilovaný vepřový bůček s yuzu obsahuje Alergen č. 6 – Sójové boby (sója) (sójová omáčka, edamame, tofu, lecitin). Všechny evidované alergeny této podsložky: Korýši a výrobky z nich, Ryby a výrobky z nich, Sójové boby (sója) a výrobky z nich."
          }
        ]
      },
      {
        "id": "nase-pastrami",
        "name": "Naše pastrami v kváskovém chlebu",
        "weight": "200g",
        "price": "455,-",
        "allergens": [
          "1",
          "3",
          "7",
          "10"
        ],
        "description": "US Prime hovězí žebro z pece, sýr raclette, zelný salát s křenem, opečený kváskový chléb, nakládaná zelenina",
        "questions": [
          {
            "id": "nase-pastrami-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Naše pastrami v kváskovém chlebu?",
            "correctAnswer": "US Prime hovězí žebro z pece",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Naše pastrami v kváskovém chlebu je obsaženo: US Prime hovězí žebro z pece. Kompletní receptura položky: US Prime hovězí žebro z pece, sýr raclette, zelný salát s křenem, opečený kváskový chléb, nakládaná zelenina."
          },
          {
            "id": "nase-pastrami-ing-2",
            "question": "Který sýr či mléčná přísada je součástí receptury Naše pastrami v kváskovém chlebu?",
            "correctAnswer": "Sýr raclette",
            "distractors": [
              "Višňová omáčka",
              "Jablečná BBQ omáčka"
            ],
            "explanation": "V podsložce Naše pastrami v kváskovém chlebu je obsaženo: Sýr raclette. Kompletní receptura položky: US Prime hovězí žebro z pece, sýr raclette, zelný salát s křenem, opečený kváskový chléb, nakládaná zelenina."
          },
          {
            "id": "nase-pastrami-ing-3",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Naše pastrami v kváskovém chlebu?",
            "correctAnswer": "Zelný salát s křenem",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Naše pastrami v kváskovém chlebu je obsaženo: Zelný salát s křenem. Kompletní receptura položky: US Prime hovězí žebro z pece, sýr raclette, zelný salát s křenem, opečený kváskový chléb, nakládaná zelenina."
          },
          {
            "id": "nase-pastrami-ing-4",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Naše pastrami v kváskovém chlebu?",
            "correctAnswer": "Opečený kváskový chléb",
            "distractors": [
              "Pivní sušenka",
              "Křupavé vepřové krekry"
            ],
            "explanation": "V podsložce Naše pastrami v kváskovém chlebu je obsaženo: Opečený kváskový chléb. Kompletní receptura položky: US Prime hovězí žebro z pece, sýr raclette, zelný salát s křenem, opečený kváskový chléb, nakládaná zelenina."
          },
          {
            "id": "nase-pastrami-ing-5",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Naše pastrami v kváskovém chlebu?",
            "correctAnswer": "Nakládaná zelenina",
            "distractors": [
              "Nakládaný zázvor",
              "Okurčičky cornichons"
            ],
            "explanation": "V podsložce Naše pastrami v kváskovém chlebu je obsaženo: Nakládaná zelenina. Kompletní receptura položky: US Prime hovězí žebro z pece, sýr raclette, zelný salát s křenem, opečený kváskový chléb, nakládaná zelenina."
          },
          {
            "id": "nase-pastrami-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Naše pastrami v kváskovém chlebu?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Naše pastrami v kváskovém chlebu obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "nase-pastrami-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Naše pastrami v kváskovém chlebu?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Naše pastrami v kváskovém chlebu obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "nase-pastrami-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Naše pastrami v kváskovém chlebu?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Naše pastrami v kváskovém chlebu obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "nase-pastrami-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Naše pastrami v kváskovém chlebu?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 2 – Korýši a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "Naše pastrami v kváskovém chlebu obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "pecene-kure-pec",
        "name": "½ Kuře pečené v naší hliněné peci",
        "price": "279,-",
        "description": "Možnost výběru ze 3 variant: BBQ (jablečná omáčka, cibulka, bylinkové máslo), TRUFFLE (lanýžové máslo, bramborové křupky, pažitka) nebo CAESAR (omáčka z ančoviček, parmezánu a hořčice, smažené kapary)",
        "questions": [
          {
            "id": "pecene-kure-pec-ing-1",
            "question": "Která omáčka, dresink či redukce patří k podsložce ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Možnost výběru ze 3 variant: BBQ (jablečná omáčka",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: Možnost výběru ze 3 variant: BBQ (jablečná omáčka. Kompletní receptura položky: Možnost výběru ze 3 variant: BBQ (jablečná omáčka, cibulka, bylinkové máslo), TRUFFLE (lanýžové máslo, bramborové křupky, pažitka) nebo CAESAR (omáčka z ančoviček, parmezánu a hořčice, smažené kapary)."
          },
          {
            "id": "pecene-kure-pec-ing-2",
            "question": "Jaký druh cibulky či šalotky je součástí receptury ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Cibulka",
            "distractors": [
              "Kysané bílé zelí",
              "Nakládané perlové cibulky"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: Cibulka. Kompletní receptura položky: Možnost výběru ze 3 variant: BBQ (jablečná omáčka, cibulka, bylinkové máslo), TRUFFLE (lanýžové máslo, bramborové křupky, pažitka) nebo CAESAR (omáčka z ančoviček, parmezánu a hořčice, smažené kapary)."
          },
          {
            "id": "pecene-kure-pec-ing-3",
            "question": "Která bylinka, koření či aromatická surovina dochucuje ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Bylinkové máslo)",
            "distractors": [
              "Hladkolistá petrželka",
              "Drcený kmín"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: Bylinkové máslo). Kompletní receptura položky: Možnost výběru ze 3 variant: BBQ (jablečná omáčka, cibulka, bylinkové máslo), TRUFFLE (lanýžové máslo, bramborové křupky, pažitka) nebo CAESAR (omáčka z ančoviček, parmezánu a hořčice, smažené kapary)."
          },
          {
            "id": "pecene-kure-pec-ing-4",
            "question": "Který sýr či mléčná přísada je součástí receptury ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "TRUFFLE (lanýžové máslo",
            "distractors": [
              "Koňaková omáčka",
              "Koprová omáčka"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: TRUFFLE (lanýžové máslo. Kompletní receptura položky: Možnost výběru ze 3 variant: BBQ (jablečná omáčka, cibulka, bylinkové máslo), TRUFFLE (lanýžové máslo, bramborové křupky, pažitka) nebo CAESAR (omáčka z ančoviček, parmezánu a hořčice, smažené kapary)."
          },
          {
            "id": "pecene-kure-pec-ing-5",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Bramborové křupky",
            "distractors": [
              "Na hovězím loji opečená topinka",
              "Máslová brioška"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: Bramborové křupky. Kompletní receptura položky: Možnost výběru ze 3 variant: BBQ (jablečná omáčka, cibulka, bylinkové máslo), TRUFFLE (lanýžové máslo, bramborové křupky, pažitka) nebo CAESAR (omáčka z ančoviček, parmezánu a hořčice, smažené kapary)."
          },
          {
            "id": "pecene-kure-pec-ing-6",
            "question": "Která bylinka, koření či aromatická surovina dochucuje ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Pažitka) nebo CAESAR (omáčka z ančoviček",
            "distractors": [
              "Libeček",
              "Estragon"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: Pažitka) nebo CAESAR (omáčka z ančoviček. Kompletní receptura položky: Možnost výběru ze 3 variant: BBQ (jablečná omáčka, cibulka, bylinkové máslo), TRUFFLE (lanýžové máslo, bramborové křupky, pažitka) nebo CAESAR (omáčka z ančoviček, parmezánu a hořčice, smažené kapary)."
          },
          {
            "id": "pecene-kure-pec-ing-7",
            "question": "Která z následujících surovin patří do podsložky ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Parmezánu a hořčice",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: Parmezánu a hořčice. Kompletní receptura položky: Možnost výběru ze 3 variant: BBQ (jablečná omáčka, cibulka, bylinkové máslo), TRUFFLE (lanýžové máslo, bramborové křupky, pažitka) nebo CAESAR (omáčka z ančoviček, parmezánu a hořčice, smažené kapary)."
          },
          {
            "id": "pecene-kure-pec-ing-8",
            "question": "Která z následujících surovin patří do podsložky ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Smažené kapary)",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: Smažené kapary). Kompletní receptura položky: Možnost výběru ze 3 variant: BBQ (jablečná omáčka, cibulka, bylinkové máslo), TRUFFLE (lanýžové máslo, bramborové křupky, pažitka) nebo CAESAR (omáčka z ančoviček, parmezánu a hořčice, smažené kapary)."
          }
        ]
      }
    ]
  },
  {
    "id": "teple-omacky",
    "name": "teplé omáčky",
    "badge": "Teplé omáčky",
    "description": "Klasické teplé redukce a emulze z francouzské a pivovarské gastronomie",
    "iconName": "Flame",
    "items": [
      {
        "id": "omacka-konakova",
        "name": "Koňaková omáčka",
        "price": "69,-",
        "allergens": [
          "7",
          "9",
          "10"
        ],
        "description": "teplá smetanová redukce, pravý koňak, poctivý telecí jus",
        "questions": [
          {
            "id": "omacka-konakova-ing-1",
            "question": "Která omáčka, dresink či redukce patří k podsložce Koňaková omáčka?",
            "correctAnswer": "Teplá smetanová redukce",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce Koňaková omáčka je obsaženo: Teplá smetanová redukce. Kompletní receptura položky: teplá smetanová redukce, pravý koňak, poctivý telecí jus."
          },
          {
            "id": "omacka-konakova-ing-2",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Koňaková omáčka?",
            "correctAnswer": "Pravý koňak",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Koňaková omáčka je obsaženo: Pravý koňak. Kompletní receptura položky: teplá smetanová redukce, pravý koňak, poctivý telecí jus."
          },
          {
            "id": "omacka-konakova-ing-3",
            "question": "Která omáčka, dresink či redukce patří k podsložce Koňaková omáčka?",
            "correctAnswer": "Poctivý telecí jus",
            "distractors": [
              "Libečková majonéza",
              "Pikantní zauzená majonéza"
            ],
            "explanation": "V podsložce Koňaková omáčka je obsaženo: Poctivý telecí jus. Kompletní receptura položky: teplá smetanová redukce, pravý koňak, poctivý telecí jus."
          },
          {
            "id": "omacka-konakova-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Koňaková omáčka?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Koňaková omáčka obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "omacka-konakova-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka Koňaková omáčka?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Koňaková omáčka obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "omacka-konakova-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Koňaková omáčka?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Koňaková omáčka obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "omacka-choron",
        "name": "Teplá omáčka Choron",
        "price": "69,-",
        "allergens": [
          "3",
          "10"
        ],
        "description": "bearnská teplá emulze, rajčatová redukce, čerstvý estragon, máslo",
        "questions": [
          {
            "id": "omacka-choron-ing-1",
            "question": "Která z následujících surovin patří do podsložky Teplá omáčka Choron?",
            "correctAnswer": "Bearnská teplá emulze",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Teplá omáčka Choron je obsaženo: Bearnská teplá emulze. Kompletní receptura položky: bearnská teplá emulze, rajčatová redukce, čerstvý estragon, máslo."
          },
          {
            "id": "omacka-choron-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Teplá omáčka Choron?",
            "correctAnswer": "Rajčatová redukce",
            "distractors": [
              "Kysané bílé zelí",
              "Nakládané perlové cibulky"
            ],
            "explanation": "V podsložce Teplá omáčka Choron je obsaženo: Rajčatová redukce. Kompletní receptura položky: bearnská teplá emulze, rajčatová redukce, čerstvý estragon, máslo."
          },
          {
            "id": "omacka-choron-ing-3",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Teplá omáčka Choron?",
            "correctAnswer": "Čerstvý estragon",
            "distractors": [
              "Drcený kmín",
              "Mletý kardamom"
            ],
            "explanation": "V podsložce Teplá omáčka Choron je obsaženo: Čerstvý estragon. Kompletní receptura položky: bearnská teplá emulze, rajčatová redukce, čerstvý estragon, máslo."
          },
          {
            "id": "omacka-choron-ing-4",
            "question": "Který sýr či mléčná přísada je součástí receptury Teplá omáčka Choron?",
            "correctAnswer": "Máslo",
            "distractors": [
              "Koňaková omáčka",
              "Koprová omáčka"
            ],
            "explanation": "V podsložce Teplá omáčka Choron je obsaženo: Máslo. Kompletní receptura položky: bearnská teplá emulze, rajčatová redukce, čerstvý estragon, máslo."
          },
          {
            "id": "omacka-choron-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Teplá omáčka Choron?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Teplá omáčka Choron obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Hořčice a výrobky z ní."
          },
          {
            "id": "omacka-choron-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Teplá omáčka Choron?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Teplá omáčka Choron obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "omacka-fines-herbes",
        "name": "Naše fines herbes omáčka",
        "price": "69,-",
        "allergens": [
          "4",
          "9",
          "10"
        ],
        "description": "teplá bylinková redukce, čerstvá petrželka, pažitka a kerblík, máslový tón",
        "questions": [
          {
            "id": "omacka-fines-herbes-ing-1",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Naše fines herbes omáčka?",
            "correctAnswer": "Teplá bylinková redukce",
            "distractors": [
              "Libeček",
              "Estragon"
            ],
            "explanation": "V podsložce Naše fines herbes omáčka je obsaženo: Teplá bylinková redukce. Kompletní receptura položky: teplá bylinková redukce, čerstvá petrželka, pažitka a kerblík, máslový tón."
          },
          {
            "id": "omacka-fines-herbes-ing-2",
            "question": "Která z následujících surovin patří do podsložky Naše fines herbes omáčka?",
            "correctAnswer": "Čerstvá petrželka",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Naše fines herbes omáčka je obsaženo: Čerstvá petrželka. Kompletní receptura položky: teplá bylinková redukce, čerstvá petrželka, pažitka a kerblík, máslový tón."
          },
          {
            "id": "omacka-fines-herbes-ing-3",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Naše fines herbes omáčka?",
            "correctAnswer": "Pažitka a kerblík",
            "distractors": [
              "Hladkolistá petrželka",
              "Drcený kmín"
            ],
            "explanation": "V podsložce Naše fines herbes omáčka je obsaženo: Pažitka a kerblík. Kompletní receptura položky: teplá bylinková redukce, čerstvá petrželka, pažitka a kerblík, máslový tón."
          },
          {
            "id": "omacka-fines-herbes-ing-4",
            "question": "Který sýr či mléčná přísada je součástí receptury Naše fines herbes omáčka?",
            "correctAnswer": "Máslový tón",
            "distractors": [
              "Koňaková omáčka",
              "Koprová omáčka"
            ],
            "explanation": "V podsložce Naše fines herbes omáčka je obsaženo: Máslový tón. Kompletní receptura položky: teplá bylinková redukce, čerstvá petrželka, pažitka a kerblík, máslový tón."
          },
          {
            "id": "omacka-fines-herbes-allergen-4",
            "question": "Který z následujících alergenů obsahuje podsložka Naše fines herbes omáčka?",
            "correctAnswer": "Alergen č. 4 – Ryby a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Naše fines herbes omáčka obsahuje Alergen č. 4 – Ryby a výrobky z nich (pstruh, rybí maso, ančovičky, worcester). Všechny evidované alergeny této podsložky: Ryby a výrobky z nich, Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "omacka-fines-herbes-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka Naše fines herbes omáčka?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Naše fines herbes omáčka obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Ryby a výrobky z nich, Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "omacka-fines-herbes-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Naše fines herbes omáčka?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 6 – Sójové boby (sója)"
            ],
            "explanation": "Naše fines herbes omáčka obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Ryby a výrobky z nich, Celer a výrobky z něj, Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "omacka-lanyzova",
        "name": "Lanýžová omáčka",
        "price": "79,-",
        "allergens": [
          "7",
          "10"
        ],
        "description": "krémová smetanová redukce, lanýžové máslo, černé lanýže",
        "questions": [
          {
            "id": "omacka-lanyzova-ing-1",
            "question": "Která omáčka, dresink či redukce patří k podsložce Lanýžová omáčka?",
            "correctAnswer": "Krémová smetanová redukce",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce Lanýžová omáčka je obsaženo: Krémová smetanová redukce. Kompletní receptura položky: krémová smetanová redukce, lanýžové máslo, černé lanýže."
          },
          {
            "id": "omacka-lanyzova-ing-2",
            "question": "Který sýr či mléčná přísada je součástí receptury Lanýžová omáčka?",
            "correctAnswer": "Lanýžové máslo",
            "distractors": [
              "Višňová omáčka",
              "Jablečná BBQ omáčka"
            ],
            "explanation": "V podsložce Lanýžová omáčka je obsaženo: Lanýžové máslo. Kompletní receptura položky: krémová smetanová redukce, lanýžové máslo, černé lanýže."
          },
          {
            "id": "omacka-lanyzova-ing-3",
            "question": "Která z následujících surovin patří do podsložky Lanýžová omáčka?",
            "correctAnswer": "Černé lanýže",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Lanýžová omáčka je obsaženo: Černé lanýže. Kompletní receptura položky: krémová smetanová redukce, lanýžové máslo, černé lanýže."
          },
          {
            "id": "omacka-lanyzova-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Lanýžová omáčka?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 1 – Obiloviny obsahující lepek"
            ],
            "explanation": "Lanýžová omáčka obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "omacka-lanyzova-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Lanýžová omáčka?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Lanýžová omáčka obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      }
    ]
  },
  {
    "id": "studene-omacky",
    "name": "studené omáčky",
    "badge": "Studené omáčky",
    "description": "Čerstvé bylinkové omáčky a domácí emulze",
    "iconName": "Droplet",
    "items": [
      {
        "id": "omacka-pikantni-majo",
        "name": "Pikantní zauzená majonéza",
        "price": "59,-",
        "allergens": [
          "3",
          "7"
        ],
        "description": "domácí majonéza, uzená paprika, drcené chilli",
        "questions": [
          {
            "id": "omacka-pikantni-majo-ing-1",
            "question": "Která omáčka, dresink či redukce patří k podsložce Pikantní zauzená majonéza?",
            "correctAnswer": "Domácí majonéza",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce Pikantní zauzená majonéza je obsaženo: Domácí majonéza. Kompletní receptura položky: domácí majonéza, uzená paprika, drcené chilli."
          },
          {
            "id": "omacka-pikantni-majo-ing-2",
            "question": "Která z následujících surovin patří do podsložky Pikantní zauzená majonéza?",
            "correctAnswer": "Uzená paprika",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Pikantní zauzená majonéza je obsaženo: Uzená paprika. Kompletní receptura položky: domácí majonéza, uzená paprika, drcené chilli."
          },
          {
            "id": "omacka-pikantni-majo-ing-3",
            "question": "Která z následujících surovin patří do podsložky Pikantní zauzená majonéza?",
            "correctAnswer": "Drcené chilli",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Pikantní zauzená majonéza je obsaženo: Drcené chilli. Kompletní receptura položky: domácí majonéza, uzená paprika, drcené chilli."
          },
          {
            "id": "omacka-pikantni-majo-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Pikantní zauzená majonéza?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Pikantní zauzená majonéza obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "omacka-pikantni-majo-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Pikantní zauzená majonéza?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 1 – Obiloviny obsahující lepek"
            ],
            "explanation": "Pikantní zauzená majonéza obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "omacka-salsa-verde",
        "name": "Naše salsa verde",
        "price": "59,-",
        "description": "čerstvé zelené bylinky, nasekané kapary, ančovičky, olivový olej",
        "questions": [
          {
            "id": "omacka-salsa-verde-ing-1",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Naše salsa verde?",
            "correctAnswer": "Čerstvé zelené bylinky",
            "distractors": [
              "Marinované šalotky",
              "Pečená kořenová zelenina"
            ],
            "explanation": "V podsložce Naše salsa verde je obsaženo: Čerstvé zelené bylinky. Kompletní receptura položky: čerstvé zelené bylinky, nasekané kapary, ančovičky, olivový olej."
          },
          {
            "id": "omacka-salsa-verde-ing-2",
            "question": "Která z následujících surovin patří do podsložky Naše salsa verde?",
            "correctAnswer": "Nasekané kapary",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Naše salsa verde je obsaženo: Nasekané kapary. Kompletní receptura položky: čerstvé zelené bylinky, nasekané kapary, ančovičky, olivový olej."
          },
          {
            "id": "omacka-salsa-verde-ing-3",
            "question": "Která z následujících surovin patří do podsložky Naše salsa verde?",
            "correctAnswer": "Ančovičky",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Naše salsa verde je obsaženo: Ančovičky. Kompletní receptura položky: čerstvé zelené bylinky, nasekané kapary, ančovičky, olivový olej."
          },
          {
            "id": "omacka-salsa-verde-ing-4",
            "question": "Která z následujících surovin patří do podsložky Naše salsa verde?",
            "correctAnswer": "Olivový olej",
            "distractors": [
              "Jelení hřbet",
              "Jehněčí kotletka"
            ],
            "explanation": "V podsložce Naše salsa verde je obsaženo: Olivový olej. Kompletní receptura položky: čerstvé zelené bylinky, nasekané kapary, ančovičky, olivový olej."
          }
        ]
      },
      {
        "id": "omacka-chimichurri",
        "name": "Chimichurri omáčka",
        "price": "65,-",
        "description": "čerstvá petrželka a oregano, česnek, chilli papričky, panenský olivový olej",
        "questions": [
          {
            "id": "omacka-chimichurri-ing-1",
            "question": "Která z následujících surovin patří do podsložky Chimichurri omáčka?",
            "correctAnswer": "Čerstvá petrželka a oregano",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Chimichurri omáčka je obsaženo: Čerstvá petrželka a oregano. Kompletní receptura položky: čerstvá petrželka a oregano, česnek, chilli papričky, panenský olivový olej."
          },
          {
            "id": "omacka-chimichurri-ing-2",
            "question": "V jaké formě či úpravě je česnek součástí podsložky Chimichurri omáčka?",
            "correctAnswer": "Česnek",
            "distractors": [
              "Majoránka",
              "Koriandr"
            ],
            "explanation": "V podsložce Chimichurri omáčka je obsaženo: Česnek. Kompletní receptura položky: čerstvá petrželka a oregano, česnek, chilli papričky, panenský olivový olej."
          },
          {
            "id": "omacka-chimichurri-ing-3",
            "question": "Která z následujících surovin patří do podsložky Chimichurri omáčka?",
            "correctAnswer": "Chilli papričky",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Chimichurri omáčka je obsaženo: Chilli papričky. Kompletní receptura položky: čerstvá petrželka a oregano, česnek, chilli papričky, panenský olivový olej."
          },
          {
            "id": "omacka-chimichurri-ing-4",
            "question": "Která z následujících surovin patří do podsložky Chimichurri omáčka?",
            "correctAnswer": "Panenský olivový olej",
            "distractors": [
              "Jelení hřbet",
              "Jehněčí kotletka"
            ],
            "explanation": "V podsložce Chimichurri omáčka je obsaženo: Panenský olivový olej. Kompletní receptura položky: čerstvá petrželka a oregano, česnek, chilli papričky, panenský olivový olej."
          }
        ]
      },
      {
        "id": "omacka-kecup",
        "name": "Kečup",
        "price": "40,-",
        "description": "vyzrálá rajčata, kvasný ocet, třtinový cukr, směs koření",
        "questions": [
          {
            "id": "omacka-kecup-ing-1",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Kečup?",
            "correctAnswer": "Vyzrálá rajčata",
            "distractors": [
              "Marinované šalotky",
              "Pečená kořenová zelenina"
            ],
            "explanation": "V podsložce Kečup je obsaženo: Vyzrálá rajčata. Kompletní receptura položky: vyzrálá rajčata, kvasný ocet, třtinový cukr, směs koření."
          },
          {
            "id": "omacka-kecup-ing-2",
            "question": "Která z následujících surovin patří do podsložky Kečup?",
            "correctAnswer": "Kvasný ocet",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Kečup je obsaženo: Kvasný ocet. Kompletní receptura položky: vyzrálá rajčata, kvasný ocet, třtinový cukr, směs koření."
          },
          {
            "id": "omacka-kecup-ing-3",
            "question": "Která z následujících surovin patří do podsložky Kečup?",
            "correctAnswer": "Třtinový cukr",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Kečup je obsaženo: Třtinový cukr. Kompletní receptura položky: vyzrálá rajčata, kvasný ocet, třtinový cukr, směs koření."
          },
          {
            "id": "omacka-kecup-ing-4",
            "question": "Která z následujících surovin patří do podsložky Kečup?",
            "correctAnswer": "Směs koření",
            "distractors": [
              "Jelení hřbet",
              "Jehněčí kotletka"
            ],
            "explanation": "V podsložce Kečup je obsaženo: Směs koření. Kompletní receptura položky: vyzrálá rajčata, kvasný ocet, třtinový cukr, směs koření."
          }
        ]
      }
    ]
  },
  {
    "id": "prilohy",
    "name": "přílohy",
    "badge": "Přílohy",
    "description": "Ručně připravované bramborové speciality, saláty a řemeslné pečivo",
    "iconName": "Wheat",
    "items": [
      {
        "id": "nase-hranolky",
        "name": "Naše hranolky",
        "price": "89,-",
        "description": "čerstvě krájené brambory, hovězí lůj na smažení, mořská sůl",
        "questions": [
          {
            "id": "nase-hranolky-ing-1",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Naše hranolky?",
            "correctAnswer": "Čerstvě krájené brambory",
            "distractors": [
              "Máslová brioška",
              "Kváskový chléb"
            ],
            "explanation": "V podsložce Naše hranolky je obsaženo: Čerstvě krájené brambory. Kompletní receptura položky: čerstvě krájené brambory, hovězí lůj na smažení, mořská sůl."
          },
          {
            "id": "nase-hranolky-ing-2",
            "question": "Která masová surovina tvoří základ podsložky Naše hranolky?",
            "correctAnswer": "Hovězí lůj na smažení",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Naše hranolky je obsaženo: Hovězí lůj na smažení. Kompletní receptura položky: čerstvě krájené brambory, hovězí lůj na smažení, mořská sůl."
          },
          {
            "id": "nase-hranolky-ing-3",
            "question": "Která z následujících surovin patří do podsložky Naše hranolky?",
            "correctAnswer": "Mořská sůl",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Naše hranolky je obsaženo: Mořská sůl. Kompletní receptura položky: čerstvě krájené brambory, hovězí lůj na smažení, mořská sůl."
          }
        ]
      },
      {
        "id": "hranolky-red-leicester",
        "name": "Hranolky s lanýžovou majonézou a sýrem Red Leicester",
        "price": "149,-",
        "allergens": [
          "3",
          "7"
        ],
        "description": "domácí smažené hranolky, lanýžová majonéza, strouhaný sýr Red Leicester",
        "questions": [
          {
            "id": "hranolky-red-leicester-ing-1",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Hranolky s lanýžovou majonézou a sýrem Red Leicester?",
            "correctAnswer": "Domácí smažené hranolky",
            "distractors": [
              "Máslová brioška",
              "Kváskový chléb"
            ],
            "explanation": "V podsložce Hranolky s lanýžovou majonézou a sýrem Red Leicester je obsaženo: Domácí smažené hranolky. Kompletní receptura položky: domácí smažené hranolky, lanýžová majonéza, strouhaný sýr Red Leicester."
          },
          {
            "id": "hranolky-red-leicester-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Hranolky s lanýžovou majonézou a sýrem Red Leicester?",
            "correctAnswer": "Lanýžová majonéza",
            "distractors": [
              "Višňová omáčka",
              "Jablečná BBQ omáčka"
            ],
            "explanation": "V podsložce Hranolky s lanýžovou majonézou a sýrem Red Leicester je obsaženo: Lanýžová majonéza. Kompletní receptura položky: domácí smažené hranolky, lanýžová majonéza, strouhaný sýr Red Leicester."
          },
          {
            "id": "hranolky-red-leicester-ing-3",
            "question": "Který sýr či mléčná přísada je součástí receptury Hranolky s lanýžovou majonézou a sýrem Red Leicester?",
            "correctAnswer": "Strouhaný sýr Red Leicester",
            "distractors": [
              "Libečková majonéza",
              "Pikantní zauzená majonéza"
            ],
            "explanation": "V podsložce Hranolky s lanýžovou majonézou a sýrem Red Leicester je obsaženo: Strouhaný sýr Red Leicester. Kompletní receptura položky: domácí smažené hranolky, lanýžová majonéza, strouhaný sýr Red Leicester."
          },
          {
            "id": "hranolky-red-leicester-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Hranolky s lanýžovou majonézou a sýrem Red Leicester?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Hranolky s lanýžovou majonézou a sýrem Red Leicester obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "hranolky-red-leicester-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Hranolky s lanýžovou majonézou a sýrem Red Leicester?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 1 – Obiloviny obsahující lepek"
            ],
            "explanation": "Hranolky s lanýžovou majonézou a sýrem Red Leicester obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "bramborova-kase",
        "name": "Bramborová kaše",
        "price": "89,-",
        "allergens": [
          "7"
        ],
        "description": "vařené brambory, poctivé máslo, plnotučné mléko, bramborová sláma",
        "questions": [
          {
            "id": "bramborova-kase-ing-1",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Bramborová kaše?",
            "correctAnswer": "Vařené brambory",
            "distractors": [
              "Máslová brioška",
              "Kváskový chléb"
            ],
            "explanation": "V podsložce Bramborová kaše je obsaženo: Vařené brambory. Kompletní receptura položky: vařené brambory, poctivé máslo, plnotučné mléko, bramborová sláma."
          },
          {
            "id": "bramborova-kase-ing-2",
            "question": "Který sýr či mléčná přísada je součástí receptury Bramborová kaše?",
            "correctAnswer": "Poctivé máslo",
            "distractors": [
              "Višňová omáčka",
              "Jablečná BBQ omáčka"
            ],
            "explanation": "V podsložce Bramborová kaše je obsaženo: Poctivé máslo. Kompletní receptura položky: vařené brambory, poctivé máslo, plnotučné mléko, bramborová sláma."
          },
          {
            "id": "bramborova-kase-ing-3",
            "question": "Která z následujících surovin patří do podsložky Bramborová kaše?",
            "correctAnswer": "Plnotučné mléko",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Bramborová kaše je obsaženo: Plnotučné mléko. Kompletní receptura položky: vařené brambory, poctivé máslo, plnotučné mléko, bramborová sláma."
          },
          {
            "id": "bramborova-kase-ing-4",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Bramborová kaše?",
            "correctAnswer": "Bramborová sláma",
            "distractors": [
              "Pivní sušenka",
              "Křupavé vepřové krekry"
            ],
            "explanation": "V podsložce Bramborová kaše je obsaženo: Bramborová sláma. Kompletní receptura položky: vařené brambory, poctivé máslo, plnotučné mléko, bramborová sláma."
          },
          {
            "id": "bramborova-kase-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Bramborová kaše?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Bramborová kaše obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "zauzene-rohlicek-brambory",
        "name": "Zauzené rohlíčkové brambory",
        "price": "99,-",
        "allergens": [
          "7"
        ],
        "description": "rohlíčkové brambory, zauzení bukovým dřevem, čerstvé máslo, mořská sůl",
        "questions": [
          {
            "id": "zauzene-rohlicek-brambory-ing-1",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Zauzené rohlíčkové brambory?",
            "correctAnswer": "Rohlíčkové brambory",
            "distractors": [
              "Máslová brioška",
              "Kváskový chléb"
            ],
            "explanation": "V podsložce Zauzené rohlíčkové brambory je obsaženo: Rohlíčkové brambory. Kompletní receptura položky: rohlíčkové brambory, zauzení bukovým dřevem, čerstvé máslo, mořská sůl."
          },
          {
            "id": "zauzene-rohlicek-brambory-ing-2",
            "question": "Která z následujících surovin patří do podsložky Zauzené rohlíčkové brambory?",
            "correctAnswer": "Zauzení bukovým dřevem",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Zauzené rohlíčkové brambory je obsaženo: Zauzení bukovým dřevem. Kompletní receptura položky: rohlíčkové brambory, zauzení bukovým dřevem, čerstvé máslo, mořská sůl."
          },
          {
            "id": "zauzene-rohlicek-brambory-ing-3",
            "question": "Který sýr či mléčná přísada je součástí receptury Zauzené rohlíčkové brambory?",
            "correctAnswer": "Čerstvé máslo",
            "distractors": [
              "Libečková majonéza",
              "Pikantní zauzená majonéza"
            ],
            "explanation": "V podsložce Zauzené rohlíčkové brambory je obsaženo: Čerstvé máslo. Kompletní receptura položky: rohlíčkové brambory, zauzení bukovým dřevem, čerstvé máslo, mořská sůl."
          },
          {
            "id": "zauzene-rohlicek-brambory-ing-4",
            "question": "Která z následujících surovin patří do podsložky Zauzené rohlíčkové brambory?",
            "correctAnswer": "Mořská sůl",
            "distractors": [
              "Jelení hřbet",
              "Jehněčí kotletka"
            ],
            "explanation": "V podsložce Zauzené rohlíčkové brambory je obsaženo: Mořská sůl. Kompletní receptura položky: rohlíčkové brambory, zauzení bukovým dřevem, čerstvé máslo, mořská sůl."
          },
          {
            "id": "zauzene-rohlicek-brambory-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Zauzené rohlíčkové brambory?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Zauzené rohlíčkové brambory obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "salat-trhane-listy",
        "name": "Salát z trhaných salátových listů a zeleného rajčete",
        "price": "129,-",
        "allergens": [
          "10"
        ],
        "description": "trhané listy, zelené rajče, pivní vinaigrette",
        "questions": [
          {
            "id": "salat-trhane-listy-ing-1",
            "question": "Která z následujících surovin patří do podsložky Salát z trhaných salátových listů a zeleného rajčete?",
            "correctAnswer": "Trhané listy",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Salát z trhaných salátových listů a zeleného rajčete je obsaženo: Trhané listy. Kompletní receptura položky: trhané listy, zelené rajče, pivní vinaigrette."
          },
          {
            "id": "salat-trhane-listy-ing-2",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Salát z trhaných salátových listů a zeleného rajčete?",
            "correctAnswer": "Zelené rajče",
            "distractors": [
              "Kysané bílé zelí",
              "Nakládané perlové cibulky"
            ],
            "explanation": "V podsložce Salát z trhaných salátových listů a zeleného rajčete je obsaženo: Zelené rajče. Kompletní receptura položky: trhané listy, zelené rajče, pivní vinaigrette."
          },
          {
            "id": "salat-trhane-listy-ing-3",
            "question": "Která z následujících surovin patří do podsložky Salát z trhaných salátových listů a zeleného rajčete?",
            "correctAnswer": "Pivní vinaigrette",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Salát z trhaných salátových listů a zeleného rajčete je obsaženo: Pivní vinaigrette. Kompletní receptura položky: trhané listy, zelené rajče, pivní vinaigrette."
          },
          {
            "id": "salat-trhane-listy-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Salát z trhaných salátových listů a zeleného rajčete?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 3 – Vejce a výrobky z nich"
            ],
            "explanation": "Salát z trhaných salátových listů a zeleného rajčete obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "pecena-zimni-zelenina",
        "name": "Pečená zimní zelenina s kardamomem a javorovým sirupem",
        "price": "129,-",
        "allergens": [
          "9"
        ],
        "description": "kořenová zimní zelenina, mletý kardamom, čistý javorový sirup",
        "questions": [
          {
            "id": "pecena-zimni-zelenina-ing-1",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Pečená zimní zelenina s kardamomem a javorovým sirupem?",
            "correctAnswer": "Kořenová zimní zelenina",
            "distractors": [
              "Marinované šalotky",
              "Pečená kořenová zelenina"
            ],
            "explanation": "V podsložce Pečená zimní zelenina s kardamomem a javorovým sirupem je obsaženo: Kořenová zimní zelenina. Kompletní receptura položky: kořenová zimní zelenina, mletý kardamom, čistý javorový sirup."
          },
          {
            "id": "pecena-zimni-zelenina-ing-2",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Pečená zimní zelenina s kardamomem a javorovým sirupem?",
            "correctAnswer": "Mletý kardamom",
            "distractors": [
              "Majoránka",
              "Koriandr"
            ],
            "explanation": "V podsložce Pečená zimní zelenina s kardamomem a javorovým sirupem je obsaženo: Mletý kardamom. Kompletní receptura položky: kořenová zimní zelenina, mletý kardamom, čistý javorový sirup."
          },
          {
            "id": "pecena-zimni-zelenina-ing-3",
            "question": "Která z následujících surovin patří do podsložky Pečená zimní zelenina s kardamomem a javorovým sirupem?",
            "correctAnswer": "Čistý javorový sirup",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Pečená zimní zelenina s kardamomem a javorovým sirupem je obsaženo: Čistý javorový sirup. Kompletní receptura položky: kořenová zimní zelenina, mletý kardamom, čistý javorový sirup."
          },
          {
            "id": "pecena-zimni-zelenina-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka Pečená zimní zelenina s kardamomem a javorovým sirupem?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Pečená zimní zelenina s kardamomem a javorovým sirupem obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Celer a výrobky z něj."
          }
        ]
      },
      {
        "id": "zelny-salat-kren",
        "name": "Náš zelný salát s křenem",
        "price": "99,-",
        "allergens": [
          "3",
          "7",
          "11"
        ],
        "description": "krouhané bílé zelí, strouhaný čerstvý křen, rozinky, vinný ocet, jemná majonéza",
        "questions": [
          {
            "id": "zelny-salat-kren-ing-1",
            "question": "Která z následujících surovin patří do podsložky Náš zelný salát s křenem?",
            "correctAnswer": "Krouhané bílé zelí",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Náš zelný salát s křenem je obsaženo: Krouhané bílé zelí. Kompletní receptura položky: krouhané bílé zelí, strouhaný čerstvý křen, rozinky, vinný ocet, jemná majonéza."
          },
          {
            "id": "zelny-salat-kren-ing-2",
            "question": "Která z následujících surovin patří do podsložky Náš zelný salát s křenem?",
            "correctAnswer": "Strouhaný čerstvý křen",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Náš zelný salát s křenem je obsaženo: Strouhaný čerstvý křen. Kompletní receptura položky: krouhané bílé zelí, strouhaný čerstvý křen, rozinky, vinný ocet, jemná majonéza."
          },
          {
            "id": "zelny-salat-kren-ing-3",
            "question": "Která z následujících surovin patří do podsložky Náš zelný salát s křenem?",
            "correctAnswer": "Rozinky",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Náš zelný salát s křenem je obsaženo: Rozinky. Kompletní receptura položky: krouhané bílé zelí, strouhaný čerstvý křen, rozinky, vinný ocet, jemná majonéza."
          },
          {
            "id": "zelny-salat-kren-ing-4",
            "question": "Která z následujících surovin patří do podsložky Náš zelný salát s křenem?",
            "correctAnswer": "Vinný ocet",
            "distractors": [
              "Jelení hřbet",
              "Jehněčí kotletka"
            ],
            "explanation": "V podsložce Náš zelný salát s křenem je obsaženo: Vinný ocet. Kompletní receptura položky: krouhané bílé zelí, strouhaný čerstvý křen, rozinky, vinný ocet, jemná majonéza."
          },
          {
            "id": "zelny-salat-kren-ing-5",
            "question": "Která omáčka, dresink či redukce patří k podsložce Náš zelný salát s křenem?",
            "correctAnswer": "Jemná majonéza",
            "distractors": [
              "Sýr čedar",
              "Lanýžová omáčka"
            ],
            "explanation": "V podsložce Náš zelný salát s křenem je obsaženo: Jemná majonéza. Kompletní receptura položky: krouhané bílé zelí, strouhaný čerstvý křen, rozinky, vinný ocet, jemná majonéza."
          },
          {
            "id": "zelny-salat-kren-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Náš zelný salát s křenem?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Náš zelný salát s křenem obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Sezamová semena (sezam) a výrobky z nich."
          },
          {
            "id": "zelny-salat-kren-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Náš zelný salát s křenem?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Náš zelný salát s křenem obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Sezamová semena (sezam) a výrobky z nich."
          },
          {
            "id": "zelny-salat-kren-allergen-11",
            "question": "Který z následujících alergenů obsahuje podsložka Náš zelný salát s křenem?",
            "correctAnswer": "Alergen č. 11 – Sezamová semena (sezam)",
            "distractors": [
              "Alergen č. 1 – Obiloviny obsahující lepek",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Náš zelný salát s křenem obsahuje Alergen č. 11 – Sezamová semena (sezam) (sezamový olej, tahini, sezam na briošce). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Sezamová semena (sezam) a výrobky z nich."
          }
        ]
      },
      {
        "id": "cesnekova-brioska",
        "name": "Opečená česneková brioška",
        "price": "79,-",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "nadýchaná máslová brioška, česnekové máslo, bylinková sůl",
        "questions": [
          {
            "id": "cesnekova-brioska-ing-1",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Opečená česneková brioška?",
            "correctAnswer": "Nadýchaná máslová brioška",
            "distractors": [
              "Kváskový chléb",
              "Bramborová sláma"
            ],
            "explanation": "V podsložce Opečená česneková brioška je obsaženo: Nadýchaná máslová brioška. Kompletní receptura položky: nadýchaná máslová brioška, česnekové máslo, bylinková sůl."
          },
          {
            "id": "cesnekova-brioska-ing-2",
            "question": "V jaké formě či úpravě je česnek součástí podsložky Opečená česneková brioška?",
            "correctAnswer": "Česnekové máslo",
            "distractors": [
              "Majoránka",
              "Koriandr"
            ],
            "explanation": "V podsložce Opečená česneková brioška je obsaženo: Česnekové máslo. Kompletní receptura položky: nadýchaná máslová brioška, česnekové máslo, bylinková sůl."
          },
          {
            "id": "cesnekova-brioska-ing-3",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Opečená česneková brioška?",
            "correctAnswer": "Bylinková sůl",
            "distractors": [
              "Hladkolistá petrželka",
              "Drcený kmín"
            ],
            "explanation": "V podsložce Opečená česneková brioška je obsaženo: Bylinková sůl. Kompletní receptura položky: nadýchaná máslová brioška, česnekové máslo, bylinková sůl."
          },
          {
            "id": "cesnekova-brioska-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Opečená česneková brioška?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Opečená česneková brioška obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "cesnekova-brioska-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Opečená česneková brioška?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Opečená česneková brioška obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "cesnekova-brioska-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Opečená česneková brioška?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Opečená česneková brioška obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "kvaskovy-chleb",
        "name": "Kváskový chléb",
        "price": "45,-",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "žitno-pšeničný kvásek, žitná a pšeničná mouka, drcený kmín, mořská sůl",
        "questions": [
          {
            "id": "kvaskovy-chleb-ing-1",
            "question": "Která z následujících surovin patří do podsložky Kváskový chléb?",
            "correctAnswer": "Žitno-pšeničný kvásek",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Kváskový chléb je obsaženo: Žitno-pšeničný kvásek. Kompletní receptura položky: žitno-pšeničný kvásek, žitná a pšeničná mouka, drcený kmín, mořská sůl."
          },
          {
            "id": "kvaskovy-chleb-ing-2",
            "question": "Která z následujících surovin patří do podsložky Kváskový chléb?",
            "correctAnswer": "Žitná a pšeničná mouka",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Kváskový chléb je obsaženo: Žitná a pšeničná mouka. Kompletní receptura položky: žitno-pšeničný kvásek, žitná a pšeničná mouka, drcený kmín, mořská sůl."
          },
          {
            "id": "kvaskovy-chleb-ing-3",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Kváskový chléb?",
            "correctAnswer": "Drcený kmín",
            "distractors": [
              "Hladkolistá petrželka",
              "Mletý kardamom"
            ],
            "explanation": "V podsložce Kváskový chléb je obsaženo: Drcený kmín. Kompletní receptura položky: žitno-pšeničný kvásek, žitná a pšeničná mouka, drcený kmín, mořská sůl."
          },
          {
            "id": "kvaskovy-chleb-ing-4",
            "question": "Která z následujících surovin patří do podsložky Kváskový chléb?",
            "correctAnswer": "Mořská sůl",
            "distractors": [
              "Jelení hřbet",
              "Jehněčí kotletka"
            ],
            "explanation": "V podsložce Kváskový chléb je obsaženo: Mořská sůl. Kompletní receptura položky: žitno-pšeničný kvásek, žitná a pšeničná mouka, drcený kmín, mořská sůl."
          },
          {
            "id": "kvaskovy-chleb-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Kváskový chléb?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Kváskový chléb obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "kvaskovy-chleb-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Kváskový chléb?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Kváskový chléb obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "kvaskovy-chleb-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Kváskový chléb?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Kváskový chléb obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      }
    ]
  },
  {
    "id": "dezerty",
    "name": "dezerty",
    "badge": "Dezerty",
    "description": "Sladké tečky inspirované pivovarským řemeslem a čokoládovým uměním",
    "iconName": "Cake",
    "items": [
      {
        "id": "dortik-ganache-sisky",
        "name": "Dortík s ganache ve tvaru chmelových šišek",
        "price": "209,-",
        "allergens": [
          "1",
          "5",
          "7",
          "8"
        ],
        "description": "ve tvaru chmelových šišek z čokolády Valrhona Dulcey, čokoládová hlína a višňová omáčka",
        "notes": "Ikonický vizuální dezert odkazující na surovinu piva – chmel.",
        "questions": [
          {
            "id": "dortik-ganache-sisky-ing-1",
            "question": "Která pivovarská surovina nebo vlastnost charakterizuje Dortík s ganache ve tvaru chmelových šišek?",
            "correctAnswer": "Ve tvaru chmelových šišek z čokolády Valrhona Dulcey",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Dortík s ganache ve tvaru chmelových šišek je obsaženo: Ve tvaru chmelových šišek z čokolády Valrhona Dulcey. Kompletní receptura položky: ve tvaru chmelových šišek z čokolády Valrhona Dulcey, čokoládová hlína a višňová omáčka."
          },
          {
            "id": "dortik-ganache-sisky-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Dortík s ganache ve tvaru chmelových šišek?",
            "correctAnswer": "Čokoládová hlína a višňová omáčka",
            "distractors": [
              "Jablečná BBQ omáčka",
              "Libečková majonéza"
            ],
            "explanation": "V podsložce Dortík s ganache ve tvaru chmelových šišek je obsaženo: Čokoládová hlína a višňová omáčka. Kompletní receptura položky: ve tvaru chmelových šišek z čokolády Valrhona Dulcey, čokoládová hlína a višňová omáčka."
          },
          {
            "id": "dortik-ganache-sisky-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Dortík s ganache ve tvaru chmelových šišek?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Dortík s ganache ve tvaru chmelových šišek obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Skořápkové plody (ořechy) a výrobky z nich."
          },
          {
            "id": "dortik-ganache-sisky-allergen-5",
            "question": "Který z následujících alergenů obsahuje podsložka Dortík s ganache ve tvaru chmelových šišek?",
            "correctAnswer": "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Dortík s ganache ve tvaru chmelových šišek obsahuje Alergen č. 5 – Jádra podzemnice olejné (arašídy) (arašídy, arašídový olej, satay). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Skořápkové plody (ořechy) a výrobky z nich."
          },
          {
            "id": "dortik-ganache-sisky-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Dortík s ganache ve tvaru chmelových šišek?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Dortík s ganache ve tvaru chmelových šišek obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Skořápkové plody (ořechy) a výrobky z nich."
          },
          {
            "id": "dortik-ganache-sisky-allergen-8",
            "question": "Který z následujících alergenů obsahuje podsložka Dortík s ganache ve tvaru chmelových šišek?",
            "correctAnswer": "Alergen č. 8 – Skořápkové plody (ořechy)",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 6 – Sójové boby (sója)"
            ],
            "explanation": "Dortík s ganache ve tvaru chmelových šišek obsahuje Alergen č. 8 – Skořápkové plody (ořechy) (vlašské ořechy, mandle, lískové ořechy). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Skořápkové plody (ořechy) a výrobky z nich."
          }
        ]
      },
      {
        "id": "karamelovy-trhanec",
        "name": "Karamelový trhanec",
        "price": "169,-",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "nadýchaný císařský trhanec, pečené švestky, zmrzlina z vaječného likéru",
        "questions": [
          {
            "id": "karamelovy-trhanec-ing-1",
            "question": "Která z následujících surovin patří do podsložky Karamelový trhanec?",
            "correctAnswer": "Nadýchaný císařský trhanec",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Karamelový trhanec je obsaženo: Nadýchaný císařský trhanec. Kompletní receptura položky: nadýchaný císařský trhanec, pečené švestky, zmrzlina z vaječného likéru."
          },
          {
            "id": "karamelovy-trhanec-ing-2",
            "question": "Která z následujících surovin patří do podsložky Karamelový trhanec?",
            "correctAnswer": "Pečené švestky",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Karamelový trhanec je obsaženo: Pečené švestky. Kompletní receptura položky: nadýchaný císařský trhanec, pečené švestky, zmrzlina z vaječného likéru."
          },
          {
            "id": "karamelovy-trhanec-ing-3",
            "question": "Která z následujících surovin patří do podsložky Karamelový trhanec?",
            "correctAnswer": "Zmrzlina z vaječného likéru",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Karamelový trhanec je obsaženo: Zmrzlina z vaječného likéru. Kompletní receptura položky: nadýchaný císařský trhanec, pečené švestky, zmrzlina z vaječného likéru."
          },
          {
            "id": "karamelovy-trhanec-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Karamelový trhanec?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Karamelový trhanec obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "karamelovy-trhanec-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Karamelový trhanec?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Karamelový trhanec obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "karamelovy-trhanec-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Karamelový trhanec?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Karamelový trhanec obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "pivni-zmrzlina",
        "name": "Naše pivní zmrzlina",
        "price": "130,-",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "domácí zmrzlina z ležáku, sladová žmolenka, čerstvá šlehačka",
        "questions": [
          {
            "id": "pivni-zmrzlina-ing-1",
            "question": "Která pivovarská surovina nebo vlastnost charakterizuje Naše pivní zmrzlina?",
            "correctAnswer": "Domácí zmrzlina z ležáku",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Naše pivní zmrzlina je obsaženo: Domácí zmrzlina z ležáku. Kompletní receptura položky: domácí zmrzlina z ležáku, sladová žmolenka, čerstvá šlehačka."
          },
          {
            "id": "pivni-zmrzlina-ing-2",
            "question": "Která pivovarská surovina nebo vlastnost charakterizuje Naše pivní zmrzlina?",
            "correctAnswer": "Sladová žmolenka",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Naše pivní zmrzlina je obsaženo: Sladová žmolenka. Kompletní receptura položky: domácí zmrzlina z ležáku, sladová žmolenka, čerstvá šlehačka."
          },
          {
            "id": "pivni-zmrzlina-ing-3",
            "question": "Která z následujících surovin patří do podsložky Naše pivní zmrzlina?",
            "correctAnswer": "Čerstvá šlehačka",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Naše pivní zmrzlina je obsaženo: Čerstvá šlehačka. Kompletní receptura položky: domácí zmrzlina z ležáku, sladová žmolenka, čerstvá šlehačka."
          },
          {
            "id": "pivni-zmrzlina-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Naše pivní zmrzlina?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Naše pivní zmrzlina obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "pivni-zmrzlina-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Naše pivní zmrzlina?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Naše pivní zmrzlina obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "pivni-zmrzlina-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Naše pivní zmrzlina?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Naše pivní zmrzlina obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      }
    ]
  },
  {
    "id": "pivo-na-cepu",
    "name": "pivo na čepu",
    "badge": "Čepované pivo",
    "description": "Nepasterizovaná a nefiltrovaná řemeslná piva z našeho pivovaru FUZE vařená sládkem Alešem Paikem a speciály",
    "iconName": "Beer",
    "items": [
      {
        "id": "transfuze-12",
        "name": "TransFUZE 12",
        "price": "59 / 69 Kč",
        "weight": "0,3l / 0,5l",
        "allergens": [
          "1"
        ],
        "description": "Náš tradiční ležák plzeňského typu, plné svěží chuti a vyvážené hořkosti, nepasterizovaný, nefiltrovaný, čepujeme na hladinku",
        "notes": "Vlajkový světlý ležák vařený přímo v restauraci FUZE.",
        "questions": [
          {
            "id": "transfuze-12-ing-1",
            "question": "Která pivovarská surovina nebo vlastnost charakterizuje TransFUZE 12?",
            "correctAnswer": "Náš tradiční ležák plzeňského typu",
            "distractors": [
              "Mnichovský slad",
              "Žatecký poloraný červeňák"
            ],
            "explanation": "V podsložce TransFUZE 12 je obsaženo: Náš tradiční ležák plzeňského typu. Kompletní receptura položky: Náš tradiční ležák plzeňského typu, plné svěží chuti a vyvážené hořkosti, nepasterizovaný, nefiltrovaný, čepujeme na hladinku."
          },
          {
            "id": "transfuze-12-ing-2",
            "question": "Která z následujících surovin patří do podsložky TransFUZE 12?",
            "correctAnswer": "Plné svěží chuti a vyvážené hořkosti",
            "distractors": [
              "Chmel Citra",
              "Chmel Mandarina Bavaria"
            ],
            "explanation": "V podsložce TransFUZE 12 je obsaženo: Plné svěží chuti a vyvážené hořkosti. Kompletní receptura položky: Náš tradiční ležák plzeňského typu, plné svěží chuti a vyvážené hořkosti, nepasterizovaný, nefiltrovaný, čepujeme na hladinku."
          },
          {
            "id": "transfuze-12-ing-3",
            "question": "Která z následujících surovin patří do podsložky TransFUZE 12?",
            "correctAnswer": "Nepasterizovaný",
            "distractors": [
              "Kvasnice spodního kvašení",
              "Kvasnice svrchního kvašení"
            ],
            "explanation": "V podsložce TransFUZE 12 je obsaženo: Nepasterizovaný. Kompletní receptura položky: Náš tradiční ležák plzeňského typu, plné svěží chuti a vyvážené hořkosti, nepasterizovaný, nefiltrovaný, čepujeme na hladinku."
          },
          {
            "id": "transfuze-12-ing-4",
            "question": "Která z následujících surovin patří do podsložky TransFUZE 12?",
            "correctAnswer": "Nefiltrovaný",
            "distractors": [
              "Pšeničný slad",
              "Pražený karamelový slad"
            ],
            "explanation": "V podsložce TransFUZE 12 je obsaženo: Nefiltrovaný. Kompletní receptura položky: Náš tradiční ležák plzeňského typu, plné svěží chuti a vyvážené hořkosti, nepasterizovaný, nefiltrovaný, čepujeme na hladinku."
          },
          {
            "id": "transfuze-12-ing-5",
            "question": "Která z následujících surovin patří do podsložky TransFUZE 12?",
            "correctAnswer": "Čepujeme na hladinku",
            "distractors": [
              "Chmel Sládek",
              "Plzeňský ječný slad"
            ],
            "explanation": "V podsložce TransFUZE 12 je obsaženo: Čepujeme na hladinku. Kompletní receptura položky: Náš tradiční ležák plzeňského typu, plné svěží chuti a vyvážené hořkosti, nepasterizovaný, nefiltrovaný, čepujeme na hladinku."
          },
          {
            "id": "transfuze-12-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka TransFUZE 12?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "TransFUZE 12 obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "disfuze-10",
        "name": "DisFUZE 10",
        "price": "59 / 69 Kč",
        "weight": "0,3l / 0,5l",
        "allergens": [
          "1"
        ],
        "description": "Naše světlé výčepní pivo, Abv 3,5 %, česká klasika, poctivá desítka, velmi pitelné osvěžující pivo s vyšší hořkostí, nepasterizované, nefiltrované",
        "questions": [
          {
            "id": "disfuze-10-ing-1",
            "question": "Která z následujících surovin patří do podsložky DisFUZE 10?",
            "correctAnswer": "Naše světlé výčepní pivo",
            "distractors": [
              "Mnichovský slad",
              "Žatecký poloraný červeňák"
            ],
            "explanation": "V podsložce DisFUZE 10 je obsaženo: Naše světlé výčepní pivo. Kompletní receptura položky: Naše světlé výčepní pivo, Abv 3,5 %, česká klasika, poctivá desítka, velmi pitelné osvěžující pivo s vyšší hořkostí, nepasterizované, nefiltrované."
          },
          {
            "id": "disfuze-10-ing-2",
            "question": "Která z následujících surovin patří do podsložky DisFUZE 10?",
            "correctAnswer": "Abv 3,5 %",
            "distractors": [
              "Chmel Citra",
              "Chmel Mandarina Bavaria"
            ],
            "explanation": "V podsložce DisFUZE 10 je obsaženo: Abv 3,5 %. Kompletní receptura položky: Naše světlé výčepní pivo, Abv 3,5 %, česká klasika, poctivá desítka, velmi pitelné osvěžující pivo s vyšší hořkostí, nepasterizované, nefiltrované."
          },
          {
            "id": "disfuze-10-ing-3",
            "question": "Která z následujících surovin patří do podsložky DisFUZE 10?",
            "correctAnswer": "Česká klasika",
            "distractors": [
              "Kvasnice spodního kvašení",
              "Kvasnice svrchního kvašení"
            ],
            "explanation": "V podsložce DisFUZE 10 je obsaženo: Česká klasika. Kompletní receptura položky: Naše světlé výčepní pivo, Abv 3,5 %, česká klasika, poctivá desítka, velmi pitelné osvěžující pivo s vyšší hořkostí, nepasterizované, nefiltrované."
          },
          {
            "id": "disfuze-10-ing-4",
            "question": "Která z následujících surovin patří do podsložky DisFUZE 10?",
            "correctAnswer": "Poctivá desítka",
            "distractors": [
              "Pšeničný slad",
              "Pražený karamelový slad"
            ],
            "explanation": "V podsložce DisFUZE 10 je obsaženo: Poctivá desítka. Kompletní receptura položky: Naše světlé výčepní pivo, Abv 3,5 %, česká klasika, poctivá desítka, velmi pitelné osvěžující pivo s vyšší hořkostí, nepasterizované, nefiltrované."
          },
          {
            "id": "disfuze-10-ing-5",
            "question": "Která z následujících surovin patří do podsložky DisFUZE 10?",
            "correctAnswer": "Velmi pitelné osvěžující pivo s vyšší hořkostí",
            "distractors": [
              "Chmel Sládek",
              "Plzeňský ječný slad"
            ],
            "explanation": "V podsložce DisFUZE 10 je obsaženo: Velmi pitelné osvěžující pivo s vyšší hořkostí. Kompletní receptura položky: Naše světlé výčepní pivo, Abv 3,5 %, česká klasika, poctivá desítka, velmi pitelné osvěžující pivo s vyšší hořkostí, nepasterizované, nefiltrované."
          },
          {
            "id": "disfuze-10-ing-6",
            "question": "Která z následujících surovin patří do podsložky DisFUZE 10?",
            "correctAnswer": "Nepasterizované",
            "distractors": [
              "Mnichovský slad",
              "Žatecký poloraný červeňák"
            ],
            "explanation": "V podsložce DisFUZE 10 je obsaženo: Nepasterizované. Kompletní receptura položky: Naše světlé výčepní pivo, Abv 3,5 %, česká klasika, poctivá desítka, velmi pitelné osvěžující pivo s vyšší hořkostí, nepasterizované, nefiltrované."
          },
          {
            "id": "disfuze-10-ing-7",
            "question": "Která z následujících surovin patří do podsložky DisFUZE 10?",
            "correctAnswer": "Nefiltrované",
            "distractors": [
              "Chmel Citra",
              "Chmel Mandarina Bavaria"
            ],
            "explanation": "V podsložce DisFUZE 10 je obsaženo: Nefiltrované. Kompletní receptura položky: Naše světlé výčepní pivo, Abv 3,5 %, česká klasika, poctivá desítka, velmi pitelné osvěžující pivo s vyšší hořkostí, nepasterizované, nefiltrované."
          },
          {
            "id": "disfuze-10-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka DisFUZE 10?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "DisFUZE 10 obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "infuze-ipa-12",
        "name": "InFUZE IPA 12",
        "price": "85 Kč",
        "weight": "0,4l",
        "allergens": [
          "1"
        ],
        "description": "Styl: Session IPA, 12 stupňové pivo, 4,9 % obj alk, svrchně kvašené pivo, lehké osvěžující, nepasterizované, nefiltrované s citrusovým aroma, chmeleno za studena",
        "questions": [
          {
            "id": "infuze-ipa-12-ing-1",
            "question": "Která z následujících surovin patří do podsložky InFUZE IPA 12?",
            "correctAnswer": "Styl: Session IPA",
            "distractors": [
              "Mnichovský slad",
              "Žatecký poloraný červeňák"
            ],
            "explanation": "V podsložce InFUZE IPA 12 je obsaženo: Styl: Session IPA. Kompletní receptura položky: Styl: Session IPA, 12 stupňové pivo, 4,9 % obj alk, svrchně kvašené pivo, lehké osvěžující, nepasterizované, nefiltrované s citrusovým aroma, chmeleno za studena."
          },
          {
            "id": "infuze-ipa-12-ing-2",
            "question": "Která z následujících surovin patří do podsložky InFUZE IPA 12?",
            "correctAnswer": "12 stupňové pivo",
            "distractors": [
              "Chmel Citra",
              "Chmel Mandarina Bavaria"
            ],
            "explanation": "V podsložce InFUZE IPA 12 je obsaženo: 12 stupňové pivo. Kompletní receptura položky: Styl: Session IPA, 12 stupňové pivo, 4,9 % obj alk, svrchně kvašené pivo, lehké osvěžující, nepasterizované, nefiltrované s citrusovým aroma, chmeleno za studena."
          },
          {
            "id": "infuze-ipa-12-ing-3",
            "question": "Která z následujících surovin patří do podsložky InFUZE IPA 12?",
            "correctAnswer": "4,9 % obj alk",
            "distractors": [
              "Kvasnice spodního kvašení",
              "Kvasnice svrchního kvašení"
            ],
            "explanation": "V podsložce InFUZE IPA 12 je obsaženo: 4,9 % obj alk. Kompletní receptura položky: Styl: Session IPA, 12 stupňové pivo, 4,9 % obj alk, svrchně kvašené pivo, lehké osvěžující, nepasterizované, nefiltrované s citrusovým aroma, chmeleno za studena."
          },
          {
            "id": "infuze-ipa-12-ing-4",
            "question": "Která z následujících surovin patří do podsložky InFUZE IPA 12?",
            "correctAnswer": "Svrchně kvašené pivo",
            "distractors": [
              "Pšeničný slad",
              "Pražený karamelový slad"
            ],
            "explanation": "V podsložce InFUZE IPA 12 je obsaženo: Svrchně kvašené pivo. Kompletní receptura položky: Styl: Session IPA, 12 stupňové pivo, 4,9 % obj alk, svrchně kvašené pivo, lehké osvěžující, nepasterizované, nefiltrované s citrusovým aroma, chmeleno za studena."
          },
          {
            "id": "infuze-ipa-12-ing-5",
            "question": "Která z následujících surovin patří do podsložky InFUZE IPA 12?",
            "correctAnswer": "Lehké osvěžující",
            "distractors": [
              "Chmel Sládek",
              "Plzeňský ječný slad"
            ],
            "explanation": "V podsložce InFUZE IPA 12 je obsaženo: Lehké osvěžující. Kompletní receptura položky: Styl: Session IPA, 12 stupňové pivo, 4,9 % obj alk, svrchně kvašené pivo, lehké osvěžující, nepasterizované, nefiltrované s citrusovým aroma, chmeleno za studena."
          },
          {
            "id": "infuze-ipa-12-ing-6",
            "question": "Která z následujících surovin patří do podsložky InFUZE IPA 12?",
            "correctAnswer": "Nepasterizované",
            "distractors": [
              "Mnichovský slad",
              "Žatecký poloraný červeňák"
            ],
            "explanation": "V podsložce InFUZE IPA 12 je obsaženo: Nepasterizované. Kompletní receptura položky: Styl: Session IPA, 12 stupňové pivo, 4,9 % obj alk, svrchně kvašené pivo, lehké osvěžující, nepasterizované, nefiltrované s citrusovým aroma, chmeleno za studena."
          },
          {
            "id": "infuze-ipa-12-ing-7",
            "question": "Která z následujících surovin patří do podsložky InFUZE IPA 12?",
            "correctAnswer": "Nefiltrované s citrusovým aroma",
            "distractors": [
              "Chmel Citra",
              "Chmel Mandarina Bavaria"
            ],
            "explanation": "V podsložce InFUZE IPA 12 je obsaženo: Nefiltrované s citrusovým aroma. Kompletní receptura položky: Styl: Session IPA, 12 stupňové pivo, 4,9 % obj alk, svrchně kvašené pivo, lehké osvěžující, nepasterizované, nefiltrované s citrusovým aroma, chmeleno za studena."
          },
          {
            "id": "infuze-ipa-12-ing-8",
            "question": "Která pivovarská surovina nebo vlastnost charakterizuje InFUZE IPA 12?",
            "correctAnswer": "Chmeleno za studena",
            "distractors": [
              "Kvasnice spodního kvašení",
              "Kvasnice svrchního kvašení"
            ],
            "explanation": "V podsložce InFUZE IPA 12 je obsaženo: Chmeleno za studena. Kompletní receptura položky: Styl: Session IPA, 12 stupňové pivo, 4,9 % obj alk, svrchně kvašené pivo, lehké osvěžující, nepasterizované, nefiltrované s citrusovým aroma, chmeleno za studena."
          },
          {
            "id": "infuze-ipa-12-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka InFUZE IPA 12?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "InFUZE IPA 12 obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "fuzenac-13",
        "name": "FUZEnáč 13 polotmavý",
        "price": "69 / 78 Kč",
        "weight": "0,3l / 0,5l",
        "allergens": [
          "1"
        ],
        "description": "Naše spodně kvašené pivo jantarové barvy a výrazně kouřového aroma, plná sladová uzená chuť, nepasterizovaný, nefiltrovaný",
        "questions": [
          {
            "id": "fuzenac-13-ing-1",
            "question": "Která z následujících surovin patří do podsložky FUZEnáč 13 polotmavý?",
            "correctAnswer": "Naše spodně kvašené pivo jantarové barvy a výrazně kouřového aroma",
            "distractors": [
              "Mnichovský slad",
              "Žatecký poloraný červeňák"
            ],
            "explanation": "V podsložce FUZEnáč 13 polotmavý je obsaženo: Naše spodně kvašené pivo jantarové barvy a výrazně kouřového aroma. Kompletní receptura položky: Naše spodně kvašené pivo jantarové barvy a výrazně kouřového aroma, plná sladová uzená chuť, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "fuzenac-13-ing-2",
            "question": "Která pivovarská surovina nebo vlastnost charakterizuje FUZEnáč 13 polotmavý?",
            "correctAnswer": "Plná sladová uzená chuť",
            "distractors": [
              "Chmel Citra",
              "Chmel Mandarina Bavaria"
            ],
            "explanation": "V podsložce FUZEnáč 13 polotmavý je obsaženo: Plná sladová uzená chuť. Kompletní receptura položky: Naše spodně kvašené pivo jantarové barvy a výrazně kouřového aroma, plná sladová uzená chuť, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "fuzenac-13-ing-3",
            "question": "Která z následujících surovin patří do podsložky FUZEnáč 13 polotmavý?",
            "correctAnswer": "Nepasterizovaný",
            "distractors": [
              "Kvasnice spodního kvašení",
              "Kvasnice svrchního kvašení"
            ],
            "explanation": "V podsložce FUZEnáč 13 polotmavý je obsaženo: Nepasterizovaný. Kompletní receptura položky: Naše spodně kvašené pivo jantarové barvy a výrazně kouřového aroma, plná sladová uzená chuť, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "fuzenac-13-ing-4",
            "question": "Která z následujících surovin patří do podsložky FUZEnáč 13 polotmavý?",
            "correctAnswer": "Nefiltrovaný",
            "distractors": [
              "Pšeničný slad",
              "Pražený karamelový slad"
            ],
            "explanation": "V podsložce FUZEnáč 13 polotmavý je obsaženo: Nefiltrovaný. Kompletní receptura položky: Naše spodně kvašené pivo jantarové barvy a výrazně kouřového aroma, plná sladová uzená chuť, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "fuzenac-13-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka FUZEnáč 13 polotmavý?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "FUZEnáč 13 polotmavý obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "kasteel-rouge-18",
        "name": "Kasteel Rouge 18",
        "price": "118 Kč",
        "weight": "0,25l",
        "allergens": [
          "1"
        ],
        "description": "Svrchně kvašené, 8% tmavé pivo 6 měsíců zrající na višních, z belgického pivovaru Van Honsebrouck, s nádhernou chutí a plnou vůní zralých višní",
        "questions": [
          {
            "id": "kasteel-rouge-18-ing-1",
            "question": "Která z následujících surovin patří do podsložky Kasteel Rouge 18?",
            "correctAnswer": "Svrchně kvašené",
            "distractors": [
              "Mnichovský slad",
              "Žatecký poloraný červeňák"
            ],
            "explanation": "V podsložce Kasteel Rouge 18 je obsaženo: Svrchně kvašené. Kompletní receptura položky: Svrchně kvašené, 8% tmavé pivo 6 měsíců zrající na višních, z belgického pivovaru Van Honsebrouck, s nádhernou chutí a plnou vůní zralých višní."
          },
          {
            "id": "kasteel-rouge-18-ing-2",
            "question": "Která z následujících surovin patří do podsložky Kasteel Rouge 18?",
            "correctAnswer": "8% tmavé pivo 6 měsíců zrající na višních",
            "distractors": [
              "Chmel Citra",
              "Chmel Mandarina Bavaria"
            ],
            "explanation": "V podsložce Kasteel Rouge 18 je obsaženo: 8% tmavé pivo 6 měsíců zrající na višních. Kompletní receptura položky: Svrchně kvašené, 8% tmavé pivo 6 měsíců zrající na višních, z belgického pivovaru Van Honsebrouck, s nádhernou chutí a plnou vůní zralých višní."
          },
          {
            "id": "kasteel-rouge-18-ing-3",
            "question": "Která z následujících surovin patří do podsložky Kasteel Rouge 18?",
            "correctAnswer": "Z belgického pivovaru Van Honsebrouck",
            "distractors": [
              "Kvasnice spodního kvašení",
              "Kvasnice svrchního kvašení"
            ],
            "explanation": "V podsložce Kasteel Rouge 18 je obsaženo: Z belgického pivovaru Van Honsebrouck. Kompletní receptura položky: Svrchně kvašené, 8% tmavé pivo 6 měsíců zrající na višních, z belgického pivovaru Van Honsebrouck, s nádhernou chutí a plnou vůní zralých višní."
          },
          {
            "id": "kasteel-rouge-18-ing-4",
            "question": "Která z následujících surovin patří do podsložky Kasteel Rouge 18?",
            "correctAnswer": "S nádhernou chutí a plnou vůní zralých višní",
            "distractors": [
              "Pšeničný slad",
              "Pražený karamelový slad"
            ],
            "explanation": "V podsložce Kasteel Rouge 18 je obsaženo: S nádhernou chutí a plnou vůní zralých višní. Kompletní receptura položky: Svrchně kvašené, 8% tmavé pivo 6 měsíců zrající na višních, z belgického pivovaru Van Honsebrouck, s nádhernou chutí a plnou vůní zralých višní."
          },
          {
            "id": "kasteel-rouge-18-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Kasteel Rouge 18?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Kasteel Rouge 18 obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "zichovec-passion-fruit",
        "name": "Zichovec Passion Fruit 12",
        "price": "94 Kč",
        "weight": "0,4l",
        "allergens": [
          "1"
        ],
        "description": "Sour Ale, tedy celoroční kyseláč opravdu výrazné kyselosti a intenzivní marakujové vůně a chuti z rodinného pivovaru Zichovec",
        "questions": [
          {
            "id": "zichovec-passion-fruit-ing-1",
            "question": "Která z následujících surovin patří do podsložky Zichovec Passion Fruit 12?",
            "correctAnswer": "Sour Ale",
            "distractors": [
              "Mnichovský slad",
              "Žatecký poloraný červeňák"
            ],
            "explanation": "V podsložce Zichovec Passion Fruit 12 je obsaženo: Sour Ale. Kompletní receptura položky: Sour Ale, tedy celoroční kyseláč opravdu výrazné kyselosti a intenzivní marakujové vůně a chuti z rodinného pivovaru Zichovec."
          },
          {
            "id": "zichovec-passion-fruit-ing-2",
            "question": "Která z následujících surovin patří do podsložky Zichovec Passion Fruit 12?",
            "correctAnswer": "Tedy celoroční kyseláč opravdu výrazné kyselosti a intenzivní marakujové vůně a chuti z rodinného pivovaru Zichovec",
            "distractors": [
              "Chmel Citra",
              "Chmel Mandarina Bavaria"
            ],
            "explanation": "V podsložce Zichovec Passion Fruit 12 je obsaženo: Tedy celoroční kyseláč opravdu výrazné kyselosti a intenzivní marakujové vůně a chuti z rodinného pivovaru Zichovec. Kompletní receptura položky: Sour Ale, tedy celoroční kyseláč opravdu výrazné kyselosti a intenzivní marakujové vůně a chuti z rodinného pivovaru Zichovec."
          },
          {
            "id": "zichovec-passion-fruit-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Zichovec Passion Fruit 12?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Zichovec Passion Fruit 12 obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "degustace-piv",
        "name": "Degustace piv",
        "price": "285 Kč",
        "weight": "6x 0,15l",
        "allergens": [
          "1"
        ],
        "description": "6 vzorků výše uvedených čepovaných piv na stylovém dřevěném prkýnku",
        "questions": [
          {
            "id": "degustace-piv-ing-1",
            "question": "Která z následujících surovin patří do podsložky Degustace piv?",
            "correctAnswer": "6 vzorků výše uvedených čepovaných piv na stylovém dřevěném prkýnku",
            "distractors": [
              "Mnichovský slad",
              "Žatecký poloraný červeňák"
            ],
            "explanation": "V podsložce Degustace piv je obsaženo: 6 vzorků výše uvedených čepovaných piv na stylovém dřevěném prkýnku. Kompletní receptura položky: 6 vzorků výše uvedených čepovaných piv na stylovém dřevěném prkýnku."
          },
          {
            "id": "degustace-piv-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Degustace piv?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Degustace piv obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "fuzero-nealko",
        "name": "FUZEro (nealko)",
        "price": "69 Kč",
        "weight": "0,4l",
        "allergens": [
          "1"
        ],
        "description": "Náš IPL, nealko ležák chmelený americkým a za studena novozélandským chmelem, s jemnou sladovou chutí, vyšší hořkostí v závěru a krásnou, svěží chmelovou vůní, nepasterizovaný, nefiltrovaný",
        "questions": [
          {
            "id": "fuzero-nealko-ing-1",
            "question": "Která z následujících surovin patří do podsložky FUZEro (nealko)?",
            "correctAnswer": "Náš IPL",
            "distractors": [
              "Mnichovský slad",
              "Žatecký poloraný červeňák"
            ],
            "explanation": "V podsložce FUZEro (nealko) je obsaženo: Náš IPL. Kompletní receptura položky: Náš IPL, nealko ležák chmelený americkým a za studena novozélandským chmelem, s jemnou sladovou chutí, vyšší hořkostí v závěru a krásnou, svěží chmelovou vůní, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "fuzero-nealko-ing-2",
            "question": "Která pivovarská surovina nebo vlastnost charakterizuje FUZEro (nealko)?",
            "correctAnswer": "Nealko ležák chmelený americkým a za studena novozélandským chmelem",
            "distractors": [
              "Chmel Citra",
              "Chmel Mandarina Bavaria"
            ],
            "explanation": "V podsložce FUZEro (nealko) je obsaženo: Nealko ležák chmelený americkým a za studena novozélandským chmelem. Kompletní receptura položky: Náš IPL, nealko ležák chmelený americkým a za studena novozélandským chmelem, s jemnou sladovou chutí, vyšší hořkostí v závěru a krásnou, svěží chmelovou vůní, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "fuzero-nealko-ing-3",
            "question": "Která pivovarská surovina nebo vlastnost charakterizuje FUZEro (nealko)?",
            "correctAnswer": "S jemnou sladovou chutí",
            "distractors": [
              "Kvasnice spodního kvašení",
              "Kvasnice svrchního kvašení"
            ],
            "explanation": "V podsložce FUZEro (nealko) je obsaženo: S jemnou sladovou chutí. Kompletní receptura položky: Náš IPL, nealko ležák chmelený americkým a za studena novozélandským chmelem, s jemnou sladovou chutí, vyšší hořkostí v závěru a krásnou, svěží chmelovou vůní, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "fuzero-nealko-ing-4",
            "question": "Která z následujících surovin patří do podsložky FUZEro (nealko)?",
            "correctAnswer": "Vyšší hořkostí v závěru a krásnou",
            "distractors": [
              "Pšeničný slad",
              "Pražený karamelový slad"
            ],
            "explanation": "V podsložce FUZEro (nealko) je obsaženo: Vyšší hořkostí v závěru a krásnou. Kompletní receptura položky: Náš IPL, nealko ležák chmelený americkým a za studena novozélandským chmelem, s jemnou sladovou chutí, vyšší hořkostí v závěru a krásnou, svěží chmelovou vůní, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "fuzero-nealko-ing-5",
            "question": "Která pivovarská surovina nebo vlastnost charakterizuje FUZEro (nealko)?",
            "correctAnswer": "Svěží chmelovou vůní",
            "distractors": [
              "Chmel Sládek",
              "Plzeňský ječný slad"
            ],
            "explanation": "V podsložce FUZEro (nealko) je obsaženo: Svěží chmelovou vůní. Kompletní receptura položky: Náš IPL, nealko ležák chmelený americkým a za studena novozélandským chmelem, s jemnou sladovou chutí, vyšší hořkostí v závěru a krásnou, svěží chmelovou vůní, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "fuzero-nealko-ing-6",
            "question": "Která z následujících surovin patří do podsložky FUZEro (nealko)?",
            "correctAnswer": "Nepasterizovaný",
            "distractors": [
              "Mnichovský slad",
              "Žatecký poloraný červeňák"
            ],
            "explanation": "V podsložce FUZEro (nealko) je obsaženo: Nepasterizovaný. Kompletní receptura položky: Náš IPL, nealko ležák chmelený americkým a za studena novozélandským chmelem, s jemnou sladovou chutí, vyšší hořkostí v závěru a krásnou, svěží chmelovou vůní, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "fuzero-nealko-ing-7",
            "question": "Která z následujících surovin patří do podsložky FUZEro (nealko)?",
            "correctAnswer": "Nefiltrovaný",
            "distractors": [
              "Chmel Citra",
              "Chmel Mandarina Bavaria"
            ],
            "explanation": "V podsložce FUZEro (nealko) je obsaženo: Nefiltrovaný. Kompletní receptura položky: Náš IPL, nealko ležák chmelený americkým a za studena novozélandským chmelem, s jemnou sladovou chutí, vyšší hořkostí v závěru a krásnou, svěží chmelovou vůní, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "fuzero-nealko-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka FUZEro (nealko)?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "FUZEro (nealko) obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "maisels-weisse",
        "name": "Maisel´s Weisse Alkoholfrei",
        "price": "79 Kč",
        "weight": "0,33l (lahvové)",
        "allergens": [
          "1"
        ],
        "description": "Bavorský Weizenbier, tedy pšenice v nealkoholické podobě, s přirozeným zákalem a ovocně kořeněným profilem",
        "questions": [
          {
            "id": "maisels-weisse-ing-1",
            "question": "Která z následujících surovin patří do podsložky Maisel´s Weisse Alkoholfrei?",
            "correctAnswer": "Bavorský Weizenbier",
            "distractors": [
              "Mnichovský slad",
              "Žatecký poloraný červeňák"
            ],
            "explanation": "V podsložce Maisel´s Weisse Alkoholfrei je obsaženo: Bavorský Weizenbier. Kompletní receptura položky: Bavorský Weizenbier, tedy pšenice v nealkoholické podobě, s přirozeným zákalem a ovocně kořeněným profilem."
          },
          {
            "id": "maisels-weisse-ing-2",
            "question": "Která z následujících surovin patří do podsložky Maisel´s Weisse Alkoholfrei?",
            "correctAnswer": "Tedy pšenice v nealkoholické podobě",
            "distractors": [
              "Chmel Citra",
              "Chmel Mandarina Bavaria"
            ],
            "explanation": "V podsložce Maisel´s Weisse Alkoholfrei je obsaženo: Tedy pšenice v nealkoholické podobě. Kompletní receptura položky: Bavorský Weizenbier, tedy pšenice v nealkoholické podobě, s přirozeným zákalem a ovocně kořeněným profilem."
          },
          {
            "id": "maisels-weisse-ing-3",
            "question": "Která z následujících surovin patří do podsložky Maisel´s Weisse Alkoholfrei?",
            "correctAnswer": "S přirozeným zákalem a ovocně kořeněným profilem",
            "distractors": [
              "Kvasnice spodního kvašení",
              "Kvasnice svrchního kvašení"
            ],
            "explanation": "V podsložce Maisel´s Weisse Alkoholfrei je obsaženo: S přirozeným zákalem a ovocně kořeněným profilem. Kompletní receptura položky: Bavorský Weizenbier, tedy pšenice v nealkoholické podobě, s přirozeným zákalem a ovocně kořeněným profilem."
          },
          {
            "id": "maisels-weisse-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Maisel´s Weisse Alkoholfrei?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Maisel´s Weisse Alkoholfrei obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "opre-cider",
        "name": "Opre` Cider",
        "price": "89 Kč",
        "weight": "0,33l",
        "description": "Řemeslný jablečný cider ze slovenské rodinné farmy, přirozeně kvašený ze 100% jablečné šťávy",
        "questions": [
          {
            "id": "opre-cider-ing-1",
            "question": "Která z následujících surovin patří do podsložky Opre` Cider?",
            "correctAnswer": "Řemeslný jablečný cider ze slovenské rodinné farmy",
            "distractors": [
              "Mnichovský slad",
              "Žatecký poloraný červeňák"
            ],
            "explanation": "V podsložce Opre` Cider je obsaženo: Řemeslný jablečný cider ze slovenské rodinné farmy. Kompletní receptura položky: Řemeslný jablečný cider ze slovenské rodinné farmy, přirozeně kvašený ze 100% jablečné šťávy."
          },
          {
            "id": "opre-cider-ing-2",
            "question": "Která z následujících surovin patří do podsložky Opre` Cider?",
            "correctAnswer": "Přirozeně kvašený ze 100% jablečné šťávy",
            "distractors": [
              "Chmel Citra",
              "Chmel Mandarina Bavaria"
            ],
            "explanation": "V podsložce Opre` Cider je obsaženo: Přirozeně kvašený ze 100% jablečné šťávy. Kompletní receptura položky: Řemeslný jablečný cider ze slovenské rodinné farmy, přirozeně kvašený ze 100% jablečné šťávy."
          }
        ]
      },
      {
        "id": "opre-sour-cherry",
        "name": "Opre` Sour Cherry",
        "price": "96 Kč",
        "weight": "0,33l",
        "description": "Cider, který v sobě spojuje chuť poctivého jablečného cidru a osvěžující višňové šťávy",
        "questions": [
          {
            "id": "opre-sour-cherry-ing-1",
            "question": "Která z následujících surovin patří do podsložky Opre` Sour Cherry?",
            "correctAnswer": "Cider",
            "distractors": [
              "Mnichovský slad",
              "Žatecký poloraný červeňák"
            ],
            "explanation": "V podsložce Opre` Sour Cherry je obsaženo: Cider. Kompletní receptura položky: Cider, který v sobě spojuje chuť poctivého jablečného cidru a osvěžující višňové šťávy."
          },
          {
            "id": "opre-sour-cherry-ing-2",
            "question": "Která z následujících surovin patří do podsložky Opre` Sour Cherry?",
            "correctAnswer": "Který v sobě spojuje chuť poctivého jablečného cidru a osvěžující višňové šťávy",
            "distractors": [
              "Chmel Citra",
              "Chmel Mandarina Bavaria"
            ],
            "explanation": "V podsložce Opre` Sour Cherry je obsaženo: Který v sobě spojuje chuť poctivého jablečného cidru a osvěžující višňové šťávy. Kompletní receptura položky: Cider, který v sobě spojuje chuť poctivého jablečného cidru a osvěžující višňové šťávy."
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
        "description": "Řemeslná kombucha s unikátní 6měsíční dlouhodobou fermentací, ceylonský čaj, citronová tráva a kapka citronové šťávy. Bez alkoholu a bohatá na probiotika Bacillus coagulans",
        "questions": [
          {
            "id": "loklok-original-ing-1",
            "question": "Která z následujících surovin patří do podsložky Loklok Kombucha Original?",
            "correctAnswer": "Řemeslná kombucha s unikátní 6měsíční dlouhodobou fermentací",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Loklok Kombucha Original je obsaženo: Řemeslná kombucha s unikátní 6měsíční dlouhodobou fermentací. Kompletní receptura položky: Řemeslná kombucha s unikátní 6měsíční dlouhodobou fermentací, ceylonský čaj, citronová tráva a kapka citronové šťávy. Bez alkoholu a bohatá na probiotika Bacillus coagulans."
          },
          {
            "id": "loklok-original-ing-2",
            "question": "Která z následujících surovin patří do podsložky Loklok Kombucha Original?",
            "correctAnswer": "Ceylonský čaj",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Loklok Kombucha Original je obsaženo: Ceylonský čaj. Kompletní receptura položky: Řemeslná kombucha s unikátní 6měsíční dlouhodobou fermentací, ceylonský čaj, citronová tráva a kapka citronové šťávy. Bez alkoholu a bohatá na probiotika Bacillus coagulans."
          },
          {
            "id": "loklok-original-ing-3",
            "question": "Která z následujících surovin patří do podsložky Loklok Kombucha Original?",
            "correctAnswer": "Citronová tráva a kapka citronové šťávy. Bez alkoholu a bohatá na probiotika Bacillus coagulans",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Loklok Kombucha Original je obsaženo: Citronová tráva a kapka citronové šťávy. Bez alkoholu a bohatá na probiotika Bacillus coagulans. Kompletní receptura položky: Řemeslná kombucha s unikátní 6měsíční dlouhodobou fermentací, ceylonský čaj, citronová tráva a kapka citronové šťávy. Bez alkoholu a bohatá na probiotika Bacillus coagulans."
          }
        ]
      },
      {
        "id": "loklok-zazvor",
        "name": "Loklok Kombucha Zázvor",
        "price": "95 Kč",
        "weight": "0,33l",
        "description": "Přírodní fermentovaná kombucha s pikantním výluhem z čerstvého kořene zázvoru, plná svěžesti",
        "questions": [
          {
            "id": "loklok-zazvor-ing-1",
            "question": "Která z následujících surovin patří do podsložky Loklok Kombucha Zázvor?",
            "correctAnswer": "Přírodní fermentovaná kombucha s pikantním výluhem z čerstvého kořene zázvoru",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Loklok Kombucha Zázvor je obsaženo: Přírodní fermentovaná kombucha s pikantním výluhem z čerstvého kořene zázvoru. Kompletní receptura položky: Přírodní fermentovaná kombucha s pikantním výluhem z čerstvého kořene zázvoru, plná svěžesti."
          },
          {
            "id": "loklok-zazvor-ing-2",
            "question": "Která z následujících surovin patří do podsložky Loklok Kombucha Zázvor?",
            "correctAnswer": "Plná svěžesti",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Loklok Kombucha Zázvor je obsaženo: Plná svěžesti. Kompletní receptura položky: Přírodní fermentovaná kombucha s pikantním výluhem z čerstvého kořene zázvoru, plná svěžesti."
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
            "id": "loklok-malina-ing-1",
            "question": "Která z následujících surovin patří do podsložky Loklok Kombucha Malina?",
            "correctAnswer": "Jemně perlivá kombucha macerovaná se zralými malinami",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Loklok Kombucha Malina je obsaženo: Jemně perlivá kombucha macerovaná se zralými malinami. Kompletní receptura položky: Jemně perlivá kombucha macerovaná se zralými malinami, osvěžující ovocná chuť s probiotickými kulturami."
          },
          {
            "id": "loklok-malina-ing-2",
            "question": "Která z následujících surovin patří do podsložky Loklok Kombucha Malina?",
            "correctAnswer": "Osvěžující ovocná chuť s probiotickými kulturami",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Loklok Kombucha Malina je obsaženo: Osvěžující ovocná chuť s probiotickými kulturami. Kompletní receptura položky: Jemně perlivá kombucha macerovaná se zralými malinami, osvěžující ovocná chuť s probiotickými kulturami."
          }
        ]
      },
      {
        "id": "jzt-kombucha",
        "name": "JZT Kombucha Sencha & Assam",
        "price": "98 Kč",
        "weight": "0,33l",
        "description": "Živá, nepasterizovaná a nefiltrovaná řemeslná kombucha z prémiových čajů Sencha a Assam od pražských výrobců JZT",
        "questions": [
          {
            "id": "jzt-kombucha-ing-1",
            "question": "Která z následujících surovin patří do podsložky JZT Kombucha Sencha & Assam?",
            "correctAnswer": "Živá",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce JZT Kombucha Sencha & Assam je obsaženo: Živá. Kompletní receptura položky: Živá, nepasterizovaná a nefiltrovaná řemeslná kombucha z prémiových čajů Sencha a Assam od pražských výrobců JZT."
          },
          {
            "id": "jzt-kombucha-ing-2",
            "question": "Která z následujících surovin patří do podsložky JZT Kombucha Sencha & Assam?",
            "correctAnswer": "Nepasterizovaná a nefiltrovaná řemeslná kombucha z prémiových čajů Sencha a Assam od pražských výrobců JZT",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce JZT Kombucha Sencha & Assam je obsaženo: Nepasterizovaná a nefiltrovaná řemeslná kombucha z prémiových čajů Sencha a Assam od pražských výrobců JZT. Kompletní receptura položky: Živá, nepasterizovaná a nefiltrovaná řemeslná kombucha z prémiových čajů Sencha a Assam od pražských výrobců JZT."
          }
        ]
      }
    ]
  },
  {
    "id": "vody-a-mineralni-vody",
    "name": "vody a minerální vody",
    "badge": "Vody & Minerálky",
    "description": "Mikrofiltrované, infuzované a přírodní minerální vody",
    "iconName": "GlassWater",
    "items": [
      {
        "id": "filtrovana-karafa",
        "name": "Filtrovaná voda v karafě",
        "price": "89 Kč",
        "weight": "0,75l",
        "description": "0,75l neperlivá / perlivá mikrofiltrovaná voda FUZE podávaná v designové karafě",
        "questions": [
          {
            "id": "filtrovana-karafa-vol",
            "question": "Jaký je servírovací objem / míra podsložky Filtrovaná voda v karafě?",
            "correctAnswer": "0,75 l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Filtrovaná voda v karafě je 0,75 l."
          },
          {
            "id": "filtrovana-karafa-ing-1",
            "question": "Která z následujících surovin patří do podsložky Filtrovaná voda v karafě?",
            "correctAnswer": "Neperlivá / perlivá mikrofiltrovaná voda FUZE podávaná v designové karafě",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Filtrovaná voda v karafě je obsaženo: Neperlivá / perlivá mikrofiltrovaná voda FUZE podávaná v designové karafě. Kompletní receptura položky: 0,75l neperlivá / perlivá mikrofiltrovaná voda FUZE podávaná v designové karafě."
          }
        ]
      },
      {
        "id": "filtrovana-sklenice",
        "name": "Sklenice filtrované vody",
        "price": "35 Kč",
        "weight": "0,3l",
        "description": "0,3l neperlivá / perlivá čerstvá filtrovaná voda",
        "questions": [
          {
            "id": "filtrovana-sklenice-vol",
            "question": "Jaký je servírovací objem / míra podsložky Sklenice filtrované vody?",
            "correctAnswer": "0,3 l",
            "distractors": [
              "0,5 l",
              "0,4 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Sklenice filtrované vody je 0,3 l."
          },
          {
            "id": "filtrovana-sklenice-ing-1",
            "question": "Která z následujících surovin patří do podsložky Sklenice filtrované vody?",
            "correctAnswer": "Neperlivá / perlivá čerstvá filtrovaná voda",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Sklenice filtrované vody je obsaženo: Neperlivá / perlivá čerstvá filtrovaná voda. Kompletní receptura položky: 0,3l neperlivá / perlivá čerstvá filtrovaná voda."
          }
        ]
      },
      {
        "id": "infuzovana-voda",
        "name": "Infuzovaná voda v karafě",
        "price": "99 Kč",
        "weight": "0,75l",
        "description": "0,75l v karafě, varianta citrus nebo čerstvá máta",
        "questions": [
          {
            "id": "infuzovana-voda-vol",
            "question": "Jaký je servírovací objem / míra podsložky Infuzovaná voda v karafě?",
            "correctAnswer": "0,75 l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Infuzovaná voda v karafě je 0,75 l."
          },
          {
            "id": "infuzovana-voda-ing-1",
            "question": "Která z následujících surovin patří do podsložky Infuzovaná voda v karafě?",
            "correctAnswer": "V karafě",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Infuzovaná voda v karafě je obsaženo: V karafě. Kompletní receptura položky: 0,75l v karafě, varianta citrus nebo čerstvá máta."
          },
          {
            "id": "infuzovana-voda-ing-2",
            "question": "Která z následujících surovin patří do podsložky Infuzovaná voda v karafě?",
            "correctAnswer": "Varianta citrus nebo čerstvá máta",
            "distractors": [
              "Bílá čokoláda",
              "Švestkové pyré"
            ],
            "explanation": "V podsložce Infuzovaná voda v karafě je obsaženo: Varianta citrus nebo čerstvá máta. Kompletní receptura položky: 0,75l v karafě, varianta citrus nebo čerstvá máta."
          }
        ]
      },
      {
        "id": "mattoni-grand",
        "name": "Mattoni Grand neperlivá",
        "price": "45 Kč",
        "weight": "0,33l",
        "description": "0,33l přírodní minerální voda dekarbonovaná ve skle",
        "questions": [
          {
            "id": "mattoni-grand-vol",
            "question": "Jaký je servírovací objem / míra podsložky Mattoni Grand neperlivá?",
            "correctAnswer": "0,33 l",
            "distractors": [
              "0,5 l",
              "0,25 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Mattoni Grand neperlivá je 0,33 l."
          },
          {
            "id": "mattoni-grand-ing-1",
            "question": "Která z následujících surovin patří do podsložky Mattoni Grand neperlivá?",
            "correctAnswer": "Přírodní minerální voda dekarbonovaná ve skle",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Mattoni Grand neperlivá je obsaženo: Přírodní minerální voda dekarbonovaná ve skle. Kompletní receptura položky: 0,33l přírodní minerální voda dekarbonovaná ve skle."
          }
        ]
      },
      {
        "id": "vratislavicka-kyselka",
        "name": "Vratislavická kyselka",
        "price": "119 Kč",
        "weight": "0,75l",
        "description": "0,75l přírodní minerální voda středně mineralizovaná s obsahem křemíku, přirozeně sycená",
        "questions": [
          {
            "id": "vratislavicka-kyselka-vol",
            "question": "Jaký je servírovací objem / míra podsložky Vratislavická kyselka?",
            "correctAnswer": "0,75 l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Vratislavická kyselka je 0,75 l."
          },
          {
            "id": "vratislavicka-kyselka-ing-1",
            "question": "Která z následujících surovin patří do podsložky Vratislavická kyselka?",
            "correctAnswer": "Přírodní minerální voda středně mineralizovaná s obsahem křemíku",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Vratislavická kyselka je obsaženo: Přírodní minerální voda středně mineralizovaná s obsahem křemíku. Kompletní receptura položky: 0,75l přírodní minerální voda středně mineralizovaná s obsahem křemíku, přirozeně sycená."
          },
          {
            "id": "vratislavicka-kyselka-ing-2",
            "question": "Která z následujících surovin patří do podsložky Vratislavická kyselka?",
            "correctAnswer": "Přirozeně sycená",
            "distractors": [
              "Bílá čokoláda",
              "Švestkové pyré"
            ],
            "explanation": "V podsložce Vratislavická kyselka je obsaženo: Přirozeně sycená. Kompletní receptura položky: 0,75l přírodní minerální voda středně mineralizovaná s obsahem křemíku, přirozeně sycená."
          }
        ]
      }
    ]
  },
  {
    "id": "nase-domaci-limonady",
    "name": "naše domácí limonády",
    "badge": "Domácí limonády",
    "description": "Osvěžující domácí limonády z poctivého ovoce, bylin, freshů a vařených sirupů",
    "iconName": "CupSoda",
    "items": [
      {
        "id": "grep-a-mango",
        "name": "Grep a mango",
        "price": "84 Kč",
        "weight": "0,4l",
        "description": "0,4l domácí limonáda z čerstvého grepu a šťavnatého mangového pyré se sodou na ledu",
        "questions": [
          {
            "id": "grep-a-mango-vol",
            "question": "Jaký je servírovací objem / míra podsložky Grep a mango?",
            "correctAnswer": "0,4 l",
            "distractors": [
              "0,5 l",
              "0,3 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Grep a mango je 0,4 l."
          },
          {
            "id": "grep-a-mango-ing-1",
            "question": "Která z následujících surovin patří do podsložky Grep a mango?",
            "correctAnswer": "Domácí limonáda z čerstvého grepu a šťavnatého mangového pyré se sodou na ledu",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Grep a mango je obsaženo: Domácí limonáda z čerstvého grepu a šťavnatého mangového pyré se sodou na ledu. Kompletní receptura položky: 0,4l domácí limonáda z čerstvého grepu a šťavnatého mangového pyré se sodou na ledu."
          }
        ]
      },
      {
        "id": "malina-a-bila-cokolada",
        "name": "Malina a bílá čokoláda",
        "price": "84 Kč",
        "weight": "0,4l",
        "description": "0,4l jemná domácí limonáda z malinového pyré a tónů bílé čokolády, limeta, soda",
        "questions": [
          {
            "id": "malina-a-bila-cokolada-vol",
            "question": "Jaký je servírovací objem / míra podsložky Malina a bílá čokoláda?",
            "correctAnswer": "0,4 l",
            "distractors": [
              "0,5 l",
              "0,3 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Malina a bílá čokoláda je 0,4 l."
          },
          {
            "id": "malina-a-bila-cokolada-ing-1",
            "question": "Která z následujících surovin patří do podsložky Malina a bílá čokoláda?",
            "correctAnswer": "Jemná domácí limonáda z malinového pyré a tónů bílé čokolády",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Malina a bílá čokoláda je obsaženo: Jemná domácí limonáda z malinového pyré a tónů bílé čokolády. Kompletní receptura položky: 0,4l jemná domácí limonáda z malinového pyré a tónů bílé čokolády, limeta, soda."
          },
          {
            "id": "malina-a-bila-cokolada-ing-2",
            "question": "Která z následujících surovin patří do podsložky Malina a bílá čokoláda?",
            "correctAnswer": "Limeta",
            "distractors": [
              "Bílá čokoláda",
              "Švestkové pyré"
            ],
            "explanation": "V podsložce Malina a bílá čokoláda je obsaženo: Limeta. Kompletní receptura položky: 0,4l jemná domácí limonáda z malinového pyré a tónů bílé čokolády, limeta, soda."
          },
          {
            "id": "malina-a-bila-cokolada-ing-3",
            "question": "Která z následujících surovin patří do podsložky Malina a bílá čokoláda?",
            "correctAnswer": "Soda",
            "distractors": [
              "Drcený kardamom",
              "Zázvorový výluh"
            ],
            "explanation": "V podsložce Malina a bílá čokoláda je obsaženo: Soda. Kompletní receptura položky: 0,4l jemná domácí limonáda z malinového pyré a tónů bílé čokolády, limeta, soda."
          }
        ]
      },
      {
        "id": "svestka-a-kardamom",
        "name": "Švestka a kardamom",
        "price": "84 Kč",
        "weight": "0,4l",
        "description": "0,4l originální limonáda ze švestkového pyré provoněná drceným orientálním kardamomem",
        "questions": [
          {
            "id": "svestka-a-kardamom-vol",
            "question": "Jaký je servírovací objem / míra podsložky Švestka a kardamom?",
            "correctAnswer": "0,4 l",
            "distractors": [
              "0,5 l",
              "0,3 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Švestka a kardamom je 0,4 l."
          },
          {
            "id": "svestka-a-kardamom-ing-1",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Švestka a kardamom?",
            "correctAnswer": "Originální limonáda ze švestkového pyré provoněná drceným orientálním kardamomem",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Švestka a kardamom je obsaženo: Originální limonáda ze švestkového pyré provoněná drceným orientálním kardamomem. Kompletní receptura položky: 0,4l originální limonáda ze švestkového pyré provoněná drceným orientálním kardamomem."
          }
        ]
      },
      {
        "id": "domaci-citronada",
        "name": "Domácí citronáda",
        "price": "84 Kč",
        "weight": "0,4l",
        "description": "0,4l poctivá citronáda z čerstvé citronové šťávy, třtinového cukru, máty a sody",
        "questions": [
          {
            "id": "domaci-citronada-vol",
            "question": "Jaký je servírovací objem / míra podsložky Domácí citronáda?",
            "correctAnswer": "0,4 l",
            "distractors": [
              "0,5 l",
              "0,3 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Domácí citronáda je 0,4 l."
          },
          {
            "id": "domaci-citronada-ing-1",
            "question": "Která z následujících surovin patří do podsložky Domácí citronáda?",
            "correctAnswer": "Poctivá citronáda z čerstvé citronové šťávy",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Domácí citronáda je obsaženo: Poctivá citronáda z čerstvé citronové šťávy. Kompletní receptura položky: 0,4l poctivá citronáda z čerstvé citronové šťávy, třtinového cukru, máty a sody."
          },
          {
            "id": "domaci-citronada-ing-2",
            "question": "Která z následujících surovin patří do podsložky Domácí citronáda?",
            "correctAnswer": "Třtinového cukru",
            "distractors": [
              "Bílá čokoláda",
              "Švestkové pyré"
            ],
            "explanation": "V podsložce Domácí citronáda je obsaženo: Třtinového cukru. Kompletní receptura položky: 0,4l poctivá citronáda z čerstvé citronové šťávy, třtinového cukru, máty a sody."
          },
          {
            "id": "domaci-citronada-ing-3",
            "question": "Která z následujících surovin patří do podsložky Domácí citronáda?",
            "correctAnswer": "Máty a sody",
            "distractors": [
              "Drcený kardamom",
              "Zázvorový výluh"
            ],
            "explanation": "V podsložce Domácí citronáda je obsaženo: Máty a sody. Kompletní receptura položky: 0,4l poctivá citronáda z čerstvé citronové šťávy, třtinového cukru, máty a sody."
          }
        ]
      },
      {
        "id": "nase-ledovy-caj",
        "name": "Náš domácí ledový čaj",
        "price": "86 Kč",
        "weight": "0,4l",
        "description": "0,4l jasmín a broskev, čerstvě vařený jasmínový čaj s broskvovým pyré na ledu",
        "questions": [
          {
            "id": "nase-ledovy-caj-vol",
            "question": "Jaký je servírovací objem / míra podsložky Náš domácí ledový čaj?",
            "correctAnswer": "0,4 l",
            "distractors": [
              "0,5 l",
              "0,3 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Náš domácí ledový čaj je 0,4 l."
          },
          {
            "id": "nase-ledovy-caj-ing-1",
            "question": "Která z následujících surovin patří do podsložky Náš domácí ledový čaj?",
            "correctAnswer": "Jasmín a broskev",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Náš domácí ledový čaj je obsaženo: Jasmín a broskev. Kompletní receptura položky: 0,4l jasmín a broskev, čerstvě vařený jasmínový čaj s broskvovým pyré na ledu."
          },
          {
            "id": "nase-ledovy-caj-ing-2",
            "question": "Která z následujících surovin patří do podsložky Náš domácí ledový čaj?",
            "correctAnswer": "Čerstvě vařený jasmínový čaj s broskvovým pyré na ledu",
            "distractors": [
              "Bílá čokoláda",
              "Švestkové pyré"
            ],
            "explanation": "V podsložce Náš domácí ledový čaj je obsaženo: Čerstvě vařený jasmínový čaj s broskvovým pyré na ledu. Kompletní receptura položky: 0,4l jasmín a broskev, čerstvě vařený jasmínový čaj s broskvovým pyré na ledu."
          }
        ]
      },
      {
        "id": "fresh-juice",
        "name": "Fresh juice",
        "price": "125 Kč",
        "weight": "0,2l",
        "description": "0,2l čerstvě lisovaná šťáva z pomerančů nebo grapefruitů dle výběru hosta",
        "questions": [
          {
            "id": "fresh-juice-vol",
            "question": "Jaký je servírovací objem / míra podsložky Fresh juice?",
            "correctAnswer": "0,2 l",
            "distractors": [
              "0,3 l",
              "0,1 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Fresh juice je 0,2 l."
          },
          {
            "id": "fresh-juice-ing-1",
            "question": "Která z následujících surovin patří do podsložky Fresh juice?",
            "correctAnswer": "Čerstvě lisovaná šťáva z pomerančů nebo grapefruitů dle výběru hosta",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Fresh juice je obsaženo: Čerstvě lisovaná šťáva z pomerančů nebo grapefruitů dle výběru hosta. Kompletní receptura položky: 0,2l čerstvě lisovaná šťáva z pomerančů nebo grapefruitů dle výběru hosta."
          }
        ]
      }
    ]
  },
  {
    "id": "lahvove-limonady",
    "name": "lahvové limonády",
    "badge": "Lahvové nealko",
    "description": "Kultovní nealko nápoje, prémiové toniky a zázvorové pivo",
    "iconName": "CupSoda",
    "items": [
      {
        "id": "coca-cola",
        "name": "Coca Cola / Coca Cola zero",
        "price": "65 Kč",
        "weight": "0,33l",
        "description": "0,33l v originální skleněné lahvi, klasická receptura i varianta Zero bez cukru",
        "questions": [
          {
            "id": "coca-cola-vol",
            "question": "Jaký je servírovací objem / míra podsložky Coca Cola / Coca Cola zero?",
            "correctAnswer": "0,33 l",
            "distractors": [
              "0,5 l",
              "0,25 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Coca Cola / Coca Cola zero je 0,33 l."
          },
          {
            "id": "coca-cola-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Coca Cola / Coca Cola zero?",
            "correctAnswer": "V originální skleněné lahvi",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Coca Cola / Coca Cola zero je obsaženo: V originální skleněné lahvi. Kompletní receptura položky: 0,33l v originální skleněné lahvi, klasická receptura i varianta Zero bez cukru."
          },
          {
            "id": "coca-cola-ing-2",
            "question": "Která z následujících surovin patří do podsložky Coca Cola / Coca Cola zero?",
            "correctAnswer": "Klasická receptura i varianta Zero bez cukru",
            "distractors": [
              "Bílá čokoláda",
              "Švestkové pyré"
            ],
            "explanation": "V podsložce Coca Cola / Coca Cola zero je obsaženo: Klasická receptura i varianta Zero bez cukru. Kompletní receptura položky: 0,33l v originální skleněné lahvi, klasická receptura i varianta Zero bez cukru."
          }
        ]
      },
      {
        "id": "thomas-henry-tonic",
        "name": "Thomas Henry Tonic",
        "price": "75 Kč",
        "weight": "0,2l",
        "description": "0,2l prémiový německý tonik s výraznějším obsahem chininu a květinově-citrusovými tóny",
        "questions": [
          {
            "id": "thomas-henry-tonic-vol",
            "question": "Jaký je servírovací objem / míra podsložky Thomas Henry Tonic?",
            "correctAnswer": "0,2 l",
            "distractors": [
              "0,3 l",
              "0,1 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Thomas Henry Tonic je 0,2 l."
          },
          {
            "id": "thomas-henry-tonic-ing-1",
            "question": "Která z následujících surovin patří do podsložky Thomas Henry Tonic?",
            "correctAnswer": "Prémiový německý tonik s výraznějším obsahem chininu a květinově-citrusovými tóny",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Thomas Henry Tonic je obsaženo: Prémiový německý tonik s výraznějším obsahem chininu a květinově-citrusovými tóny. Kompletní receptura položky: 0,2l prémiový německý tonik s výraznějším obsahem chininu a květinově-citrusovými tóny."
          }
        ]
      },
      {
        "id": "fever-tree-tonic",
        "name": "Fever-Tree Tonic",
        "price": "85 Kč",
        "weight": "0,2l",
        "description": "0,2l špičkový britský tonik z čistého chininu ze střední Afriky a pramenité vody",
        "questions": [
          {
            "id": "fever-tree-tonic-vol",
            "question": "Jaký je servírovací objem / míra podsložky Fever-Tree Tonic?",
            "correctAnswer": "0,2 l",
            "distractors": [
              "0,3 l",
              "0,1 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Fever-Tree Tonic je 0,2 l."
          },
          {
            "id": "fever-tree-tonic-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Fever-Tree Tonic?",
            "correctAnswer": "Špičkový britský tonik z čistého chininu ze střední Afriky a pramenité vody",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Fever-Tree Tonic je obsaženo: Špičkový britský tonik z čistého chininu ze střední Afriky a pramenité vody. Kompletní receptura položky: 0,2l špičkový britský tonik z čistého chininu ze střední Afriky a pramenité vody."
          }
        ]
      },
      {
        "id": "fever-tree-ginger-beer",
        "name": "Fever-Tree Ginger Beer",
        "price": "85 Kč",
        "weight": "0,2l",
        "description": "0,2l přírodně kvašené nealkoholické zázvorové pivo se směsí tří druhů afrického zázvoru",
        "questions": [
          {
            "id": "fever-tree-ginger-beer-vol",
            "question": "Jaký je servírovací objem / míra podsložky Fever-Tree Ginger Beer?",
            "correctAnswer": "0,2 l",
            "distractors": [
              "0,3 l",
              "0,1 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Fever-Tree Ginger Beer je 0,2 l."
          },
          {
            "id": "fever-tree-ginger-beer-ing-1",
            "question": "Která z následujících surovin patří do podsložky Fever-Tree Ginger Beer?",
            "correctAnswer": "Přírodně kvašené nealkoholické zázvorové pivo se směsí tří druhů afrického zázvoru",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Fever-Tree Ginger Beer je obsaženo: Přírodně kvašené nealkoholické zázvorové pivo se směsí tří druhů afrického zázvoru. Kompletní receptura položky: 0,2l přírodně kvašené nealkoholické zázvorové pivo se směsí tří druhů afrického zázvoru."
          }
        ]
      },
      {
        "id": "red-bull",
        "name": "Red Bull",
        "price": "99 Kč",
        "weight": "0,2l plechovka",
        "description": "0,2l plechovka prémiového energetického nápoje",
        "questions": [
          {
            "id": "red-bull-vol",
            "question": "Jaký je servírovací objem / míra podsložky Red Bull?",
            "correctAnswer": "0,2 l",
            "distractors": [
              "0,3 l",
              "0,1 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Red Bull je 0,2 l."
          },
          {
            "id": "red-bull-ing-1",
            "question": "Která z následujících surovin patří do podsložky Red Bull?",
            "correctAnswer": "Plechovka prémiového energetického nápoje",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Red Bull je obsaženo: Plechovka prémiového energetického nápoje. Kompletní receptura položky: 0,2l plechovka prémiového energetického nápoje."
          }
        ]
      }
    ]
  },
  {
    "id": "kava-caj-a-horke-napoje",
    "name": "káva čaj a horké nápoje",
    "badge": "Káva & Teplé nápoje",
    "description": "Výběrová káva, sypané čaje, horká čokoláda, perníkový horký cider a svařené víno",
    "iconName": "Coffee",
    "items": [
      {
        "id": "espresso",
        "name": "Espresso",
        "price": "66 Kč",
        "weight": "9g",
        "description": "9g výběrové kávy, klasická extrakce s oříškovou cremou a vyváženým tělem",
        "questions": [
          {
            "id": "espresso-vol",
            "question": "Jaká je gramáž porce podsložky Espresso?",
            "correctAnswer": "9 g",
            "distractors": [
              "7 g",
              "14 g"
            ],
            "explanation": "Gramáž porce podsložky Espresso je 9 g."
          },
          {
            "id": "espresso-ing-1",
            "question": "Která z následujících surovin patří do podsložky Espresso?",
            "correctAnswer": "Výběrové kávy",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Espresso je obsaženo: Výběrové kávy. Kompletní receptura položky: 9g výběrové kávy, klasická extrakce s oříškovou cremou a vyváženým tělem."
          },
          {
            "id": "espresso-ing-2",
            "question": "Která z následujících surovin patří do podsložky Espresso?",
            "correctAnswer": "Klasická extrakce s oříškovou cremou a vyváženým tělem",
            "distractors": [
              "Bílá čokoláda",
              "Švestkové pyré"
            ],
            "explanation": "V podsložce Espresso je obsaženo: Klasická extrakce s oříškovou cremou a vyváženým tělem. Kompletní receptura položky: 9g výběrové kávy, klasická extrakce s oříškovou cremou a vyváženým tělem."
          }
        ]
      },
      {
        "id": "espresso-macchiato",
        "name": "Espresso macchiato",
        "price": "78 Kč",
        "weight": "9g",
        "description": "9g espresso doplněné kapkou jemné teplé mléčné pěny",
        "questions": [
          {
            "id": "espresso-macchiato-vol",
            "question": "Jaká je gramáž porce podsložky Espresso macchiato?",
            "correctAnswer": "9 g",
            "distractors": [
              "7 g",
              "14 g"
            ],
            "explanation": "Gramáž porce podsložky Espresso macchiato je 9 g."
          },
          {
            "id": "espresso-macchiato-ing-1",
            "question": "Která z následujících surovin patří do podsložky Espresso macchiato?",
            "correctAnswer": "Espresso doplněné kapkou jemné teplé mléčné pěny",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Espresso macchiato je obsaženo: Espresso doplněné kapkou jemné teplé mléčné pěny. Kompletní receptura položky: 9g espresso doplněné kapkou jemné teplé mléčné pěny."
          }
        ]
      },
      {
        "id": "cappuccino",
        "name": "Cappuccino",
        "price": "85 Kč",
        "weight": "9g",
        "description": "9g espresso s jemně našlehaným teplým mlékem a mikropěnou",
        "questions": [
          {
            "id": "cappuccino-vol",
            "question": "Jaká je gramáž porce podsložky Cappuccino?",
            "correctAnswer": "9 g",
            "distractors": [
              "7 g",
              "14 g"
            ],
            "explanation": "Gramáž porce podsložky Cappuccino je 9 g."
          },
          {
            "id": "cappuccino-ing-1",
            "question": "Která z následujících surovin patří do podsložky Cappuccino?",
            "correctAnswer": "Espresso s jemně našlehaným teplým mlékem a mikropěnou",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Cappuccino je obsaženo: Espresso s jemně našlehaným teplým mlékem a mikropěnou. Kompletní receptura položky: 9g espresso s jemně našlehaným teplým mlékem a mikropěnou."
          }
        ]
      },
      {
        "id": "caffe-latte",
        "name": "Caffé latte",
        "price": "88 Kč",
        "weight": "9g",
        "description": "9g espresso podávané ve vysoké sklenici s bohatou porcí teplého mléka",
        "questions": [
          {
            "id": "caffe-latte-vol",
            "question": "Jaká je gramáž porce podsložky Caffé latte?",
            "correctAnswer": "9 g",
            "distractors": [
              "7 g",
              "14 g"
            ],
            "explanation": "Gramáž porce podsložky Caffé latte je 9 g."
          },
          {
            "id": "caffe-latte-ing-1",
            "question": "Která z následujících surovin patří do podsložky Caffé latte?",
            "correctAnswer": "Espresso podávané ve vysoké sklenici s bohatou porcí teplého mléka",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Caffé latte je obsaženo: Espresso podávané ve vysoké sklenici s bohatou porcí teplého mléka. Kompletní receptura položky: 9g espresso podávané ve vysoké sklenici s bohatou porcí teplého mléka."
          }
        ]
      },
      {
        "id": "flat-white",
        "name": "Flat white",
        "price": "99 Kč",
        "weight": "18g",
        "description": "18g výběrové kávy (double shot espresso) se sametovou mléčnou mikropěnou",
        "questions": [
          {
            "id": "flat-white-vol",
            "question": "Jaká je gramáž porce podsložky Flat white?",
            "correctAnswer": "18 g",
            "distractors": [
              "9 g",
              "14 g"
            ],
            "explanation": "Gramáž porce podsložky Flat white je 18 g."
          },
          {
            "id": "flat-white-ing-1",
            "question": "Která z následujících surovin patří do podsložky Flat white?",
            "correctAnswer": "Výběrové kávy (double shot espresso) se sametovou mléčnou mikropěnou",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Flat white je obsaženo: Výběrové kávy (double shot espresso) se sametovou mléčnou mikropěnou. Kompletní receptura položky: 18g výběrové kávy (double shot espresso) se sametovou mléčnou mikropěnou."
          }
        ]
      },
      {
        "id": "double-espresso",
        "name": "Double espresso",
        "price": "89 Kč",
        "weight": "18g",
        "description": "18g dvojitá porce espressa pro intenzivní povzbuzení",
        "questions": [
          {
            "id": "double-espresso-vol",
            "question": "Jaká je gramáž porce podsložky Double espresso?",
            "correctAnswer": "18 g",
            "distractors": [
              "9 g",
              "14 g"
            ],
            "explanation": "Gramáž porce podsložky Double espresso je 18 g."
          },
          {
            "id": "double-espresso-ing-1",
            "question": "Která z následujících surovin patří do podsložky Double espresso?",
            "correctAnswer": "Dvojitá porce espressa pro intenzivní povzbuzení",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Double espresso je obsaženo: Dvojitá porce espressa pro intenzivní povzbuzení. Kompletní receptura položky: 18g dvojitá porce espressa pro intenzivní povzbuzení."
          }
        ]
      },
      {
        "id": "americano-lungo",
        "name": "Americano caffé / lungo",
        "price": "79 Kč",
        "weight": "9g",
        "description": "9g espresso doplněné horkou vodou pro jemnější a delší doušek",
        "questions": [
          {
            "id": "americano-lungo-vol",
            "question": "Jaká je gramáž porce podsložky Americano caffé / lungo?",
            "correctAnswer": "9 g",
            "distractors": [
              "7 g",
              "14 g"
            ],
            "explanation": "Gramáž porce podsložky Americano caffé / lungo je 9 g."
          },
          {
            "id": "americano-lungo-ing-1",
            "question": "Která z následujících surovin patří do podsložky Americano caffé / lungo?",
            "correctAnswer": "Espresso doplněné horkou vodou pro jemnější a delší doušek",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Americano caffé / lungo je obsaženo: Espresso doplněné horkou vodou pro jemnější a delší doušek. Kompletní receptura položky: 9g espresso doplněné horkou vodou pro jemnější a delší doušek."
          }
        ]
      },
      {
        "id": "espresso-se-slehackou",
        "name": "Espresso káva se šlehačkou",
        "price": "85 Kč",
        "weight": "9g",
        "description": "9g espresso ozdobené poctivou čerstvou šlehačkou",
        "questions": [
          {
            "id": "espresso-se-slehackou-vol",
            "question": "Jaká je gramáž porce podsložky Espresso káva se šlehačkou?",
            "correctAnswer": "9 g",
            "distractors": [
              "7 g",
              "14 g"
            ],
            "explanation": "Gramáž porce podsložky Espresso káva se šlehačkou je 9 g."
          },
          {
            "id": "espresso-se-slehackou-ing-1",
            "question": "Která z následujících surovin patří do podsložky Espresso káva se šlehačkou?",
            "correctAnswer": "Espresso ozdobené poctivou čerstvou šlehačkou",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Espresso káva se šlehačkou je obsaženo: Espresso ozdobené poctivou čerstvou šlehačkou. Kompletní receptura položky: 9g espresso ozdobené poctivou čerstvou šlehačkou."
          }
        ]
      },
      {
        "id": "sypany-caj",
        "name": "Sypaný čaj",
        "price": "89 Kč",
        "description": "Výběrový černý, zelený nebo ovocný sypaný čaj podávaný v konvičce s medem a citronem",
        "questions": [
          {
            "id": "sypany-caj-ing-1",
            "question": "Která z následujících surovin patří do podsložky Sypaný čaj?",
            "correctAnswer": "Výběrový černý",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Sypaný čaj je obsaženo: Výběrový černý. Kompletní receptura položky: Výběrový černý, zelený nebo ovocný sypaný čaj podávaný v konvičce s medem a citronem."
          },
          {
            "id": "sypany-caj-ing-2",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Sypaný čaj?",
            "correctAnswer": "Zelený nebo ovocný sypaný čaj podávaný v konvičce s medem a citronem",
            "distractors": [
              "Bílá čokoláda",
              "Švestkové pyré"
            ],
            "explanation": "V podsložce Sypaný čaj je obsaženo: Zelený nebo ovocný sypaný čaj podávaný v konvičce s medem a citronem. Kompletní receptura položky: Výběrový černý, zelený nebo ovocný sypaný čaj podávaný v konvičce s medem a citronem."
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
            "id": "caj-mata-zazvor-ing-1",
            "question": "Která z následujících surovin patří do podsložky Čaj s čerstvou mátou nebo zázvorem?",
            "correctAnswer": "Horký nápoj z čerstvých snítek máty nebo plátků kořene zázvoru",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Čaj s čerstvou mátou nebo zázvorem je obsaženo: Horký nápoj z čerstvých snítek máty nebo plátků kořene zázvoru. Kompletní receptura položky: Horký nápoj z čerstvých snítek máty nebo plátků kořene zázvoru, med, citron."
          },
          {
            "id": "caj-mata-zazvor-ing-2",
            "question": "Která z následujících surovin patří do podsložky Čaj s čerstvou mátou nebo zázvorem?",
            "correctAnswer": "Med",
            "distractors": [
              "Bílá čokoláda",
              "Švestkové pyré"
            ],
            "explanation": "V podsložce Čaj s čerstvou mátou nebo zázvorem je obsaženo: Med. Kompletní receptura položky: Horký nápoj z čerstvých snítek máty nebo plátků kořene zázvoru, med, citron."
          },
          {
            "id": "caj-mata-zazvor-ing-3",
            "question": "Která z následujících surovin patří do podsložky Čaj s čerstvou mátou nebo zázvorem?",
            "correctAnswer": "Citron",
            "distractors": [
              "Drcený kardamom",
              "Zázvorový výluh"
            ],
            "explanation": "V podsložce Čaj s čerstvou mátou nebo zázvorem je obsaženo: Citron. Kompletní receptura položky: Horký nápoj z čerstvých snítek máty nebo plátků kořene zázvoru, med, citron."
          }
        ]
      },
      {
        "id": "opre-gingerbread-cider",
        "name": "Opre` Gingerbread Cider",
        "price": "98 Kč",
        "weight": "0,33l",
        "description": "0,33l horký perníkový cider s vůní hřebíčku a skořice",
        "questions": [
          {
            "id": "opre-gingerbread-cider-vol",
            "question": "Jaký je servírovací objem / míra podsložky Opre` Gingerbread Cider?",
            "correctAnswer": "0,33 l",
            "distractors": [
              "0,5 l",
              "0,25 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Opre` Gingerbread Cider je 0,33 l."
          },
          {
            "id": "opre-gingerbread-cider-ing-1",
            "question": "Která z následujících surovin patří do podsložky Opre` Gingerbread Cider?",
            "correctAnswer": "Horký perníkový cider s vůní hřebíčku a skořice",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Opre` Gingerbread Cider je obsaženo: Horký perníkový cider s vůní hřebíčku a skořice. Kompletní receptura položky: 0,33l horký perníkový cider s vůní hřebíčku a skořice."
          }
        ]
      },
      {
        "id": "horka-cokolada",
        "name": "Horká čokoláda",
        "price": "85 Kč",
        "description": "Hustá horká čokoláda s čerstvou šlehačkou",
        "questions": [
          {
            "id": "horka-cokolada-ing-1",
            "question": "Která z následujících surovin patří do podsložky Horká čokoláda?",
            "correctAnswer": "Hustá horká čokoláda s čerstvou šlehačkou",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Horká čokoláda je obsaženo: Hustá horká čokoláda s čerstvou šlehačkou. Kompletní receptura položky: Hustá horká čokoláda s čerstvou šlehačkou."
          }
        ]
      },
      {
        "id": "chai-latte",
        "name": "Chai latte",
        "price": "99 Kč",
        "description": "Čaj se směsí exotického koření, cukru a horkého mléka",
        "questions": [
          {
            "id": "chai-latte-ing-1",
            "question": "Která z následujících surovin patří do podsložky Chai latte?",
            "correctAnswer": "Čaj se směsí exotického koření",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Chai latte je obsaženo: Čaj se směsí exotického koření. Kompletní receptura položky: Čaj se směsí exotického koření, cukru a horkého mléka."
          },
          {
            "id": "chai-latte-ing-2",
            "question": "Která z následujících surovin patří do podsložky Chai latte?",
            "correctAnswer": "Cukru a horkého mléka",
            "distractors": [
              "Bílá čokoláda",
              "Švestkové pyré"
            ],
            "explanation": "V podsložce Chai latte je obsaženo: Cukru a horkého mléka. Kompletní receptura položky: Čaj se směsí exotického koření, cukru a horkého mléka."
          }
        ]
      },
      {
        "id": "svarene-vino",
        "name": "Svařené víno",
        "price": "85 Kč",
        "weight": "0,15l",
        "description": "0,15l s kořením a pomerančem červené / bílé",
        "questions": [
          {
            "id": "svarene-vino-vol",
            "question": "Jaký je servírovací objem / míra podsložky Svařené víno?",
            "correctAnswer": "0,15 l",
            "distractors": [
              "0,2 l",
              "0,1 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Svařené víno je 0,15 l."
          },
          {
            "id": "svarene-vino-ing-1",
            "question": "Která z následujících surovin patří do podsložky Svařené víno?",
            "correctAnswer": "S kořením a pomerančem červené / bílé",
            "distractors": [
              "Čerstvý grapefruitový fresh",
              "Malinové pyré"
            ],
            "explanation": "V podsložce Svařené víno je obsaženo: S kořením a pomerančem červené / bílé. Kompletní receptura položky: 0,15l s kořením a pomerančem červené / bílé."
          }
        ]
      }
    ]
  },
  {
    "id": "vina-po-skle",
    "name": "vína po skle",
    "badge": "Po skle",
    "description": "Pečlivě vybraná rozlévaná vína z Moravy, Čech, Rakouska a Kalifornie",
    "iconName": "GlassWater",
    "items": [
      {
        "id": "sklo-rulandske-sede",
        "name": "Rulandské šedé – Dva kopce Kolby",
        "weight": "0,15 l",
        "price": "95,-",
        "allergens": [
          "12"
        ],
        "description": "Dva kopce Kolby, polosuché – Mikulovsko, Morava. Vyvážené, šťavnaté, aroma bílé broskve a drobného zahradního ovoce.",
        "questions": [
          {
            "id": "sklo-rulandske-sede-ing-1",
            "question": "Která z následujících surovin patří do podsložky Rulandské šedé – Dva kopce Kolby?",
            "correctAnswer": "Dva kopce Kolby",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Rulandské šedé – Dva kopce Kolby je obsaženo: Dva kopce Kolby. Kompletní receptura položky: Dva kopce Kolby, polosuché – Mikulovsko, Morava. Vyvážené, šťavnaté, aroma bílé broskve a drobného zahradního ovoce.."
          },
          {
            "id": "sklo-rulandske-sede-ing-2",
            "question": "Která z následujících surovin patří do podsložky Rulandské šedé – Dva kopce Kolby?",
            "correctAnswer": "Polosuché – Mikulovsko",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Rulandské šedé – Dva kopce Kolby je obsaženo: Polosuché – Mikulovsko. Kompletní receptura položky: Dva kopce Kolby, polosuché – Mikulovsko, Morava. Vyvážené, šťavnaté, aroma bílé broskve a drobného zahradního ovoce.."
          },
          {
            "id": "sklo-rulandske-sede-ing-3",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Rulandské šedé – Dva kopce Kolby?",
            "correctAnswer": "Morava. Vyvážené",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Rulandské šedé – Dva kopce Kolby je obsaženo: Morava. Vyvážené. Kompletní receptura položky: Dva kopce Kolby, polosuché – Mikulovsko, Morava. Vyvážené, šťavnaté, aroma bílé broskve a drobného zahradního ovoce.."
          },
          {
            "id": "sklo-rulandske-sede-ing-4",
            "question": "Která z následujících surovin patří do podsložky Rulandské šedé – Dva kopce Kolby?",
            "correctAnswer": "Šťavnaté",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Rulandské šedé – Dva kopce Kolby je obsaženo: Šťavnaté. Kompletní receptura položky: Dva kopce Kolby, polosuché – Mikulovsko, Morava. Vyvážené, šťavnaté, aroma bílé broskve a drobného zahradního ovoce.."
          },
          {
            "id": "sklo-rulandske-sede-ing-5",
            "question": "Která z následujících surovin patří do podsložky Rulandské šedé – Dva kopce Kolby?",
            "correctAnswer": "Aroma bílé broskve a drobného zahradního ovoce",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Rulandské šedé – Dva kopce Kolby je obsaženo: Aroma bílé broskve a drobného zahradního ovoce. Kompletní receptura položky: Dva kopce Kolby, polosuché – Mikulovsko, Morava. Vyvážené, šťavnaté, aroma bílé broskve a drobného zahradního ovoce.."
          },
          {
            "id": "sklo-rulandske-sede-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Rulandské šedé – Dva kopce Kolby?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Rulandské šedé – Dva kopce Kolby obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-cuvee-kraus-bile",
        "name": "Cuvée Kraus – bílé",
        "weight": "0,15 l",
        "price": "98,-",
        "allergens": [
          "12"
        ],
        "description": "Mělnicko, Čechy. Lehké, svěží, harmonický projev citrusů a žlutého ovoce.",
        "questions": [
          {
            "id": "sklo-cuvee-kraus-bile-ing-1",
            "question": "Která z následujících surovin patří do podsložky Cuvée Kraus – bílé?",
            "correctAnswer": "Mělnicko",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Cuvée Kraus – bílé je obsaženo: Mělnicko. Kompletní receptura položky: Mělnicko, Čechy. Lehké, svěží, harmonický projev citrusů a žlutého ovoce.."
          },
          {
            "id": "sklo-cuvee-kraus-bile-ing-2",
            "question": "Která z následujících surovin patří do podsložky Cuvée Kraus – bílé?",
            "correctAnswer": "Čechy. Lehké",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Cuvée Kraus – bílé je obsaženo: Čechy. Lehké. Kompletní receptura položky: Mělnicko, Čechy. Lehké, svěží, harmonický projev citrusů a žlutého ovoce.."
          },
          {
            "id": "sklo-cuvee-kraus-bile-ing-3",
            "question": "Která z následujících surovin patří do podsložky Cuvée Kraus – bílé?",
            "correctAnswer": "Svěží",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Cuvée Kraus – bílé je obsaženo: Svěží. Kompletní receptura položky: Mělnicko, Čechy. Lehké, svěží, harmonický projev citrusů a žlutého ovoce.."
          },
          {
            "id": "sklo-cuvee-kraus-bile-ing-4",
            "question": "Která z následujících surovin patří do podsložky Cuvée Kraus – bílé?",
            "correctAnswer": "Harmonický projev citrusů a žlutého ovoce",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Cuvée Kraus – bílé je obsaženo: Harmonický projev citrusů a žlutého ovoce. Kompletní receptura položky: Mělnicko, Čechy. Lehké, svěží, harmonický projev citrusů a žlutého ovoce.."
          },
          {
            "id": "sklo-cuvee-kraus-bile-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Cuvée Kraus – bílé?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Cuvée Kraus – bílé obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-gruner-veltliner",
        "name": "Grüner Veltliner – Heuriger",
        "weight": "0,15 l",
        "price": "109,-",
        "allergens": [
          "12"
        ],
        "description": "Heuriger – Niederösterreich, Rakousko. Svěží, lehké, jemné aroma citrusů s tóny zeleného jablka.",
        "questions": [
          {
            "id": "sklo-gruner-veltliner-ing-1",
            "question": "Která z následujících surovin patří do podsložky Grüner Veltliner – Heuriger?",
            "correctAnswer": "Heuriger – Niederösterreich",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Grüner Veltliner – Heuriger je obsaženo: Heuriger – Niederösterreich. Kompletní receptura položky: Heuriger – Niederösterreich, Rakousko. Svěží, lehké, jemné aroma citrusů s tóny zeleného jablka.."
          },
          {
            "id": "sklo-gruner-veltliner-ing-2",
            "question": "Která z následujících surovin patří do podsložky Grüner Veltliner – Heuriger?",
            "correctAnswer": "Rakousko. Svěží",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Grüner Veltliner – Heuriger je obsaženo: Rakousko. Svěží. Kompletní receptura položky: Heuriger – Niederösterreich, Rakousko. Svěží, lehké, jemné aroma citrusů s tóny zeleného jablka.."
          },
          {
            "id": "sklo-gruner-veltliner-ing-3",
            "question": "Která z následujících surovin patří do podsložky Grüner Veltliner – Heuriger?",
            "correctAnswer": "Lehké",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Grüner Veltliner – Heuriger je obsaženo: Lehké. Kompletní receptura položky: Heuriger – Niederösterreich, Rakousko. Svěží, lehké, jemné aroma citrusů s tóny zeleného jablka.."
          },
          {
            "id": "sklo-gruner-veltliner-ing-4",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Grüner Veltliner – Heuriger?",
            "correctAnswer": "Jemné aroma citrusů s tóny zeleného jablka",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Grüner Veltliner – Heuriger je obsaženo: Jemné aroma citrusů s tóny zeleného jablka. Kompletní receptura položky: Heuriger – Niederösterreich, Rakousko. Svěží, lehké, jemné aroma citrusů s tóny zeleného jablka.."
          },
          {
            "id": "sklo-gruner-veltliner-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Grüner Veltliner – Heuriger?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Grüner Veltliner – Heuriger obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-chardonnay-adulation",
        "name": "Chardonnay – Adulation",
        "weight": "0,15 l",
        "price": "125,-",
        "allergens": [
          "12"
        ],
        "description": "Adulation – Kalifornie. Víno školené na dubu, plné, hedvábný závěr, tropické ovoce, sladké koření a vanilka.",
        "questions": [
          {
            "id": "sklo-chardonnay-adulation-ing-1",
            "question": "Která z následujících surovin patří do podsložky Chardonnay – Adulation?",
            "correctAnswer": "Adulation – Kalifornie. Víno školené na dubu",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Chardonnay – Adulation je obsaženo: Adulation – Kalifornie. Víno školené na dubu. Kompletní receptura položky: Adulation – Kalifornie. Víno školené na dubu, plné, hedvábný závěr, tropické ovoce, sladké koření a vanilka.."
          },
          {
            "id": "sklo-chardonnay-adulation-ing-2",
            "question": "Která z následujících surovin patří do podsložky Chardonnay – Adulation?",
            "correctAnswer": "Plné",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Chardonnay – Adulation je obsaženo: Plné. Kompletní receptura položky: Adulation – Kalifornie. Víno školené na dubu, plné, hedvábný závěr, tropické ovoce, sladké koření a vanilka.."
          },
          {
            "id": "sklo-chardonnay-adulation-ing-3",
            "question": "Která z následujících surovin patří do podsložky Chardonnay – Adulation?",
            "correctAnswer": "Hedvábný závěr",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Chardonnay – Adulation je obsaženo: Hedvábný závěr. Kompletní receptura položky: Adulation – Kalifornie. Víno školené na dubu, plné, hedvábný závěr, tropické ovoce, sladké koření a vanilka.."
          },
          {
            "id": "sklo-chardonnay-adulation-ing-4",
            "question": "Která z následujících surovin patří do podsložky Chardonnay – Adulation?",
            "correctAnswer": "Tropické ovoce",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Chardonnay – Adulation je obsaženo: Tropické ovoce. Kompletní receptura položky: Adulation – Kalifornie. Víno školené na dubu, plné, hedvábný závěr, tropické ovoce, sladké koření a vanilka.."
          },
          {
            "id": "sklo-chardonnay-adulation-ing-5",
            "question": "Která pivovarská surovina nebo vlastnost charakterizuje Chardonnay – Adulation?",
            "correctAnswer": "Sladké koření a vanilka",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Chardonnay – Adulation je obsaženo: Sladké koření a vanilka. Kompletní receptura položky: Adulation – Kalifornie. Víno školené na dubu, plné, hedvábný závěr, tropické ovoce, sladké koření a vanilka.."
          },
          {
            "id": "sklo-chardonnay-adulation-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Chardonnay – Adulation?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Chardonnay – Adulation obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-modry-portugal-rose",
        "name": "Modrý Portugal – rosé Dva kopce Kolby",
        "weight": "0,15 l",
        "price": "95,-",
        "allergens": [
          "12"
        ],
        "description": "Mikulovsko, Morava. Svěží, lososová barva, dochuť letního ovoce, vůně s tóny čerstvých jahod a třešní.",
        "questions": [
          {
            "id": "sklo-modry-portugal-rose-ing-1",
            "question": "Která z následujících surovin patří do podsložky Modrý Portugal – rosé Dva kopce Kolby?",
            "correctAnswer": "Mikulovsko",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Modrý Portugal – rosé Dva kopce Kolby je obsaženo: Mikulovsko. Kompletní receptura položky: Mikulovsko, Morava. Svěží, lososová barva, dochuť letního ovoce, vůně s tóny čerstvých jahod a třešní.."
          },
          {
            "id": "sklo-modry-portugal-rose-ing-2",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Modrý Portugal – rosé Dva kopce Kolby?",
            "correctAnswer": "Morava. Svěží",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Modrý Portugal – rosé Dva kopce Kolby je obsaženo: Morava. Svěží. Kompletní receptura položky: Mikulovsko, Morava. Svěží, lososová barva, dochuť letního ovoce, vůně s tóny čerstvých jahod a třešní.."
          },
          {
            "id": "sklo-modry-portugal-rose-ing-3",
            "question": "Která z následujících surovin patří do podsložky Modrý Portugal – rosé Dva kopce Kolby?",
            "correctAnswer": "Lososová barva",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Modrý Portugal – rosé Dva kopce Kolby je obsaženo: Lososová barva. Kompletní receptura položky: Mikulovsko, Morava. Svěží, lososová barva, dochuť letního ovoce, vůně s tóny čerstvých jahod a třešní.."
          },
          {
            "id": "sklo-modry-portugal-rose-ing-4",
            "question": "Která z následujících surovin patří do podsložky Modrý Portugal – rosé Dva kopce Kolby?",
            "correctAnswer": "Dochuť letního ovoce",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Modrý Portugal – rosé Dva kopce Kolby je obsaženo: Dochuť letního ovoce. Kompletní receptura položky: Mikulovsko, Morava. Svěží, lososová barva, dochuť letního ovoce, vůně s tóny čerstvých jahod a třešní.."
          },
          {
            "id": "sklo-modry-portugal-rose-ing-5",
            "question": "Která z následujících surovin patří do podsložky Modrý Portugal – rosé Dva kopce Kolby?",
            "correctAnswer": "Vůně s tóny čerstvých jahod a třešní",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Modrý Portugal – rosé Dva kopce Kolby je obsaženo: Vůně s tóny čerstvých jahod a třešní. Kompletní receptura položky: Mikulovsko, Morava. Svěží, lososová barva, dochuť letního ovoce, vůně s tóny čerstvých jahod a třešní.."
          },
          {
            "id": "sklo-modry-portugal-rose-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Modrý Portugal – rosé Dva kopce Kolby?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Modrý Portugal – rosé Dva kopce Kolby obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-modry-portugal-cervene",
        "name": "Modrý Portugal – červené Dva kopce Kolby",
        "weight": "0,15 l",
        "price": "95,-",
        "allergens": [
          "12"
        ],
        "description": "Mikulovsko, Morava. Lehká rubínová barva, vůně drobného zahradního ovoce, dochuť jemně kořeněná.",
        "questions": [
          {
            "id": "sklo-modry-portugal-cervene-ing-1",
            "question": "Která z následujících surovin patří do podsložky Modrý Portugal – červené Dva kopce Kolby?",
            "correctAnswer": "Mikulovsko",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Modrý Portugal – červené Dva kopce Kolby je obsaženo: Mikulovsko. Kompletní receptura položky: Mikulovsko, Morava. Lehká rubínová barva, vůně drobného zahradního ovoce, dochuť jemně kořeněná.."
          },
          {
            "id": "sklo-modry-portugal-cervene-ing-2",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Modrý Portugal – červené Dva kopce Kolby?",
            "correctAnswer": "Morava. Lehká rubínová barva",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Modrý Portugal – červené Dva kopce Kolby je obsaženo: Morava. Lehká rubínová barva. Kompletní receptura položky: Mikulovsko, Morava. Lehká rubínová barva, vůně drobného zahradního ovoce, dochuť jemně kořeněná.."
          },
          {
            "id": "sklo-modry-portugal-cervene-ing-3",
            "question": "Která z následujících surovin patří do podsložky Modrý Portugal – červené Dva kopce Kolby?",
            "correctAnswer": "Vůně drobného zahradního ovoce",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Modrý Portugal – červené Dva kopce Kolby je obsaženo: Vůně drobného zahradního ovoce. Kompletní receptura položky: Mikulovsko, Morava. Lehká rubínová barva, vůně drobného zahradního ovoce, dochuť jemně kořeněná.."
          },
          {
            "id": "sklo-modry-portugal-cervene-ing-4",
            "question": "Která z následujících surovin patří do podsložky Modrý Portugal – červené Dva kopce Kolby?",
            "correctAnswer": "Dochuť jemně kořeněná",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Modrý Portugal – červené Dva kopce Kolby je obsaženo: Dochuť jemně kořeněná. Kompletní receptura položky: Mikulovsko, Morava. Lehká rubínová barva, vůně drobného zahradního ovoce, dochuť jemně kořeněná.."
          },
          {
            "id": "sklo-modry-portugal-cervene-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Modrý Portugal – červené Dva kopce Kolby?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Modrý Portugal – červené Dva kopce Kolby obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-cuvee-kraus-cervene",
        "name": "Cuvée Kraus – červené",
        "weight": "0,15 l",
        "price": "98,-",
        "allergens": [
          "12"
        ],
        "description": "Mělnicko, Čechy. Sytá barva, měkčí třísloviny, chuť červeného ovoce.",
        "questions": [
          {
            "id": "sklo-cuvee-kraus-cervene-ing-1",
            "question": "Která z následujících surovin patří do podsložky Cuvée Kraus – červené?",
            "correctAnswer": "Mělnicko",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Cuvée Kraus – červené je obsaženo: Mělnicko. Kompletní receptura položky: Mělnicko, Čechy. Sytá barva, měkčí třísloviny, chuť červeného ovoce.."
          },
          {
            "id": "sklo-cuvee-kraus-cervene-ing-2",
            "question": "Která z následujících surovin patří do podsložky Cuvée Kraus – červené?",
            "correctAnswer": "Čechy. Sytá barva",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Cuvée Kraus – červené je obsaženo: Čechy. Sytá barva. Kompletní receptura položky: Mělnicko, Čechy. Sytá barva, měkčí třísloviny, chuť červeného ovoce.."
          },
          {
            "id": "sklo-cuvee-kraus-cervene-ing-3",
            "question": "Která z následujících surovin patří do podsložky Cuvée Kraus – červené?",
            "correctAnswer": "Měkčí třísloviny",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Cuvée Kraus – červené je obsaženo: Měkčí třísloviny. Kompletní receptura položky: Mělnicko, Čechy. Sytá barva, měkčí třísloviny, chuť červeného ovoce.."
          },
          {
            "id": "sklo-cuvee-kraus-cervene-ing-4",
            "question": "Která z následujících surovin patří do podsložky Cuvée Kraus – červené?",
            "correctAnswer": "Chuť červeného ovoce",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Cuvée Kraus – červené je obsaženo: Chuť červeného ovoce. Kompletní receptura položky: Mělnicko, Čechy. Sytá barva, měkčí třísloviny, chuť červeného ovoce.."
          },
          {
            "id": "sklo-cuvee-kraus-cervene-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Cuvée Kraus – červené?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Cuvée Kraus – červené obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-pinot-noir-adulation",
        "name": "Pinot Noir – Adulation",
        "weight": "0,15 l",
        "price": "125,-",
        "allergens": [
          "12"
        ],
        "description": "Adulation – Kalifornie. Plné, výrazně ovocné, chuť zralé červené bobulovité ovoce a třešně.",
        "questions": [
          {
            "id": "sklo-pinot-noir-adulation-ing-1",
            "question": "Která z následujících surovin patří do podsložky Pinot Noir – Adulation?",
            "correctAnswer": "Adulation – Kalifornie. Plné",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Pinot Noir – Adulation je obsaženo: Adulation – Kalifornie. Plné. Kompletní receptura položky: Adulation – Kalifornie. Plné, výrazně ovocné, chuť zralé červené bobulovité ovoce a třešně.."
          },
          {
            "id": "sklo-pinot-noir-adulation-ing-2",
            "question": "Která z následujících surovin patří do podsložky Pinot Noir – Adulation?",
            "correctAnswer": "Výrazně ovocné",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Pinot Noir – Adulation je obsaženo: Výrazně ovocné. Kompletní receptura položky: Adulation – Kalifornie. Plné, výrazně ovocné, chuť zralé červené bobulovité ovoce a třešně.."
          },
          {
            "id": "sklo-pinot-noir-adulation-ing-3",
            "question": "Která z následujících surovin patří do podsložky Pinot Noir – Adulation?",
            "correctAnswer": "Chuť zralé červené bobulovité ovoce a třešně",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Pinot Noir – Adulation je obsaženo: Chuť zralé červené bobulovité ovoce a třešně. Kompletní receptura položky: Adulation – Kalifornie. Plné, výrazně ovocné, chuť zralé červené bobulovité ovoce a třešně.."
          },
          {
            "id": "sklo-pinot-noir-adulation-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Pinot Noir – Adulation?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Pinot Noir – Adulation obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      }
    ]
  },
  {
    "id": "bublinky",
    "name": "bublinky",
    "badge": "Bublinky",
    "description": "Šumivá vína charmat, moravský crémant a kalifornský sekt kvašený v lahvi",
    "iconName": "Sparkles",
    "items": [
      {
        "id": "bubliny-charmat-palava",
        "name": "Charmat de Vinselekt Pálava",
        "weight": "0,1 l / 0,75 l",
        "price": "99,- / 699,-",
        "allergens": [
          "12"
        ],
        "description": "Vinselect Michlovský, extra sec – Morava. Divoké perlení, opulentní vůně s nádechem růží a exotického ovoce, kulatá podmanivá chuť.",
        "questions": [
          {
            "id": "bubliny-charmat-palava-ing-1",
            "question": "Která z následujících surovin patří do podsložky Charmat de Vinselekt Pálava?",
            "correctAnswer": "Vinselect Michlovský",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Charmat de Vinselekt Pálava je obsaženo: Vinselect Michlovský. Kompletní receptura položky: Vinselect Michlovský, extra sec – Morava. Divoké perlení, opulentní vůně s nádechem růží a exotického ovoce, kulatá podmanivá chuť.."
          },
          {
            "id": "bubliny-charmat-palava-ing-2",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Charmat de Vinselekt Pálava?",
            "correctAnswer": "Extra sec – Morava. Divoké perlení",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Charmat de Vinselekt Pálava je obsaženo: Extra sec – Morava. Divoké perlení. Kompletní receptura položky: Vinselect Michlovský, extra sec – Morava. Divoké perlení, opulentní vůně s nádechem růží a exotického ovoce, kulatá podmanivá chuť.."
          },
          {
            "id": "bubliny-charmat-palava-ing-3",
            "question": "Která z následujících surovin patří do podsložky Charmat de Vinselekt Pálava?",
            "correctAnswer": "Opulentní vůně s nádechem růží a exotického ovoce",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Charmat de Vinselekt Pálava je obsaženo: Opulentní vůně s nádechem růží a exotického ovoce. Kompletní receptura položky: Vinselect Michlovský, extra sec – Morava. Divoké perlení, opulentní vůně s nádechem růží a exotického ovoce, kulatá podmanivá chuť.."
          },
          {
            "id": "bubliny-charmat-palava-ing-4",
            "question": "Která z následujících surovin patří do podsložky Charmat de Vinselekt Pálava?",
            "correctAnswer": "Kulatá podmanivá chuť",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Charmat de Vinselekt Pálava je obsaženo: Kulatá podmanivá chuť. Kompletní receptura položky: Vinselect Michlovský, extra sec – Morava. Divoké perlení, opulentní vůně s nádechem růží a exotického ovoce, kulatá podmanivá chuť.."
          },
          {
            "id": "bubliny-charmat-palava-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Charmat de Vinselekt Pálava?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Charmat de Vinselekt Pálava obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bubliny-cremant-vinselekt",
        "name": "Crémant de Vinselekt (Pinot, Chardonnay)",
        "weight": "0,1 l / 0,75 l",
        "price": "115,- / 849,-",
        "allergens": [
          "12"
        ],
        "description": "Vinselect Michlovský, extra brut – Morava. Jemné impozantní perlení, elegantní aroma, harmonická krémová dochuť.",
        "questions": [
          {
            "id": "bubliny-cremant-vinselekt-ing-1",
            "question": "Která z následujících surovin patří do podsložky Crémant de Vinselekt (Pinot, Chardonnay)?",
            "correctAnswer": "Vinselect Michlovský",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Crémant de Vinselekt (Pinot, Chardonnay) je obsaženo: Vinselect Michlovský. Kompletní receptura položky: Vinselect Michlovský, extra brut – Morava. Jemné impozantní perlení, elegantní aroma, harmonická krémová dochuť.."
          },
          {
            "id": "bubliny-cremant-vinselekt-ing-2",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Crémant de Vinselekt (Pinot, Chardonnay)?",
            "correctAnswer": "Extra brut – Morava. Jemné impozantní perlení",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Crémant de Vinselekt (Pinot, Chardonnay) je obsaženo: Extra brut – Morava. Jemné impozantní perlení. Kompletní receptura položky: Vinselect Michlovský, extra brut – Morava. Jemné impozantní perlení, elegantní aroma, harmonická krémová dochuť.."
          },
          {
            "id": "bubliny-cremant-vinselekt-ing-3",
            "question": "Která z následujících surovin patří do podsložky Crémant de Vinselekt (Pinot, Chardonnay)?",
            "correctAnswer": "Elegantní aroma",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Crémant de Vinselekt (Pinot, Chardonnay) je obsaženo: Elegantní aroma. Kompletní receptura položky: Vinselect Michlovský, extra brut – Morava. Jemné impozantní perlení, elegantní aroma, harmonická krémová dochuť.."
          },
          {
            "id": "bubliny-cremant-vinselekt-ing-4",
            "question": "Která z následujících surovin patří do podsložky Crémant de Vinselekt (Pinot, Chardonnay)?",
            "correctAnswer": "Harmonická krémová dochuť",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Crémant de Vinselekt (Pinot, Chardonnay) je obsaženo: Harmonická krémová dochuť. Kompletní receptura položky: Vinselect Michlovský, extra brut – Morava. Jemné impozantní perlení, elegantní aroma, harmonická krémová dochuť.."
          },
          {
            "id": "bubliny-cremant-vinselekt-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Crémant de Vinselekt (Pinot, Chardonnay)?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Crémant de Vinselekt (Pinot, Chardonnay) obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bubliny-angels-cowboys",
        "name": "Angels & Cowboys",
        "weight": "0,75 l",
        "price": "1 199,-",
        "allergens": [
          "12"
        ],
        "description": "NV, brut – North Coast, Kalifornie. Druhotné zrání v láhvi, elegantní perlení, svěží sadové ovoce, citrusy, tóny briošky a chlebové kůrky.",
        "questions": [
          {
            "id": "bubliny-angels-cowboys-ing-1",
            "question": "Která z následujících surovin patří do podsložky Angels & Cowboys?",
            "correctAnswer": "NV",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Angels & Cowboys je obsaženo: NV. Kompletní receptura položky: NV, brut – North Coast, Kalifornie. Druhotné zrání v láhvi, elegantní perlení, svěží sadové ovoce, citrusy, tóny briošky a chlebové kůrky.."
          },
          {
            "id": "bubliny-angels-cowboys-ing-2",
            "question": "Která z následujících surovin patří do podsložky Angels & Cowboys?",
            "correctAnswer": "Brut – North Coast",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Angels & Cowboys je obsaženo: Brut – North Coast. Kompletní receptura položky: NV, brut – North Coast, Kalifornie. Druhotné zrání v láhvi, elegantní perlení, svěží sadové ovoce, citrusy, tóny briošky a chlebové kůrky.."
          },
          {
            "id": "bubliny-angels-cowboys-ing-3",
            "question": "Která z následujících surovin patří do podsložky Angels & Cowboys?",
            "correctAnswer": "Kalifornie. Druhotné zrání v láhvi",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Angels & Cowboys je obsaženo: Kalifornie. Druhotné zrání v láhvi. Kompletní receptura položky: NV, brut – North Coast, Kalifornie. Druhotné zrání v láhvi, elegantní perlení, svěží sadové ovoce, citrusy, tóny briošky a chlebové kůrky.."
          },
          {
            "id": "bubliny-angels-cowboys-ing-4",
            "question": "Která z následujících surovin patří do podsložky Angels & Cowboys?",
            "correctAnswer": "Elegantní perlení",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Angels & Cowboys je obsaženo: Elegantní perlení. Kompletní receptura položky: NV, brut – North Coast, Kalifornie. Druhotné zrání v láhvi, elegantní perlení, svěží sadové ovoce, citrusy, tóny briošky a chlebové kůrky.."
          },
          {
            "id": "bubliny-angels-cowboys-ing-5",
            "question": "Která z následujících surovin patří do podsložky Angels & Cowboys?",
            "correctAnswer": "Svěží sadové ovoce",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Angels & Cowboys je obsaženo: Svěží sadové ovoce. Kompletní receptura položky: NV, brut – North Coast, Kalifornie. Druhotné zrání v láhvi, elegantní perlení, svěží sadové ovoce, citrusy, tóny briošky a chlebové kůrky.."
          },
          {
            "id": "bubliny-angels-cowboys-ing-6",
            "question": "Která z následujících surovin patří do podsložky Angels & Cowboys?",
            "correctAnswer": "Citrusy",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Angels & Cowboys je obsaženo: Citrusy. Kompletní receptura položky: NV, brut – North Coast, Kalifornie. Druhotné zrání v láhvi, elegantní perlení, svěží sadové ovoce, citrusy, tóny briošky a chlebové kůrky.."
          },
          {
            "id": "bubliny-angels-cowboys-ing-7",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Angels & Cowboys?",
            "correctAnswer": "Tóny briošky a chlebové kůrky",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Angels & Cowboys je obsaženo: Tóny briošky a chlebové kůrky. Kompletní receptura položky: NV, brut – North Coast, Kalifornie. Druhotné zrání v láhvi, elegantní perlení, svěží sadové ovoce, citrusy, tóny briošky a chlebové kůrky.."
          },
          {
            "id": "bubliny-angels-cowboys-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Angels & Cowboys?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Angels & Cowboys obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      }
    ]
  },
  {
    "id": "bila-vina",
    "name": "bílá vína",
    "badge": "Bílá vína",
    "description": "Špičková tichá bílá vína z předních poloh Moravy, Rakouska, Německa a Kalifornie",
    "iconName": "Wine",
    "items": [
      {
        "id": "bile-ryzlink-gotberg",
        "name": "Ryzlink rýnský – Gotberg",
        "weight": "0,75 l",
        "price": "469,-",
        "allergens": [
          "12"
        ],
        "description": "pozdní sběr Gotberg – Pálava, Morava. Svěží s výraznou kyselinou, aromatika citrusy, zelené jablko a bílé broskve, minerální dochuť.",
        "questions": [
          {
            "id": "bile-ryzlink-gotberg-ing-1",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Ryzlink rýnský – Gotberg?",
            "correctAnswer": "Pozdní sběr Gotberg – Pálava",
            "distractors": [
              "Vinařství Gotberg",
              "Vinařství Kolby"
            ],
            "explanation": "V podsložce Ryzlink rýnský – Gotberg je obsaženo: Pozdní sběr Gotberg – Pálava. Kompletní receptura položky: pozdní sběr Gotberg – Pálava, Morava. Svěží s výraznou kyselinou, aromatika citrusy, zelené jablko a bílé broskve, minerální dochuť.."
          },
          {
            "id": "bile-ryzlink-gotberg-ing-2",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Ryzlink rýnský – Gotberg?",
            "correctAnswer": "Morava. Svěží s výraznou kyselinou",
            "distractors": [
              "Vinařství Kraus",
              "Vinařství Michlovský"
            ],
            "explanation": "V podsložce Ryzlink rýnský – Gotberg je obsaženo: Morava. Svěží s výraznou kyselinou. Kompletní receptura položky: pozdní sběr Gotberg – Pálava, Morava. Svěží s výraznou kyselinou, aromatika citrusy, zelené jablko a bílé broskve, minerální dochuť.."
          },
          {
            "id": "bile-ryzlink-gotberg-ing-3",
            "question": "Která z následujících surovin patří do podsložky Ryzlink rýnský – Gotberg?",
            "correctAnswer": "Aromatika citrusy",
            "distractors": [
              "Mikulovská podoblast",
              "Velkopavlovická podoblast"
            ],
            "explanation": "V podsložce Ryzlink rýnský – Gotberg je obsaženo: Aromatika citrusy. Kompletní receptura položky: pozdní sběr Gotberg – Pálava, Morava. Svěží s výraznou kyselinou, aromatika citrusy, zelené jablko a bílé broskve, minerální dochuť.."
          },
          {
            "id": "bile-ryzlink-gotberg-ing-4",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Ryzlink rýnský – Gotberg?",
            "correctAnswer": "Zelené jablko a bílé broskve",
            "distractors": [
              "Mělnická podoblast",
              "Kyselina a minerální tóny"
            ],
            "explanation": "V podsložce Ryzlink rýnský – Gotberg je obsaženo: Zelené jablko a bílé broskve. Kompletní receptura položky: pozdní sběr Gotberg – Pálava, Morava. Svěží s výraznou kyselinou, aromatika citrusy, zelené jablko a bílé broskve, minerální dochuť.."
          },
          {
            "id": "bile-ryzlink-gotberg-ing-5",
            "question": "Která z následujících surovin patří do podsložky Ryzlink rýnský – Gotberg?",
            "correctAnswer": "Minerální dochuť",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Ryzlink rýnský – Gotberg je obsaženo: Minerální dochuť. Kompletní receptura položky: pozdní sběr Gotberg – Pálava, Morava. Svěží s výraznou kyselinou, aromatika citrusy, zelené jablko a bílé broskve, minerální dochuť.."
          },
          {
            "id": "bile-ryzlink-gotberg-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Ryzlink rýnský – Gotberg?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Ryzlink rýnský – Gotberg obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-pinot-gris-reisten",
        "name": "Pinot Gris – Reisten",
        "weight": "0,75 l",
        "price": "479,-",
        "allergens": [
          "12"
        ],
        "description": "pozdní sběr Reisten – Mikulovsko, Morava. Plné a hladké, v chuti jemný minerální dotek, čerstvý grep a pomerančová kůra.",
        "questions": [
          {
            "id": "bile-pinot-gris-reisten-ing-1",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Pinot Gris – Reisten?",
            "correctAnswer": "Pozdní sběr Reisten – Mikulovsko",
            "distractors": [
              "Vinařství Gotberg",
              "Vinařství Kolby"
            ],
            "explanation": "V podsložce Pinot Gris – Reisten je obsaženo: Pozdní sběr Reisten – Mikulovsko. Kompletní receptura položky: pozdní sběr Reisten – Mikulovsko, Morava. Plné a hladké, v chuti jemný minerální dotek, čerstvý grep a pomerančová kůra.."
          },
          {
            "id": "bile-pinot-gris-reisten-ing-2",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Pinot Gris – Reisten?",
            "correctAnswer": "Morava. Plné a hladké",
            "distractors": [
              "Vinařství Kraus",
              "Vinařství Michlovský"
            ],
            "explanation": "V podsložce Pinot Gris – Reisten je obsaženo: Morava. Plné a hladké. Kompletní receptura položky: pozdní sběr Reisten – Mikulovsko, Morava. Plné a hladké, v chuti jemný minerální dotek, čerstvý grep a pomerančová kůra.."
          },
          {
            "id": "bile-pinot-gris-reisten-ing-3",
            "question": "Která z následujících surovin patří do podsložky Pinot Gris – Reisten?",
            "correctAnswer": "V chuti jemný minerální dotek",
            "distractors": [
              "Mikulovská podoblast",
              "Velkopavlovická podoblast"
            ],
            "explanation": "V podsložce Pinot Gris – Reisten je obsaženo: V chuti jemný minerální dotek. Kompletní receptura položky: pozdní sběr Reisten – Mikulovsko, Morava. Plné a hladké, v chuti jemný minerální dotek, čerstvý grep a pomerančová kůra.."
          },
          {
            "id": "bile-pinot-gris-reisten-ing-4",
            "question": "Která z následujících surovin patří do podsložky Pinot Gris – Reisten?",
            "correctAnswer": "Čerstvý grep a pomerančová kůra",
            "distractors": [
              "Mělnická podoblast",
              "Kyselina a minerální tóny"
            ],
            "explanation": "V podsložce Pinot Gris – Reisten je obsaženo: Čerstvý grep a pomerančová kůra. Kompletní receptura položky: pozdní sběr Reisten – Mikulovsko, Morava. Plné a hladké, v chuti jemný minerální dotek, čerstvý grep a pomerančová kůra.."
          },
          {
            "id": "bile-pinot-gris-reisten-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Pinot Gris – Reisten?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Pinot Gris – Reisten obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-hibernal-bilkovi",
        "name": "Hibernal – Bílkovi",
        "weight": "0,75 l",
        "price": "495,-",
        "allergens": [
          "12"
        ],
        "description": "pozdní sběr Bílkovi – Velkopavlovicko, Morava. Šťavnaté, vůně černého rybízu a bezového květu, ovocné, příjemná kyselinka a kořenitý dozvuk.",
        "questions": [
          {
            "id": "bile-hibernal-bilkovi-ing-1",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Hibernal – Bílkovi?",
            "correctAnswer": "Pozdní sběr Bílkovi – Velkopavlovicko",
            "distractors": [
              "Vinařství Gotberg",
              "Vinařství Kolby"
            ],
            "explanation": "V podsložce Hibernal – Bílkovi je obsaženo: Pozdní sběr Bílkovi – Velkopavlovicko. Kompletní receptura položky: pozdní sběr Bílkovi – Velkopavlovicko, Morava. Šťavnaté, vůně černého rybízu a bezového květu, ovocné, příjemná kyselinka a kořenitý dozvuk.."
          },
          {
            "id": "bile-hibernal-bilkovi-ing-2",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Hibernal – Bílkovi?",
            "correctAnswer": "Morava. Šťavnaté",
            "distractors": [
              "Vinařství Kraus",
              "Vinařství Michlovský"
            ],
            "explanation": "V podsložce Hibernal – Bílkovi je obsaženo: Morava. Šťavnaté. Kompletní receptura položky: pozdní sběr Bílkovi – Velkopavlovicko, Morava. Šťavnaté, vůně černého rybízu a bezového květu, ovocné, příjemná kyselinka a kořenitý dozvuk.."
          },
          {
            "id": "bile-hibernal-bilkovi-ing-3",
            "question": "Která z následujících surovin patří do podsložky Hibernal – Bílkovi?",
            "correctAnswer": "Vůně černého rybízu a bezového květu",
            "distractors": [
              "Mikulovská podoblast",
              "Velkopavlovická podoblast"
            ],
            "explanation": "V podsložce Hibernal – Bílkovi je obsaženo: Vůně černého rybízu a bezového květu. Kompletní receptura položky: pozdní sběr Bílkovi – Velkopavlovicko, Morava. Šťavnaté, vůně černého rybízu a bezového květu, ovocné, příjemná kyselinka a kořenitý dozvuk.."
          },
          {
            "id": "bile-hibernal-bilkovi-ing-4",
            "question": "Která z následujících surovin patří do podsložky Hibernal – Bílkovi?",
            "correctAnswer": "Ovocné",
            "distractors": [
              "Mělnická podoblast",
              "Kyselina a minerální tóny"
            ],
            "explanation": "V podsložce Hibernal – Bílkovi je obsaženo: Ovocné. Kompletní receptura položky: pozdní sběr Bílkovi – Velkopavlovicko, Morava. Šťavnaté, vůně černého rybízu a bezového květu, ovocné, příjemná kyselinka a kořenitý dozvuk.."
          },
          {
            "id": "bile-hibernal-bilkovi-ing-5",
            "question": "Která z následujících surovin patří do podsložky Hibernal – Bílkovi?",
            "correctAnswer": "Příjemná kyselinka a kořenitý dozvuk",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Hibernal – Bílkovi je obsaženo: Příjemná kyselinka a kořenitý dozvuk. Kompletní receptura položky: pozdní sběr Bílkovi – Velkopavlovicko, Morava. Šťavnaté, vůně černého rybízu a bezového květu, ovocné, příjemná kyselinka a kořenitý dozvuk.."
          },
          {
            "id": "bile-hibernal-bilkovi-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Hibernal – Bílkovi?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Hibernal – Bílkovi obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-sauvignon-halkoci",
        "name": "Sauvignon – Typik VOC Lukáš Halkoci",
        "weight": "0,75 l",
        "price": "626,-",
        "allergens": [
          "12"
        ],
        "description": "Typik VOC Lukáš Halkoci – Znojemsko, Morava. Lehčí, svěží dochuť, aromatika angreštu, černého rybízu a citrusů.",
        "questions": [
          {
            "id": "bile-sauvignon-halkoci-ing-1",
            "question": "Která z následujících surovin patří do podsložky Sauvignon – Typik VOC Lukáš Halkoci?",
            "correctAnswer": "Typik VOC Lukáš Halkoci – Znojemsko",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Sauvignon – Typik VOC Lukáš Halkoci je obsaženo: Typik VOC Lukáš Halkoci – Znojemsko. Kompletní receptura položky: Typik VOC Lukáš Halkoci – Znojemsko, Morava. Lehčí, svěží dochuť, aromatika angreštu, černého rybízu a citrusů.."
          },
          {
            "id": "bile-sauvignon-halkoci-ing-2",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Sauvignon – Typik VOC Lukáš Halkoci?",
            "correctAnswer": "Morava. Lehčí",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Sauvignon – Typik VOC Lukáš Halkoci je obsaženo: Morava. Lehčí. Kompletní receptura položky: Typik VOC Lukáš Halkoci – Znojemsko, Morava. Lehčí, svěží dochuť, aromatika angreštu, černého rybízu a citrusů.."
          },
          {
            "id": "bile-sauvignon-halkoci-ing-3",
            "question": "Která z následujících surovin patří do podsložky Sauvignon – Typik VOC Lukáš Halkoci?",
            "correctAnswer": "Svěží dochuť",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Sauvignon – Typik VOC Lukáš Halkoci je obsaženo: Svěží dochuť. Kompletní receptura položky: Typik VOC Lukáš Halkoci – Znojemsko, Morava. Lehčí, svěží dochuť, aromatika angreštu, černého rybízu a citrusů.."
          },
          {
            "id": "bile-sauvignon-halkoci-ing-4",
            "question": "Která z následujících surovin patří do podsložky Sauvignon – Typik VOC Lukáš Halkoci?",
            "correctAnswer": "Aromatika angreštu",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Sauvignon – Typik VOC Lukáš Halkoci je obsaženo: Aromatika angreštu. Kompletní receptura položky: Typik VOC Lukáš Halkoci – Znojemsko, Morava. Lehčí, svěží dochuť, aromatika angreštu, černého rybízu a citrusů.."
          },
          {
            "id": "bile-sauvignon-halkoci-ing-5",
            "question": "Která z následujících surovin patří do podsložky Sauvignon – Typik VOC Lukáš Halkoci?",
            "correctAnswer": "Černého rybízu a citrusů",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Sauvignon – Typik VOC Lukáš Halkoci je obsaženo: Černého rybízu a citrusů. Kompletní receptura položky: Typik VOC Lukáš Halkoci – Znojemsko, Morava. Lehčí, svěží dochuť, aromatika angreštu, černého rybízu a citrusů.."
          },
          {
            "id": "bile-sauvignon-halkoci-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Sauvignon – Typik VOC Lukáš Halkoci?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Sauvignon – Typik VOC Lukáš Halkoci obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-ryzlink-vlassky-sukal",
        "name": "Ryzlink Vlašský – Milan Sůkal",
        "weight": "0,75 l",
        "price": "660,-",
        "allergens": [
          "12"
        ],
        "description": "pozdní sběr Milan Sůkal – Slovácko, Morava. Středně plné víno, příjemná kyselinka, tóny zralých citrusů, pomela a peckovic.",
        "questions": [
          {
            "id": "bile-ryzlink-vlassky-sukal-ing-1",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Ryzlink Vlašský – Milan Sůkal?",
            "correctAnswer": "Pozdní sběr Milan Sůkal – Slovácko",
            "distractors": [
              "Vinařství Gotberg",
              "Vinařství Kolby"
            ],
            "explanation": "V podsložce Ryzlink Vlašský – Milan Sůkal je obsaženo: Pozdní sběr Milan Sůkal – Slovácko. Kompletní receptura položky: pozdní sběr Milan Sůkal – Slovácko, Morava. Středně plné víno, příjemná kyselinka, tóny zralých citrusů, pomela a peckovic.."
          },
          {
            "id": "bile-ryzlink-vlassky-sukal-ing-2",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Ryzlink Vlašský – Milan Sůkal?",
            "correctAnswer": "Morava. Středně plné víno",
            "distractors": [
              "Vinařství Kraus",
              "Vinařství Michlovský"
            ],
            "explanation": "V podsložce Ryzlink Vlašský – Milan Sůkal je obsaženo: Morava. Středně plné víno. Kompletní receptura položky: pozdní sběr Milan Sůkal – Slovácko, Morava. Středně plné víno, příjemná kyselinka, tóny zralých citrusů, pomela a peckovic.."
          },
          {
            "id": "bile-ryzlink-vlassky-sukal-ing-3",
            "question": "Která z následujících surovin patří do podsložky Ryzlink Vlašský – Milan Sůkal?",
            "correctAnswer": "Příjemná kyselinka",
            "distractors": [
              "Mikulovská podoblast",
              "Velkopavlovická podoblast"
            ],
            "explanation": "V podsložce Ryzlink Vlašský – Milan Sůkal je obsaženo: Příjemná kyselinka. Kompletní receptura položky: pozdní sběr Milan Sůkal – Slovácko, Morava. Středně plné víno, příjemná kyselinka, tóny zralých citrusů, pomela a peckovic.."
          },
          {
            "id": "bile-ryzlink-vlassky-sukal-ing-4",
            "question": "Která z následujících surovin patří do podsložky Ryzlink Vlašský – Milan Sůkal?",
            "correctAnswer": "Tóny zralých citrusů",
            "distractors": [
              "Mělnická podoblast",
              "Kyselina a minerální tóny"
            ],
            "explanation": "V podsložce Ryzlink Vlašský – Milan Sůkal je obsaženo: Tóny zralých citrusů. Kompletní receptura položky: pozdní sběr Milan Sůkal – Slovácko, Morava. Středně plné víno, příjemná kyselinka, tóny zralých citrusů, pomela a peckovic.."
          },
          {
            "id": "bile-ryzlink-vlassky-sukal-ing-5",
            "question": "Která z následujících surovin patří do podsložky Ryzlink Vlašský – Milan Sůkal?",
            "correctAnswer": "Pomela a peckovic",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Ryzlink Vlašský – Milan Sůkal je obsaženo: Pomela a peckovic. Kompletní receptura položky: pozdní sběr Milan Sůkal – Slovácko, Morava. Středně plné víno, příjemná kyselinka, tóny zralých citrusů, pomela a peckovic.."
          },
          {
            "id": "bile-ryzlink-vlassky-sukal-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Ryzlink Vlašský – Milan Sůkal?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Ryzlink Vlašský – Milan Sůkal obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-palava-michlovsky",
        "name": "Pálava – Vinselect Michlovský",
        "weight": "0,75 l",
        "price": "506,-",
        "allergens": [
          "12"
        ],
        "description": "pozdní sběr Vinselect Michlovský – Lednicko-Valtický areál, Morava. Jemná vůně kvetoucích pomerančovníků a poupat růží, svěží chuť liči a jablečného závinu.",
        "questions": [
          {
            "id": "bile-palava-michlovsky-ing-1",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Pálava – Vinselect Michlovský?",
            "correctAnswer": "Pozdní sběr Vinselect Michlovský – Lednicko-Valtický areál",
            "distractors": [
              "Vinařství Gotberg",
              "Vinařství Kolby"
            ],
            "explanation": "V podsložce Pálava – Vinselect Michlovský je obsaženo: Pozdní sběr Vinselect Michlovský – Lednicko-Valtický areál. Kompletní receptura položky: pozdní sběr Vinselect Michlovský – Lednicko-Valtický areál, Morava. Jemná vůně kvetoucích pomerančovníků a poupat růží, svěží chuť liči a jablečného závinu.."
          },
          {
            "id": "bile-palava-michlovsky-ing-2",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Pálava – Vinselect Michlovský?",
            "correctAnswer": "Morava. Jemná vůně kvetoucích pomerančovníků a poupat růží",
            "distractors": [
              "Vinařství Kraus",
              "Vinařství Michlovský"
            ],
            "explanation": "V podsložce Pálava – Vinselect Michlovský je obsaženo: Morava. Jemná vůně kvetoucích pomerančovníků a poupat růží. Kompletní receptura položky: pozdní sběr Vinselect Michlovský – Lednicko-Valtický areál, Morava. Jemná vůně kvetoucích pomerančovníků a poupat růží, svěží chuť liči a jablečného závinu.."
          },
          {
            "id": "bile-palava-michlovsky-ing-3",
            "question": "Která z následujících surovin patří do podsložky Pálava – Vinselect Michlovský?",
            "correctAnswer": "Svěží chuť liči a jablečného závinu",
            "distractors": [
              "Mikulovská podoblast",
              "Velkopavlovická podoblast"
            ],
            "explanation": "V podsložce Pálava – Vinselect Michlovský je obsaženo: Svěží chuť liči a jablečného závinu. Kompletní receptura položky: pozdní sběr Vinselect Michlovský – Lednicko-Valtický areál, Morava. Jemná vůně kvetoucích pomerančovníků a poupat růží, svěží chuť liči a jablečného závinu.."
          },
          {
            "id": "bile-palava-michlovsky-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Pálava – Vinselect Michlovský?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Pálava – Vinselect Michlovský obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-poysdorfer-saurussel",
        "name": "Poysdorfer Saurüssel – Hauser",
        "weight": "0,75 l",
        "price": "629,-",
        "allergens": [
          "12"
        ],
        "description": "Weinviertel, Rakousko. Veltlínské zelené, vůně zeleného jablka, citrusové kůry a bílého pepře, jasná kyselinka a jemná mineralita.",
        "questions": [
          {
            "id": "bile-poysdorfer-saurussel-ing-1",
            "question": "Která z následujících surovin patří do podsložky Poysdorfer Saurüssel – Hauser?",
            "correctAnswer": "Weinviertel",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Poysdorfer Saurüssel – Hauser je obsaženo: Weinviertel. Kompletní receptura položky: Weinviertel, Rakousko. Veltlínské zelené, vůně zeleného jablka, citrusové kůry a bílého pepře, jasná kyselinka a jemná mineralita.."
          },
          {
            "id": "bile-poysdorfer-saurussel-ing-2",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Poysdorfer Saurüssel – Hauser?",
            "correctAnswer": "Rakousko. Veltlínské zelené",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Poysdorfer Saurüssel – Hauser je obsaženo: Rakousko. Veltlínské zelené. Kompletní receptura položky: Weinviertel, Rakousko. Veltlínské zelené, vůně zeleného jablka, citrusové kůry a bílého pepře, jasná kyselinka a jemná mineralita.."
          },
          {
            "id": "bile-poysdorfer-saurussel-ing-3",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Poysdorfer Saurüssel – Hauser?",
            "correctAnswer": "Vůně zeleného jablka",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Poysdorfer Saurüssel – Hauser je obsaženo: Vůně zeleného jablka. Kompletní receptura položky: Weinviertel, Rakousko. Veltlínské zelené, vůně zeleného jablka, citrusové kůry a bílého pepře, jasná kyselinka a jemná mineralita.."
          },
          {
            "id": "bile-poysdorfer-saurussel-ing-4",
            "question": "Která z následujících surovin patří do podsložky Poysdorfer Saurüssel – Hauser?",
            "correctAnswer": "Citrusové kůry a bílého pepře",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Poysdorfer Saurüssel – Hauser je obsaženo: Citrusové kůry a bílého pepře. Kompletní receptura položky: Weinviertel, Rakousko. Veltlínské zelené, vůně zeleného jablka, citrusové kůry a bílého pepře, jasná kyselinka a jemná mineralita.."
          },
          {
            "id": "bile-poysdorfer-saurussel-ing-5",
            "question": "Která z následujících surovin patří do podsložky Poysdorfer Saurüssel – Hauser?",
            "correctAnswer": "Jasná kyselinka a jemná mineralita",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Poysdorfer Saurüssel – Hauser je obsaženo: Jasná kyselinka a jemná mineralita. Kompletní receptura položky: Weinviertel, Rakousko. Veltlínské zelené, vůně zeleného jablka, citrusové kůry a bílého pepře, jasná kyselinka a jemná mineralita.."
          },
          {
            "id": "bile-poysdorfer-saurussel-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Poysdorfer Saurüssel – Hauser?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Poysdorfer Saurüssel – Hauser obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-gruner-satzen-schwarzbock",
        "name": "Grüner Veltliner Premium Ried Satzen – Schwarzbock",
        "weight": "0,75 l",
        "price": "723,-",
        "allergens": [
          "12"
        ],
        "description": "Premium Ried Satzen DAC Schwarzbock – Weinviertel, Rakousko. Sytá zlatavá barva, intenzivní vůně zralých hrušek a citrusů, dochuť elegantní, minerální, kořeněná pepřem.",
        "questions": [
          {
            "id": "bile-gruner-satzen-schwarzbock-ing-1",
            "question": "Která z následujících surovin patří do podsložky Grüner Veltliner Premium Ried Satzen – Schwarzbock?",
            "correctAnswer": "Premium Ried Satzen DAC Schwarzbock – Weinviertel",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Grüner Veltliner Premium Ried Satzen – Schwarzbock je obsaženo: Premium Ried Satzen DAC Schwarzbock – Weinviertel. Kompletní receptura položky: Premium Ried Satzen DAC Schwarzbock – Weinviertel, Rakousko. Sytá zlatavá barva, intenzivní vůně zralých hrušek a citrusů, dochuť elegantní, minerální, kořeněná pepřem.."
          },
          {
            "id": "bile-gruner-satzen-schwarzbock-ing-2",
            "question": "Která z následujících surovin patří do podsložky Grüner Veltliner Premium Ried Satzen – Schwarzbock?",
            "correctAnswer": "Rakousko. Sytá zlatavá barva",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Grüner Veltliner Premium Ried Satzen – Schwarzbock je obsaženo: Rakousko. Sytá zlatavá barva. Kompletní receptura položky: Premium Ried Satzen DAC Schwarzbock – Weinviertel, Rakousko. Sytá zlatavá barva, intenzivní vůně zralých hrušek a citrusů, dochuť elegantní, minerální, kořeněná pepřem.."
          },
          {
            "id": "bile-gruner-satzen-schwarzbock-ing-3",
            "question": "Která z následujících surovin patří do podsložky Grüner Veltliner Premium Ried Satzen – Schwarzbock?",
            "correctAnswer": "Intenzivní vůně zralých hrušek a citrusů",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Grüner Veltliner Premium Ried Satzen – Schwarzbock je obsaženo: Intenzivní vůně zralých hrušek a citrusů. Kompletní receptura položky: Premium Ried Satzen DAC Schwarzbock – Weinviertel, Rakousko. Sytá zlatavá barva, intenzivní vůně zralých hrušek a citrusů, dochuť elegantní, minerální, kořeněná pepřem.."
          },
          {
            "id": "bile-gruner-satzen-schwarzbock-ing-4",
            "question": "Která z následujících surovin patří do podsložky Grüner Veltliner Premium Ried Satzen – Schwarzbock?",
            "correctAnswer": "Dochuť elegantní",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Grüner Veltliner Premium Ried Satzen – Schwarzbock je obsaženo: Dochuť elegantní. Kompletní receptura položky: Premium Ried Satzen DAC Schwarzbock – Weinviertel, Rakousko. Sytá zlatavá barva, intenzivní vůně zralých hrušek a citrusů, dochuť elegantní, minerální, kořeněná pepřem.."
          },
          {
            "id": "bile-gruner-satzen-schwarzbock-ing-5",
            "question": "Která z následujících surovin patří do podsložky Grüner Veltliner Premium Ried Satzen – Schwarzbock?",
            "correctAnswer": "Minerální",
            "distractors": [
              "Pozdní sběr",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Grüner Veltliner Premium Ried Satzen – Schwarzbock je obsaženo: Minerální. Kompletní receptura položky: Premium Ried Satzen DAC Schwarzbock – Weinviertel, Rakousko. Sytá zlatavá barva, intenzivní vůně zralých hrušek a citrusů, dochuť elegantní, minerální, kořeněná pepřem.."
          },
          {
            "id": "bile-gruner-satzen-schwarzbock-ing-6",
            "question": "Která z následujících surovin patří do podsložky Grüner Veltliner Premium Ried Satzen – Schwarzbock?",
            "correctAnswer": "Kořeněná pepřem",
            "distractors": [
              "Vinařství Gotberg",
              "Vinařství Kolby"
            ],
            "explanation": "V podsložce Grüner Veltliner Premium Ried Satzen – Schwarzbock je obsaženo: Kořeněná pepřem. Kompletní receptura položky: Premium Ried Satzen DAC Schwarzbock – Weinviertel, Rakousko. Sytá zlatavá barva, intenzivní vůně zralých hrušek a citrusů, dochuť elegantní, minerální, kořeněná pepřem.."
          },
          {
            "id": "bile-gruner-satzen-schwarzbock-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Grüner Veltliner Premium Ried Satzen – Schwarzbock?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Grüner Veltliner Premium Ried Satzen – Schwarzbock obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-riesling-eva-fricke",
        "name": "Riesling Rheingau QbA Trocken – Eva Fricke",
        "weight": "0,75 l",
        "price": "999,-",
        "allergens": [
          "12"
        ],
        "description": "Rheingau, Německo. Elegantní, aromatika limetky, zeleného jablka a bílých broskví, minerální podkres.",
        "questions": [
          {
            "id": "bile-riesling-eva-fricke-ing-1",
            "question": "Která z následujících surovin patří do podsložky Riesling Rheingau QbA Trocken – Eva Fricke?",
            "correctAnswer": "Rheingau",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Riesling Rheingau QbA Trocken – Eva Fricke je obsaženo: Rheingau. Kompletní receptura položky: Rheingau, Německo. Elegantní, aromatika limetky, zeleného jablka a bílých broskví, minerální podkres.."
          },
          {
            "id": "bile-riesling-eva-fricke-ing-2",
            "question": "Která z následujících surovin patří do podsložky Riesling Rheingau QbA Trocken – Eva Fricke?",
            "correctAnswer": "Německo. Elegantní",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Riesling Rheingau QbA Trocken – Eva Fricke je obsaženo: Německo. Elegantní. Kompletní receptura položky: Rheingau, Německo. Elegantní, aromatika limetky, zeleného jablka a bílých broskví, minerální podkres.."
          },
          {
            "id": "bile-riesling-eva-fricke-ing-3",
            "question": "Která z následujících surovin patří do podsložky Riesling Rheingau QbA Trocken – Eva Fricke?",
            "correctAnswer": "Aromatika limetky",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Riesling Rheingau QbA Trocken – Eva Fricke je obsaženo: Aromatika limetky. Kompletní receptura položky: Rheingau, Německo. Elegantní, aromatika limetky, zeleného jablka a bílých broskví, minerální podkres.."
          },
          {
            "id": "bile-riesling-eva-fricke-ing-4",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Riesling Rheingau QbA Trocken – Eva Fricke?",
            "correctAnswer": "Zeleného jablka a bílých broskví",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Riesling Rheingau QbA Trocken – Eva Fricke je obsaženo: Zeleného jablka a bílých broskví. Kompletní receptura položky: Rheingau, Německo. Elegantní, aromatika limetky, zeleného jablka a bílých broskví, minerální podkres.."
          },
          {
            "id": "bile-riesling-eva-fricke-ing-5",
            "question": "Která z následujících surovin patří do podsložky Riesling Rheingau QbA Trocken – Eva Fricke?",
            "correctAnswer": "Minerální podkres",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Riesling Rheingau QbA Trocken – Eva Fricke je obsaženo: Minerální podkres. Kompletní receptura položky: Rheingau, Německo. Elegantní, aromatika limetky, zeleného jablka a bílých broskví, minerální podkres.."
          },
          {
            "id": "bile-riesling-eva-fricke-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Riesling Rheingau QbA Trocken – Eva Fricke?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Riesling Rheingau QbA Trocken – Eva Fricke obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-riesling-gunderloch-red-stone",
        "name": "Riesling Red Stone QbA trocken – Gunderloch",
        "weight": "0,75 l",
        "price": "595,-",
        "allergens": [
          "12"
        ],
        "description": "Rheinhessen, Německo. Šťavnaté, vůně zralých citrusů, broskví a bylinek, minerální stopa červené břidlice, kořenitá dochuť.",
        "questions": [
          {
            "id": "bile-riesling-gunderloch-red-stone-ing-1",
            "question": "Která z následujících surovin patří do podsložky Riesling Red Stone QbA trocken – Gunderloch?",
            "correctAnswer": "Rheinhessen",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Riesling Red Stone QbA trocken – Gunderloch je obsaženo: Rheinhessen. Kompletní receptura položky: Rheinhessen, Německo. Šťavnaté, vůně zralých citrusů, broskví a bylinek, minerální stopa červené břidlice, kořenitá dochuť.."
          },
          {
            "id": "bile-riesling-gunderloch-red-stone-ing-2",
            "question": "Která z následujících surovin patří do podsložky Riesling Red Stone QbA trocken – Gunderloch?",
            "correctAnswer": "Německo. Šťavnaté",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Riesling Red Stone QbA trocken – Gunderloch je obsaženo: Německo. Šťavnaté. Kompletní receptura položky: Rheinhessen, Německo. Šťavnaté, vůně zralých citrusů, broskví a bylinek, minerální stopa červené břidlice, kořenitá dochuť.."
          },
          {
            "id": "bile-riesling-gunderloch-red-stone-ing-3",
            "question": "Která z následujících surovin patří do podsložky Riesling Red Stone QbA trocken – Gunderloch?",
            "correctAnswer": "Vůně zralých citrusů",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Riesling Red Stone QbA trocken – Gunderloch je obsaženo: Vůně zralých citrusů. Kompletní receptura položky: Rheinhessen, Německo. Šťavnaté, vůně zralých citrusů, broskví a bylinek, minerální stopa červené břidlice, kořenitá dochuť.."
          },
          {
            "id": "bile-riesling-gunderloch-red-stone-ing-4",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Riesling Red Stone QbA trocken – Gunderloch?",
            "correctAnswer": "Broskví a bylinek",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Riesling Red Stone QbA trocken – Gunderloch je obsaženo: Broskví a bylinek. Kompletní receptura položky: Rheinhessen, Německo. Šťavnaté, vůně zralých citrusů, broskví a bylinek, minerální stopa červené břidlice, kořenitá dochuť.."
          },
          {
            "id": "bile-riesling-gunderloch-red-stone-ing-5",
            "question": "Která z následujících surovin patří do podsložky Riesling Red Stone QbA trocken – Gunderloch?",
            "correctAnswer": "Minerální stopa červené břidlice",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Riesling Red Stone QbA trocken – Gunderloch je obsaženo: Minerální stopa červené břidlice. Kompletní receptura položky: Rheinhessen, Německo. Šťavnaté, vůně zralých citrusů, broskví a bylinek, minerální stopa červené břidlice, kořenitá dochuť.."
          },
          {
            "id": "bile-riesling-gunderloch-red-stone-ing-6",
            "question": "Která z následujících surovin patří do podsložky Riesling Red Stone QbA trocken – Gunderloch?",
            "correctAnswer": "Kořenitá dochuť",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Riesling Red Stone QbA trocken – Gunderloch je obsaženo: Kořenitá dochuť. Kompletní receptura položky: Rheinhessen, Německo. Šťavnaté, vůně zralých citrusů, broskví a bylinek, minerální stopa červené břidlice, kořenitá dochuť.."
          },
          {
            "id": "bile-riesling-gunderloch-red-stone-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Riesling Red Stone QbA trocken – Gunderloch?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Riesling Red Stone QbA trocken – Gunderloch obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-riesling-fritz-haag",
        "name": "Riesling Tradition Brauneberg – Fritz Haag",
        "weight": "0,75 l",
        "price": "975,-",
        "allergens": [
          "12"
        ],
        "description": "Mosel, Německo. Zlatavá barva, intenzivní citrusová aromatika, chuť pikantní, harmonická, nádech akátového medu.",
        "questions": [
          {
            "id": "bile-riesling-fritz-haag-ing-1",
            "question": "Která z následujících surovin patří do podsložky Riesling Tradition Brauneberg – Fritz Haag?",
            "correctAnswer": "Mosel",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Riesling Tradition Brauneberg – Fritz Haag je obsaženo: Mosel. Kompletní receptura položky: Mosel, Německo. Zlatavá barva, intenzivní citrusová aromatika, chuť pikantní, harmonická, nádech akátového medu.."
          },
          {
            "id": "bile-riesling-fritz-haag-ing-2",
            "question": "Která z následujících surovin patří do podsložky Riesling Tradition Brauneberg – Fritz Haag?",
            "correctAnswer": "Německo. Zlatavá barva",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Riesling Tradition Brauneberg – Fritz Haag je obsaženo: Německo. Zlatavá barva. Kompletní receptura položky: Mosel, Německo. Zlatavá barva, intenzivní citrusová aromatika, chuť pikantní, harmonická, nádech akátového medu.."
          },
          {
            "id": "bile-riesling-fritz-haag-ing-3",
            "question": "Která z následujících surovin patří do podsložky Riesling Tradition Brauneberg – Fritz Haag?",
            "correctAnswer": "Intenzivní citrusová aromatika",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Riesling Tradition Brauneberg – Fritz Haag je obsaženo: Intenzivní citrusová aromatika. Kompletní receptura položky: Mosel, Německo. Zlatavá barva, intenzivní citrusová aromatika, chuť pikantní, harmonická, nádech akátového medu.."
          },
          {
            "id": "bile-riesling-fritz-haag-ing-4",
            "question": "Která z následujících surovin patří do podsložky Riesling Tradition Brauneberg – Fritz Haag?",
            "correctAnswer": "Chuť pikantní",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Riesling Tradition Brauneberg – Fritz Haag je obsaženo: Chuť pikantní. Kompletní receptura položky: Mosel, Německo. Zlatavá barva, intenzivní citrusová aromatika, chuť pikantní, harmonická, nádech akátového medu.."
          },
          {
            "id": "bile-riesling-fritz-haag-ing-5",
            "question": "Která z následujících surovin patří do podsložky Riesling Tradition Brauneberg – Fritz Haag?",
            "correctAnswer": "Harmonická",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Riesling Tradition Brauneberg – Fritz Haag je obsaženo: Harmonická. Kompletní receptura položky: Mosel, Německo. Zlatavá barva, intenzivní citrusová aromatika, chuť pikantní, harmonická, nádech akátového medu.."
          },
          {
            "id": "bile-riesling-fritz-haag-ing-6",
            "question": "Která z následujících surovin patří do podsložky Riesling Tradition Brauneberg – Fritz Haag?",
            "correctAnswer": "Nádech akátového medu",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Riesling Tradition Brauneberg – Fritz Haag je obsaženo: Nádech akátového medu. Kompletní receptura položky: Mosel, Německo. Zlatavá barva, intenzivní citrusová aromatika, chuť pikantní, harmonická, nádech akátového medu.."
          },
          {
            "id": "bile-riesling-fritz-haag-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Riesling Tradition Brauneberg – Fritz Haag?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Riesling Tradition Brauneberg – Fritz Haag obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-weisser-burgunder-philipp-kuhn",
        "name": "Weisser Burgunder Tradition Trocken – Philipp Kuhn",
        "weight": "0,75 l",
        "price": "725,-",
        "allergens": [
          "12"
        ],
        "description": "Pfalz, Německo. Rulandské bílé, chuť pražených mandlí, sušených hrušek, vlašských ořechů a minerality.",
        "questions": [
          {
            "id": "bile-weisser-burgunder-philipp-kuhn-ing-1",
            "question": "Která z následujících surovin patří do podsložky Weisser Burgunder Tradition Trocken – Philipp Kuhn?",
            "correctAnswer": "Pfalz",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Weisser Burgunder Tradition Trocken – Philipp Kuhn je obsaženo: Pfalz. Kompletní receptura položky: Pfalz, Německo. Rulandské bílé, chuť pražených mandlí, sušených hrušek, vlašských ořechů a minerality.."
          },
          {
            "id": "bile-weisser-burgunder-philipp-kuhn-ing-2",
            "question": "Která z následujících surovin patří do podsložky Weisser Burgunder Tradition Trocken – Philipp Kuhn?",
            "correctAnswer": "Německo. Rulandské bílé",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Weisser Burgunder Tradition Trocken – Philipp Kuhn je obsaženo: Německo. Rulandské bílé. Kompletní receptura položky: Pfalz, Německo. Rulandské bílé, chuť pražených mandlí, sušených hrušek, vlašských ořechů a minerality.."
          },
          {
            "id": "bile-weisser-burgunder-philipp-kuhn-ing-3",
            "question": "Která z následujících surovin patří do podsložky Weisser Burgunder Tradition Trocken – Philipp Kuhn?",
            "correctAnswer": "Chuť pražených mandlí",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Weisser Burgunder Tradition Trocken – Philipp Kuhn je obsaženo: Chuť pražených mandlí. Kompletní receptura položky: Pfalz, Německo. Rulandské bílé, chuť pražených mandlí, sušených hrušek, vlašských ořechů a minerality.."
          },
          {
            "id": "bile-weisser-burgunder-philipp-kuhn-ing-4",
            "question": "Která z následujících surovin patří do podsložky Weisser Burgunder Tradition Trocken – Philipp Kuhn?",
            "correctAnswer": "Sušených hrušek",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Weisser Burgunder Tradition Trocken – Philipp Kuhn je obsaženo: Sušených hrušek. Kompletní receptura položky: Pfalz, Německo. Rulandské bílé, chuť pražených mandlí, sušených hrušek, vlašských ořechů a minerality.."
          },
          {
            "id": "bile-weisser-burgunder-philipp-kuhn-ing-5",
            "question": "Která z následujících surovin patří do podsložky Weisser Burgunder Tradition Trocken – Philipp Kuhn?",
            "correctAnswer": "Vlašských ořechů a minerality",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Weisser Burgunder Tradition Trocken – Philipp Kuhn je obsaženo: Vlašských ořechů a minerality. Kompletní receptura položky: Pfalz, Německo. Rulandské bílé, chuť pražených mandlí, sušených hrušek, vlašských ořechů a minerality.."
          },
          {
            "id": "bile-weisser-burgunder-philipp-kuhn-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Weisser Burgunder Tradition Trocken – Philipp Kuhn?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Weisser Burgunder Tradition Trocken – Philipp Kuhn obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-sauvignon-lapis-luna",
        "name": "Sauvignon Blanc – Lapis Luna",
        "weight": "0,75 l",
        "price": "789,-",
        "allergens": [
          "12"
        ],
        "description": "North Coast, Kalifornie. Plnější, pikantní kyselinka, ovocný styl odrůdy, zralá bílá broskev a tropické ovoce v chuti.",
        "questions": [
          {
            "id": "bile-sauvignon-lapis-luna-ing-1",
            "question": "Která z následujících surovin patří do podsložky Sauvignon Blanc – Lapis Luna?",
            "correctAnswer": "North Coast",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Sauvignon Blanc – Lapis Luna je obsaženo: North Coast. Kompletní receptura položky: North Coast, Kalifornie. Plnější, pikantní kyselinka, ovocný styl odrůdy, zralá bílá broskev a tropické ovoce v chuti.."
          },
          {
            "id": "bile-sauvignon-lapis-luna-ing-2",
            "question": "Která z následujících surovin patří do podsložky Sauvignon Blanc – Lapis Luna?",
            "correctAnswer": "Kalifornie. Plnější",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Sauvignon Blanc – Lapis Luna je obsaženo: Kalifornie. Plnější. Kompletní receptura položky: North Coast, Kalifornie. Plnější, pikantní kyselinka, ovocný styl odrůdy, zralá bílá broskev a tropické ovoce v chuti.."
          },
          {
            "id": "bile-sauvignon-lapis-luna-ing-3",
            "question": "Která z následujících surovin patří do podsložky Sauvignon Blanc – Lapis Luna?",
            "correctAnswer": "Pikantní kyselinka",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Sauvignon Blanc – Lapis Luna je obsaženo: Pikantní kyselinka. Kompletní receptura položky: North Coast, Kalifornie. Plnější, pikantní kyselinka, ovocný styl odrůdy, zralá bílá broskev a tropické ovoce v chuti.."
          },
          {
            "id": "bile-sauvignon-lapis-luna-ing-4",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Sauvignon Blanc – Lapis Luna?",
            "correctAnswer": "Ovocný styl odrůdy",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Sauvignon Blanc – Lapis Luna je obsaženo: Ovocný styl odrůdy. Kompletní receptura položky: North Coast, Kalifornie. Plnější, pikantní kyselinka, ovocný styl odrůdy, zralá bílá broskev a tropické ovoce v chuti.."
          },
          {
            "id": "bile-sauvignon-lapis-luna-ing-5",
            "question": "Která z následujících surovin patří do podsložky Sauvignon Blanc – Lapis Luna?",
            "correctAnswer": "Zralá bílá broskev a tropické ovoce v chuti",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Sauvignon Blanc – Lapis Luna je obsaženo: Zralá bílá broskev a tropické ovoce v chuti. Kompletní receptura položky: North Coast, Kalifornie. Plnější, pikantní kyselinka, ovocný styl odrůdy, zralá bílá broskev a tropické ovoce v chuti.."
          },
          {
            "id": "bile-sauvignon-lapis-luna-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Sauvignon Blanc – Lapis Luna?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Sauvignon Blanc – Lapis Luna obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-chardonnay-knotty-vines",
        "name": "Chardonnay – Knotty Vines",
        "weight": "0,75 l",
        "price": "975,-",
        "allergens": [
          "12"
        ],
        "description": "Kalifornie. Plnější na dubových sudech, šťavnaté, elegantní závěr, chuť tropického ovoce, koření a mineralita.",
        "questions": [
          {
            "id": "bile-chardonnay-knotty-vines-ing-1",
            "question": "Která z následujících surovin patří do podsložky Chardonnay – Knotty Vines?",
            "correctAnswer": "Kalifornie. Plnější na dubových sudech",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Chardonnay – Knotty Vines je obsaženo: Kalifornie. Plnější na dubových sudech. Kompletní receptura položky: Kalifornie. Plnější na dubových sudech, šťavnaté, elegantní závěr, chuť tropického ovoce, koření a mineralita.."
          },
          {
            "id": "bile-chardonnay-knotty-vines-ing-2",
            "question": "Která z následujících surovin patří do podsložky Chardonnay – Knotty Vines?",
            "correctAnswer": "Šťavnaté",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Chardonnay – Knotty Vines je obsaženo: Šťavnaté. Kompletní receptura položky: Kalifornie. Plnější na dubových sudech, šťavnaté, elegantní závěr, chuť tropického ovoce, koření a mineralita.."
          },
          {
            "id": "bile-chardonnay-knotty-vines-ing-3",
            "question": "Která z následujících surovin patří do podsložky Chardonnay – Knotty Vines?",
            "correctAnswer": "Elegantní závěr",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Chardonnay – Knotty Vines je obsaženo: Elegantní závěr. Kompletní receptura položky: Kalifornie. Plnější na dubových sudech, šťavnaté, elegantní závěr, chuť tropického ovoce, koření a mineralita.."
          },
          {
            "id": "bile-chardonnay-knotty-vines-ing-4",
            "question": "Která z následujících surovin patří do podsložky Chardonnay – Knotty Vines?",
            "correctAnswer": "Chuť tropického ovoce",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Chardonnay – Knotty Vines je obsaženo: Chuť tropického ovoce. Kompletní receptura položky: Kalifornie. Plnější na dubových sudech, šťavnaté, elegantní závěr, chuť tropického ovoce, koření a mineralita.."
          },
          {
            "id": "bile-chardonnay-knotty-vines-ing-5",
            "question": "Která z následujících surovin patří do podsložky Chardonnay – Knotty Vines?",
            "correctAnswer": "Koření a mineralita",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Chardonnay – Knotty Vines je obsaženo: Koření a mineralita. Kompletní receptura položky: Kalifornie. Plnější na dubových sudech, šťavnaté, elegantní závěr, chuť tropického ovoce, koření a mineralita.."
          },
          {
            "id": "bile-chardonnay-knotty-vines-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Chardonnay – Knotty Vines?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Chardonnay – Knotty Vines obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      }
    ]
  },
  {
    "id": "ruzova-vina",
    "name": "růžová vína",
    "badge": "Růžová vína",
    "description": "Svěží a ovocitá růžová vína z vyhlášených viničních tratí",
    "iconName": "Wine",
    "items": [
      {
        "id": "ruzove-merlot-rose-bilkovi",
        "name": "Merlot Rosé – Bílkovi",
        "weight": "0,75 l",
        "price": "405,-",
        "allergens": [
          "12"
        ],
        "description": "pozdní sběr Bílkovi – Velkopavlovicko, Morava. Příjemně pitelné, vůně malin, jahod a třešní, ovocitá chuť s tóny smetany.",
        "questions": [
          {
            "id": "ruzove-merlot-rose-bilkovi-ing-1",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Merlot Rosé – Bílkovi?",
            "correctAnswer": "Pozdní sběr Bílkovi – Velkopavlovicko",
            "distractors": [
              "Vinařství Gotberg",
              "Vinařství Kolby"
            ],
            "explanation": "V podsložce Merlot Rosé – Bílkovi je obsaženo: Pozdní sběr Bílkovi – Velkopavlovicko. Kompletní receptura položky: pozdní sběr Bílkovi – Velkopavlovicko, Morava. Příjemně pitelné, vůně malin, jahod a třešní, ovocitá chuť s tóny smetany.."
          },
          {
            "id": "ruzove-merlot-rose-bilkovi-ing-2",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Merlot Rosé – Bílkovi?",
            "correctAnswer": "Morava. Příjemně pitelné",
            "distractors": [
              "Vinařství Kraus",
              "Vinařství Michlovský"
            ],
            "explanation": "V podsložce Merlot Rosé – Bílkovi je obsaženo: Morava. Příjemně pitelné. Kompletní receptura položky: pozdní sběr Bílkovi – Velkopavlovicko, Morava. Příjemně pitelné, vůně malin, jahod a třešní, ovocitá chuť s tóny smetany.."
          },
          {
            "id": "ruzove-merlot-rose-bilkovi-ing-3",
            "question": "Která z následujících surovin patří do podsložky Merlot Rosé – Bílkovi?",
            "correctAnswer": "Vůně malin",
            "distractors": [
              "Mikulovská podoblast",
              "Velkopavlovická podoblast"
            ],
            "explanation": "V podsložce Merlot Rosé – Bílkovi je obsaženo: Vůně malin. Kompletní receptura položky: pozdní sběr Bílkovi – Velkopavlovicko, Morava. Příjemně pitelné, vůně malin, jahod a třešní, ovocitá chuť s tóny smetany.."
          },
          {
            "id": "ruzove-merlot-rose-bilkovi-ing-4",
            "question": "Která z následujících surovin patří do podsložky Merlot Rosé – Bílkovi?",
            "correctAnswer": "Jahod a třešní",
            "distractors": [
              "Mělnická podoblast",
              "Kyselina a minerální tóny"
            ],
            "explanation": "V podsložce Merlot Rosé – Bílkovi je obsaženo: Jahod a třešní. Kompletní receptura položky: pozdní sběr Bílkovi – Velkopavlovicko, Morava. Příjemně pitelné, vůně malin, jahod a třešní, ovocitá chuť s tóny smetany.."
          },
          {
            "id": "ruzove-merlot-rose-bilkovi-ing-5",
            "question": "Která z následujících surovin patří do podsložky Merlot Rosé – Bílkovi?",
            "correctAnswer": "Ovocitá chuť s tóny smetany",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Merlot Rosé – Bílkovi je obsaženo: Ovocitá chuť s tóny smetany. Kompletní receptura položky: pozdní sběr Bílkovi – Velkopavlovicko, Morava. Příjemně pitelné, vůně malin, jahod a třešní, ovocitá chuť s tóny smetany.."
          },
          {
            "id": "ruzove-merlot-rose-bilkovi-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Merlot Rosé – Bílkovi?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Merlot Rosé – Bílkovi obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      }
    ]
  },
  {
    "id": "cervena-vina",
    "name": "červená vína",
    "badge": "Červená vína",
    "description": "Vyzrálá plná červená vína školená v sudech z Čech, Moravy, Rakouska a Kalifornie",
    "iconName": "Wine",
    "items": [
      {
        "id": "cervene-pinot-noir-rouci-kraus",
        "name": "Pinot Noir Roučí Malé – Kraus",
        "weight": "0,75 l",
        "price": "425,-",
        "allergens": [
          "12"
        ],
        "description": "Mělnicko, Čechy. Lehké víno, chuť lesní jahody a červené zahradní ovoce.",
        "questions": [
          {
            "id": "cervene-pinot-noir-rouci-kraus-ing-1",
            "question": "Která z následujících surovin patří do podsložky Pinot Noir Roučí Malé – Kraus?",
            "correctAnswer": "Mělnicko",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Pinot Noir Roučí Malé – Kraus je obsaženo: Mělnicko. Kompletní receptura položky: Mělnicko, Čechy. Lehké víno, chuť lesní jahody a červené zahradní ovoce.."
          },
          {
            "id": "cervene-pinot-noir-rouci-kraus-ing-2",
            "question": "Která z následujících surovin patří do podsložky Pinot Noir Roučí Malé – Kraus?",
            "correctAnswer": "Čechy. Lehké víno",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Pinot Noir Roučí Malé – Kraus je obsaženo: Čechy. Lehké víno. Kompletní receptura položky: Mělnicko, Čechy. Lehké víno, chuť lesní jahody a červené zahradní ovoce.."
          },
          {
            "id": "cervene-pinot-noir-rouci-kraus-ing-3",
            "question": "Která z následujících surovin patří do podsložky Pinot Noir Roučí Malé – Kraus?",
            "correctAnswer": "Chuť lesní jahody a červené zahradní ovoce",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Pinot Noir Roučí Malé – Kraus je obsaženo: Chuť lesní jahody a červené zahradní ovoce. Kompletní receptura položky: Mělnicko, Čechy. Lehké víno, chuť lesní jahody a červené zahradní ovoce.."
          },
          {
            "id": "cervene-pinot-noir-rouci-kraus-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Pinot Noir Roučí Malé – Kraus?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Pinot Noir Roučí Malé – Kraus obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "cervene-dornfelder-bilkovi",
        "name": "Dornfelder – Bílkovi",
        "weight": "0,75 l",
        "price": "419,-",
        "allergens": [
          "12"
        ],
        "description": "Velkopavlovicko, Morava. 12 měsíců zrání v sudu, vůně ostružin, plná, harmonická chuť rybízu, třešní a malin.",
        "questions": [
          {
            "id": "cervene-dornfelder-bilkovi-ing-1",
            "question": "Která z následujících surovin patří do podsložky Dornfelder – Bílkovi?",
            "correctAnswer": "Velkopavlovicko",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Dornfelder – Bílkovi je obsaženo: Velkopavlovicko. Kompletní receptura položky: Velkopavlovicko, Morava. 12 měsíců zrání v sudu, vůně ostružin, plná, harmonická chuť rybízu, třešní a malin.."
          },
          {
            "id": "cervene-dornfelder-bilkovi-ing-2",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Dornfelder – Bílkovi?",
            "correctAnswer": "Morava. 12 měsíců zrání v sudu",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Dornfelder – Bílkovi je obsaženo: Morava. 12 měsíců zrání v sudu. Kompletní receptura položky: Velkopavlovicko, Morava. 12 měsíců zrání v sudu, vůně ostružin, plná, harmonická chuť rybízu, třešní a malin.."
          },
          {
            "id": "cervene-dornfelder-bilkovi-ing-3",
            "question": "Která z následujících surovin patří do podsložky Dornfelder – Bílkovi?",
            "correctAnswer": "Vůně ostružin",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Dornfelder – Bílkovi je obsaženo: Vůně ostružin. Kompletní receptura položky: Velkopavlovicko, Morava. 12 měsíců zrání v sudu, vůně ostružin, plná, harmonická chuť rybízu, třešní a malin.."
          },
          {
            "id": "cervene-dornfelder-bilkovi-ing-4",
            "question": "Která z následujících surovin patří do podsložky Dornfelder – Bílkovi?",
            "correctAnswer": "Plná",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Dornfelder – Bílkovi je obsaženo: Plná. Kompletní receptura položky: Velkopavlovicko, Morava. 12 měsíců zrání v sudu, vůně ostružin, plná, harmonická chuť rybízu, třešní a malin.."
          },
          {
            "id": "cervene-dornfelder-bilkovi-ing-5",
            "question": "Která z následujících surovin patří do podsložky Dornfelder – Bílkovi?",
            "correctAnswer": "Harmonická chuť rybízu",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Dornfelder – Bílkovi je obsaženo: Harmonická chuť rybízu. Kompletní receptura položky: Velkopavlovicko, Morava. 12 měsíců zrání v sudu, vůně ostružin, plná, harmonická chuť rybízu, třešní a malin.."
          },
          {
            "id": "cervene-dornfelder-bilkovi-ing-6",
            "question": "Která z následujících surovin patří do podsložky Dornfelder – Bílkovi?",
            "correctAnswer": "Třešní a malin",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Dornfelder – Bílkovi je obsaženo: Třešní a malin. Kompletní receptura položky: Velkopavlovicko, Morava. 12 měsíců zrání v sudu, vůně ostružin, plná, harmonická chuť rybízu, třešní a malin.."
          },
          {
            "id": "cervene-dornfelder-bilkovi-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Dornfelder – Bílkovi?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Dornfelder – Bílkovi obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "cervene-cuvee-red-kolby",
        "name": "Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby",
        "weight": "0,75 l",
        "price": "649,-",
        "allergens": [
          "12"
        ],
        "description": "Mikulovsko, Morava. Plné, komplexní, dlouhý závěr, sytá granátová barva, chuť čokolády, koření, tmavého ovoce a kouře.",
        "questions": [
          {
            "id": "cervene-cuvee-red-kolby-ing-1",
            "question": "Která z následujících surovin patří do podsložky Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby?",
            "correctAnswer": "Mikulovsko",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby je obsaženo: Mikulovsko. Kompletní receptura položky: Mikulovsko, Morava. Plné, komplexní, dlouhý závěr, sytá granátová barva, chuť čokolády, koření, tmavého ovoce a kouře.."
          },
          {
            "id": "cervene-cuvee-red-kolby-ing-2",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby?",
            "correctAnswer": "Morava. Plné",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby je obsaženo: Morava. Plné. Kompletní receptura položky: Mikulovsko, Morava. Plné, komplexní, dlouhý závěr, sytá granátová barva, chuť čokolády, koření, tmavého ovoce a kouře.."
          },
          {
            "id": "cervene-cuvee-red-kolby-ing-3",
            "question": "Která z následujících surovin patří do podsložky Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby?",
            "correctAnswer": "Komplexní",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby je obsaženo: Komplexní. Kompletní receptura položky: Mikulovsko, Morava. Plné, komplexní, dlouhý závěr, sytá granátová barva, chuť čokolády, koření, tmavého ovoce a kouře.."
          },
          {
            "id": "cervene-cuvee-red-kolby-ing-4",
            "question": "Která z následujících surovin patří do podsložky Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby?",
            "correctAnswer": "Dlouhý závěr",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby je obsaženo: Dlouhý závěr. Kompletní receptura položky: Mikulovsko, Morava. Plné, komplexní, dlouhý závěr, sytá granátová barva, chuť čokolády, koření, tmavého ovoce a kouře.."
          },
          {
            "id": "cervene-cuvee-red-kolby-ing-5",
            "question": "Která z následujících surovin patří do podsložky Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby?",
            "correctAnswer": "Sytá granátová barva",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby je obsaženo: Sytá granátová barva. Kompletní receptura položky: Mikulovsko, Morava. Plné, komplexní, dlouhý závěr, sytá granátová barva, chuť čokolády, koření, tmavého ovoce a kouře.."
          },
          {
            "id": "cervene-cuvee-red-kolby-ing-6",
            "question": "Která z následujících surovin patří do podsložky Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby?",
            "correctAnswer": "Chuť čokolády",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby je obsaženo: Chuť čokolády. Kompletní receptura položky: Mikulovsko, Morava. Plné, komplexní, dlouhý závěr, sytá granátová barva, chuť čokolády, koření, tmavého ovoce a kouře.."
          },
          {
            "id": "cervene-cuvee-red-kolby-ing-7",
            "question": "Která z následujících surovin patří do podsložky Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby?",
            "correctAnswer": "Koření",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby je obsaženo: Koření. Kompletní receptura položky: Mikulovsko, Morava. Plné, komplexní, dlouhý závěr, sytá granátová barva, chuť čokolády, koření, tmavého ovoce a kouře.."
          },
          {
            "id": "cervene-cuvee-red-kolby-ing-8",
            "question": "Která z následujících surovin patří do podsložky Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby?",
            "correctAnswer": "Tmavého ovoce a kouře",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby je obsaženo: Tmavého ovoce a kouře. Kompletní receptura položky: Mikulovsko, Morava. Plné, komplexní, dlouhý závěr, sytá granátová barva, chuť čokolády, koření, tmavého ovoce a kouře.."
          },
          {
            "id": "cervene-cuvee-red-kolby-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "cervene-nina-cuvee-bilkovi",
        "name": "Nina Cuvée (Merlot, Frankovka) – Bílkovi",
        "weight": "0,75 l",
        "price": "699,-",
        "allergens": [
          "12"
        ],
        "description": "Velkopavlovicko, Morava. Plné, 14 měsíců v dubových sudech, vůně rybízu a pražené kávy, chuť hořké čokolády a švestek.",
        "questions": [
          {
            "id": "cervene-nina-cuvee-bilkovi-ing-1",
            "question": "Která z následujících surovin patří do podsložky Nina Cuvée (Merlot, Frankovka) – Bílkovi?",
            "correctAnswer": "Velkopavlovicko",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Nina Cuvée (Merlot, Frankovka) – Bílkovi je obsaženo: Velkopavlovicko. Kompletní receptura položky: Velkopavlovicko, Morava. Plné, 14 měsíců v dubových sudech, vůně rybízu a pražené kávy, chuť hořké čokolády a švestek.."
          },
          {
            "id": "cervene-nina-cuvee-bilkovi-ing-2",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Nina Cuvée (Merlot, Frankovka) – Bílkovi?",
            "correctAnswer": "Morava. Plné",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Nina Cuvée (Merlot, Frankovka) – Bílkovi je obsaženo: Morava. Plné. Kompletní receptura položky: Velkopavlovicko, Morava. Plné, 14 měsíců v dubových sudech, vůně rybízu a pražené kávy, chuť hořké čokolády a švestek.."
          },
          {
            "id": "cervene-nina-cuvee-bilkovi-ing-3",
            "question": "Která z následujících surovin patří do podsložky Nina Cuvée (Merlot, Frankovka) – Bílkovi?",
            "correctAnswer": "14 měsíců v dubových sudech",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Nina Cuvée (Merlot, Frankovka) – Bílkovi je obsaženo: 14 měsíců v dubových sudech. Kompletní receptura položky: Velkopavlovicko, Morava. Plné, 14 měsíců v dubových sudech, vůně rybízu a pražené kávy, chuť hořké čokolády a švestek.."
          },
          {
            "id": "cervene-nina-cuvee-bilkovi-ing-4",
            "question": "Která z následujících surovin patří do podsložky Nina Cuvée (Merlot, Frankovka) – Bílkovi?",
            "correctAnswer": "Vůně rybízu a pražené kávy",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Nina Cuvée (Merlot, Frankovka) – Bílkovi je obsaženo: Vůně rybízu a pražené kávy. Kompletní receptura položky: Velkopavlovicko, Morava. Plné, 14 měsíců v dubových sudech, vůně rybízu a pražené kávy, chuť hořké čokolády a švestek.."
          },
          {
            "id": "cervene-nina-cuvee-bilkovi-ing-5",
            "question": "Která z následujících surovin patří do podsložky Nina Cuvée (Merlot, Frankovka) – Bílkovi?",
            "correctAnswer": "Chuť hořké čokolády a švestek",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Nina Cuvée (Merlot, Frankovka) – Bílkovi je obsaženo: Chuť hořké čokolády a švestek. Kompletní receptura položky: Velkopavlovicko, Morava. Plné, 14 měsíců v dubových sudech, vůně rybízu a pražené kávy, chuť hořké čokolády a švestek.."
          },
          {
            "id": "cervene-nina-cuvee-bilkovi-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Nina Cuvée (Merlot, Frankovka) – Bílkovi?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Nina Cuvée (Merlot, Frankovka) – Bílkovi obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "cervene-zweigelt-feller-artinger",
        "name": "Zweigelt – Weingut Feller-Artinger",
        "weight": "0,75 l",
        "price": "660,-",
        "allergens": [
          "12"
        ],
        "description": "Burgenland, Rakousko. Svěží, vůně po bobulovitém ovoci, sametová chuť tmavého ovoce, dubu, bylin a tabáku.",
        "questions": [
          {
            "id": "cervene-zweigelt-feller-artinger-ing-1",
            "question": "Která z následujících surovin patří do podsložky Zweigelt – Weingut Feller-Artinger?",
            "correctAnswer": "Burgenland",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Zweigelt – Weingut Feller-Artinger je obsaženo: Burgenland. Kompletní receptura položky: Burgenland, Rakousko. Svěží, vůně po bobulovitém ovoci, sametová chuť tmavého ovoce, dubu, bylin a tabáku.."
          },
          {
            "id": "cervene-zweigelt-feller-artinger-ing-2",
            "question": "Která z následujících surovin patří do podsložky Zweigelt – Weingut Feller-Artinger?",
            "correctAnswer": "Rakousko. Svěží",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Zweigelt – Weingut Feller-Artinger je obsaženo: Rakousko. Svěží. Kompletní receptura položky: Burgenland, Rakousko. Svěží, vůně po bobulovitém ovoci, sametová chuť tmavého ovoce, dubu, bylin a tabáku.."
          },
          {
            "id": "cervene-zweigelt-feller-artinger-ing-3",
            "question": "Která z následujících surovin patří do podsložky Zweigelt – Weingut Feller-Artinger?",
            "correctAnswer": "Vůně po bobulovitém ovoci",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Zweigelt – Weingut Feller-Artinger je obsaženo: Vůně po bobulovitém ovoci. Kompletní receptura položky: Burgenland, Rakousko. Svěží, vůně po bobulovitém ovoci, sametová chuť tmavého ovoce, dubu, bylin a tabáku.."
          },
          {
            "id": "cervene-zweigelt-feller-artinger-ing-4",
            "question": "Která z následujících surovin patří do podsložky Zweigelt – Weingut Feller-Artinger?",
            "correctAnswer": "Sametová chuť tmavého ovoce",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Zweigelt – Weingut Feller-Artinger je obsaženo: Sametová chuť tmavého ovoce. Kompletní receptura položky: Burgenland, Rakousko. Svěží, vůně po bobulovitém ovoci, sametová chuť tmavého ovoce, dubu, bylin a tabáku.."
          },
          {
            "id": "cervene-zweigelt-feller-artinger-ing-5",
            "question": "Která z následujících surovin patří do podsložky Zweigelt – Weingut Feller-Artinger?",
            "correctAnswer": "Dubu",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Zweigelt – Weingut Feller-Artinger je obsaženo: Dubu. Kompletní receptura položky: Burgenland, Rakousko. Svěží, vůně po bobulovitém ovoci, sametová chuť tmavého ovoce, dubu, bylin a tabáku.."
          },
          {
            "id": "cervene-zweigelt-feller-artinger-ing-6",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Zweigelt – Weingut Feller-Artinger?",
            "correctAnswer": "Bylin a tabáku",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Zweigelt – Weingut Feller-Artinger je obsaženo: Bylin a tabáku. Kompletní receptura položky: Burgenland, Rakousko. Svěží, vůně po bobulovitém ovoci, sametová chuť tmavého ovoce, dubu, bylin a tabáku.."
          },
          {
            "id": "cervene-zweigelt-feller-artinger-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Zweigelt – Weingut Feller-Artinger?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Zweigelt – Weingut Feller-Artinger obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "cervene-pinot-noir-philipp-kuhn",
        "name": "Pinot Noir Tradition – Philipp Kuhn",
        "weight": "0,75 l",
        "price": "959,-",
        "allergens": [
          "12"
        ],
        "description": "Pfalz, Německo. Středně plné, vůně lesních jahod, sušených švestek, mandlí, třešní, hořké čokolády a kůže, výrazné třísloviny, dochuť zralých třešní a fialek.",
        "questions": [
          {
            "id": "cervene-pinot-noir-philipp-kuhn-ing-1",
            "question": "Která z následujících surovin patří do podsložky Pinot Noir Tradition – Philipp Kuhn?",
            "correctAnswer": "Pfalz",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Pinot Noir Tradition – Philipp Kuhn je obsaženo: Pfalz. Kompletní receptura položky: Pfalz, Německo. Středně plné, vůně lesních jahod, sušených švestek, mandlí, třešní, hořké čokolády a kůže, výrazné třísloviny, dochuť zralých třešní a fialek.."
          },
          {
            "id": "cervene-pinot-noir-philipp-kuhn-ing-2",
            "question": "Která z následujících surovin patří do podsložky Pinot Noir Tradition – Philipp Kuhn?",
            "correctAnswer": "Německo. Středně plné",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Pinot Noir Tradition – Philipp Kuhn je obsaženo: Německo. Středně plné. Kompletní receptura položky: Pfalz, Německo. Středně plné, vůně lesních jahod, sušených švestek, mandlí, třešní, hořké čokolády a kůže, výrazné třísloviny, dochuť zralých třešní a fialek.."
          },
          {
            "id": "cervene-pinot-noir-philipp-kuhn-ing-3",
            "question": "Která z následujících surovin patří do podsložky Pinot Noir Tradition – Philipp Kuhn?",
            "correctAnswer": "Vůně lesních jahod",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Pinot Noir Tradition – Philipp Kuhn je obsaženo: Vůně lesních jahod. Kompletní receptura položky: Pfalz, Německo. Středně plné, vůně lesních jahod, sušených švestek, mandlí, třešní, hořké čokolády a kůže, výrazné třísloviny, dochuť zralých třešní a fialek.."
          },
          {
            "id": "cervene-pinot-noir-philipp-kuhn-ing-4",
            "question": "Která z následujících surovin patří do podsložky Pinot Noir Tradition – Philipp Kuhn?",
            "correctAnswer": "Sušených švestek",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Pinot Noir Tradition – Philipp Kuhn je obsaženo: Sušených švestek. Kompletní receptura položky: Pfalz, Německo. Středně plné, vůně lesních jahod, sušených švestek, mandlí, třešní, hořké čokolády a kůže, výrazné třísloviny, dochuť zralých třešní a fialek.."
          },
          {
            "id": "cervene-pinot-noir-philipp-kuhn-ing-5",
            "question": "Která z následujících surovin patří do podsložky Pinot Noir Tradition – Philipp Kuhn?",
            "correctAnswer": "Mandlí",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Pinot Noir Tradition – Philipp Kuhn je obsaženo: Mandlí. Kompletní receptura položky: Pfalz, Německo. Středně plné, vůně lesních jahod, sušených švestek, mandlí, třešní, hořké čokolády a kůže, výrazné třísloviny, dochuť zralých třešní a fialek.."
          },
          {
            "id": "cervene-pinot-noir-philipp-kuhn-ing-6",
            "question": "Která z následujících surovin patří do podsložky Pinot Noir Tradition – Philipp Kuhn?",
            "correctAnswer": "Třešní",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Pinot Noir Tradition – Philipp Kuhn je obsaženo: Třešní. Kompletní receptura položky: Pfalz, Německo. Středně plné, vůně lesních jahod, sušených švestek, mandlí, třešní, hořké čokolády a kůže, výrazné třísloviny, dochuť zralých třešní a fialek.."
          },
          {
            "id": "cervene-pinot-noir-philipp-kuhn-ing-7",
            "question": "Která z následujících surovin patří do podsložky Pinot Noir Tradition – Philipp Kuhn?",
            "correctAnswer": "Hořké čokolády a kůže",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Pinot Noir Tradition – Philipp Kuhn je obsaženo: Hořké čokolády a kůže. Kompletní receptura položky: Pfalz, Německo. Středně plné, vůně lesních jahod, sušených švestek, mandlí, třešní, hořké čokolády a kůže, výrazné třísloviny, dochuť zralých třešní a fialek.."
          },
          {
            "id": "cervene-pinot-noir-philipp-kuhn-ing-8",
            "question": "Která z následujících surovin patří do podsložky Pinot Noir Tradition – Philipp Kuhn?",
            "correctAnswer": "Výrazné třísloviny",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Pinot Noir Tradition – Philipp Kuhn je obsaženo: Výrazné třísloviny. Kompletní receptura položky: Pfalz, Německo. Středně plné, vůně lesních jahod, sušených švestek, mandlí, třešní, hořké čokolády a kůže, výrazné třísloviny, dochuť zralých třešní a fialek.."
          },
          {
            "id": "cervene-pinot-noir-philipp-kuhn-ing-9",
            "question": "Která z následujících surovin patří do podsložky Pinot Noir Tradition – Philipp Kuhn?",
            "correctAnswer": "Dochuť zralých třešní a fialek",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Pinot Noir Tradition – Philipp Kuhn je obsaženo: Dochuť zralých třešní a fialek. Kompletní receptura položky: Pfalz, Německo. Středně plné, vůně lesních jahod, sušených švestek, mandlí, třešní, hořké čokolády a kůže, výrazné třísloviny, dochuť zralých třešní a fialek.."
          },
          {
            "id": "cervene-pinot-noir-philipp-kuhn-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Pinot Noir Tradition – Philipp Kuhn?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Pinot Noir Tradition – Philipp Kuhn obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "cervene-cabernet-lapis-luna",
        "name": "Cabernet Sauvignon – Lapis Luna",
        "weight": "0,75 l",
        "price": "789,-",
        "allergens": [
          "12"
        ],
        "description": "Lodi, Kalifornie. Středně plné, příjemná kyselina, dlouhý závěr, tmavé ovoce, černý rybíz, koření, skořice a hřebíček.",
        "questions": [
          {
            "id": "cervene-cabernet-lapis-luna-ing-1",
            "question": "Která z následujících surovin patří do podsložky Cabernet Sauvignon – Lapis Luna?",
            "correctAnswer": "Lodi",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Cabernet Sauvignon – Lapis Luna je obsaženo: Lodi. Kompletní receptura položky: Lodi, Kalifornie. Středně plné, příjemná kyselina, dlouhý závěr, tmavé ovoce, černý rybíz, koření, skořice a hřebíček.."
          },
          {
            "id": "cervene-cabernet-lapis-luna-ing-2",
            "question": "Která z následujících surovin patří do podsložky Cabernet Sauvignon – Lapis Luna?",
            "correctAnswer": "Kalifornie. Středně plné",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Cabernet Sauvignon – Lapis Luna je obsaženo: Kalifornie. Středně plné. Kompletní receptura položky: Lodi, Kalifornie. Středně plné, příjemná kyselina, dlouhý závěr, tmavé ovoce, černý rybíz, koření, skořice a hřebíček.."
          },
          {
            "id": "cervene-cabernet-lapis-luna-ing-3",
            "question": "Která z následujících surovin patří do podsložky Cabernet Sauvignon – Lapis Luna?",
            "correctAnswer": "Příjemná kyselina",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Cabernet Sauvignon – Lapis Luna je obsaženo: Příjemná kyselina. Kompletní receptura položky: Lodi, Kalifornie. Středně plné, příjemná kyselina, dlouhý závěr, tmavé ovoce, černý rybíz, koření, skořice a hřebíček.."
          },
          {
            "id": "cervene-cabernet-lapis-luna-ing-4",
            "question": "Která z následujících surovin patří do podsložky Cabernet Sauvignon – Lapis Luna?",
            "correctAnswer": "Dlouhý závěr",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Cabernet Sauvignon – Lapis Luna je obsaženo: Dlouhý závěr. Kompletní receptura položky: Lodi, Kalifornie. Středně plné, příjemná kyselina, dlouhý závěr, tmavé ovoce, černý rybíz, koření, skořice a hřebíček.."
          },
          {
            "id": "cervene-cabernet-lapis-luna-ing-5",
            "question": "Která z následujících surovin patří do podsložky Cabernet Sauvignon – Lapis Luna?",
            "correctAnswer": "Tmavé ovoce",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Cabernet Sauvignon – Lapis Luna je obsaženo: Tmavé ovoce. Kompletní receptura položky: Lodi, Kalifornie. Středně plné, příjemná kyselina, dlouhý závěr, tmavé ovoce, černý rybíz, koření, skořice a hřebíček.."
          },
          {
            "id": "cervene-cabernet-lapis-luna-ing-6",
            "question": "Která z následujících surovin patří do podsložky Cabernet Sauvignon – Lapis Luna?",
            "correctAnswer": "Černý rybíz",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Cabernet Sauvignon – Lapis Luna je obsaženo: Černý rybíz. Kompletní receptura položky: Lodi, Kalifornie. Středně plné, příjemná kyselina, dlouhý závěr, tmavé ovoce, černý rybíz, koření, skořice a hřebíček.."
          },
          {
            "id": "cervene-cabernet-lapis-luna-ing-7",
            "question": "Která z následujících surovin patří do podsložky Cabernet Sauvignon – Lapis Luna?",
            "correctAnswer": "Koření",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Cabernet Sauvignon – Lapis Luna je obsaženo: Koření. Kompletní receptura položky: Lodi, Kalifornie. Středně plné, příjemná kyselina, dlouhý závěr, tmavé ovoce, černý rybíz, koření, skořice a hřebíček.."
          },
          {
            "id": "cervene-cabernet-lapis-luna-ing-8",
            "question": "Která z následujících surovin patří do podsložky Cabernet Sauvignon – Lapis Luna?",
            "correctAnswer": "Skořice a hřebíček",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Cabernet Sauvignon – Lapis Luna je obsaženo: Skořice a hřebíček. Kompletní receptura položky: Lodi, Kalifornie. Středně plné, příjemná kyselina, dlouhý závěr, tmavé ovoce, černý rybíz, koření, skořice a hřebíček.."
          },
          {
            "id": "cervene-cabernet-lapis-luna-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Cabernet Sauvignon – Lapis Luna?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Cabernet Sauvignon – Lapis Luna obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "cervene-zinfandel-hendry",
        "name": "Zinfandel Hendry Ranch HRW",
        "weight": "0,75 l",
        "price": "995,-",
        "allergens": [
          "12"
        ],
        "description": "Napa Valley, Kalifornie. Plné víno, mohutné, dlouhý kořenitý závěr, šťavnatá kyselinka, chuť tmavé bobulovité ovoce, sladké koření a hořká čokoláda.",
        "questions": [
          {
            "id": "cervene-zinfandel-hendry-ing-1",
            "question": "Která z následujících surovin patří do podsložky Zinfandel Hendry Ranch HRW?",
            "correctAnswer": "Napa Valley",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Zinfandel Hendry Ranch HRW je obsaženo: Napa Valley. Kompletní receptura položky: Napa Valley, Kalifornie. Plné víno, mohutné, dlouhý kořenitý závěr, šťavnatá kyselinka, chuť tmavé bobulovité ovoce, sladké koření a hořká čokoláda.."
          },
          {
            "id": "cervene-zinfandel-hendry-ing-2",
            "question": "Která z následujících surovin patří do podsložky Zinfandel Hendry Ranch HRW?",
            "correctAnswer": "Kalifornie. Plné víno",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Zinfandel Hendry Ranch HRW je obsaženo: Kalifornie. Plné víno. Kompletní receptura položky: Napa Valley, Kalifornie. Plné víno, mohutné, dlouhý kořenitý závěr, šťavnatá kyselinka, chuť tmavé bobulovité ovoce, sladké koření a hořká čokoláda.."
          },
          {
            "id": "cervene-zinfandel-hendry-ing-3",
            "question": "Která z následujících surovin patří do podsložky Zinfandel Hendry Ranch HRW?",
            "correctAnswer": "Mohutné",
            "distractors": [
              "Vinařství Michlovský",
              "Mikulovská podoblast"
            ],
            "explanation": "V podsložce Zinfandel Hendry Ranch HRW je obsaženo: Mohutné. Kompletní receptura položky: Napa Valley, Kalifornie. Plné víno, mohutné, dlouhý kořenitý závěr, šťavnatá kyselinka, chuť tmavé bobulovité ovoce, sladké koření a hořká čokoláda.."
          },
          {
            "id": "cervene-zinfandel-hendry-ing-4",
            "question": "Která z následujících surovin patří do podsložky Zinfandel Hendry Ranch HRW?",
            "correctAnswer": "Dlouhý kořenitý závěr",
            "distractors": [
              "Velkopavlovická podoblast",
              "Mělnická podoblast"
            ],
            "explanation": "V podsložce Zinfandel Hendry Ranch HRW je obsaženo: Dlouhý kořenitý závěr. Kompletní receptura položky: Napa Valley, Kalifornie. Plné víno, mohutné, dlouhý kořenitý závěr, šťavnatá kyselinka, chuť tmavé bobulovité ovoce, sladké koření a hořká čokoláda.."
          },
          {
            "id": "cervene-zinfandel-hendry-ing-5",
            "question": "Která z následujících surovin patří do podsložky Zinfandel Hendry Ranch HRW?",
            "correctAnswer": "Šťavnatá kyselinka",
            "distractors": [
              "Kyselina a minerální tóny",
              "Pozdní sběr"
            ],
            "explanation": "V podsložce Zinfandel Hendry Ranch HRW je obsaženo: Šťavnatá kyselinka. Kompletní receptura položky: Napa Valley, Kalifornie. Plné víno, mohutné, dlouhý kořenitý závěr, šťavnatá kyselinka, chuť tmavé bobulovité ovoce, sladké koření a hořká čokoláda.."
          },
          {
            "id": "cervene-zinfandel-hendry-ing-6",
            "question": "Která z následujících surovin patří do podsložky Zinfandel Hendry Ranch HRW?",
            "correctAnswer": "Chuť tmavé bobulovité ovoce",
            "distractors": [
              "Zrání v dubovém sudu",
              "Vinařství Gotberg"
            ],
            "explanation": "V podsložce Zinfandel Hendry Ranch HRW je obsaženo: Chuť tmavé bobulovité ovoce. Kompletní receptura položky: Napa Valley, Kalifornie. Plné víno, mohutné, dlouhý kořenitý závěr, šťavnatá kyselinka, chuť tmavé bobulovité ovoce, sladké koření a hořká čokoláda.."
          },
          {
            "id": "cervene-zinfandel-hendry-ing-7",
            "question": "Která pivovarská surovina nebo vlastnost charakterizuje Zinfandel Hendry Ranch HRW?",
            "correctAnswer": "Sladké koření a hořká čokoláda",
            "distractors": [
              "Vinařství Kolby",
              "Vinařství Kraus"
            ],
            "explanation": "V podsložce Zinfandel Hendry Ranch HRW je obsaženo: Sladké koření a hořká čokoláda. Kompletní receptura položky: Napa Valley, Kalifornie. Plné víno, mohutné, dlouhý kořenitý závěr, šťavnatá kyselinka, chuť tmavé bobulovité ovoce, sladké koření a hořká čokoláda.."
          },
          {
            "id": "cervene-zinfandel-hendry-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka Zinfandel Hendry Ranch HRW?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Zinfandel Hendry Ranch HRW obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      }
    ]
  },
  {
    "id": "aperitivy",
    "name": "aperitivy",
    "badge": "Aperitivy",
    "description": "Svěží bublinkové aperitivy, hořké bitters, vermuty a vyzrálé portské víno",
    "iconName": "Wine",
    "items": [
      {
        "id": "aperol-spritz",
        "name": "Aperol Spritz",
        "price": "155 Kč",
        "description": "Aperol, charmat, soda, led, plátek pomeranče",
        "questions": [
          {
            "id": "aperol-spritz-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Aperol Spritz?",
            "correctAnswer": "Aperol",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Aperol Spritz je obsaženo: Aperol. Kompletní receptura položky: Aperol, charmat, soda, led, plátek pomeranče."
          },
          {
            "id": "aperol-spritz-ing-2",
            "question": "Která z následujících surovin patří do podsložky Aperol Spritz?",
            "correctAnswer": "Charmat",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Aperol Spritz je obsaženo: Charmat. Kompletní receptura položky: Aperol, charmat, soda, led, plátek pomeranče."
          },
          {
            "id": "aperol-spritz-ing-3",
            "question": "Která z následujících surovin patří do podsložky Aperol Spritz?",
            "correctAnswer": "Soda",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Aperol Spritz je obsaženo: Soda. Kompletní receptura položky: Aperol, charmat, soda, led, plátek pomeranče."
          },
          {
            "id": "aperol-spritz-ing-4",
            "question": "Která z následujících surovin patří do podsložky Aperol Spritz?",
            "correctAnswer": "Led",
            "distractors": [
              "Čerstvá limetová šťáva",
              "Sodová voda"
            ],
            "explanation": "V podsložce Aperol Spritz je obsaženo: Led. Kompletní receptura položky: Aperol, charmat, soda, led, plátek pomeranče."
          },
          {
            "id": "aperol-spritz-ing-5",
            "question": "Která z následujících surovin patří do podsložky Aperol Spritz?",
            "correctAnswer": "Plátek pomeranče",
            "distractors": [
              "Tonik Thomas Henry",
              "Řemeslný gin"
            ],
            "explanation": "V podsložce Aperol Spritz je obsaženo: Plátek pomeranče. Kompletní receptura položky: Aperol, charmat, soda, led, plátek pomeranče."
          }
        ]
      },
      {
        "id": "hugo-spritz",
        "name": "Hugo Spritz",
        "price": "155 Kč",
        "description": "charmat, bezový elixír, limeta, máta, soda",
        "questions": [
          {
            "id": "hugo-spritz-ing-1",
            "question": "Která z následujících surovin patří do podsložky Hugo Spritz?",
            "correctAnswer": "Charmat",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Hugo Spritz je obsaženo: Charmat. Kompletní receptura položky: charmat, bezový elixír, limeta, máta, soda."
          },
          {
            "id": "hugo-spritz-ing-2",
            "question": "Která z následujících surovin patří do podsložky Hugo Spritz?",
            "correctAnswer": "Bezový elixír",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Hugo Spritz je obsaženo: Bezový elixír. Kompletní receptura položky: charmat, bezový elixír, limeta, máta, soda."
          },
          {
            "id": "hugo-spritz-ing-3",
            "question": "Která z následujících surovin patří do podsložky Hugo Spritz?",
            "correctAnswer": "Limeta",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Hugo Spritz je obsaženo: Limeta. Kompletní receptura položky: charmat, bezový elixír, limeta, máta, soda."
          },
          {
            "id": "hugo-spritz-ing-4",
            "question": "Která z následujících surovin patří do podsložky Hugo Spritz?",
            "correctAnswer": "Máta",
            "distractors": [
              "Čerstvá limetová šťáva",
              "Sodová voda"
            ],
            "explanation": "V podsložce Hugo Spritz je obsaženo: Máta. Kompletní receptura položky: charmat, bezový elixír, limeta, máta, soda."
          },
          {
            "id": "hugo-spritz-ing-5",
            "question": "Která z následujících surovin patří do podsložky Hugo Spritz?",
            "correctAnswer": "Soda",
            "distractors": [
              "Tonik Thomas Henry",
              "Řemeslný gin"
            ],
            "explanation": "V podsložce Hugo Spritz je obsaženo: Soda. Kompletní receptura položky: charmat, bezový elixír, limeta, máta, soda."
          }
        ]
      },
      {
        "id": "mimosa",
        "name": "Mimosa",
        "price": "168 Kč",
        "description": "charmat, pomerančový fresh, cukrový sirup",
        "questions": [
          {
            "id": "mimosa-ing-1",
            "question": "Která z následujících surovin patří do podsložky Mimosa?",
            "correctAnswer": "Charmat",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Mimosa je obsaženo: Charmat. Kompletní receptura položky: charmat, pomerančový fresh, cukrový sirup."
          },
          {
            "id": "mimosa-ing-2",
            "question": "Která z následujících surovin patří do podsložky Mimosa?",
            "correctAnswer": "Pomerančový fresh",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Mimosa je obsaženo: Pomerančový fresh. Kompletní receptura položky: charmat, pomerančový fresh, cukrový sirup."
          },
          {
            "id": "mimosa-ing-3",
            "question": "Která z následujících surovin patří do podsložky Mimosa?",
            "correctAnswer": "Cukrový sirup",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Mimosa je obsaženo: Cukrový sirup. Kompletní receptura položky: charmat, pomerančový fresh, cukrový sirup."
          }
        ]
      },
      {
        "id": "kir",
        "name": "Kir",
        "price": "165 Kč",
        "description": "créme de cassis, charmat",
        "questions": [
          {
            "id": "kir-ing-1",
            "question": "Která z následujících surovin patří do podsložky Kir?",
            "correctAnswer": "Créme de cassis",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Kir je obsaženo: Créme de cassis. Kompletní receptura položky: créme de cassis, charmat."
          },
          {
            "id": "kir-ing-2",
            "question": "Která z následujících surovin patří do podsložky Kir?",
            "correctAnswer": "Charmat",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Kir je obsaženo: Charmat. Kompletní receptura položky: créme de cassis, charmat."
          }
        ]
      },
      {
        "id": "campari-bitter",
        "name": "Campari Bitter",
        "price": "87 Kč",
        "weight": "0,06l",
        "description": "0,06l ikonický italský hořký bylinný aperitiv",
        "questions": [
          {
            "id": "campari-bitter-vol",
            "question": "Jaký je servírovací objem / míra podsložky Campari Bitter?",
            "correctAnswer": "0,06 l",
            "distractors": [
              "0,08 l",
              "0,04 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Campari Bitter je 0,06 l."
          },
          {
            "id": "campari-bitter-ing-1",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Campari Bitter?",
            "correctAnswer": "Ikonický italský hořký bylinný aperitiv",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Campari Bitter je obsaženo: Ikonický italský hořký bylinný aperitiv. Kompletní receptura položky: 0,06l ikonický italský hořký bylinný aperitiv."
          }
        ]
      },
      {
        "id": "martini-dry",
        "name": "Martini Dry",
        "price": "79 Kč",
        "weight": "0,08l",
        "description": "0,08l klasický suchý vermut s tóny bylin a citrusů",
        "questions": [
          {
            "id": "martini-dry-vol",
            "question": "Jaký je servírovací objem / míra podsložky Martini Dry?",
            "correctAnswer": "0,08 l",
            "distractors": [
              "0,06 l",
              "0,1 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Martini Dry je 0,08 l."
          },
          {
            "id": "martini-dry-ing-1",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Martini Dry?",
            "correctAnswer": "Klasický suchý vermut s tóny bylin a citrusů",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Martini Dry je obsaženo: Klasický suchý vermut s tóny bylin a citrusů. Kompletní receptura položky: 0,08l klasický suchý vermut s tóny bylin a citrusů."
          }
        ]
      },
      {
        "id": "cinzano-rosso-bianco",
        "name": "Cinzano Rosso / Bianco",
        "price": "79 Kč",
        "weight": "0,08l",
        "description": "0,08l tradiční italský vermut, červený sladce bylinný nebo bílý vanilkový",
        "questions": [
          {
            "id": "cinzano-rosso-bianco-vol",
            "question": "Jaký je servírovací objem / míra podsložky Cinzano Rosso / Bianco?",
            "correctAnswer": "0,08 l",
            "distractors": [
              "0,06 l",
              "0,1 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Cinzano Rosso / Bianco je 0,08 l."
          },
          {
            "id": "cinzano-rosso-bianco-ing-1",
            "question": "Která z následujících surovin patří do podsložky Cinzano Rosso / Bianco?",
            "correctAnswer": "Tradiční italský vermut",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Cinzano Rosso / Bianco je obsaženo: Tradiční italský vermut. Kompletní receptura položky: 0,08l tradiční italský vermut, červený sladce bylinný nebo bílý vanilkový."
          },
          {
            "id": "cinzano-rosso-bianco-ing-2",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Cinzano Rosso / Bianco?",
            "correctAnswer": "Červený sladce bylinný nebo bílý vanilkový",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Cinzano Rosso / Bianco je obsaženo: Červený sladce bylinný nebo bílý vanilkový. Kompletní receptura položky: 0,08l tradiční italský vermut, červený sladce bylinný nebo bílý vanilkový."
          }
        ]
      },
      {
        "id": "grahams-porto-10y",
        "name": "Grahams Porto Tawny 10y",
        "price": "225 Kč",
        "weight": "0,06l",
        "description": "0,06l prémiové desetileté portugalské portské víno zrající v dubových sudech s tóny ořechů, fíků a rozinek",
        "questions": [
          {
            "id": "grahams-porto-10y-vol",
            "question": "Jaký je servírovací objem / míra podsložky Grahams Porto Tawny 10y?",
            "correctAnswer": "0,06 l",
            "distractors": [
              "0,08 l",
              "0,04 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Grahams Porto Tawny 10y je 0,06 l."
          },
          {
            "id": "grahams-porto-10y-ing-1",
            "question": "Která z následujících surovin patří do podsložky Grahams Porto Tawny 10y?",
            "correctAnswer": "Prémiové desetileté portugalské portské víno zrající v dubových sudech s tóny ořechů",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Grahams Porto Tawny 10y je obsaženo: Prémiové desetileté portugalské portské víno zrající v dubových sudech s tóny ořechů. Kompletní receptura položky: 0,06l prémiové desetileté portugalské portské víno zrající v dubových sudech s tóny ořechů, fíků a rozinek."
          },
          {
            "id": "grahams-porto-10y-ing-2",
            "question": "Která z následujících surovin patří do podsložky Grahams Porto Tawny 10y?",
            "correctAnswer": "Fíků a rozinek",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Grahams Porto Tawny 10y je obsaženo: Fíků a rozinek. Kompletní receptura položky: 0,06l prémiové desetileté portugalské portské víno zrající v dubových sudech s tóny ořechů, fíků a rozinek."
          }
        ]
      }
    ]
  },
  {
    "id": "nealkoholicke-aperitivy-a-koktejly",
    "name": "nealkoholické aperitivy a koktejly",
    "badge": "Nealko koktejly",
    "description": "Sofistikované nealkoholické míchané nápoje, nealko giny a italské bitters",
    "iconName": "GlassWater",
    "items": [
      {
        "id": "crodino",
        "name": "Crodino",
        "price": "109 Kč",
        "weight": "0,175l",
        "description": "0,175l nealkoholický bitter, legendární italský hořkosladký aperitiv na ledu s plátkem pomeranče",
        "questions": [
          {
            "id": "crodino-vol",
            "question": "Jaký je servírovací objem / míra podsložky Crodino?",
            "correctAnswer": "0,175 l",
            "distractors": [
              "0,25 l",
              "0,1 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Crodino je 0,175 l."
          },
          {
            "id": "crodino-ing-1",
            "question": "Která z následujících surovin patří do podsložky Crodino?",
            "correctAnswer": "Nealkoholický bitter",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Crodino je obsaženo: Nealkoholický bitter. Kompletní receptura položky: 0,175l nealkoholický bitter, legendární italský hořkosladký aperitiv na ledu s plátkem pomeranče."
          },
          {
            "id": "crodino-ing-2",
            "question": "Která pivovarská surovina nebo vlastnost charakterizuje Crodino?",
            "correctAnswer": "Legendární italský hořkosladký aperitiv na ledu s plátkem pomeranče",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Crodino je obsaženo: Legendární italský hořkosladký aperitiv na ledu s plátkem pomeranče. Kompletní receptura položky: 0,175l nealkoholický bitter, legendární italský hořkosladký aperitiv na ledu s plátkem pomeranče."
          }
        ]
      },
      {
        "id": "martini-floreale-tonic",
        "name": "Martini Floreale Alcohol free & Thomas Henry Tonic",
        "price": "165 Kč",
        "description": "nealkoholické Martini, tonik, sušený pomeranč",
        "questions": [
          {
            "id": "martini-floreale-tonic-ing-1",
            "question": "Která z následujících surovin patří do podsložky Martini Floreale Alcohol free & Thomas Henry Tonic?",
            "correctAnswer": "Nealkoholické Martini",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Martini Floreale Alcohol free & Thomas Henry Tonic je obsaženo: Nealkoholické Martini. Kompletní receptura položky: nealkoholické Martini, tonik, sušený pomeranč."
          },
          {
            "id": "martini-floreale-tonic-ing-2",
            "question": "Která z následujících surovin patří do podsložky Martini Floreale Alcohol free & Thomas Henry Tonic?",
            "correctAnswer": "Tonik",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Martini Floreale Alcohol free & Thomas Henry Tonic je obsaženo: Tonik. Kompletní receptura položky: nealkoholické Martini, tonik, sušený pomeranč."
          },
          {
            "id": "martini-floreale-tonic-ing-3",
            "question": "Která z následujících surovin patří do podsložky Martini Floreale Alcohol free & Thomas Henry Tonic?",
            "correctAnswer": "Sušený pomeranč",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Martini Floreale Alcohol free & Thomas Henry Tonic je obsaženo: Sušený pomeranč. Kompletní receptura položky: nealkoholické Martini, tonik, sušený pomeranč."
          }
        ]
      },
      {
        "id": "bitter-soda-gasco",
        "name": "Bitter soda J.Gasco",
        "price": "115 Kč",
        "weight": "0,2l",
        "description": "0,2l nealkoholický bitter soda, prémiová italská řemeslná hořká soda",
        "questions": [
          {
            "id": "bitter-soda-gasco-vol",
            "question": "Jaký je servírovací objem / míra podsložky Bitter soda J.Gasco?",
            "correctAnswer": "0,2 l",
            "distractors": [
              "0,3 l",
              "0,1 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Bitter soda J.Gasco je 0,2 l."
          },
          {
            "id": "bitter-soda-gasco-ing-1",
            "question": "Která z následujících surovin patří do podsložky Bitter soda J.Gasco?",
            "correctAnswer": "Nealkoholický bitter soda",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Bitter soda J.Gasco je obsaženo: Nealkoholický bitter soda. Kompletní receptura položky: 0,2l nealkoholický bitter soda, prémiová italská řemeslná hořká soda."
          },
          {
            "id": "bitter-soda-gasco-ing-2",
            "question": "Která z následujících surovin patří do podsložky Bitter soda J.Gasco?",
            "correctAnswer": "Prémiová italská řemeslná hořká soda",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Bitter soda J.Gasco je obsaženo: Prémiová italská řemeslná hořká soda. Kompletní receptura položky: 0,2l nealkoholický bitter soda, prémiová italská řemeslná hořká soda."
          }
        ]
      },
      {
        "id": "tanqueray-00-tonic",
        "name": "Tanqueray Alcohol Free & Fever-Tree Tonic",
        "price": "199 Kč",
        "description": "nealkoholický G&T s limetou, destilovaný nealko jalovcový spirit Tanqueray 0.0%",
        "questions": [
          {
            "id": "tanqueray-00-tonic-ing-1",
            "question": "Která z následujících surovin patří do podsložky Tanqueray Alcohol Free & Fever-Tree Tonic?",
            "correctAnswer": "Nealkoholický G&T s limetou",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Tanqueray Alcohol Free & Fever-Tree Tonic je obsaženo: Nealkoholický G&T s limetou. Kompletní receptura položky: nealkoholický G&T s limetou, destilovaný nealko jalovcový spirit Tanqueray 0.0%."
          },
          {
            "id": "tanqueray-00-tonic-ing-2",
            "question": "Která z následujících surovin patří do podsložky Tanqueray Alcohol Free & Fever-Tree Tonic?",
            "correctAnswer": "Destilovaný nealko jalovcový spirit Tanqueray 0.0%",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Tanqueray Alcohol Free & Fever-Tree Tonic je obsaženo: Destilovaný nealko jalovcový spirit Tanqueray 0.0%. Kompletní receptura položky: nealkoholický G&T s limetou, destilovaný nealko jalovcový spirit Tanqueray 0.0%."
          }
        ]
      }
    ]
  },
  {
    "id": "klasicke-koktejly",
    "name": "klasické koktejly",
    "badge": "Klasické koktejly",
    "description": "Celosvětově uznávané barmanské klasiky namíchané z prvotřídních destilátů",
    "iconName": "Martini",
    "items": [
      {
        "id": "negroni",
        "name": "Negroni",
        "price": "195 Kč",
        "description": "gin, Campari, Cinzano rosso",
        "questions": [
          {
            "id": "negroni-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Negroni?",
            "correctAnswer": "Gin",
            "distractors": [
              "Stařený rum",
              "Modrá agáve (tequila)"
            ],
            "explanation": "V podsložce Negroni je obsaženo: Gin. Kompletní receptura položky: gin, Campari, Cinzano rosso."
          },
          {
            "id": "negroni-ing-2",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Negroni?",
            "correctAnswer": "Campari",
            "distractors": [
              "Cointreau",
              "Čerstvá limetová šťáva"
            ],
            "explanation": "V podsložce Negroni je obsaženo: Campari. Kompletní receptura položky: gin, Campari, Cinzano rosso."
          },
          {
            "id": "negroni-ing-3",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Negroni?",
            "correctAnswer": "Cinzano rosso",
            "distractors": [
              "Sodová voda",
              "Tonik Thomas Henry"
            ],
            "explanation": "V podsložce Negroni je obsaženo: Cinzano rosso. Kompletní receptura položky: gin, Campari, Cinzano rosso."
          }
        ]
      },
      {
        "id": "margarita",
        "name": "Margarita",
        "price": "185 Kč",
        "description": "tequila, Cointreau, limetová šťáva",
        "questions": [
          {
            "id": "margarita-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Margarita?",
            "correctAnswer": "Tequila",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Margarita je obsaženo: Tequila. Kompletní receptura položky: tequila, Cointreau, limetová šťáva."
          },
          {
            "id": "margarita-ing-2",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Margarita?",
            "correctAnswer": "Cointreau",
            "distractors": [
              "Campari",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Margarita je obsaženo: Cointreau. Kompletní receptura položky: tequila, Cointreau, limetová šťáva."
          },
          {
            "id": "margarita-ing-3",
            "question": "Která z následujících surovin patří do podsložky Margarita?",
            "correctAnswer": "Limetová šťáva",
            "distractors": [
              "Sodová voda",
              "Tonik Thomas Henry"
            ],
            "explanation": "V podsložce Margarita je obsaženo: Limetová šťáva. Kompletní receptura položky: tequila, Cointreau, limetová šťáva."
          }
        ]
      },
      {
        "id": "mojito",
        "name": "Mojito",
        "price": "185 Kč",
        "description": "rum, máta, limeta, třtinový cukr, soda",
        "questions": [
          {
            "id": "mojito-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Mojito?",
            "correctAnswer": "Rum",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Mojito je obsaženo: Rum. Kompletní receptura položky: rum, máta, limeta, třtinový cukr, soda."
          },
          {
            "id": "mojito-ing-2",
            "question": "Která z následujících surovin patří do podsložky Mojito?",
            "correctAnswer": "Máta",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Mojito je obsaženo: Máta. Kompletní receptura položky: rum, máta, limeta, třtinový cukr, soda."
          },
          {
            "id": "mojito-ing-3",
            "question": "Která z následujících surovin patří do podsložky Mojito?",
            "correctAnswer": "Limeta",
            "distractors": [
              "Čerstvá limetová šťáva",
              "Sodová voda"
            ],
            "explanation": "V podsložce Mojito je obsaženo: Limeta. Kompletní receptura položky: rum, máta, limeta, třtinový cukr, soda."
          },
          {
            "id": "mojito-ing-4",
            "question": "Která z následujících surovin patří do podsložky Mojito?",
            "correctAnswer": "Třtinový cukr",
            "distractors": [
              "Tonik Thomas Henry",
              "Řemeslný gin"
            ],
            "explanation": "V podsložce Mojito je obsaženo: Třtinový cukr. Kompletní receptura položky: rum, máta, limeta, třtinový cukr, soda."
          },
          {
            "id": "mojito-ing-5",
            "question": "Která z následujících surovin patří do podsložky Mojito?",
            "correctAnswer": "Soda",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Mojito je obsaženo: Soda. Kompletní receptura položky: rum, máta, limeta, třtinový cukr, soda."
          }
        ]
      },
      {
        "id": "frozen-strawberry-daiquiri",
        "name": "Frozen Strawberry Daiquiri",
        "price": "195 Kč",
        "description": "rum, limetová šťáva, cukrový sirup, jahody rozmixované s ledovou tříští",
        "questions": [
          {
            "id": "frozen-strawberry-daiquiri-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Frozen Strawberry Daiquiri?",
            "correctAnswer": "Rum",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Frozen Strawberry Daiquiri je obsaženo: Rum. Kompletní receptura položky: rum, limetová šťáva, cukrový sirup, jahody rozmixované s ledovou tříští."
          },
          {
            "id": "frozen-strawberry-daiquiri-ing-2",
            "question": "Která z následujících surovin patří do podsložky Frozen Strawberry Daiquiri?",
            "correctAnswer": "Limetová šťáva",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Frozen Strawberry Daiquiri je obsaženo: Limetová šťáva. Kompletní receptura položky: rum, limetová šťáva, cukrový sirup, jahody rozmixované s ledovou tříští."
          },
          {
            "id": "frozen-strawberry-daiquiri-ing-3",
            "question": "Která z následujících surovin patří do podsložky Frozen Strawberry Daiquiri?",
            "correctAnswer": "Cukrový sirup",
            "distractors": [
              "Sodová voda",
              "Tonik Thomas Henry"
            ],
            "explanation": "V podsložce Frozen Strawberry Daiquiri je obsaženo: Cukrový sirup. Kompletní receptura položky: rum, limetová šťáva, cukrový sirup, jahody rozmixované s ledovou tříští."
          },
          {
            "id": "frozen-strawberry-daiquiri-ing-4",
            "question": "Která z následujících surovin patří do podsložky Frozen Strawberry Daiquiri?",
            "correctAnswer": "Jahody rozmixované s ledovou tříští",
            "distractors": [
              "Řemeslný gin",
              "Modrá agáve (tequila)"
            ],
            "explanation": "V podsložce Frozen Strawberry Daiquiri je obsaženo: Jahody rozmixované s ledovou tříští. Kompletní receptura položky: rum, limetová šťáva, cukrový sirup, jahody rozmixované s ledovou tříští."
          }
        ]
      },
      {
        "id": "cuba-libre",
        "name": "Cuba Libre",
        "price": "165 Kč",
        "description": "rum, citrónová šťáva, Coca Cola",
        "questions": [
          {
            "id": "cuba-libre-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Cuba Libre?",
            "correctAnswer": "Rum",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Cuba Libre je obsaženo: Rum. Kompletní receptura položky: rum, citrónová šťáva, Coca Cola."
          },
          {
            "id": "cuba-libre-ing-2",
            "question": "Která z následujících surovin patří do podsložky Cuba Libre?",
            "correctAnswer": "Citrónová šťáva",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Cuba Libre je obsaženo: Citrónová šťáva. Kompletní receptura položky: rum, citrónová šťáva, Coca Cola."
          },
          {
            "id": "cuba-libre-ing-3",
            "question": "Která z následujících surovin patří do podsložky Cuba Libre?",
            "correctAnswer": "Coca Cola",
            "distractors": [
              "Čerstvá limetová šťáva",
              "Sodová voda"
            ],
            "explanation": "V podsložce Cuba Libre je obsaženo: Coca Cola. Kompletní receptura položky: rum, citrónová šťáva, Coca Cola."
          }
        ]
      },
      {
        "id": "mai-tai",
        "name": "Mai-Tai",
        "price": "199 Kč",
        "description": "bílý a tmavý rum, curacao, mandlový likér, limetová šťáva",
        "questions": [
          {
            "id": "mai-tai-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Mai-Tai?",
            "correctAnswer": "Bílý a tmavý rum",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Mai-Tai je obsaženo: Bílý a tmavý rum. Kompletní receptura položky: bílý a tmavý rum, curacao, mandlový likér, limetová šťáva."
          },
          {
            "id": "mai-tai-ing-2",
            "question": "Která z následujících surovin patří do podsložky Mai-Tai?",
            "correctAnswer": "Curacao",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Mai-Tai je obsaženo: Curacao. Kompletní receptura položky: bílý a tmavý rum, curacao, mandlový likér, limetová šťáva."
          },
          {
            "id": "mai-tai-ing-3",
            "question": "Která z následujících surovin patří do podsložky Mai-Tai?",
            "correctAnswer": "Mandlový likér",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Mai-Tai je obsaženo: Mandlový likér. Kompletní receptura položky: bílý a tmavý rum, curacao, mandlový likér, limetová šťáva."
          },
          {
            "id": "mai-tai-ing-4",
            "question": "Která z následujících surovin patří do podsložky Mai-Tai?",
            "correctAnswer": "Limetová šťáva",
            "distractors": [
              "Sodová voda",
              "Tonik Thomas Henry"
            ],
            "explanation": "V podsložce Mai-Tai je obsaženo: Limetová šťáva. Kompletní receptura položky: bílý a tmavý rum, curacao, mandlový likér, limetová šťáva."
          }
        ]
      },
      {
        "id": "porn-star-martini",
        "name": "Porn star Martini",
        "price": "232 Kč",
        "description": "vanilková vodka, mučenkový likér, vanilkový sirup, limetová šťáva, charmat",
        "questions": [
          {
            "id": "porn-star-martini-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Porn star Martini?",
            "correctAnswer": "Vanilková vodka",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Porn star Martini je obsaženo: Vanilková vodka. Kompletní receptura položky: vanilková vodka, mučenkový likér, vanilkový sirup, limetová šťáva, charmat."
          },
          {
            "id": "porn-star-martini-ing-2",
            "question": "Která z následujících surovin patří do podsložky Porn star Martini?",
            "correctAnswer": "Mučenkový likér",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Porn star Martini je obsaženo: Mučenkový likér. Kompletní receptura položky: vanilková vodka, mučenkový likér, vanilkový sirup, limetová šťáva, charmat."
          },
          {
            "id": "porn-star-martini-ing-3",
            "question": "Která z následujících surovin patří do podsložky Porn star Martini?",
            "correctAnswer": "Vanilkový sirup",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Porn star Martini je obsaženo: Vanilkový sirup. Kompletní receptura položky: vanilková vodka, mučenkový likér, vanilkový sirup, limetová šťáva, charmat."
          },
          {
            "id": "porn-star-martini-ing-4",
            "question": "Která z následujících surovin patří do podsložky Porn star Martini?",
            "correctAnswer": "Limetová šťáva",
            "distractors": [
              "Sodová voda",
              "Tonik Thomas Henry"
            ],
            "explanation": "V podsložce Porn star Martini je obsaženo: Limetová šťáva. Kompletní receptura položky: vanilková vodka, mučenkový likér, vanilkový sirup, limetová šťáva, charmat."
          },
          {
            "id": "porn-star-martini-ing-5",
            "question": "Která z následujících surovin patří do podsložky Porn star Martini?",
            "correctAnswer": "Charmat",
            "distractors": [
              "Řemeslný gin",
              "Bílý rum"
            ],
            "explanation": "V podsložce Porn star Martini je obsaženo: Charmat. Kompletní receptura položky: vanilková vodka, mučenkový likér, vanilkový sirup, limetová šťáva, charmat."
          }
        ]
      },
      {
        "id": "skinny-bitch",
        "name": "Skinny bitch",
        "price": "125 Kč",
        "description": "vodka, limetová šťáva, soda",
        "questions": [
          {
            "id": "skinny-bitch-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Skinny bitch?",
            "correctAnswer": "Vodka",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Skinny bitch je obsaženo: Vodka. Kompletní receptura položky: vodka, limetová šťáva, soda."
          },
          {
            "id": "skinny-bitch-ing-2",
            "question": "Která z následujících surovin patří do podsložky Skinny bitch?",
            "correctAnswer": "Limetová šťáva",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Skinny bitch je obsaženo: Limetová šťáva. Kompletní receptura položky: vodka, limetová šťáva, soda."
          },
          {
            "id": "skinny-bitch-ing-3",
            "question": "Která z následujících surovin patří do podsložky Skinny bitch?",
            "correctAnswer": "Soda",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Skinny bitch je obsaženo: Soda. Kompletní receptura položky: vodka, limetová šťáva, soda."
          }
        ]
      },
      {
        "id": "cosmopolitan",
        "name": "Cosmopolitan",
        "price": "160 Kč",
        "description": "vodka, Cointreau, brusinkový džus, limetová šťáva",
        "questions": [
          {
            "id": "cosmopolitan-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Cosmopolitan?",
            "correctAnswer": "Vodka",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Cosmopolitan je obsaženo: Vodka. Kompletní receptura položky: vodka, Cointreau, brusinkový džus, limetová šťáva."
          },
          {
            "id": "cosmopolitan-ing-2",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Cosmopolitan?",
            "correctAnswer": "Cointreau",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Cosmopolitan je obsaženo: Cointreau. Kompletní receptura položky: vodka, Cointreau, brusinkový džus, limetová šťáva."
          },
          {
            "id": "cosmopolitan-ing-3",
            "question": "Která z následujících surovin patří do podsložky Cosmopolitan?",
            "correctAnswer": "Brusinkový džus",
            "distractors": [
              "Cinzano rosso",
              "Sodová voda"
            ],
            "explanation": "V podsložce Cosmopolitan je obsaženo: Brusinkový džus. Kompletní receptura položky: vodka, Cointreau, brusinkový džus, limetová šťáva."
          },
          {
            "id": "cosmopolitan-ing-4",
            "question": "Která z následujících surovin patří do podsložky Cosmopolitan?",
            "correctAnswer": "Limetová šťáva",
            "distractors": [
              "Tonik Thomas Henry",
              "Řemeslný gin"
            ],
            "explanation": "V podsložce Cosmopolitan je obsaženo: Limetová šťáva. Kompletní receptura položky: vodka, Cointreau, brusinkový džus, limetová šťáva."
          }
        ]
      },
      {
        "id": "moscow-mule",
        "name": "Moscow mule",
        "price": "185 Kč",
        "description": "vodka, limetová šťáva, ginger beer",
        "questions": [
          {
            "id": "moscow-mule-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Moscow mule?",
            "correctAnswer": "Vodka",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Moscow mule je obsaženo: Vodka. Kompletní receptura položky: vodka, limetová šťáva, ginger beer."
          },
          {
            "id": "moscow-mule-ing-2",
            "question": "Která z následujících surovin patří do podsložky Moscow mule?",
            "correctAnswer": "Limetová šťáva",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Moscow mule je obsaženo: Limetová šťáva. Kompletní receptura položky: vodka, limetová šťáva, ginger beer."
          },
          {
            "id": "moscow-mule-ing-3",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Moscow mule?",
            "correctAnswer": "Ginger beer",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Moscow mule je obsaženo: Ginger beer. Kompletní receptura položky: vodka, limetová šťáva, ginger beer."
          }
        ]
      },
      {
        "id": "french-martini",
        "name": "French Martini",
        "price": "195 Kč",
        "description": "vodka, malinový likér, ananasový džus",
        "questions": [
          {
            "id": "french-martini-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje French Martini?",
            "correctAnswer": "Vodka",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce French Martini je obsaženo: Vodka. Kompletní receptura položky: vodka, malinový likér, ananasový džus."
          },
          {
            "id": "french-martini-ing-2",
            "question": "Která z následujících surovin patří do podsložky French Martini?",
            "correctAnswer": "Malinový likér",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce French Martini je obsaženo: Malinový likér. Kompletní receptura položky: vodka, malinový likér, ananasový džus."
          },
          {
            "id": "french-martini-ing-3",
            "question": "Která z následujících surovin patří do podsložky French Martini?",
            "correctAnswer": "Ananasový džus",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce French Martini je obsaženo: Ananasový džus. Kompletní receptura položky: vodka, malinový likér, ananasový džus."
          }
        ]
      },
      {
        "id": "espresso-martini",
        "name": "Espresso Martini",
        "price": "195 Kč",
        "description": "vodka, Kahlúa, cukrový sirup, espresso",
        "questions": [
          {
            "id": "espresso-martini-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Espresso Martini?",
            "correctAnswer": "Vodka",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Espresso Martini je obsaženo: Vodka. Kompletní receptura položky: vodka, Kahlúa, cukrový sirup, espresso."
          },
          {
            "id": "espresso-martini-ing-2",
            "question": "Která z následujících surovin patří do podsložky Espresso Martini?",
            "correctAnswer": "Kahlúa",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Espresso Martini je obsaženo: Kahlúa. Kompletní receptura položky: vodka, Kahlúa, cukrový sirup, espresso."
          },
          {
            "id": "espresso-martini-ing-3",
            "question": "Která z následujících surovin patří do podsložky Espresso Martini?",
            "correctAnswer": "Cukrový sirup",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Espresso Martini je obsaženo: Cukrový sirup. Kompletní receptura položky: vodka, Kahlúa, cukrový sirup, espresso."
          },
          {
            "id": "espresso-martini-ing-4",
            "question": "Která z následujících surovin patří do podsložky Espresso Martini?",
            "correctAnswer": "Espresso",
            "distractors": [
              "Čerstvá limetová šťáva",
              "Sodová voda"
            ],
            "explanation": "V podsložce Espresso Martini je obsaženo: Espresso. Kompletní receptura položky: vodka, Kahlúa, cukrový sirup, espresso."
          }
        ]
      },
      {
        "id": "paloma",
        "name": "Paloma",
        "price": "195 Kč",
        "description": "tequila, limetová šťáva, agáve sirup, grapefruit J.Gasco Soda Rosa, sůl",
        "questions": [
          {
            "id": "paloma-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Paloma?",
            "correctAnswer": "Tequila",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Paloma je obsaženo: Tequila. Kompletní receptura položky: tequila, limetová šťáva, agáve sirup, grapefruit J.Gasco Soda Rosa, sůl."
          },
          {
            "id": "paloma-ing-2",
            "question": "Která z následujících surovin patří do podsložky Paloma?",
            "correctAnswer": "Limetová šťáva",
            "distractors": [
              "Campari",
              "Cointreau"
            ],
            "explanation": "V podsložce Paloma je obsaženo: Limetová šťáva. Kompletní receptura položky: tequila, limetová šťáva, agáve sirup, grapefruit J.Gasco Soda Rosa, sůl."
          },
          {
            "id": "paloma-ing-3",
            "question": "Která z následujících surovin patří do podsložky Paloma?",
            "correctAnswer": "Agáve sirup",
            "distractors": [
              "Cinzano rosso",
              "Sodová voda"
            ],
            "explanation": "V podsložce Paloma je obsaženo: Agáve sirup. Kompletní receptura položky: tequila, limetová šťáva, agáve sirup, grapefruit J.Gasco Soda Rosa, sůl."
          },
          {
            "id": "paloma-ing-4",
            "question": "Která z následujících surovin patří do podsložky Paloma?",
            "correctAnswer": "Grapefruit J.Gasco Soda Rosa",
            "distractors": [
              "Tonik Thomas Henry",
              "Řemeslný gin"
            ],
            "explanation": "V podsložce Paloma je obsaženo: Grapefruit J.Gasco Soda Rosa. Kompletní receptura položky: tequila, limetová šťáva, agáve sirup, grapefruit J.Gasco Soda Rosa, sůl."
          },
          {
            "id": "paloma-ing-5",
            "question": "Která z následujících surovin patří do podsložky Paloma?",
            "correctAnswer": "Sůl",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Paloma je obsaženo: Sůl. Kompletní receptura položky: tequila, limetová šťáva, agáve sirup, grapefruit J.Gasco Soda Rosa, sůl."
          }
        ]
      }
    ]
  },
  {
    "id": "koktejly-fuze",
    "name": "koktejly fuze",
    "badge": "Signaturní FUZE",
    "description": "Exkluzivní autorské koktejly navržené přímo pro restauraci a pivovar FUZE v Masaryčce",
    "iconName": "Sparkles",
    "items": [
      {
        "id": "truffle-negroni",
        "name": "Truffle Negroni",
        "price": "205 Kč",
        "description": "truffle gin, Campari, Cinzano rosso",
        "questions": [
          {
            "id": "truffle-negroni-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Truffle Negroni?",
            "correctAnswer": "Truffle gin",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Truffle Negroni je obsaženo: Truffle gin. Kompletní receptura položky: truffle gin, Campari, Cinzano rosso."
          },
          {
            "id": "truffle-negroni-ing-2",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Truffle Negroni?",
            "correctAnswer": "Campari",
            "distractors": [
              "Modrá agáve (tequila)",
              "Cointreau"
            ],
            "explanation": "V podsložce Truffle Negroni je obsaženo: Campari. Kompletní receptura položky: truffle gin, Campari, Cinzano rosso."
          },
          {
            "id": "truffle-negroni-ing-3",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Truffle Negroni?",
            "correctAnswer": "Cinzano rosso",
            "distractors": [
              "Čerstvá limetová šťáva",
              "Sodová voda"
            ],
            "explanation": "V podsložce Truffle Negroni je obsaženo: Cinzano rosso. Kompletní receptura položky: truffle gin, Campari, Cinzano rosso."
          }
        ]
      },
      {
        "id": "fizzy-fuze",
        "name": "Fizzy Fuze",
        "price": "175 Kč",
        "description": "gin, liči džus, ananasový džus, bezinkový sirup, limetová šťáva, soda",
        "questions": [
          {
            "id": "fizzy-fuze-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Fizzy Fuze?",
            "correctAnswer": "Gin",
            "distractors": [
              "Stařený rum",
              "Modrá agáve (tequila)"
            ],
            "explanation": "V podsložce Fizzy Fuze je obsaženo: Gin. Kompletní receptura položky: gin, liči džus, ananasový džus, bezinkový sirup, limetová šťáva, soda."
          },
          {
            "id": "fizzy-fuze-ing-2",
            "question": "Která z následujících surovin patří do podsložky Fizzy Fuze?",
            "correctAnswer": "Liči džus",
            "distractors": [
              "Campari",
              "Cointreau"
            ],
            "explanation": "V podsložce Fizzy Fuze je obsaženo: Liči džus. Kompletní receptura položky: gin, liči džus, ananasový džus, bezinkový sirup, limetová šťáva, soda."
          },
          {
            "id": "fizzy-fuze-ing-3",
            "question": "Která z následujících surovin patří do podsložky Fizzy Fuze?",
            "correctAnswer": "Ananasový džus",
            "distractors": [
              "Cinzano rosso",
              "Sodová voda"
            ],
            "explanation": "V podsložce Fizzy Fuze je obsaženo: Ananasový džus. Kompletní receptura položky: gin, liči džus, ananasový džus, bezinkový sirup, limetová šťáva, soda."
          },
          {
            "id": "fizzy-fuze-ing-4",
            "question": "Která z následujících surovin patří do podsložky Fizzy Fuze?",
            "correctAnswer": "Bezinkový sirup",
            "distractors": [
              "Tonik Thomas Henry",
              "Bílý rum"
            ],
            "explanation": "V podsložce Fizzy Fuze je obsaženo: Bezinkový sirup. Kompletní receptura položky: gin, liči džus, ananasový džus, bezinkový sirup, limetová šťáva, soda."
          },
          {
            "id": "fizzy-fuze-ing-5",
            "question": "Která z následujících surovin patří do podsložky Fizzy Fuze?",
            "correctAnswer": "Limetová šťáva",
            "distractors": [
              "Stařený rum",
              "Modrá agáve (tequila)"
            ],
            "explanation": "V podsložce Fizzy Fuze je obsaženo: Limetová šťáva. Kompletní receptura položky: gin, liči džus, ananasový džus, bezinkový sirup, limetová šťáva, soda."
          },
          {
            "id": "fizzy-fuze-ing-6",
            "question": "Která z následujících surovin patří do podsložky Fizzy Fuze?",
            "correctAnswer": "Soda",
            "distractors": [
              "Campari",
              "Cointreau"
            ],
            "explanation": "V podsložce Fizzy Fuze je obsaženo: Soda. Kompletní receptura položky: gin, liči džus, ananasový džus, bezinkový sirup, limetová šťáva, soda."
          }
        ]
      },
      {
        "id": "florencia-fashion",
        "name": "Florencia Fashion",
        "price": "245 Kč",
        "description": "whisky, švestkový sirup, čokoládový bitters",
        "questions": [
          {
            "id": "florencia-fashion-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Florencia Fashion?",
            "correctAnswer": "Whisky",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Florencia Fashion je obsaženo: Whisky. Kompletní receptura položky: whisky, švestkový sirup, čokoládový bitters."
          },
          {
            "id": "florencia-fashion-ing-2",
            "question": "Která z následujících surovin patří do podsložky Florencia Fashion?",
            "correctAnswer": "Švestkový sirup",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Florencia Fashion je obsaženo: Švestkový sirup. Kompletní receptura položky: whisky, švestkový sirup, čokoládový bitters."
          },
          {
            "id": "florencia-fashion-ing-3",
            "question": "Která z následujících surovin patří do podsložky Florencia Fashion?",
            "correctAnswer": "Čokoládový bitters",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Florencia Fashion je obsaženo: Čokoládový bitters. Kompletní receptura položky: whisky, švestkový sirup, čokoládový bitters."
          }
        ]
      },
      {
        "id": "am-spritz",
        "name": "A.M. Spritz",
        "price": "185 Kč",
        "description": "crémant, gin, broskvový sirup, limetová šťáva",
        "questions": [
          {
            "id": "am-spritz-ing-1",
            "question": "Která z následujících surovin patří do podsložky A.M. Spritz?",
            "correctAnswer": "Crémant",
            "distractors": [
              "Stařený rum",
              "Modrá agáve (tequila)"
            ],
            "explanation": "V podsložce A.M. Spritz je obsaženo: Crémant. Kompletní receptura položky: crémant, gin, broskvový sirup, limetová šťáva."
          },
          {
            "id": "am-spritz-ing-2",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje A.M. Spritz?",
            "correctAnswer": "Gin",
            "distractors": [
              "Campari",
              "Cointreau"
            ],
            "explanation": "V podsložce A.M. Spritz je obsaženo: Gin. Kompletní receptura položky: crémant, gin, broskvový sirup, limetová šťáva."
          },
          {
            "id": "am-spritz-ing-3",
            "question": "Která z následujících surovin patří do podsložky A.M. Spritz?",
            "correctAnswer": "Broskvový sirup",
            "distractors": [
              "Cinzano rosso",
              "Sodová voda"
            ],
            "explanation": "V podsložce A.M. Spritz je obsaženo: Broskvový sirup. Kompletní receptura položky: crémant, gin, broskvový sirup, limetová šťáva."
          },
          {
            "id": "am-spritz-ing-4",
            "question": "Která z následujících surovin patří do podsložky A.M. Spritz?",
            "correctAnswer": "Limetová šťáva",
            "distractors": [
              "Tonik Thomas Henry",
              "Bílý rum"
            ],
            "explanation": "V podsložce A.M. Spritz je obsaženo: Limetová šťáva. Kompletní receptura položky: crémant, gin, broskvový sirup, limetová šťáva."
          }
        ]
      },
      {
        "id": "passionata",
        "name": "Passionata",
        "price": "175 Kč",
        "description": "rum, mučenka, melounový sirup, brusinkový džus",
        "questions": [
          {
            "id": "passionata-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Passionata?",
            "correctAnswer": "Rum",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Passionata je obsaženo: Rum. Kompletní receptura položky: rum, mučenka, melounový sirup, brusinkový džus."
          },
          {
            "id": "passionata-ing-2",
            "question": "Která z následujících surovin patří do podsložky Passionata?",
            "correctAnswer": "Mučenka",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Passionata je obsaženo: Mučenka. Kompletní receptura položky: rum, mučenka, melounový sirup, brusinkový džus."
          },
          {
            "id": "passionata-ing-3",
            "question": "Která z následujících surovin patří do podsložky Passionata?",
            "correctAnswer": "Melounový sirup",
            "distractors": [
              "Čerstvá limetová šťáva",
              "Sodová voda"
            ],
            "explanation": "V podsložce Passionata je obsaženo: Melounový sirup. Kompletní receptura položky: rum, mučenka, melounový sirup, brusinkový džus."
          },
          {
            "id": "passionata-ing-4",
            "question": "Která z následujících surovin patří do podsložky Passionata?",
            "correctAnswer": "Brusinkový džus",
            "distractors": [
              "Tonik Thomas Henry",
              "Řemeslný gin"
            ],
            "explanation": "V podsložce Passionata je obsaženo: Brusinkový džus. Kompletní receptura položky: rum, mučenka, melounový sirup, brusinkový džus."
          }
        ]
      },
      {
        "id": "apricot-cabaret",
        "name": "Apricot Cabaret",
        "price": "239 Kč",
        "description": "třešňový likér, mučenkový likér (passion fruit), meruňkové pyré, limetová šťáva, jablečný cider",
        "questions": [
          {
            "id": "apricot-cabaret-ing-1",
            "question": "Která z následujících surovin patří do podsložky Apricot Cabaret?",
            "correctAnswer": "Třešňový likér",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Apricot Cabaret je obsaženo: Třešňový likér. Kompletní receptura položky: třešňový likér, mučenkový likér (passion fruit), meruňkové pyré, limetová šťáva, jablečný cider."
          },
          {
            "id": "apricot-cabaret-ing-2",
            "question": "Která z následujících surovin patří do podsložky Apricot Cabaret?",
            "correctAnswer": "Mučenkový likér (passion fruit)",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Apricot Cabaret je obsaženo: Mučenkový likér (passion fruit). Kompletní receptura položky: třešňový likér, mučenkový likér (passion fruit), meruňkové pyré, limetová šťáva, jablečný cider."
          },
          {
            "id": "apricot-cabaret-ing-3",
            "question": "Která z následujících surovin patří do podsložky Apricot Cabaret?",
            "correctAnswer": "Meruňkové pyré",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Apricot Cabaret je obsaženo: Meruňkové pyré. Kompletní receptura položky: třešňový likér, mučenkový likér (passion fruit), meruňkové pyré, limetová šťáva, jablečný cider."
          },
          {
            "id": "apricot-cabaret-ing-4",
            "question": "Která z následujících surovin patří do podsložky Apricot Cabaret?",
            "correctAnswer": "Limetová šťáva",
            "distractors": [
              "Sodová voda",
              "Tonik Thomas Henry"
            ],
            "explanation": "V podsložce Apricot Cabaret je obsaženo: Limetová šťáva. Kompletní receptura položky: třešňový likér, mučenkový likér (passion fruit), meruňkové pyré, limetová šťáva, jablečný cider."
          },
          {
            "id": "apricot-cabaret-ing-5",
            "question": "Která z následujících surovin patří do podsložky Apricot Cabaret?",
            "correctAnswer": "Jablečný cider",
            "distractors": [
              "Řemeslný gin",
              "Bílý rum"
            ],
            "explanation": "V podsložce Apricot Cabaret je obsaženo: Jablečný cider. Kompletní receptura položky: třešňový likér, mučenkový likér (passion fruit), meruňkové pyré, limetová šťáva, jablečný cider."
          }
        ]
      },
      {
        "id": "spicy-apricot-margarita",
        "name": "Spicy Apricot Margarita",
        "price": "219 Kč",
        "description": "tequila, třešňový likér, meruňkové pyré, limetová šťáva, meruňkový sirup, jalapeño",
        "questions": [
          {
            "id": "spicy-apricot-margarita-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Spicy Apricot Margarita?",
            "correctAnswer": "Tequila",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Spicy Apricot Margarita je obsaženo: Tequila. Kompletní receptura položky: tequila, třešňový likér, meruňkové pyré, limetová šťáva, meruňkový sirup, jalapeño."
          },
          {
            "id": "spicy-apricot-margarita-ing-2",
            "question": "Která z následujících surovin patří do podsložky Spicy Apricot Margarita?",
            "correctAnswer": "Třešňový likér",
            "distractors": [
              "Campari",
              "Cointreau"
            ],
            "explanation": "V podsložce Spicy Apricot Margarita je obsaženo: Třešňový likér. Kompletní receptura položky: tequila, třešňový likér, meruňkové pyré, limetová šťáva, meruňkový sirup, jalapeño."
          },
          {
            "id": "spicy-apricot-margarita-ing-3",
            "question": "Která z následujících surovin patří do podsložky Spicy Apricot Margarita?",
            "correctAnswer": "Meruňkové pyré",
            "distractors": [
              "Cinzano rosso",
              "Sodová voda"
            ],
            "explanation": "V podsložce Spicy Apricot Margarita je obsaženo: Meruňkové pyré. Kompletní receptura položky: tequila, třešňový likér, meruňkové pyré, limetová šťáva, meruňkový sirup, jalapeño."
          },
          {
            "id": "spicy-apricot-margarita-ing-4",
            "question": "Která z následujících surovin patří do podsložky Spicy Apricot Margarita?",
            "correctAnswer": "Limetová šťáva",
            "distractors": [
              "Tonik Thomas Henry",
              "Řemeslný gin"
            ],
            "explanation": "V podsložce Spicy Apricot Margarita je obsaženo: Limetová šťáva. Kompletní receptura položky: tequila, třešňový likér, meruňkové pyré, limetová šťáva, meruňkový sirup, jalapeño."
          },
          {
            "id": "spicy-apricot-margarita-ing-5",
            "question": "Která z následujících surovin patří do podsložky Spicy Apricot Margarita?",
            "correctAnswer": "Meruňkový sirup",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Spicy Apricot Margarita je obsaženo: Meruňkový sirup. Kompletní receptura položky: tequila, třešňový likér, meruňkové pyré, limetová šťáva, meruňkový sirup, jalapeño."
          },
          {
            "id": "spicy-apricot-margarita-ing-6",
            "question": "Která z následujících surovin patří do podsložky Spicy Apricot Margarita?",
            "correctAnswer": "Jalapeño",
            "distractors": [
              "Campari",
              "Cointreau"
            ],
            "explanation": "V podsložce Spicy Apricot Margarita je obsaženo: Jalapeño. Kompletní receptura položky: tequila, třešňový likér, meruňkové pyré, limetová šťáva, meruňkový sirup, jalapeño."
          }
        ]
      },
      {
        "id": "apricot-daniels-sour",
        "name": "Apricot Daniel's Sour",
        "price": "239 Kč",
        "description": "Jack Daniel's, třešňový likér, meruňkové pyré, citrónová šťáva, cukrový sirup",
        "questions": [
          {
            "id": "apricot-daniels-sour-ing-1",
            "question": "Která z následujících surovin patří do podsložky Apricot Daniel's Sour?",
            "correctAnswer": "Jack Daniel's",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Apricot Daniel's Sour je obsaženo: Jack Daniel's. Kompletní receptura položky: Jack Daniel's, třešňový likér, meruňkové pyré, citrónová šťáva, cukrový sirup."
          },
          {
            "id": "apricot-daniels-sour-ing-2",
            "question": "Která z následujících surovin patří do podsložky Apricot Daniel's Sour?",
            "correctAnswer": "Třešňový likér",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Apricot Daniel's Sour je obsaženo: Třešňový likér. Kompletní receptura položky: Jack Daniel's, třešňový likér, meruňkové pyré, citrónová šťáva, cukrový sirup."
          },
          {
            "id": "apricot-daniels-sour-ing-3",
            "question": "Která z následujících surovin patří do podsložky Apricot Daniel's Sour?",
            "correctAnswer": "Meruňkové pyré",
            "distractors": [
              "Cointreau",
              "Cinzano rosso"
            ],
            "explanation": "V podsložce Apricot Daniel's Sour je obsaženo: Meruňkové pyré. Kompletní receptura položky: Jack Daniel's, třešňový likér, meruňkové pyré, citrónová šťáva, cukrový sirup."
          },
          {
            "id": "apricot-daniels-sour-ing-4",
            "question": "Která z následujících surovin patří do podsložky Apricot Daniel's Sour?",
            "correctAnswer": "Citrónová šťáva",
            "distractors": [
              "Čerstvá limetová šťáva",
              "Sodová voda"
            ],
            "explanation": "V podsložce Apricot Daniel's Sour je obsaženo: Citrónová šťáva. Kompletní receptura položky: Jack Daniel's, třešňový likér, meruňkové pyré, citrónová šťáva, cukrový sirup."
          },
          {
            "id": "apricot-daniels-sour-ing-5",
            "question": "Která z následujících surovin patří do podsložky Apricot Daniel's Sour?",
            "correctAnswer": "Cukrový sirup",
            "distractors": [
              "Tonik Thomas Henry",
              "Řemeslný gin"
            ],
            "explanation": "V podsložce Apricot Daniel's Sour je obsaženo: Cukrový sirup. Kompletní receptura položky: Jack Daniel's, třešňový likér, meruňkové pyré, citrónová šťáva, cukrový sirup."
          }
        ]
      }
    ]
  },
  {
    "id": "gin-a-tonic",
    "name": "gin a tonic",
    "badge": "Gin & Tonic",
    "description": "Vyladěné kombinace prémiových a řemeslných ginů se špičkovými toniky",
    "iconName": "GlassWater",
    "items": [
      {
        "id": "gt-tanqueray",
        "name": "Tanqueray & Thomas Henry Tonic",
        "price": "188 Kč",
        "description": "Klasický s limetou, suchý London Dry profil a německý chininový tonik",
        "questions": [
          {
            "id": "gt-tanqueray-ing-1",
            "question": "Která z následujících surovin patří do podsložky Tanqueray & Thomas Henry Tonic?",
            "correctAnswer": "Klasický s limetou",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Tanqueray & Thomas Henry Tonic je obsaženo: Klasický s limetou. Kompletní receptura položky: Klasický s limetou, suchý London Dry profil a německý chininový tonik."
          },
          {
            "id": "gt-tanqueray-ing-2",
            "question": "Která z následujících surovin patří do podsložky Tanqueray & Thomas Henry Tonic?",
            "correctAnswer": "Suchý London Dry profil a německý chininový tonik",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Tanqueray & Thomas Henry Tonic je obsaženo: Suchý London Dry profil a německý chininový tonik. Kompletní receptura položky: Klasický s limetou, suchý London Dry profil a německý chininový tonik."
          }
        ]
      },
      {
        "id": "gt-fiesta-garage22",
        "name": "Fiesta Garage 22 & Guilti tonic lime",
        "price": "219 Kč",
        "description": "Zábavný s limetou, řemeslný pražský gin z Holešovic a limetkový tonik",
        "questions": [
          {
            "id": "gt-fiesta-garage22-ing-1",
            "question": "Která z následujících surovin patří do podsložky Fiesta Garage 22 & Guilti tonic lime?",
            "correctAnswer": "Zábavný s limetou",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Fiesta Garage 22 & Guilti tonic lime je obsaženo: Zábavný s limetou. Kompletní receptura položky: Zábavný s limetou, řemeslný pražský gin z Holešovic a limetkový tonik."
          },
          {
            "id": "gt-fiesta-garage22-ing-2",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Fiesta Garage 22 & Guilti tonic lime?",
            "correctAnswer": "Řemeslný pražský gin z Holešovic a limetkový tonik",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Fiesta Garage 22 & Guilti tonic lime je obsaženo: Řemeslný pražský gin z Holešovic a limetkový tonik. Kompletní receptura položky: Zábavný s limetou, řemeslný pražský gin z Holešovic a limetkový tonik."
          }
        ]
      },
      {
        "id": "gt-hendricks",
        "name": "Hendrick`s & Thomas Henry Tonic",
        "price": "208 Kč",
        "description": "Svěží s okurkou, skotský gin infuzovaný okurkou a bulharskou růží",
        "questions": [
          {
            "id": "gt-hendricks-ing-1",
            "question": "Který druh nakládaných okurek obsahuje podsložka Hendrick`s & Thomas Henry Tonic?",
            "correctAnswer": "Svěží s okurkou",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Hendrick`s & Thomas Henry Tonic je obsaženo: Svěží s okurkou. Kompletní receptura položky: Svěží s okurkou, skotský gin infuzovaný okurkou a bulharskou růží."
          },
          {
            "id": "gt-hendricks-ing-2",
            "question": "Který druh nakládaných okurek obsahuje podsložka Hendrick`s & Thomas Henry Tonic?",
            "correctAnswer": "Skotský gin infuzovaný okurkou a bulharskou růží",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Hendrick`s & Thomas Henry Tonic je obsaženo: Skotský gin infuzovaný okurkou a bulharskou růží. Kompletní receptura položky: Svěží s okurkou, skotský gin infuzovaný okurkou a bulharskou růží."
          }
        ]
      },
      {
        "id": "gt-endorphin-imagine",
        "name": "Endorphin Magic imaGINe & Fever-Tree Tonic",
        "price": "239 Kč",
        "description": "Iluzionistický s borůvkami, barvoměnný gin infuzovaný květem klitorie (butterfly pea flower)",
        "questions": [
          {
            "id": "gt-endorphin-imagine-ing-1",
            "question": "Která z následujících surovin patří do podsložky Endorphin Magic imaGINe & Fever-Tree Tonic?",
            "correctAnswer": "Iluzionistický s borůvkami",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Endorphin Magic imaGINe & Fever-Tree Tonic je obsaženo: Iluzionistický s borůvkami. Kompletní receptura položky: Iluzionistický s borůvkami, barvoměnný gin infuzovaný květem klitorie (butterfly pea flower)."
          },
          {
            "id": "gt-endorphin-imagine-ing-2",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Endorphin Magic imaGINe & Fever-Tree Tonic?",
            "correctAnswer": "Barvoměnný gin infuzovaný květem klitorie (butterfly pea flower)",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Endorphin Magic imaGINe & Fever-Tree Tonic je obsaženo: Barvoměnný gin infuzovaný květem klitorie (butterfly pea flower). Kompletní receptura položky: Iluzionistický s borůvkami, barvoměnný gin infuzovaný květem klitorie (butterfly pea flower)."
          }
        ]
      },
      {
        "id": "gt-flame-of-passion",
        "name": "Flame of Passion Pink Gin & Thomas Henry Pink Grapefruit Tonic",
        "price": "228 Kč",
        "description": "Podmanivý se sušeným grepem, jemně ovocný růžový gin s grepovým tonikem",
        "questions": [
          {
            "id": "gt-flame-of-passion-ing-1",
            "question": "Která z následujících surovin patří do podsložky Flame of Passion Pink Gin & Thomas Henry Pink Grapefruit Tonic?",
            "correctAnswer": "Podmanivý se sušeným grepem",
            "distractors": [
              "Bílý rum",
              "Stařený rum"
            ],
            "explanation": "V podsložce Flame of Passion Pink Gin & Thomas Henry Pink Grapefruit Tonic je obsaženo: Podmanivý se sušeným grepem. Kompletní receptura položky: Podmanivý se sušeným grepem, jemně ovocný růžový gin s grepovým tonikem."
          },
          {
            "id": "gt-flame-of-passion-ing-2",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Flame of Passion Pink Gin & Thomas Henry Pink Grapefruit Tonic?",
            "correctAnswer": "Jemně ovocný růžový gin s grepovým tonikem",
            "distractors": [
              "Modrá agáve (tequila)",
              "Campari"
            ],
            "explanation": "V podsložce Flame of Passion Pink Gin & Thomas Henry Pink Grapefruit Tonic je obsaženo: Jemně ovocný růžový gin s grepovým tonikem. Kompletní receptura položky: Podmanivý se sušeným grepem, jemně ovocný růžový gin s grepovým tonikem."
          }
        ]
      },
      {
        "id": "gt-endorphin-copper-moon",
        "name": "Endorphin Copper Moon & Fever-Tree Mediterranean Tonic",
        "price": "228 Kč",
        "description": "Plný bylinek a pepře, řemeslný gin a středomořský tonik",
        "questions": [
          {
            "id": "gt-endorphin-copper-moon-ing-1",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Endorphin Copper Moon & Fever-Tree Mediterranean Tonic?",
            "correctAnswer": "Plný bylinek a pepře",
            "distractors": [
              "Stařený rum",
              "Modrá agáve (tequila)"
            ],
            "explanation": "V podsložce Endorphin Copper Moon & Fever-Tree Mediterranean Tonic je obsaženo: Plný bylinek a pepře. Kompletní receptura položky: Plný bylinek a pepře, řemeslný gin a středomořský tonik."
          },
          {
            "id": "gt-endorphin-copper-moon-ing-2",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Endorphin Copper Moon & Fever-Tree Mediterranean Tonic?",
            "correctAnswer": "Řemeslný gin a středomořský tonik",
            "distractors": [
              "Campari",
              "Cointreau"
            ],
            "explanation": "V podsložce Endorphin Copper Moon & Fever-Tree Mediterranean Tonic je obsaženo: Řemeslný gin a středomořský tonik. Kompletní receptura položky: Plný bylinek a pepře, řemeslný gin a středomořský tonik."
          }
        ]
      }
    ]
  },
  {
    "id": "ovocne-destilaty",
    "name": "ovocné destiláty",
    "badge": "Ovocné pálenky",
    "description": "Pravé české a moravské ovocné destiláty 0,03L z vyhlášených řemeslných palíren",
    "iconName": "Flame",
    "items": [
      {
        "id": "slivovice-radlik",
        "name": "Slivovice Radlík",
        "price": "105 Kč",
        "weight": "0,03l",
        "description": "0,03l jemná švestková pálenka z oceňovaného jihočeského lihovaru Radlík u Jílového u Prahy",
        "questions": [
          {
            "id": "slivovice-radlik-vol",
            "question": "Jaký je servírovací objem / míra podsložky Slivovice Radlík?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Slivovice Radlík je 0,03 l."
          },
          {
            "id": "slivovice-radlik-ing-1",
            "question": "Která z následujících surovin patří do podsložky Slivovice Radlík?",
            "correctAnswer": "Jemná švestková pálenka z oceňovaného jihočeského lihovaru Radlík u Jílového u Prahy",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Slivovice Radlík je obsaženo: Jemná švestková pálenka z oceňovaného jihočeského lihovaru Radlík u Jílového u Prahy. Kompletní receptura položky: 0,03l jemná švestková pálenka z oceňovaného jihočeského lihovaru Radlík u Jílového u Prahy."
          }
        ]
      },
      {
        "id": "slivovice-ze-sudu-radlik",
        "name": "Slivovice ze sudu Radlík",
        "price": "140 Kč",
        "weight": "0,03l",
        "description": "0,03l švestkový destilát dozrávající v dřevěných dubových sudech, se zlatavou barvou a tóny vanilky",
        "questions": [
          {
            "id": "slivovice-ze-sudu-radlik-vol",
            "question": "Jaký je servírovací objem / míra podsložky Slivovice ze sudu Radlík?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Slivovice ze sudu Radlík je 0,03 l."
          },
          {
            "id": "slivovice-ze-sudu-radlik-ing-1",
            "question": "Která z následujících surovin patří do podsložky Slivovice ze sudu Radlík?",
            "correctAnswer": "Švestkový destilát dozrávající v dřevěných dubových sudech",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Slivovice ze sudu Radlík je obsaženo: Švestkový destilát dozrávající v dřevěných dubových sudech. Kompletní receptura položky: 0,03l švestkový destilát dozrávající v dřevěných dubových sudech, se zlatavou barvou a tóny vanilky."
          },
          {
            "id": "slivovice-ze-sudu-radlik-ing-2",
            "question": "Která z následujících surovin patří do podsložky Slivovice ze sudu Radlík?",
            "correctAnswer": "Se zlatavou barvou a tóny vanilky",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Slivovice ze sudu Radlík je obsaženo: Se zlatavou barvou a tóny vanilky. Kompletní receptura položky: 0,03l švestkový destilát dozrávající v dřevěných dubových sudech, se zlatavou barvou a tóny vanilky."
          }
        ]
      },
      {
        "id": "hruskovice-skanzen",
        "name": "Hruškovice Williams Skanzen",
        "price": "110 Kč",
        "weight": "0,03l",
        "description": "0,03l intenzivně aromatická pálenka z vyzrálých hrušek odrůdy Williams z lihovaru Skanzen Modrá",
        "questions": [
          {
            "id": "hruskovice-skanzen-vol",
            "question": "Jaký je servírovací objem / míra podsložky Hruškovice Williams Skanzen?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Hruškovice Williams Skanzen je 0,03 l."
          },
          {
            "id": "hruskovice-skanzen-ing-1",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno Hruškovice Williams Skanzen?",
            "correctAnswer": "Intenzivně aromatická pálenka z vyzrálých hrušek odrůdy Williams z lihovaru Skanzen Modrá",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Hruškovice Williams Skanzen je obsaženo: Intenzivně aromatická pálenka z vyzrálých hrušek odrůdy Williams z lihovaru Skanzen Modrá. Kompletní receptura položky: 0,03l intenzivně aromatická pálenka z vyzrálých hrušek odrůdy Williams z lihovaru Skanzen Modrá."
          }
        ]
      },
      {
        "id": "hruskovice-ze-sudu-radlik",
        "name": "Hruškovice ze sudu Radlík",
        "price": "140 Kč",
        "weight": "0,03l",
        "description": "0,03l hruškový destilát stařený v dubových sudech, spojení ovoce a jemného dřeva",
        "questions": [
          {
            "id": "hruskovice-ze-sudu-radlik-vol",
            "question": "Jaký je servírovací objem / míra podsložky Hruškovice ze sudu Radlík?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Hruškovice ze sudu Radlík je 0,03 l."
          },
          {
            "id": "hruskovice-ze-sudu-radlik-ing-1",
            "question": "Která z následujících surovin patří do podsložky Hruškovice ze sudu Radlík?",
            "correctAnswer": "Hruškový destilát stařený v dubových sudech",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Hruškovice ze sudu Radlík je obsaženo: Hruškový destilát stařený v dubových sudech. Kompletní receptura položky: 0,03l hruškový destilát stařený v dubových sudech, spojení ovoce a jemného dřeva."
          },
          {
            "id": "hruskovice-ze-sudu-radlik-ing-2",
            "question": "Která z následujících surovin patří do podsložky Hruškovice ze sudu Radlík?",
            "correctAnswer": "Spojení ovoce a jemného dřeva",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Hruškovice ze sudu Radlík je obsaženo: Spojení ovoce a jemného dřeva. Kompletní receptura položky: 0,03l hruškový destilát stařený v dubových sudech, spojení ovoce a jemného dřeva."
          }
        ]
      },
      {
        "id": "merunkovice-svach",
        "name": "Meruňkovice Svach",
        "price": "120 Kč",
        "weight": "0,03l",
        "description": "0,03l lahodná meruňková pálenka z rodinné destilérky Svachovka u Českého Krumlova",
        "questions": [
          {
            "id": "merunkovice-svach-vol",
            "question": "Jaký je servírovací objem / míra podsložky Meruňkovice Svach?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Meruňkovice Svach je 0,03 l."
          },
          {
            "id": "merunkovice-svach-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Meruňkovice Svach?",
            "correctAnswer": "Lahodná meruňková pálenka z rodinné destilérky Svachovka u Českého Krumlova",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Meruňkovice Svach je obsaženo: Lahodná meruňková pálenka z rodinné destilérky Svachovka u Českého Krumlova. Kompletní receptura položky: 0,03l lahodná meruňková pálenka z rodinné destilérky Svachovka u Českého Krumlova."
          }
        ]
      },
      {
        "id": "visnovice-zubri",
        "name": "Višňovice Zubří",
        "price": "98 Kč",
        "weight": "0,03l",
        "description": "0,03l poctivý destilát ze zralých višní z valašského Zubří s jemným mandlovým podtónem z pecek",
        "questions": [
          {
            "id": "visnovice-zubri-vol",
            "question": "Jaký je servírovací objem / míra podsložky Višňovice Zubří?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Višňovice Zubří je 0,03 l."
          },
          {
            "id": "visnovice-zubri-ing-1",
            "question": "Která z následujících surovin patří do podsložky Višňovice Zubří?",
            "correctAnswer": "Poctivý destilát ze zralých višní z valašského Zubří s jemným mandlovým podtónem z pecek",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Višňovice Zubří je obsaženo: Poctivý destilát ze zralých višní z valašského Zubří s jemným mandlovým podtónem z pecek. Kompletní receptura položky: 0,03l poctivý destilát ze zralých višní z valašského Zubří s jemným mandlovým podtónem z pecek."
          }
        ]
      },
      {
        "id": "jablkovice-galli",
        "name": "Jablkovice Galli",
        "price": "98 Kč",
        "weight": "0,03l",
        "description": "0,03l čistý a svěží jablečný destilát z českých jablek z lihovaru Galli",
        "questions": [
          {
            "id": "jablkovice-galli-vol",
            "question": "Jaký je servírovací objem / míra podsložky Jablkovice Galli?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Jablkovice Galli je 0,03 l."
          },
          {
            "id": "jablkovice-galli-ing-1",
            "question": "Která z následujících surovin patří do podsložky Jablkovice Galli?",
            "correctAnswer": "Čistý a svěží jablečný destilát z českých jablek z lihovaru Galli",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Jablkovice Galli je obsaženo: Čistý a svěží jablečný destilát z českých jablek z lihovaru Galli. Kompletní receptura položky: 0,03l čistý a svěží jablečný destilát z českých jablek z lihovaru Galli."
          }
        ]
      },
      {
        "id": "rybizovice-raspenava",
        "name": "Rybízovice Raspenava",
        "price": "160 Kč",
        "weight": "0,03l",
        "description": "0,03l raritní a vysoce ceněný destilát z černého a červeného rybízu z Raspenavy",
        "questions": [
          {
            "id": "rybizovice-raspenava-vol",
            "question": "Jaký je servírovací objem / míra podsložky Rybízovice Raspenava?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Rybízovice Raspenava je 0,03 l."
          },
          {
            "id": "rybizovice-raspenava-ing-1",
            "question": "Která z následujících surovin patří do podsložky Rybízovice Raspenava?",
            "correctAnswer": "Raritní a vysoce ceněný destilát z černého a červeného rybízu z Raspenavy",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Rybízovice Raspenava je obsaženo: Raritní a vysoce ceněný destilát z černého a červeného rybízu z Raspenavy. Kompletní receptura položky: 0,03l raritní a vysoce ceněný destilát z černého a červeného rybízu z Raspenavy."
          }
        ]
      },
      {
        "id": "vinovice-ze-sudu-radlik",
        "name": "Vínovice ze sudu Radlík",
        "price": "149 Kč",
        "weight": "0,03l",
        "description": "0,03l destilát z vinných hroznů školený v dubových sudech od Radlíku",
        "questions": [
          {
            "id": "vinovice-ze-sudu-radlik-vol",
            "question": "Jaký je servírovací objem / míra podsložky Vínovice ze sudu Radlík?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Vínovice ze sudu Radlík je 0,03 l."
          },
          {
            "id": "vinovice-ze-sudu-radlik-ing-1",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Vínovice ze sudu Radlík?",
            "correctAnswer": "Destilát z vinných hroznů školený v dubových sudech od Radlíku",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Vínovice ze sudu Radlík je obsaženo: Destilát z vinných hroznů školený v dubových sudech od Radlíku. Kompletní receptura položky: 0,03l destilát z vinných hroznů školený v dubových sudech od Radlíku."
          }
        ]
      },
      {
        "id": "traminovice-kolby",
        "name": "Tramínovice Kolby",
        "price": "135 Kč",
        "weight": "0,03l",
        "description": "0,03l odrůdová pálenka z hroznů Tramínu červeného z vinařství Kolby (Pouzdřany)",
        "questions": [
          {
            "id": "traminovice-kolby-vol",
            "question": "Jaký je servírovací objem / míra podsložky Tramínovice Kolby?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Tramínovice Kolby je 0,03 l."
          },
          {
            "id": "traminovice-kolby-ing-1",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Tramínovice Kolby?",
            "correctAnswer": "Odrůdová pálenka z hroznů Tramínu červeného z vinařství Kolby (Pouzdřany)",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Tramínovice Kolby je obsaženo: Odrůdová pálenka z hroznů Tramínu červeného z vinařství Kolby (Pouzdřany). Kompletní receptura položky: 0,03l odrůdová pálenka z hroznů Tramínu červeného z vinařství Kolby (Pouzdřany)."
          }
        ]
      },
      {
        "id": "ponesicka-mrkvovice",
        "name": "Poněšická Mrkvovice",
        "price": "123 Kč",
        "weight": "0,03l",
        "description": "0,03l unikátní raritní zeleninový destilát z karotky z legendární jihočeské palírny Poněšice",
        "questions": [
          {
            "id": "ponesicka-mrkvovice-vol",
            "question": "Jaký je servírovací objem / míra podsložky Poněšická Mrkvovice?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Poněšická Mrkvovice je 0,03 l."
          },
          {
            "id": "ponesicka-mrkvovice-ing-1",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Poněšická Mrkvovice?",
            "correctAnswer": "Unikátní raritní zeleninový destilát z karotky z legendární jihočeské palírny Poněšice",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Poněšická Mrkvovice je obsaženo: Unikátní raritní zeleninový destilát z karotky z legendární jihočeské palírny Poněšice. Kompletní receptura položky: 0,03l unikátní raritní zeleninový destilát z karotky z legendární jihočeské palírny Poněšice."
          }
        ]
      },
      {
        "id": "malinovice-silver-martenz",
        "name": "Malinovice Silver Martenz",
        "price": "175 Kč",
        "weight": "0,03l",
        "description": "0,03l luxusní malinový průtahový destilát z vybraných malin s intenzivní vůní lesního ovoce",
        "questions": [
          {
            "id": "malinovice-silver-martenz-vol",
            "question": "Jaký je servírovací objem / míra podsložky Malinovice Silver Martenz?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Malinovice Silver Martenz je 0,03 l."
          },
          {
            "id": "malinovice-silver-martenz-ing-1",
            "question": "Která z následujících surovin patří do podsložky Malinovice Silver Martenz?",
            "correctAnswer": "Luxusní malinový průtahový destilát z vybraných malin s intenzivní vůní lesního ovoce",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Malinovice Silver Martenz je obsaženo: Luxusní malinový průtahový destilát z vybraných malin s intenzivní vůní lesního ovoce. Kompletní receptura položky: 0,03l luxusní malinový průtahový destilát z vybraných malin s intenzivní vůní lesního ovoce."
          }
        ]
      }
    ]
  },
  {
    "id": "vodky",
    "name": "vodky",
    "badge": "Vodky",
    "description": "Prémiové a řemeslné obilné vodky 0,03L z Čech, Ukrajiny i Francie",
    "iconName": "GlassWater",
    "items": [
      {
        "id": "anton-kaapl-legionar",
        "name": "Anton Kaapl LEGIONÄR",
        "price": "75 Kč",
        "weight": "0,03l",
        "description": "0,03l prémiová jihočeská řemeslná vodka z rodinného lihovaru Jílovice, destilovaná s měkkou šumavskou pramenitou vodou",
        "questions": [
          {
            "id": "anton-kaapl-legionar-vol",
            "question": "Jaký je servírovací objem / míra podsložky Anton Kaapl LEGIONÄR?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Anton Kaapl LEGIONÄR je 0,03 l."
          },
          {
            "id": "anton-kaapl-legionar-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Anton Kaapl LEGIONÄR?",
            "correctAnswer": "Prémiová jihočeská řemeslná vodka z rodinného lihovaru Jílovice",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Anton Kaapl LEGIONÄR je obsaženo: Prémiová jihočeská řemeslná vodka z rodinného lihovaru Jílovice. Kompletní receptura položky: 0,03l prémiová jihočeská řemeslná vodka z rodinného lihovaru Jílovice, destilovaná s měkkou šumavskou pramenitou vodou."
          },
          {
            "id": "anton-kaapl-legionar-ing-2",
            "question": "Která z následujících surovin patří do podsložky Anton Kaapl LEGIONÄR?",
            "correctAnswer": "Destilovaná s měkkou šumavskou pramenitou vodou",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Anton Kaapl LEGIONÄR je obsaženo: Destilovaná s měkkou šumavskou pramenitou vodou. Kompletní receptura položky: 0,03l prémiová jihočeská řemeslná vodka z rodinného lihovaru Jílovice, destilovaná s měkkou šumavskou pramenitou vodou."
          }
        ]
      },
      {
        "id": "nemiroff",
        "name": "Nemiroff",
        "price": "85 Kč",
        "weight": "0,03l",
        "description": "0,03l slavná prémiová pšeničná vodka s vícestupňovou filtrací",
        "questions": [
          {
            "id": "nemiroff-vol",
            "question": "Jaký je servírovací objem / míra podsložky Nemiroff?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Nemiroff je 0,03 l."
          },
          {
            "id": "nemiroff-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Nemiroff?",
            "correctAnswer": "Slavná prémiová pšeničná vodka s vícestupňovou filtrací",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Nemiroff je obsaženo: Slavná prémiová pšeničná vodka s vícestupňovou filtrací. Kompletní receptura položky: 0,03l slavná prémiová pšeničná vodka s vícestupňovou filtrací."
          }
        ]
      },
      {
        "id": "grey-goose",
        "name": "Grey Goose",
        "price": "135 Kč",
        "weight": "0,03l",
        "description": "0,03l luxusní francouzská vodka vyráběná z ozimé pšenice z oblasti Picardie a vápencem filtrované pramenité vody z Gensac-la-Pallue",
        "questions": [
          {
            "id": "grey-goose-vol",
            "question": "Jaký je servírovací objem / míra podsložky Grey Goose?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Grey Goose je 0,03 l."
          },
          {
            "id": "grey-goose-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Grey Goose?",
            "correctAnswer": "Luxusní francouzská vodka vyráběná z ozimé pšenice z oblasti Picardie a vápencem filtrované pramenité vody z Gensac-la-Pallue",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Grey Goose je obsaženo: Luxusní francouzská vodka vyráběná z ozimé pšenice z oblasti Picardie a vápencem filtrované pramenité vody z Gensac-la-Pallue. Kompletní receptura položky: 0,03l luxusní francouzská vodka vyráběná z ozimé pšenice z oblasti Picardie a vápencem filtrované pramenité vody z Gensac-la-Pallue."
          }
        ]
      }
    ]
  },
  {
    "id": "rumy",
    "name": "rumy",
    "badge": "Rumy",
    "description": "Vyzrálé třtinové rumy 0,03L z Kuby, Guyany, Barbadosu, Panamy i Venezuely",
    "iconName": "Flame",
    "items": [
      {
        "id": "havana-club-3",
        "name": "Havana Club Anejo 3 Anos",
        "price": "66 Kč",
        "weight": "0,03l",
        "description": "0,03l tradiční kubánský bílý rum zrající 3 roky v sudech z bílého dubu, základ pro Mojito a Daiquiri",
        "questions": [
          {
            "id": "havana-club-3-vol",
            "question": "Jaký je servírovací objem / míra podsložky Havana Club Anejo 3 Anos?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Havana Club Anejo 3 Anos je 0,03 l."
          },
          {
            "id": "havana-club-3-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Havana Club Anejo 3 Anos?",
            "correctAnswer": "Tradiční kubánský bílý rum zrající 3 roky v sudech z bílého dubu",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Havana Club Anejo 3 Anos je obsaženo: Tradiční kubánský bílý rum zrající 3 roky v sudech z bílého dubu. Kompletní receptura položky: 0,03l tradiční kubánský bílý rum zrající 3 roky v sudech z bílého dubu, základ pro Mojito a Daiquiri."
          },
          {
            "id": "havana-club-3-ing-2",
            "question": "Která z následujících surovin patří do podsložky Havana Club Anejo 3 Anos?",
            "correctAnswer": "Základ pro Mojito a Daiquiri",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Havana Club Anejo 3 Anos je obsaženo: Základ pro Mojito a Daiquiri. Kompletní receptura položky: 0,03l tradiční kubánský bílý rum zrající 3 roky v sudech z bílého dubu, základ pro Mojito a Daiquiri."
          }
        ]
      },
      {
        "id": "el-dorado-12y",
        "name": "El Dorado 12y",
        "price": "149 Kč",
        "weight": "0,03l",
        "description": "0,03l guyanský melasový rum zrající 12 let v tropech u řeky Demerara, bohaté tóny medu, rozinek a karamelu",
        "questions": [
          {
            "id": "el-dorado-12y-vol",
            "question": "Jaký je servírovací objem / míra podsložky El Dorado 12y?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky El Dorado 12y je 0,03 l."
          },
          {
            "id": "el-dorado-12y-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje El Dorado 12y?",
            "correctAnswer": "Guyanský melasový rum zrající 12 let v tropech u řeky Demerara",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce El Dorado 12y je obsaženo: Guyanský melasový rum zrající 12 let v tropech u řeky Demerara. Kompletní receptura položky: 0,03l guyanský melasový rum zrající 12 let v tropech u řeky Demerara, bohaté tóny medu, rozinek a karamelu."
          },
          {
            "id": "el-dorado-12y-ing-2",
            "question": "Která z následujících surovin patří do podsložky El Dorado 12y?",
            "correctAnswer": "Bohaté tóny medu",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce El Dorado 12y je obsaženo: Bohaté tóny medu. Kompletní receptura položky: 0,03l guyanský melasový rum zrající 12 let v tropech u řeky Demerara, bohaté tóny medu, rozinek a karamelu."
          },
          {
            "id": "el-dorado-12y-ing-3",
            "question": "Která z následujících surovin patří do podsložky El Dorado 12y?",
            "correctAnswer": "Rozinek a karamelu",
            "distractors": [
              "Filtrace přes dřevěné uhlí",
              "Pramenitá horská voda"
            ],
            "explanation": "V podsložce El Dorado 12y je obsaženo: Rozinek a karamelu. Kompletní receptura položky: 0,03l guyanský melasový rum zrající 12 let v tropech u řeky Demerara, bohaté tóny medu, rozinek a karamelu."
          }
        ]
      },
      {
        "id": "mount-gay-xo",
        "name": "Mount Gay XO",
        "price": "186 Kč",
        "weight": "0,03l",
        "description": "0,03l prémiový barbadoský rum z nejstarší fungující palírny na světě (od roku 1703), blend rezerv stařených v sudech po bourbonu, koňaku a americké whisky",
        "questions": [
          {
            "id": "mount-gay-xo-vol",
            "question": "Jaký je servírovací objem / míra podsložky Mount Gay XO?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Mount Gay XO je 0,03 l."
          },
          {
            "id": "mount-gay-xo-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Mount Gay XO?",
            "correctAnswer": "Prémiový barbadoský rum z nejstarší fungující palírny na světě (od roku 1703)",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Mount Gay XO je obsaženo: Prémiový barbadoský rum z nejstarší fungující palírny na světě (od roku 1703). Kompletní receptura položky: 0,03l prémiový barbadoský rum z nejstarší fungující palírny na světě (od roku 1703), blend rezerv stařených v sudech po bourbonu, koňaku a americké whisky."
          },
          {
            "id": "mount-gay-xo-ing-2",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Mount Gay XO?",
            "correctAnswer": "Blend rezerv stařených v sudech po bourbonu",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Mount Gay XO je obsaženo: Blend rezerv stařených v sudech po bourbonu. Kompletní receptura položky: 0,03l prémiový barbadoský rum z nejstarší fungující palírny na světě (od roku 1703), blend rezerv stařených v sudech po bourbonu, koňaku a americké whisky."
          },
          {
            "id": "mount-gay-xo-ing-3",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Mount Gay XO?",
            "correctAnswer": "Koňaku a americké whisky",
            "distractors": [
              "Filtrace přes dřevěné uhlí",
              "Pramenitá horská voda"
            ],
            "explanation": "V podsložce Mount Gay XO je obsaženo: Koňaku a americké whisky. Kompletní receptura položky: 0,03l prémiový barbadoský rum z nejstarší fungující palírny na světě (od roku 1703), blend rezerv stařených v sudech po bourbonu, koňaku a americké whisky."
          }
        ]
      },
      {
        "id": "abuelo-7y",
        "name": "Abuelo 7y",
        "price": "135 Kč",
        "weight": "0,03l",
        "description": "0,03l panamský rum vyráběný z vlastní třtinové melasy, zrající 7 let v malých sudech z bílého dubu",
        "questions": [
          {
            "id": "abuelo-7y-vol",
            "question": "Jaký je servírovací objem / míra podsložky Abuelo 7y?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Abuelo 7y je 0,03 l."
          },
          {
            "id": "abuelo-7y-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Abuelo 7y?",
            "correctAnswer": "Panamský rum vyráběný z vlastní třtinové melasy",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Abuelo 7y je obsaženo: Panamský rum vyráběný z vlastní třtinové melasy. Kompletní receptura položky: 0,03l panamský rum vyráběný z vlastní třtinové melasy, zrající 7 let v malých sudech z bílého dubu."
          },
          {
            "id": "abuelo-7y-ing-2",
            "question": "Která z následujících surovin patří do podsložky Abuelo 7y?",
            "correctAnswer": "Zrající 7 let v malých sudech z bílého dubu",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Abuelo 7y je obsaženo: Zrající 7 let v malých sudech z bílého dubu. Kompletní receptura položky: 0,03l panamský rum vyráběný z vlastní třtinové melasy, zrající 7 let v malých sudech z bílého dubu."
          }
        ]
      },
      {
        "id": "eminente-reserva-7y",
        "name": "Eminente Reserva 7y",
        "price": "172 Kč",
        "weight": "0,03l",
        "description": "0,03l kubánský prémiový rum s vysokým 70% podílem stařených aguardientes (třtinových pálenek), zrající v sudech po whisky",
        "questions": [
          {
            "id": "eminente-reserva-7y-vol",
            "question": "Jaký je servírovací objem / míra podsložky Eminente Reserva 7y?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Eminente Reserva 7y je 0,03 l."
          },
          {
            "id": "eminente-reserva-7y-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Eminente Reserva 7y?",
            "correctAnswer": "Kubánský prémiový rum s vysokým 70% podílem stařených aguardientes (třtinových pálenek)",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Eminente Reserva 7y je obsaženo: Kubánský prémiový rum s vysokým 70% podílem stařených aguardientes (třtinových pálenek). Kompletní receptura položky: 0,03l kubánský prémiový rum s vysokým 70% podílem stařených aguardientes (třtinových pálenek), zrající v sudech po whisky."
          },
          {
            "id": "eminente-reserva-7y-ing-2",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Eminente Reserva 7y?",
            "correctAnswer": "Zrající v sudech po whisky",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Eminente Reserva 7y je obsaženo: Zrající v sudech po whisky. Kompletní receptura položky: 0,03l kubánský prémiový rum s vysokým 70% podílem stařených aguardientes (třtinových pálenek), zrající v sudech po whisky."
          }
        ]
      },
      {
        "id": "diplomatico",
        "name": "Diplomático Reserva Exclusiva",
        "price": "149 Kč",
        "weight": "0,03l",
        "description": "0,03l venezuelský rum zrající až 12 let v sudech po bourbonu, sametově sladký s tóny čokolády, vanilky a pomerančové kůry",
        "questions": [
          {
            "id": "diplomatico-vol",
            "question": "Jaký je servírovací objem / míra podsložky Diplomático Reserva Exclusiva?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Diplomático Reserva Exclusiva je 0,03 l."
          },
          {
            "id": "diplomatico-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Diplomático Reserva Exclusiva?",
            "correctAnswer": "Venezuelský rum zrající až 12 let v sudech po bourbonu",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Diplomático Reserva Exclusiva je obsaženo: Venezuelský rum zrající až 12 let v sudech po bourbonu. Kompletní receptura položky: 0,03l venezuelský rum zrající až 12 let v sudech po bourbonu, sametově sladký s tóny čokolády, vanilky a pomerančové kůry."
          },
          {
            "id": "diplomatico-ing-2",
            "question": "Která pivovarská surovina nebo vlastnost charakterizuje Diplomático Reserva Exclusiva?",
            "correctAnswer": "Sametově sladký s tóny čokolády",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Diplomático Reserva Exclusiva je obsaženo: Sametově sladký s tóny čokolády. Kompletní receptura položky: 0,03l venezuelský rum zrající až 12 let v sudech po bourbonu, sametově sladký s tóny čokolády, vanilky a pomerančové kůry."
          },
          {
            "id": "diplomatico-ing-3",
            "question": "Která z následujících surovin patří do podsložky Diplomático Reserva Exclusiva?",
            "correctAnswer": "Vanilky a pomerančové kůry",
            "distractors": [
              "Filtrace přes dřevěné uhlí",
              "Pramenitá horská voda"
            ],
            "explanation": "V podsložce Diplomático Reserva Exclusiva je obsaženo: Vanilky a pomerančové kůry. Kompletní receptura položky: 0,03l venezuelský rum zrající až 12 let v sudech po bourbonu, sametově sladký s tóny čokolády, vanilky a pomerančové kůry."
          }
        ]
      },
      {
        "id": "zacapa-23y",
        "name": "Zacapa 23y",
        "price": "165 Kč",
        "weight": "0,03l",
        "description": "0,03l guatemalský rum z panenského třtinového medu zrající metodou Solera v nadmořské výšce 2 300 m",
        "questions": [
          {
            "id": "zacapa-23y-vol",
            "question": "Jaký je servírovací objem / míra podsložky Zacapa 23y?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Zacapa 23y je 0,03 l."
          },
          {
            "id": "zacapa-23y-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Zacapa 23y?",
            "correctAnswer": "Guatemalský rum z panenského třtinového medu zrající metodou Solera v nadmořské výšce 2 300 m",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Zacapa 23y je obsaženo: Guatemalský rum z panenského třtinového medu zrající metodou Solera v nadmořské výšce 2 300 m. Kompletní receptura položky: 0,03l guatemalský rum z panenského třtinového medu zrající metodou Solera v nadmořské výšce 2 300 m."
          }
        ]
      }
    ]
  },
  {
    "id": "tequily",
    "name": "tequily",
    "badge": "Tequily & Mezcals",
    "description": "Autentické mexické tequily 0,03L ze 100% modré agáve a sběratelské edice Catrina",
    "iconName": "Flame",
    "items": [
      {
        "id": "tres-alegres-compadres",
        "name": "Tres Alegres Compadres Blanco",
        "price": "89 Kč",
        "weight": "0,03l",
        "description": "0,03l neuleželá čistá tequila ze 100% modré agáve s tóny bylin, citrusů a pečené agáve",
        "questions": [
          {
            "id": "tres-alegres-compadres-vol",
            "question": "Jaký je servírovací objem / míra podsložky Tres Alegres Compadres Blanco?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Tres Alegres Compadres Blanco je 0,03 l."
          },
          {
            "id": "tres-alegres-compadres-ing-1",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Tres Alegres Compadres Blanco?",
            "correctAnswer": "Neuleželá čistá tequila ze 100% modré agáve s tóny bylin",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Tres Alegres Compadres Blanco je obsaženo: Neuleželá čistá tequila ze 100% modré agáve s tóny bylin. Kompletní receptura položky: 0,03l neuleželá čistá tequila ze 100% modré agáve s tóny bylin, citrusů a pečené agáve."
          },
          {
            "id": "tres-alegres-compadres-ing-2",
            "question": "Která z následujících surovin patří do podsložky Tres Alegres Compadres Blanco?",
            "correctAnswer": "Citrusů a pečené agáve",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Tres Alegres Compadres Blanco je obsaženo: Citrusů a pečené agáve. Kompletní receptura položky: 0,03l neuleželá čistá tequila ze 100% modré agáve s tóny bylin, citrusů a pečené agáve."
          }
        ]
      },
      {
        "id": "herradura-reposado",
        "name": "Herradura Reposado",
        "price": "168 Kč",
        "weight": "0,03l",
        "description": "0,03l prémiová tequila zrající celých 11 měsíců v sudech z amerického bílého dubu (zákon vyžaduje jen 2 měsíce)",
        "questions": [
          {
            "id": "herradura-reposado-vol",
            "question": "Jaký je servírovací objem / míra podsložky Herradura Reposado?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Herradura Reposado je 0,03 l."
          },
          {
            "id": "herradura-reposado-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Herradura Reposado?",
            "correctAnswer": "Prémiová tequila zrající celých 11 měsíců v sudech z amerického bílého dubu (zákon vyžaduje jen 2 měsíce)",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Herradura Reposado je obsaženo: Prémiová tequila zrající celých 11 měsíců v sudech z amerického bílého dubu (zákon vyžaduje jen 2 měsíce). Kompletní receptura položky: 0,03l prémiová tequila zrající celých 11 měsíců v sudech z amerického bílého dubu (zákon vyžaduje jen 2 měsíce)."
          }
        ]
      },
      {
        "id": "corralejo-reposado",
        "name": "Tequila Corralejo Reposado",
        "price": "149 Kč",
        "weight": "0,03l",
        "description": "0,03l 100% Agave, zrající 4 měsíce v unikátní kombinaci amerických, francouzských a mexických dubových sudů",
        "questions": [
          {
            "id": "corralejo-reposado-vol",
            "question": "Jaký je servírovací objem / míra podsložky Tequila Corralejo Reposado?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Tequila Corralejo Reposado je 0,03 l."
          },
          {
            "id": "corralejo-reposado-ing-1",
            "question": "Která z následujících surovin patří do podsložky Tequila Corralejo Reposado?",
            "correctAnswer": "100% Agave",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Tequila Corralejo Reposado je obsaženo: 100% Agave. Kompletní receptura položky: 0,03l 100% Agave, zrající 4 měsíce v unikátní kombinaci amerických, francouzských a mexických dubových sudů."
          },
          {
            "id": "corralejo-reposado-ing-2",
            "question": "Která z následujících surovin patří do podsložky Tequila Corralejo Reposado?",
            "correctAnswer": "Zrající 4 měsíce v unikátní kombinaci amerických",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Tequila Corralejo Reposado je obsaženo: Zrající 4 měsíce v unikátní kombinaci amerických. Kompletní receptura položky: 0,03l 100% Agave, zrající 4 měsíce v unikátní kombinaci amerických, francouzských a mexických dubových sudů."
          },
          {
            "id": "corralejo-reposado-ing-3",
            "question": "Která z následujících surovin patří do podsložky Tequila Corralejo Reposado?",
            "correctAnswer": "Francouzských a mexických dubových sudů",
            "distractors": [
              "Filtrace přes dřevěné uhlí",
              "Pramenitá horská voda"
            ],
            "explanation": "V podsložce Tequila Corralejo Reposado je obsaženo: Francouzských a mexických dubových sudů. Kompletní receptura položky: 0,03l 100% Agave, zrající 4 měsíce v unikátní kombinaci amerických, francouzských a mexických dubových sudů."
          }
        ]
      },
      {
        "id": "cofradia-rose-catrina",
        "name": "La Cofradia Reposado Rosé „ed. Catrina”",
        "price": "185 Kč",
        "weight": "0,03l",
        "description": "0,03l limitovaná edice v ručně malované keramické lahvi s motivem lebky Catrina, zrající v sudech po červeném víně s růžovým nádechem",
        "questions": [
          {
            "id": "cofradia-rose-catrina-vol",
            "question": "Jaký je servírovací objem / míra podsložky La Cofradia Reposado Rosé „ed. Catrina”?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky La Cofradia Reposado Rosé „ed. Catrina” je 0,03 l."
          },
          {
            "id": "cofradia-rose-catrina-ing-1",
            "question": "Která z následujících surovin patří do podsložky La Cofradia Reposado Rosé „ed. Catrina”?",
            "correctAnswer": "Limitovaná edice v ručně malované keramické lahvi s motivem lebky Catrina",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce La Cofradia Reposado Rosé „ed. Catrina” je obsaženo: Limitovaná edice v ručně malované keramické lahvi s motivem lebky Catrina. Kompletní receptura položky: 0,03l limitovaná edice v ručně malované keramické lahvi s motivem lebky Catrina, zrající v sudech po červeném víně s růžovým nádechem."
          },
          {
            "id": "cofradia-rose-catrina-ing-2",
            "question": "Která z následujících surovin patří do podsložky La Cofradia Reposado Rosé „ed. Catrina”?",
            "correctAnswer": "Zrající v sudech po červeném víně s růžovým nádechem",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce La Cofradia Reposado Rosé „ed. Catrina” je obsaženo: Zrající v sudech po červeném víně s růžovým nádechem. Kompletní receptura položky: 0,03l limitovaná edice v ručně malované keramické lahvi s motivem lebky Catrina, zrající v sudech po červeném víně s růžovým nádechem."
          }
        ]
      },
      {
        "id": "cofradia-black-catrina",
        "name": "La Cofradia Black „ed. Catrina”",
        "price": "185 Kč",
        "weight": "0,03l",
        "description": "0,03l černá sběratelská keramická edice Catrina, tequila zrající v silně vypálených dubových sudech s kouřovým tělem",
        "questions": [
          {
            "id": "cofradia-black-catrina-vol",
            "question": "Jaký je servírovací objem / míra podsložky La Cofradia Black „ed. Catrina”?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky La Cofradia Black „ed. Catrina” je 0,03 l."
          },
          {
            "id": "cofradia-black-catrina-ing-1",
            "question": "Která odrůdová či vinařská vlastnost charakterizuje víno La Cofradia Black „ed. Catrina”?",
            "correctAnswer": "Černá sběratelská keramická edice Catrina",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce La Cofradia Black „ed. Catrina” je obsaženo: Černá sběratelská keramická edice Catrina. Kompletní receptura položky: 0,03l černá sběratelská keramická edice Catrina, tequila zrající v silně vypálených dubových sudech s kouřovým tělem."
          },
          {
            "id": "cofradia-black-catrina-ing-2",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje La Cofradia Black „ed. Catrina”?",
            "correctAnswer": "Tequila zrající v silně vypálených dubových sudech s kouřovým tělem",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce La Cofradia Black „ed. Catrina” je obsaženo: Tequila zrající v silně vypálených dubových sudech s kouřovým tělem. Kompletní receptura položky: 0,03l černá sběratelská keramická edice Catrina, tequila zrající v silně vypálených dubových sudech s kouřovým tělem."
          }
        ]
      }
    ]
  },
  {
    "id": "whisky-whiskey-bourbon",
    "name": "whisky whiskey bourbon",
    "badge": "Whisky & Bourbon",
    "description": "Single malt i blended skotská whisky, irská whiskey, americký bourbon a český Goldcock 0,03L",
    "iconName": "Flame",
    "items": [
      {
        "id": "goldcock-blended",
        "name": "Goldcock blended",
        "price": "62 Kč",
        "weight": "0,03l",
        "description": "0,03l tradiční česká whisky z Těšetic z moravského ječmene, zrající v českých dubových sudech z bednárny v Těšeticích",
        "questions": [
          {
            "id": "goldcock-blended-vol",
            "question": "Jaký je servírovací objem / míra podsložky Goldcock blended?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Goldcock blended je 0,03 l."
          },
          {
            "id": "goldcock-blended-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Goldcock blended?",
            "correctAnswer": "Tradiční česká whisky z Těšetic z moravského ječmene",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Goldcock blended je obsaženo: Tradiční česká whisky z Těšetic z moravského ječmene. Kompletní receptura položky: 0,03l tradiční česká whisky z Těšetic z moravského ječmene, zrající v českých dubových sudech z bednárny v Těšeticích."
          },
          {
            "id": "goldcock-blended-ing-2",
            "question": "Která z následujících surovin patří do podsložky Goldcock blended?",
            "correctAnswer": "Zrající v českých dubových sudech z bednárny v Těšeticích",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Goldcock blended je obsaženo: Zrající v českých dubových sudech z bednárny v Těšeticích. Kompletní receptura položky: 0,03l tradiční česká whisky z Těšetic z moravského ječmene, zrající v českých dubových sudech z bednárny v Těšeticích."
          }
        ]
      },
      {
        "id": "glenfiddich-15y",
        "name": "Glenfiddich 15y",
        "price": "165 Kč",
        "weight": "0,03l",
        "description": "0,03l skotská single malt whisky zrající unikátním systémem Solera ve třech typech sudů: po sherry, bourbonu a v novém dubu",
        "questions": [
          {
            "id": "glenfiddich-15y-vol",
            "question": "Jaký je servírovací objem / míra podsložky Glenfiddich 15y?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Glenfiddich 15y je 0,03 l."
          },
          {
            "id": "glenfiddich-15y-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Glenfiddich 15y?",
            "correctAnswer": "Skotská single malt whisky zrající unikátním systémem Solera ve třech typech sudů: po sherry",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Glenfiddich 15y je obsaženo: Skotská single malt whisky zrající unikátním systémem Solera ve třech typech sudů: po sherry. Kompletní receptura položky: 0,03l skotská single malt whisky zrající unikátním systémem Solera ve třech typech sudů: po sherry, bourbonu a v novém dubu."
          },
          {
            "id": "glenfiddich-15y-ing-2",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Glenfiddich 15y?",
            "correctAnswer": "Bourbonu a v novém dubu",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Glenfiddich 15y je obsaženo: Bourbonu a v novém dubu. Kompletní receptura položky: 0,03l skotská single malt whisky zrající unikátním systémem Solera ve třech typech sudů: po sherry, bourbonu a v novém dubu."
          }
        ]
      },
      {
        "id": "talisker-10y",
        "name": "Talisker 10y",
        "price": "165 Kč",
        "weight": "0,03l",
        "description": "0,03l ikonická ostrovní single malt whisky z drsného skotského ostrova Skye, výrazně rašelinová, kouřová s tóny mořské soli a černého pepře",
        "questions": [
          {
            "id": "talisker-10y-vol",
            "question": "Jaký je servírovací objem / míra podsložky Talisker 10y?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Talisker 10y je 0,03 l."
          },
          {
            "id": "talisker-10y-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Talisker 10y?",
            "correctAnswer": "Ikonická ostrovní single malt whisky z drsného skotského ostrova Skye",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Talisker 10y je obsaženo: Ikonická ostrovní single malt whisky z drsného skotského ostrova Skye. Kompletní receptura položky: 0,03l ikonická ostrovní single malt whisky z drsného skotského ostrova Skye, výrazně rašelinová, kouřová s tóny mořské soli a černého pepře."
          },
          {
            "id": "talisker-10y-ing-2",
            "question": "Která z následujících surovin patří do podsložky Talisker 10y?",
            "correctAnswer": "Výrazně rašelinová",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Talisker 10y je obsaženo: Výrazně rašelinová. Kompletní receptura položky: 0,03l ikonická ostrovní single malt whisky z drsného skotského ostrova Skye, výrazně rašelinová, kouřová s tóny mořské soli a černého pepře."
          },
          {
            "id": "talisker-10y-ing-3",
            "question": "Která z následujících surovin patří do podsložky Talisker 10y?",
            "correctAnswer": "Kouřová s tóny mořské soli a černého pepře",
            "distractors": [
              "Filtrace přes dřevěné uhlí",
              "Pramenitá horská voda"
            ],
            "explanation": "V podsložce Talisker 10y je obsaženo: Kouřová s tóny mořské soli a černého pepře. Kompletní receptura položky: 0,03l ikonická ostrovní single malt whisky z drsného skotského ostrova Skye, výrazně rašelinová, kouřová s tóny mořské soli a černého pepře."
          }
        ]
      },
      {
        "id": "monkey-shoulder",
        "name": "Monkey Shoulder",
        "price": "112 Kč",
        "weight": "0,03l",
        "description": "0,03l skotská blended malt whisky míchaná ze tří předních palíren z oblasti Speyside, lahodná s vanilkovým nádechem",
        "questions": [
          {
            "id": "monkey-shoulder-vol",
            "question": "Jaký je servírovací objem / míra podsložky Monkey Shoulder?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Monkey Shoulder je 0,03 l."
          },
          {
            "id": "monkey-shoulder-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Monkey Shoulder?",
            "correctAnswer": "Skotská blended malt whisky míchaná ze tří předních palíren z oblasti Speyside",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Monkey Shoulder je obsaženo: Skotská blended malt whisky míchaná ze tří předních palíren z oblasti Speyside. Kompletní receptura položky: 0,03l skotská blended malt whisky míchaná ze tří předních palíren z oblasti Speyside, lahodná s vanilkovým nádechem."
          },
          {
            "id": "monkey-shoulder-ing-2",
            "question": "Která z následujících surovin patří do podsložky Monkey Shoulder?",
            "correctAnswer": "Lahodná s vanilkovým nádechem",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Monkey Shoulder je obsaženo: Lahodná s vanilkovým nádechem. Kompletní receptura položky: 0,03l skotská blended malt whisky míchaná ze tří předních palíren z oblasti Speyside, lahodná s vanilkovým nádechem."
          }
        ]
      },
      {
        "id": "jameson",
        "name": "Jameson",
        "price": "75 Kč",
        "weight": "0,03l",
        "description": "0,03l nejprodávanější irská whiskey na světě, třikrát destilovaná pro maximální jemnost",
        "questions": [
          {
            "id": "jameson-vol",
            "question": "Jaký je servírovací objem / míra podsložky Jameson?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Jameson je 0,03 l."
          },
          {
            "id": "jameson-ing-1",
            "question": "Která z následujících surovin patří do podsložky Jameson?",
            "correctAnswer": "Nejprodávanější irská whiskey na světě",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Jameson je obsaženo: Nejprodávanější irská whiskey na světě. Kompletní receptura položky: 0,03l nejprodávanější irská whiskey na světě, třikrát destilovaná pro maximální jemnost."
          },
          {
            "id": "jameson-ing-2",
            "question": "Která z následujících surovin patří do podsložky Jameson?",
            "correctAnswer": "Třikrát destilovaná pro maximální jemnost",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Jameson je obsaženo: Třikrát destilovaná pro maximální jemnost. Kompletní receptura položky: 0,03l nejprodávanější irská whiskey na světě, třikrát destilovaná pro maximální jemnost."
          }
        ]
      },
      {
        "id": "jack-daniels",
        "name": "Jack Daniels",
        "price": "105 Kč",
        "weight": "0,03l",
        "description": "0,03l Tennessee whiskey filtrovaná kapku po kapce přes třímetrovou vrstvu uhlí z javoru cukrového (Lincoln County Process)",
        "questions": [
          {
            "id": "jack-daniels-vol",
            "question": "Jaký je servírovací objem / míra podsložky Jack Daniels?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Jack Daniels je 0,03 l."
          },
          {
            "id": "jack-daniels-ing-1",
            "question": "Která z následujících surovin patří do podsložky Jack Daniels?",
            "correctAnswer": "Tennessee whiskey filtrovaná kapku po kapce přes třímetrovou vrstvu uhlí z javoru cukrového (Lincoln County Process)",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Jack Daniels je obsaženo: Tennessee whiskey filtrovaná kapku po kapce přes třímetrovou vrstvu uhlí z javoru cukrového (Lincoln County Process). Kompletní receptura položky: 0,03l Tennessee whiskey filtrovaná kapku po kapce přes třímetrovou vrstvu uhlí z javoru cukrového (Lincoln County Process)."
          }
        ]
      }
    ]
  },
  {
    "id": "brandy-a-cognac",
    "name": "Brandy a cognac",
    "badge": "Brandy & Cognac",
    "description": "Ušlechtilá řecká brandy Metaxa a prestižní francouzský koňak Rémy Martin 0,03L",
    "iconName": "Wine",
    "items": [
      {
        "id": "metaxa-5",
        "name": "Metaxa *****",
        "price": "75 Kč",
        "weight": "0,03l",
        "description": "0,03l řecká pálenka s tajnou směsí muškátových vín z egejských ostrovů Samos a Lemnos a středomořských bylin",
        "questions": [
          {
            "id": "metaxa-5-vol",
            "question": "Jaký je servírovací objem / míra podsložky Metaxa *****?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Metaxa ***** je 0,03 l."
          },
          {
            "id": "metaxa-5-ing-1",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Metaxa *****?",
            "correctAnswer": "Řecká pálenka s tajnou směsí muškátových vín z egejských ostrovů Samos a Lemnos a středomořských bylin",
            "distractors": [
              "Libeček",
              "Estragon"
            ],
            "explanation": "V podsložce Metaxa ***** je obsaženo: Řecká pálenka s tajnou směsí muškátových vín z egejských ostrovů Samos a Lemnos a středomořských bylin. Kompletní receptura položky: 0,03l řecká pálenka s tajnou směsí muškátových vín z egejských ostrovů Samos a Lemnos a středomořských bylin."
          }
        ]
      },
      {
        "id": "remy-martin-1738",
        "name": "Remy Martin 1738",
        "price": "170 Kč",
        "weight": "0,03l",
        "description": "0,03l prestižní francouzský koňak Fine Champagne (1738 Accord Royal) zrající v silně opálených dubových sudech, plný tónů fíků, švestek a karamelu",
        "questions": [
          {
            "id": "remy-martin-1738-vol",
            "question": "Jaký je servírovací objem / míra podsložky Remy Martin 1738?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Remy Martin 1738 je 0,03 l."
          },
          {
            "id": "remy-martin-1738-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Remy Martin 1738?",
            "correctAnswer": "Prestižní francouzský koňak Fine Champagne (1738 Accord Royal) zrající v silně opálených dubových sudech",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Remy Martin 1738 je obsaženo: Prestižní francouzský koňak Fine Champagne (1738 Accord Royal) zrající v silně opálených dubových sudech. Kompletní receptura položky: 0,03l prestižní francouzský koňak Fine Champagne (1738 Accord Royal) zrající v silně opálených dubových sudech, plný tónů fíků, švestek a karamelu."
          },
          {
            "id": "remy-martin-1738-ing-2",
            "question": "Která z následujících surovin patří do podsložky Remy Martin 1738?",
            "correctAnswer": "Plný tónů fíků",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Remy Martin 1738 je obsaženo: Plný tónů fíků. Kompletní receptura položky: 0,03l prestižní francouzský koňak Fine Champagne (1738 Accord Royal) zrající v silně opálených dubových sudech, plný tónů fíků, švestek a karamelu."
          },
          {
            "id": "remy-martin-1738-ing-3",
            "question": "Která z následujících surovin patří do podsložky Remy Martin 1738?",
            "correctAnswer": "Švestek a karamelu",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Remy Martin 1738 je obsaženo: Švestek a karamelu. Kompletní receptura položky: 0,03l prestižní francouzský koňak Fine Champagne (1738 Accord Royal) zrající v silně opálených dubových sudech, plný tónů fíků, švestek a karamelu."
          }
        ]
      }
    ]
  },
  {
    "id": "palenky-a-likery",
    "name": "pálenky a likéry",
    "badge": "Pálenky & Likéry",
    "description": "Pivovarská FUZOVICE 45%, bylinné likéry Žufánek, řemeslné speciály a tradiční digestivy 0,03L",
    "iconName": "Sparkles",
    "items": [
      {
        "id": "fuzovice",
        "name": "Fuzovice",
        "price": "140 Kč",
        "weight": "0,03l",
        "description": "0,03l FUZE/Agnes 45 %, naše jedinečná autorská pálenka z pivní mladiny uvařené z plzeňského a mnichovského sladu s chmelem Mandarina Bavaria",
        "notes": "Vlajkový pivovarský destilát restaurace FUZE vypálený ve spolupráci s palírnou Agnes Bohdaneč.",
        "questions": [
          {
            "id": "fuzovice-vol",
            "question": "Jaký je servírovací objem / míra podsložky Fuzovice?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Fuzovice je 0,03 l."
          },
          {
            "id": "fuzovice-ing-1",
            "question": "Která z následujících surovin patří do podsložky Fuzovice?",
            "correctAnswer": "FUZE/Agnes 45 %",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Fuzovice je obsaženo: FUZE/Agnes 45 %. Kompletní receptura položky: 0,03l FUZE/Agnes 45 %, naše jedinečná autorská pálenka z pivní mladiny uvařené z plzeňského a mnichovského sladu s chmelem Mandarina Bavaria."
          },
          {
            "id": "fuzovice-ing-2",
            "question": "Která pivovarská surovina nebo vlastnost charakterizuje Fuzovice?",
            "correctAnswer": "Naše jedinečná autorská pálenka z pivní mladiny uvařené z plzeňského a mnichovského sladu s chmelem Mandarina Bavaria",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Fuzovice je obsaženo: Naše jedinečná autorská pálenka z pivní mladiny uvařené z plzeňského a mnichovského sladu s chmelem Mandarina Bavaria. Kompletní receptura položky: 0,03l FUZE/Agnes 45 %, naše jedinečná autorská pálenka z pivní mladiny uvařené z plzeňského a mnichovského sladu s chmelem Mandarina Bavaria."
          }
        ]
      },
      {
        "id": "absinth-st-antoine",
        "name": "Absinth St. Antoine",
        "price": "165 Kč",
        "weight": "0,03l",
        "description": "0,03l Žufánek, přírodní destilovaný absint z pravého pelyňku pravého (Artemisia absinthium), anýzu a fenyklu",
        "questions": [
          {
            "id": "absinth-st-antoine-vol",
            "question": "Jaký je servírovací objem / míra podsložky Absinth St. Antoine?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Absinth St. Antoine je 0,03 l."
          },
          {
            "id": "absinth-st-antoine-ing-1",
            "question": "Která z následujících surovin patří do podsložky Absinth St. Antoine?",
            "correctAnswer": "Žufánek",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Absinth St. Antoine je obsaženo: Žufánek. Kompletní receptura položky: 0,03l Žufánek, přírodní destilovaný absint z pravého pelyňku pravého (Artemisia absinthium), anýzu a fenyklu."
          },
          {
            "id": "absinth-st-antoine-ing-2",
            "question": "Která z následujících surovin patří do podsložky Absinth St. Antoine?",
            "correctAnswer": "Přírodní destilovaný absint z pravého pelyňku pravého (Artemisia absinthium)",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Absinth St. Antoine je obsaženo: Přírodní destilovaný absint z pravého pelyňku pravého (Artemisia absinthium). Kompletní receptura položky: 0,03l Žufánek, přírodní destilovaný absint z pravého pelyňku pravého (Artemisia absinthium), anýzu a fenyklu."
          },
          {
            "id": "absinth-st-antoine-ing-3",
            "question": "Která z následujících surovin patří do podsložky Absinth St. Antoine?",
            "correctAnswer": "Anýzu a fenyklu",
            "distractors": [
              "Filtrace přes dřevěné uhlí",
              "Pramenitá horská voda"
            ],
            "explanation": "V podsložce Absinth St. Antoine je obsaženo: Anýzu a fenyklu. Kompletní receptura položky: 0,03l Žufánek, přírodní destilovaný absint z pravého pelyňku pravého (Artemisia absinthium), anýzu a fenyklu."
          }
        ]
      },
      {
        "id": "kminka-garage22",
        "name": "Kmínka",
        "price": "78 Kč",
        "weight": "0,03l",
        "description": "0,03l Garage 22, moderní řemeslný likér s destilovaným českým kmínem a citrusovou kůrou z pražských Holešovic",
        "questions": [
          {
            "id": "kminka-garage22-vol",
            "question": "Jaký je servírovací objem / míra podsložky Kmínka?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Kmínka je 0,03 l."
          },
          {
            "id": "kminka-garage22-ing-1",
            "question": "Která z následujících surovin patří do podsložky Kmínka?",
            "correctAnswer": "Garage 22",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Kmínka je obsaženo: Garage 22. Kompletní receptura položky: 0,03l Garage 22, moderní řemeslný likér s destilovaným českým kmínem a citrusovou kůrou z pražských Holešovic."
          },
          {
            "id": "kminka-garage22-ing-2",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Kmínka?",
            "correctAnswer": "Moderní řemeslný likér s destilovaným českým kmínem a citrusovou kůrou z pražských Holešovic",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Kmínka je obsaženo: Moderní řemeslný likér s destilovaným českým kmínem a citrusovou kůrou z pražských Holešovic. Kompletní receptura položky: 0,03l Garage 22, moderní řemeslný likér s destilovaným českým kmínem a citrusovou kůrou z pražských Holešovic."
          }
        ]
      },
      {
        "id": "kontusovka-zufanek",
        "name": "Kontušovka",
        "price": "95 Kč",
        "weight": "0,03l",
        "description": "0,03l Žufánek, tradiční staročeský anýzový bylinný likér s koriandrem, fenyklem a badyánem podle receptury z 19. století",
        "questions": [
          {
            "id": "kontusovka-zufanek-vol",
            "question": "Jaký je servírovací objem / míra podsložky Kontušovka?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Kontušovka je 0,03 l."
          },
          {
            "id": "kontusovka-zufanek-ing-1",
            "question": "Která z následujících surovin patří do podsložky Kontušovka?",
            "correctAnswer": "Žufánek",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Kontušovka je obsaženo: Žufánek. Kompletní receptura položky: 0,03l Žufánek, tradiční staročeský anýzový bylinný likér s koriandrem, fenyklem a badyánem podle receptury z 19. století."
          },
          {
            "id": "kontusovka-zufanek-ing-2",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Kontušovka?",
            "correctAnswer": "Tradiční staročeský anýzový bylinný likér s koriandrem",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Kontušovka je obsaženo: Tradiční staročeský anýzový bylinný likér s koriandrem. Kompletní receptura položky: 0,03l Žufánek, tradiční staročeský anýzový bylinný likér s koriandrem, fenyklem a badyánem podle receptury z 19. století."
          },
          {
            "id": "kontusovka-zufanek-ing-3",
            "question": "Která z následujících surovin patří do podsložky Kontušovka?",
            "correctAnswer": "Fenyklem a badyánem podle receptury z 19. století",
            "distractors": [
              "Filtrace přes dřevěné uhlí",
              "Pramenitá horská voda"
            ],
            "explanation": "V podsložce Kontušovka je obsaženo: Fenyklem a badyánem podle receptury z 19. století. Kompletní receptura položky: 0,03l Žufánek, tradiční staročeský anýzový bylinný likér s koriandrem, fenyklem a badyánem podle receptury z 19. století."
          }
        ]
      },
      {
        "id": "orechovy-liker-radlik",
        "name": "Ořechový likér",
        "price": "119 Kč",
        "weight": "0,03l",
        "description": "0,03l Radlík, jemný ořechový likér macerovaný ze zelených svatojánských vlašských ořechů a tajné směsi koření",
        "questions": [
          {
            "id": "orechovy-liker-radlik-vol",
            "question": "Jaký je servírovací objem / míra podsložky Ořechový likér?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Ořechový likér je 0,03 l."
          },
          {
            "id": "orechovy-liker-radlik-ing-1",
            "question": "Která z následujících surovin patří do podsložky Ořechový likér?",
            "correctAnswer": "Radlík",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Ořechový likér je obsaženo: Radlík. Kompletní receptura položky: 0,03l Radlík, jemný ořechový likér macerovaný ze zelených svatojánských vlašských ořechů a tajné směsi koření."
          },
          {
            "id": "orechovy-liker-radlik-ing-2",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Ořechový likér?",
            "correctAnswer": "Jemný ořechový likér macerovaný ze zelených svatojánských vlašských ořechů a tajné směsi koření",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Ořechový likér je obsaženo: Jemný ořechový likér macerovaný ze zelených svatojánských vlašských ořechů a tajné směsi koření. Kompletní receptura položky: 0,03l Radlík, jemný ořechový likér macerovaný ze zelených svatojánských vlašských ořechů a tajné směsi koření."
          }
        ]
      },
      {
        "id": "hustopecska-mandlovka",
        "name": "Hustopečská Mandlovka",
        "price": "98 Kč",
        "weight": "0,03l",
        "description": "0,03l originální moravská mandlová lihovina z mandloňových sadů v Hustopečích",
        "questions": [
          {
            "id": "hustopecska-mandlovka-vol",
            "question": "Jaký je servírovací objem / míra podsložky Hustopečská Mandlovka?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Hustopečská Mandlovka je 0,03 l."
          },
          {
            "id": "hustopecska-mandlovka-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Hustopečská Mandlovka?",
            "correctAnswer": "Originální moravská mandlová lihovina z mandloňových sadů v Hustopečích",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Hustopečská Mandlovka je obsaženo: Originální moravská mandlová lihovina z mandloňových sadů v Hustopečích. Kompletní receptura položky: 0,03l originální moravská mandlová lihovina z mandloňových sadů v Hustopečích."
          }
        ]
      },
      {
        "id": "jagermeister",
        "name": "Jägermeister",
        "price": "65 Kč",
        "weight": "0,03l",
        "description": "0,03l německý bylinný likér z 56 bylin, květů, kořenů a plodů zrající rok v dubových sudech",
        "questions": [
          {
            "id": "jagermeister-vol",
            "question": "Jaký je servírovací objem / míra podsložky Jägermeister?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Jägermeister je 0,03 l."
          },
          {
            "id": "jagermeister-ing-1",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Jägermeister?",
            "correctAnswer": "Německý bylinný likér z 56 bylin",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Jägermeister je obsaženo: Německý bylinný likér z 56 bylin. Kompletní receptura položky: 0,03l německý bylinný likér z 56 bylin, květů, kořenů a plodů zrající rok v dubových sudech."
          },
          {
            "id": "jagermeister-ing-2",
            "question": "Která z následujících surovin patří do podsložky Jägermeister?",
            "correctAnswer": "Květů",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Jägermeister je obsaženo: Květů. Kompletní receptura položky: 0,03l německý bylinný likér z 56 bylin, květů, kořenů a plodů zrající rok v dubových sudech."
          },
          {
            "id": "jagermeister-ing-3",
            "question": "Která z následujících surovin patří do podsložky Jägermeister?",
            "correctAnswer": "Kořenů a plodů zrající rok v dubových sudech",
            "distractors": [
              "Filtrace přes dřevěné uhlí",
              "Pramenitá horská voda"
            ],
            "explanation": "V podsložce Jägermeister je obsaženo: Kořenů a plodů zrající rok v dubových sudech. Kompletní receptura položky: 0,03l německý bylinný likér z 56 bylin, květů, kořenů a plodů zrající rok v dubových sudech."
          }
        ]
      },
      {
        "id": "podebradska-samicka",
        "name": "Poděbradská Samička",
        "price": "58 Kč",
        "weight": "0,03l",
        "description": "0,03l tradiční polabský bylinný likér s vyváženou hořkosladkou chutí",
        "questions": [
          {
            "id": "podebradska-samicka-vol",
            "question": "Jaký je servírovací objem / míra podsložky Poděbradská Samička?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Poděbradská Samička je 0,03 l."
          },
          {
            "id": "podebradska-samicka-ing-1",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Poděbradská Samička?",
            "correctAnswer": "Tradiční polabský bylinný likér s vyváženou hořkosladkou chutí",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Poděbradská Samička je obsaženo: Tradiční polabský bylinný likér s vyváženou hořkosladkou chutí. Kompletní receptura položky: 0,03l tradiční polabský bylinný likér s vyváženou hořkosladkou chutí."
          }
        ]
      },
      {
        "id": "becherovka-unfiltered",
        "name": "Becherovka Unfiltered",
        "price": "65 Kč",
        "weight": "0,03l",
        "description": "0,03l karlovarský bylinný likér v nefiltrované prémiové podobě se zlatavým zákalem a intenzivnější chutí bylin",
        "questions": [
          {
            "id": "becherovka-unfiltered-vol",
            "question": "Jaký je servírovací objem / míra podsložky Becherovka Unfiltered?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Becherovka Unfiltered je 0,03 l."
          },
          {
            "id": "becherovka-unfiltered-ing-1",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Becherovka Unfiltered?",
            "correctAnswer": "Karlovarský bylinný likér v nefiltrované prémiové podobě se zlatavým zákalem a intenzivnější chutí bylin",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Becherovka Unfiltered je obsaženo: Karlovarský bylinný likér v nefiltrované prémiové podobě se zlatavým zákalem a intenzivnější chutí bylin. Kompletní receptura položky: 0,03l karlovarský bylinný likér v nefiltrované prémiové podobě se zlatavým zákalem a intenzivnější chutí bylin."
          }
        ]
      },
      {
        "id": "smoked-grappa-tosolini",
        "name": "Smoked Grappa Bepi Tosolini",
        "price": "195 Kč",
        "weight": "0,03l",
        "description": "0,03l ušlechtilá italská grappa z vylisovaných hroznů uzená dubovým dřevem z rodinné palírny v Udine",
        "questions": [
          {
            "id": "smoked-grappa-tosolini-vol",
            "question": "Jaký je servírovací objem / míra podsložky Smoked Grappa Bepi Tosolini?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Smoked Grappa Bepi Tosolini je 0,03 l."
          },
          {
            "id": "smoked-grappa-tosolini-ing-1",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Smoked Grappa Bepi Tosolini?",
            "correctAnswer": "Ušlechtilá italská grappa z vylisovaných hroznů uzená dubovým dřevem z rodinné palírny v Udine",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Smoked Grappa Bepi Tosolini je obsaženo: Ušlechtilá italská grappa z vylisovaných hroznů uzená dubovým dřevem z rodinné palírny v Udine. Kompletní receptura položky: 0,03l ušlechtilá italská grappa z vylisovaných hroznů uzená dubovým dřevem z rodinné palírny v Udine."
          }
        ]
      },
      {
        "id": "bezovy-elixir-jelinek",
        "name": "Bezový elixír R.Jelínek",
        "price": "58 Kč",
        "weight": "0,03l",
        "description": "0,03l moravský likér z květů černého bezu od vizovického Rudolfa Jelínka",
        "questions": [
          {
            "id": "bezovy-elixir-jelinek-vol",
            "question": "Jaký je servírovací objem / míra podsložky Bezový elixír R.Jelínek?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Bezový elixír R.Jelínek je 0,03 l."
          },
          {
            "id": "bezovy-elixir-jelinek-ing-1",
            "question": "Která z následujících surovin patří do podsložky Bezový elixír R.Jelínek?",
            "correctAnswer": "Moravský likér z květů černého bezu od vizovického Rudolfa Jelínka",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Bezový elixír R.Jelínek je obsaženo: Moravský likér z květů černého bezu od vizovického Rudolfa Jelínka. Kompletní receptura položky: 0,03l moravský likér z květů černého bezu od vizovického Rudolfa Jelínka."
          }
        ]
      },
      {
        "id": "creme-de-cassis",
        "name": "Créme de cassis",
        "price": "68 Kč",
        "weight": "0,03l",
        "description": "0,03l Le Duc Charmant / Jenčík, lahodný hustý likér z černého rybízu",
        "questions": [
          {
            "id": "creme-de-cassis-vol",
            "question": "Jaký je servírovací objem / míra podsložky Créme de cassis?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Créme de cassis je 0,03 l."
          },
          {
            "id": "creme-de-cassis-ing-1",
            "question": "Která z následujících surovin patří do podsložky Créme de cassis?",
            "correctAnswer": "Le Duc Charmant / Jenčík",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Créme de cassis je obsaženo: Le Duc Charmant / Jenčík. Kompletní receptura položky: 0,03l Le Duc Charmant / Jenčík, lahodný hustý likér z černého rybízu."
          },
          {
            "id": "creme-de-cassis-ing-2",
            "question": "Která z následujících surovin patří do podsložky Créme de cassis?",
            "correctAnswer": "Lahodný hustý likér z černého rybízu",
            "distractors": [
              "Zlatožluté meruňky",
              "Zrání v dubovém sudu"
            ],
            "explanation": "V podsložce Créme de cassis je obsaženo: Lahodný hustý likér z černého rybízu. Kompletní receptura položky: 0,03l Le Duc Charmant / Jenčík, lahodný hustý likér z černého rybízu."
          }
        ]
      },
      {
        "id": "vajecnak-bartida",
        "name": "Vaječňák Bartida",
        "price": "50 Kč",
        "weight": "0,03l",
        "description": "0,03l poctivý hustý vaječný likér s mimořádným podílem vaječných žloutků a kapkou třtinového rumu",
        "questions": [
          {
            "id": "vajecnak-bartida-vol",
            "question": "Jaký je servírovací objem / míra podsložky Vaječňák Bartida?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Vaječňák Bartida je 0,03 l."
          },
          {
            "id": "vajecnak-bartida-ing-1",
            "question": "Který destilát nebo likér je klíčovou složkou nápoje Vaječňák Bartida?",
            "correctAnswer": "Poctivý hustý vaječný likér s mimořádným podílem vaječných žloutků a kapkou třtinového rumu",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Vaječňák Bartida je obsaženo: Poctivý hustý vaječný likér s mimořádným podílem vaječných žloutků a kapkou třtinového rumu. Kompletní receptura položky: 0,03l poctivý hustý vaječný likér s mimořádným podílem vaječných žloutků a kapkou třtinového rumu."
          }
        ]
      },
      {
        "id": "griotte-bartida",
        "name": "Griotte Original Bartida",
        "price": "50 Kč",
        "weight": "0,03l",
        "description": "0,03l prémiový višňový likér s vysokým podílem čisté višňové šťávy a ovocného destilátu",
        "questions": [
          {
            "id": "griotte-bartida-vol",
            "question": "Jaký je servírovací objem / míra podsložky Griotte Original Bartida?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Griotte Original Bartida je 0,03 l."
          },
          {
            "id": "griotte-bartida-ing-1",
            "question": "Která z následujících surovin patří do podsložky Griotte Original Bartida?",
            "correctAnswer": "Prémiový višňový likér s vysokým podílem čisté višňové šťávy a ovocného destilátu",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Griotte Original Bartida je obsaženo: Prémiový višňový likér s vysokým podílem čisté višňové šťávy a ovocného destilátu. Kompletní receptura položky: 0,03l prémiový višňový likér s vysokým podílem čisté višňové šťávy a ovocného destilátu."
          }
        ]
      },
      {
        "id": "zelena-bartida",
        "name": "Zelená Bartida",
        "price": "50 Kč",
        "weight": "0,03l",
        "description": "0,03l prémiový peprmintový likér vyráběný z pravého přírodního oleje máty peprné",
        "questions": [
          {
            "id": "zelena-bartida-vol",
            "question": "Jaký je servírovací objem / míra podsložky Zelená Bartida?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Zelená Bartida je 0,03 l."
          },
          {
            "id": "zelena-bartida-ing-1",
            "question": "Která z následujících surovin patří do podsložky Zelená Bartida?",
            "correctAnswer": "Prémiový peprmintový likér vyráběný z pravého přírodního oleje máty peprné",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Zelená Bartida je obsaženo: Prémiový peprmintový likér vyráběný z pravého přírodního oleje máty peprné. Kompletní receptura položky: 0,03l prémiový peprmintový likér vyráběný z pravého přírodního oleje máty peprné."
          }
        ]
      },
      {
        "id": "zelena-svach",
        "name": "Zelená Svach",
        "price": "58 Kč",
        "weight": "0,03l",
        "description": "0,03l řemeslný jihočeský peprmintový likér z lihovaru Svachovka z pravé macerované máty peprné",
        "questions": [
          {
            "id": "zelena-svach-vol",
            "question": "Jaký je servírovací objem / míra podsložky Zelená Svach?",
            "correctAnswer": "0,03 l",
            "distractors": [
              "0,05 l",
              "0,02 l"
            ],
            "explanation": "Servírovací míra / objem podsložky Zelená Svach je 0,03 l."
          },
          {
            "id": "zelena-svach-ing-1",
            "question": "Která z následujících surovin patří do podsložky Zelená Svach?",
            "correctAnswer": "Řemeslný jihočeský peprmintový likér z lihovaru Svachovka z pravé macerované máty peprné",
            "distractors": [
              "Švestkový kvas",
              "Hrušky Williams"
            ],
            "explanation": "V podsložce Zelená Svach je obsaženo: Řemeslný jihočeský peprmintový likér z lihovaru Svachovka z pravé macerované máty peprné. Kompletní receptura položky: 0,03l řemeslný jihočeský peprmintový likér z lihovaru Svachovka z pravé macerované máty peprné."
          }
        ]
      }
    ]
  },
  {
    "id": "alergeny",
    "name": "Alergeny (1–14)",
    "badge": "Alergeny",
    "description": "Zákonný seznam 14 hlavních potravinových alergenů podle nařízení EU č. 1169/2011 s číslem, druhem alergenu a výskytem v gastronomii",
    "iconName": "ShieldAlert",
    "items": [
      {
        "id": "alergen-1",
        "name": "1 – Obiloviny obsahující lepek",
        "weight": "Číslo 1",
        "price": "Druh: Obiloviny s lepkem",
        "allergens": [
          "1"
        ],
        "description": "Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).",
        "notes": "Alergen č. 1: Základní alergen v pečivu, těstech, pivním sladu a zahuštěných omáčkách. Zásadní pro celiaky a alergiky na lepek.",
        "questions": [
          {
            "id": "alergen-1-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Pšenice (včetně špaldy a kamutu)",
            "distractors": [
              "Krevety a humři",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Pšenice (včetně špaldy a kamutu). Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Žito",
            "distractors": [
              "Podzemnice olejná (arašídy)",
              "Sójová omáčka a tofu"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Žito. Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Ječmen",
            "distractors": [
              "Vlašské a lískové ořechy",
              "Celer bulvový a řapíkatý"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Ječmen. Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo",
            "distractors": [
              "Plnotučná a dijonská hořčice",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo. Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Těstoviny",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Těstoviny. Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Strouhanka",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Strouhanka. Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Pivo",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Pivo. Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-8",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Omáčky se zásmažkou",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Omáčky se zásmažkou. Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-9",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Knedlíky)",
            "distractors": [
              "Sezamová semena a tahini",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Knedlíky). Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "1 – Obiloviny obsahující lepek obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "alergen-2",
        "name": "2 – Korýši a výrobky z nich",
        "weight": "Číslo 2",
        "price": "Druh: Korýši",
        "allergens": [
          "2"
        ],
        "description": "Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).",
        "notes": "Alergen č. 2: Často v asijských omáčkách, mořských plodech a vývarech. Pozor na smažení ve fritézách společně s jinými pokrmy.",
        "questions": [
          {
            "id": "alergen-2-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Krevety",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 2 – Korýši a výrobky z nich je obsaženo: Krevety. Kompletní receptura položky: Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).."
          },
          {
            "id": "alergen-2-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Humři",
            "distractors": [
              "Podzemnice olejná (arašídy)",
              "Sójová omáčka a tofu"
            ],
            "explanation": "V podsložce 2 – Korýši a výrobky z nich je obsaženo: Humři. Kompletní receptura položky: Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).."
          },
          {
            "id": "alergen-2-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Krabi",
            "distractors": [
              "Vlašské a lískové ořechy",
              "Celer bulvový a řapíkatý"
            ],
            "explanation": "V podsložce 2 – Korýši a výrobky z nich je obsaženo: Krabi. Kompletní receptura položky: Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).."
          },
          {
            "id": "alergen-2-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Raci",
            "distractors": [
              "Plnotučná a dijonská hořčice",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 2 – Korýši a výrobky z nich je obsaženo: Raci. Kompletní receptura položky: Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).."
          },
          {
            "id": "alergen-2-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Langusty a výrobky z nich (krevetové pasty",
            "distractors": [
              "Pšenice a ječmen",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 2 – Korýši a výrobky z nich je obsaženo: Langusty a výrobky z nich (krevetové pasty. Kompletní receptura položky: Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).."
          },
          {
            "id": "alergen-2-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Asijské polévky tom yum",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 2 – Korýši a výrobky z nich je obsaženo: Asijské polévky tom yum. Kompletní receptura položky: Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).."
          },
          {
            "id": "alergen-2-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Krevetové chipsy krupuk)",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 2 – Korýši a výrobky z nich je obsaženo: Krevetové chipsy krupuk). Kompletní receptura položky: Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).."
          },
          {
            "id": "alergen-2-allergen-2",
            "question": "Který z následujících alergenů obsahuje podsložka 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Alergen č. 2 – Korýši a výrobky z nich",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "2 – Korýši a výrobky z nich obsahuje Alergen č. 2 – Korýši a výrobky z nich (krevety, krabi, humři, krevetová pasta). Všechny evidované alergeny této podsložky: Korýši a výrobky z nich."
          }
        ]
      },
      {
        "id": "alergen-3",
        "name": "3 – Vejce a výrobky z nich",
        "weight": "Číslo 3",
        "price": "Druh: Vejce",
        "allergens": [
          "3"
        ],
        "description": "Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).",
        "notes": "Alergen č. 3: Základní složka majonézových emulzí, vaječných likérů, dezertů a trojobalů.",
        "questions": [
          {
            "id": "alergen-3-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Slepičí",
            "distractors": [
              "Krevety a humři",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Slepičí. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Křepelčí i jiná ptačí vejce a výrobky z nich (majonézy",
            "distractors": [
              "Podzemnice olejná (arašídy)",
              "Sójová omáčka a tofu"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Křepelčí i jiná ptačí vejce a výrobky z nich (majonézy. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Tatarské omáčky",
            "distractors": [
              "Vlašské a lískové ořechy",
              "Celer bulvový a řapíkatý"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Tatarské omáčky. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Holandská omáčka",
            "distractors": [
              "Plnotučná a dijonská hořčice",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Holandská omáčka. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Dresinky",
            "distractors": [
              "Pšenice a ječmen",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Dresinky. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Těstoviny",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Těstoviny. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Piškoty",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Piškoty. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-8",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Vaječné likéry",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Vaječné likéry. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-9",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Trojobal)",
            "distractors": [
              "Sezamová semena a tahini",
              "Pšenice a ječmen"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Trojobal). Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "3 – Vejce a výrobky z nich obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich."
          }
        ]
      },
      {
        "id": "alergen-4",
        "name": "4 – Ryby a výrobky z nich",
        "weight": "Číslo 4",
        "price": "Druh: Ryby",
        "allergens": [
          "4"
        ],
        "description": "Všechny druhy sladkovodních i mořských ryb, kaviár, rybí omáčka (nam pla), worcester (obsahuje ančovičky), ančovičkový dresink (Caesar).",
        "notes": "Alergen č. 4: Pozor na skrytý výskyt: originální Caesar dresink i worcesterová omáčka obsahují rybí složku (ančovičky).",
        "questions": [
          {
            "id": "alergen-4-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 4 – Ryby a výrobky z nich?",
            "correctAnswer": "Všechny druhy sladkovodních i mořských ryb",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 4 – Ryby a výrobky z nich je obsaženo: Všechny druhy sladkovodních i mořských ryb. Kompletní receptura položky: Všechny druhy sladkovodních i mořských ryb, kaviár, rybí omáčka (nam pla), worcester (obsahuje ančovičky), ančovičkový dresink (Caesar).."
          },
          {
            "id": "alergen-4-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 4 – Ryby a výrobky z nich?",
            "correctAnswer": "Kaviár",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 4 – Ryby a výrobky z nich je obsaženo: Kaviár. Kompletní receptura položky: Všechny druhy sladkovodních i mořských ryb, kaviár, rybí omáčka (nam pla), worcester (obsahuje ančovičky), ančovičkový dresink (Caesar).."
          },
          {
            "id": "alergen-4-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 4 – Ryby a výrobky z nich?",
            "correctAnswer": "Rybí omáčka (nam pla)",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 4 – Ryby a výrobky z nich je obsaženo: Rybí omáčka (nam pla). Kompletní receptura položky: Všechny druhy sladkovodních i mořských ryb, kaviár, rybí omáčka (nam pla), worcester (obsahuje ančovičky), ančovičkový dresink (Caesar).."
          },
          {
            "id": "alergen-4-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 4 – Ryby a výrobky z nich?",
            "correctAnswer": "Worcester (obsahuje ančovičky)",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 4 – Ryby a výrobky z nich je obsaženo: Worcester (obsahuje ančovičky). Kompletní receptura položky: Všechny druhy sladkovodních i mořských ryb, kaviár, rybí omáčka (nam pla), worcester (obsahuje ančovičky), ančovičkový dresink (Caesar).."
          },
          {
            "id": "alergen-4-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 4 – Ryby a výrobky z nich?",
            "correctAnswer": "Ančovičkový dresink (Caesar)",
            "distractors": [
              "Sezamová semena a tahini",
              "Pšenice a ječmen"
            ],
            "explanation": "V podsložce 4 – Ryby a výrobky z nich je obsaženo: Ančovičkový dresink (Caesar). Kompletní receptura položky: Všechny druhy sladkovodních i mořských ryb, kaviár, rybí omáčka (nam pla), worcester (obsahuje ančovičky), ančovičkový dresink (Caesar).."
          },
          {
            "id": "alergen-4-allergen-4",
            "question": "Který z následujících alergenů obsahuje podsložka 4 – Ryby a výrobky z nich?",
            "correctAnswer": "Alergen č. 4 – Ryby a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "4 – Ryby a výrobky z nich obsahuje Alergen č. 4 – Ryby a výrobky z nich (pstruh, rybí maso, ančovičky, worcester). Všechny evidované alergeny této podsložky: Ryby a výrobky z nich."
          }
        ]
      },
      {
        "id": "alergen-5",
        "name": "5 – Jádra podzemnice olejné (arašídy)",
        "weight": "Číslo 5",
        "price": "Druh: Arašídy",
        "allergens": [
          "5"
        ],
        "description": "Podzemnice olejná (burské oříšky), arašídový olej, arašídové máslo, asijské omáčky satay, arašídové posypky a směsi.",
        "notes": "Alergen č. 5: Botanicky luštěnina, proto tvoří samostatný alergen č. 5 oddělený od stromových skořápkových plodů (č. 8). Může vyvolat těžký anafylaktický šok.",
        "questions": [
          {
            "id": "alergen-5-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 5 – Jádra podzemnice olejné (arašídy)?",
            "correctAnswer": "Podzemnice olejná (burské oříšky)",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 5 – Jádra podzemnice olejné (arašídy) je obsaženo: Podzemnice olejná (burské oříšky). Kompletní receptura položky: Podzemnice olejná (burské oříšky), arašídový olej, arašídové máslo, asijské omáčky satay, arašídové posypky a směsi.."
          },
          {
            "id": "alergen-5-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 5 – Jádra podzemnice olejné (arašídy)?",
            "correctAnswer": "Arašídový olej",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 5 – Jádra podzemnice olejné (arašídy) je obsaženo: Arašídový olej. Kompletní receptura položky: Podzemnice olejná (burské oříšky), arašídový olej, arašídové máslo, asijské omáčky satay, arašídové posypky a směsi.."
          },
          {
            "id": "alergen-5-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 5 – Jádra podzemnice olejné (arašídy)?",
            "correctAnswer": "Arašídové máslo",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 5 – Jádra podzemnice olejné (arašídy) je obsaženo: Arašídové máslo. Kompletní receptura položky: Podzemnice olejná (burské oříšky), arašídový olej, arašídové máslo, asijské omáčky satay, arašídové posypky a směsi.."
          },
          {
            "id": "alergen-5-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 5 – Jádra podzemnice olejné (arašídy)?",
            "correctAnswer": "Asijské omáčky satay",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 5 – Jádra podzemnice olejné (arašídy) je obsaženo: Asijské omáčky satay. Kompletní receptura položky: Podzemnice olejná (burské oříšky), arašídový olej, arašídové máslo, asijské omáčky satay, arašídové posypky a směsi.."
          },
          {
            "id": "alergen-5-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 5 – Jádra podzemnice olejné (arašídy)?",
            "correctAnswer": "Arašídové posypky a směsi",
            "distractors": [
              "Sezamová semena a tahini",
              "Pšenice a ječmen"
            ],
            "explanation": "V podsložce 5 – Jádra podzemnice olejné (arašídy) je obsaženo: Arašídové posypky a směsi. Kompletní receptura položky: Podzemnice olejná (burské oříšky), arašídový olej, arašídové máslo, asijské omáčky satay, arašídové posypky a směsi.."
          },
          {
            "id": "alergen-5-allergen-5",
            "question": "Který z následujících alergenů obsahuje podsložka 5 – Jádra podzemnice olejné (arašídy)?",
            "correctAnswer": "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
            "distractors": [
              "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "5 – Jádra podzemnice olejné (arašídy) obsahuje Alergen č. 5 – Jádra podzemnice olejné (arašídy) (arašídy, arašídový olej, satay). Všechny evidované alergeny této podsložky: Jádra podzemnice olejné (arašídy)."
          }
        ]
      },
      {
        "id": "alergen-6",
        "name": "6 – Sójové boby (sója) a výrobky z nich",
        "weight": "Číslo 6",
        "price": "Druh: Sója",
        "allergens": [
          "6"
        ],
        "description": "Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.",
        "notes": "Alergen č. 6: Velmi častý v asijské kuchyni (marinády, sójové omáčky), v čokoládách (lecitin) a pekárenských směsích.",
        "questions": [
          {
            "id": "alergen-6-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Sójové boby",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 6 – Sójové boby (sója) a výrobky z nich je obsaženo: Sójové boby. Kompletní receptura položky: Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.."
          },
          {
            "id": "alergen-6-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Sójová omáčka",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 6 – Sójové boby (sója) a výrobky z nich je obsaženo: Sójová omáčka. Kompletní receptura položky: Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.."
          },
          {
            "id": "alergen-6-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Edamame",
            "distractors": [
              "Vlašské a lískové ořechy",
              "Celer bulvový a řapíkatý"
            ],
            "explanation": "V podsložce 6 – Sójové boby (sója) a výrobky z nich je obsaženo: Edamame. Kompletní receptura položky: Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.."
          },
          {
            "id": "alergen-6-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Tofu",
            "distractors": [
              "Plnotučná a dijonská hořčice",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 6 – Sójové boby (sója) a výrobky z nich je obsaženo: Tofu. Kompletní receptura položky: Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.."
          },
          {
            "id": "alergen-6-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Tempeh",
            "distractors": [
              "Pšenice a ječmen",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 6 – Sójové boby (sója) a výrobky z nich je obsaženo: Tempeh. Kompletní receptura položky: Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.."
          },
          {
            "id": "alergen-6-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Sójové mléko",
            "distractors": [
              "Krevety a humři",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 6 – Sójové boby (sója) a výrobky z nich je obsaženo: Sójové mléko. Kompletní receptura položky: Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.."
          },
          {
            "id": "alergen-6-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Sójový lecitin (emulgátor E322) a rostlinné proteinové směsi",
            "distractors": [
              "Podzemnice olejná (arašídy)",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 6 – Sójové boby (sója) a výrobky z nich je obsaženo: Sójový lecitin (emulgátor E322) a rostlinné proteinové směsi. Kompletní receptura položky: Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.."
          },
          {
            "id": "alergen-6-allergen-6",
            "question": "Který z následujících alergenů obsahuje podsložka 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Alergen č. 6 – Sójové boby (sója)",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "6 – Sójové boby (sója) a výrobky z nich obsahuje Alergen č. 6 – Sójové boby (sója) (sójová omáčka, edamame, tofu, lecitin). Všechny evidované alergeny této podsložky: Sójové boby (sója) a výrobky z nich."
          }
        ]
      },
      {
        "id": "alergen-7",
        "name": "7 – Mléko a výrobky z něj (včetně laktózy)",
        "weight": "Číslo 7",
        "price": "Druh: Mléko a laktóza",
        "allergens": [
          "7"
        ],
        "description": "Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.",
        "notes": "Alergen č. 7: Zahrnuje jak mléčné bílkoviny (kasein), tak mléčný cukr (laktózu). Pozor na zjemňování omáček máslem či smetanou.",
        "questions": [
          {
            "id": "alergen-7-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Kravské",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Kravské. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Kozí i ovčí mléko",
            "distractors": [
              "Podzemnice olejná (arašídy)",
              "Sójová omáčka a tofu"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Kozí i ovčí mléko. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Máslo",
            "distractors": [
              "Vlašské a lískové ořechy",
              "Celer bulvový a řapíkatý"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Máslo. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Smetana",
            "distractors": [
              "Plnotučná a dijonská hořčice",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Smetana. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Sýry",
            "distractors": [
              "Pšenice a ječmen",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Sýry. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Syrovátka",
            "distractors": [
              "Krevety a humři",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Syrovátka. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Tvaroh",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Tvaroh. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-8",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Jogurt",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Jogurt. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-9",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Zmrzlina",
            "distractors": [
              "Sezamová semena a tahini",
              "Pšenice a ječmen"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Zmrzlina. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-10",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Pyré zjemněné máslem",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Pyré zjemněné máslem. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "7 – Mléko a výrobky z něj (včetně laktózy) obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "alergen-8",
        "name": "8 – Skořápkové plody (ořechy)",
        "weight": "Číslo 8",
        "price": "Druh: Skořápkové plody",
        "allergens": [
          "8"
        ],
        "description": "Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.",
        "notes": "Alergen č. 8: Často v dezertech, pestu (např. bazalkové pesto s piniemi či vlašskými ořechy), omáčkách, sýrových prkénkách a likérech.",
        "questions": [
          {
            "id": "alergen-8-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Mandle",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Mandle. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Lískové ořechy",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Lískové ořechy. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Vlašské ořechy",
            "distractors": [
              "Sójová omáčka a tofu",
              "Celer bulvový a řapíkatý"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Vlašské ořechy. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Kešu",
            "distractors": [
              "Plnotučná a dijonská hořčice",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Kešu. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Pekanové ořechy",
            "distractors": [
              "Pšenice a ječmen",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Pekanové ořechy. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Para ořechy",
            "distractors": [
              "Krevety a humři",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Para ořechy. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Pistácie",
            "distractors": [
              "Podzemnice olejná (arašídy)",
              "Sójová omáčka a tofu"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Pistácie. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-ing-8",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Makadamové ořechy a výrobky z nich",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Makadamové ořechy a výrobky z nich. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-allergen-8",
            "question": "Který z následujících alergenů obsahuje podsložka 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Alergen č. 8 – Skořápkové plody (ořechy)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 1 – Obiloviny obsahující lepek"
            ],
            "explanation": "8 – Skořápkové plody (ořechy) obsahuje Alergen č. 8 – Skořápkové plody (ořechy) (vlašské ořechy, mandle, lískové ořechy). Všechny evidované alergeny této podsložky: Skořápkové plody (ořechy) a výrobky z nich."
          }
        ]
      },
      {
        "id": "alergen-9",
        "name": "9 – Celer a výrobky z něj",
        "weight": "Číslo 9",
        "price": "Druh: Celer",
        "allergens": [
          "9"
        ],
        "description": "Celer bulvový, řapíkatý celer, celerová nať, celerová sůl, zeleninové a masové vývary, kořenící směsi.",
        "notes": "Alergen č. 9: Základ kořenové zeleniny do tradičních českých omáček (svíčková), polévek a vývarů.",
        "questions": [
          {
            "id": "alergen-9-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 9 – Celer a výrobky z něj?",
            "correctAnswer": "Celer bulvový",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 9 – Celer a výrobky z něj je obsaženo: Celer bulvový. Kompletní receptura položky: Celer bulvový, řapíkatý celer, celerová nať, celerová sůl, zeleninové a masové vývary, kořenící směsi.."
          },
          {
            "id": "alergen-9-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 9 – Celer a výrobky z něj?",
            "correctAnswer": "Řapíkatý celer",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 9 – Celer a výrobky z něj je obsaženo: Řapíkatý celer. Kompletní receptura položky: Celer bulvový, řapíkatý celer, celerová nať, celerová sůl, zeleninové a masové vývary, kořenící směsi.."
          },
          {
            "id": "alergen-9-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 9 – Celer a výrobky z něj?",
            "correctAnswer": "Celerová nať",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 9 – Celer a výrobky z něj je obsaženo: Celerová nať. Kompletní receptura položky: Celer bulvový, řapíkatý celer, celerová nať, celerová sůl, zeleninové a masové vývary, kořenící směsi.."
          },
          {
            "id": "alergen-9-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 9 – Celer a výrobky z něj?",
            "correctAnswer": "Celerová sůl",
            "distractors": [
              "Plnotučná a dijonská hořčice",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 9 – Celer a výrobky z něj je obsaženo: Celerová sůl. Kompletní receptura položky: Celer bulvový, řapíkatý celer, celerová nať, celerová sůl, zeleninové a masové vývary, kořenící směsi.."
          },
          {
            "id": "alergen-9-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 9 – Celer a výrobky z něj?",
            "correctAnswer": "Zeleninové a masové vývary",
            "distractors": [
              "Pšenice a ječmen",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 9 – Celer a výrobky z něj je obsaženo: Zeleninové a masové vývary. Kompletní receptura položky: Celer bulvový, řapíkatý celer, celerová nať, celerová sůl, zeleninové a masové vývary, kořenící směsi.."
          },
          {
            "id": "alergen-9-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 9 – Celer a výrobky z něj?",
            "correctAnswer": "Kořenící směsi",
            "distractors": [
              "Krevety a humři",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 9 – Celer a výrobky z něj je obsaženo: Kořenící směsi. Kompletní receptura položky: Celer bulvový, řapíkatý celer, celerová nať, celerová sůl, zeleninové a masové vývary, kořenící směsi.."
          },
          {
            "id": "alergen-9-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka 9 – Celer a výrobky z něj?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "9 – Celer a výrobky z něj obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Celer a výrobky z něj."
          }
        ]
      },
      {
        "id": "alergen-10",
        "name": "10 – Hořčice a výrobky z ní",
        "weight": "Číslo 10",
        "price": "Druh: Hořčice",
        "allergens": [
          "10"
        ],
        "description": "Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.",
        "notes": "Alergen č. 10: Běžná přísada do tatarských omáček, majonézových dresinků, vinaigrette a nakládaných mas.",
        "questions": [
          {
            "id": "alergen-10-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Semena hořčice",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Semena hořčice. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Plnotučná",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Plnotučná. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Kremžská",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Kremžská. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Dijonská i francouzská hořčice",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Dijonská i francouzská hořčice. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Dresinky",
            "distractors": [
              "Pšenice a ječmen",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Dresinky. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Marinády a zálivky",
            "distractors": [
              "Krevety a humři",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Marinády a zálivky. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 3 – Vejce a výrobky z nich"
            ],
            "explanation": "10 – Hořčice a výrobky z ní obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "alergen-11",
        "name": "11 – Sezamová semena (sezam) a výrobky z nich",
        "weight": "Číslo 11",
        "price": "Druh: Sezam",
        "allergens": [
          "11"
        ],
        "description": "Sezamová semena, sezamový olej, sezamová pasta tahini (základ hummusu), burgerové bulky se sezamem, asijské posypky, halva.",
        "notes": "Alergen č. 11: Pozor u burgerových bulek a blízkovýchodních pokrmů (hummus obsahuje sezamovou pastu tahini).",
        "questions": [
          {
            "id": "alergen-11-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 11 – Sezamová semena (sezam) a výrobky z nich?",
            "correctAnswer": "Sezamová semena",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 11 – Sezamová semena (sezam) a výrobky z nich je obsaženo: Sezamová semena. Kompletní receptura položky: Sezamová semena, sezamový olej, sezamová pasta tahini (základ hummusu), burgerové bulky se sezamem, asijské posypky, halva.."
          },
          {
            "id": "alergen-11-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 11 – Sezamová semena (sezam) a výrobky z nich?",
            "correctAnswer": "Sezamový olej",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 11 – Sezamová semena (sezam) a výrobky z nich je obsaženo: Sezamový olej. Kompletní receptura položky: Sezamová semena, sezamový olej, sezamová pasta tahini (základ hummusu), burgerové bulky se sezamem, asijské posypky, halva.."
          },
          {
            "id": "alergen-11-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 11 – Sezamová semena (sezam) a výrobky z nich?",
            "correctAnswer": "Sezamová pasta tahini (základ hummusu)",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 11 – Sezamová semena (sezam) a výrobky z nich je obsaženo: Sezamová pasta tahini (základ hummusu). Kompletní receptura položky: Sezamová semena, sezamový olej, sezamová pasta tahini (základ hummusu), burgerové bulky se sezamem, asijské posypky, halva.."
          },
          {
            "id": "alergen-11-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 11 – Sezamová semena (sezam) a výrobky z nich?",
            "correctAnswer": "Burgerové bulky se sezamem",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 11 – Sezamová semena (sezam) a výrobky z nich je obsaženo: Burgerové bulky se sezamem. Kompletní receptura položky: Sezamová semena, sezamový olej, sezamová pasta tahini (základ hummusu), burgerové bulky se sezamem, asijské posypky, halva.."
          },
          {
            "id": "alergen-11-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 11 – Sezamová semena (sezam) a výrobky z nich?",
            "correctAnswer": "Asijské posypky",
            "distractors": [
              "Pšenice a ječmen",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 11 – Sezamová semena (sezam) a výrobky z nich je obsaženo: Asijské posypky. Kompletní receptura položky: Sezamová semena, sezamový olej, sezamová pasta tahini (základ hummusu), burgerové bulky se sezamem, asijské posypky, halva.."
          },
          {
            "id": "alergen-11-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 11 – Sezamová semena (sezam) a výrobky z nich?",
            "correctAnswer": "Halva",
            "distractors": [
              "Krevety a humři",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 11 – Sezamová semena (sezam) a výrobky z nich je obsaženo: Halva. Kompletní receptura položky: Sezamová semena, sezamový olej, sezamová pasta tahini (základ hummusu), burgerové bulky se sezamem, asijské posypky, halva.."
          },
          {
            "id": "alergen-11-allergen-11",
            "question": "Který z následujících alergenů obsahuje podsložka 11 – Sezamová semena (sezam) a výrobky z nich?",
            "correctAnswer": "Alergen č. 11 – Sezamová semena (sezam)",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "11 – Sezamová semena (sezam) a výrobky z nich obsahuje Alergen č. 11 – Sezamová semena (sezam) (sezamový olej, tahini, sezam na briošce). Všechny evidované alergeny této podsložky: Sezamová semena (sezam) a výrobky z nich."
          }
        ]
      },
      {
        "id": "alergen-12",
        "name": "12 – Oxid siřičitý a siřičitany",
        "weight": "Číslo 12",
        "price": "Druh: Siřičitany",
        "allergens": [
          "12"
        ],
        "description": "Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l, vyjádřeno jako celkový SO2 (vína, sekty, sušené ovoce, vinné octy).",
        "notes": "Alergen č. 12: Prakticky každé běžné láhvové i rozlévané víno obsahuje siřičitany chránící víno před nežádoucí oxidací.",
        "questions": [
          {
            "id": "alergen-12-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 12 – Oxid siřičitý a siřičitany?",
            "correctAnswer": "Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 12 – Oxid siřičitý a siřičitany je obsaženo: Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l. Kompletní receptura položky: Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l, vyjádřeno jako celkový SO2 (vína, sekty, sušené ovoce, vinné octy).."
          },
          {
            "id": "alergen-12-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 12 – Oxid siřičitý a siřičitany?",
            "correctAnswer": "Vyjádřeno jako celkový SO2 (vína",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 12 – Oxid siřičitý a siřičitany je obsaženo: Vyjádřeno jako celkový SO2 (vína. Kompletní receptura položky: Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l, vyjádřeno jako celkový SO2 (vína, sekty, sušené ovoce, vinné octy).."
          },
          {
            "id": "alergen-12-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 12 – Oxid siřičitý a siřičitany?",
            "correctAnswer": "Sekty",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 12 – Oxid siřičitý a siřičitany je obsaženo: Sekty. Kompletní receptura položky: Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l, vyjádřeno jako celkový SO2 (vína, sekty, sušené ovoce, vinné octy).."
          },
          {
            "id": "alergen-12-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 12 – Oxid siřičitý a siřičitany?",
            "correctAnswer": "Sušené ovoce",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 12 – Oxid siřičitý a siřičitany je obsaženo: Sušené ovoce. Kompletní receptura položky: Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l, vyjádřeno jako celkový SO2 (vína, sekty, sušené ovoce, vinné octy).."
          },
          {
            "id": "alergen-12-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 12 – Oxid siřičitý a siřičitany?",
            "correctAnswer": "Vinné octy)",
            "distractors": [
              "Sezamová semena a tahini",
              "Pšenice a ječmen"
            ],
            "explanation": "V podsložce 12 – Oxid siřičitý a siřičitany je obsaženo: Vinné octy). Kompletní receptura položky: Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l, vyjádřeno jako celkový SO2 (vína, sekty, sušené ovoce, vinné octy).."
          },
          {
            "id": "alergen-12-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka 12 – Oxid siřičitý a siřičitany?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "12 – Oxid siřičitý a siřičitany obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "alergen-13",
        "name": "13 – Vlčí bob (lupina) a výrobky z něj",
        "weight": "Číslo 13",
        "price": "Druh: Vlčí bob (lupina)",
        "allergens": [
          "13"
        ],
        "description": "Vlčí bob (lupina), lupinová mouka, proteinové náhražky, bezlepkové pečivo a speciální těstoviny obohacené lupinou.",
        "notes": "Alergen č. 13: Používá se v moderní bezlepkové a veganské gastronomii pro zlepšení struktury a bílkovinného profilu pečiva a těstovin.",
        "questions": [
          {
            "id": "alergen-13-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 13 – Vlčí bob (lupina) a výrobky z něj?",
            "correctAnswer": "Vlčí bob (lupina)",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 13 – Vlčí bob (lupina) a výrobky z něj je obsaženo: Vlčí bob (lupina). Kompletní receptura položky: Vlčí bob (lupina), lupinová mouka, proteinové náhražky, bezlepkové pečivo a speciální těstoviny obohacené lupinou.."
          },
          {
            "id": "alergen-13-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 13 – Vlčí bob (lupina) a výrobky z něj?",
            "correctAnswer": "Lupinová mouka",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 13 – Vlčí bob (lupina) a výrobky z něj je obsaženo: Lupinová mouka. Kompletní receptura položky: Vlčí bob (lupina), lupinová mouka, proteinové náhražky, bezlepkové pečivo a speciální těstoviny obohacené lupinou.."
          },
          {
            "id": "alergen-13-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 13 – Vlčí bob (lupina) a výrobky z něj?",
            "correctAnswer": "Proteinové náhražky",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 13 – Vlčí bob (lupina) a výrobky z něj je obsaženo: Proteinové náhražky. Kompletní receptura položky: Vlčí bob (lupina), lupinová mouka, proteinové náhražky, bezlepkové pečivo a speciální těstoviny obohacené lupinou.."
          },
          {
            "id": "alergen-13-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 13 – Vlčí bob (lupina) a výrobky z něj?",
            "correctAnswer": "Bezlepkové pečivo a speciální těstoviny obohacené lupinou",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 13 – Vlčí bob (lupina) a výrobky z něj je obsaženo: Bezlepkové pečivo a speciální těstoviny obohacené lupinou. Kompletní receptura položky: Vlčí bob (lupina), lupinová mouka, proteinové náhražky, bezlepkové pečivo a speciální těstoviny obohacené lupinou.."
          },
          {
            "id": "alergen-13-allergen-13",
            "question": "Který z následujících alergenů obsahuje podsložka 13 – Vlčí bob (lupina) a výrobky z něj?",
            "correctAnswer": "Alergen č. 13 – Vlčí bob (lupina)",
            "distractors": [
              "Alergen č. 1 – Obiloviny obsahující lepek",
              "Alergen č. 6 – Sójové boby (sója)"
            ],
            "explanation": "13 – Vlčí bob (lupina) a výrobky z něj obsahuje Alergen č. 13 – Vlčí bob (lupina) (lupinová mouka v pečivu). Všechny evidované alergeny této podsložky: Vlčí bob (lupina) a výrobky z něj."
          }
        ]
      },
      {
        "id": "alergen-14",
        "name": "14 – Měkkýši a výrobky z nich",
        "weight": "Číslo 14",
        "price": "Druh: Měkkýši",
        "allergens": [
          "14"
        ],
        "description": "Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.",
        "notes": "Alergen č. 14: Zahrnuje hlavonožce (olihně, chobotnice), mlže (slávky, ústřice) i plže (šneci). Pozor: ústřicová omáčka je běžná v teplé kuchyni.",
        "questions": [
          {
            "id": "alergen-14-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Slávky",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Slávky. Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Ústřice",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Ústřice. Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Mušle svatého Jakuba",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Mušle svatého Jakuba. Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Chobotnice",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Chobotnice. Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Olihně (kalamáry)",
            "distractors": [
              "Sezamová semena a tahini",
              "Pšenice a ječmen"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Olihně (kalamáry). Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Sépie",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Sépie. Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Šneci a ústřicová omáčka",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Šneci a ústřicová omáčka. Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-allergen-14",
            "question": "Který z následujících alergenů obsahuje podsložka 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Alergen č. 14 – Měkkýši a výrobky z nich",
            "distractors": [
              "Alergen č. 2 – Korýši a výrobky z nich",
              "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)"
            ],
            "explanation": "14 – Měkkýši a výrobky z nich obsahuje Alergen č. 14 – Měkkýši a výrobky z nich (slávky, chobotnice, kalamáry, ústřicová omáčka). Všechny evidované alergeny této podsložky: Měkkýši a výrobky z nich."
          }
        ]
      }
    ]
  }
];

export const TOTAL_ITEMS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
export const TOTAL_QUESTIONS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.reduce((qAcc, it) => qAcc + it.questions.length, 0), 0);
