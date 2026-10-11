import os
import subprocess
import json
import tempfile
import math

dialogue_data = [
    # 00:00 Úvod: Proč dražší neznamená lepší
    {"speaker": "f", "chapter": "Úvod: Proč dražší neznamená lepší", "text": "Většina lidí má asi za to, že prostě nejdražší víno na lístku v restauraci automaticky znamená i ten nejlepší chuťový zážitek."},
    {"speaker": "m", "text": "No, to je vlastně hrozně častý omyl."},
    {"speaker": "f", "text": "Že jo. A co když je to ale ve skutečnosti trochu jinak? Co když ten úplně největší aha moment celého večera může přinést, já nevím, obyčejná sklenička za 95 korun, ale jenom tehdy, pokud se vypije přesně ve správný okamžik a ve správném srovnání s jinou skleničkou?"},
    {"speaker": "m", "text": "Jasně, záleží na tom kontextu."},
    {"speaker": "f", "text": "Přesně. Takže náš dnešní rozbor se zaměří na jednu jedinou věc. Dostali jsme totiž do ruky naprosto konkrétní nabídku deseti vín, která se v restauraci Fuze rozlévají takzvaně po skleničce. A cíl je naprosto jasný: chceme tenhle seznam prostě dekódovat."},
    {"speaker": "m", "text": "Ukázat si, co se za těmi názvy vlastně skrývá."},
    {"speaker": "f", "text": "No jasně. Chceme z obyčejného ceníku vytvořit dokonalého průvodce. Ukážeme si, jak z těch deseti položek sestavit ideální pořadí degustace, jak je spárovat, aby to celé dávalo nějaký smysl. A hlavně si představíme takové ty jednoduché mnemotechnické pomůcky, díky nimž si snad úplně kdokoli dokáže zapamatovat, co je to cuvée, co znamená které cizí slovo a jak prostě neudělat při objednávání chybu."},
    {"speaker": "m", "chapter": "Vinný lístek jako mapa a psychologie hosta", "text": "To je vlastně ten úplně nejčastější problém. Lidé totiž vnímají vinný lístek tak trochu jako, no, jako tabulku v Excelu. Jsou tam prostě nějaká čísla, ročníky, podivné francouzské nebo italské výrazy."},
    {"speaker": "f", "text": "Úplná španělská vesnice pro někoho."},
    {"speaker": "m", "text": "Přesně tak. A mozek má pak takovou přirozenou tendenci sáhnout po tom úplně nejznámějším slově, nebo prostě člověk ukáže někam doprostřed cenové nabídky, aby u stolu nepůsobil hloupě."},
    {"speaker": "f", "text": "Jo, zlatá střední cesta. To znám moc dobře z vlastní zkušenosti."},
    {"speaker": "m", "text": "No vidíš. Přitom ten lístek, to je vlastně mapa. Pokud se na něj člověk podívá trošku analyticky, tak mu odhalí geografické rozdíly, různé přístupy k výrobě a hlavně, a to je klíčové, ukáže mu logickou cestu, po které by se měly chuťové pohárky vydat, aby prostě nebyly v polovině večera úplně otupělé."},
    {"speaker": "f", "chapter": "1. Šumivá vína: Pravidlo startu & Vinselekt Michlovský", "text": "Tak se do té naší mapy pojďme podívat. A začneme hned nahoře. Jsou tam bubliny. Takové to pravidlo, které slýchávám úplně všude, zní: začínáme šumivým vínem."},
    {"speaker": "m", "text": "Ano, to je absolutní základ."},
    {"speaker": "f", "text": "V našem dnešním seznamu tu máme rovnou dvě možnosti. Obě se rozlévají po jedné deci a obě jsou od vinařství Vinselekt Michlovský. Ta první je Šarmat de Vinselekt, to je z odrůdy Pálava, stojí 99 korun a u něj je napsáno extra sek."},
    {"speaker": "m", "text": "Jasně."},
    {"speaker": "f", "text": "Druhou možností je Crémant de Vinselekt. Tady jde o složení z odrůd Pinot a Šardoné, je to za 115 korun s označením extra brut. Ale zajímala by mě jedna věc: proč je vlastně tak strašně důležité začít právě těmi bublinami? Je to jenom nějaká společenská konvence, jakože slavnostní ťuknutí na úvod, nebo je za tím nějaká biologie?"},
    {"speaker": "m", "chapter": "Fyziologie bublin & restart chuťových pohárků", "text": "Je v tom čistá fyziologie. Šumivé víno, respektive oxid uhličitý v něm obsažený, funguje v ústech vlastně úplně mechanicky."},
    {"speaker": "f", "text": "Jakože to tam nějak drhne?"},
    {"speaker": "m", "text": "Přesně. Ty bublinky spolu s tou vyšší kyselinkou, která je pro šumivá vína tak typická, doslova omyjí chuťové pohárky na jazyku. Ony odstraní zbytky jakýchkoli předchozích chutí, odstraní tuky nebo proteiny z jídla. Tím se to patro takzvaně probudí a nastaví na jakousi nultou hodnotu. Kdyby člověk začal hned těžkým plným vínem, jazyk se okamžitě obalí tou jeho strukturou a z dalších vzorků by pak neměl vůbec nic."},
    {"speaker": "f", "chapter": "Mnemotechnika: Sólový zpěvák vs. Kapela (Cuvée)", "text": "Dobře, takže je to takový budíček pro jazyk. Mě tady ale na lístku okamžitě zaujala jedna věc a napadla mě k tomu taková pomůcka."},
    {"speaker": "m", "text": "Sem s ní!"},
    {"speaker": "f", "text": "Máme tu dvě šumivá vína a jedno je z jedné jediné odrůdy, z Pálavy. To je pro mě něco jako sólový zpěvák. Prostě stojí na pódiu sám a veškerá pozornost publika míří jen na jeho specifický, velmi voňavý hlas."},
    {"speaker": "m", "text": "To je moc hezké přirovnání."},
    {"speaker": "f", "text": "Že jo. A to druhé víno je Crémant, což je spojení Pinotu a Šardoné. Tomu se, pokud vím, říká cuvée. Dává to smysl, když si to vlastně představím jako hudební kapelu, kde už se musí ty hlasy a nástroje ladit nějak dohromady?"},
    {"speaker": "m", "text": "Z technického hlediska to funguje naprosto přesně takhle. U toho jednodruhového vína je vinař do jisté míry odkázán na to, co mu v daném roce příroda v té jedné odrůdě prostě nadělila. Odrůda ukazuje svůj charakter, hraje sólo."},
    {"speaker": "f", "text": "Jasně, nemůže se za nic schovat."},
    {"speaker": "m", "text": "Přesně. Zato u toho cuvée, tedy u té tvojí kapely, se z vinaře stává spíš takový dirigent. Například u našeho crémantu vinař vezme Šardoné, které dodá vínu páteř, takové to pevné tělo a strukturu."},
    {"speaker": "f", "text": "Aha, takže základní rytmika."},
    {"speaker": "m", "text": "Dá se to tak říct. A pak přidá Pinot, který tomu naopak dodá jemnost, eleganci a takové ty ovocné tóny. Cílem je vytvořit harmonii, která by z jedné samotné odrůdy nikdy nevznikla."},
    {"speaker": "f", "text": "Tady se vlastně nabízí úplně jednoduchá mnemotechnická pomůcka, se kterou bych ráda přišla. Pokud se člověk podívá na ten lístek a vidí slovo crémant, začíná to na písmeno C, a to se dá rovnou spojit se slovem cuvée, které taky začíná na C. Takže Crémant rovná se Cuvée a to rovná se kapela."},
    {"speaker": "m", "text": "Výborně, to se pamatuje úplně samo."},
    {"speaker": "f", "chapter": "Zrádná označení: Extra Brut vs. Extra Sec", "text": "Ale co mi u těch bublin teda vůbec nedává smysl, jsou ta další označení. U toho Crémantu je napsáno extra brut, to si dokážu vysvětlit docela snadno: brut jako brutálně suché, žádný cukr. Jenže u té sólové Pálavy je napsáno extra sek. A pokud mě paměť neklame, tak slovo sek znamená ve francouzštině suchý. Proč se tedy všude říká, že tohle víno je ta sladší verze, když je tam jasně napsáno suchý? To je přece úplný nesmysl."},
    {"speaker": "m", "text": "Zní to jako absolutní paradox."},
    {"speaker": "f", "text": "A musím říct, že spousta lidí se na tom při objednávání dost spálí."},
    {"speaker": "m", "text": "No nedivím se. Tenhle terminologický chyták má ale takové historické vysvětlení, které sahá vlastně až někam do devatenáctého století. V té době se šumivá vína, hlavně v oblasti Šampaň, pila extrémně sladká."},
    {"speaker": "f", "text": "Jakože se tam sypal cukr?"},
    {"speaker": "m", "text": "Skoro ano. Přidávalo se do nich obrovské množství cukerného sirupu, takzvané dozáže. Dělalo se to proto, aby ta vína vyhovovala tehdejším trhům, zejména třeba ruskému carskému dvoru, ten miloval sladké."},
    {"speaker": "f", "text": "Aha, takže to muselo být sladké jako cumel."},
    {"speaker": "m", "text": "Přesně. No a když se pak začala vyrábět vína, která měla toho cukru o trochu méně, začalo se jim říkat sek, tedy suchá. Protože v tehdejším kontextu to prostě opravdu byla ta sušší varianta."},
    {"speaker": "f", "text": "Počkej, takže to slovo suchý platilo pro lidi před 150 lety."},
    {"speaker": "m", "text": "Ano, přesně tak. Jenže s postupem času se ten vkus lidí měnil a postupně se začala vyžadovat vína ještě sušší a sušší. Termín sek už byl ale zabraný, takže vinaři museli začít vymýšlet nová slova. Přišlo demi-sek, pak ten tvůj zmíněný brut a dneska dokonce existuje extra brut nebo brut natýr, což už je úplně bez přidaného cukru. Takže dnes v našem moderním kontextu označení sek nebo extra sek vlastně znamená poměrně výrazný zbytek cukru."},
    {"speaker": "f", "text": "Aha, takže ta Pálava extra sek na našem lístku bude v chuti působit kulatěji a sladčeji, zatímco ten Crémant extra brut bude prostě nekompromisně suchý až takový řízný. Což tedy znamená, že pokud chce člověk udělat na začátku večera skvělý degustační experiment, objedná si tyhle dvě skleničky hned vedle sebe. Porovná toho aromatického, trochu nasládlého sólistu Pálavu s tou velmi suchou, precizně namíchanou kapelou z Pinotu a Šardoné. Paráda."},
    {"speaker": "m", "text": "Je to ideální srovnání."},
    {"speaker": "f", "chapter": "2. Tichá bílá vína: Čechy vs. Morava & Lokální scéna", "text": "Pojďme se ale po naší mapě posunout dál, a to k tichým bílým vínům. Podle seznamu tu máme lokální produkci: Cuvée bílé od Krause z Čech za 98 korun a Rulandské šedé od vinařství Kolby z Moravy za 95 korun. Takže tu máme opět souboj Čechy versus Morava a opět i souboj kapela versus sólista."},
    {"speaker": "m", "text": "A tady je hodně důležité podotknout, proč vůbec v této fázi degustace zůstáváme doma, na lokální scéně. Středoevropská vína mají totiž díky našemu chladnějšímu klimatu přirozeně vyšší kyselinku, jsou mnohem svěžejší. Kdybychom hned skočili do nějakých těžkých zahraničních vín, byl by to příliš velký skok pro patro. Tady je ale naprosto nutné se u našeho výběru zastavit. Pokud bychom při objednávání udělali chybu v pořadí těchto dvou lokálních vín, mohli bychom si celý ten zážitek úplně zkazit."},
    {"speaker": "f", "chapter": "Zbytkový cukr jako chuťové anestetikum", "text": "A to asi vím proč. Je to kvůli jednomu malému detailu, který je u toho Rulandského šedého na lístku napsaný: je tam uvedeno slovo polosuché. A já bych tady hned nabídla další mnemotechnickou pomůcku: když se podívám na Rulandské šedé od Kolbyho, najdu ho pod písmenem P. A je to také jediné bílé víno na celém tom našem seznamu, u kterého je jasně napsáno P jako polosuché. A to přece znamená, že si ho musím nechat v tom degustačním pořadí až na později, po tom suchém. Jenže proč to tak vlastně fyziologicky je? Zmiňoval jsi, že by nám to zkazilo zážitek. Jak může trocha zbytkového cukru ve víně úplně zničit chuť toho dalšího vína?"},
    {"speaker": "m", "text": "Ono je to tím, že ten zbytek cukru ve víně nefunguje jen jako nějaká chuť. On funguje na jazyku jako takové chuťové anestetikum. Když se člověk napije polosuchého vína, tak ty receptory pro vnímání sladkosti se nasytí a mozek si okamžitě posune referenční bod. Nastaví si to zkrátka tak, že toto je nová normální hladina sladkosti. No a pokud hned v zápětí ochutnáme to suché české cuvée, kde není téměř žádný cukr, náš mozek ho tam začne podvědomě hledat, ale nenajde ho. Místo cukru detekuje pouze kyselinu a alkohol. To objektivně dobré, velmi kvalitní suché víno se nám pak bude zdát strašně ploché, bude působit agresivně, možná až trpce a drsně."},
    {"speaker": "f", "text": "Vlastně to zní úplně stejně jako když sníte kousek sladké čokolády a hned potom se napijete obyčejného pomerančového džusu: ten se najednou zdá úplně neskutečně kyselý, ačkoliv normálně by chutnal prostě dobře."},
    {"speaker": "m", "text": "Zcela přesný biologický princip."},
    {"speaker": "f", "text": "A právě proto je v té naší mapě naprosto nezbytné začít suchým českým cuvée. Tam člověk plně ocení tu souhru odrůd, prozkoumá tu čistou linii bez toho, aby to bylo maskované cukrem. A teprve potom by se mělo přejít k tomu polosuchému Rulandskému šedému z Moravy, kde ten malý zbytek cukru zafunguje přesně opačně – ne jako anestetikum, ale jako takové velmi příjemné pohlazení, které krásně zaoblí celý ten náš středoevropský blok."},
    {"speaker": "m", "text": "To dává perfektní smysl."},
    {"speaker": "f", "chapter": "3. Zahraniční bílá vína: Rakousko vs. Kalifornie", "text": "Takže domácí scénu máme teď zmapovanou a lístek nás posílá rovnou za hranice. Máme tu dvě zahraniční bílá vína: z Rakouska je to Veltlínské zelené, tedy Gríner Veltlíner, od vinařství Hauerigrísl za 109 korun a hned pod ním se tyčí Šardoné od značky Edjulejšn z Kalifornie za 125 korun. Zase si na to můžeme vytvořit lehkou pomůcku: Edjulejšn začíná na A jako Amerika, je to nejdražší bílé víno z výběru. Ale upřímně, neplatí člověk v té restauraci těch 25 korun navíc oproti tomu z Rakouska jenom za to, že se ty barely musely vézt nějakou lodí přes půl planety? Proč by to kalifornské víno mělo být chuťově tak zásadně jiné nebo prémiovější než to rakouské?"},
    {"speaker": "m", "chapter": "Terroir: Alpské noci vs. Kalifornské slunce", "text": "Tak je samozřejmě pochopitelné, že logistika hraje v té cenotvorbě určitou roli. Lodní doprava není zadarmo. Ale my se tady v chuti bavíme o naprosto propastném rozdílu v takzvaném terroiru, tedy vlivu toho místního prostředí. Jde hlavně o vliv tepla. Ten rakouský veltlín pochází z prostředí s chladnějšími nocemi, což znamená, že réva sice přes den sbírá slunce a teplo, ale v noci si odpočine. Kyselina v hroznech se nestihne spálit a výsledkem je víno, které je krásně jiskrné, svěží."},
    {"speaker": "f", "text": "Mně to evokuje nějakou ranní alpskou túru: zelené jablko, troška bílého pepře, taková ta ohromná ranní svěžest."},
    {"speaker": "m", "text": "To je výborná asociace. Jenže pak je tu ta Amerika, Kalifornie. Tam do těch hroznů buší slunce s mnohem, mnohem větší intenzitou. Proces fotosyntézy běží na plné obrátky a v těch hroznech se akumuluje obrovské množství přírodního cukru. Když potom vinař ve sklepě nechá kvasinky, aby tento cukr zkonzumovaly a přeměnily ho na alkohol, vznikne víno s daleko vyšším objemem alkoholu. Tento vyšší alkohol, často ještě spojený s vyšším obsahem glycerolu, pak úplně mění viskozitu té tekutiny. Kdyby člověk to kalifornské Šardoné zakroužil ve skleničce, všimne si takzvaných slz, které stékají po skle mnohem, mnohem pomaleji než u toho veltlínu."},
    {"speaker": "f", "text": "Takže se ten kalifornský žár vlastně fyzicky přetransformuje do toho, že to víno i v ústech působí takovým těžším, línějším a hutnějším dojmem. Už žádná alpská túra, ale spíš takové to hodně líné odpoledne někde na rozpálené pláži."},
    {"speaker": "m", "text": "Přesně tohle je ten dojem. Kalifornská Šardoné mají navíc často tóny zralého tropického ovoce, ananasu a někdy i másla nebo vanilky, hlavně pokud se nechají zrát v dubových sudech. A to je přesně ten hlavní důvod, proč toto americké víno prostě musí v degustaci následovat až po tom rakouském veltlínu. Pokud totiž platí to naše základní pravidlo, že se pije od lehčího k těžšímu, tak mohutné viskózní kalifornské Šardoné by úplně jakékoli svěží rakouské víno naprosto chuťově převálcovalo."},
    {"speaker": "f", "chapter": "4. Chuťový most: Růžové víno k červeným", "text": "Dobře, jsme tedy v bodě, kdy máme v ústech velmi mohutné kalifornské Šardoné, naše patro je teď plné hodně výrazných chuťových vjemů a teď tu podle lístku stojíme před docela zásadním logistickým problémem: jak se na té naší mapě pro Bůh přesuneme k červeným vínům? Kdyby si člověk hned po té kalifornské máslové bombě objednal nějaké těžké červené, asi by to patro zažilo docela šok, ne?"},
    {"speaker": "m", "text": "Byl by to obrovský náraz. Ty vjemy by se na jazyku začaly doslova prát: kyseliny s tříslovinami, plnost s plností. Profesionálové v takovou chvíli nikdy nepokračují rovnou dál. Používají něco, čemu se říká chuťový most. A tímhle mostem nemůže být v naší nabídce nic jiného než to růžové víno. Ono to patro jednak krásně zchladí a osvěží, vlastně spláchne tu hutnost toho bílého, ale zároveň nás svou lehkou strukturou červeného ovoce mentálně i chuťově připravuje na to, co přijde dál v těch červených odrůdách."},
    {"speaker": "f", "chapter": "Dvě tváře Modrého Portugalu: Rosé vs. Červené z Kolby", "text": "A tím se dostáváme k části lístku, která mě osobně totálně fascinuje, protože tohle se prostě jen tak nevidí: máme tu odrůdu Modrý Portugal od vinařství Kolby a on je na tom lístku napsaný dvakrát hned pod sebou! Jednou je tam Modrý Portugal rosé za 95 korun a hned na dalším řádku Modrý Portugal červené taky za 95 korun. Zní to skoro jako nějaký vtip, jako by to byla chyba tisku. To je jako mít na place jednoho herce, který ale hraje ve stejném filmu dvě úplně různé role: v jedné scéně hraje lehkého svěžího romantika a v další si oblékne temný kabát a hraje vážné hluboké drama. Ale pořád je to ta samá modrá kulička hroznu! Jak z ní vůbec může vzniknout to svěží růžové a hned v zápětí to hluboké červené víno?"},
    {"speaker": "m", "text": "Tahle dualita, ta je pro spoustu lidí vlastně velkou záhadou. Lidé si totiž často myslí, že modrý hrozen má uvnitř modrou šťávu. Jenže ve skutečnosti je dužina drtivé většiny modrých odrůd úplně bezbarvá, je průhledná jako u bílých hroznů. Veškeré to kouzlo, ta nádherná červená barva a spolu s ní i fenolické látky, kterým se říká třísloviny, se skrývají výhradně ve slupkách těch hroznů. To, jestli vinař z Modrého Portugalu vyrobí rosé nebo naopak to hutné červené, závisí jen na jednom jediném rozhodnutí: jak dlouho nechá tyto tmavé slupky máčet, odborně řečeno macerovat, v té bezbarvé šťávě."},
    {"speaker": "f", "text": "To znamená, že u toho roséčka se to tam ohřálo jenom na takovou krátkou chvíli."},
    {"speaker": "m", "text": "Zjednodušeně řečeno ano. Ty slupky se nechají v kontaktu se šťávou opravdu jenom chvilku, většinou jen pár hodin. Ta šťáva si z nich vezme jen takový ten lehký nádech růžové barvy a jemné tóny, třeba jahod nebo malin, ale nestihne do sebe natáhnout ty hrubé třísloviny, které by vínu daly takovou tu drsnost a svíravost. Proto vzniká víno, které se podává podchlazené a pije se podobně jako víno bílé. Naopak u toho červeného Modrého Portugalu nechá vinař ty slupky macerovat v tom rmutu dlouhé dny i týdny. Během toho se postupně vyluhuje velmi hluboká barva a do vína se dostane ta typická struktura, která nám pak v ústech lehce stahuje patro."},
    {"speaker": "f", "text": "To je ale fantastická příležitost pro hosta! Pokud se chce kdokoli na vlastní patro přesvědčit o tom, co dokáže jenom prostý čas a slupka z hroznu, stačí mu objednat si tyhle dvě skleničky Modrého Portugalu prostě vedle sebe. To je vlastně obrovský vzdělávací tah přímo v praxi tam u toho stolu."},
    {"speaker": "m", "text": "Rozhodně, je to skvělý zážitek."},
    {"speaker": "f", "chapter": "5. Červená vína: Sólista Portugal vs. Kapela Cuvée Krause", "text": "Růžový most nás tedy bezpečně převedl do toho červeného světa a po tom našem sólovém červeném Portugalu z Moravy tu vidíme další položku: Cuvée červené od Krause z Čech za 98 korun. Takže už zase hraje ta naše česká kapela."},
    {"speaker": "m", "text": "Přesně se nám tady vlastně opakuje ten vzorec od bílých vín, ale tentokrát v tom červeném spektru. Náš domácí sólista z Moravy nám předvedl charakter jedné jediné modré odrůdy a teď přichází na řadu cuvée, kde se odrůdy spojují, aby vytvořily plnější tělo. V červených vínech se ty odrůdy velmi často doplňují tak, že jedna dodá intenzivní barvu, druhá přidá ovocnost a třetí zase nějakou kořenitost nebo schopnost dobře zrát v sudu. Posouváme se tedy opět na o něco vyšší příčku v té celkové intenzitě. A tohle všechno, tohle pečlivé budování celého večera musí logicky vyústit do nějakého velkého finále."},
    {"speaker": "f", "chapter": "6. Velké finále: Kalifornský Pinot Noir (Adulation)", "text": "A to finále, jak koukám, je tady na lístku zastoupeno opět Amerikou, úplně stejně jako na konci těch bílých vín: máme tu Pinot Noir neboli Rulandské modré od značky Edjulejšn z Kalifornie. Zase: A jako Amerika. A opět vidíme, že u něj svítí ta vůbec nejvyšší cena na celém lístku: 125 korun. Kolečko se nám krásně uzavírá. Ale co od takového závěru vlastně můžeme čekat? Bude to zase ta máslová bomba, jakou jsme viděli u toho amerického Šardoné?"},
    {"speaker": "m", "text": "Máslová asi úplně ne, ale bude to naprosto majestátní tečka. Pinot Noir je totiž celosvětově vnímán jako jedna z nejprestižnějších a úplně nejúšlechtilejších červených odrůd a je mimochodem velmi citlivý na to, kde se pěstuje. Pokud se pěstuje v Kalifornii, opět tam bude hrát hlavní roli ta štědrá porce tepla, kterou ty hrozny do sebe přejmou. Na rozdíl třeba od těch lehčích evropských Pinotů, které často hrají na notu takových brusinek a vlhkého podhoubí, ten kalifornský přinese něco úplně jiného: zralé třešně, ostružiny, dost možná vanilku a sladké koření. Třísloviny budou velmi kulaté a hutné. Jde o víno s tak dlouhým, intenzivním dozvukem na patře, že kdybychom po něm chtěli ochutnat vlastně cokoli dalšího z tohoto lístku, nedávalo by to absolutně žádný smysl. Kalifornský Pinot Noir prostě musí být ze své podstaty to poslední, co se ten večer vypije."},
    {"speaker": "f", "chapter": "Rekapitulace celé degustační mapy v 6 krocích", "text": "Pojďme si tedy tu naši celou mapu rychle zrekapitulovat, protože to, co na začátku vypadalo jen jako taková nepřehledná tabulka s cenami, se nakonec ukázalo jako dokonale logický příběh. Zjistili jsme, že bubliny neslouží jenom na oslavu, ale fyzicky nám čistí patro, protože ten oxid uhličitý funguje prostě jako takový malý kartáč. Pak jsme si představili, že jednodruhové víno je jako sólový zpěvák, zatímco slovo na C, tedy Cuvée a Crémant, to je kapela, kde odrůdy hrají hezky společně. Naučili jsme se, že P znamená polosuché a musí se bezpodmínečně pít až po suchém, protože by nám ten cukr znecitlivěl jazyk. Dále jsme pochopili, že za americká vína pod písmenem A se sice platí víc, ale zároveň to znamená mnohem mohutnější tělo zrozené v horkém kalifornském slunci. Pomocí toho růžového mostu, kde si jeden modrý hrozen střihl dvě úplně různé role, jsme se přenesli do červených vín a skončili tím velkolepým Pinotem. Kdokoli tohle pochopí, nepotřebuje k objednávání snad už žádný sommeliérský diplom."},
    {"speaker": "m", "text": "Je to naprosto krásná ukázka toho, že vinný lístek v sobě vždycky skrývá hlubší příběhy. A pokud člověk ví, jak ty příběhy řadit za sebou, aby plně respektovaly fyziologii našich úst, tak se ten jeho zážitek prostě zmnohonásobí. Není to opravdu jen o tom, jaké víno si objednáme, ale kdy a v jakém přesném kontextu ho pijeme."},
    {"speaker": "f", "chapter": "Závěrečná myšlenka: Psychologie ceny vs. slepá degustace", "text": "To je hrozně hezky řečeno. Ale přesto... přesto je tu ještě jedna poslední věc, která mi u toho lístku pořád tak trochu nedá spát. Je to taková poslední, řekněme provokativní myšlenka na závěr, se kterou bych ráda každého ponechala: Když se totiž na ta čísla pozorně podíváme, tak vidíme, že všechny ty naše domácí láhve – ať už bílé, růžové nebo červené, sólisté nebo kapely – všechny se cenově drží někde od 95 do 98 korun. A pak jsou tu obě vína z Kalifornie, z té obrovské dálky: jedno bílé Šardoné, jedno červené Pinot Noir. Obě dvě mají naprosto přesnou stejnou cenovku: 125 korun. A já si říkám, do jaké míry tahle vizuální informace – to vytištěné číslo na papíře a to vědomí, že je to dovezené až z daleké Ameriky – vlastně psychologicky formuje naši chuť? Změní se nám vnímání ještě dřív, než si ze skleničky vůbec usrkneme? Pokud bychom nevěděli, odkud to víno je a kolik přesně stojí, dokázali bychom poslepu vůbec určit, která z těch skleniček je ta o 30 korun dražší? Nebo nám tu pomyslnou hierarchii hodnot a kvality v mozku úplně nevědomky nastavuje jen ten obyčejný potištěný papír? To už by byl experiment pro nějakou další, striktně slepou degustaci."}
]

print(f"Total dialogue segments: {len(dialogue_data)}")

# Create temp dir for audio chunks
tmp_dir = "/tmp/wine_podcast_chunks"
os.makedirs(tmp_dir, exist_ok=True)

# Generate a 0.3s silence wav for pauses
silence_wav = os.path.join(tmp_dir, "silence.wav")
subprocess.run([
    "ffmpeg", "-y", "-f", "lavfi", "-i", "anullsrc=r=22050:cl=mono", "-t", "0.4",
    "-acodec", "pcm_s16le", silence_wav
], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

chapter_silence_wav = os.path.join(tmp_dir, "chapter_silence.wav")
subprocess.run([
    "ffmpeg", "-y", "-f", "lavfi", "-i", "anullsrc=r=22050:cl=mono", "-t", "0.8",
    "-acodec", "pcm_s16le", chapter_silence_wav
], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

chunk_files = []
timeline_items = []
current_time = 0.0

chapters = []

for i, item in enumerate(dialogue_data):
    speaker = item["speaker"]
    text = item["text"]
    chapter_title = item.get("chapter")
    
    if chapter_title:
        chapters.append({
            "id": f"ch-{len(chapters) + 1}",
            "title": chapter_title,
            "startTime": round(current_time, 2)
        })
        if i > 0:
            chunk_files.append(chapter_silence_wav)
            current_time += 0.8
    else:
        if i > 0:
            chunk_files.append(silence_wav)
            current_time += 0.4

    start_time = round(current_time, 2)
    chunk_wav = os.path.join(tmp_dir, f"chunk_{i:03d}.wav")
    
    # Configure espeak-ng parameters
    voice = "cs+f3" if speaker == "f" else "cs+m3"
    pitch = "62" if speaker == "f" else "46"
    speed = "152" if speaker == "f" else "146"
    
    subprocess.run([
        "espeak-ng", "-v", voice, "-p", pitch, "-s", speed, text, "-w", chunk_wav
    ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    # Get duration of generated chunk
    res = subprocess.run([
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", chunk_wav
    ], capture_output=True, text=True, check=True)
    duration = float(res.stdout.strip())
    
    chunk_files.append(chunk_wav)
    current_time += duration
    end_time = round(current_time, 2)
    
    timeline_items.append({
        "id": f"seg-{i + 1}",
        "speaker": "host1" if speaker == "f" else "host2",
        "speakerName": "Sommeliérka (průvodkyně)" if speaker == "f" else "Hlavní sommeliér",
        "chapterTitle": chapter_title,
        "startTime": start_time,
        "endTime": end_time,
        "duration": round(duration, 2),
        "text": text
    })

print(f"Total calculated audio duration: {current_time:.2f} seconds ({math.floor(current_time/60)}m {int(current_time%60)}s)")

# Concatenate all wav chunks using ffmpeg
concat_txt = os.path.join(tmp_dir, "concat.txt")
with open(concat_txt, "w") as f:
    for cf in chunk_files:
        f.write(f"file '{cf}'\n")

out_mp3_public = "/app/applet/public/audio/vina-po-skle-rozbor.mp3"
out_mp3_dist = "/app/applet/dist/audio/vina-po-skle-rozbor.mp3"

subprocess.run([
    "ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", concat_txt,
    "-c:a", "libmp3lame", "-b:a", "128k", out_mp3_public
], check=True)

# Also copy to dist if dist exists
if os.path.exists("/app/applet/dist/audio"):
    import shutil
    shutil.copy2(out_mp3_public, out_mp3_dist)

print(f"Exported MP3 to {out_mp3_public}, size: {os.path.getsize(out_mp3_public)} bytes")

# Write out TypeScript data file
ts_content = f"""// Auto-generated synchronized timeline and chapters for "Vína po skle" audio guide
export interface AudioChapter {{
  id: string;
  title: string;
  startTime: number;
}}

export interface DialogueSegment {{
  id: string;
  speaker: 'host1' | 'host2';
  speakerName: string;
  chapterTitle?: string;
  startTime: number;
  endTime: number;
  duration: number;
  text: string;
}}

export interface WineAudioGuideMeta {{
  audioUrl: string;
  totalDuration: number;
  formattedDuration: string;
  title: string;
  subtitle: string;
  chapters: AudioChapter[];
  segments: DialogueSegment[];
}}

export const WINE_AUDIO_GUIDE: WineAudioGuideMeta = {{
  audioUrl: '/audio/vina-po-skle-rozbor.mp3',
  totalDuration: {round(current_time, 2)},
  formattedDuration: '{math.floor(current_time/60)}:{int(current_time%60):02d}',
  title: 'Sommeliérský rozbor: Vína po skle',
  subtitle: 'Kompletní degustační mapa, fyziologie patra a 10 rozlévaných vín',
  chapters: {json.dumps(chapters, ensure_ascii=False, indent=2)},
  segments: {json.dumps(timeline_items, ensure_ascii=False, indent=2)}
}};
"""

with open("/app/applet/src/data/wineAudioGuideData.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Wrote src/data/wineAudioGuideData.ts successfully!")
