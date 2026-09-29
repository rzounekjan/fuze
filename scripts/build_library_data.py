import json
import os

CULINARY_TERMS = [
    {
        "id": "chimichurri",
        "name": "Chimichurri",
        "originalTerm": "Chimichurri (Argentina)",
        "category": "sauces_dressings",
        "categoryName": "Omáčky a salsy",
        "origin": "Argentina / Uruguay",
        "shortDescription": "Svěží jihoamerická nevařená bylinková omáčka na bázi čerstvých bylin, česneku, octa a olivového oleje.",
        "ingredients": [
            "Hladkolistá petrželka",
            "Čerstvé oregano",
            "Česnek",
            "Chilli vločky (ají molido)",
            "Červený vinný ocet",
            "Kvalitní extra panenský olivový olej",
            "Mořská sůl a čerstvě mletý černý pepř"
        ],
        "flavorProfile": "Svěží, bylinkový, lehce pikantní s příjemnou kyselinkou, která skvěle prořezává tučnější pečená a grilovaná masa.",
        "culinaryUsage": "Používá se jako studená omáčka k masu, marináda nebo dip. Suroviny se sekají nožem (nikoli mixují na kaši), aby vynikla textura a barva bylin.",
        "fuzeMenuAppearances": [
            "Grilovaný vepřový bůček s karamelizovanou yuzu omáčkou a chimichurri",
            "Chimmichurri omáčka (samostatná studená omáčka)"
        ],
        "staffTips": "Doporučte hostům k tučnějším masům (bůček, steaky). Kyselost vinného octa a svěžest petržele fantasticky vyvažují bohatost masa a tuk.",
        "tags": ["omáčka", "bylinky", "studená kuchyně", "Argentina", "gril"]
    },
    {
        "id": "duroc",
        "name": "Duroc",
        "originalTerm": "Duroc Pork (USA)",
        "category": "meat_cuts",
        "categoryName": "Maso a masné řezy",
        "origin": "Severní Amerika (New York a New Jersey, polovina 19. století)",
        "shortDescription": "Prestižní plemeno prasat proslulé vysokým podílem nitrosvalového tuku (mramorování), jemnými svalovými vlákny a výjimečnou šťavnatostí.",
        "ingredients": [
            "100% čistokrevné nebo křížené vepřové maso plemene Duroc (typická červenohnědá barva prasat)",
            "Bohatý nitrosvalový intramuskulární tuk",
            "Vysoký obsah kyseliny olejové"
        ],
        "flavorProfile": "Výrazná plná masová chuť, nesrovnatelně šťavnatější a křehčí než běžné průmyslové vepřové maso, s jemně nasládlým oříškovým podtónem tuku.",
        "culinaryUsage": "Ideální pro přípravu vysokých řízků, kotlet, pečení a pomalu pečených mas. Díky mramorování zůstává maso po smažení či pečení dokonale šťavnaté a nevysuší se.",
        "fuzeMenuAppearances": [
            "Vysoký vepřový řízek z plemene Duroc s omáčkou fines herbes, bramborovou kaší a bramborovými křupkami"
        ],
        "staffTips": "Zdůrazněte hostovi, že Duroc je ve vepřovém mase ekvivalentem plemene Black Angus u hovězího. Řízek je proto vysoký a zůstává uprostřed úžasně šťavnatý.",
        "tags": ["vepřové", "maso", "Duroc", "řízek", "mramorování"]
    },
    {
        "id": "cornichons",
        "name": "Cornichons",
        "originalTerm": "Cornichons (Francie)",
        "category": "gourmet_ingredients",
        "categoryName": "Gurmánské suroviny",
        "origin": "Francie",
        "shortDescription": "Drobné francouzské nakládané okurčičky s jemnými bradavičkami sklízené v raném stadiu zrání v pikantním octovém nálevu.",
        "ingredients": [
            "Mladé mini polní okurky (délka 3–5 cm)",
            "Bílý vinný nebo lihový ocet",
            "Estragon",
            "Koriandr a hořčičné semínko",
            "Perlové cibulky a mořská sůl"
        ],
        "flavorProfile": "Křupavé, výrazně kyselkavé s bylinkovými tóny estragonu a lehkou hořčičnou pikancí.",
        "culinaryUsage": "Nenahraditelná součást hovězího tataráku, studených masových mís, paštik (terrin) a raclette. Jemně nasekané dodávají texturu a svěží kyselost.",
        "fuzeMenuAppearances": [
            "Krájený hovězí tatarák z květové špičky, okurčičky cornichons, marinované šalotky, bramborová sláma"
        ],
        "staffTips": "V tataráku cornichons zajišťují dokonalou křupavost a kyselou protiváhu bohatému hovězímu masu z květové špičky krájenému na kostičky.",
        "tags": ["okurky", "nakládaná zelenina", "Francie", "tatarák"]
    },
    {
        "id": "salsa-verde",
        "name": "Salsa verde",
        "originalTerm": "Salsa verde (Itálie / Středomoří)",
        "category": "sauces_dressings",
        "categoryName": "Omáčky a salsy",
        "origin": "Itálie (Piemont / Lombardie)",
        "shortDescription": "Tradiční středomořská nevařená zelená bylinková salsa plná umami ze slaných ančoviček a naložených kaparů.",
        "ingredients": [
            "Čerstvá hladkolistá petržel",
            "Solení ančovičky (sardelky)",
            "Naložené kapary",
            "Česnek",
            "Dijonská hořčice nebo střídka bílého chleba namočená v octu",
            "Kvalitní panenský olivový olej a kapka vinného octa"
        ],
        "flavorProfile": "Bylinkový, slaný, kyselkavý s hlubokou chutí umami. Intenzivnější a slanější než jihoamerické chimichurri díky ančovičkám a kaparům.",
        "culinaryUsage": "Klasický doprovod k vařenému i pečenému masu (bollito misto), rybám z pece a grilované zelenině.",
        "fuzeMenuAppearances": [
            "Naše salsa verde (samostatná studená omáčka k masům z grilu)"
        ],
        "staffTips": "Vysvětlete rozdíl mezi chimichurri a salsa verde: Chimichurri staví na oreganu a chilli, zatímco Salsa Verde je italská klasika s kapary a ančovičkami přinášejícími přirozené umami.",
        "tags": ["omáčka", "bylinky", "ančovičky", "kapary", "Itálie"]
    },
    {
        "id": "choron",
        "name": "Choron omáčka",
        "originalTerm": "Sauce Choron (Francie)",
        "category": "sauces_dressings",
        "categoryName": "Omáčky a salsy",
        "origin": "Francie (Paříž, 19. století, šéfkuchař Alexandre Étienne Choron)",
        "shortDescription": "Luxusní teplá emulgovaná omáčka vycházející z omáčky Béarnaise, do které se vmíchává redukce ze sladkých zralých rajčat.",
        "ingredients": [
            "Čerstvé žloutky",
            "Přepuštěné máslo (clarified butter)",
            "Bílé víno a šalotkový estragonový ocet",
            "Čerstvý estragon a kerblík",
            "Koncentrovaný rajčatový protlak / pyré z pečených rajčat",
            "Špetka kajenského pepře a soli"
        ],
        "flavorProfile": "Sametově jemná, máslová omáčka s anýzovým nádechem estragonu a sladkokyselou hloubkou pečených rajčat. Má krásnou korálově růžovou barvu.",
        "culinaryUsage": "Podává se teplá k hovězím steakům, květové špičce, grilovaným rybám a pečené zelenině.",
        "fuzeMenuAppearances": [
            "Choron – teplá omáčka k masům z grilu a pece na dřevo"
        ],
        "staffTips": "Skvělá volba pro hosty, kteří mají rádi Béarnaise nebo Holandskou omáčku, ale chtějí jemnější a ovocnější rajčatový tón k hovězímu steaku.",
        "tags": ["teplá omáčka", "máslo", "žloutky", "rajčata", "Francie"]
    },
    {
        "id": "fines-herbes",
        "name": "Fines herbes",
        "originalTerm": "Fines herbes (Francie)",
        "category": "sauces_dressings",
        "categoryName": "Omáčky a salsy",
        "origin": "Francie (tradiční haute cuisine)",
        "shortDescription": "Kultovní francouzské bylinkové kvarteto skládající se z hladkolisté petrželky, pažitky, kerblíku a estragonu.",
        "ingredients": [
            "Kerblík (anthriscus cerefolium) – jemná anýzová chuť",
            "Estragon (artemisia dracunculus) – výrazná bylinková nóta",
            "Pažitka – jemný cibulový šmrnc",
            "Hladkolistá petržel – svěžest a zemitost",
            "Smetana, máslový základ a jemný telecí vývar"
        ],
        "flavorProfile": "Delikátní, svěží, bylinkový s lehkým tónem lékořice a anýzu, podtržený jemným máslovým a smetanovým tělem.",
        "culinaryUsage": "Bylinky se přidávají až v samém závěru vaření, aby neztratily prchavé silice a svěží zelenou barvu.",
        "fuzeMenuAppearances": [
            "Naše fines herbes – teplá bylinková omáčka k vysokému vepřovému řízku z plemene Duroc"
        ],
        "staffTips": "Zdůrazněte hostům jemnost této omáčky – je to tradiční francouzská bylinková klasika, která řízek nezakryje, ale elegantně podtrhne křehkost masa Duroc.",
        "tags": ["bylinky", "omáčka", "francouzská kuchyně", "estragon", "kerblík"]
    },
    {
        "id": "padron-peppers",
        "name": "Papričky Padrón",
        "originalTerm": "Pimientos de Padrón (Španělsko)",
        "category": "gourmet_ingredients",
        "categoryName": "Gurmánské suroviny",
        "origin": "Španělsko (obec Padrón v Galicii)",
        "shortDescription": "Drobné zelené španělské papričky, které se zprudka opékají na oleji a solí vločkovou solí. Legendární jsou tím, že většina je sladká, ale každá desátá pálí.",
        "ingredients": [
            "Čerstvé zelené papričky Capsicum annuum var. Annuum",
            "Kvalitní olej na smažení",
            "Hrubá mořská vločková sůl (Maldon)"
        ],
        "flavorProfile": "Svěží, travnatá, jemně nasládlá chuť s kouřovým nádechem z opečení na žáru. Slavné galicijské přísloví praví: „Os pementos de Padrón, uns pican e outros non“ (Padrónské papričky, jedny pálí a jiné ne).",
        "culinaryUsage": "Zprudka se opečou na rozpálené pánvi nebo grilu, dokud slupka nezhnědne a nenafoukne se, a ihned se posypou solí.",
        "fuzeMenuAppearances": [
            "Opečené papričky Padrón jako součást servisu k US Prime květové špičce a US Prime vysokému roštěnci"
        ],
        "staffTips": "Zábavný fakt pro hosty: naprostá většina je jemná a sladká, ale sem tam se objeví pikantní kousek, což ze stolování dělá malou kulinářskou ruletu!",
        "tags": ["papričky", "Španělsko", "gril", "tapas", "příloha"]
    },
    {
        "id": "us-prime",
        "name": "US Prime Beef",
        "originalTerm": "USDA Prime Beef (USA)",
        "category": "meat_cuts",
        "categoryName": "Maso a masné řezy",
        "origin": "Spojené státy americké (USDA systém certifikace)",
        "shortDescription": "Absolutní špička amerického hovězího masa – nejvyšší jakostní stupeň, který obdrží pouze necelá 3 % veškerého dobytka v USA.",
        "ingredients": [
            "Hovězí maso z mladého krmeného dobytka (převážně plemena Black Angus)",
            "Vysoký stupeň zrnového dokrmování (kukuřice, obilí)",
            "Husté, rovnoměrné mramorování (marbling) uvnitř svaloviny"
        ],
        "flavorProfile": "Neuvěřitelně máslová, bohatá hovězí chuť. Díky vysokému obsahu nitrosvalového tuku se maso na grilu doslova peče ve vlastní šťávě a rozplývá se na jazyku.",
        "culinaryUsage": "Steaky z vysokých a nízkých roštěnců, květové špičky, surovina pro luxusní burgery a pastrami.",
        "fuzeMenuAppearances": [
            "US Prime hovězí květová špička z grilu a pece na dřevo",
            "US Prime vysoký roštěnec z grilu",
            "US Prime hovězí burger s opečenou slaninou a čedarem",
            "Naše pastrami z US Prime hovězího žebra"
        ],
        "staffTips": "Klíčový prodejní argument: US Prime je záruka nejvyšší možné kvality a šťavnatosti, jakou lze v americkém mase získat (vyšší než Choice či Select).",
        "tags": ["hovězí", "maso", "steaky", "USA", "mramorování", "gril"]
    },
    {
        "id": "picanha-kvetova-spicka",
        "name": "Květová špička (Picanha)",
        "originalTerm": "Picanha / Rump Cap / Tafelspitz",
        "category": "meat_cuts",
        "categoryName": "Maso a masné řezy",
        "origin": "Brazílie / Jižní Amerika a Rakousko",
        "shortDescription": "Trojúhelníkový sval z horní části hovězí kýty (m. biceps femoris) zakončený typickou souvislou vrstvou křupavého bílého tuku.",
        "ingredients": [
            "Hovězí květová špička (vrchní šál kýty)",
            "Tukový pás (tukové krytí chránící maso před vysušením)"
        ],
        "flavorProfile": "Velmi intenzivní hovězí chuť, pevnější, ale křehká textura. Tukový kryt při pečení pomalu odtéká a dodává masu neskutečnou chuťovou hloubku.",
        "culinaryUsage": "V Jižní Americe královna churrasca na špízech, v Rakousku základ pro Tafelspitz, v moderní gastronomii skvělý steak i surovina pro jemně krájený tatarák.",
        "fuzeMenuAppearances": [
            "Krájený hovězí tatarák z květové špičky",
            "US Prime hovězí květová špička z pece na dřevo s papričkami Padrón"
        ],
        "staffTips": "Hostům vysvětlete, že tatarák ve Fuze se nekrájí z libové svíčkové bez chuti, ale právě z květové špičky, která má mnohem výraznější a plnější hovězí charakter.",
        "tags": ["hovězí", "picanha", "steak", "tatarák", "maso"]
    },
    {
        "id": "rib-eye-rostenec",
        "name": "Vysoký roštěnec (Rib Eye)",
        "originalTerm": "Rib Eye Steak / Entrecôte",
        "category": "meat_cuts",
        "categoryName": "Maso a masné řezy",
        "origin": "Tradiční řez hovězího (Francie / USA)",
        "shortDescription": "Nejšťavnatější a nejpopulárnější steakový řez z přední části hřbetu s centrálním tukovým okem (eye of fat).",
        "ingredients": [
            "Hovězí roštěnec mezi 6. a 12. žebrem",
            "Středové tukové oko a výrazné intramuskulární mramorování"
        ],
        "flavorProfile": "Šťavnatý, robustní a plný. Tukové oko se během pečení na vysoké teplotě rozpouští a maso promazává zevnitř.",
        "culinaryUsage": "Ideální pro přípravu na vysokém žáru (dřevěné uhlí, Josper, litinový tál). Doporučená úprava Medium-Rare až Medium, aby se tuk stihl rozpustit.",
        "fuzeMenuAppearances": [
            "US Prime vysoký roštěnec z grilu a pece na dřevo s papričkami Padrón"
        ],
        "staffTips": "Doporučte propečení Medium Rare nebo Medium. U roštěnce je potřeba, aby se vnitřní tuk prohřál a rozpustil – v tu chvíli je steak nejlahodnější.",
        "tags": ["hovězí", "steak", "gril", "roštěnec", "rib eye"]
    },
    {
        "id": "pastrami",
        "name": "Pastrami",
        "originalTerm": "Pastrami (Rumunsko / New York deli)",
        "category": "meat_cuts",
        "categoryName": "Maso a masné řezy",
        "origin": "Židovská kuchyně východní Evropy (Rumunsko), proslavená newyorskými lahůdkářstvími (Katz's Deli)",
        "shortDescription": "Hovězí maso (hrudí, žebro) naložené v kořeněném láku, obalené v krustě z drceného koriandru a pepře, pomalu zauzené a následně tažené v páře doměkka.",
        "ingredients": [
            "Hovězí žebro nebo hrudí (brisket)",
            "Dusitanový nebo mořský solný lák s hnědým cukrem, bobkovým listem a novým kořením",
            "Krusta: hrubě mletý černý pepř, pražený koriandr, česnek, hořčičné semínko",
            "Dřevěný kouř a hliněná pec"
        ],
        "flavorProfile": "Kouřový, kořeněný, pikantní s tóny koriandru a pepře. Maso se po dlouhé tepelné úpravě doslova rozpadá na jemná vlákna.",
        "culinaryUsage": "Krájí se na plátky a servíruje se v teplých sendvičích v křupavém kváskovém chlebu s roztaveným sýrem, hořčicí a nakládanou zeleninou.",
        "fuzeMenuAppearances": [
            "Naše pastrami z US Prime hovězího žebra pečeného v hliněné peci, sýr raclette a zelný salát v kváskovém chlebu"
        ],
        "staffTips": "Ve Fuze nepoužíváme kupované polotovary – žebro se marinuje, udí a peče přímo v naší hliněné peci na dřevo!",
        "tags": ["pastrami", "uzené", "hovězí", "sendvič", "pekárna"]
    },
    {
        "id": "raclette",
        "name": "Sýr Raclette",
        "originalTerm": "Fromage à Raclette (Švýcarsko / Savojsko)",
        "category": "gourmet_ingredients",
        "categoryName": "Gurmánské suroviny",
        "origin": "Švýcarsko (kanton Valais)",
        "shortDescription": "Tradiční polotvrdý sýr z nepasterizovaného nebo pasterizovaného kravského mléka, vyhlášený svou bezkonkurenční tavitelností.",
        "ingredients": [
            "Kravské mléko z horských pastvin",
            "Přírodní syřidlo a sůl",
            "Doba zrání 3 až 6 měsíců s pravidelným vymýváním kůry"
        ],
        "flavorProfile": "Za studena mírně pikantní, po roztavení získává krémovou, oříškovou, máslovou a plnou chuť s neodolatelnou vůní.",
        "culinaryUsage": "Zahřívá se a stahuje (škrabe – od francouzského 'racler') na pečené brambory, uzeniny a do teplých sendvičů.",
        "fuzeMenuAppearances": [
            "Naše pastrami ze žebra se sýrem raclette a zelným salátem v opečeném kváskovém chlebu"
        ],
        "staffTips": "Dokonale propojuje křupavý opečený kváskový chléb a šťavnaté kořeněné maso pastrami do bohatého dekadentního sousta.",
        "tags": ["sýr", "Švýcarsko", "tavený sýr", "pastrami"]
    },
    {
        "id": "red-leicester",
        "name": "Red Leicester",
        "originalTerm": "Red Leicester Cheese (Anglie)",
        "category": "gourmet_ingredients",
        "categoryName": "Gurmánské suroviny",
        "origin": "Velká Británie (Leicestershire, od 18. století)",
        "shortDescription": "Tradiční anglický tvrdý sýr z kravského mléka, nápadný svou sytě oranžovo-červenou barvou získanou z přírodního barviva annatto.",
        "ingredients": [
            "Pasterizované plnotučné kravské mléko",
            "Přírodní barvivo Annatto (ze semen oreláníku barvířského)",
            "Mléčné kultury a syřidlo"
        ],
        "flavorProfile": "Bohatý, lehce nasládlý s oříškovými a karamelovými tóny, jemně drobivá, ale krémová textura.",
        "culinaryUsage": "Skvěle se zapéká, taví a strouhá na teplá jídla, hranolky a do sýrových omáček.",
        "fuzeMenuAppearances": [
            "Hranolky s lanýžovou majonézou a sýrem Red Leicester"
        ],
        "staffTips": "Vysvětlete hostům sytou barvu – sýr není uměle barvený chemií, ale semínky jihoamerického keře Annatto podle staleté anglické receptury.",
        "tags": ["sýr", "Anglie", "hranolky", "lanýže"]
    },
    {
        "id": "foie-gras",
        "name": "Foie gras",
        "originalTerm": "Foie gras (Francie)",
        "category": "gourmet_ingredients",
        "categoryName": "Gurmánské suroviny",
        "origin": "Francie (původně starověký Egypt a Řím)",
        "shortDescription": "Kultovní francouzská kulinářská delikatesa – přirozeně ztučnělá játra kachen nebo hus krmených vybraným zrnem.",
        "ingredients": [
            "Kachní játra (Foie gras de canard)",
            "Koňak / Armagnac a portské víno na marinování",
            "Bílý pepř, muškátový oříšek a sůl",
            "Pivní želé Kasteel Rouge"
        ],
        "flavorProfile": "Mimořádně bohatá, hedvábná a máslová chuť, která se okamžitě rozplývá na jazyku při tělesné teplotě.",
        "culinaryUsage": "Zpracovává se do jemných terin, paštik nebo se zprudka opéká na pánvi. Vždy vyžaduje kontrastní sladkokyselý doprovod (ovoce, želé, brioška).",
        "fuzeMenuAppearances": [
            "Paštika z kachních foie gras v želé z piva Kasteel Rouge, višňová omáčka, opečená máslová brioška"
        ],
        "staffTips": "Doporučte párování s belgickým višňovým pivem Kasteel Rouge nebo sklenkou Pálavy – ovocná sladkost a kyselinka vytvoří v ústech nebeskou harmonii.",
        "tags": ["foie gras", "kachní játra", "paštika", "Francie", "delikatesa"]
    },
    {
        "id": "consomme",
        "name": "Hovězí consommé",
        "originalTerm": "Consommé de bœuf (Francie)",
        "category": "gourmet_ingredients",
        "categoryName": "Gurmánské suroviny",
        "origin": "Francie",
        "shortDescription": "Křišťálově čirý, silný a koncentrovaný hovězí vývar zbavený všech kalů a přebytečného tuku speciální kuchařskou technikou klarifikace.",
        "ingredients": [
            "Hovězí kosti a přední maso pomalu tažené mnoho hodin",
            "Kořenová zelenina (mrkev, celer, petržel, pórek)",
            "Klarifikační fáše: vaječné bílky a libové mleté hovězí maso",
            "Jemný játrový knedlíček"
        ],
        "flavorProfile": "Hluboká, čistá esence hovězího masa s vysokým obsahem želatiny, která na rtech zanechává příjemný sametový film.",
        "culinaryUsage": "Podává se vroucí jako luxusní polévka s jemnou vložkou zeleniny julienne a játrovým knedlíčkem.",
        "fuzeMenuAppearances": [
            "Hovězí consommé s jemným játrovým knedlíčkem a zeleninou"
        ],
        "staffTips": "Host ocení informaci o náročnosti přípravy – consommé není obyčejný vývar, ale dvojitě zesílený a bílky vyčištěný bujón, který vyžaduje hodiny trpělivé práce.",
        "tags": ["polévka", "vývar", "consommé", "francouzská technika"]
    },
    {
        "id": "valrhona-dulcey",
        "name": "Valrhona Dulcey",
        "originalTerm": "Chocolat Valrhona Dulcey 35% (Francie)",
        "category": "pastry_sweets",
        "categoryName": "Cukrářství a dezerty",
        "origin": "Francie (čokoládovna Valrhona, Tain l'Hermitage)",
        "shortDescription": "První tzv. „blond“ čokoláda na světě, vytvořená náhodným pomalým karamelizováním bílé čokolády mistrem Frédéricem Bau.",
        "ingredients": [
            "Kakaové máslo (min. 35 %)",
            "Sušené mléko pomalu karamelizované Maillardovou reakcí",
            "Cukr a přírodní vanilkový extrakt",
            "Špetka soli vyvažující sladkost"
        ],
        "flavorProfile": "Intenzivní tóny máslového karamelu, pečeného piškotu (sablé), dulce de leche a jemné mořské soli.",
        "culinaryUsage": "Používá se k výrobě prémiových ganache, pěn, pralinek a dezertů nejvyšší cukrářské ligy.",
        "fuzeMenuAppearances": [
            "Dortíky s ganache ve tvaru chmelových šišek z čokolády Valrhona Dulcey, čokoládová hlína a višňová omáčka"
        ],
        "staffTips": "Jeden z nejoriginálnějších dezertů v Praze – vizuálně vypadá přesně jako zelená chmelová šiška, ale uvnitř skrývá tuto luxusní karamelovou blond čokoládu s višní.",
        "tags": ["čokoláda", "Valrhona", "dezert", "karamel", "chmel"]
    },
    {
        "id": "ganache",
        "name": "Ganache",
        "originalTerm": "Ganache (Francie)",
        "category": "pastry_sweets",
        "categoryName": "Cukrářství a dezerty",
        "origin": "Francie / Švýcarsko (pařížská cukrárna Siraudin, cca 1860)",
        "shortDescription": "Základní pilíř francouzské cukrařiny – hladká emulze horké smetany a vysoce kvalitní čokolády.",
        "ingredients": [
            "Výběrová čokoláda (hořká, mléčná nebo blond)",
            "Vysokoprocentní čerstvá smetana ke šlehání (min. 35 % tuku)",
            "Máslo nebo glukóza pro hedvábný lesk a pružnost"
        ],
        "flavorProfile": "Neuvěřitelně hladká, krémová textura, která se sametově rozplývá na patře a přenáší čistou chuť kakaových bobů.",
        "culinaryUsage": "Náplň do dortů, makronek, tartaletek, pralinek a moderních tvarovaných dezertů.",
        "fuzeMenuAppearances": [
            "Dortíky s ganache ve tvaru chmelových šišek"
        ],
        "staffTips": "Při správné emulgaci ganache netvoří žádné hrudky a vytváří dokonale krémové jádro chmelového dortíku.",
        "tags": ["cukrařina", "ganache", "čokoláda", "krém", "dezert"]
    },
    {
        "id": "espuma",
        "name": "Espuma",
        "originalTerm": "Espuma (Španělsko)",
        "category": "culinary_techniques",
        "categoryName": "Kulinářské techniky",
        "origin": "Španělsko (Katalánsko, šéfkuchař Ferran Adrià v elBulli)",
        "shortDescription": "Moderní kulinářská technika vytváření extrémně nadýchané pěny v tlakové sifonové láhvi za pomoci oxidu dusného (N2O).",
        "ingredients": [
            "Ochucená tekutina nebo pyré (krupicová směs, mléko, vanilka)",
            "Přírodní stabilizátor (tuk, želatina, agar nebo vaječný bílek)",
            "Potravinářský plyn N2O (oxid dusný)"
        ],
        "flavorProfile": "Lehká jako obláček, okamžitě uvolňuje aromatické látky a chuť na jazyku bez pocitu těžkosti.",
        "culinaryUsage": "Umožňuje servírovat tradiční pokrmy v moderní beztížné textuře.",
        "fuzeMenuAppearances": [
            "Krupicová kaše z espumy s kakaem a máslem (z dětského i stálého menu)"
        ],
        "staffTips": "Naše krupicová kaše není hutná hmota z hrnce – díky espumě je to neuvěřitelně lehký a nadýchaný krém, který si zamilují děti i dospělí.",
        "tags": ["espuma", "molekulární gastronomie", "sifon", "krupicová kaše"]
    },
    {
        "id": "brioche",
        "name": "Brioška (Brioche)",
        "originalTerm": "Brioche (Francie, Normandie)",
        "category": "pastry_sweets",
        "categoryName": "Cukrářství a pečivo",
        "origin": "Francie (Normandie, 15. století)",
        "shortDescription": "Vznešené francouzské kynuté pečivo bohaté na máslo a vejce, které mu dávají zlatavou barvu a nadýchanou střídku.",
        "ingredients": [
            "Pšeničná mouka",
            "Mimořádně vysoký podíl másla (až 50 % hmotnosti mouky)",
            "Čerstvá vejce a žloutky",
            "Mléko, droždí, špetka cukru a soli"
        ],
        "flavorProfile": "Jemná, máslová, nasládlá chuť s křupavou kůrkou a jemnou pavučinkovou střídkou.",
        "culinaryUsage": "Krájí se na plátky a opéká k paštikám a foie gras, nebo slouží jako prémiové pečivo k pečeným masům a burgerům.",
        "fuzeMenuAppearances": [
            "Opečená máslová brioška k paštice z kachních foie gras",
            "Opečená česneková brioška k vepřovým žebrům marinovaným v pivu",
            "Opečená česneková brioška (samostatná příloha)"
        ],
        "staffTips": "Máslo v briošce skvěle absorbuje šťávu z žeber i delikátní tuk z kachních foie gras.",
        "tags": ["brioška", "pečivo", "máslo", "Francie", "příloha"]
    },
    {
        "id": "smrze",
        "name": "Smrže (Morchella)",
        "originalTerm": "Morchella / Morels",
        "category": "gourmet_ingredients",
        "categoryName": "Gurmánské suroviny",
        "origin": "Lesy mírného pásma Evropy a Severní Ameriky",
        "shortDescription": "Jedny z nejvzácnějších a nejchutnějších jarních lesních hub s charakteristickým kuželovitým kloboukem s voštinovou strukturou.",
        "ingredients": [
            "Pravé lesní smrže (sušené nebo čerstvé jarní)",
            "Duté plodnice bohaté na aromatické sloučeniny"
        ],
        "flavorProfile": "Výrazně zemitá, dřevitá, oříšková a masitá chuť s intenzivním umami, která dodává omáčkám hluboký lesní charakter.",
        "culinaryUsage": "Po rehydrataci se restují na másle, přidávají do luxusních klobás, terin a smetanových omáček k telecímu či drůbežímu masu.",
        "fuzeMenuAppearances": [
            "Naše telecí klobása se smrži, kaštany a sušenými švestkami, lanýžová omáčka"
        ],
        "staffTips": "Smrže jsou v kulinářském světě řazeny hned za lanýže jako králové hub. Naše telecí klobása s nimi má nezaměnitelný noblesní šmrnc.",
        "tags": ["houby", "smrže", "delikatesa", "telecí", "lesní surovina"]
    },
    {
        "id": "yuzu",
        "name": "Yuzu",
        "originalTerm": "Yuzu / Citrus junos (Japonsko / Východní Asie)",
        "category": "world_flavors",
        "categoryName": "Světové chutě a asijská fúze",
        "origin": "Japonsko a východní Asie",
        "shortDescription": "Vzácné a ceněné asijské citrusové ovoce s neobyčejně komplexním a pronikavým aroma.",
        "ingredients": [
            "Čistá šťáva a kůra z plodů citrusu Yuzu (Citrus junos)"
        ],
        "flavorProfile": "Fascinující chuťová fúze připomínající kombinaci mandarinky, hořkého grapefruitu, limetky a květinových tónů jasmínu.",
        "culinaryUsage": "V omáčkách, marinádách, glazurách na tučná masa a v dezertech i prémiových koktejlech.",
        "fuzeMenuAppearances": [
            "Grilovaný vepřový bůček s karamelizovanou yuzu omáčkou a chimichurri"
        ],
        "staffTips": "Yuzu v glazuře na bůčku přináší přesně tu asijskou 'fuze' dimenzi, která odděluje obyčejný pečený bůček od špičkového moderního gastronomického zážitku.",
        "tags": ["yuzu", "citrus", "Japonsko", "bůček", "glazura"]
    },
    {
        "id": "confit-cesnek",
        "name": "Konfitovaný česnek",
        "originalTerm": "Ail confit (Francie)",
        "category": "culinary_techniques",
        "categoryName": "Kulinářské techniky",
        "origin": "Francie (jihozápad)",
        "shortDescription": "Tradiční kulinářská technika pomalého vaření celých stroužků česneku ponořených v tuku při nízké teplotě (cca 85 °C).",
        "ingredients": [
            "Celé stroužky čerstvého česneku",
            "Kvalitní olej nebo hovězí lůj / kachní sádlo",
            "Tymián, rozmarýn a zrnka černého pepře"
        ],
        "flavorProfile": "Při konfitování zmizí veškerá štiplavost a agresivita syrového česneku – stroužky získají máslovou texturu a sladkou, oříškově karamelovou chuť.",
        "culinaryUsage": "Roztírá se na křupavé topinky, vmíchává se do bramborové kaše nebo se používá jako základ omáček.",
        "fuzeMenuAppearances": [
            "Krájený hovězí tatarák z květové špičky s topinkou na hovězím loji a konfitovaným česnekem"
        ],
        "staffTips": "Hosté, kterým syrový česnek dráždí žaludek, se konfitovaného česneku nemusí bát – je jemný, nasládlý a lehce stravitelný.",
        "tags": ["česnek", "konfit", "tatarák", "topinka", "francouzská technika"]
    },
    {
        "id": "bramborova-slama",
        "name": "Bramborová sláma",
        "originalTerm": "Pommes pailles (Francie)",
        "category": "culinary_techniques",
        "categoryName": "Kulinářské techniky",
        "origin": "Francie",
        "shortDescription": "Brambory nakrájené na tenoučké nudličky o síle 1 mm, zbavené škrobu a bleskově usmažené dokřupava do zlatavého hnízda.",
        "ingredients": [
            "Kvalitní brambory s vysokým obsahem sušiny",
            "Olej s vysokým kouřovým bodem",
            "Jemná mořská sůl"
        ],
        "flavorProfile": "Mimořádně křupavá, lehká textura s čistou chutí smažených brambor bez nasáklého tuku.",
        "culinaryUsage": "Slouží jako luxusní křupavá garnitura dodávající pokrmům výškový rozměr a texturální kontrast.",
        "fuzeMenuAppearances": [
            "Krájený hovězí tatarák z květové špičky (bramborová sláma na vrchu tataráku)",
            "Naše bramborová kaše s máslem a bramborovou slámou"
        ],
        "staffTips": "V tataráku i kaši tvoří sláma fantastický křupavý kontrast k jemnému krájenému masu nebo sametové bramborové kaši.",
        "tags": ["brambory", "smažení", "křupavost", "tatarák", "garnitura"]
    },
    {
        "id": "kasteel-rouge",
        "name": "Kasteel Rouge",
        "originalTerm": "Kasteel Rouge (Belgie)",
        "category": "gourmet_ingredients",
        "categoryName": "Piva & gastronomické suroviny",
        "origin": "Belgie (Ingelmunster, rodinný pivovar Van Honsebrouck)",
        "shortDescription": "Slavné belgické silné svrchně kvašené pivo (8 % obj. alk.), které 6 měsíců dozrává na pravých zralých višních.",
        "ingredients": [
            "Základní tmavé belgické pivo Kasteel Donker",
            "Pravé višně a višňová šťáva",
            "Slad, chmel, voda a belgické kvasinky"
        ],
        "flavorProfile": "Rubínová barva, plná sladkokyselá chuť višní, tóny čokolády, mandlí a portského vína s hřejivým alkoholovým závěrem.",
        "culinaryUsage": "Kromě čepování na baru se v kuchyni Fuze používá k vaření delikátního pivního želé k paštikám z foie gras.",
        "fuzeMenuAppearances": [
            "Paštika z kachních foie gras v želé z piva Kasteel Rouge, višňová omáčka",
            "Kasteel Rouge 18 – čepované pivo na čepu 0,25 l"
        ],
        "staffTips": "Skvělý příklad provázanosti baru a kuchyně Fuze: pivo, které máme na čepu, naši kuchaři zredukovali do želé pokrývajícího paštiku z kachních jater!",
        "tags": ["belgické pivo", "višně", "foie gras", "želé", "pivo na čepu"]
    },
    {
        "id": "waldorf",
        "name": "Waldorf salát",
        "originalTerm": "Waldorf Salad (USA, New York)",
        "category": "sauces_dressings",
        "categoryName": "Saláty a dresinky",
        "origin": "USA (New York, hotel Waldorf-Astoria, 1893)",
        "shortDescription": "Světoznámý křupavý salát, který před více než stoletím vymyslel hotelový maître d'hôtel Oscar Tschirky.",
        "ingredients": [
            "Křupavá šťavnatá jablka nakrájená na kousky",
            "Čerstvý řapíkatý celer",
            "Bobule vinné révy",
            "Nakládané vlašské ořechy",
            "Jemný krémový majonézový dresink s kapkou citronu"
        ],
        "flavorProfile": "Svěží, osvěžující, harmonie sladkých jablek a hroznů, zemitých ořechů a křupavého aromatického celeru s krémovým dresinkem.",
        "culinaryUsage": "Podává se jako lehký předkrm, samostatný salát nebo příloha k pečeným masům a drůbeži.",
        "fuzeMenuAppearances": [
            "Waldorf salát (jablka, řapíkatý celer, hrozny, nakládané vlašské ořechy, majonézový dresing)"
        ],
        "staffTips": "Pozor na alergeny: obsahuje skořápkové plody (vlašské ořechy), celer a vejce v majonéze. Pro milovníky křupavých svěžích salátů je to jasná volba.",
        "tags": ["salát", "celer", "vlašské ořechy", "jablka", "New York"]
    },
    {
        "id": "demi-glace",
        "name": "Demi-glace",
        "originalTerm": "Demi-glace (Francie)",
        "category": "culinary_techniques",
        "categoryName": "Kulinářské techniky a základy",
        "origin": "Francie (Auguste Escoffier)",
        "shortDescription": "Královský základ hnědých omáček – silný telecí vývar (fond brun) zredukovaný pomalým varem na zlomek objemu na hustou lesklou esenci.",
        "ingredients": [
            "Pečené telecí a hovězí kosti a šlachy plné kolagenu",
            "Restovaná kořenová zelenina (mirepoix – mrkev, celer, cibule)",
            "Červené víno, rajčatový protlak, bouquet garni (tymián, bobkový list)",
            "Více než 24 hodin pomalého tažení a redukce"
        ],
        "flavorProfile": "Masivní koncentrace čistého umami, zemitých masových tónů a želatinové plnosti.",
        "culinaryUsage": "Základ koňakové, lanýžové a pepřové omáčky k prémiovým steakům z grilu.",
        "fuzeMenuAppearances": [
            "Koňaková teplá omáčka",
            "Lanýžová teplá omáčka",
            "Základ masových šťáv u pečených mas a žeber"
        ],
        "staffTips": "Kvalitní demi-glace je vizitkou špičkové restaurace – nepoužívají se žádná umělá zahušťovadla ani mouka, omáčka houstne pouze redukcí a přírodním kolagenem.",
        "tags": ["vývar", "redukce", "umami", "telecí", "omáčky"]
    },
    {
        "id": "kaiserschmarrn",
        "name": "Karamelový trhanec",
        "originalTerm": "Kaiserschmarrn (Rakousko-Uhersko)",
        "category": "pastry_sweets",
        "categoryName": "Cukrářství a dezerty",
        "origin": "Rakousko (oblíbený dezert císaře Františka Josefa I.)",
        "shortDescription": "Císařský dezert z nadýchaného těsta z vyšlehaných bílků, pečený na másle a natrhaný dvěma vidličkami na kousky s karamelizovaným cukrem.",
        "ingredients": [
            "Vaječné žloutky a sníh z bílků",
            "Hladká mouka a mléko",
            "Přepuštěné máslo na opékání",
            "Cukr zkaramelizovaný na pánvi",
            "Pečené švestky a zmrzlina z vaječného likéru"
        ],
        "flavorProfile": "Nadýchaný, křehký uvnitř, s křupavou karamelovou krustičkou na povrchu, doplněný kyselkavými horkými švestkami a studenou zmrzlinou.",
        "culinaryUsage": "Podává se ihned po dopečení čerstvý a horký na pánvičce s chladivým kontrastem zmrzliny.",
        "fuzeMenuAppearances": [
            "Karamelový trhanec s pečenými švestkami a zmrzlinou z vaječného likéru"
        ],
        "staffTips": "Perfektní sdílený dezert pro stůl po vydatném obědě nebo večeři k dobré kávě či digestivu.",
        "tags": ["dezert", "trhanec", "Kaiserschmarrn", "švestky", "karamel"]
    },
    {
        "id": "humri-bisque",
        "name": "Krémová humří polévka (Bisque)",
        "originalTerm": "Bisque de homard (Francie)",
        "category": "gourmet_ingredients",
        "categoryName": "Gurmánské suroviny",
        "origin": "Francie (Biskajský záliv)",
        "shortDescription": "Jeden z nejluxusnějších mořských krémů na světě, připravovaný restováním krunýřů korýšů s koňakem, bílým vínem a smetanou.",
        "ingredients": [
            "Humří a krevetové krunýře a klepeta",
            "Koňak na flambování a bílé víno",
            "Šalotka, řapíkatý celer, fenykl a rajčatový protlak",
            "Vysokoprocentní smetana",
            "Klobáska a zelenina, zapékané listové těsto"
        ],
        "flavorProfile": "Mimořádně plná, sladce minerální chuť humřího masa s kouřovým koňakovým nádechem a sametovým smetanovým závěrem.",
        "culinaryUsage": "Servíruje se v misce zapečené pokličkou ze zlatavého listového těsta, které zadržuje veškeré aroma uvnitř.",
        "fuzeMenuAppearances": [
            "Krémová humří polévka s klobáskou a zeleninou, zapečená listovým těstem"
        ],
        "staffTips": "Pozor na alergeny korýšů (č. 2) a ryb. Prezentace se zapečeným listovým těstem je u hostů vizuálně mimořádně oblíbená.",
        "tags": ["humr", "polévka", "bisque", "korýši", "listové těsto"]
    },
    {
        "id": "pak-choi",
        "name": "Pak choi",
        "originalTerm": "Bok choy / Pak choi (Čína)",
        "category": "world_flavors",
        "categoryName": "Světové chutě a asijská fúze",
        "origin": "Čína / Východní Asie",
        "shortDescription": "Čínské křupavé listové zelí s dužnatými bílými řapíky a tmavě zelenými listy.",
        "ingredients": ["100% čerstvá zelenina Brassica rapa subsp. Chinensis"],
        "flavorProfile": "Jemná, svěží, křupavá chuť s lehkou hořčičnou nasládlostí.",
        "culinaryUsage": "Bleskově se restuje na woku nebo griluje, aby stonky zůstaly křupavé.",
        "fuzeMenuAppearances": ["Přílohy a teplá asijská jídla v poledních nabídkách Fuze"],
        "staffTips": "Skvělá lehká alternativa k tradičnímu českému zelí pro moderní párování s bůčkem a vepřovým masem.",
        "tags": ["zelenina", "Asie", "wok", "příloha"]
    },
    {
        "id": "ponzu",
        "name": "Ponzu",
        "originalTerm": "Ponzu (Japonsko)",
        "category": "world_flavors",
        "categoryName": "Světové chutě a asijská fúze",
        "origin": "Japonsko",
        "shortDescription": "Ikonická japonská citrusová omáčka na bázi sójové omáčky, citrusové šťávy yuzu nebo sudachi, mirinu a vývaru dashi.",
        "ingredients": [
            "Japonská sójová omáčka",
            "Citrusová šťáva Yuzu / Sudachi",
            "Mirin (sladké rýžové víno)",
            "Vývar dashi z řasy kombu a bonito vloček"
        ],
        "flavorProfile": "Slaný, svěže citrusový, nakyslý s hlubokou umami linkou.",
        "culinaryUsage": "Dip k tataki, syrovým rybám, grilovaným masům a do moderních dresinků.",
        "fuzeMenuAppearances": ["Studené marinády a dresinky na saláty a grilovaná masa"],
        "staffTips": "Dokonale osvěžuje chuťové buňky po tučném soustu masa.",
        "tags": ["omáčka", "Japonsko", "yuzu", "sójová omáčka", "umami"]
    },
    {
        "id": "panko",
        "name": "Panko strouhanka",
        "originalTerm": "Panko (Japonsko)",
        "category": "world_flavors",
        "categoryName": "Světové chutě a asijská fúze",
        "origin": "Japonsko",
        "shortDescription": "Japonská strouhanka vyráběná z bílého chleba bez kůrky pečeného elektrickým proudem.",
        "ingredients": ["Pšeničný chléb pečený elektrickým odporem bez tvrdé kůrky"],
        "flavorProfile": "Neutrální nosič chutí, vytváří bezkonkurenčně křupavou texturu.",
        "culinaryUsage": "Díky větším šupinkám a nízké nasákavosti oleje zůstává smažený pokrm déle lehký a křupavý.",
        "fuzeMenuAppearances": ["Krokety a smažená jídla"],
        "staffTips": "Panko strouhanka nenasakuje tolik tuku jako klasická česká rohlíková strouhanka.",
        "tags": ["strouhanka", "křupavost", "smažení", "Japonsko"]
    },
    {
        "id": "kimchi",
        "name": "Kimchi",
        "originalTerm": "Kimchi (Korejský poloostrov)",
        "category": "world_flavors",
        "categoryName": "Světové chutě a asijská fúze",
        "origin": "Korea (zapsáno na seznam nehmotného dědictví UNESCO)",
        "shortDescription": "Kultovní korejský tradiční fermentovaný salát z pekingského zelí a pálivého koření plný probiotik.",
        "ingredients": [
            "Pekingské zelí",
            "Korejské chilli gochugaru",
            "Česnek a čerstvý zázvor",
            "Jarní cibulka a ředkev daikon",
            "Rybí omáčka a fermentované krevety"
        ],
        "flavorProfile": "Výrazně pálivý, kyselý, slaný, šumivě fermentovaný s česnekovým řízem.",
        "culinaryUsage": "Podává se jako příloha k tučnému masu, burgerům nebo do teplých stir-fry pokrmů.",
        "fuzeMenuAppearances": ["Přílohy k bůčkům a grilovaným masům v poledních a sezónních nabídkách"],
        "staffTips": "Kyselost a pálivost kimchi ideálně neutralizuje tučnost vepřového bůčku.",
        "tags": ["fermentace", "Korea", "chilli", "zelí", "probiotika"]
    },
    {
        "id": "edamame",
        "name": "Edamame",
        "originalTerm": "Edamame (Japonsko / Východní Asie)",
        "category": "world_flavors",
        "categoryName": "Světové chutě a asijská fúze",
        "origin": "Japonsko a východní Asie",
        "shortDescription": "Mladé zelené sójové boby sklízené před dozráním ještě v celých luscích.",
        "ingredients": ["100% mladé sójové boby Glycine max", "Hrubá mořská sůl"],
        "flavorProfile": "Svěží, jemně oříšková a sladkavá chuť s pevnou křupavou texturou.",
        "culinaryUsage": "Vaří se krátce v osolené vodě v lusku nebo se vyloupané přidávají do salátů a misek.",
        "fuzeMenuAppearances": ["Salátové doplňky a asijské fúzní přílohy"],
        "staffTips": "Pozor na alergen č. 6 (sója). Lusky se nepolykají, boby se z nich vymáčknou zuby.",
        "tags": ["sója", "edamame", "Japonsko", "boby", "zelenina"]
    },
    {
        "id": "kombucha-pojem",
        "name": "Kombucha",
        "originalTerm": "Kombucha (Východní Asie)",
        "category": "gourmet_ingredients",
        "categoryName": "Gurmánské suroviny a nápoje",
        "origin": "Starověká Čína / Mandžusko (více než 2000 let historie)",
        "shortDescription": "Přírodní fermentovaný perlivý čajový nápoj vznikající symbiotickou kulturou bakterií a kvasinek SCOBY.",
        "ingredients": [
            "Kvalitní zelený nebo černý čaj",
            "Cukr (potrava pro kvasinky a bakterie)",
            "Symbiotická kultura SCOBY",
            "Ovocné šťávy nebo byliny pro druhotnou fermentaci"
        ],
        "flavorProfile": "Jemně perlivý, osvěžující, sladkokyselý s lehkým jablečno-octovým a kvasným tónem.",
        "culinaryUsage": "Podává se chlazená jako zdravý prémiový nealkoholický aperitiv nebo digestiv.",
        "fuzeMenuAppearances": [
            "Kombucha – Magu kombucha a řemeslné fermentované nápoje v nápojovém lístku"
        ],
        "staffTips": "Skvělá nealko alternativa k pivu a cideru s blahodárnými účinky na trávení po vydatném jídle.",
        "tags": ["fermentace", "čaj", "nealko", "kombucha", "zdraví"]
    },
    {
        "id": "cider-pojem",
        "name": "Cider",
        "originalTerm": "Cidre / Cider (Francie / Anglie)",
        "category": "gourmet_ingredients",
        "categoryName": "Gurmánské suroviny a nápoje",
        "origin": "Normandie a Bretaň (Francie) / jihozápadní Anglie",
        "shortDescription": "Přírodní alkoholický perlivý nápoj vznikající kvašením čerstvého jablečného moštu.",
        "ingredients": [
            "Čerstvě lisovaný mošt ze speciálních moštových jablek",
            "Divoké nebo ušlechtilé kvasinky",
            "Přírodní oxid uhličitý z fermentace"
        ],
        "flavorProfile": "Svěží jablečná chuť s příjemnou kyselinkou, jemnou tříslovinou a osvěžujícím perlením.",
        "culinaryUsage": "Tradiční nápoj k vepřovému masu, sýrům a klobásám.",
        "fuzeMenuAppearances": [
            "Opre` Cider a Opre` Sour Cherry (řemeslné slovenské cidery z rodinné farmy)"
        ],
        "staffTips": "Opre' Cider není přeslazený průmyslový nápoj, ale poctivý řemeslný fermentovaný jablečný mošt z rodinné farmy.",
        "tags": ["cider", "jablka", "fermentace", "Opre", "nápoj"]
    }
]

print(f"Loaded {len(CULINARY_TERMS)} culinary terms")
