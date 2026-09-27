import json
import re
from update_menu_data import build_questions_for_item

CZECH_FOOD_CATEGORIES = [
    {
        "id": "predkrmy",
        "name": "Předkrmy a malá jídla",
        "badge": "Předkrmy a malá jídla",
        "description": "Autorské předkrmy s důrazem na vyzrálé suroviny, lokální řemeslo a párování s pivem",
        "iconName": "Utensils",
        "items": [
            {
                "id": "tatarak",
                "name": "Krájený hovězí tatarák",
                "weight": "90g",
                "allergens": ["1", "3", "7"],
                "description": "z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka a konfitovaný česnek, bramborová sláma",
                "price": "239 Kč",
                "notes": "Maso je krájené, nikoli mleté. Topinka se opéká na hovězím loji pro plnou chuť."
            },
            {
                "id": "klobasa-smrze",
                "name": "Naše telecí klobása se smrži",
                "weight": "100g",
                "allergens": ["1", "3", "7", "8", "10"],
                "description": "kaštany a sušenými švestkami, lanýžová omáčka, pivní sušenka",
                "price": "219 Kč",
                "notes": "Vlastní výroba klobásy s kousky smržů a kaštanů."
            },
            {
                "id": "foie-gras",
                "name": "Paštika z kachních foie gras",
                "weight": "100g",
                "allergens": ["1", "3", "7"],
                "description": "v želé z piva Kasteel Rouge, višňová omáčka, opečená máslová brioška",
                "price": "315 Kč",
                "notes": "Pivní želé z belgického višňového piva Kasteel Rouge."
            },
            {
                "id": "veprovy-bok-platky",
                "name": "Tenké plátky vepřového boku",
                "weight": "100g",
                "allergens": ["1", "4", "10"],
                "description": "zauzeného chmelem, křupavé vepřové krekry, pyré z pečených jablek a hořčice, smažený hrách",
                "price": "169 Kč",
                "notes": "Bok je zauzený sušeným aromatickým chmelem."
            },
            {
                "id": "kureci-krokety",
                "name": "Smažené kuřecí krokety",
                "weight": "100g",
                "allergens": ["1", "3", "7", "14"],
                "description": "s čedarem, naše salsa verde, libečková majonéza",
                "price": "175 Kč",
                "notes": "Křupavé krokety plněné kuřecím masem a rozteklým vyzrálým čedarem."
            },
            {
                "id": "olomoucke-tvaruzky",
                "name": "Sekané olomoucké tvarůžky",
                "weight": None,
                "allergens": ["1", "3", "7", "10"],
                "description": "s cibulkou, majonézou s paprikou a hořčičným semínkem na opečeném kváskovém chlebu, křen, kyselá zeleninka",
                "price": "199 Kč",
                "notes": "Tradiční moravské zrající tvarůžky podávané na křupavém chlebu."
            }
        ]
    },
    {
        "id": "chutovky",
        "name": "Chuťovka",
        "badge": "Chuťovka",
        "description": "Drobné pochutiny k pivu a vínu z naší kuchyně",
        "iconName": "Cookie",
        "items": [
            {
                "id": "lanyzovy-popcorn",
                "name": "Lanýžový popcorn",
                "weight": None,
                "allergens": ["7"],
                "description": "s parmazánem",
                "price": "139 Kč",
                "notes": "Čerstvě pražený kukuřičný popcorn ovoněný lanýžovým olejem a sypaný parmazánem."
            },
            {
                "id": "domaci-bramburky",
                "name": "Naše domácí brambůrky",
                "weight": None,
                "allergens": ["7"],
                "description": "pikantní zauzená majonéza",
                "price": "125 Kč",
                "notes": "Ručně krájené a smažené bramborové lupínky s domácí majonézou."
            }
        ]
    },
    {
        "id": "polevky",
        "name": "Polévky",
        "badge": "Polévky",
        "description": "Poctivé polévky a vývary podle tradičních receptur",
        "iconName": "Soup",
        "items": [
            {
                "id": "hovezi-consomme",
                "name": "Hovězí consommé",
                "weight": None,
                "allergens": ["9"],
                "description": "jemný játrový knedlíček, zelenina",
                "price": "109 Kč",
                "notes": "Dlouze tažený a čištěný hovězí vývar."
            },
            {
                "id": "kremova-humri",
                "name": "Krémová humří polévka",
                "weight": None,
                "allergens": ["1", "2", "3", "7", "9"],
                "description": "s klobáskou a zeleninou, zapečená listovým těstem",
                "price": "269 Kč",
                "notes": "Luxusní bisque z humřích krunýřů pod čepicí z listového těsta."
            }
        ]
    },
    {
        "id": "salaty",
        "name": "Saláty",
        "badge": "Saláty",
        "description": "Čerstvé saláty s originálními dresinky a kvalitními surovinami",
        "iconName": "Salad",
        "items": [
            {
                "id": "caesar-salat",
                "name": "Caesar salát",
                "weight": None,
                "allergens": ["1", "3", "4", "7", "10"],
                "description": "s trhaným kuřetem pečeným v peci, opečenou slaninou, parmezánem a krutony",
                "price": "289 Kč",
                "notes": "Klasický salát s kuřecím masem pečeným v naší hliněné peci."
            },
            {
                "id": "waldorf-salat",
                "name": "Waldorf salát",
                "weight": None,
                "allergens": ["8", "9", "10"],
                "description": "jablka, řapíkatý celer, hrozny, nakládané vlašské ořechy, majonézový dresing",
                "price": "245 Kč",
                "notes": "Osvěžující kombinace ovoce, ořechů a celeru."
            }
        ]
    },
    {
        "id": "sporak",
        "name": "Ze sporáku a trouby",
        "badge": "Ze sporáku a trouby",
        "description": "Tradiční i moderní teplá jídla připravovaná v naší kuchyni",
        "iconName": "Flame",
        "items": [
            {
                "id": "pecene-koleno",
                "name": "Pečené vepřové koleno",
                "weight": "1ks",
                "allergens": ["1", "10"],
                "description": "v nabídce každý den vždy do vyprodání, hořčice, strouhaný křen, zelný salát s křenem",
                "price": "459 Kč",
                "notes": "Pekařské vepřové koleno pečené dozlatova s křupavou kůrčičkou."
            },
            {
                "id": "veprovy-rizek-duroc",
                "name": "Vysoký vepřový řízek",
                "weight": "200g",
                "allergens": ["1", "3", "4", "7", "10"],
                "description": "z plemene Duroc, omáčka fines herbes, bramborová kaše a bramborové křupky",
                "price": "309 Kč",
                "notes": "Šťavnatý řízek z prémiového plemene Duroc s máslovou kaší."
            },
            {
                "id": "veprova-zebra",
                "name": "Vepřová žebra",
                "weight": "500g",
                "allergens": ["1", "3", "6", "7", "10"],
                "description": "marinovaná a pečená s naším pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, náš zelný salát s křenem, opečená česneková brioška",
                "price": "379 Kč",
                "notes": "Pomalu pečená žebra glazovaná pivem a jablečnou BBQ omáčkou."
            },
            {
                "id": "hovezi-koprovka",
                "name": "Tažené hovězí maso s koprovou omáčkou",
                "weight": "200g",
                "allergens": ["1", "3", "7"],
                "description": "vejce, rohlíčkové brambory, koprový olej",
                "price": "345 Kč",
                "notes": "Křehké tažené maso v jemné smetanové omáčce s čerstvým koprem."
            },
            {
                "id": "testoviny-kureci",
                "name": "Těstoviny plněné jemnou kuřecí směsí",
                "weight": None,
                "allergens": ["1", "3", "7"],
                "description": "zapečené v hříbkové omáčce, grilovaná hlíva ústřičná, bylinkový olej",
                "price": "299 Kč",
                "notes": "Domácí plněné těstoviny přelité lesní hříbkovou omáčkou."
            },
            {
                "id": "shrimp-roll",
                "name": "Shrimp roll",
                "weight": "12ks",
                "allergens": ["1", "2", "3", "5", "7", "9", "10"],
                "description": "12ks argentinských červených krevet v máslové briošce, koktejlová omáčka s koňakem, salátek, naše hranolky, choron omáčka",
                "price": "666 Kč",
                "notes": "Luxusní krevetový roll v nadýchané máslové briošce."
            },
            {
                "id": "vykosteny-pstruh",
                "name": "Filátka vykostěného pstruha",
                "weight": "180g",
                "allergens": ["3", "4", "7"],
                "description": "opečená na másle, choron omáčka, pečená rajčátka, bylinkový salát, pečená zimní zelenina",
                "price": "399 Kč",
                "notes": "Čerstvý pstruh z lokálního chovu bez kostí na přepuštěném másle."
            },
            {
                "id": "svickova-wellington",
                "name": "Svíčková Wellington",
                "weight": "200g",
                "allergens": ["1", "3", "7", "10"],
                "description": "pečená dorůžova se směsí duxelles ochucené lanýži, koňaková omáčka, zauzené rohlíčkové brambory",
                "price": "675 Kč",
                "notes": "Hovězí svíčková zabalená v duxelles a máslovém listovém těstě."
            },
            {
                "id": "burger-foie-gras",
                "name": "Hovězí burger",
                "weight": "200g",
                "allergens": ["1", "3", "7"],
                "description": "s uzenou nivou a kachními foie gras, majonéza z pečené cibule, bramborová sláma, malé domácí hranolky",
                "price": "449 Kč",
                "notes": "Gurmánský burger s uzeným modrým sýrem a plátkem foie gras."
            },
            {
                "id": "thors-hammer",
                "name": "Thor`s Hammer hovězí koleno",
                "weight": "700g",
                "allergens": ["1", "11"],
                "description": "tažené v naší hliněné peci, omáčka z Kasteel Rouge, pálené šalotky, opečená česneková brioška, naše salsa verde, zauzené rohlíčkové brambory, náš zelný salát s křenem. Pro 2 až 4 osoby",
                "price": "1490 Kč",
                "notes": "Monstrózní koleno na kosti tažené dlouhé hodiny v hliněné peci."
            }
        ]
    },
    {
        "id": "gril",
        "name": "Z grilu a pece na dřevo",
        "badge": "Z grilu a pece na dřevo",
        "description": "Speciality připravené na dřevěném uhlí a v hliněné peci",
        "iconName": "Flame",
        "items": [
            {
                "id": "us-prime-kvetova-spicka",
                "name": "US Prime hovězí květová špička",
                "weight": "250g",
                "allergens": [],
                "description": "opečené papričky Padrón",
                "price": "519 Kč",
                "notes": "Vyzrálý řez US Prime květové špičky (rump cap / picanha) grilovaný na dřevěném uhlí."
            },
            {
                "id": "us-prime-rostenec",
                "name": "US Prime vysoký roštěnec",
                "weight": "250g",
                "allergens": [],
                "description": "opečené papričky Padrón",
                "price": "985 Kč",
                "notes": "Špičkový mramorovaný ribeye steak z amerického chovu US Prime."
            },
            {
                "id": "us-prime-burger",
                "name": "US Prime hovězí burger",
                "weight": "200g",
                "allergens": ["1", "3", "7", "10"],
                "description": "opečená slanina, čedar, cibulová marmeláda a pikantní majonéza",
                "price": "369 Kč",
                "notes": "Mleté vyzrálé maso z amerického býka US Prime na dřevěném uhlí."
            },
            {
                "id": "grilovany-bucek-yuzu",
                "name": "Grilovaný vepřový bůček",
                "weight": "300g",
                "allergens": ["2", "4", "6"],
                "description": "karamelizovaná yuzu omáčka, grilovaná jarní cibulka, chimmichurri omáčka",
                "price": "299 Kč",
                "notes": "Křupavý bůček s citrusovým asijským yuzu a svěží bylinkovou omáčkou."
            },
            {
                "id": "nase-pastrami",
                "name": "Naše pastrami",
                "weight": "200g",
                "allergens": ["1", "3", "7", "10"],
                "description": "z US Prime hovězího žebra pečeného v hliněné peci, sýr raclette a zelný salát s křenem v opečeném kváskovém chlebu, nakládaná zelenina",
                "price": "455 Kč",
                "notes": "Vlastní naložené a zauzené hovězí žebro pečené v hliněné peci."
            },
            {
                "id": "pecene-kure-pec",
                "name": "½ Kuře pečené v naší hliněné peci",
                "weight": None,
                "allergens": ["1", "4", "7", "10"],
                "description": "jako BBQ potřené pikantní jablečnou omáčkou, křupavá cibulka a bylinkové máslo (alergeny 1, 7); jako TRUFFLE přelité lanýžovým máslem, bramborové křupky, pažitka (alergen 7); jako CAESAR potřené omáčkou z ančoviček, parmezánu a hořčice, smažené kapary (alergeny 4, 7, 10)",
                "price": "279 Kč",
                "notes": "Šťavnatá půlka kuřete pečená v autentické hliněné peci, na výběr ze tří stylů úpravy."
            }
        ]
    },
    {
        "id": "teple-omacky",
        "name": "Teplé omáčky",
        "badge": "Teplé omáčky",
        "description": "Domácí teplé omáčky připravované redukcí z poctivých vývarů a surovin",
        "iconName": "Soup",
        "items": [
            {
                "id": "omacka-konakova",
                "name": "Koňaková",
                "weight": None,
                "allergens": ["7", "9", "10"],
                "description": "teplá koňaková omáčka",
                "price": "69 Kč",
                "notes": "Jemná redukce z telecího fondu se smetanou a francouzským koňakem."
            },
            {
                "id": "omacka-choron",
                "name": "Choron",
                "weight": None,
                "allergens": ["3", "10"],
                "description": "teplá omáčka choron",
                "price": "69 Kč",
                "notes": "Klasická teplá emulgovaná bearnská omáčka zjemněná rajčatovým protlakem."
            },
            {
                "id": "omacka-fines-herbes",
                "name": "Naše fines herbes",
                "weight": None,
                "allergens": ["4", "9", "10"],
                "description": "teplá bylinková omáčka fines herbes",
                "price": "69 Kč",
                "notes": "Máslová omáčka s čerstvými bylinkami, petrželkou, pažitkou a kapkou ančoviček."
            },
            {
                "id": "omacka-lanyzova",
                "name": "Lanýžová",
                "weight": None,
                "allergens": ["7", "10"],
                "description": "teplá krémová lanýžová omáčka",
                "price": "79 Kč",
                "notes": "Hustá smetanová omáčka s černými lanýži."
            }
        ]
    },
    {
        "id": "studene-omacky",
        "name": "Studené omáčky",
        "badge": "Studené omáčky",
        "description": "Čerstvé studené dipy a omáčky z bylinek a domácích surovin",
        "iconName": "Droplet",
        "items": [
            {
                "id": "omacka-pikantni-majo",
                "name": "Pikantní zauzená majonéza",
                "weight": None,
                "allergens": ["3", "7"],
                "description": "pikantní zauzená majonéza",
                "price": "59 Kč",
                "notes": "Domácí majonéza s uzenou paprikou a kapkou chilli."
            },
            {
                "id": "omacka-salsa-verde",
                "name": "Naše salsa verde",
                "weight": None,
                "allergens": [],
                "description": "naše čerstvá bylinková salsa verde",
                "price": "59 Kč",
                "notes": "Svěží zelená omáčka z čerstvých bylinek, olivového oleje a citronu."
            },
            {
                "id": "omacka-chimichurri",
                "name": "Chimmichurri omáčka",
                "weight": None,
                "allergens": [],
                "description": "čerstvá bylinková chimmichurri omáčka",
                "price": "65 Kč",
                "notes": "Jihoamerická bylinková omáčka z petrželky, oregana, česneku a chilli."
            },
            {
                "id": "omacka-kecup",
                "name": "Kečup",
                "weight": None,
                "allergens": [],
                "description": "tradiční rajčatový kečup",
                "price": "40 Kč",
                "notes": "Domácí jemně kořeněný kečup z vyzrálých rajčat."
            }
        ]
    },
    {
        "id": "prilohy",
        "name": "Přílohy",
        "badge": "Přílohy",
        "description": "Kvalitní přílohy připravované s láskou k detailu",
        "iconName": "Utensils",
        "items": [
            {
                "id": "nase-hranolky",
                "name": "Naše hranolky",
                "weight": None,
                "allergens": [],
                "description": "čerstvé smažené hranolky",
                "price": "89 Kč",
                "notes": "Dvakrát smažené čerstvé bramborové hranolky."
            },
            {
                "id": "hranolky-red-leicester",
                "name": "Hranolky",
                "weight": None,
                "allergens": ["3", "7"],
                "description": "s lanýžovou majonézou a sýrem Red Leicester",
                "price": "149 Kč",
                "notes": "Naše hranolky přelité lanýžovou majonézou a sypané červeným čedarem Red Leicester."
            },
            {
                "id": "bramborova-kase",
                "name": "Bramborová kaše",
                "weight": None,
                "allergens": ["7"],
                "description": "máslo, bramborová sláma",
                "price": "89 Kč",
                "notes": "Hladká máslová bramborová kaše posypaná křupavou bramborovou slámou."
            },
            {
                "id": "zauzene-rohlicek-brambory",
                "name": "Zauzené rohlíčkové brambory",
                "weight": None,
                "allergens": ["7"],
                "description": "máslo",
                "price": "99 Kč",
                "notes": "Zauzené lojovité rohlíčkové brambory maštěné přepuštěným máslem."
            },
            {
                "id": "salat-trhane-listy",
                "name": "Salát z trhaných salátových listů",
                "weight": None,
                "allergens": ["10"],
                "description": "a zeleného rajčete, pivní vinaigrette",
                "price": "129 Kč",
                "notes": "Čerstvé křupavé listy se zeleným rajčetem a zálivkou z piva a hořčice."
            },
            {
                "id": "pecena-zimni-zelenina",
                "name": "Pečená zimní zelenina",
                "weight": None,
                "allergens": ["9"],
                "description": "s kardamomem a javorovým sirupem",
                "price": "129 Kč",
                "notes": "Kořenová zimní zelenina glazuovaná javorovým sirupem a kardamomem."
            },
            {
                "id": "zelny-salat-kren",
                "name": "Náš zelný salát s křenem",
                "weight": None,
                "allergens": ["3", "7", "11"],
                "description": "rozinkami, vinným octem a majonézou",
                "price": "99 Kč",
                "notes": "Křupavý zelný salát s řízným strouhaným křenem, rozinkami a dresinkem."
            },
            {
                "id": "cesnekova-brioska",
                "name": "Opečená česneková brioška",
                "weight": None,
                "allergens": ["1", "3", "7"],
                "description": "opečená česneková brioška",
                "price": "79 Kč",
                "notes": "Máslová brioška potřená česnekovým máslem a zapečená dorůžova."
            },
            {
                "id": "kvaskovy-chleb",
                "name": "Kváskový chléb",
                "weight": None,
                "allergens": ["1", "3", "7"],
                "description": "čerstvý kváskový chléb",
                "price": "45 Kč",
                "notes": "Krajíce poctivého řemeslného kváskového chleba s kmínem."
            }
        ]
    },
    {
        "id": "dezerty",
        "name": "Dezerty",
        "badge": "Dezerty",
        "description": "Sladká tečka na závěr z naší cukrářské dílny",
        "iconName": "Cake",
        "items": [
            {
                "id": "dortik-ganache-sisky",
                "name": "Dortíky s ganache",
                "weight": None,
                "allergens": ["1", "3", "7", "8"],
                "description": "ve tvaru chmelových šišek z čokolády Valrhona Dulcey, čokoládová hlína a višňová omáčka",
                "price": "209 Kč",
                "notes": "Originální dezert ve tvaru chmelové šišky z karamelové blond čokolády Valrhona Dulcey."
            },
            {
                "id": "karamelovy-trhanec",
                "name": "Karamelový trhanec",
                "weight": None,
                "allergens": ["1", "3", "7"],
                "description": "s pečenými švestkami, zmrzlina z vaječného likéru",
                "price": "169 Kč",
                "notes": "Nadýchaný rakouský trhanec se zkaramelizovaným cukrem a švestkami."
            },
            {
                "id": "pivni-zmrzlina",
                "name": "Naše pivní zmrzlina",
                "weight": None,
                "allergens": ["1", "3", "7"],
                "description": "se sladovou žmolenkou, šlehačka",
                "price": "139 Kč",
                "notes": "Domácí smetanová zmrzlina s infuzí tmavého piva a křupavým ječným sladem."
            }
        ]
    },
    {
        "id": "pro-deti",
        "name": "Pro děti",
        "badge": "Pro děti",
        "description": "Oblíbená dětská jídla z kvalitních surovin a v menších porcích",
        "iconName": "Smile",
        "items": [
            {
                "id": "kureci-rizek",
                "name": "Kuřecí řízek",
                "weight": "100g",
                "allergens": ["1", "3", "7"],
                "description": "bramborová kaše",
                "price": "125 Kč",
                "notes": "Jemný smažený kuřecí řízek s máslovou bramborovou kaší."
            },
            {
                "id": "cheeseburger-deti",
                "name": "Cheeseburger",
                "weight": "100g",
                "allergens": ["1", "3", "7", "10"],
                "description": "s čedarem, salátem, rajčaty a kečupem, domácí hranolky",
                "price": "129 Kč",
                "notes": "Dětský hovězí burger s čedarem, kečupem a křupavými hranolky."
            },
            {
                "id": "krupicova-kase",
                "name": "Krupicová kaše",
                "weight": None,
                "allergens": ["1", "7"],
                "description": "z espumy s kakaem a máslem",
                "price": "119 Kč",
                "notes": "Nadýchaná jemná krupicová pěna z espumy s poctivým kakaem a máslem."
            }
        ]
    }
]

ENGLISH_FOOD_CATEGORIES = [
    {
        "id": "predkrmy",
        "name": "Appetizers and small dishes",
        "badge": "Appetizers and small dishes",
        "description": "Author appetizers highlighting aged ingredients, local craft, and beer pairing",
        "iconName": "Utensils",
        "items": [
            {
                "id": "tatarak",
                "name": "Sliced beef tartare",
                "weight": "90g",
                "allergens": ["1", "3", "7"],
                "description": "from tip of the sirloin, cornichons, marinated shallots, chives, toasted sourdough on beef lard and confit garlic, potato straw",
                "price": "239 CZK",
                "notes": "Hand-sliced prime beef tartare served with crispy potato straw and sourdough bread toasted on beef tallow."
            },
            {
                "id": "klobasa-smrze",
                "name": "Our veal sausage with morels",
                "weight": "100g",
                "allergens": ["1", "3", "7", "8", "10"],
                "description": "chestnuts and dried plums, truffle sauce, beer biscuit",
                "price": "219 CZK",
                "notes": "House-made artisanal veal sausage with morels, chestnuts, and truffle sauce."
            },
            {
                "id": "foie-gras",
                "name": "Foie gras pâté",
                "weight": "100g",
                "allergens": ["1", "3", "7"],
                "description": "in Kasteel Rouge beer jelly, cherry sauce, toasted butter brioche",
                "price": "315 CZK",
                "notes": "Rich duck foie gras pâté glazed with Belgian cherry beer jelly."
            },
            {
                "id": "veprovy-bok-platky",
                "name": "Thin slices of pork belly",
                "weight": "100g",
                "allergens": ["1", "4", "10"],
                "description": "hop-smoked, crispy pork cracklings, purée of roasted apples and mustard, fried peas",
                "price": "169 CZK",
                "notes": "Delicate slices of hop-smoked pork belly with roasted apple and mustard purée."
            },
            {
                "id": "kureci-krokety",
                "name": "Fried chicken croquettes",
                "weight": "100g",
                "allergens": ["1", "3", "7", "14"],
                "description": "with cheddar, our salsa verde, lovage mayonnaise",
                "price": "175 CZK",
                "notes": "Crispy chicken croquettes with melting cheddar and fresh herb salsa verde."
            },
            {
                "id": "olomoucke-tvaruzky",
                "name": "Chopped Olomouc curd cheese",
                "weight": None,
                "allergens": ["1", "3", "7", "10"],
                "description": "with onion, paprika mayonnaise and mustard seeds on toasted sourdough bread, horseradish, pickled vegetables",
                "price": "199 CZK",
                "notes": "Pungent traditional ripened Moravian curd cheese served on toasted sourdough."
            }
        ]
    },
    {
        "id": "chutovky",
        "name": "Bar snacks",
        "badge": "Bar snacks",
        "description": "Savory small bites to accompany beer and wine from our kitchen",
        "iconName": "Cookie",
        "items": [
            {
                "id": "lanyzovy-popcorn",
                "name": "Truffle popcorn",
                "weight": None,
                "allergens": ["7"],
                "description": "with parmesan",
                "price": "139 CZK",
                "notes": "Freshly popped corn tossed with fragrant truffle oil and finely grated parmesan."
            },
            {
                "id": "domaci-bramburky",
                "name": "Our homemade potato crisps",
                "weight": None,
                "allergens": ["7"],
                "description": "spicy smoked mayonnaise",
                "price": "125 CZK",
                "notes": "Hand-cut crispy potato chips served with our signature smoked mayonnaise."
            }
        ]
    },
    {
        "id": "polevky",
        "name": "Soups",
        "badge": "Soups",
        "description": "Rich traditional broths and hearty soups made from scratch",
        "iconName": "Soup",
        "items": [
            {
                "id": "hovezi-consomme",
                "name": "Beef consommé",
                "weight": None,
                "allergens": ["9"],
                "description": "delicate liver dumpling, vegetables",
                "price": "109 CZK",
                "notes": "Crystal-clear slow-simmered beef broth with homemade liver dumpling."
            },
            {
                "id": "kremova-humri",
                "name": "Creamy lobster soup",
                "weight": None,
                "allergens": ["1", "2", "3", "7", "9"],
                "description": "with sausage and vegetables, baked in puff pastry crust",
                "price": "269 CZK",
                "notes": "Velvety lobster bisque sealed with golden flaky puff pastry."
            }
        ]
    },
    {
        "id": "salaty",
        "name": "Salads",
        "badge": "Salads",
        "description": "Crisp vibrant salads paired with homemade dressings and fresh herbs",
        "iconName": "Salad",
        "items": [
            {
                "id": "caesar-salat",
                "name": "Caesar salad",
                "weight": None,
                "allergens": ["1", "3", "4", "7", "10"],
                "description": "with oven-pulled chicken, crispy bacon, parmesan and croutons",
                "price": "289 CZK",
                "notes": "Romaine lettuce with tandoori pulled chicken, parmesan shavings, and house dressing."
            },
            {
                "id": "waldorf-salat",
                "name": "Waldorf salad",
                "weight": None,
                "allergens": ["8", "9", "10"],
                "description": "apples, celery stalks, grapes, pickled walnuts, mayonnaise dressing",
                "price": "245 CZK",
                "notes": "Crisp apples, celery, sweet grapes, and pickled walnuts with creamy dressing."
            }
        ]
    },
    {
        "id": "sporak",
        "name": "From the stove & oven",
        "badge": "From the stove & oven",
        "description": "Traditional and contemporary hearty warm dishes crafted in our kitchen",
        "iconName": "Flame",
        "items": [
            {
                "id": "pecene-koleno",
                "name": "Roasted pork knuckle",
                "weight": "1ks",
                "allergens": ["1", "10"],
                "description": "available daily until sold out, mustard, freshly grated horseradish, cabbage salad with horseradish",
                "price": "459 CZK",
                "notes": "Crispy roasted pork knuckle served with freshly grated horseradish and mustard."
            },
            {
                "id": "veprovy-rizek-duroc",
                "name": "Duroc pork schnitzel",
                "weight": "200g",
                "allergens": ["1", "3", "4", "7", "10"],
                "description": "from Duroc breed, fines herbes sauce, mashed potatoes and potato crisps",
                "price": "309 CZK",
                "notes": "Thick cutlet of premium Duroc pork served with buttery mashed potatoes."
            },
            {
                "id": "veprova-zebra",
                "name": "Pork ribs",
                "weight": "500g",
                "allergens": ["1", "3", "6", "7", "10"],
                "description": "marinated and roasted with our beer, candied bacon, pearl onions, apple bbq sauce, our cabbage salad with horseradish, toasted garlic brioche",
                "price": "379 CZK",
                "notes": "Tender beer-glazed pork ribs with homemade apple barbecue sauce and garlic brioche."
            },
            {
                "id": "hovezi-koprovka",
                "name": "Braised beef with dill sauce",
                "weight": "200g",
                "allergens": ["1", "3", "7"],
                "description": "egg, fingerling potatoes, dill oil",
                "price": "345 CZK",
                "notes": "Classic Czech creamy dill sauce with tender braised beef and buttered potatoes."
            },
            {
                "id": "testoviny-kureci",
                "name": "Pasta filled with tender chicken mixture",
                "weight": None,
                "allergens": ["1", "3", "7"],
                "description": "baked in mushroom sauce, grilled oyster mushrooms, herb oil",
                "price": "299 CZK",
                "notes": "House-made stuffed pasta baked in wild mushroom cream sauce."
            },
            {
                "id": "shrimp-roll",
                "name": "Shrimp roll",
                "weight": "12ks",
                "allergens": ["1", "2", "3", "5", "7", "9", "10"],
                "description": "12 pcs Argentine red shrimp in butter brioche, cocktail sauce with cognac, salad, our fries, choron sauce",
                "price": "666 CZK",
                "notes": "Juicy Argentine red prawns in warm buttered brioche with cognac cocktail sauce."
            },
            {
                "id": "vykosteny-pstruh",
                "name": "Deboned trout fillets",
                "weight": "180g",
                "allergens": ["3", "4", "7"],
                "description": "pan-fried on butter, choron sauce, roasted cherry tomatoes, herb salad, roasted winter vegetables",
                "price": "399 CZK",
                "notes": "Fresh boneless trout pan-seared with butter, roasted vegetables, and sauce choron."
            },
            {
                "id": "svickova-wellington",
                "name": "Beef Wellington",
                "weight": "200g",
                "allergens": ["1", "3", "7", "10"],
                "description": "roasted medium rare with truffle-flavored mushroom duxelles, cognac sauce, smoked fingerling potatoes",
                "price": "675 CZK",
                "notes": "Prime beef tenderloin wrapped in truffle duxelles and flaky pastry."
            },
            {
                "id": "burger-foie-gras",
                "name": "Beef burger with foie gras",
                "weight": "200g",
                "allergens": ["1", "3", "7"],
                "description": "with smoked blue cheese and duck foie gras, roasted onion mayonnaise, potato straw, small homemade fries",
                "price": "449 CZK",
                "notes": "Gourmet beef burger topped with smoked niva cheese, duck foie gras, and potato straw."
            },
            {
                "id": "thors-hammer",
                "name": "Thor`s Hammer beef shank",
                "weight": "700g",
                "allergens": ["1", "11"],
                "description": "slow-cooked in our clay oven, Kasteel Rouge beer sauce, charred shallots, toasted garlic brioche, our salsa verde, smoked fingerling potatoes, our cabbage salad with horseradish. For 2 to 4 guests",
                "price": "1490 CZK",
                "notes": "Massive bone-in beef shank braised in our clay oven with Belgian cherry beer sauce."
            }
        ]
    },
    {
        "id": "gril",
        "name": "From the grill and wood-fired oven",
        "badge": "From the grill and wood-fired oven",
        "description": "Charcoal and clay oven specialties grilled over open fire and embers",
        "iconName": "Flame",
        "items": [
            {
                "id": "us-prime-kvetova-spicka",
                "name": "US Prime beef sirloin tip",
                "weight": "250g",
                "allergens": [],
                "description": "roasted Padrón peppers",
                "price": "519 CZK",
                "notes": "Aged US Prime sirloin cap (picanha) grilled over charcoal with blistered Padrón peppers."
            },
            {
                "id": "us-prime-rostenec",
                "name": "US Prime ribeye steak",
                "weight": "250g",
                "allergens": [],
                "description": "roasted Padrón peppers",
                "price": "985 CZK",
                "notes": "Exquisitely marbled US Prime ribeye steak char-grilled over real wood."
            },
            {
                "id": "us-prime-burger",
                "name": "US Prime beef burger",
                "weight": "200g",
                "allergens": ["1", "3", "7", "10"],
                "description": "crispy bacon, cheddar, onion marmalade and spicy mayonnaise",
                "price": "369 CZK",
                "notes": "Charcoal-grilled US Prime beef patty with melted cheddar and bacon."
            },
            {
                "id": "grilovany-bucek-yuzu",
                "name": "Grilled pork belly",
                "weight": "300g",
                "allergens": ["2", "4", "6"],
                "description": "caramelized yuzu sauce, grilled spring onions, chimmichurri sauce",
                "price": "299 CZK",
                "notes": "Crispy grilled pork belly glazed with citrusy yuzu and fresh chimichurri."
            },
            {
                "id": "nase-pastrami",
                "name": "Our pastrami",
                "weight": "200g",
                "allergens": ["1", "3", "7", "10"],
                "description": "from US Prime beef rib roasted in clay oven, raclette cheese and cabbage salad with horseradish in toasted sourdough bread, pickled vegetables",
                "price": "455 CZK",
                "notes": "In-house smoked and roasted US Prime beef short rib pastrami on sourdough."
            },
            {
                "id": "pecene-kure-pec",
                "name": "½ Roasted chicken in our clay oven",
                "weight": None,
                "allergens": ["1", "4", "7", "10"],
                "description": "as BBQ glazed with spicy apple sauce, crispy onions and herb butter (allergens 1, 7); as TRUFFLE drizzled with truffle butter, potato crisps, chives (allergen 7); as CAESAR coated with anchovy, parmesan and mustard sauce, fried capers (allergens 4, 7, 10)",
                "price": "279 CZK",
                "notes": "Succulent half chicken roasted in our clay oven, choice of BBQ, Truffle, or Caesar seasoning."
            }
        ]
    },
    {
        "id": "teple-omacky",
        "name": "Warm sauces",
        "badge": "Warm sauces",
        "description": "Homemade warm sauces reduced from authentic broths, butter, and seasonings",
        "iconName": "Soup",
        "items": [
            {
                "id": "omacka-konakova",
                "name": "Cognac sauce",
                "weight": None,
                "allergens": ["7", "9", "10"],
                "description": "warm cognac sauce",
                "price": "69 CZK",
                "notes": "Warm veal jus reduction with cream and French cognac."
            },
            {
                "id": "omacka-choron",
                "name": "Choron",
                "weight": None,
                "allergens": ["3", "10"],
                "description": "warm choron sauce",
                "price": "69 CZK",
                "notes": "Warm tarragon-infused béarnaise sauce enriched with tomato concassé."
            },
            {
                "id": "omacka-fines-herbes",
                "name": "Our fines herbes",
                "weight": None,
                "allergens": ["4", "9", "10"],
                "description": "warm fines herbes sauce",
                "price": "69 CZK",
                "notes": "Warm butter emulsion sauce infused with fresh herbs and a touch of anchovy."
            },
            {
                "id": "omacka-lanyzova",
                "name": "Truffle sauce",
                "weight": None,
                "allergens": ["7", "10"],
                "description": "warm creamy truffle sauce",
                "price": "79 CZK",
                "notes": "Rich creamy reduction infused with black truffles."
            }
        ]
    },
    {
        "id": "studene-omacky",
        "name": "Cold sauces",
        "badge": "Cold sauces",
        "description": "Fresh dips and cold dressings prepared from fresh herbs and spices",
        "iconName": "Droplet",
        "items": [
            {
                "id": "omacka-pikantni-majo",
                "name": "Spicy smoked mayonnaise",
                "weight": None,
                "allergens": ["3", "7"],
                "description": "spicy smoked mayonnaise",
                "price": "59 CZK",
                "notes": "Homemade mayonnaise with smoked paprika and mild chili."
            },
            {
                "id": "omacka-salsa-verde",
                "name": "Our salsa verde",
                "weight": None,
                "allergens": [],
                "description": "our fresh herb salsa verde",
                "price": "59 CZK",
                "notes": "Vibrant sauce made with parsley, capers, garlic, and extra virgin olive oil."
            },
            {
                "id": "omacka-chimichurri",
                "name": "Chimmichurri sauce",
                "weight": None,
                "allergens": [],
                "description": "fresh herb chimmichurri sauce",
                "price": "65 CZK",
                "notes": "Argentine herb sauce of fresh parsley, oregano, garlic, chili, and olive oil."
            },
            {
                "id": "omacka-kecup",
                "name": "Ketchup",
                "weight": None,
                "allergens": [],
                "description": "traditional tomato ketchup",
                "price": "40 CZK",
                "notes": "Slow-cooked artisan ketchup made from sun-ripened tomatoes."
            }
        ]
    },
    {
        "id": "prilohy",
        "name": "Side dishes",
        "badge": "Side dishes",
        "description": "Premium freshly prepared sides to accompany your feast",
        "iconName": "Utensils",
        "items": [
            {
                "id": "nase-hranolky",
                "name": "Our fries",
                "weight": None,
                "allergens": [],
                "description": "fresh homemade fries",
                "price": "89 CZK",
                "notes": "Hand-cut potatoes twice-fried in beef tallow for ultimate crunch."
            },
            {
                "id": "hranolky-red-leicester",
                "name": "Fries",
                "weight": None,
                "allergens": ["3", "7"],
                "description": "with truffle mayonnaise and Red Leicester cheese",
                "price": "149 CZK",
                "notes": "Our signature fries topped with truffle mayo and shredded Red Leicester."
            },
            {
                "id": "bramborova-kase",
                "name": "Mashed potatoes",
                "weight": None,
                "allergens": ["7"],
                "description": "butter, potato straw",
                "price": "89 CZK",
                "notes": "Creamy buttered mashed potatoes finished with crispy potato straw."
            },
            {
                "id": "zauzene-rohlicek-brambory",
                "name": "Smoked fingerling potatoes",
                "weight": None,
                "allergens": ["7"],
                "description": "butter",
                "price": "99 CZK",
                "notes": "Beechwood-smoked fingerling potatoes tossed in clarified butter."
            },
            {
                "id": "salat-trhane-listy",
                "name": "Torn leaf salad",
                "weight": None,
                "allergens": ["10"],
                "description": "and green tomato, beer vinaigrette",
                "price": "129 CZK",
                "notes": "Crispy garden lettuce leaves with pickled green tomato and beer dressing."
            },
            {
                "id": "pecena-zimni-zelenina",
                "name": "Roasted winter vegetables",
                "weight": None,
                "allergens": ["9"],
                "description": "with cardamom and maple syrup",
                "price": "129 CZK",
                "notes": "Oven-roasted root vegetables glazed with pure maple syrup and cardamom."
            },
            {
                "id": "zelny-salat-kren",
                "name": "Our cabbage salad with horseradish",
                "weight": None,
                "allergens": ["3", "7", "11"],
                "description": "raisins, wine vinegar and mayonnaise",
                "price": "99 CZK",
                "notes": "Crunchy shredded cabbage salad with freshly grated horseradish and sweet raisins."
            },
            {
                "id": "cesnekova-brioska",
                "name": "Toasted garlic brioche",
                "weight": None,
                "allergens": ["1", "3", "7"],
                "description": "toasted garlic brioche",
                "price": "79 CZK",
                "notes": "Fluffy butter brioche spread with garlic butter and toasted."
            },
            {
                "id": "kvaskovy-chleb",
                "name": "Sourdough bread",
                "weight": None,
                "allergens": ["1", "3", "7"],
                "description": "fresh artisanal sourdough bread",
                "price": "45 CZK",
                "notes": "Thick slices of crusty artisanal sourdough rye-wheat bread."
            }
        ]
    },
    {
        "id": "dezerty",
        "name": "Desserts",
        "badge": "Desserts",
        "description": "Sweet indulgences made by our pastry chefs to complete your meal",
        "iconName": "Cake",
        "items": [
            {
                "id": "dortik-ganache-sisky",
                "name": "Ganache cakes",
                "weight": None,
                "allergens": ["1", "3", "7", "8"],
                "description": "in the shape of hop cones from Valrhona Dulcey chocolate, chocolate soil and sour cherry sauce",
                "price": "209 CZK",
                "notes": "Artisanal hop-cone shaped pastry with caramelized blond Valrhona Dulcey chocolate."
            },
            {
                "id": "karamelovy-trhanec",
                "name": "Caramel Kaiserschmarrn",
                "weight": None,
                "allergens": ["1", "3", "7"],
                "description": "with roasted plums, eggnog ice cream",
                "price": "169 CZK",
                "notes": "Fluffy caramelized shredded pancake served with spiced plums and egg liqueur ice cream."
            },
            {
                "id": "pivni-zmrzlina",
                "name": "Our beer ice cream",
                "weight": None,
                "allergens": ["1", "3", "7"],
                "description": "with malt crumble, whipped cream",
                "price": "139 CZK",
                "notes": "Unique house-made ice cream made with dark lager and malted barley crumble."
            }
        ]
    },
    {
        "id": "pro-deti",
        "name": "Kids menu",
        "badge": "Kids menu",
        "description": "Kid-approved meals made with premium ingredients in smaller portions",
        "iconName": "Smile",
        "items": [
            {
                "id": "kureci-rizek",
                "name": "Chicken schnitzel",
                "weight": "100g",
                "allergens": ["1", "3", "7"],
                "description": "mashed potatoes",
                "price": "125 CZK",
                "notes": "Tender golden fried chicken cutlet with creamy mashed potatoes."
            },
            {
                "id": "cheeseburger-deti",
                "name": "Cheeseburger",
                "weight": "100g",
                "allergens": ["1", "3", "7", "10"],
                "description": "with cheddar, lettuce, tomatoes and ketchup, homemade fries",
                "price": "129 CZK",
                "notes": "Kid-friendly beef burger with cheddar, fresh vegetables, ketchup, and crispy fries."
            },
            {
                "id": "krupicova-kase",
                "name": "Semolina pudding",
                "weight": None,
                "allergens": ["1", "7"],
                "description": "from foam espuma with cocoa and butter",
                "price": "119 CZK",
                "notes": "Warm light semolina porridge served from an espuma siphon with butter and cocoa."
            }
        ]
    }
]

# Clean up items to not have weight: null (must be undefined / omitted)
for cat in CZECH_FOOD_CATEGORIES:
    for it in cat['items']:
        if it.get('weight') is None:
            it.pop('weight', None)

for cat in ENGLISH_FOOD_CATEGORIES:
    for it in cat['items']:
        if it.get('weight') is None:
            it.pop('weight', None)

# Generate questions for each item
print("Generating questions for food items...")
for cat_idx in range(len(CZECH_FOOD_CATEGORIES)):
    cz_cat = CZECH_FOOD_CATEGORIES[cat_idx]
    en_cat = ENGLISH_FOOD_CATEGORIES[cat_idx]
    for it_idx in range(len(cz_cat['items'])):
        cz_item = cz_cat['items'][it_idx]
        en_item = en_cat['items'][it_idx]
        build_questions_for_item(cz_item, en_item)
        if cz_item.get('weight') is None:
            cz_item.pop('weight', None)
        if en_item.get('weight') is None:
            en_item.pop('weight', None)

# Load existing files
with open('src/data/menuData.ts', 'r', encoding='utf-8') as f:
    text_cz = f.read()

start_cz = text_cz.find('export const MENU_CATEGORIES: MenuCategory[] = [') + len('export const MENU_CATEGORIES: MenuCategory[] = ')
end_cz = text_cz.rfind('];') + 1
cats_cz = json.loads(text_cz[start_cz:end_cz])

with open('src/data/menuDataEn.ts', 'r', encoding='utf-8') as f:
    text_en = f.read()

start_en = text_en.find('export const MENU_CATEGORIES_EN: MenuCategory[] = [') + len('export const MENU_CATEGORIES_EN: MenuCategory[] = ')
end_en = text_en.rfind('];') + 1
cats_en = json.loads(text_en[start_en:end_en])

# Replace first 11 categories (food categories)
cats_cz[:11] = CZECH_FOOD_CATEGORIES
cats_en[:11] = ENGLISH_FOOD_CATEGORIES

# Serialize back to files
header_cz = text_cz[:start_cz]
footer_cz = text_cz[end_cz:]

header_en = text_en[:start_en]
footer_en = text_en[end_en:]

with open('src/data/menuData.ts', 'w', encoding='utf-8') as f:
    f.write(header_cz + json.dumps(cats_cz, ensure_ascii=False, indent=2) + footer_cz)

with open('src/data/menuDataEn.ts', 'w', encoding='utf-8') as f:
    f.write(header_en + json.dumps(cats_en, ensure_ascii=False, indent=2) + footer_en)

print("Successfully replaced all 11 food categories in both menuData.ts and menuDataEn.ts!")
