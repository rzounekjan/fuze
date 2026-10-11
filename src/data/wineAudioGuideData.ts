// Auto-generated synchronized timeline and chapters for "Vína po skle" audio guide
export interface AudioChapter {
  id: string;
  title: string;
  startTime: number;
}

export interface DialogueSegment {
  id: string;
  speaker: 'host1' | 'host2';
  speakerName: string;
  chapterTitle?: string;
  startTime: number;
  endTime: number;
  duration: number;
  text: string;
}

export interface WineAudioGuideMeta {
  audioUrl: string;
  totalDuration: number;
  formattedDuration: string;
  title: string;
  subtitle: string;
  chapters: AudioChapter[];
  segments: DialogueSegment[];
}

export const WINE_AUDIO_GUIDE: WineAudioGuideMeta = {
  audioUrl: '/audio/vina-po-skle-rozbor.mp3',
  totalDuration: 1574.02,
  formattedDuration: '26:14',
  title: 'Sommeliérský rozbor: Vína po skle',
  subtitle: 'Kompletní degustační mapa, fyziologie patra a 10 rozlévaných vín',
  chapters: [
  {
    "id": "ch-1",
    "title": "Úvod: Proč dražší neznamená lepší",
    "startTime": 0.0
  },
  {
    "id": "ch-2",
    "title": "Vinný lístek jako mapa a psychologie hosta",
    "startTime": 90.1
  },
  {
    "id": "ch-3",
    "title": "1. Šumivá vína: Pravidlo startu & Vinselekt Michlovský",
    "startTime": 154.56
  },
  {
    "id": "ch-4",
    "title": "Fyziologie bublin & restart chuťových pohárků",
    "startTime": 215.49
  },
  {
    "id": "ch-5",
    "title": "Mnemotechnika: Sólový zpěvák vs. Kapela (Cuvée)",
    "startTime": 260.71
  },
  {
    "id": "ch-6",
    "title": "Zrádná označení: Extra Brut vs. Extra Sec",
    "startTime": 389.1
  },
  {
    "id": "ch-7",
    "title": "2. Tichá bílá vína: Čechy vs. Morava & Lokální scéna",
    "startTime": 560.38
  },
  {
    "id": "ch-8",
    "title": "Zbytkový cukr jako chuťové anestetikum",
    "startTime": 622.32
  },
  {
    "id": "ch-9",
    "title": "3. Zahraniční bílá vína: Rakousko vs. Kalifornie",
    "startTime": 771.16
  },
  {
    "id": "ch-10",
    "title": "Terroir: Alpské noci vs. Kalifornské slunce",
    "startTime": 821.96
  },
  {
    "id": "ch-11",
    "title": "4. Chuťový most: Růžové víno k červeným",
    "startTime": 973.86
  },
  {
    "id": "ch-12",
    "title": "Dvě tváře Modrého Portugalu: Rosé vs. Červené z Kolby",
    "startTime": 1042.1
  },
  {
    "id": "ch-13",
    "title": "5. Červená vína: Sólista Portugal vs. Kapela Cuvée Krause",
    "startTime": 1221.92
  },
  {
    "id": "ch-14",
    "title": "6. Velké finále: Kalifornský Pinot Noir (Adulation)",
    "startTime": 1285.83
  },
  {
    "id": "ch-15",
    "title": "Rekapitulace celé degustační mapy v 6 krocích",
    "startTime": 1385.98
  },
  {
    "id": "ch-16",
    "title": "Závěrečná myšlenka: Psychologie ceny vs. slepá degustace",
    "startTime": 1484.83
  }
],
  segments: [
  {
    "id": "seg-1",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": "Úvod: Proč dražší neznamená lepší",
    "startTime": 0.0,
    "endTime": 8.93,
    "duration": 8.93,
    "text": "Většina lidí má asi za to, že prostě nejdražší víno na lístku v restauraci automaticky znamená i ten nejlepší chuťový zážitek."
  },
  {
    "id": "seg-2",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 9.33,
    "endTime": 12.21,
    "duration": 2.88,
    "text": "No, to je vlastně hrozně častý omyl."
  },
  {
    "id": "seg-3",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 12.61,
    "endTime": 33.37,
    "duration": 20.75,
    "text": "Že jo. A co když je to ale ve skutečnosti trochu jinak? Co když ten úplně největší aha moment celého večera může přinést, já nevím, obyčejná sklenička za 95 korun, ale jenom tehdy, pokud se vypije přesně ve správný okamžik a ve správném srovnání s jinou skleničkou?"
  },
  {
    "id": "seg-4",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 33.77,
    "endTime": 36.45,
    "duration": 2.69,
    "text": "Jasně, záleží na tom kontextu."
  },
  {
    "id": "seg-5",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 36.85,
    "endTime": 55.65,
    "duration": 18.79,
    "text": "Přesně. Takže náš dnešní rozbor se zaměří na jednu jedinou věc. Dostali jsme totiž do ruky naprosto konkrétní nabídku deseti vín, která se v restauraci Fuze rozlévají takzvaně po skleničce. A cíl je naprosto jasný: chceme tenhle seznam prostě dekódovat."
  },
  {
    "id": "seg-6",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 56.05,
    "endTime": 60.01,
    "duration": 3.97,
    "text": "Ukázat si, co se za těmi názvy vlastně skrývá."
  },
  {
    "id": "seg-7",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 60.41,
    "endTime": 90.1,
    "duration": 29.69,
    "text": "No jasně. Chceme z obyčejného ceníku vytvořit dokonalého průvodce. Ukážeme si, jak z těch deseti položek sestavit ideální pořadí degustace, jak je spárovat, aby to celé dávalo nějaký smysl. A hlavně si představíme takové ty jednoduché mnemotechnické pomůcky, díky nimž si snad úplně kdokoli dokáže zapamatovat, co je to cuvée, co znamená které cizí slovo a jak prostě neudělat při objednávání chybu."
  },
  {
    "id": "seg-8",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": "Vinný lístek jako mapa a psychologie hosta",
    "startTime": 90.9,
    "endTime": 107.01,
    "duration": 16.11,
    "text": "To je vlastně ten úplně nejčastější problém. Lidé totiž vnímají vinný lístek tak trochu jako, no, jako tabulku v Excelu. Jsou tam prostě nějaká čísla, ročníky, podivné francouzské nebo italské výrazy."
  },
  {
    "id": "seg-9",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 107.41,
    "endTime": 110.35,
    "duration": 2.94,
    "text": "Úplná španělská vesnice pro někoho."
  },
  {
    "id": "seg-10",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 110.75,
    "endTime": 124.76,
    "duration": 14.01,
    "text": "Přesně tak. A mozek má pak takovou přirozenou tendenci sáhnout po tom úplně nejznámějším slově, nebo prostě člověk ukáže někam doprostřed cenové nabídky, aby u stolu nepůsobil hloupě."
  },
  {
    "id": "seg-11",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 125.16,
    "endTime": 130.51,
    "duration": 5.34,
    "text": "Jo, zlatá střední cesta. To znám moc dobře z vlastní zkušenosti."
  },
  {
    "id": "seg-12",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 130.91,
    "endTime": 154.56,
    "duration": 23.66,
    "text": "No vidíš. Přitom ten lístek, to je vlastně mapa. Pokud se na něj člověk podívá trošku analyticky, tak mu odhalí geografické rozdíly, různé přístupy k výrobě a hlavně, a to je klíčové, ukáže mu logickou cestu, po které by se měly chuťové pohárky vydat, aby prostě nebyly v polovině večera úplně otupělé."
  },
  {
    "id": "seg-13",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": "1. Šumivá vína: Pravidlo startu & Vinselekt Michlovský",
    "startTime": 155.36,
    "endTime": 168.22,
    "duration": 12.85,
    "text": "Tak se do té naší mapy pojďme podívat. A začneme hned nahoře. Jsou tam bubliny. Takové to pravidlo, které slýchávám úplně všude, zní: začínáme šumivým vínem."
  },
  {
    "id": "seg-14",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 168.62,
    "endTime": 171.15,
    "duration": 2.53,
    "text": "Ano, to je absolutní základ."
  },
  {
    "id": "seg-15",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 171.55,
    "endTime": 188.95,
    "duration": 17.4,
    "text": "V našem dnešním seznamu tu máme rovnou dvě možnosti. Obě se rozlévají po jedné deci a obě jsou od vinařství Vinselekt Michlovský. Ta první je Šarmat de Vinselekt, to je z odrůdy Pálava, stojí 99 korun a u něj je napsáno extra sek."
  },
  {
    "id": "seg-16",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 189.35,
    "endTime": 190.22,
    "duration": 0.88,
    "text": "Jasně."
  },
  {
    "id": "seg-17",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 190.62,
    "endTime": 215.49,
    "duration": 24.87,
    "text": "Druhou možností je Crémant de Vinselekt. Tady jde o složení z odrůd Pinot a Šardoné, je to za 115 korun s označením extra brut. Ale zajímala by mě jedna věc: proč je vlastně tak strašně důležité začít právě těmi bublinami? Je to jenom nějaká společenská konvence, jakože slavnostní ťuknutí na úvod, nebo je za tím nějaká biologie?"
  },
  {
    "id": "seg-18",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": "Fyziologie bublin & restart chuťových pohárků",
    "startTime": 216.29,
    "endTime": 226.09,
    "duration": 9.8,
    "text": "Je v tom čistá fyziologie. Šumivé víno, respektive oxid uhličitý v něm obsažený, funguje v ústech vlastně úplně mechanicky."
  },
  {
    "id": "seg-19",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 226.49,
    "endTime": 228.43,
    "duration": 1.94,
    "text": "Jakože to tam nějak drhne?"
  },
  {
    "id": "seg-20",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 228.83,
    "endTime": 260.71,
    "duration": 31.87,
    "text": "Přesně. Ty bublinky spolu s tou vyšší kyselinkou, která je pro šumivá vína tak typická, doslova omyjí chuťové pohárky na jazyku. Ony odstraní zbytky jakýchkoli předchozích chutí, odstraní tuky nebo proteiny z jídla. Tím se to patro takzvaně probudí a nastaví na jakousi nultou hodnotu. Kdyby člověk začal hned těžkým plným vínem, jazyk se okamžitě obalí tou jeho strukturou a z dalších vzorků by pak neměl vůbec nic."
  },
  {
    "id": "seg-21",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": "Mnemotechnika: Sólový zpěvák vs. Kapela (Cuvée)",
    "startTime": 261.51,
    "endTime": 270.92,
    "duration": 9.42,
    "text": "Dobře, takže je to takový budíček pro jazyk. Mě tady ale na lístku okamžitě zaujala jedna věc a napadla mě k tomu taková pomůcka."
  },
  {
    "id": "seg-22",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 271.32,
    "endTime": 272.54,
    "duration": 1.22,
    "text": "Sem s ní!"
  },
  {
    "id": "seg-23",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 272.94,
    "endTime": 288.76,
    "duration": 15.82,
    "text": "Máme tu dvě šumivá vína a jedno je z jedné jediné odrůdy, z Pálavy. To je pro mě něco jako sólový zpěvák. Prostě stojí na pódiu sám a veškerá pozornost publika míří jen na jeho specifický, velmi voňavý hlas."
  },
  {
    "id": "seg-24",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 289.16,
    "endTime": 291.61,
    "duration": 2.46,
    "text": "To je moc hezké přirovnání."
  },
  {
    "id": "seg-25",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 292.01,
    "endTime": 309.13,
    "duration": 17.11,
    "text": "Že jo. A to druhé víno je Crémant, což je spojení Pinotu a Šardoné. Tomu se, pokud vím, říká cuvée. Dává to smysl, když si to vlastně představím jako hudební kapelu, kde už se musí ty hlasy a nástroje ladit nějak dohromady?"
  },
  {
    "id": "seg-26",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 309.53,
    "endTime": 326.49,
    "duration": 16.96,
    "text": "Z technického hlediska to funguje naprosto přesně takhle. U toho jednodruhového vína je vinař do jisté míry odkázán na to, co mu v daném roce příroda v té jedné odrůdě prostě nadělila. Odrůda ukazuje svůj charakter, hraje sólo."
  },
  {
    "id": "seg-27",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 326.89,
    "endTime": 329.52,
    "duration": 2.63,
    "text": "Jasně, nemůže se za nic schovat."
  },
  {
    "id": "seg-28",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 329.92,
    "endTime": 345.63,
    "duration": 15.71,
    "text": "Přesně. Zato u toho cuvée, tedy u té tvojí kapely, se z vinaře stává spíš takový dirigent. Například u našeho crémantu vinař vezme Šardoné, které dodá vínu páteř, takové to pevné tělo a strukturu."
  },
  {
    "id": "seg-29",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 346.03,
    "endTime": 348.54,
    "duration": 2.51,
    "text": "Aha, takže základní rytmika."
  },
  {
    "id": "seg-30",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 348.94,
    "endTime": 363.11,
    "duration": 14.17,
    "text": "Dá se to tak říct. A pak přidá Pinot, který tomu naopak dodá jemnost, eleganci a takové ty ovocné tóny. Cílem je vytvořit harmonii, která by z jedné samotné odrůdy nikdy nevznikla."
  },
  {
    "id": "seg-31",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 363.51,
    "endTime": 385.69,
    "duration": 22.18,
    "text": "Tady se vlastně nabízí úplně jednoduchá mnemotechnická pomůcka, se kterou bych ráda přišla. Pokud se člověk podívá na ten lístek a vidí slovo crémant, začíná to na písmeno C, a to se dá rovnou spojit se slovem cuvée, které taky začíná na C. Takže Crémant rovná se Cuvée a to rovná se kapela."
  },
  {
    "id": "seg-32",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 386.09,
    "endTime": 389.1,
    "duration": 3.02,
    "text": "Výborně, to se pamatuje úplně samo."
  },
  {
    "id": "seg-33",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": "Zrádná označení: Extra Brut vs. Extra Sec",
    "startTime": 389.9,
    "endTime": 421.35,
    "duration": 31.44,
    "text": "Ale co mi u těch bublin teda vůbec nedává smysl, jsou ta další označení. U toho Crémantu je napsáno extra brut, to si dokážu vysvětlit docela snadno: brut jako brutálně suché, žádný cukr. Jenže u té sólové Pálavy je napsáno extra sek. A pokud mě paměť neklame, tak slovo sek znamená ve francouzštině suchý. Proč se tedy všude říká, že tohle víno je ta sladší verze, když je tam jasně napsáno suchý? To je přece úplný nesmysl."
  },
  {
    "id": "seg-34",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 421.75,
    "endTime": 424.33,
    "duration": 2.58,
    "text": "Zní to jako absolutní paradox."
  },
  {
    "id": "seg-35",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 424.73,
    "endTime": 430.02,
    "duration": 5.29,
    "text": "A musím říct, že spousta lidí se na tom při objednávání dost spálí."
  },
  {
    "id": "seg-36",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 430.42,
    "endTime": 447.54,
    "duration": 17.12,
    "text": "No nedivím se. Tenhle terminologický chyták má ale takové historické vysvětlení, které sahá vlastně až někam do devatenáctého století. V té době se šumivá vína, hlavně v oblasti Šampaň, pila extrémně sladká."
  },
  {
    "id": "seg-37",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 447.94,
    "endTime": 449.94,
    "duration": 2.0,
    "text": "Jakože se tam sypal cukr?"
  },
  {
    "id": "seg-38",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 450.34,
    "endTime": 466.19,
    "duration": 15.84,
    "text": "Skoro ano. Přidávalo se do nich obrovské množství cukerného sirupu, takzvané dozáže. Dělalo se to proto, aby ta vína vyhovovala tehdejším trhům, zejména třeba ruskému carskému dvoru, ten miloval sladké."
  },
  {
    "id": "seg-39",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 466.59,
    "endTime": 469.94,
    "duration": 3.36,
    "text": "Aha, takže to muselo být sladké jako cumel."
  },
  {
    "id": "seg-40",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 470.34,
    "endTime": 485.2,
    "duration": 14.86,
    "text": "Přesně. No a když se pak začala vyrábět vína, která měla toho cukru o trochu méně, začalo se jim říkat sek, tedy suchá. Protože v tehdejším kontextu to prostě opravdu byla ta sušší varianta."
  },
  {
    "id": "seg-41",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 485.6,
    "endTime": 490.53,
    "duration": 4.92,
    "text": "Počkej, takže to slovo suchý platilo pro lidi před 150 lety."
  },
  {
    "id": "seg-42",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 490.93,
    "endTime": 524.62,
    "duration": 33.69,
    "text": "Ano, přesně tak. Jenže s postupem času se ten vkus lidí měnil a postupně se začala vyžadovat vína ještě sušší a sušší. Termín sek už byl ale zabraný, takže vinaři museli začít vymýšlet nová slova. Přišlo demi-sek, pak ten tvůj zmíněný brut a dneska dokonce existuje extra brut nebo brut natýr, což už je úplně bez přidaného cukru. Takže dnes v našem moderním kontextu označení sek nebo extra sek vlastně znamená poměrně výrazný zbytek cukru."
  },
  {
    "id": "seg-43",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 525.02,
    "endTime": 557.78,
    "duration": 32.76,
    "text": "Aha, takže ta Pálava extra sek na našem lístku bude v chuti působit kulatěji a sladčeji, zatímco ten Crémant extra brut bude prostě nekompromisně suchý až takový řízný. Což tedy znamená, že pokud chce člověk udělat na začátku večera skvělý degustační experiment, objedná si tyhle dvě skleničky hned vedle sebe. Porovná toho aromatického, trochu nasládlého sólistu Pálavu s tou velmi suchou, precizně namíchanou kapelou z Pinotu a Šardoné. Paráda."
  },
  {
    "id": "seg-44",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 558.18,
    "endTime": 560.38,
    "duration": 2.2,
    "text": "Je to ideální srovnání."
  },
  {
    "id": "seg-45",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": "2. Tichá bílá vína: Čechy vs. Morava & Lokální scéna",
    "startTime": 561.18,
    "endTime": 584.24,
    "duration": 23.06,
    "text": "Pojďme se ale po naší mapě posunout dál, a to k tichým bílým vínům. Podle seznamu tu máme lokální produkci: Cuvée bílé od Krause z Čech za 98 korun a Rulandské šedé od vinařství Kolby z Moravy za 95 korun. Takže tu máme opět souboj Čechy versus Morava a opět i souboj kapela versus sólista."
  },
  {
    "id": "seg-46",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 584.64,
    "endTime": 622.32,
    "duration": 37.68,
    "text": "A tady je hodně důležité podotknout, proč vůbec v této fázi degustace zůstáváme doma, na lokální scéně. Středoevropská vína mají totiž díky našemu chladnějšímu klimatu přirozeně vyšší kyselinku, jsou mnohem svěžejší. Kdybychom hned skočili do nějakých těžkých zahraničních vín, byl by to příliš velký skok pro patro. Tady je ale naprosto nutné se u našeho výběru zastavit. Pokud bychom při objednávání udělali chybu v pořadí těchto dvou lokálních vín, mohli bychom si celý ten zážitek úplně zkazit."
  },
  {
    "id": "seg-47",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": "Zbytkový cukr jako chuťové anestetikum",
    "startTime": 623.12,
    "endTime": 669.04,
    "duration": 45.92,
    "text": "A to asi vím proč. Je to kvůli jednomu malému detailu, který je u toho Rulandského šedého na lístku napsaný: je tam uvedeno slovo polosuché. A já bych tady hned nabídla další mnemotechnickou pomůcku: když se podívám na Rulandské šedé od Kolbyho, najdu ho pod písmenem P. A je to také jediné bílé víno na celém tom našem seznamu, u kterého je jasně napsáno P jako polosuché. A to přece znamená, že si ho musím nechat v tom degustačním pořadí až na později, po tom suchém. Jenže proč to tak vlastně fyziologicky je? Zmiňoval jsi, že by nám to zkazilo zážitek. Jak může trocha zbytkového cukru ve víně úplně zničit chuť toho dalšího vína?"
  },
  {
    "id": "seg-48",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 669.44,
    "endTime": 718.65,
    "duration": 49.21,
    "text": "Ono je to tím, že ten zbytek cukru ve víně nefunguje jen jako nějaká chuť. On funguje na jazyku jako takové chuťové anestetikum. Když se člověk napije polosuchého vína, tak ty receptory pro vnímání sladkosti se nasytí a mozek si okamžitě posune referenční bod. Nastaví si to zkrátka tak, že toto je nová normální hladina sladkosti. No a pokud hned v zápětí ochutnáme to suché české cuvée, kde není téměř žádný cukr, náš mozek ho tam začne podvědomě hledat, ale nenajde ho. Místo cukru detekuje pouze kyselinu a alkohol. To objektivně dobré, velmi kvalitní suché víno se nám pak bude zdát strašně ploché, bude působit agresivně, možná až trpce a drsně."
  },
  {
    "id": "seg-49",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 719.05,
    "endTime": 733.83,
    "duration": 14.78,
    "text": "Vlastně to zní úplně stejně jako když sníte kousek sladké čokolády a hned potom se napijete obyčejného pomerančového džusu: ten se najednou zdá úplně neskutečně kyselý, ačkoliv normálně by chutnal prostě dobře."
  },
  {
    "id": "seg-50",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 734.23,
    "endTime": 736.97,
    "duration": 2.74,
    "text": "Zcela přesný biologický princip."
  },
  {
    "id": "seg-51",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 737.37,
    "endTime": 768.48,
    "duration": 31.11,
    "text": "A právě proto je v té naší mapě naprosto nezbytné začít suchým českým cuvée. Tam člověk plně ocení tu souhru odrůd, prozkoumá tu čistou linii bez toho, aby to bylo maskované cukrem. A teprve potom by se mělo přejít k tomu polosuchému Rulandskému šedému z Moravy, kde ten malý zbytek cukru zafunguje přesně opačně – ne jako anestetikum, ale jako takové velmi příjemné pohlazení, které krásně zaoblí celý ten náš středoevropský blok."
  },
  {
    "id": "seg-52",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 768.88,
    "endTime": 771.16,
    "duration": 2.28,
    "text": "To dává perfektní smysl."
  },
  {
    "id": "seg-53",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": "3. Zahraniční bílá vína: Rakousko vs. Kalifornie",
    "startTime": 771.96,
    "endTime": 821.96,
    "duration": 50.0,
    "text": "Takže domácí scénu máme teď zmapovanou a lístek nás posílá rovnou za hranice. Máme tu dvě zahraniční bílá vína: z Rakouska je to Veltlínské zelené, tedy Gríner Veltlíner, od vinařství Hauerigrísl za 109 korun a hned pod ním se tyčí Šardoné od značky Edjulejšn z Kalifornie za 125 korun. Zase si na to můžeme vytvořit lehkou pomůcku: Edjulejšn začíná na A jako Amerika, je to nejdražší bílé víno z výběru. Ale upřímně, neplatí člověk v té restauraci těch 25 korun navíc oproti tomu z Rakouska jenom za to, že se ty barely musely vézt nějakou lodí přes půl planety? Proč by to kalifornské víno mělo být chuťově tak zásadně jiné nebo prémiovější než to rakouské?"
  },
  {
    "id": "seg-54",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": "Terroir: Alpské noci vs. Kalifornské slunce",
    "startTime": 822.76,
    "endTime": 860.79,
    "duration": 38.03,
    "text": "Tak je samozřejmě pochopitelné, že logistika hraje v té cenotvorbě určitou roli. Lodní doprava není zadarmo. Ale my se tady v chuti bavíme o naprosto propastném rozdílu v takzvaném terroiru, tedy vlivu toho místního prostředí. Jde hlavně o vliv tepla. Ten rakouský veltlín pochází z prostředí s chladnějšími nocemi, což znamená, že réva sice přes den sbírá slunce a teplo, ale v noci si odpočine. Kyselina v hroznech se nestihne spálit a výsledkem je víno, které je krásně jiskrné, svěží."
  },
  {
    "id": "seg-55",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 861.19,
    "endTime": 869.49,
    "duration": 8.31,
    "text": "Mně to evokuje nějakou ranní alpskou túru: zelené jablko, troška bílého pepře, taková ta ohromná ranní svěžest."
  },
  {
    "id": "seg-56",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 869.89,
    "endTime": 918.88,
    "duration": 48.98,
    "text": "To je výborná asociace. Jenže pak je tu ta Amerika, Kalifornie. Tam do těch hroznů buší slunce s mnohem, mnohem větší intenzitou. Proces fotosyntézy běží na plné obrátky a v těch hroznech se akumuluje obrovské množství přírodního cukru. Když potom vinař ve sklepě nechá kvasinky, aby tento cukr zkonzumovaly a přeměnily ho na alkohol, vznikne víno s daleko vyšším objemem alkoholu. Tento vyšší alkohol, často ještě spojený s vyšším obsahem glycerolu, pak úplně mění viskozitu té tekutiny. Kdyby člověk to kalifornské Šardoné zakroužil ve skleničce, všimne si takzvaných slz, které stékají po skle mnohem, mnohem pomaleji než u toho veltlínu."
  },
  {
    "id": "seg-57",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 919.28,
    "endTime": 936.59,
    "duration": 17.31,
    "text": "Takže se ten kalifornský žár vlastně fyzicky přetransformuje do toho, že to víno i v ústech působí takovým těžším, línějším a hutnějším dojmem. Už žádná alpská túra, ale spíš takové to hodně líné odpoledne někde na rozpálené pláži."
  },
  {
    "id": "seg-58",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 936.99,
    "endTime": 973.86,
    "duration": 36.86,
    "text": "Přesně tohle je ten dojem. Kalifornská Šardoné mají navíc často tóny zralého tropického ovoce, ananasu a někdy i másla nebo vanilky, hlavně pokud se nechají zrát v dubových sudech. A to je přesně ten hlavní důvod, proč toto americké víno prostě musí v degustaci následovat až po tom rakouském veltlínu. Pokud totiž platí to naše základní pravidlo, že se pije od lehčího k těžšímu, tak mohutné viskózní kalifornské Šardoné by úplně jakékoli svěží rakouské víno naprosto chuťově převálcovalo."
  },
  {
    "id": "seg-59",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": "4. Chuťový most: Růžové víno k červeným",
    "startTime": 974.66,
    "endTime": 1002.72,
    "duration": 28.07,
    "text": "Dobře, jsme tedy v bodě, kdy máme v ústech velmi mohutné kalifornské Šardoné, naše patro je teď plné hodně výrazných chuťových vjemů a teď tu podle lístku stojíme před docela zásadním logistickým problémem: jak se na té naší mapě pro Bůh přesuneme k červeným vínům? Kdyby si člověk hned po té kalifornské máslové bombě objednal nějaké těžké červené, asi by to patro zažilo docela šok, ne?"
  },
  {
    "id": "seg-60",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 1003.12,
    "endTime": 1042.1,
    "duration": 38.97,
    "text": "Byl by to obrovský náraz. Ty vjemy by se na jazyku začaly doslova prát: kyseliny s tříslovinami, plnost s plností. Profesionálové v takovou chvíli nikdy nepokračují rovnou dál. Používají něco, čemu se říká chuťový most. A tímhle mostem nemůže být v naší nabídce nic jiného než to růžové víno. Ono to patro jednak krásně zchladí a osvěží, vlastně spláchne tu hutnost toho bílého, ale zároveň nás svou lehkou strukturou červeného ovoce mentálně i chuťově připravuje na to, co přijde dál v těch červených odrůdách."
  },
  {
    "id": "seg-61",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": "Dvě tváře Modrého Portugalu: Rosé vs. Červené z Kolby",
    "startTime": 1042.9,
    "endTime": 1096.82,
    "duration": 53.92,
    "text": "A tím se dostáváme k části lístku, která mě osobně totálně fascinuje, protože tohle se prostě jen tak nevidí: máme tu odrůdu Modrý Portugal od vinařství Kolby a on je na tom lístku napsaný dvakrát hned pod sebou! Jednou je tam Modrý Portugal rosé za 95 korun a hned na dalším řádku Modrý Portugal červené taky za 95 korun. Zní to skoro jako nějaký vtip, jako by to byla chyba tisku. To je jako mít na place jednoho herce, který ale hraje ve stejném filmu dvě úplně různé role: v jedné scéně hraje lehkého svěžího romantika a v další si oblékne temný kabát a hraje vážné hluboké drama. Ale pořád je to ta samá modrá kulička hroznu! Jak z ní vůbec může vzniknout to svěží růžové a hned v zápětí to hluboké červené víno?"
  },
  {
    "id": "seg-62",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 1097.22,
    "endTime": 1143.58,
    "duration": 46.37,
    "text": "Tahle dualita, ta je pro spoustu lidí vlastně velkou záhadou. Lidé si totiž často myslí, že modrý hrozen má uvnitř modrou šťávu. Jenže ve skutečnosti je dužina drtivé většiny modrých odrůd úplně bezbarvá, je průhledná jako u bílých hroznů. Veškeré to kouzlo, ta nádherná červená barva a spolu s ní i fenolické látky, kterým se říká třísloviny, se skrývají výhradně ve slupkách těch hroznů. To, jestli vinař z Modrého Portugalu vyrobí rosé nebo naopak to hutné červené, závisí jen na jednom jediném rozhodnutí: jak dlouho nechá tyto tmavé slupky máčet, odborně řečeno macerovat, v té bezbarvé šťávě."
  },
  {
    "id": "seg-63",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 1143.98,
    "endTime": 1149.54,
    "duration": 5.56,
    "text": "To znamená, že u toho roséčka se to tam ohřálo jenom na takovou krátkou chvíli."
  },
  {
    "id": "seg-64",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 1149.94,
    "endTime": 1197.25,
    "duration": 47.3,
    "text": "Zjednodušeně řečeno ano. Ty slupky se nechají v kontaktu se šťávou opravdu jenom chvilku, většinou jen pár hodin. Ta šťáva si z nich vezme jen takový ten lehký nádech růžové barvy a jemné tóny, třeba jahod nebo malin, ale nestihne do sebe natáhnout ty hrubé třísloviny, které by vínu daly takovou tu drsnost a svíravost. Proto vzniká víno, které se podává podchlazené a pije se podobně jako víno bílé. Naopak u toho červeného Modrého Portugalu nechá vinař ty slupky macerovat v tom rmutu dlouhé dny i týdny. Během toho se postupně vyluhuje velmi hluboká barva a do vína se dostane ta typická struktura, která nám pak v ústech lehce stahuje patro."
  },
  {
    "id": "seg-65",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": null,
    "startTime": 1197.65,
    "endTime": 1218.65,
    "duration": 21.01,
    "text": "To je ale fantastická příležitost pro hosta! Pokud se chce kdokoli na vlastní patro přesvědčit o tom, co dokáže jenom prostý čas a slupka z hroznu, stačí mu objednat si tyhle dvě skleničky Modrého Portugalu prostě vedle sebe. To je vlastně obrovský vzdělávací tah přímo v praxi tam u toho stolu."
  },
  {
    "id": "seg-66",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 1219.05,
    "endTime": 1221.92,
    "duration": 2.86,
    "text": "Rozhodně, je to skvělý zážitek."
  },
  {
    "id": "seg-67",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": "5. Červená vína: Sólista Portugal vs. Kapela Cuvée Krause",
    "startTime": 1222.72,
    "endTime": 1239.58,
    "duration": 16.87,
    "text": "Růžový most nás tedy bezpečně převedl do toho červeného světa a po tom našem sólovém červeném Portugalu z Moravy tu vidíme další položku: Cuvée červené od Krause z Čech za 98 korun. Takže už zase hraje ta naše česká kapela."
  },
  {
    "id": "seg-68",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 1239.98,
    "endTime": 1285.83,
    "duration": 45.85,
    "text": "Přesně se nám tady vlastně opakuje ten vzorec od bílých vín, ale tentokrát v tom červeném spektru. Náš domácí sólista z Moravy nám předvedl charakter jedné jediné modré odrůdy a teď přichází na řadu cuvée, kde se odrůdy spojují, aby vytvořily plnější tělo. V červených vínech se ty odrůdy velmi často doplňují tak, že jedna dodá intenzivní barvu, druhá přidá ovocnost a třetí zase nějakou kořenitost nebo schopnost dobře zrát v sudu. Posouváme se tedy opět na o něco vyšší příčku v té celkové intenzitě. A tohle všechno, tohle pečlivé budování celého večera musí logicky vyústit do nějakého velkého finále."
  },
  {
    "id": "seg-69",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": "6. Velké finále: Kalifornský Pinot Noir (Adulation)",
    "startTime": 1286.63,
    "endTime": 1320.96,
    "duration": 34.32,
    "text": "A to finále, jak koukám, je tady na lístku zastoupeno opět Amerikou, úplně stejně jako na konci těch bílých vín: máme tu Pinot Noir neboli Rulandské modré od značky Edjulejšn z Kalifornie. Zase: A jako Amerika. A opět vidíme, že u něj svítí ta vůbec nejvyšší cena na celém lístku: 125 korun. Kolečko se nám krásně uzavírá. Ale co od takového závěru vlastně můžeme čekat? Bude to zase ta máslová bomba, jakou jsme viděli u toho amerického Šardoné?"
  },
  {
    "id": "seg-70",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 1321.36,
    "endTime": 1385.98,
    "duration": 64.63,
    "text": "Máslová asi úplně ne, ale bude to naprosto majestátní tečka. Pinot Noir je totiž celosvětově vnímán jako jedna z nejprestižnějších a úplně nejúšlechtilejších červených odrůd a je mimochodem velmi citlivý na to, kde se pěstuje. Pokud se pěstuje v Kalifornii, opět tam bude hrát hlavní roli ta štědrá porce tepla, kterou ty hrozny do sebe přejmou. Na rozdíl třeba od těch lehčích evropských Pinotů, které často hrají na notu takových brusinek a vlhkého podhoubí, ten kalifornský přinese něco úplně jiného: zralé třešně, ostružiny, dost možná vanilku a sladké koření. Třísloviny budou velmi kulaté a hutné. Jde o víno s tak dlouhým, intenzivním dozvukem na patře, že kdybychom po něm chtěli ochutnat vlastně cokoli dalšího z tohoto lístku, nedávalo by to absolutně žádný smysl. Kalifornský Pinot Noir prostě musí být ze své podstaty to poslední, co se ten večer vypije."
  },
  {
    "id": "seg-71",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": "Rekapitulace celé degustační mapy v 6 krocích",
    "startTime": 1386.78,
    "endTime": 1459.52,
    "duration": 72.74,
    "text": "Pojďme si tedy tu naši celou mapu rychle zrekapitulovat, protože to, co na začátku vypadalo jen jako taková nepřehledná tabulka s cenami, se nakonec ukázalo jako dokonale logický příběh. Zjistili jsme, že bubliny neslouží jenom na oslavu, ale fyzicky nám čistí patro, protože ten oxid uhličitý funguje prostě jako takový malý kartáč. Pak jsme si představili, že jednodruhové víno je jako sólový zpěvák, zatímco slovo na C, tedy Cuvée a Crémant, to je kapela, kde odrůdy hrají hezky společně. Naučili jsme se, že P znamená polosuché a musí se bezpodmínečně pít až po suchém, protože by nám ten cukr znecitlivěl jazyk. Dále jsme pochopili, že za americká vína pod písmenem A se sice platí víc, ale zároveň to znamená mnohem mohutnější tělo zrozené v horkém kalifornském slunci. Pomocí toho růžového mostu, kde si jeden modrý hrozen střihl dvě úplně různé role, jsme se přenesli do červených vín a skončili tím velkolepým Pinotem. Kdokoli tohle pochopí, nepotřebuje k objednávání snad už žádný sommeliérský diplom."
  },
  {
    "id": "seg-72",
    "speaker": "host2",
    "speakerName": "Hlavní sommeliér",
    "chapterTitle": null,
    "startTime": 1459.92,
    "endTime": 1484.83,
    "duration": 24.91,
    "text": "Je to naprosto krásná ukázka toho, že vinný lístek v sobě vždycky skrývá hlubší příběhy. A pokud člověk ví, jak ty příběhy řadit za sebou, aby plně respektovaly fyziologii našich úst, tak se ten jeho zážitek prostě zmnohonásobí. Není to opravdu jen o tom, jaké víno si objednáme, ale kdy a v jakém přesném kontextu ho pijeme."
  },
  {
    "id": "seg-73",
    "speaker": "host1",
    "speakerName": "Sommeliérka (průvodkyně)",
    "chapterTitle": "Závěrečná myšlenka: Psychologie ceny vs. slepá degustace",
    "startTime": 1485.63,
    "endTime": 1574.02,
    "duration": 88.39,
    "text": "To je hrozně hezky řečeno. Ale přesto... přesto je tu ještě jedna poslední věc, která mi u toho lístku pořád tak trochu nedá spát. Je to taková poslední, řekněme provokativní myšlenka na závěr, se kterou bych ráda každého ponechala: Když se totiž na ta čísla pozorně podíváme, tak vidíme, že všechny ty naše domácí láhve – ať už bílé, růžové nebo červené, sólisté nebo kapely – všechny se cenově drží někde od 95 do 98 korun. A pak jsou tu obě vína z Kalifornie, z té obrovské dálky: jedno bílé Šardoné, jedno červené Pinot Noir. Obě dvě mají naprosto přesnou stejnou cenovku: 125 korun. A já si říkám, do jaké míry tahle vizuální informace – to vytištěné číslo na papíře a to vědomí, že je to dovezené až z daleké Ameriky – vlastně psychologicky formuje naši chuť? Změní se nám vnímání ještě dřív, než si ze skleničky vůbec usrkneme? Pokud bychom nevěděli, odkud to víno je a kolik přesně stojí, dokázali bychom poslepu vůbec určit, která z těch skleniček je ta o 30 korun dražší? Nebo nám tu pomyslnou hierarchii hodnot a kvality v mozku úplně nevědomky nastavuje jen ten obyčejný potištěný papír? To už by byl experiment pro nějakou další, striktně slepou degustaci."
  }
]
};
