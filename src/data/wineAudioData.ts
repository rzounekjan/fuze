export interface AudioDialogueLine {
  id: number;
  timeSec: number;
  timeFormatted: string;
  speaker: 'host' | 'sommelier';
  speakerName: string;
  text: string;
  wineId?: string;
  chapterIndex: number;
}

export interface AudioChapter {
  id: string;
  title: string;
  subtitle: string;
  startTime: number;
  endTime: number;
  timeFormatted: string;
  wineIds: string[];
}

export const WINE_AUDIO_CHAPTERS: AudioChapter[] = [
  {
    id: 'intro',
    title: 'Úvod & Psychologie vinného lístku',
    subtitle: 'Proč nejdražší víno nemusí být nejlepší a jak číst lístek jako mapu',
    startTime: 0,
    endTime: 128,
    timeFormatted: '00:00',
    wineIds: []
  },
  {
    id: 'bubliny',
    title: 'Šumivá vína: Charmat vs. Crémant',
    subtitle: 'Sólista (Pálava extra sec) vs. Kapela (Cuvée Pinot & Chardonnay extra brut)',
    startTime: 128,
    endTime: 378,
    timeFormatted: '02:08',
    wineIds: ['sklo-charmat-palava', 'sklo-cremant-vinselekt']
  },
  {
    id: 'bila-lokalni',
    title: 'Bílá vína z Čech a Moravy',
    subtitle: 'Suché Cuvée Kraus vs. polosuché Rulandské šedé Kolby (Pravidlo P)',
    startTime: 378,
    endTime: 473,
    timeFormatted: '06:18',
    wineIds: ['sklo-cuvee-bile', 'sklo-rulandske-sede']
  },
  {
    id: 'bila-svetova',
    title: 'Zahraniční bílá vína: Rakousko vs. USA',
    subtitle: 'Svěží horský Veltlín Hauser vs. mohutné kalifornské Chardonnay Adulation',
    startTime: 473,
    endTime: 563,
    timeFormatted: '07:53',
    wineIds: ['sklo-gruner-veltliner', 'sklo-chardonnay']
  },
  {
    id: 'ruzovy-most',
    title: 'Růžový most & fenomén Modrého Portugalu',
    subtitle: 'Jak stejný hrozen vytvoří svěží rosé i hluboké červené víno macerací',
    startTime: 563,
    endTime: 655,
    timeFormatted: '09:23',
    wineIds: ['sklo-modry-portugal-rose', 'sklo-modry-portugal']
  },
  {
    id: 'cervena-gradace',
    title: 'Červená vína: Od elegance k mohutnosti',
    subtitle: 'Modrý Portugal Kolby -> Cuvée červené Kraus -> Americký Pinot Noir Adulation',
    startTime: 655,
    endTime: 706,
    timeFormatted: '10:55',
    wineIds: ['sklo-modry-portugal', 'sklo-cuvee-cervene', 'sklo-pinot-noir']
  },
  {
    id: 'rekapitulace',
    title: 'Závěrečná rekapitulace & Slepa degustace',
    subtitle: 'Degustační desatero a psychologický vliv cenovky na vnímání chuti',
    startTime: 706,
    endTime: 767,
    timeFormatted: '11:46',
    wineIds: []
  }
];

export const WINE_AUDIO_TRANSCRIPT: AudioDialogueLine[] = [
  {
    id: 1,
    timeSec: 0,
    timeFormatted: '00:00',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Většina lidí má asi za to, že prostě nejdražší víno na lístku v restauraci automaticky znamená i ten nejlepší chuťový zážitek.',
    chapterIndex: 0
  },
  {
    id: 2,
    timeSec: 8,
    timeFormatted: '00:08',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'No, to je vlastně hrozně častý omyl.',
    chapterIndex: 0
  },
  {
    id: 3,
    timeSec: 10,
    timeFormatted: '00:10',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Že jo. A co když je to ale ve skutečnosti trochu jinak? Co když ten úplně největší aha moment celého večera může přinést obyčejná sklenička za 95 korun, ale jenom tehdy, pokud se vypije přesně ve správný okamžik a ve správném srovnání s jinou skleničkou?',
    chapterIndex: 0
  },
  {
    id: 4,
    timeSec: 27,
    timeFormatted: '00:27',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Jasně, záleží na tom kontextu.',
    chapterIndex: 0
  },
  {
    id: 5,
    timeSec: 29,
    timeFormatted: '00:29',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Přesně. Takže náš dnešní rozbor se zaměří na jednu jedinou věc. Dostali jsme totiž do ruky naprosto konkrétní nabídku 10 vín, která se v jedné restauraci rozlévají takzvaně po skleničce. A cíl je naprosto jasný: chceme tenhle seznam prostě dekódovat.',
    chapterIndex: 0
  },
  {
    id: 6,
    timeSec: 43,
    timeFormatted: '00:43',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Ukázat si, co se za těmi názvy vlastně skrývá.',
    chapterIndex: 0
  },
  {
    id: 7,
    timeSec: 46,
    timeFormatted: '00:46',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'No jasně. Chceme z obyčejného ceníku vytvořit dokonalého průvodce. Ukážeme si, jak z těch 10 položek sestavit ideální pořadí degustace, jak je spárovat, aby to celé dávalo nějaký smysl. A hlavně si představíme takové ty jednoduché mnemotechnické pomůcky, díky nimž si snad úplně kdokoli dokáže zapamatovat, co je to cuvée, co znamená které cizí slovo a jak prostě neudělat při objednávání chybu.',
    chapterIndex: 0
  },
  {
    id: 8,
    timeSec: 70,
    timeFormatted: '01:10',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'To je vlastně ten úplně nejčastější problém. Lidé totiž vnímají vinný lístek tak trochu jako tabulku v Excelu. Jsou tam prostě nějaká čísla, ročníky, podivné francouzské nebo italské výrazy.',
    chapterIndex: 0
  },
  {
    id: 9,
    timeSec: 83,
    timeFormatted: '01:23',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Úplná španělská vesnice pro někoho.',
    chapterIndex: 0
  },
  {
    id: 10,
    timeSec: 85,
    timeFormatted: '01:25',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Přesně tak. A mozek má pak takovou přirozenou tendenci sáhnout po tom úplně nejznámějším slově. Nebo prostě člověk ukáže někam doprostřed cenové nabídky, aby u stolu nepůsobil hloupě.',
    chapterIndex: 0
  },
  {
    id: 11,
    timeSec: 95,
    timeFormatted: '01:35',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Jo, zlatá střední cesta. To znám moc dobře z vlastní zkušenosti.',
    chapterIndex: 0
  },
  {
    id: 12,
    timeSec: 99,
    timeFormatted: '01:39',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'No vidíš. Přitom ten lístek, to je vlastně mapa. Pokud se na něj člověk podívá trošku analyticky, tak mu odhalí geografické rozdíly, různé přístupy k výrobě a hlavně – a to je klíčové – ukáže mu logickou cestu, po které by se měly chuťové pohárky vydat, aby prostě nebyly v polovině večera úplně otupělé.',
    chapterIndex: 0
  },
  // Chapter 1: Bubliny (01:57)
  {
    id: 13,
    timeSec: 117,
    timeFormatted: '01:57',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Tak se do té naší mapy pojďme podívat. A začneme hned nahoře – jsou tam bubliny. Takové to pravidlo, které slýchávám úplně všude, zní: Začínáme šumivým vínem.',
    chapterIndex: 1
  },
  {
    id: 14,
    timeSec: 127,
    timeFormatted: '02:07',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Ano, to je absolutní základ.',
    chapterIndex: 1
  },
  {
    id: 15,
    timeSec: 129,
    timeFormatted: '02:09',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'V našem dnešním seznamu tu máme rovnou dvě možnosti, obě se rozlévají po jedné deci a obě jsou od vinařství Vinselect Michlovský. Ta první je Charmat de Vinselekt, to je z odrůdy Pálava, stojí 99 korun a u něj je napsáno extra sec.',
    wineId: 'sklo-charmat-palava',
    chapterIndex: 1
  },
  {
    id: 16,
    timeSec: 143,
    timeFormatted: '02:23',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Jasně.',
    wineId: 'sklo-charmat-palava',
    chapterIndex: 1
  },
  {
    id: 17,
    timeSec: 144,
    timeFormatted: '02:24',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Druhou možností je Crémant de Vinselekt. Tady jde o složení z odrůd Pinot a Chardonnay, je to za 115 korun s označením extra brut. Ale zajímala by mě jedna věc: proč je vlastně tak strašně důležité začít právě těmi bublinami? Je to jenom společenská konvence, nebo je za tím fyziologie?',
    wineId: 'sklo-cremant-vinselekt',
    chapterIndex: 1
  },
  {
    id: 18,
    timeSec: 163,
    timeFormatted: '02:43',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Je v tom čistá fyziologie. Šumivé víno, respektive oxid uhličitý v něm obsažený, funguje v ústech vlastně úplně mechanicky.',
    chapterIndex: 1
  },
  {
    id: 19,
    timeSec: 172,
    timeFormatted: '02:52',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Jakože to tam nějak drhne?',
    chapterIndex: 1
  },
  {
    id: 20,
    timeSec: 174,
    timeFormatted: '02:54',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Přesně. Ty bublinky spolu s tou vyšší kyselinkou, která je pro šumivá vína tak typická, doslova omyjí chuťové pohárky na jazyku. Odstraní zbytky jakýchkoli předchozích chutí – tuky, proteiny z jídla. Tím se patro takzvaně probudí a nastaví na jakousi nulovou hodnotu. Kdyby člověk začal těžkým plným vínem, jazyk se okamžitě obalí a z dalších vzorků by neměl vůbec nic.',
    chapterIndex: 1
  },
  {
    id: 21,
    timeSec: 201,
    timeFormatted: '03:21',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Dobře, takže je to takový budíček pro jazyk. Mě tady ale na lístku okamžitě zaujala jedna věc a napadla mě k tomu taková pomůcka. Máme tu dvě šumivá vína: jedno je z jedné jediné odrůdy, z Pálavy. To je pro mě něco jako sólový zpěvák. Prostě stojí na pódiu sám a veškerá pozornost publika míří jen na jeho specifický, velmi voňavý hlas.',
    wineId: 'sklo-charmat-palava',
    chapterIndex: 1
  },
  {
    id: 22,
    timeSec: 226,
    timeFormatted: '03:46',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'To je moc hezké přirovnání.',
    chapterIndex: 1
  },
  {
    id: 23,
    timeSec: 228,
    timeFormatted: '03:48',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Že jo? A to druhé víno je Crémant, což je spojení Pinotu a Chardonnay. Tomu se, pokud vím, říká cuvée. Dává to smysl, když si to představím jako hudební kapelu, kde už se musí ty hlasy a nástroje ladit dohromady?',
    wineId: 'sklo-cremant-vinselekt',
    chapterIndex: 1
  },
  {
    id: 24,
    timeSec: 244,
    timeFormatted: '04:04',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Z technického hlediska to funguje naprosto přesně takhle. U toho jednodruhového vína je vinař do jisté míry odkázán na to, co mu v daném roce příroda v té jedné odrůdě nadělila. Odrůda ukazuje svůj charakter, hraje sólo. Zato u toho cuvée – u té tvé kapely – se z vinaře stává spíš dirigent. Vinař vezme Chardonnay, které dodá vínu páteř, pevné tělo a strukturu...',
    wineId: 'sklo-cremant-vinselekt',
    chapterIndex: 1
  },
  {
    id: 25,
    timeSec: 275,
    timeFormatted: '04:35',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Aha, takže základní rytmika!',
    chapterIndex: 1
  },
  {
    id: 26,
    timeSec: 277,
    timeFormatted: '04:37',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Dá se to tak říct. A pak přidá Pinot, který tomu naopak dodá jemnost, eleganci a ovocné tóny. Cílem je vytvořit harmonii, která by z jedné samotné odrůdy nikdy nevznikla.',
    wineId: 'sklo-cremant-vinselekt',
    chapterIndex: 1
  },
  {
    id: 27,
    timeSec: 289,
    timeFormatted: '04:49',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Tady se nabízí úplně jednoduchá mnemotechnická pomůcka: Crémant začíná na C, to se dá spojit se slovem Cuvée na C a Kapela na K! Takže Crémant = Cuvée = Kapela.',
    wineId: 'sklo-cremant-vinselekt',
    chapterIndex: 1
  },
  {
    id: 28,
    timeSec: 305,
    timeFormatted: '05:05',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Výborně, to se pamatuje úplně samo.',
    chapterIndex: 1
  },
  {
    id: 29,
    timeSec: 307,
    timeFormatted: '05:07',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Ale co mi u těch bublin nedává smysl, jsou ta další označení. U Crémantu je napsáno extra brut – to si vysvětlím snadno: brut jako brutálně suché, žádný cukr. Jenže u té Pálavy je extra sec. A slovo sec znamená ve francouzštině suchý. Proč se tedy všude říká, že tohle víno je ta sladší verze, když je tam jasně napsáno suché?',
    wineId: 'sklo-charmat-palava',
    chapterIndex: 1
  },
  {
    id: 30,
    timeSec: 334,
    timeFormatted: '05:34',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Zní to jako absolutní paradox, viď? Tenhle terminologický chyták má historické vysvětlení z 19. století. V té době se šumivá vína, hlavně v Champagne, pila extrémně sladká – přidávalo se obrovské množství cukerného sirupu, takzvané dozáže, zejména pro ruský carský dvůr.',
    chapterIndex: 1
  },
  {
    id: 31,
    timeSec: 367,
    timeFormatted: '06:07',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Aha, takže to muselo být sladké jako cumel!',
    chapterIndex: 1
  },
  {
    id: 32,
    timeSec: 370,
    timeFormatted: '06:10',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Přesně. A když se začala vyrábět vína s menším obsahem cukru, začalo se jim říkat sec – tedy suchá, protože v tehdejším kontextu to opravdu suchá varianta byla. Později lidé chtěli ještě sušší, tak vznikl demi-sec, brut, extra brut a brut nature. Takže v moderním kontextu sec nebo extra sec znamená poměrně výrazný zbytek cukru.',
    chapterIndex: 1
  },
  {
    id: 33,
    timeSec: 421,
    timeFormatted: '07:01',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Aha! Takže ta Pálava extra sec na našem lístku bude v chuti působit kulatěji a sladčeji, zatímco Crémant extra brut bude nekompromisně suchý a řízný. Pokud chce člověk skvělý degustační experiment, objedná si tyhle dvě skleničky vedle sebe: aromatického sólistu Pálavu s velmi suchou kapelou Crémant!',
    wineId: 'sklo-charmat-palava',
    chapterIndex: 1
  },
  // Chapter 2: Tichá bílá vína lokální (07:31)
  {
    id: 34,
    timeSec: 451,
    timeFormatted: '07:31',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Pojďme se posunout dál k tichým bílým vínům. Máme tu lokální produkci: Cuvée bílé od Krause z Čech za 98 Kč a Rulandské šedé od vinařství Kolby z Moravy za 95 Kč. Opět souboj Čechy vs. Morava a kapela vs. sólista.',
    wineId: 'sklo-cuvee-bile',
    chapterIndex: 2
  },
  {
    id: 35,
    timeSec: 473,
    timeFormatted: '07:53',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'A tady je důležité podotknout, proč v této fázi zůstáváme doma. Středoevropská vína mají díky chladnějšímu klimatu přirozeně vyšší kyselinku, jsou svěžejší a logicky navazují na bubliny. Kdybychom skočili hned do těžkých vín, byl by to příliš velký skok.',
    chapterIndex: 2
  },
  {
    id: 36,
    timeSec: 498,
    timeFormatted: '08:18',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Proč se ale musíme zastavit u pořadí těchto dvou vín?',
    chapterIndex: 2
  },
  {
    id: 37,
    timeSec: 500,
    timeFormatted: '08:20',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Protože pokud bychom udělali chybu v pořadí těchto dvou lokálních vín, mohli bychom si celý zážitek zkazit.',
    chapterIndex: 2
  },
  {
    id: 38,
    timeSec: 508,
    timeFormatted: '08:28',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'To vím proč! U Rulandského šedého je napsáno slovo polosuché. A nabízí se mnemotechnická pomůcka: Rulandské šedé od Kolbyho je pod písmenem P, a je to jediné bílé víno na celém seznamu s označením P jako polosuché! Musíme si ho tedy nechat v pořadí až po suchém.',
    wineId: 'sklo-rulandske-sede',
    chapterIndex: 2
  },
  {
    id: 39,
    timeSec: 541,
    timeFormatted: '09:01',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Zbytek cukru funguje na jazyku jako chuťové anestetikum. Receptory pro sladkost se nasytí a posunou referenční bod. Když se hned napijeme suchého českého cuvée, kde není téměř žádný cukr, mozek ho začne podvědomě hledat a nenajde ho – víno by se zdálo trpké a agresivní.',
    chapterIndex: 2
  },
  {
    id: 40,
    timeSec: 604,
    timeFormatted: '10:04',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Přesně jako když sníte kousek čokolády a hned se napijete pomerančového džusu – zdá se vám neskutečně kyselý. Proto musíme začít suchým českým Cuvée Kraus a teprve potom přejít k polosuchému Rulandskému šedému z Kolby.',
    wineId: 'sklo-cuvee-bile',
    chapterIndex: 2
  },
  // Chapter 3: Zahraniční bílá vína (10:46)
  {
    id: 41,
    timeSec: 646,
    timeFormatted: '10:46',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Domácí scénu máme zmapovanou a lístek nás posílá za hranice. Jsou tu dvě zahraniční bílá vína: z Rakouska Veltlínské zelené (Grüner Veltliner) od Heuriger za 109 Kč a Chardonnay Adulation z Kalifornie za 125 Kč. Pomůcka: Adulation začíná na A jako Amerika, nejvýše oceněné bílé víno.',
    wineId: 'sklo-gruner-veltliner',
    chapterIndex: 3
  },
  {
    id: 42,
    timeSec: 679,
    timeFormatted: '11:19',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Ale upřímně – neplatí člověk těch 25 korun navíc jen za to, že se barely vezly lodí přes půl planety? Proč by to kalifornské mělo být jiné?',
    wineId: 'sklo-chardonnay',
    chapterIndex: 3
  },
  {
    id: 43,
    timeSec: 696,
    timeFormatted: '11:36',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Logistika hraje roli, ale v chuti se bavíme o propastném rozdílu v terroiru – vlivu místního prostředí. Jde hlavně o teplo. Rakouský Veltlín má chladné noci, kyselina se nespálí a víno je jiskrné a svěží, plné zeleného jablka a bílého pepře.',
    wineId: 'sklo-gruner-veltliner',
    chapterIndex: 3
  },
  {
    id: 44,
    timeSec: 740,
    timeFormatted: '12:20',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Zatímco v Kalifornii buší slunce s obrovskou intenzitou. Fotosyntéza běží naplno, kumuluje se přírodní cukr a kvasinky vytvoří víno s mnohem vyšším alkoholem a glycerolem. To mění viskozitu tekutiny – slzy stékají pomalu, víno má tóny ananasu, másla a vanilky z dubových sudů.',
    wineId: 'sklo-chardonnay',
    chapterIndex: 3
  },
  {
    id: 45,
    timeSec: 818,
    timeFormatted: '13:38',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Takže pravidlo: pije se od lehčího k těžšímu. Mohutné viskózní kalifornské Chardonnay by rakouský svěží Veltlín chuťově převálcovalo, proto musí jít Veltlín první a Chardonnay až po něm!',
    wineId: 'sklo-chardonnay',
    chapterIndex: 3
  },
  // Chapter 4: Růžový most (14:00)
  {
    id: 46,
    timeSec: 840,
    timeFormatted: '14:00',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Nyní stojíme před logickým problémem: jak se po kalifornské máslové bombě přesunout k červeným vínům? Kdyby si člověk hned objednal těžké červené, patro zažije šok.',
    chapterIndex: 4
  },
  {
    id: 47,
    timeSec: 865,
    timeFormatted: '14:25',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Byl by to náraz. Profesionálové v takovou chvíli používají chuťový most – a tím v naší nabídce nemůže být nic jiného než růžové víno. Patro zchladí, spláchne hutnost bílého a lehkou strukturou červeného ovoce připraví jazyk na červená vína.',
    wineId: 'sklo-modry-portugal-rose',
    chapterIndex: 4
  },
  {
    id: 48,
    timeSec: 895,
    timeFormatted: '14:55',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'A tady máme na lístku fascinující věc: Modrý Portugal od Kolbyho je na lístku dvakrát za sebou! Jednou Modrý Portugal rosé za 95 Kč a hned pod ním Modrý Portugal červené taky za 95 Kč. Jako jeden herec ve dvou různých rolích.',
    wineId: 'sklo-modry-portugal-rose',
    chapterIndex: 4
  },
  {
    id: 49,
    timeSec: 947,
    timeFormatted: '15:47',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Lidé si často myslí, že modrý hrozen má modrou šťávu. Ve skutečnosti je dužina modrých hroznů bezbarvá, průhledná jako u bílých. Červená barva a třísloviny se skrývají výhradně ve slupkách. Zda vznikne rosé nebo hutné červené závisí na tom, jak dlouho se slupky macerují ve šťávě.',
    chapterIndex: 4
  },
  {
    id: 50,
    timeSec: 994,
    timeFormatted: '16:34',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'U rosé jen pár hodin – vezme si jahody, maliny a svěží kyselinku bez hrubých tříslovin. U červeného se maceruje dny i týdny, což uvolní hlubokou barvu a pevnou strukturu tříslovin.',
    wineId: 'sklo-modry-portugal',
    chapterIndex: 4
  },
  {
    id: 51,
    timeSec: 1035,
    timeFormatted: '17:15',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Fantastická příležitost objednat si tyto dvě skleničky vedle sebe a na vlastní patro otestovat kouzlo macerace slupek!',
    wineId: 'sklo-modry-portugal-rose',
    chapterIndex: 4
  },
  // Chapter 5: Červená vína (17:33)
  {
    id: 52,
    timeSec: 1053,
    timeFormatted: '17:33',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Růžový most nás převedl k červeným vínům. Po sólovém červeném Modrém Portugalu vidíme Cuvée červené od Krause za 98 Kč – opět česká kapela!',
    wineId: 'sklo-cuvee-cervene',
    chapterIndex: 5
  },
  {
    id: 53,
    timeSec: 1070,
    timeFormatted: '17:50',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Přesně se opakuje vzorec od bílých vín: domácí sólista z Moravy předvedl odrůdový charakter a teď přichází cuvée od Krause, kde se odrůdy spojují v plnější tělo, ovocnost a schopnost zrát v sudu.',
    wineId: 'sklo-cuvee-cervene',
    chapterIndex: 5
  },
  {
    id: 54,
    timeSec: 1111,
    timeFormatted: '18:31',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'A finále je opět zastoupeno Amerikou: Pinot Noir od Adulation z Kalifornie za 125 Kč, nejvyšší cena na lístku. Kruh se uzavírá.',
    wineId: 'sklo-pinot-noir',
    chapterIndex: 5
  },
  {
    id: 55,
    timeSec: 1140,
    timeFormatted: '19:00',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Pinot Noir je jedna z nejprestižnějších červených odrůd. V horké Kalifornii získá zralé třešně, ostružiny, vanilku a sladké koření. Má kulaté třísloviny a tak dlouhý dozvuk, že po něm by jakékoli jiné víno nedávalo smysl.',
    wineId: 'sklo-pinot-noir',
    chapterIndex: 5
  },
  // Chapter 6: Rekapitulace (19:51)
  {
    id: 56,
    timeSec: 1191,
    timeFormatted: '19:51',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Pojďme si naši mapu rychle zrekapitulovat: 1. Bubliny mechanicky čistí patro. 2. Jednodruhové víno je sólo zpěvák, cuvée a crémant je kapela. 3. P znamená polosuché a pije se až po suchém. 4. Za americká vína platíme víc, ale mají mohutné tělo. 5. Růžový most propojí bílá a červená.',
    chapterIndex: 6
  },
  {
    id: 57,
    timeSec: 1262,
    timeFormatted: '21:02',
    speaker: 'sommelier',
    speakerName: 'Petr, sommeliér',
    text: 'Vinný lístek v sobě vždy skrývá hlubší příběhy. Když člověk ví, jak příběhy řadit, zážitek se zmnohonásobí. Není to jen o tom, co si objednáme, ale kdy a v jakém kontextu to pijeme.',
    chapterIndex: 6
  },
  {
    id: 58,
    timeSec: 1279,
    timeFormatted: '21:19',
    speaker: 'host',
    speakerName: 'Anna',
    text: 'Poslední provokativní myšlenka: všechna domácí vína stojí 95–98 Kč, obě kalifornská 125 Kč. Do jaké míry tato tištěná cenovka na papíře psychologicky formuje naši chuť? Změní se nám vnímání ještě dřív, než usrkneme? To už je výzva pro slepou degustaci!',
    chapterIndex: 6
  }
];
