export interface StoryIngredientMention {
  id: string; // matches CulinaryTerm id
  name: string;
  nameEn: string;
  roleInScene: string;
  roleInSceneEn: string;
}

export interface StoryChapter {
  id: number;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  readTime: string;
  readTimeEn: string;
  iconName: string;
  summary: string;
  summaryEn: string;
  paragraphs: string[];
  paragraphsEn: string[];
  ingredients: StoryIngredientMention[];
}

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 1,
    title: "1. Dědictví, prach a spálený hrnec",
    titleEn: "1. The Inheritance, Dust and a Burnt Pot",
    subtitle: "Jak Nikolas koupil ruinu a potkal dívku s montérkami",
    subtitleEn: "How Nikolas bought a ruin and met a girl in dungarees",
    readTime: "4 min čtení",
    readTimeEn: "4 min read",
    iconName: "Flame",
    summary: "Nikolas zvaný Alex investuje dědictví po milovaných rodičích do polorozpadlé venkovské hospody. Při prvním pokusu o velkou gastronomii málem vyhoří, nebýt rázné sousedky Vendy.",
    summaryEn: "Nikolas, nicknamed Alex, invests his inheritance from his beloved parents into a dilapidated tavern. During his first culinary experiment, he nearly burns the place down, saved only by bold neighbor Vendy.",
    paragraphs: [
      "Když Nikolas (kterému staří kamarádi z kuchařské školy neřekli jinak než Alex) podepsal kupní smlouvu na starý zájezdní hostinec „U Zlomené pípy“ v ospalém městečku Dubový Újezd, notář si významně odkašlal a podal mu kapesník. Všichni v okolí si klepali na čelo. Nikolas však v očích neměl šílenství, ale tichou, nezdolnou vzpomínku. Když před rokem tragicky ztratil oba rodiče – mámu cukrářku a tátu řezníka –, slíbil si, že jejich rodinnou lásku k poctivému řemeslu promění v něco nezapomenutelného. Z dědictví nekoupil sportovní auto ani byt v metropoli. Koupil ruinu s propadlou podlahou, stoletou hliněnou pecí a hejnem netopýrů ve spíži.",
      "První týden připomínal boj o přežití. Alex spal na rozkládacím lehátku mezi pytli omítky a v provizorně vyčištěné kuchyni začal stavět základní kameny své budoucí svatyně. Věřil staré kuchařské pravdě: restaurace stojí a padá na základech. A tak postavil na tál obří padesátilitrový hrnec. Dva dny pomalu táhl křišťálově čisté zlatavé [Hovězí consommé] z morkových kostí a zeleniny, jehož vůně začala zvolna vyhánět zápach zatuchliny z celé ulice. Hned vedle v litinovém kotli zvolna redukoval hustý, temně lesklý [Demi-glace], který probublával jako láva a voněl po pečeném telecím a koření.",
      "Katastrofa však na sebe nenechala dlouho čekat. Unavený Alex v noci usnul s hlavou na nerezovém stole, zatímco v troubě zapomněl pekáč, kde se měl při nízké teplotě pomalu louhovat [Konfitovaný česnek] v přepuštěném másle s tymiánem. Kolem třetí ráno kuchyni zahalil hustý kouř a rozezněl se starý požární hlásič s pronikavostí lodní sirény.",
      "Dveře do kuchyně se rozletěly ránou nohy. Dovnitř vtrhla štíhlá dívka v pracovních lacláčích, s hasicím přístrojem v ruce a obličejem umazaným od malířské barvy. Než se Alex stihl zvednout, dostal spršku sněhového prášku přímo do klína a dívka rázně strhla hořící utěrku vedle trouby do dřezu. „Ty jsi ten nový blázen z Prahy, co tu chce vařit šneky?“ vyhrkla a utřela si zpocené čelo paží, na které měla vytetovanou větvičku rozmarýnu. „Já jsem Vendy. Bydlím naproti a zachraňuju lidi před udušením. A mimochodem, ten česnek jsi nespálil úplně, jenom je z něj karamelový uhel.“",
      "Alex na ni zíral s bílým popraškem na nose. Vendy se na vteřinu zarazila, podívala se na jeho vykulený výraz a vyprskla v tak nakažlivý, zvonivý smích, až se v kamnech pohnul popel. V tu chvíli Alex poprvé za dvanáct měsíců zapomněl na smutek ze ztráty rodičů. V kuchyni bylo plno dýmu, ale v jeho srdci se poprvé rozsvítilo."
    ],
    paragraphsEn: [
      "When Nikolas (whom his old culinary school friends called Alex) signed the purchase deed for the dilapidated tavern in sleepy Dubový Újezd, the notary cleared his throat and handed him a tissue. Everyone thought he was mad. But Nikolas had a quiet, stubborn dream. After tragically losing both his parents—his mother a pastry chef and his father an artisan butcher—he vowed to turn his inheritance into a living monument of true hospitality. He bought a crumbling building with a century-old clay oven.",
      "The first week was pure survival. Alex slept on a cot amidst plaster bags and set to work establishing the foundational pillars of French gastronomy. He placed a fifty-liter pot onto the range to simmer a crystal-clear golden [Hovězí consommé] from marrow bones, driving the moldy smell out of the street. Beside it in a heavy cast-iron cauldron bubbled a thick, mirror-glazed [Demi-glace] rich with roasted veal drippings.",
      "Disaster struck on night four. Exhausted Alex dozed off at the prep table, forgetting a pan in the oven where sweet [Konfitovaný česnek] was gently poaching in clarified butter and fresh thyme. At 3 a.m., thick acrid smoke tripped an ancient fire alarm screaming like a foghorn.",
      "The back kitchen door kicked open. A slender girl in paint-stained overalls burst in carrying a fire extinguisher. Before Alex could stand, she doused the smoldering dish towel and yanked the burnt pan into the sink. 'Are you that crazy city chef trying to cook snails here?' she shouted, wiping her brow with an arm bearing a rosemary tattoo. 'I'm Vendy. I live across the street and save idiots from carbon monoxide. By the way, your garlic isn't entirely ruined, it's just dark caramel coal.'",
      "Alex stared at her with white extinguisher dust on his nose. Vendy paused, looked at his stunned face, and burst into such an infectious, ringing laugh that the dust danced in the air. For the first time since his parents passed, Alex forgot his grief. The kitchen was smoky, but a bright spark had been lit."
    ],
    ingredients: [
      { id: "consomme", name: "Hovězí consommé", nameEn: "Beef Consommé", roleInScene: "Křišťálový vývar tažený 48 hodin jako základní stavební kámen kuchyně", roleInSceneEn: "Crystal clear broth simmered for 48 hours as the kitchen cornerstone" },
      { id: "demi-glace", name: "Demi-glace", nameEn: "Demi-Glace", roleInScene: "Základ omáček z pečených telecích kostí probublávající vedle sporáku", roleInSceneEn: "Deep roasted veal reduction simmering beside the stove" },
      { id: "confit-cesnek", name: "Konfitovaný česnek", nameEn: "Confit Garlic", roleInScene: "Česnek pomalu louhovaný v másle, který Vendy hrdinně zachránila před spálením", roleInSceneEn: "Garlic poached in butter, heroically saved from incineration by Vendy" }
    ]
  },
  {
    "id": 2,
    title: "2. Štamgasti, krekry a první ochutnávka",
    titleEn: "2. The Locals, Crackers and the First Tasting",
    subtitle: "Jak Vendy přivedla sousedy a Alex zkrotil hospodské jazyky",
    subtitleEn: "How Vendy brought neighbors and Alex tamed pub palates",
    readTime: "5 min čtení",
    readTimeEn: "5 min read",
    iconName: "Beer",
    summary: "Vendy pomáhá Alexovi s rekonstrukcí interiéru a pozve na brigádu místní sousedy. Alex pro ně připraví originální barové občerstvení, které všem vyrazí dech.",
    summaryEn: "Vendy helps Alex renovate the dining room and invites local neighbors for a work bee. Alex cooks inventive bar bites that stun the traditional crowd.",
    paragraphs: [
      "Vendy se ukázala být nepostradatelným živlem. Byla vystudovaná grafička a designérka, která se do městečka vrátila pečovat o babiččinu zahradu. Během týdne Alexovi navrhla vzdušný interiér kombinující staré dubové trámy s teplým mosazným osvětlením. Co bylo ještě důležitější: znala každého instalatéra, truhláře i zedníka v kraji. V sobotu ráno přivedla tucet místních chlapů na brigádu s tím, že ‚ten kluk sice vypadá jako z francouzského filmu, ale potřebuje pomoct pověsit digestoř‘.",
      "Když kolem poledne zedníci unaveně složili nářadí a čekali obligátní ohřátý párek s hořčicí, Alex před ně předstoupil s podnosy, které v Dubovém Újezdě nikdo nikdy neviděl. Na rozehřáté pánvi s kapkou mořské soli orestoval čerstvé zelené [Papričky Padrón], které praskaly na jazyku a bavily brigádníky svou hravou loterií – jedna ze deseti byla příjemně pálivá.",
      "K nim Alex upekl první várku vlastního pečiva: zlatavou, poctivě máslovou křupavou [Pivní sušenka] zadělanou z čerstvého sladu a výčepního ležáku. Vedle toho postavil mísu s křehkými listy čerstvého salátu přelitého jemnou emulzí [Pivní vinaigrette], kde sladovost piva dokonale ladila s kapkou medu a dijonské hořčice. Jako osvěžení pro ty, co ještě museli řídit traktor, nalil do sklenic šumivou fermentovanou [Kombucha] s tóny zeleného čaje, zatímco pro ostatní otevřel suchý řemeslný jablečný [Cider]. Aby chutě byly kompletní, na prkénko přidal malé křupavé francouzské okurčičky [Cornichons].",
      "Starý zedník pan Vopička chvíli podezíravě zkoumal zelenou papričku na vidličce. Pak ji celou vložil do úst, skousl pivní sušenku a zapil to ciderem. V místnosti nastalo hrobové ticho. Vopička pomalu polkl, otřel si knír a zabodl prst do Alexe: „Mladíku... já třicet let jedl k obědu gothaj. Ale jestli tohle budete točit a péct každý den, tak vám ty kachličky v koupelně položím zadarmo.“",
      "Vendy stála opřená o barový pult, usrkávala kombuchu a dívala se na Alexe s neskrývaným obdivem. Alex ucítil, jak mu po zádech přeběhlo mrazení, které nemělo nic společného s průvanem z rozbitého okna."
    ],
    paragraphsEn: [
      "Vendy proved to be a force of nature. A talented graphic designer who had returned to town to care for her grandmother's garden, she completely reimagined the dining room, blending raw oak beams with warm brushed brass. More importantly, she knew every plumber and carpenter in the district. On Saturday, she brought a dozen local craftsmen for a community work bee.",
      "At noon, when the crew expected cold hot dogs and bread, Alex emerged with platters unlike anything Dubový Újezd had ever seen. In a blazing skillet, he blistered sweet green [Papričky Padrón] sprinkled with flake sea salt, delighting the workers with their Russian-roulette mild heat.",
      "Beside them, he served his first bakery pride: golden, crunchy [Pivní sušenka] crafted from malt reduction and fresh beer. He tossed a garden salad dressed in a delicate, tangy [Pivní vinaigrette] balancing hop bitterness with wildflower honey. For drivers, he poured effervescent green-tea [Kombucha], while others enjoyed chilled craft apple [Cider] and crisp tart French [Cornichons].",
      "Master mason Mr. Vopička eyed the blistered pepper skeptically, crunched a beer biscuit, and washed it down with cider. Silence fell. Vopička wiped his mustache, pointed a calloused finger at Alex, and boomed: 'Young man... I've eaten bologna for thirty years. But if you serve this every day, I will tile your restrooms for free.'",
      "Vendy leaned against the bar counter, sipping kombucha and smiling warmly at Alex. Alex felt a flutter in his chest that had nothing to do with kitchen heat."
    ],
    ingredients: [
      { id: "padron-peppers", name: "Papričky Padrón", nameEn: "Padrón Peppers", roleInScene: "Orestované na pánvi se solí jako hravé uvítací občerstvení pro sousedy", roleInSceneEn: "Pan-blistered with salt as a playful welcome snack for the neighbors" },
      { id: "pivni-susenka", name: "Pivní sušenka", nameEn: "Beer Biscuit", roleInScene: "Křupavá slaná sušenka z piva a másla podávaná k prvnímu posezení", roleInSceneEn: "Crisp savory biscuit made with craft beer and farm butter" },
      { id: "pivni-vinaigrette", name: "Pivní vinaigrette", nameEn: "Beer Vinaigrette", roleInScene: "Svěží emulgovaná pivní zálivka na křehký trhaný salát", roleInSceneEn: "Zesty beer vinaigrette dressing tossed over tender garden leaves" },
      { id: "cider-pojem", name: "Cider", nameEn: "Cider", roleInScene: "Jablečný řemeslný kvašený mošt podávaný brigádníkům na baru", roleInSceneEn: "Artisanal apple cider poured for the hardworking carpentry crew" },
      { id: "kombucha-pojem", name: "Kombucha", nameEn: "Kombucha", roleInScene: "Svěží nealkoholický fermentovaný čaj pro řidiče a Vendy", roleInSceneEn: "Sparkling fermented green tea served as a non-alcoholic refresher" },
      { id: "cornichons", name: "Cornichons", nameEn: "Cornichons", roleInScene: "Miniaturní křupavé kyselé okurčičky k zakousnutí k prkénku", roleInSceneEn: "Tiny tart French pickled gherkins on the snack boards" }
    ]
  },
  {
    "id": 3,
    title: "3. Moře uprostřed vnitrozemí a vůně briošek",
    titleEn: "3. The Ocean Inland and the Scent of Brioche",
    subtitle: "Když Alex učí Vendy válet těsto a krevetový zázrak",
    subtitleEn: "When Alex teaches Vendy to roll dough and shrimp wonders",
    readTime: "5 min čtení",
    readTimeEn: "5 min read",
    iconName: "Waves",
    summary: "Kuchyně ožívá mořskými chutěmi. Alex učí Vendy tajemství francouzské briošky a společně ladí luxusní humří bisque a argentinské krevety.",
    summaryEn: "The kitchen comes alive with ocean aromas. Alex teaches Vendy the art of French brioche and together they perfect a lobster bisque and shrimp rolls.",
    paragraphs: [
      "Práce na restauraci pokročila a Vendy trávila v kuchyni stále víc večerů. Tvrdila, že jen ‚dohlíží na vizuální styl jídelního lístku‘, ale Alex si všiml, že si do zástěry vždy schovávala tužku a zvědavě nakukovala pod každou pokličku. V úterý večer se rozhodl, že ji zasvětí do tajů pečiva. „Tajemství není v síle, ale v trpělivosti,“ šeptal jí Alex za zády, když vedl její ruce po dřevěném válu a učil ji, jak zapracovat studené máslo do těsta na nadýchanou francouzskou [Brioška (Brioche)]. Vendy se smála, když měla mouku ve vlasech i na špičce nosu, a jejich prsty se při hnětení poprvé nesměle propletly.",
      "Když briošky v troubě vyběhly do zlatavé nadýchanosti, Alex se pustil do předkrmů. V měděném kastrůlku rozvoněl krunýře a kořenovou zeleninu na sametovou [Krémová humří polévka (Bisque)], jejíž bohatou sladce minerální chuť zjemnil kapkou koňaku a čerstvé smetany. Vendy ochutnala lžící přímo z hrnce, zavřela oči a vydechla: „Alexi... tohle chutná jako západ slunce nad Bretaní. Jak to děláš?“",
      "Alex se usmál a rozkrojil ještě teplou briošku. Naplnil ji dvanácti křehkými argentinskými krevetami a přelil je dvěma omáčkami: klasickou studenou [Koktejlová omáčka s koňakem] vonící po rajčatech a kapce Tabasca, a teplou bohatou bylinkovou emulzí [Choron omáčka], která spojovala estragon s jemným rajčatovým pyré.",
      "Jako tečku Alex přidal kapku vzácného japonského citrusu [Yuzu], jehož vůně připomínala mandarinku kříženou s grapefruitem, a na křupavý salátek nastrouhal hobliny z vyzrálého italského sýru [Parmazán (Parmigiano Reggiano & Grana Padano)].",
      "Vendy dojedla sousto, opřela se o linku a podívala se na Alexe pohledem, ze kterého se mu rozbušilo srdce: „Víš, Alexi... ty vaříš, jako bys chtěl každým talířem někoho obejmout. Ale nezapomínáš občas obejmout i sám sebe?“ Alex stál beze slova. Poprvé po letech cítil, že ho někdo skutečně vidí."
    ],
    paragraphsEn: [
      "Renovations were flying, and Vendy spent more evenings in the kitchen. She claimed she was 'supervising typography on the menu boards', but Alex noticed her pencil tucked behind her ear and eyes darting curiously into pots. On Tuesday, he taught her how to fold cold butter into an enriched French [Brioška (Brioche)]. Vendy laughed with flour on her cheeks, and their fingers brushed together over the wooden block.",
      "As the brioche blossomed in the oven, Alex prepared shellfish starters. In copper pans, roasted shells yielded an aromatic [Krémová humří polévka (Bisque)], its sweet mineral richness laced with fine cognac and double cream. Vendy tasted from a ladle, closed her eyes, and whispered: 'Alex... this tastes like sunset over Brittany. How do you do this?'",
      "He split a warm brioche bun, stuffing it with sweet Argentine red prawns topped with two complementary sauces: a cold, piquant [Koktejlová omáčka s koňakem] with tomato glace and Worcestershire, and warm [Choron omáčka] marrying tarragon béarnaise with tomato reduction.",
      "To brighten the plate, he added drops of aromatic Japanese [Yuzu] citrus and showered crispy greens with nutty aged [Parmazán (Parmigiano Reggiano & Grana Padano)].",
      "Vendy wiped her fingers, looked into his eyes, and said softly: 'Alex... you cook as if you want every dish to hug someone. But don't you ever need a hug yourself?' Alex stood speechless. For the first time in years, someone truly understood his heart."
    ],
    ingredients: [
      { id: "brioche", name: "Brioška (Brioche)", nameEn: "Brioche", roleInScene: "Máslové nadýchané pečivo, které Alex učí Vendy hníst na dřevěném válu", roleInSceneEn: "Enriched buttery French bread Alex teaches Vendy to knead" },
      { id: "humri-bisque", name: "Krémová humří polévka (Bisque)", nameEn: "Creamy Lobster Bisque", roleInScene: "Luxusní sametová polévka z korýšů a koňaku, která Vendy očarovala", roleInSceneEn: "Velvety shellfish soup finished with cream that enchanted Vendy" },
      { id: "koktejlova-omacka-s-konakem", name: "Koktejlová omáčka s koňakem", nameEn: "Cocktail Sauce with Cognac", roleInScene: "Noblesní studená omáčka ke krevetám a do brioškových shrimp rollů", roleInSceneEn: "Aristocratic cold sauce with aged cognac and tomato for the prawn rolls" },
      { id: "choron", name: "Choron omáčka", nameEn: "Choron Sauce", roleInScene: "Teplá béarnaise omáčka zjemněná rajčatovým glacé přelitá přes krevety", roleInSceneEn: "Warm tomato-infused béarnaise sauce drizzled over succulent prawns" },
      { id: "yuzu", name: "Yuzu", nameEn: "Yuzu", roleInScene: "Exotický japonský citrus dodávající svěží mandarinkovo-limetkový tón", roleInSceneEn: "Aromatic Japanese citrus balancing rich seafood with floral brightness" },
      { id: "parmazan-parmigiano-reggiano", name: "Parmazán (Parmigiano Reggiano)", nameEn: "Parmesan Cheese", roleInScene: "Jemné hobliny vyzrálého sýra doplňující salátek a předkrmy", roleInSceneEn: "Nutty aged cheese shaved delicately over crunchy salad garnishes" }
    ]
  },
  {
    "id": 4,
    title: "4. Burgerová noc, kouř a první polibek",
    titleEn: "4. Burger Night, Smoke and the First Kiss",
    subtitle: "Jak sousedé otestovali gril a Alex poznal lásku",
    subtitleEn: "How neighbors stress-tested the grill and Alex found love",
    readTime: "5 min čtení",
    readTimeEn: "5 min read",
    iconName: "Utensils",
    summary: "Generální zkouška burgerového menu pro celé sousedství. Alex s Vendy ladí dokonalé omáčky, křupavou slámu i sýr, a uprostřed noční kuchyně přeskočí jiskra.",
    summaryEn: "A dress rehearsal burger night for the neighborhood. Alex and Vendy tune sauces, potato straw and melted cheese, leading to a romantic breakthrough.",
    paragraphs: [
      "Tři týdny před otevřením uspořádal Alex na dvorku zkušební burgerovou noc. Přišla celá vesnice: starosta, učitelka ze školky i kluci z fotbalového klubu. Gril hučel a Alex v zástěře kmital mezi roštem a výdejním pultem jako dirigent filharmonie. Vendy stála vedle něj, kompletovala housky a s úsměvem rozdávala objednávky.",
      "Alex nechtěl dělat obyčejný fastfood. Do burgerů komponoval chutě jako symfonii. První variantu korunovala křupavá dozlatova smažená [Bramborová sláma] tenká jako vlas, která v housce neuvěřitelně chroupala. Na hovězí maso natřel hustou, pomalu taženou [Cibulová marmeláda], v níž se sladkost červené cibule snoubila se suchým červeným vínem a tymiánem.",
      "Pro gurmány měl v záloze dvě majonézová mistrovská díla: sametovou [Majonéza z pečené cibule], kde celá cibule pečená v popelu dodávala omáčce sladkou zemitost, a vedle toho říznou [Pikantní majonéza] s čerstvým chilli a kapkou jablečného octa pro ty, kdo měli rádi oheň na jazyku.",
      "K domácím hranolkům pak Alex vymyslel návykovou kombinaci: hustou [Pikantní zauzená majonéza] vonící po kouři z bukového dřeva a španělské paprice, a celé to zasypal strouhaným červeným anglickým čedarem [Red Leicester], který se v horkých bramborách táhl jako zlato.",
      "Když kolem půlnoci odešel i poslední spokojený host a dvorek ztichl pod hvězdným nebem, sedli si Alex a Vendy unavení na schody k rampě. Vendy měla na tváři kapku pikantní majonézy. Alex se k ní natáhl s ubrouskem, ale jejich pohledy se střetly. „Máš tu... omáčku,“ zašeptal. „A vadí to?“ usmála se Vendy a dívala se mu přímo do očí. Alex zahodil ubrousek, vzal její tvář do dlaní a políbil ji. V tu chvíli věděl, že v Dubovém Újezdě už nezůstává kvůli hospodě, ale kvůli dívce, která vnesla slunce do jeho života."
    ],
    paragraphsEn: [
      "Three weeks before opening, Alex hosted a backyard burger testing session for the town. The mayor, the local teacher, and the soccer team all gathered. The grill roared like an engine as Alex orchestrated patties while Vendy assembled buns with radiant charm.",
      "These weren't ordinary burgers; they were culinary art. One burger featured micro-shredded golden [Bramborová sláma] that crackled with every bite, paired with slow-simmered sticky [Cibulová marmeláda] infused with dry red wine and wild thyme.",
      "For sauce depth, he layered velvety [Majonéza z pečené cibule] blended from ash-roasted sweet onions, and sharp fiery [Pikantní majonéza] cutting through succulent beef with lemon and cayenne.",
      "Beside the burgers, crispy fries were drenched in campfire-scented [Pikantní zauzená majonéza] and blanketed with shredded artisanal [Red Leicester] cheese melting into golden rivers.",
      "At midnight, when the backyard fell quiet under the stars, they collapsed onto the kitchen porch steps. Vendy had a dab of spicy mayo near her lip. Alex reached out with a towel, but their eyes locked. 'You have sauce right there...' he murmured. 'Does it bother you?' she whispered softly. Alex dropped the towel, cupped her cheek, and kissed her. He knew then that he wasn't staying for the restaurant—he was staying for Vendy."
    ],
    ingredients: [
      { id: "bramborova-slama", name: "Bramborová sláma", nameEn: "Potato Straw", roleInScene: "Křupavá ultra tenká smažená bramborová vlákna dodávající burgeru chrupavý element", roleInSceneEn: "Ultra-fine golden crispy potato shreds adding crunch to the gourmet burgers" },
      { id: "cibulova-marmelada", name: "Cibulová marmeláda", nameEn: "Onion Jam", roleInScene: "Pomalu zkaramelizovaná cibule s červeným vínem a tymiánem do burgerů", roleInSceneEn: "Slowly caramelized red onion relish with wine balancing savory patties" },
      { id: "majoneza-z-pecene-cibule", name: "Majonéza z pečené cibule", nameEn: "Roasted Onion Mayonnaise", roleInScene: "Sametová majonéza s celými pečenými cibulemi pro jemný sladký tón", roleInSceneEn: "Silky mayonnaise blended with whole roasted caramelized onions" },
      { id: "pikantni-majoneza", name: "Pikantní majonéza", nameEn: "Spicy Mayonnaise", roleInScene: "Svěže pikantní majonéza s chilli a citronem pro řízný burgerový šmrnc", roleInSceneEn: "Vibrant spicy mayo delivering zesty heat and brightness to prime beef" },
      { id: "pikantni-zauzena-majoneza", name: "Pikantní zauzená majonéza", nameEn: "Spicy Smoked Mayonnaise", roleInScene: "Kouřová majonéza s bukovým dřevem a uzenou paprikou k hranolkům", roleInSceneEn: "Beechwood-smoked spicy mayonnaise served alongside loaded fries" },
      { id: "red-leicester", name: "Red Leicester", nameEn: "Red Leicester Cheese", roleInScene: "Výrazný červený anglický čedar rozpuštěný přes křupavé horké hranolky", roleInSceneEn: "Rich red English cheddar melted decadently over crispy hand-cut fries" }
    ]
  },
  {
    "id": 5,
    title: "5. Maso, oheň a latinskoamerická vášeň",
    titleEn: "5. Meat, Fire and Latin American Passion",
    subtitle: "Jak Alex představil ušlechtilá plemena a bylinkové salsy",
    subtitleEn: "How Alex introduced heritage breeds and herb salsas",
    readTime: "5 min čtení",
    readTimeEn: "5 min read",
    iconName: "Flame",
    summary: "Příprava hlavních chodů z grilu. Alex učí personál pracovat s prémiovým hovězím, plemenem Duroc a čerstvými bylinkovými salsami z Vendyiny zahrady.",
    summaryEn: "Preparing steak and grill mains. Alex trains staff on prime beef cuts, Duroc pork, and fresh herb salsas sourced from Vendy's garden.",
    paragraphs: [
      "Týden před slavnostním otevřením nastal čas sestavit krále jídelního lístku – grilovaná masa. Vendy přinesla ze své zahrádky koše plné čerstvé hladkolisté petržele, oregana, pažitky a estragonu. „Když už máme maso z nejlepších chovů, bylinky musí být ze živé země,“ prohlásila a vázala snítky do kytic.",
      "Alex nechal dovézt to nejlepší, co svět nabízí: certifikované mramorované hovězí [US Prime Beef] s neuvěřitelnou šťavnatostí a hloubkou chuti. Na litinový rošt položil silný mramorovaný [Vysoký roštěnec (Rib Eye)], který po ugrilování nechal odpočinout pod bylinkovým máslem, a vedle něj připravil slavný brazilský řez [Květová špička (Picanha)] s charakteristickým tukovým krytím.",
      "Aby tučnější steaky získaly dokonalý kontrast, Alex připravil dvě legendární jihoamerické omáčky: svěží argentinské [Chimichurri] plné posekaných bylinek, česneku a červeného vinného octa, a vedle toho italsko-moravskou [Salsa verde] se sekanými kapary a ančovičkami.",
      "Pro milovníky vepřového masa zvolil Alex noblesní plemeno prasat [Duroc] proslulé svým vnitřním mramorováním. Z něj připravil vysoké kotlety ochucené francouzskou směsí jemných bylin [Fines herbes], a také řízky obalené ve vzdušné japonské strouhance [Panko strouhanka], která po usmažení zůstávala křehká a lehká jako peříčko.",
      "Vendy sledovala, jak Alex s láskou vysvětluje mladému pomocnému kuchaři Tomášovi, jak respektovat každé zvíře a každou surovinu. Uvědomila si, že Alex není jen šikovný kuchař – je to člověk s ryzí duší, který do každého talíře vkládá celou svou úctu k životu."
    ],
    paragraphsEn: [
      "A week before opening, it was time to master the grill menu. Vendy arrived carrying baskets bursting with flat-leaf parsley, oregano, chives, and tarragon from her garden. 'If we serve world-class meat, the herbs must come from living soil,' she declared.",
      "Alex sourced prime marbled [US Prime Beef] prized for intense tenderness. Onto sizzling grates went thick-cut [Vysoký roštěnec (Rib Eye)] rested under melted compound butter, alongside the iconic Brazilian [Květová špička (Picanha)] with its crisp roasted fat cap.",
      "To cut through rich cuts, Alex prepared vibrant raw herb salsas: Argentine [Chimichurri] pungent with garlic and wine vinegar, and piquant [Salsa verde] brined with capers and anchovies.",
      "For pork, he chose heritage [Duroc] pork. He roasted thick chops kissed with delicate French [Fines herbes] and fried schnitzels coated in flaky Japanese [Panko strouhanka] that crisped without absorbing excess grease.",
      "Watching Alex mentor young apprentice Tomáš with such patience and reverence for the animal, Vendy realized Alex was not just a master cook—he was a gentle soul who poured love into every single grain of salt."
    ],
    ingredients: [
      { id: "us-prime", name: "US Prime Beef", nameEn: "US Prime Beef", roleInScene: "Nejvyšší třída amerického mramorovaného hovězího masa pro dokonalé steaky", roleInSceneEn: "Highest grade USDA certified beef with rich marbling for prime steaks" },
      { id: "rib-eye-rostenec", name: "Vysoký roštěnec (Rib Eye)", nameEn: "Rib Eye Steak", roleInScene: "Šťavnatý řez s tukovým okem grilovaný na dřevěném uhlí", roleInSceneEn: "Juicy well-marbled ribeye cut seared over intense hardwood charcoal" },
      { id: "picanha-kvetova-spicka", name: "Květová špička (Picanha)", nameEn: "Picanha (Rump Cap)", roleInScene: "Brazilský prémiový řez s křupavou tukovou čepičkou", roleInSceneEn: "Brazilian prized cut cooked with its signature crispy fat layer" },
      { id: "chimichurri", name: "Chimichurri", nameEn: "Chimichurri", roleInScene: "Argentinská bylinková salsa s česnekem a octem prořezávající tuk steaků", roleInSceneEn: "Argentine herbal salsa with garlic and vinegar cutting through rich steaks" },
      { id: "salsa-verde", name: "Salsa verde", nameEn: "Salsa Verde", roleInScene: "Svěží bylinková omáčka s kapary a petrželkou z Vendyiny zahrady", roleInSceneEn: "Fresh green herb salsa with capers harvested from Vendy's garden" },
      { id: "duroc", name: "Duroc", nameEn: "Duroc Pork", roleInScene: "Španělsko-americké plemeno prasat s vysokým podílem nitrosvalového tuku", roleInSceneEn: "Prized heritage pork breed known for incredible intramuscular marbling" },
      { id: "fines-herbes", name: "Fines herbes", nameEn: "Fines Herbes", roleInScene: "Francouzské bylinky (estragon, pažitka, petržel) ochucující kotlety", roleInSceneEn: "Classic French four-herb blend seasoning tender chops" },
      { id: "panko", name: "Panko strouhanka", nameEn: "Panko Breadcrumbs", roleInScene: "Japonská vzdušná strouhanka pro extra křupavé a lehké smažené řízky", roleInSceneEn: "Flaky Japanese breadcrumbs creating an ultra-crispy, featherlight crust" }
    ]
  },
  {
    "id": 6,
    title: "6. Wellington, smrže a švýcarský sýr",
    titleEn: "6. Wellington, Morels and Swiss Cheese",
    subtitle: "Jak Alex dokončil vrcholné pokrmy a Vendy otevřela jeho srdce",
    subtitleEn: "How Alex mastered showstoppers and Vendy opened his heart",
    readTime: "5 min čtení",
    readTimeEn: "5 min read",
    iconName: "Sparkles",
    summary: "Alex připravuje nejnáročnější kulinářské klenoty: hovězí Wellington s duxelles, lanýžovou a koňakovou omáčku i raclette na pastrami. Vendy mu připomene, že práce není všechno.",
    summaryEn: "Alex prepares culinary triumphs: Beef Wellington with duxelles, truffle and cognac sauces, and raclette over pastrami. Vendy teaches him life balance.",
    paragraphs: [
      "Zbývaly poslední tři dny do slavnostního otevření a Alex neopouštěl kuchyň. Chtěl mít menu dokonalé do posledního detailu. Na stole stál královský klenot: Svíčková Wellington. Alex hovězí svíčkovou zabalil do zlatavé, na sucho vyrestované houbové [Směs duxelles], kterou provoněl pravými černými lanýži a šalotkou. Celý balíček pak ukryl do křehkého máslového listového těsta a upekl dorůžova.",
      "K Wellingtonu připravil dvě královské teplé omáčky: hedvábnou, alkoholem flambovanou [Koňaková omáčka] s masovým demi-glace a celerovým základem, a vedle toho krémovou [Lanýžová omáčka], jejíž zemitost ještě podtrhl tím, že do ní přidal čerstvé lesní jarní houby [Smrže (Morchella)].",
      "Pro milovníky delikates připravil jemnou paštiku z kachních [Foie gras] v ovocném želé a pro neformální večery u krbu naložil vlastní [Pastrami] z hovězího žebra, které za tepla zasypal roztaveným voňavým sýrem [Sýr Raclette] seškrábnutým přímo z horkého bochníku. Jako osvěžující doprovod k sýru a masu namíchal křupavý [Waldorf salát] s jablky, řapíkatým celerem a ořechy.",
      "V noci, když Alex vyčerpaně kontroloval teploty v chladicích boxech, přišla Vendy, zhasla zářivku nad linkou a vzala ho za obě ruce. „Alexi, dost. Podívej se na mě. Tohle menu je mistrovské dílo. Tvoji rodiče by na tebe byli neskutečně pyšní. Ale jestli padneš únavou, kdo bude zítra vítat hosty s úsměvem? Musíš se naučit žít, ne jen vařit.“",
      "Vendy ho objala a Alex poprvé po měsících plakal. Byly to slzy úlevy, vděčnosti a lásky. V jejím objetí našel domov, který tak dlouho hledal."
    ],
    paragraphsEn: [
      "With three days left, Alex was working non-stop. He demanded absolute perfection. On the marble block rested the centerpiece: Beef Wellington. He wrapped prime tenderloin in earthy mushroom [Směs duxelles] perfumed with black truffles and shallots, encasing it in golden flaky puff pastry.",
      "To accompany it, he simmered two aristocratic sauces: flambéed [Koňaková omáčka] enriched with reduced veal stock, and rich velvety [Lanýžová omáčka] studded with delicate wild forest [Smrže (Morchella)].",
      "For charcuterie, he prepared a silky pâté of duck [Foie gras] and house-cured peppered [Pastrami] topped with bubbling melted [Sýr Raclette] scraped hot from the wheel, accompanied by crisp crunchy [Waldorf salát] with tart apples and walnuts.",
      "At 2 a.m., as Alex inspected walk-in cooler gauges for the fifth time, Vendy stepped in, switched off the overhead halogen, and took his hands. 'Alex, stop. Look at me. This menu is a masterpiece. Your parents would weep with pride. But if you collapse, who will smile at our guests tomorrow? Cooking is your gift, but love is your life.'",
      "Vendy held him tightly. In her warm embrace, Alex wept tears of profound healing and peace. He had finally found his true home."
    ],
    ingredients: [
      { id: "smes-duxelles", name: "Směs duxelles", nameEn: "Mushroom Duxelles", roleInScene: "Houbová vyrestovaná směs s lanýži obalující svíčkovou Wellington", roleInSceneEn: "Concentrated mushroom duxelles with truffles wrapping the Wellington" },
      { id: "omacka-konakova", name: "Koňaková omáčka", nameEn: "Cognac Sauce", roleInScene: "Flambovaná teplá omáčka s koňakem a demi-glace ke svíčkové", roleInSceneEn: "Flambéed warm steak sauce with aged cognac and rich glace" },
      { id: "omacka-lanyzova", name: "Lanýžová omáčka", nameEn: "Truffle Sauce", roleInScene: "Sametová krémová teplá omáčka s černými lanýži a máslem", roleInSceneEn: "Velvety warm cream sauce infused with real black truffles" },
      { id: "smrze", name: "Smrže (Morchella)", nameEn: "Morels", roleInScene: "Vzácné lesní duté houby s oříškovou chutí v omáčce a klobásách", roleInSceneEn: "Prized wild forest mushrooms with deep nutty aroma" },
      { id: "foie-gras", name: "Foie gras", nameEn: "Foie Gras", roleInScene: "Lahodná delikátní kachní játra v sametové paštice", roleInSceneEn: "Luxurious duck foie gras prepared into an unctuous terrine" },
      { id: "pastrami", name: "Pastrami", nameEn: "Pastrami", roleInScene: "Pomalu uzené hovězí žebro v krustě z pepře a koriandru", roleInSceneEn: "Slow-smoked pepper-crusted prime beef brisket pastrami" },
      { id: "raclette", name: "Sýr Raclette", nameEn: "Raclette Cheese", roleInScene: "Švýcarský vysokohorský sýr tavený horkem přímo na plátky pastrami", roleInSceneEn: "Aromatic Swiss cheese melted molten over hot pastrami sandwiches" },
      { id: "waldorf", name: "Waldorf salát", nameEn: "Waldorf Salad", roleInScene: "Osvěžující salát s jablky, řapíkatým celerem a vlašskými ořechy", roleInSceneEn: "Crisp apple, celery and walnut salad balancing rich melted cheeses" }
    ]
  },
  {
    "id": 7,
    title: "7. Otevření, svatba a sladký happy end",
    titleEn: "7. Grand Opening, The Wedding and a Sweet Happy End",
    subtitle: "Když Alex požádá Vendy o ruku a celé město slaví lásku i menu",
    subtitleEn: "When Alex proposes to Vendy and the whole town celebrates love",
    readTime: "6 min čtení",
    readTimeEn: "6 min read",
    iconName: "Heart",
    summary: "Restaurace slaví obrovský úspěch. Alex před celým městem požádá Vendy o ruku a o tři měsíce později uspořádají svatbu přímo v restauraci s luxusním sladkým finále.",
    summaryEn: "The restaurant opening is a triumph. Alex proposes to Vendy before the cheering town, followed by an unforgettable wedding feast with decadent desserts.",
    paragraphs: [
      "Den D přišel v pátek večer. Restaurace „U Nikolase“ zářila do podzimního soumraku. Všech šedesát míst bylo beznadějně obsazených. Z kuchyně létaly talíře jako po drátkách a v sále se mísil cinkot skleniček se smíchem a pochvalným mručením hostů. Každý chod sklízel ovace – od prvního hovězího consommé až po telecí klobásu s lanýžovou omáčkou.",
      "Když kolem desáté hodiny Alex vyšel v bílém kuchařském rondonu mezi hosty, celá restaurace povstala a začala tleskat. Alex poděkoval personálu, ale pak se otočil k Vendy, která stála u baru s očima zářícíma pýchou. V sále se rozhostilo ticho.",
      "Alex vzal mikrofon a řekl třesoucím se hlasem: „Tato restaurace vznikla z lásky mých rodičů. Ale žije a dýchá jen díky jedinému člověku. Díky dívce, která mě vytáhla z kouře a naučila mě, že v životě nejde jen o to, co servírujete na talíř, ale s kým sdílíte svůj stůl.“ Alex poklekl na jedno koleno, sáhl do kapsy rondonu a vytáhl prstýnek s malým zeleným smaragdem. „Vendy... vezmeš si mě?“",
      "Vendy si přitiskla ruce k ústům a po tváři jí stekla slza radosti. „Ano! Tisíckrát ano!“ vykřikla a padla Alexovi kolem krku za bouřlivého jásotu celého městečka. Starosta okamžitě otevřel první láhev slavného moravského červeného cuvée [Nina Cuvée] od vinařství Bílkovi a v karafách se rozlilo rubínové belgické višňové pivo [Kasteel Rouge].",
      "O tři měsíce později se v téže restauraci konala svatba roku. Hostina byla oslavou všeho, co Alex a Vendy společně vybudovali. Jako svatební dezert Alex připravil legendární lehkou ovocnou pěnu [Espuma] ze šlehačkové láhve, dortíky z luxusní francouzské karamelové blond čokolády [Valrhona Dulcey] tvarované do podoby chmelových šišek a zalité sametovou lesklou [Ganache]. A na úplný závěr, když už hosté tancovali pod hvězdami, vynesl na stoly přímo z pece obří pánev, na které se třpytil nadýchaný roztrhaný [Karamelový trhanec] sypaný moučkovým cukrem a podávaný s horkou višňovou omáčkou.",
      "Vendy se v bílých šatech opřela o Alexovo rameno, usrkla vína Nina Cuvée a zašeptala: „Vidíš to, Alexi? Naše menu je kompletní. A náš příběh právě začíná.“ Alex se usmál, políbil svou novomanželku a věděl, že má v životě všechno, o čem kdy snil."
    ],
    paragraphsEn: [
      "Opening night arrived in autumn glow. All sixty seats were booked solid. Plates flowed like clockwork as the dining room hummed with laughter and gasps of delight. Every single dish garnered praise from the first spoonful of consommé to the final bite of truffle sausage.",
      "At 10 p.m., Alex stepped into the dining room in his crisp chef's jacket. The entire room rose in a standing ovation. Alex thanked his kitchen brigade, but turned his gaze to Vendy standing radiant by the bar. Silence fell.",
      "Alex spoke into the microphone, his voice thick with emotion: 'This restaurant was born from my parents' legacy. But it breathes only because of one woman. The girl who pulled me from kitchen smoke and taught me that life isn't just about what you plate, but who you share your table with.' He knelt on one knee, producing a velvet box with a delicate emerald ring. 'Vendy... will you marry me?'",
      "Vendy pressed her hands to her lips, tears of joy streaming down her cheeks. 'Yes! A thousand times yes!' she cried, throwing her arms around his neck as cheers erupted. The mayor popped bottles of exquisite Moravian red [Nina Cuvée] from Bílkovi Winery, alongside goblets of ruby Belgian cherry [Kasteel Rouge].",
      "Three months later, the wedding of the century took place inside the restaurant. The feast was a sweet triumph: light, airy fruit [Espuma], intricate hop-cone desserts sculpted from blonde caramel [Valrhona Dulcey] chocolate draped in mirror-smooth dark [Ganache], and giant sizzling pans of fluffy shredded [Karamelový trhanec] dusted with sugar and tart warm cherries.",
      "In her flowing white gown, Vendy rested her head against Alex's shoulder, looked at the happy guests, and whispered: 'Look at them, Alex. Our menu is complete. And our greatest recipe is just beginning.' Alex smiled, kissed his bride, and knew he had everything he had ever dreamed of."
    ],
    ingredients: [
      { id: "nina-cuvee", name: "Nina Cuvée", nameEn: "Nina Cuvée", roleInScene: "Ikonické rodinné červené cuvée otevřené na slavnostní zásnubní přípitek", roleInSceneEn: "Iconic Moravian family cuvée uncorked for the emotional engagement toast" },
      { id: "kasteel-rouge", name: "Kasteel Rouge", nameEn: "Kasteel Rouge Beer", roleInScene: "Rubínové belgické višňové pivo servírované hostům na oslavu", roleInSceneEn: "Ruby Belgian cherry craft ale poured in celebration for all guests" },
      { id: "espuma", name: "Espuma", nameEn: "Espuma", roleInScene: "Vzdušná lehká kulinářská pěna ze sifonu podávaná jako moderní svatební osvěžení", roleInSceneEn: "Airy fruit foam siphon-dispensed as a modern wedding dessert element" },
      { id: "valrhona-dulcey", name: "Valrhona Dulcey", nameEn: "Valrhona Dulcey", roleInScene: "Karamelová blond čokoláda zformovaná do luxusních svatebních dortíků", roleInSceneEn: "Caramelized blonde Valrhona chocolate sculpted into signature wedding pastries" },
      { id: "ganache", name: "Ganache", nameEn: "Ganache", roleInScene: "Hedvábný krém z čokolády a smetany pokrývající svatební dorty", roleInSceneEn: "Silky chocolate cream emulsion glazing the artisanal wedding cakes" },
      { id: "kaiserschmarrn", name: "Karamelový trhanec", nameEn: "Caramelized Kaiserschmarrn", roleInScene: "Nadýchaný císařský trhanec pečený na obří pánvi jako noční sladké překvapení", roleInSceneEn: "Fluffy caramelized shredded pancake served straight from the oven at midnight" }
    ]
  }
];
