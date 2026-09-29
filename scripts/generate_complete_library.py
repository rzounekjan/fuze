import json

with open('scripts/build_library_data.py', 'r') as f:
    code = f.read()

# Let's extract CULINARY_TERMS from build_library_data.py
terms_start = code.find('CULINARY_TERMS = [')
terms_end = code.find('\nprint(f"Loaded', terms_start)
culinary_slice = code[terms_start:terms_end]

# Now let's define BEVERAGES list
beverages_code = '''
BEVERAGE_ITEMS = [
    # --- BÍLÁ VÍNA ---
    {
        "id": "bile-ryzlink-gotberg",
        "name": "Ryzlink rýnský Gotberg",
        "category": "wine_white",
        "categoryName": "Bílá vína",
        "producer": "Vinařství Gotberg",
        "origin": "Česká republika",
        "region": "Morava, Mikulovská podoblast, obec Popice, trať Svidrny",
        "volume": "0,75l (v nabídce i po skle 0,15l)",
        "abv": "12,5 % obj.",
        "price": "590 Kč (lahev) / 118 Kč (sklo)",
        "rawIngredients": "100% odrůda Ryzlink rýnský (Riesling). Vinice na sprašových a vápencových půdách Pálavských vrchů.",
        "productionProcess": "Šetrné lisování celých hroznů, řízená fermentace v nerezových tancích s následným ležením na jemných kvasničních kalech (metoda sur-lie).",
        "flavorProfile": "Svěží minerální víno s tóny lipového květu, sušených meruněk, zeleného jablka a petrolejovou mineralitou s pevnou pikantní kyselinkou.",
        "foodPairing": "Skvěle ladí s krájeným hovězím tatarákem, filátkem pstruha, telecí klobásou a čerstvými sýry.",
        "staffNotes": "Klasický představitel moravského Ryzlinku z Popic. Suché, šťavnaté, vysoce pitelné víno s dlouhou minerální dochutí.",
        "tags": ["víno", "bílé víno", "Morava", "Gotberg", "suché"]
    },
    {
        "id": "bile-pinot-gris-reisten",
        "name": "Pinot Gris Reisten (Maidenburg)",
        "category": "wine_white",
        "categoryName": "Bílá vína",
        "producer": "Vinařství Reisten",
        "origin": "Česká republika",
        "region": "Morava, Mikulovská podoblast, Pavlov, viniční trať Maidenburg",
        "volume": "0,75l",
        "abv": "13,0 % obj.",
        "price": "680 Kč",
        "rawIngredients": "100% odrůda Rulandské šedé (Pinot Gris). Vápencové podloží chráněné krajinné oblasti Pálava.",
        "productionProcess": "Kvašení v nerezu, část šarže zrála ve velkých dubových sudech. Delší ležení na kvasinkách podporující plné tělo.",
        "flavorProfile": "Bohaté, plné a extraktivní víno s tóny zralé hrušky máslovky, sušeného pomeranče, medové plástve a jemné chlebovinky v závěru.",
        "foodPairing": "Výborné k vepřovému bůčku s karamelizovanou yuzu omáčkou, taženému hovězímu masu a pečenému kuřeti.",
        "staffNotes": "Pro hosty, kteří preferují plnější, kulatější bílá vína s nižší kyselinkou a krémovou strukturou.",
        "tags": ["víno", "bílé víno", "Pinot Gris", "Pálava", "Reisten"]
    },
    {
        "id": "bile-hibernal-bilkovi",
        "name": "Hibernal Bílkovi",
        "category": "wine_white",
        "categoryName": "Bílá vína",
        "producer": "Vinařství Bílkovi",
        "origin": "Česká republika",
        "region": "Morava, Velkopavlovická podoblast, Velké Bílovice",
        "volume": "0,75l",
        "abv": "12,5 % obj.",
        "price": "540 Kč",
        "rawIngredients": "100% Hibernal – moderní interspecifická odrůda (PIWI) vyšlechtěná křížením Seibel a Ryzlinku rýnského.",
        "productionProcess": "Reduktivní vinifikace v nerezových tancích s důrazem na zachování aromatického profilu a svěží ovocitosti.",
        "flavorProfile": "Intenzivně aromatické víno s buketem černorybízového listu, broskve, zralého angreštu, kvetoucího černého bezu a citrusů.",
        "foodPairing": "Skvělé k asijským fúzním chutím, salátům, kozímu sýru a smaženým kuřecím kroketám.",
        "staffNotes": "Ideální volba pro hosty, kteří hledají výraznou aromatiku podobnou Sauvignonu s příjemnou svěží kyselinkou.",
        "tags": ["víno", "bílé víno", "Hibernal", "aromatické", "Bílkovi"]
    },
    {
        "id": "bile-sauvignon-halkoci",
        "name": "Sauvignon Halkoci",
        "category": "wine_white",
        "categoryName": "Bílá vína",
        "producer": "Vinařství Halkoci",
        "origin": "Česká republika",
        "region": "Morava, Znojemská / Mikulovská podoblast",
        "volume": "0,75l",
        "abv": "12,5 % obj.",
        "price": "580 Kč",
        "rawIngredients": "100% Sauvignon Blanc ze starších moravských vinic.",
        "productionProcess": "Kvašení za kontrolované nízké teploty pro uchování primárních pyrazinových a ovocných aromatických látek.",
        "flavorProfile": "Svěží, čistý tón hluchavky, posečené trávy, zeleného angreštu, kiwi a limetkové kůry se zvonivou kyselinkou.",
        "foodPairing": "Perfektní ke krémové humří polévce, rybám z pece a čerstvým bylinkovým omáčkám fines herbes.",
        "staffNotes": "Výborný suchý a šťavnatý Sauvignon moravského střihu s pevnou kyselinou.",
        "tags": ["víno", "bílé víno", "Sauvignon", "svěží", "Morava"]
    },
    {
        "id": "bile-ryzlink-vlassky-sukal",
        "name": "Ryzlink Vlašský Šukal",
        "category": "wine_white",
        "categoryName": "Bílá vína",
        "producer": "Milan Šukal",
        "origin": "Česká republika",
        "region": "Morava, Slovácká podoblast, Nový Poddvorov",
        "volume": "0,75l",
        "abv": "13,0 % obj.",
        "price": "650 Kč",
        "rawIngredients": "100% Ryzlink vlašský z rodinných vinic Milana Šukala.",
        "productionProcess": "Tradiční řemeslné zpracování, kvašení na přírodních kvasinkách, delší zrání na kalech.",
        "flavorProfile": "Typická minerální slanost, tóny sušených lučních bylin, zelených jablek, rozinek a pražených vlašských ořechů.",
        "foodPairing": "Skvělé k pečenému vepřovému kolenu, řízku Duroc a tradičním moravským pokrmům.",
        "staffNotes": "Milan Šukal patří k absolutní špičce moravských vinařů – jeho vlašák má neuvěřitelnou hloubku a mineralitu.",
        "tags": ["víno", "bílé víno", "Ryzlink vlašský", "Milan Šukal", "Morava"]
    },
    {
        "id": "bile-palava-michlovsky",
        "name": "Pálava Vinselekt Michlovský",
        "category": "wine_white",
        "categoryName": "Bílá vína",
        "producer": "Vinselekt Michlovský",
        "origin": "Česká republika",
        "region": "Morava, Mikulovská podoblast, Perná",
        "volume": "0,75l",
        "abv": "13,0 % obj.",
        "price": "620 Kč",
        "rawIngredients": "100% Pálava (kříženec Tramínu červeného a Müller Thurgau vyšlechtěný Ing. Josefem Veverkou na Moravě).",
        "productionProcess": "Kombinace moderní kryomacerace a řízeného kvašení pod taktovkou docenta Miloše Michlovského.",
        "flavorProfile": "Omamná květinová vůně čajové růže, rozkvetlého jasmínu, mandarinkové kůry, liči a sladkého koření vanilky.",
        "foodPairing": "Bezkonkurenční k paštice z kachních foie gras, asijským pikantním pokrmům a jemným sýrům.",
        "staffNotes": "Nejznámější moravská odrůda v podání legendárního enologa Miloše Michlovského. Krásné tělo a dlouhý aromatický závěr.",
        "tags": ["víno", "bílé víno", "Pálava", "Michlovský", "aromatické"]
    },
    {
        "id": "bile-riesling-eva-fricke",
        "name": "Riesling Rheingau Eva Fricke",
        "category": "wine_white",
        "categoryName": "Bílá vína",
        "producer": "Eva Fricke",
        "origin": "Německo",
        "region": "Rheingau, Lorch / Kiedrich (strmé břidlicové svahy)",
        "volume": "0,75l",
        "abv": "12,0 % obj.",
        "price": "1 190 Kč",
        "rawIngredients": "100% Riesling ze starých biodynamicky obhospodařovaných vinic na čisté modré a šedé břidlici.",
        "productionProcess": "Spontánní fermentace přírodními kvasinkami, pomalé zrání bez aditiv a chemických zásahů.",
        "flavorProfile": "Extrémní čistota, krystalická slaná mineralita, zelené citrusy, kdoule, bílá broskev a elektrizující přesná kyselina.",
        "foodPairing": "Prvotřídní k humří polévce, ústřicím, vykostěnému pstruhu a jídlům s omáčkou yuzu.",
        "staffNotes": "Eva Fricke je světovou ikonou Rheingau (pravidelně 100 bodů Robert Parker). Skutečný klenot vinného lístku Fuze.",
        "tags": ["víno", "bílé víno", "Riesling", "Rheingau", "Německo", "biodynamické"]
    },
    {
        "id": "bile-chardonnay-knotty-vines",
        "name": "Chardonnay Knotty Vines",
        "category": "wine_white",
        "categoryName": "Bílá vína",
        "producer": "Knotty Vines",
        "origin": "USA",
        "region": "Kalifornie (Central Coast / Lodi)",
        "volume": "0,75l",
        "abv": "13,5 % obj.",
        "price": "690 Kč",
        "rawIngredients": "100% odrůda Chardonnay z kalifornských prosluněných vinic.",
        "productionProcess": "Částečná jablečno-mléčná fermentace (malolaktika) a zrání v sudech z francouzského a amerického dubu.",
        "flavorProfile": "Bohaté, máslové, vanilkové Chardonnay s tóny pečeného žlutého jablka, ananasu, crème brûlée a opékaného toastu.",
        "foodPairing": "Dokonalé k pečenému vepřovému bůčku, burgeru s čedarem a smetanovým těstovinám.",
        "staffNotes": "Ukázkový kalifornský styl Chardonnay – plné, hladké, máslové s příjemným dubovým polibkem.",
        "tags": ["víno", "bílé víno", "Chardonnay", "Kalifornie", "USA", "dub"]
    },

    # --- ČERVENÁ VÍNA ---
    {
        "id": "cervene-pinot-noir-rouci-kraus",
        "name": "Pinot Noir Roučí Kraus",
        "category": "wine_red",
        "categoryName": "Červená vína",
        "producer": "Vinařství Kraus",
        "origin": "Česká republika",
        "region": "Čechy, Mělnická podoblast, Mělník (Klamovka)",
        "volume": "0,75l",
        "abv": "13,0 % obj.",
        "price": "750 Kč",
        "rawIngredients": "100% Rulandské modré (Pinot Noir) klon Roučí, pěstované na opukových svazích řeky Labe.",
        "productionProcess": "Tradiční rmutování v otevřených kádích, následné roční zrání ve francouzských dubových sudech barrique.",
        "flavorProfile": "Světlý rubín s cihlovým meniskem. Vůně lesních jahod, višní, sušených brusinek a podrostu s jemným dotekem kouře a cedrového dřeva.",
        "foodPairing": "Svíčková Wellington, kachní prsa, paštika z kachních foie gras a telecí klobása se smrži.",
        "staffNotes": "Profesor Kraus byl legendou českého vinohradnictví. Tento Pinot z Mělníka dokazuje, že české polohy produkují pinoty světové burgundské elegance.",
        "tags": ["víno", "červené víno", "Pinot Noir", "Mělník", "Čechy", "barrique"]
    },
    {
        "id": "cervene-dornfelder-bilkovi",
        "name": "Dornfelder Bílkovi",
        "category": "wine_red",
        "categoryName": "Červená vína",
        "producer": "Vinařství Bílkovi",
        "origin": "Česká republika",
        "region": "Morava, Velkopavlovická podoblast, Velké Bílovice",
        "volume": "0,75l",
        "abv": "12,5 % obj.",
        "price": "520 Kč",
        "rawIngredients": "100% Dornfelder.",
        "productionProcess": "Kvašení na rmutu s jemným lisováním pro zachování ovocitého a neagresivního charakteru.",
        "flavorProfile": "Sytě temně granátová barva. Výrazná vůně ostružin, zralých švestek, borůvek a lesních plodů se sametovou tříslovinou.",
        "foodPairing": "K hovězímu burgeru, pečeným vepřovým žebrům a uzeninám.",
        "staffNotes": "Přístupné, ovocité červené víno s nízkou svíravostí a nádhernou temnou barvou.",
        "tags": ["víno", "červené víno", "Dornfelder", "Morava", "Bílkovi"]
    },
    {
        "id": "cervene-cuvee-red-kolby",
        "name": "Cuvée Red Kolby",
        "category": "wine_red",
        "categoryName": "Červená vína",
        "producer": "Vinařství Kolby",
        "origin": "Česká republika",
        "region": "Morava, Mikulovská podoblast, Pouzdřany, viniční trať Kolby",
        "volume": "0,75l",
        "abv": "13,5 % obj.",
        "price": "790 Kč",
        "rawIngredients": "Blend Cabernet Sauvignon (60 %) a Merlot (40 %) ze sprašových svahů Pouzdřanské stepi.",
        "productionProcess": "Zrání 14 měsíců v prémiových francouzských dubových sudech barrique (30 % nových).",
        "flavorProfile": "Plné tělo bordelského střihu. Tóny černého rybízu, ostružin, hořké čokolády, tabáku, kůže a sladkého dřeva.",
        "foodPairing": "Perfektní společník pro US Prime květovou špičku, vysoký roštěnec a pastrami.",
        "staffNotes": "Špičková moravská interpretace velkého vína z Bordeaux. Pevné třísloviny a velký potenciál.",
        "tags": ["víno", "červené víno", "cuvée", "Cabernet", "Merlot", "Kolby"]
    },
    {
        "id": "cervene-cabernet-lapis-luna",
        "name": "Cabernet Sauvignon Lapis Luna",
        "category": "wine_red",
        "categoryName": "Červená vína",
        "producer": "Lapis Luna Wines",
        "origin": "USA",
        "region": "Kalifornie, Lodi",
        "volume": "0,75l",
        "abv": "14,0 % obj.",
        "price": "790 Kč",
        "rawIngredients": "Cabernet Sauvignon s kapkou Merlotu a Sangiovese z vybraných kalifornských vinic.",
        "productionProcess": "Zrání v sudech z francouzského a amerického dubu po dobu 10 měsíců.",
        "flavorProfile": "Temně fialová barva, explozivní vůně zralých ostružin, černých třešní, vanilky, pražené kávy a koření.",
        "foodPairing": "US Prime vysoký roštěnec, grilovaný vepřový bůček a burger s čedarem a slaninou.",
        "staffNotes": "Pro milovníky mohutných, bohatých kalifornských vín s teplým závěrem a sametovými tříslovinami.",
        "tags": ["víno", "červené víno", "Cabernet Sauvignon", "Kalifornie", "USA"]
    },
    {
        "id": "cervene-zinfandel-hendry",
        "name": "Zinfandel Hendry",
        "category": "wine_red",
        "categoryName": "Červená vína",
        "producer": "Hendry Ranch",
        "origin": "USA",
        "region": "Kalifornie, Napa Valley",
        "volume": "0,75l",
        "abv": "14,8 % obj.",
        "price": "1 450 Kč",
        "rawIngredients": "100% Zinfandel z rodinného ranče Hendry v úpatí Mayacamas Mountains v Napa Valley.",
        "productionProcess": "Zrání 15 měsíců v sudech z francouzského dubu. Malé rodinné šarže z historických vinic.",
        "flavorProfile": "Koncentrovaná džemová chuť lesních malin, borůvek, černého pepře, hřebíčku, kakaa a lékořice s hřejivou dlouhou dochutí.",
        "foodPairing": "Vrcholné párování k vepřovým žebrům pečeným s jablečnou BBQ omáčkou, US Prime burgeru a pastrami.",
        "staffNotes": "Kultovní Zinfandel z Napa Valley. Nesmírně hluboké a bohaté víno od George Hendryho.",
        "tags": ["víno", "červené víno", "Zinfandel", "Napa Valley", "Kalifornie"]
    },

    # --- ŠUMIVÁ VÍNA & BUBLINY ---
    {
        "id": "bubliny-charmat-palava",
        "name": "Charmat de Vinselekt Pálava",
        "category": "wine_sparkling",
        "categoryName": "Šumivá vína & sekty",
        "producer": "Vinselekt Michlovský",
        "origin": "Česká republika",
        "region": "Morava, Mikulovská podoblast",
        "volume": "0,75l (v nabídce i po skle 0,1l)",
        "abv": "12,0 % obj.",
        "price": "590 Kč (lahev) / 89 Kč (sklenka)",
        "rawIngredients": "Hrozny odrůdy Pálava.",
        "productionProcess": "Metoda Charmat – sekundární kvašení v nerezovém tlakovém tanku zachovávající primární svěží květinové aroma.",
        "flavorProfile": "Svěží perlení, jemná vůně kvetoucích růží, tropického ovoce a citrusů s příjemnou suchou dochutí.",
        "foodPairing": "Perfektní uvítací přípitek a aperitiv ke studeným předkrmům a tataráku.",
        "staffNotes": "Naše základní rozlévané šumivé víno po skle – elegantní, voňavé a osvěžující bubliny z moravské Pálavy.",
        "tags": ["bubliny", "šumivé víno", "Pálava", "aperitiv", "Michlovský"]
    },
    {
        "id": "bubliny-cremant-vinselekt",
        "name": "Crémant de Vinselekt (Pinot Noir & Chardonnay)",
        "category": "wine_sparkling",
        "categoryName": "Šumivá vína & sekty",
        "producer": "Vinselekt Michlovský",
        "origin": "Česká republika",
        "region": "Morava",
        "volume": "0,75l",
        "abv": "12,5 % obj.",
        "price": "890 Kč",
        "rawIngredients": "Tradiční šampaňský blend: Chardonnay a Pinot Noir (Rulandské modré).",
        "productionProcess": "Tradiční metoda druhotného kvašení v lahvi (méthode traditionnelle) s ležením na kvasinkách po dobu minimálně 24 měsíců.",
        "flavorProfile": "Jemné dlouhotrvající perlení, aroma pečených briošek, pražených oříšků, zelených jablek a minerální křídový závěr.",
        "foodPairing": "Ústřice, humří polévka, paštika z foie gras a smažená kuřecí křidélka.",
        "staffNotes": "Moravský crémant vyrobený stejným postupem jako pravé Champagne. Nádherný toastový buket.",
        "tags": ["crémant", "šampaňská metoda", "Chardonnay", "Pinot Noir", "bubliny"]
    },
    {
        "id": "bubliny-angels-cowboys",
        "name": "Angels & Cowboys Brut Rosé Sparkling",
        "category": "wine_sparkling",
        "categoryName": "Šumivá vína & sekty",
        "producer": "Angels & Cowboys",
        "origin": "USA",
        "region": "Kalifornie, Sonoma County",
        "volume": "0,75l",
        "abv": "12,0 % obj.",
        "price": "1 150 Kč",
        "rawIngredients": "Blend Pinot Noir a Chardonnay z chladných přímořských poloh v Sonoma County.",
        "productionProcess": "Méthode traditionnelle – kvašeno a zráno v lahvích po dobu minimálně 18 měsíců.",
        "flavorProfile": "Lososově růžová barva, tóny lesních jahod, červeného rybízu, granátového jablka a čerstvě upečené briošky.",
        "foodPairing": "Ideální k celému jídlu od tataráku přes bůček až po chmelové čokoládové dortíky.",
        "staffNotes": "Stylové kalifornské šumivé víno s úchvatným designem a špičkovou svěžestí.",
        "tags": ["bubliny", "rosé", "šumivé", "Kalifornie", "USA"]
    },

    # --- RUMY ---
    {
        "id": "rum-havana-club-3",
        "name": "Havana Club Añejo 3 Años",
        "category": "rum",
        "categoryName": "Rumy 0,03l",
        "producer": "Havana Club (Corporación Cuba Ron)",
        "origin": "Kuba",
        "region": "Santa Cruz del Norte / San José de Las Lajas",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "66 Kč",
        "rawIngredients": "Kubánská cukrová třtina, prémiová melasa a pramenitá voda.",
        "productionProcess": "Kontinuální destilace v kolonách, zrání minimálně 3 roky v sudech z bílého amerického dubu po bourbonu pod dohledem Maestros del Ron Cubano, následná filtrace přes dřevěné uhlí.",
        "flavorProfile": "Světle slámová barva. Svěží vůně cukrové třtiny, dubového dřeva, citrusů, vanilky a jemného kouře.",
        "foodPairing": "Základ pro originální kubánské drinky Mojito a Daiquiri.",
        "staffNotes": "Pravý kubánský 3letý bílý rum – na rozdíl od levných bílých rumů opravdu zraje 3 roky v dubových sudech a má hlubší chuť.",
        "tags": ["rum", "Kuba", "bílý rum", "cukrová třtina", "mojito"]
    },
    {
        "id": "rum-el-dorado-12y",
        "name": "El Dorado 12y",
        "category": "rum",
        "categoryName": "Rumy 0,03l",
        "producer": "Demerara Distillers Ltd.",
        "origin": "Guyana",
        "region": "Demerara River",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "98 Kč",
        "rawIngredients": "100% melasa z cukrové třtiny pěstované v úrodném údolí řeky Demerara.",
        "productionProcess": "Destilace v unikátních historických dřevěných kotlích Enmore a Port Mourant starých více než 250 let. Zrání minimálně 12 let v dubových sudech po bourbonu v tropickém klimatu Guyany.",
        "flavorProfile": "Hluboká jantarová barva. Tóny tmavé melasy, medu, sušených švestek, rozinek, pečeného banánu, skořice a tabáku.",
        "foodPairing": "Skvěle ladí s vepřovými žebry s BBQ omáčkou a dezerty s čokoládou Valrhona.",
        "staffNotes": "Číslovka 12 znamená nejmladší složku v lahvi (na rozdíl od solery). Unikátní dřevěné destilační kotle dávají rumu nenapodobitelnou hutnost.",
        "tags": ["rum", "Guyana", "Demerara", "12 let", "karamel"]
    },
    {
        "id": "rum-mount-gay-xo",
        "name": "Mount Gay XO Triple Cask",
        "category": "rum",
        "categoryName": "Rumy 0,03l",
        "producer": "Mount Gay Distilleries (založeno 1703)",
        "origin": "Barbados",
        "region": "St. Lucy",
        "volume": "0,03l",
        "abv": "43,0 % obj.",
        "price": "148 Kč",
        "rawIngredients": "Melasa z barbadoské cukrové třtiny a korálovou horninou filtrovaná voda.",
        "productionProcess": "Tradiční dvojitá měděná kotlíková destilace (pot still) a kolonová destilace. Blend rumů zrajících 5 až 17 let ve třech typech sudů: po americkém whiskey, bourbonu a koňaku.",
        "flavorProfile": "Výjimečně vyvážený suchý rum. Tóny vanilky, zralého fíků, pomerančové kůry, hořké čokolády, pražených mandlí a dubového koření.",
        "foodPairing": "Vhodný k US Prime roštěnci a jako ušlechtilý digestiv po večeři.",
        "staffNotes": "Mount Gay je nejstarší doložená rumová palírna světa (od roku 1703). Rum XO není uměle doslazovaný cukrem – je to ryzí suchý řemeslný rum.",
        "tags": ["rum", "Barbados", "Mount Gay", "suchý rum", "nejstarší palírna"]
    },
    {
        "id": "rum-abuelo-7y",
        "name": "Abuelo Añejo 7 Años",
        "category": "rum",
        "categoryName": "Rumy 0,03l",
        "producer": "Varela Hermanos",
        "origin": "Panama",
        "region": "Pesé, údolí Herrera",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "82 Kč",
        "rawIngredients": "Čerstvá šťáva a sirup z vlastní panamské cukrové třtiny pěstované na rodinných plantážích.",
        "productionProcess": "Pomalé kvašení s vlastními kvasinkovými kulturami. Zrání 7 let v pečlivě vybraných sudech z bílého amerického dubu po bourbonu.",
        "flavorProfile": "Zlatavě jantarová barva. Jemné tóny karamelu, sušených datlí, pražených oříšků, kokosu a jemného koření.",
        "foodPairing": "Výborný k burgerům, sýru raclette a pečené zelenině.",
        "staffNotes": "Velmi oblíbený, jemný a sametový panamský rum se skvělým poměrem cena/výkon.",
        "tags": ["rum", "Panama", "Abuelo", "jemný", "karamel"]
    },
    {
        "id": "rum-eminente-reserva-7y",
        "name": "Eminente Reserva 7y",
        "category": "rum",
        "categoryName": "Rumy 0,03l",
        "producer": "Moët Hennessy & Cuba Ron (Master Ronero César Martí)",
        "origin": "Kuba",
        "region": "Villa Clara (centrální Kuba)",
        "volume": "0,03l",
        "abv": "41,3 % obj.",
        "price": "145 Kč",
        "rawIngredients": "Vysoce kvalitní kubánská melasa.",
        "productionProcess": "Mimořádně vysoký podíl aguardiente (70 %) – bohatého aromatického destilátu z pálenice. Zraje minimálně 7 let v sudech z bílého dubu po whisky.",
        "flavorProfile": "Komplexní, bohatý a plný. Tóny pražené zrnkové kávy, hořkého kakaa, zralého zázvoru, pečeného tabáku, sušených švestek a vanilky.",
        "foodPairing": "Dokonalý k čokoládovým dezertům Valrhona a ke kávě espresso.",
        "staffNotes": "Lahev z reliéfního skla připomíná kůži kubánského krokodýla (Eminente = krokodýlí ostrov). Díky 70 % aguardiente má mnohem bohatší chuť než běžné kubánské rumy.",
        "tags": ["rum", "Kuba", "Eminente", "káva", "čokoláda", "krokodýl"]
    },
    {
        "id": "rum-diplomatico",
        "name": "Diplomático Reserva Exclusiva",
        "category": "rum",
        "categoryName": "Rumy 0,03l",
        "producer": "Destilerías Unidas S.A. (DUSA)",
        "origin": "Venezuela",
        "region": "La Miel, na úpatí And",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "115 Kč",
        "rawIngredients": "Třtinový med (virgin sugar cane honey) a vybraná melasa.",
        "productionProcess": "Kombinace destilace v měděných kotlích (pot still – 80 %) a moderních kolonách. Zrání až 12 let v malých sudech z amerického bílého dubu po bourbonu.",
        "flavorProfile": "Sametově sladký a bohatý. Tóny vanilky, toffee, sušeného pomeranče, čokoládových lanýžů, javorového sirupu a skořice.",
        "foodPairing": "Karamelový trhanec, pečené švestky a sladové dezerty.",
        "staffNotes": "Jeden z nejoblíbenějších rumů na světě. Ideální pro hosty, kteří preferují sladší, hladký a dezertní chuťový profil.",
        "tags": ["rum", "Venezuela", "Diplomatico", "sladký rum", "vanilka"]
    },
    {
        "id": "rum-zacapa-23y",
        "name": "Ron Zacapa Centenario 23",
        "category": "rum",
        "categoryName": "Rumy 0,03l",
        "producer": "Industrias Licoreras de Guatemala (Master Blender Lorena Vásquez)",
        "origin": "Guatemala",
        "region": "Quetzaltenango (Dům nad oblaky, 2 300 m n. m.)",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "155 Kč",
        "rawIngredients": "Panenský třtinový med z prvního lisování cukrové třtiny (nikoli odpadní melasa).",
        "productionProcess": "Destilace v kolonách, zrání v nadmořské výšce 2 300 m v chladném horském klimatu systémem Sistema Solera v sudech po americkém bourbonu, sherry Pedro Ximénez a vínech z oblasti Cognac.",
        "flavorProfile": "Tmavý mahagon. Noblesní tóny sušených fíků, rozinek, tmavého medu, tabákového listu, kávy, muškátového oříšku a dubu.",
        "foodPairing": "Špičkový k hovězímu steaku US Prime, čokoládové hlíně s višní a k vyzrálým sýrům.",
        "staffNotes": "Královský rum ze 'střechy světa'. Chladné horské klima zpomaluje odpar a dává rumu neuvěřitelnou hloubku a hebkost.",
        "tags": ["rum", "Guatemala", "Zacapa", "Solera", "panenský med"]
    },

    # --- TEQUILY & MEZCALY ---
    {
        "id": "tequila-tres-alegres-compadres",
        "name": "Tres Alegres Compadres Blanco",
        "category": "tequila",
        "categoryName": "Tequily 0,03l",
        "producer": "Tres Alegres Compadres",
        "origin": "Mexiko",
        "region": "Jalisco",
        "volume": "0,03l",
        "abv": "38,0 % obj.",
        "price": "75 Kč",
        "rawIngredients": "100% modrá agáve (Agave tequilana Weber azul).",
        "productionProcess": "Tradiční pečení zralých agávových srdcí (piñas) v kamenných pecích, mletí, fermentace a dvojitá destilace v nerezových a měděných kotlích. Lahvováno čerstvé bez zrání v sudu.",
        "flavorProfile": "Křišťálově čistá tequila. Čerstvé bylinné tóny syrové i vařené agáve, bílého pepře, limetkové kůry a zeleného jablka.",
        "foodPairing": "Základ pro koktejly Paloma a Margarita, skvělá k papričkám Padrón a chimichurri.",
        "staffNotes": "Čistá 100% agáve blanco tequila – bez přidaného cukru (žádné mixto). Skvělá ukázka autentické svěží chuti agáve.",
        "tags": ["tequila", "blanco", "Mexiko", "100% agave", "Jalisco"]
    },
    {
        "id": "tequila-herradura-reposado",
        "name": "Herradura Reposado",
        "category": "tequila",
        "categoryName": "Tequily 0,03l",
        "producer": "Casa Herradura (založeno 1870)",
        "origin": "Mexiko",
        "region": "Amatitán, Jalisco",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "115 Kč",
        "rawIngredients": "100% Blue Weber agáve sklízená po 7–10 letech zrání.",
        "productionProcess": "Tradiční hliněné pece, kvašení přírodními divokými kvasinkami z ovocných sadů v okolí palírny. Zrání 11 měsíců v sudech z bílého amerického dubu (zákon vyžaduje pouze 2 měsíce).",
        "flavorProfile": "Zlatá jantarová barva. Chuť vařené agáve, vanilky, máslového karamelu, skořice a sušeného ovoce s hřejivým dubovým zakončením.",
        "foodPairing": "Dokonalá ke grilovanému bůčku s yuzu omáčkou a hovězímu tataráku.",
        "staffNotes": "Casa Herradura v roce 1974 doslova vymyslela kategorii Reposado (odleželá tequila). Zraje téměř rok – déle než většina konkurence.",
        "tags": ["tequila", "reposado", "Herradura", "dubové sudy", "Mexiko"]
    },
    {
        "id": "tequila-corralejo-reposado",
        "name": "Tequila Corralejo Reposado",
        "category": "tequila",
        "categoryName": "Tequily 0,03l",
        "producer": "Hacienda Corralejo (založeno 1755)",
        "origin": "Mexiko",
        "region": "Pénjamo, Guanajuato (mimo Jalisco – jedna z mála certifikovaných výjimek)",
        "volume": "0,03l",
        "abv": "38,0 % obj.",
        "price": "98 Kč",
        "rawIngredients": "100% Agave Azul Weber.",
        "productionProcess": "Pomalé pečení v tradičních pecích horo, dvojitá destilace v měděných kotlích metodou Charentais (používanou při výrobě koňaku). Zrání 4 měsíce ve třech typech dubových sudů (francouzský, americký a mexický dub).",
        "flavorProfile": "Světle slámová barva v ikonické vysoké modré lahvi. Tóny pečené agáve, bílého pepře, vanilky, kardamomu a čerstvého dřeva.",
        "foodPairing": "Výborná k pastrami, kuřeti z pece a pikantní majonéze.",
        "staffNotes": "Vysoká štíhlá modrá lahev je nepřehlédnutelná. Destilace francouzskou metodou Charentais dodává tequile neobyčejnou jemnost.",
        "tags": ["tequila", "reposado", "Corralejo", "modrá lahev", "Mexiko"]
    },
    {
        "id": "tequila-cofradia-rose-catrina",
        "name": "La Cofradia Reposado Rosé „ed. Catrina”",
        "category": "tequila",
        "categoryName": "Tequily 0,03l",
        "producer": "Tequila La Cofradía",
        "origin": "Mexiko",
        "region": "Tequila, Jalisco",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "145 Kč",
        "rawIngredients": "100% modrá agáve z vysočiny Jalisco.",
        "productionProcess": "Tradiční pečení a destilace. Speciální zrání v sudech z francouzského dubu, ve kterých dříve zrálo červené víno (Cabernet Sauvignon), což tequile propůjčuje delikátní růžový nádech a ovocné tóny.",
        "flavorProfile": "Světle narůžovělý odstín. Vůně agáve, jahod, červeného rybízu, vanilky a jemného dřeva.",
        "foodPairing": "Skvělá jako párování k paštice z foie gras i dezertům s višněmi.",
        "staffNotes": "Unikátní růžová reposado tequila v nádherné sběratelské keramické karafě inspirované mexickým svátkem Día de los Muertos.",
        "tags": ["tequila", "reposado", "Catrina", "růžová", "víno", "sběratelská"]
    },
    {
        "id": "tequila-cofradia-black-catrina",
        "name": "La Cofradia Black „ed. Catrina”",
        "category": "tequila",
        "categoryName": "Tequily 0,03l",
        "producer": "Tequila La Cofradía",
        "origin": "Mexiko",
        "region": "Tequila, Jalisco",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "165 Kč",
        "rawIngredients": "100% Agave azul.",
        "productionProcess": "Tradiční pečení a destilace, dlouhé zrání v silně vypálených sudech z amerického bílého dubu.",
        "flavorProfile": "Tmavě jantarová tequila s kouřovými tóny, pečenou agáve, hořkou čokoládou, kávovými zrny, dubovým dřevem a sušeným ovocem.",
        "foodPairing": "K hovězím steakům US Prime z grilu a pečeným žebírkům.",
        "staffNotes": "Dodávána v ručně malované černé keramické lahvi s motivem lebky Catrina. Prémiový chuťový i vizuální zážitek.",
        "tags": ["tequila", "añejo", "Catrina", "černá edice", "lebka"]
    },

    # --- WHISKY, WHISKEY & BOURBON ---
    {
        "id": "whisky-goldcock-blended",
        "name": "Goldcock Blended Whisky",
        "category": "whisky",
        "categoryName": "Whisky, whiskey, bourbon 0,03l",
        "producer": "Rudolf Jelínek (původně Těšetice u Olomouce)",
        "origin": "Česká republika",
        "region": "Morava, Vizovice / Haná",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "68 Kč",
        "rawIngredients": "100% moravský sladový a obilný ječmen z úrodné Hané, pramenitá vizovická voda.",
        "productionProcess": "Destilace na kotlích Arnold Holstein, následné zrání v nových vypálených sudech vyrobených z českého zimního dubu.",
        "flavorProfile": "Zlatá barva. Sladová, jemná vůně vanilky, zelených jablek, medu, ovesných vloček a jemného kouřového dřeva.",
        "foodPairing": "Výborná k vepřovým žebrům a telecí klobáse se smrži.",
        "staffNotes": "Kultovní česká whisky s kořeny v roce 1973. Zraje výhradně v sudech z českého dubu z moravských lesů.",
        "tags": ["whisky", "česká whisky", "Goldcock", "slad", "český dub"]
    },
    {
        "id": "whisky-glenfiddich-15y",
        "name": "Glenfiddich 15y Solera Reserve",
        "category": "whisky",
        "categoryName": "Whisky, whiskey, bourbon 0,03l",
        "producer": "William Grant & Sons (Glenfiddich Distillery)",
        "origin": "Skotsko",
        "region": "Speyside (Dufftown)",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "145 Kč",
        "rawIngredients": "100% sladový ječmen a pramenitá voda z pramene Robbie Dhu.",
        "productionProcess": "Single Malt whisky zrající ve třech typech sudů: po španělském sherry Oloroso, americkém bourbonu a nových sudech z panenského dubu. Následně se mísí v unikátní obří kádi Solera z oregonské borovice, která není od roku 1998 nikdy vyprázdněna více než do poloviny.",
        "flavorProfile": "Nesmírně komplexní a hedvábná. Tóny sherry, marcipánu, rozinek, skořice, zázvoru, pečeného jablka a dubu.",
        "foodPairing": "Svíčková Wellington, kachní foie gras a karamelový trhanec.",
        "staffNotes": "Průkopnická whisky Speyside. Systém Solera zaručuje nepřekonatelnou konzistenci a harmonii chutí.",
        "tags": ["whisky", "single malt", "Skotsko", "Speyside", "Solera", "Glenfiddich"]
    },
    {
        "id": "whisky-talisker-10y",
        "name": "Talisker 10y",
        "category": "whisky",
        "categoryName": "Whisky, whiskey, bourbon 0,03l",
        "producer": "Talisker Distillery (založeno 1830)",
        "origin": "Skotsko",
        "region": "Isle of Skye (Carbost)",
        "volume": "0,03l",
        "abv": "45,8 % obj.",
        "price": "148 Kč",
        "rawIngredients": "Silně rašelinou nakouřený sladový ječmen a rašelinová voda z Cnoc nan Speireag.",
        "productionProcess": "Tradiční dvojitá destilace v unikátních měděných kotlích se zahnutými trubkami do tvaru U, zrání 10 let v sudech z amerického dubu na divokém mořském pobřeží ostrova Skye.",
        "flavorProfile": "Výrazný rašelinový kouř, mořská sůl, chaluhy, šťavnatý slad, sušené citrusy a proslulý explozivní černopepřový závěr (peppery catch).",
        "foodPairing": "Skvěle doplňuje humří polévku, uzený vepřový bůček a tatarák.",
        "staffNotes": "Jediná palírna na ostrově Skye fungující nepřetržitě od 19. století. Robert Louis Stevenson ji označil za 'krále všech nápojů'.",
        "tags": ["whisky", "single malt", "kouřová", "ostrov Skye", "Talisker", "rašelina"]
    },
    {
        "id": "whisky-monkey-shoulder",
        "name": "Monkey Shoulder",
        "category": "whisky",
        "categoryName": "Whisky, whiskey, bourbon 0,03l",
        "producer": "William Grant & Sons",
        "origin": "Skotsko",
        "region": "Speyside",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "98 Kč",
        "rawIngredients": "100% ječný slad (Blended Malt – směs jednosladových whisky bez zrnné složky).",
        "productionProcess": "Pečlivě sestavený blend tří špičkových speysidských single malt palíren (Balvenie, Glenfiddich a Kininvie). Zraje v sudech po bourbonu prvního plnění.",
        "flavorProfile": "Velmi jemná, sladká a krémová whisky. Tóny vanilky, medu, pečených hrušek, pomerančové marmelády a jemného dubového koření.",
        "foodPairing": "Vynikající jak samotná na ledu, tak v klasických whisky koktejlech (Old Fashioned, Whisky Sour).",
        "staffNotes": "Název vzdává poctu sladovníkům, kteří při ručním přehazování sladu trpěli dočasným namožením ramene přezdívaným 'opičí rameno'.",
        "tags": ["whisky", "blended malt", "Speyside", "vanilka", "jemná"]
    },
    {
        "id": "whiskey-jameson",
        "name": "Jameson Irish Whiskey",
        "category": "whisky",
        "categoryName": "Whisky, whiskey, bourbon 0,03l",
        "producer": "Irish Distillers (Midleton Distillery)",
        "origin": "Irsko",
        "region": "County Cork, Midleton",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "75 Kč",
        "rawIngredients": "Sladový a nesladový ječmen sušený v uzavřených pecích bez kouře rašeliny, čistá irská voda.",
        "productionProcess": "Třikrát destilovaná (triple distilled) v měděných kotlích pot still a kolonách, zrání minimálně 4 roky v sudech po bourbonu a španělském sherry.",
        "flavorProfile": "Mimořádně jemná a vyvážená chuť. Tóny zelených jablek, vanilky, jemného oříšku a květin se sametovým závěrem bez kouře.",
        "foodPairing": "Vhodná k burgeru, pečenému kolenu a kuřeti.",
        "staffNotes": "Nejprodávanější irská whiskey na světě. Díky trojité destilaci a absenci rašeliny je dokonale hladká a přístupná.",
        "tags": ["whiskey", "Irsko", "Jameson", "trojitá destilace", "hladká"]
    },
    {
        "id": "whiskey-jack-daniels",
        "name": "Jack Daniel's Old No. 7",
        "category": "whisky",
        "categoryName": "Whisky, whiskey, bourbon 0,03l",
        "producer": "Jack Daniel Distillery (založeno 1866)",
        "origin": "USA",
        "region": "Lynchburg, Tennessee",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "82 Kč",
        "rawIngredients": "Kvasný rmut: 80 % kukuřice, 12 % ječný slad a 8 % žito. Železa zbavená voda z jeskynního pramene Cave Spring Hollow.",
        "productionProcess": "Tennessee Whiskey – před uložením do nových vypálených sudů z amerického bílého dubu kape pomalu kapka po kapce přes třímetrovou vrstvu dřevěného uhlí z cukrového javoru (Lincoln County Process).",
        "flavorProfile": "Sladká, kouřová a plná. Tóny karamelu, vanilky, pečených banánů, javorového sirupu a opečeného dubu.",
        "foodPairing": "Skvělá k pečeným vepřovým žebrům s jablečnou BBQ omáčkou a burgerům.",
        "staffNotes": "Není to obyčejný bourbon – filtrace přes javorové uhlí dává Jacku Daniel's jeho pověstnou jemnost a nasládlý javorový charakter.",
        "tags": ["whiskey", "Tennessee", "Jack Daniels", "javorové uhlí", "USA"]
    },

    # --- BRANDY & COGNAC ---
    {
        "id": "brandy-metaxa-5",
        "name": "Metaxa *****",
        "category": "brandy_cognac",
        "categoryName": "Brandy & cognac 0,03l",
        "producer": "House of Metaxa (Spyros Metaxa, od 1888)",
        "origin": "Řecko",
        "region": "Kifissia / Egejské ostrovy (Samos a Lémnos)",
        "volume": "0,03l",
        "abv": "38,0 % obj.",
        "price": "68 Kč",
        "rawIngredients": "Vinné destiláty ze středomořských hroznů, archivní sladká muškátová vína a tajná směs bylin a okvětních plátků růží.",
        "productionProcess": "Destiláty zrají minimálně 5 let v sudech z francouzského limousinského dubu, poté se míchají s muškátovými víny a infuzují bylinami.",
        "flavorProfile": "Jantarová barva. Sladce kořenitá chuť sušených meruněk, pomerančových květů, růžové vody, medu a vanilky.",
        "foodPairing": "Vhodné ke kávě, dezertům a karamelovému trhanci.",
        "staffNotes": "Unikátní řecký nápoj – vinný destilát zjemněný muškátovým vínem a růžovými lístky.",
        "tags": ["brandy", "Řecko", "Metaxa", "muškátové víno", "byliny"]
    },
    {
        "id": "cognac-remy-martin-1738",
        "name": "Rémy Martin 1738 Accord Royal",
        "category": "brandy_cognac",
        "categoryName": "Brandy & cognac 0,03l",
        "producer": "Rémy Martin (založeno 1724)",
        "origin": "Francie",
        "region": "Cognac, Fine Champagne (Grande a Petite Champagne)",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "175 Kč",
        "rawIngredients": "Hrozny odrůdy Ugni Blanc z nejlepších vápencových apelací Grande a Petite Champagne.",
        "productionProcess": "Dvojitá destilace na kalech v malých měděných kotlích Charentais. Zrání v silně toustovaných sudech z francouzského limousinského dubu.",
        "flavorProfile": "Mimořádně bohatý a kulatý koňak. Tóny švestkových povidel, fíků, lékořice, hořké čokolády, skořice a karamelu s nekonečnou dochutí.",
        "foodPairing": "Svíčková Wellington, paštika z kachních foie gras a luxusní dezerty z čokolády Valrhona Dulcey.",
        "staffNotes": "Roku 1738 udělil francouzský král Ludvík XV. Rémy Martinovi královské privilegium vysazovat nové vinice za mimořádnou kvalitu koňaku. Tento koňak nese hrdě toto datum.",
        "tags": ["cognac", "koňak", "Fine Champagne", "Francie", "Remy Martin", "královský"]
    },

    # --- PÁLENKY & LIKÉRY ---
    {
        "id": "palenka-fuzovice",
        "name": "Fuzovice",
        "category": "liqueur_spirit",
        "categoryName": "Pálenky & likéry 0,03l",
        "producer": "Pivovar & Restaurace FUZE ve spolupráci s řemeslným lihovarem",
        "origin": "Česká republika",
        "region": "Praha",
        "volume": "0,03l",
        "abv": "42,0 % obj.",
        "price": "85 Kč",
        "rawIngredients": "Čerstvě uvařený nefiltrovaný a nepasterizovaný ležák TransFUZE 12 z našeho vlastního pivovaru.",
        "productionProcess": "Pomalá frakční destilace vlastního řemeslného piva na moderních měděných kolonách, zachycující nejjemnější aromatické složky sladu a žateckého chmele.",
        "flavorProfile": "Křišťálově čirá pivovice s intenzivní vůní čerstvého pivovarského sladu, chmelových silic, pečeného chleba a sušených jablek.",
        "foodPairing": "Nejlepší digestiv po pečeném vepřovém kolenu, žebrech a burgeru.",
        "staffNotes": "Podpisový destilát restaurace Fuze! Vyrábí se destilací našeho vlastního piva TransFUZE 12 – jedinečný příběh pro každého hosta.",
        "tags": ["pivovice", "FUZE", "vlastní výroba", "TransFUZE", "řemeslné"]
    },
    {
        "id": "palenka-absinth-st-antoine",
        "name": "Absinth St. Antoine Žufánek",
        "category": "liqueur_spirit",
        "categoryName": "Pálenky & likéry 0,03l",
        "producer": "Žufánek (rodinný lihovar Boršice)",
        "origin": "Česká republika",
        "region": "Morava, Slovácko",
        "volume": "0,03l",
        "abv": "70,0 % obj.",
        "price": "115 Kč",
        "rawIngredients": "Velejemný líh, pelyněk pravý (Artemisia absinthium), anýz, fenykl a dalších 7 horských bylin.",
        "productionProcess": "Tradiční průtahová destilace bez umělých barviv. Následná sekundární macerace bylin dávající absintu přírodní chlorofylově zelenou barvu.",
        "flavorProfile": "Mocný, bylinný, anýzový nápoj s komplexní hořkostí pelyňku a svěžím fenyklovým tónem. Při styku s ledovou vodou tvoří dokonalý mléčný zákal (louche efekt).",
        "foodPairing": "Rituální digestiv po jídle servírovaný s kapající ledovou vodou přes děrovanou lžičku s cukrem.",
        "staffNotes": "Martin Žufánek vyrábí jeden z nejrespektovanějších pravých absintů v Evropě. Žádné zapalování – pravý absinth se ředí ledovou vodou!",
        "tags": ["absinth", "Žufánek", "byliny", "pelyněk", "70%", "louche"]
    },
    {
        "id": "palenka-kminka-garage22",
        "name": "Kmínka Garage 22",
        "category": "liqueur_spirit",
        "categoryName": "Pálenky & likéry 0,03l",
        "producer": "Garage 22 (řemeslná destilérka v pražských Holešovicích)",
        "origin": "Česká republika",
        "region": "Praha, Holešovice",
        "volume": "0,03l",
        "abv": "38,0 % obj.",
        "price": "89 Kč",
        "rawIngredients": "Český dvouletý kmín, římský kmín, citrusová kůra a vybrané bylinky.",
        "productionProcess": "Macerace a šetrná redestilace v měděné koloně v malé pražské manufaktuře.",
        "flavorProfile": "Ušlechtilá, hřejivá a kořeněná chuť s čistým tónem chlebového kmínu osvěžená citrusovým dotekem.",
        "foodPairing": "Naprosto bezkonkurenční po tučném mase, pečeném vepřovém kolenu a tataráku.",
        "staffNotes": "Kmín je odvěkým pomocníkem pro trávení po sytých českých jídlech. Garage 22 povýšila starou českou kmínku na moderní světovou úroveň.",
        "tags": ["kmínka", "Garage 22", "Praha", "Holešovice", "trávení"]
    },
    {
        "id": "palenka-kontusovka-zufanek",
        "name": "Kontušovka Žufánek",
        "category": "liqueur_spirit",
        "categoryName": "Pálenky & likéry 0,03l",
        "producer": "Žufánek (Boršice)",
        "origin": "Česká republika",
        "region": "Morava, Slovácko",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "95 Kč",
        "rawIngredients": "Badyán, anýz, fenykl, koriandr, kmín a dalších pět bylin.",
        "productionProcess": "Bylinný destilát podle původní polské receptury ze 17. století, zrající v dubových sudech.",
        "flavorProfile": "Krásná zlatavá barva, bohatá anýzovo-badyánová chuť s kořeněnými tóny a medovým dozvukem.",
        "foodPairing": "Tradiční digestiv k vepřovým hodům a poctivé české kuchyni.",
        "staffNotes": "Slavný nápoj švejkovských dob ('dvě kontušovky a jedno pivo'). U Žufánka obnovená legenda v prvotřídní kvalitě.",
        "tags": ["kontušovka", "Žufánek", "badyán", "anýz", "tradiční"]
    },
    {
        "id": "palenka-orechovy-radlik",
        "name": "Ořechový likér Radlík",
        "category": "liqueur_spirit",
        "categoryName": "Pálenky & likéry 0,03l",
        "producer": "Palírna Radlík (Jílové u Prahy)",
        "origin": "Česká republika",
        "region": "Střední Čechy",
        "volume": "0,03l",
        "abv": "35,0 % obj.",
        "price": "89 Kč",
        "rawIngredients": "Zelené nezralé vlašské ořechy sbírané na svatého Jana (konec června), koření (hřebíček, skořice, muškát), med a ovocný destilát.",
        "productionProcess": "Pomalá několikaměsíční macerace zelených ořechů s kořením v jemném ovocném lihu a zrání.",
        "flavorProfile": "Tmavě hnědá barva. Bohatá, lehce nahořklá ořechová chuť s kořením a jemnou medovou sladkostí.",
        "foodPairing": "Skvělé k sýrovému prkénku, ořechovým dezertům a waldorfskému salátu.",
        "staffNotes": "Radlík je jednou z nejoceňovanějších pěstitelských pálenic v Česku s desítkami mezinárodních medailí.",
        "tags": ["ořechovka", "Radlík", "vlašské ořechy", "bylinný likér"]
    },
    {
        "id": "palenka-hustopecska-mandlovka",
        "name": "Hustopečská Mandlovka",
        "category": "liqueur_spirit",
        "categoryName": "Pálenky & likéry 0,03l",
        "producer": "Mandlárna Hustopeče",
        "origin": "Česká republika",
        "region": "Morava, Hustopeče (unikátní mandloňové sady)",
        "volume": "0,03l",
        "abv": "38,0 % obj.",
        "price": "79 Kč",
        "rawIngredients": "Přírodní mandlové aroma, vinný líh, hroznový mošt a čistá pramenitá voda.",
        "productionProcess": "Harmonické scelování vinného destilátu s přírodní mandlovou esencí podle receptury bývalého ředitele hustopečských mandloňových sadů Rudolfa Poslušného.",
        "flavorProfile": "Křišťálově čirá pálenka s opojnou sladce marcipánovou vůní a plnou mandlovou chutí s hřejivým závěrem.",
        "foodPairing": "Výborná k dezertům, trhanci a kávě espresso.",
        "staffNotes": "Pochází z jediných rozsáhlých mandloňových sadů ve střední Evropě rozkládajících se na svazích Hustopečí.",
        "tags": ["mandlovka", "Hustopeče", "mandle", "marcipán", "Morava"]
    },
    {
        "id": "palenka-jagermeister",
        "name": "Jägermeister",
        "category": "liqueur_spirit",
        "categoryName": "Pálenky & likéry 0,03l",
        "producer": "Mast-Jägermeister SE (založeno 1878)",
        "origin": "Německo",
        "region": "Wolfenbüttel, Dolní Sasko",
        "volume": "0,03l",
        "abv": "35,0 % obj.",
        "price": "75 Kč",
        "rawIngredients": "56 různých přírodních bylin, kořenů, květů a ovoce (např. zázvor, anýz, kardamom, pomerančová kůra, lékořice, jalovec).",
        "productionProcess": "Vícestupňová macerace bylin ve směsi vody a lihu trvající několik týdnů. Následné zrání 12 měsíců ve velkých dubových sudech.",
        "flavorProfile": "Tmavě hnědý bylinný likér. Komplexní, kořenitý, bylinkový a lehce hořkosladký s tóny skořice a lékořice. Podává se ledově namražený na -18 °C.",
        "foodPairing": "Univerzální party shot i digestiv po těžkém jídle.",
        "staffNotes": "Podává se z mrazáku při -18 °C pro optimální viskozitu a uvolnění bylinných silic.",
        "tags": ["Jägermeister", "bylinný likér", "Německo", "namražený", "56 bylin"]
    },
    {
        "id": "palenka-becherovka",
        "name": "Becherovka (Nefiltrovaná)",
        "category": "liqueur_spirit",
        "categoryName": "Pálenky & likéry 0,03l",
        "producer": "Jan Becher – Karlovarská Becherovka",
        "origin": "Česká republika",
        "region": "Karlovy Vary",
        "volume": "0,03l",
        "abv": "38,0 % obj.",
        "price": "68 Kč",
        "rawIngredients": "Směs cca 20 tajných bylin a koření z celého světa, karlovarská minerální voda, líh a cukr.",
        "productionProcess": "Macerace bylin v lihu a následné zrání v dubových sudech. Nefiltrovaná edice si uchovává přirozený zákal a plnější tělo s vyšším podílem esenciálních silic.",
        "flavorProfile": "Typická hořkosladká kořeněná chuť s výraznými tóny hřebíčku, skořice, anýzu a pomerančové kůry.",
        "foodPairing": "Skvělá jako aperitiv před jídlem i jako tradiční lék na trávení po večeři.",
        "staffNotes": "Nefiltrovaná verze je prémiová lahůdka – je chuťově hutnější a aromatičtější než běžná filtrovaná Becherovka.",
        "tags": ["Becherovka", "Karlovy Vary", "bylinný likér", "nefiltrovaná", "česká klasika"]
    },

    # --- GINY & VODKY ---
    {
        "id": "gin-tanqueray",
        "name": "Tanqueray London Dry Gin",
        "category": "gin",
        "categoryName": "Giny 0,03l",
        "producer": "Charles Tanqueray (založeno 1830 v Londýně)",
        "origin": "Velká Británie",
        "region": "Cameronbridge, Skotsko",
        "volume": "0,03l",
        "abv": "43,1 % obj.",
        "price": "82 Kč",
        "rawIngredients": "Obilný neutrální líh a přesně 4 základní botanicals: toskánský jalovec, semena koriandru, kořen anděliky a lékořice.",
        "productionProcess": "Čtyřnásobná destilace v historickém měděném kotli 'Old Tom No. 10', který přežil bombardování Londýna.",
        "flavorProfile": "Čistý, křišťálový, přímočarý jalovcový profil se svěžím citrusovým a bylinným tělem a suchým závěrem.",
        "foodPairing": "Perfektní v kombinaci s prémiovým tonikem Thomas Henry a plátkem limetky.",
        "staffNotes": "Benchmark pro London Dry gin na celém světě. Žádné přidané cukry ani umělá aromata – pouze 4 čisté ingredience.",
        "tags": ["gin", "London Dry", "Tanqueray", "jalovec", "Anglie"]
    },
    {
        "id": "gin-hendricks",
        "name": "Hendrick's Gin",
        "category": "gin",
        "categoryName": "Giny 0,03l",
        "producer": "William Grant & Sons (Girvan Distillery)",
        "origin": "Skotsko",
        "region": "Ayrshire, Girvan",
        "volume": "0,03l",
        "abv": "41,4 % obj.",
        "price": "115 Kč",
        "rawIngredients": "11 klasických botanicals plus závěrečná infuze esencí z damašských růží a čerstvých holandských salátových okurek.",
        "productionProcess": "Unikátní kombinace destilace ve dvou zcela odlišných kotlích: tradiční Bennett pot still (tělo) a vzácný Carter-Head still z roku 1948 s bylinným košem (lehkost).",
        "flavorProfile": "Květinový, neobyčejně svěží s nezaměnitelným tónem čerstvé křupavé okurky a jemných okvětních lístků růže podložený jalovcem.",
        "foodPairing": "Servíruje se s tonikem Fever-Tree nebo Thomas Henry a tenkým plátkem čerstvé okurky.",
        "staffNotes": "Kultovní lahev ve stylu starých viktoriánských lékárnických lahviček. Průkopník moderní renesance prémiových ginů.",
        "tags": ["gin", "Hendricks", "okurka", "růže", "Skotsko"]
    },
    {
        "id": "vodka-anton-kaapl-legionar",
        "name": "Anton Kaapl LEGIONÄR Vodka",
        "category": "vodka",
        "categoryName": "Vodky 0,03l",
        "producer": "Rodinný lihovar Anton Kaapl",
        "origin": "Česká republika",
        "region": "Jižní Čechy, Jílovice u Trhových Svinů",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "89 Kč",
        "rawIngredients": "Výběrový velejemný líh a demineralizovaná křišťálová voda z vlastního hlubinného vrtu v Novohradských horách.",
        "productionProcess": "Vícedenní vícestupňová filtrace přes aktivní uhlí a zrání v tancích pro maximální zaoblení lihu.",
        "flavorProfile": "Neskutečně jemná, sametová a čistá chuť bez jakékoliv lihové agresivity, s lehkým sladkým dotekem pšenice.",
        "foodPairing": "Tradiční doprovod k tataráku, kaviáru, consommé a uzenému masu.",
        "staffNotes": "Česká řemeslná rodinná značka z Novohradských hor pojmenovaná po dědečkovi – legionáři Antonu Kaaplovi.",
        "tags": ["vodka", "Anton Kaapl", "jižní Čechy", "čistá", "řemeslná"]
    },
    {
        "id": "vodka-grey-goose",
        "name": "Grey Goose Vodka",
        "category": "vodka",
        "categoryName": "Vodky 0,03l",
        "producer": "Bacardi (François Thibault, Maître de Chai)",
        "origin": "Francie",
        "region": "Picardie / Cognac (Gensac-la-Pallue)",
        "volume": "0,03l",
        "abv": "40,0 % obj.",
        "price": "135 Kč",
        "rawIngredients": "100% francouzská ozimá pšenice z úrodné oblasti Picardie a přírodní pramenitá voda filtrovaná vápencem v oblasti Cognac.",
        "productionProcess": "Pětistupňová kontinuální kolonová destilace a míchání s vápencovou pramenitou vodou.",
        "flavorProfile": "Hedvábná, kulatá textura s jemnými tóny mandlí, bílého pepře a čerstvě upečeného pečiva.",
        "foodPairing": "Prémiový základ pro koktejly Vodka Martini, Espresso Martini a Cosmopolitan.",
        "staffNotes": "Synonymum luxusní francouzské vodky. Vytvořena sklepním mistrem z oblasti Cognac.",
        "tags": ["vodka", "Grey Goose", "Francie", "pšenice", "luxusní"]
    },

    # --- PIVA NA ČEPU (VLASTNÍ PIVOVAR FUZE) ---
    {
        "id": "pivo-transfuze-12",
        "name": "TransFUZE 12 (Tradiční ležák)",
        "category": "beer_craft",
        "categoryName": "Pivo na čepu",
        "producer": "Pivovar FUZE Praha (sládek Aleš Paik)",
        "origin": "Česká republika",
        "region": "Praha, Masaryčka",
        "volume": "0,3l / 0,5l",
        "abv": "5,0 % obj.",
        "price": "59 Kč / 69 Kč",
        "rawIngredients": "Český humnový ječný slad, žatecký poloraný červeňák (ŽPČ), voda a spodní pivovarské kvasinky.",
        "productionProcess": "Tradiční dvourmutový dekokční postup, klasické kvašení v otevřených spilkách a dlouhé zrání v ležáckých tancích. Nepasterizované, nefiltrované, čepované přímo z tanku.",
        "flavorProfile": "Zlatá jiskrná barva, hustá krémová pěna, plné sladové tělo vyvážené pevnou, lahodnou a neulpívající chmelovou hořkostí.",
        "foodPairing": "Univerzální společník ke všem českým specialitám: vysoký vepřový řízek Duroc, hovězí tatarák, pečené koleno.",
        "staffNotes": "Naše vlajková loď! Vařeno přímo v restauraci naším vrchním sládkem Alešem Paikem. Nefiltrovaný ležák nejvyšší české školy.",
        "tags": ["pivo", "ležák", "FUZE", "TransFUZE", "čepované", "tankové"]
    },
    {
        "id": "pivo-infuze-ipa-12",
        "name": "InFUZE IPA 12 (Session IPA)",
        "category": "beer_craft",
        "categoryName": "Pivo na čepu",
        "producer": "Pivovar FUZE Praha (sládek Aleš Paik)",
        "origin": "Česká republika",
        "region": "Praha",
        "volume": "0,4l",
        "abv": "4,9 % obj.",
        "price": "85 Kč",
        "rawIngredients": "Kombinace světlých ječných sladů, americké a novozélandské aromatické chmele (Citra, Mosaic, Nelson Sauvin).",
        "productionProcess": "Svrchně kvašené pivo, studené chmelení (dry hopping) v ležáckém tanku, nepasterizované a nefiltrované.",
        "flavorProfile": "Svěží citrusové aroma grapefruitu, marakuji a borovicového jehličí, lehké pitelné tělo a suchá osvěžující hořkost v závěru.",
        "foodPairing": "Skvěle funguje s burgery, vepřovým bůčkem s chimichurri a pikantními jídly.",
        "staffNotes": "Session IPA je navržená tak, aby byla voňavá a plná chmelové chuti, ale zároveň lehká a skvěle pitelná po celý večer.",
        "tags": ["pivo", "IPA", "Session IPA", "FUZE", "chmel", "citrusy"]
    },
    {
        "id": "pivo-fuzenac-13",
        "name": "FUZEnáč 13 (Polotmavý kouřový speciál)",
        "category": "beer_craft",
        "categoryName": "Pivo na čepu",
        "producer": "Pivovar FUZE Praha (sládek Aleš Paik)",
        "origin": "Česká republika",
        "region": "Praha",
        "volume": "0,3l / 0,5l",
        "abv": "5,3 % obj.",
        "price": "69 Kč / 78 Kč",
        "rawIngredients": "Humnový slad, nakuřovaný bukový slad z Bambergu, karamelový slad a žatecký chmel.",
        "productionProcess": "Spodně kvašené pivo, pomalé zrání v tancích, nepasterizované a nefiltrované.",
        "flavorProfile": "Nádherná jantarová barva, kouřové a uzené aroma připomínající ohniště a uzené maso, plná sladová chuť s jemným karamelem.",
        "foodPairing": "Geniální párování k zauzenému vepřovému boku, pastrami z hliněné pece a vepřovým žebrům.",
        "staffNotes": "Pro milovníky poctivých nakuřovaných piv (Rauchbier). Dým z bukového dřeva dává pivu neskutečný charakter.",
        "tags": ["pivo", "polotmavé", "kouřové", "Rauchbier", "FUZE", "speciál"]
    }
]
'''

# Let's write out the full python script to generate TypeScript file
full_script = f"""
import json

{culinary_slice}

{beverages_code}

print(f"Loaded {{len(CULINARY_TERMS)}} culinary terms and {{len(BEVERAGE_ITEMS)}} beverage items")

# Generate TypeScript output
ts_content = '''/**
 * FUZE Gastro Akademie – Kompletní Knihovna pojmů, surovin a nápojů
 * 
 * Obsahuje:
 * 1. Kulinářský lexikon: cizí gastronomické názvy, masné řezy, omáčky, techniky a gurmánské ingredience z menu Fuze
 * 2. Nápojová encyklopedie: všechna vína, rumy, tequily, whisky, likéry, giny, vodky, pálenky a řemeslná piva Fuze
 */

export interface CulinaryTerm {{
  id: string;
  name: string;
  originalTerm?: string;
  category: 'meat_cuts' | 'sauces_dressings' | 'gourmet_ingredients' | 'culinary_techniques' | 'world_flavors' | 'pastry_sweets';
  categoryName: string;
  origin: string;
  shortDescription: string;
  ingredients: string[];
  flavorProfile: string;
  culinaryUsage: string;
  fuzeMenuAppearances: string[];
  staffTips: string;
  tags: string[];
}}

export interface BeverageItem {{
  id: string;
  name: string;
  category: 'wine_white' | 'wine_red' | 'wine_rose' | 'wine_sparkling' | 'rum' | 'tequila' | 'whisky' | 'brandy_cognac' | 'liqueur_spirit' | 'gin' | 'vodka' | 'beer_craft';
  categoryName: string;
  producer: string;
  origin: string;
  region: string;
  volume: string;
  abv: string;
  price: string;
  rawIngredients: string;
  productionProcess: string;
  flavorProfile: string;
  foodPairing: string;
  staffNotes: string;
  tags: string[];
}}

export const CULINARY_TERMS: CulinaryTerm[] = ''' + json.dumps(CULINARY_TERMS, ensure_ascii=False, indent=2) + ''';

export const BEVERAGE_ITEMS: BeverageItem[] = ''' + json.dumps(BEVERAGE_ITEMS, ensure_ascii=False, indent=2) + ''';
'''

with open('src/data/libraryData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Successfully generated src/data/libraryData.ts!")
"""

with open('scripts/build_full_library_ts.py', 'w') as f:
    f.write(full_script)

print("Saved scripts/build_full_library_ts.py")
