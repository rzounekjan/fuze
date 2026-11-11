import React, { useState, useEffect } from 'react';
import { 
  Wine, 
  Layers, 
  Coins, 
  Sparkles, 
  Clock, 
  Flame, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  ArrowRight, 
  Percent,
  Droplet,
  Info,
  Scale
} from 'lucide-react';
import { speechManager } from '../utils/speech';

interface BarriqueCuveeGuideProps {
  language?: 'cs' | 'en';
  onSelectWine?: (wineId: string) => void;
}

export const BarriqueCuveeGuide: React.FC<BarriqueCuveeGuideProps> = ({
  language = 'cs',
  onSelectWine
}) => {
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<'comparison' | 'pricing' | 'cuvee' | 'wines'>('comparison');
  const [calculatorBarrel, setCalculatorBarrel] = useState<'barrique_new' | 'barrique_2nd' | 'barrique_3rd' | 'large_cask' | 'stainless'>('barrique_new');
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const unsub = speechManager.subscribe((speakingId) => {
      setIsSpeaking(speakingId === 'barrique-guide-audio');
    });
    return () => {
      unsub();
      if (speechManager.getCurrentId() === 'barrique-guide-audio') {
        speechManager.stop();
      }
    };
  }, []);

  const handleToggleAudio = () => {
    if (isSpeaking) {
      speechManager.stop();
      setIsSpeaking(false);
    } else {
      let speechText = '';
      if (activeTab === 'comparison') {
        speechText = isEn
          ? 'Difference between Barrique and Large Wooden Casks. A barrique is a 225-liter barrel crafted from French or American oak with internal toasting. It infuses the wine with vanillin, coconut, smoke, and fine tannins, with a lifespan of only three to five years. Large wooden casks hold one thousand to five thousand liters, undergo no heavy toasting, and provide gentle micro-oxygenation while preserving pure grape varietal fruitiness for up to eighty years.'
          : 'Rozdíl mezi barikem a velkým dřevěným sudem. Barik je sud o objemu 225 litrů z francouzského či amerického dubu s vnitřním pálením. Dodává vínu vanilin, kokos, kouřovost a ušlechtilé třísloviny s životností pouhých tři až pět let. Velký dřevěný sud má objem tisíc až pět tisíc litrů, nemá silné pálení a slouží k jemné mikrooxygenaci při zachování čisté odrůdovosti po dobu až osmdesáti let.';
      } else if (activeTab === 'pricing') {
        speechText = isEn
          ? 'Price difference and economics. A new French barrique barrel costs around 1000 euros for only 300 bottles, adding up to 100 crowns per bottle purely in barrel depreciation for the first fill. In contrast, a large wooden cask lasts 40 years, costing barely one crown per bottle. Additionally, barriques lose up to 5 percent of volume annually through evaporation known as the angels share, requiring regular topping up.'
          : 'Cenový rozdíl a ekonomika sudu. Nový francouzský barik stojí kolem 25 až 30 tisíc korun a naplní zhruba 300 lahví, což při prvním plnění znamená náklad kolem 80 až 100 korun na lahev jen za dřevo. Oproti tomu velký sud slouží čtyřicet let a odpis činí pouhou jednu korunu na lahev. Barik navíc ztrácí až 5 procent objemu odparem, takzvanou andělskou daní, a vyžaduje neustálé ruční dolévání.';
      } else if (activeTab === 'cuvee') {
        speechText = isEn
          ? 'The Art of Cuvée and blending techniques. Blending directly from the mash, known as co-fermentation, means harvesting and fermenting multiple grape varieties together from day one. Active yeast and co-pigmentation create deep color stability and seamless harmony, as seen in Nina Cuvée Bílkovi. Blending finished wines, or assemblage, involves aging each variety separately in barriques, followed by cellar master blending trials to achieve perfect balance, as seen in Cuvée Red Kolby.'
          : 'Umění Cuvée a způsoby míchání vín. Míchání přímo z rmutu neboli společná fermentace znamená sklizeň a kvašení odrůd společně v jedné kádi od prvního dne. Kvasinky a enzymy vytvářejí biochemickou kopigmentaci, která trvale prováže barvu a sametové tělo, jak reprezentuje Nina Cuvée od Bílkových. Míchání hotových vín neboli assemblage znamená zrání každé odrůdy zvlášť v barikových sudech a následné hledání dokonalého poměru sklepmistrem, což představuje Cuvée Red Kolby.';
      } else {
        speechText = isEn
          ? 'Featured wines at FUZE. Nina Cuvée Bílkovi represents co-fermentation of Merlot and Frankovka. Cuvée Red Kolby represents cellar assemblage aged in French barriques. Pinot Noir Philip Kuhn represents German limestone barrique aging, and Cabernet Sauvignon Lapis Luna represents bold California oak.'
          : 'Představitelé vín v nabídce FUZE. Nina Cuvée Bílkovi ztělesňuje společné kvašení rmutu Merlotu a Frankovky. Cuvée Red Kolby reprezentuje sklepmistrovskou kupáž po zrání ve francouzském bariku. Pinot Noir Philip Kuhn představuje německý vápencový barik a Cabernet Sauvignon Lapis Luna mohutný kalifornský dub.';
      }

      speechManager.speak(
        'barrique-guide-audio',
        isEn ? 'Barrique and Cuvée Masterclass' : 'Sommeliérský průvodce: Bariková vína a Cuvée',
        speechText,
        language
      );
      setIsSpeaking(true);
    }
  };

  // Calculator calculations
  const calcData = {
    barrique_new: {
      name: isEn ? 'New French Barrique (1st Fill)' : 'Nový francouzský barik (1. plnění)',
      cost: 26000,
      lifespanFills: 1,
      bottlesPerFill: 300,
      depreciationPerBottle: 86.7,
      angelShareLoss: '3–5 % (~9 litrů / rok)',
      notes: isEn 
        ? 'Maximum extraction of vanillin, lactones, and toasty wood tannins. Highest cost impact.' 
        : 'Maximální vyluhování vanilinu, kokosových laktonů a toastových tříslovin. Nejvyšší podíl na ceně vína.'
    },
    barrique_2nd: {
      name: isEn ? 'Barrique (2nd Fill / 2nd Passage)' : 'Barikový sud (2. plnění / 2nd passage)',
      cost: 10500, // allocated residual
      lifespanFills: 1,
      bottlesPerFill: 300,
      depreciationPerBottle: 35.0,
      angelShareLoss: '2.5–4 % (~7 litrů / rok)',
      notes: isEn 
        ? 'Balanced wood integration, elegant structure without overwhelming the fruit.' 
        : 'Vyvážená integrace dřeva, jemná struktura bez potlačení primárního ovoce.'
    },
    barrique_3rd: {
      name: isEn ? 'Barrique (3rd Fill / Final Passage)' : 'Barikový sud (3. plnění / závěrečné)',
      cost: 5400,
      lifespanFills: 1,
      bottlesPerFill: 300,
      depreciationPerBottle: 18.0,
      angelShareLoss: '2–3 % (~5 litrů / rok)',
      notes: isEn 
        ? 'Gentle micro-oxygenation, very subtle wood notes. Afterwards, the barrel becomes aromatically neutral.' 
        : 'Jemná mikrooxygenace, velmi decentní dřevo. Po 3. roce je sud aromaticky vyčerpaný a stává se neutrálním.'
    },
    large_cask: {
      name: isEn ? 'Traditional Large Wooden Cask (3,000 L)' : 'Tradiční velký dřevěný sud (3 000 L / štuk)',
      cost: 180000,
      lifespanFills: 40, // 40 years / vintages
      bottlesPerFill: 4000,
      depreciationPerBottle: 1.12,
      angelShareLoss: '0.8–1.5 % (velký objem = nízký poměr povrchu)',
      notes: isEn 
        ? 'Serves for 40–80 years. Zero toasty wood flavoring, pure micro-oxygenation preserving grape terroir.' 
        : 'Slouží 40 až 80 let. Žádná vanilka ani kouř, čistá mikrooxygenace zachovávající odrůdový terroir hroznů.'
    },
    stainless: {
      name: isEn ? 'Stainless Steel Tank (Inox)' : 'Nerezový tank (Inox)',
      cost: 120000,
      lifespanFills: 50,
      bottlesPerFill: 5000,
      depreciationPerBottle: 0.15,
      angelShareLoss: '0 % (hermeticky uzavřené)',
      notes: isEn 
        ? 'Reductive environment, perfectly locks in fresh acids and fruit without oxygen or wood contact.' 
        : 'Redukční prostředí bez přístupu vzduchu. Dokonale chrání svěžest, primární ovocitost a kyselinky.'
    }
  };

  const currentCalc = calcData[calculatorBarrel];

  return (
    <div className="rounded-2xl bg-gradient-to-br from-stone-900 via-stone-900/95 to-amber-950/30 border border-amber-500/30 p-4 sm:p-6 md:p-8 shadow-2xl space-y-6 text-stone-100 relative overflow-hidden mb-8">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-24 -mt-24" />

      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800/80 pb-5 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5">
            <span className="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-[10px]">
              SOMMELIER MASTERCLASS
            </span>
            <span>·</span>
            <span>{isEn ? 'Wine Cellar Science' : 'Vinařská věda & Sklepmistrovství'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-100 tracking-tight flex items-center gap-2.5">
            <Wine className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 shrink-0" />
            <span>{isEn ? 'Barrique, Large Casks & The Art of Cuvée' : 'Bariková vína, Velké sudy & Umění Cuvée'}</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
            {isEn 
              ? 'Comprehensive educational guide to wood maturation, chemical aroma extraction, barrel economics, and blending on the mash versus cellar assemblage.'
              : 'Kompletní vzdělávací průvodce zráním v sudech, extrakcí aromatických látek, cenovou kalkulací a mícháním cuvée ze rmutu oproti kupáži hotových vín.'}
          </p>
        </div>

        {/* Audio TTS toggle */}
        <button
          type="button"
          onClick={handleToggleAudio}
          className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border shadow-lg ${
            isSpeaking 
              ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-amber-500/20 animate-pulse'
              : 'bg-stone-800/90 hover:bg-stone-800 text-amber-300 border-amber-500/30 hover:border-amber-400 shadow-stone-950/40'
          }`}
          title={isEn ? 'Listen to sommelier explanation' : 'Pustit sommeliérský výklad hlasem'}
        >
          {isSpeaking ? (
            <>
              <VolumeX className="w-4 h-4" />
              <span>{isEn ? 'Stop Voice' : 'Zastavit výklad'}</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-amber-400" />
              <span>{isEn ? 'Listen to Audio Guide' : 'Poslechnout výklad'}</span>
            </>
          )}
        </button>
      </div>

      {/* Guide Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-stone-950/60 border border-stone-800/80 rounded-xl relative z-10">
        <button
          type="button"
          onClick={() => setActiveTab('comparison')}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'comparison'
              ? 'bg-amber-600 text-stone-950 shadow-md font-black'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/60'
          }`}
        >
          <Layers className="w-4 h-4 shrink-0" />
          <span>{isEn ? 'Barrique vs. Large Cask' : 'Barik vs. Velký sud'}</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('pricing')}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'pricing'
              ? 'bg-amber-600 text-stone-950 shadow-md font-black'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/60'
          }`}
        >
          <Coins className="w-4 h-4 shrink-0" />
          <span>{isEn ? 'Price & Cost Breakdown' : 'Cenový rozdíl & Náklady'}</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('cuvee')}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'cuvee'
              ? 'bg-amber-600 text-stone-950 shadow-md font-black'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/60'
          }`}
        >
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>{isEn ? 'Cuvée: Mash vs. Assemblage' : 'Cuvée: Rmut vs. Kupáž'}</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('wines')}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'wines'
              ? 'bg-amber-600 text-stone-950 shadow-md font-black'
              : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/60'
          }`}
        >
          <Wine className="w-4 h-4 shrink-0" />
          <span>{isEn ? 'FUZE Wine Matches' : 'Vína z menu FUZE'}</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: BARIK VS. VELKÝ DŘEVĚNÝ SUD                                       */}
      {/* ========================================================================= */}
      {activeTab === 'comparison' && (
        <div className="space-y-6 relative z-10 animate-fadeIn">
          {/* Intro highlight */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-stone-200 leading-relaxed flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 font-semibold block mb-0.5">
                {isEn ? 'Crucial Sommelier Distinction:' : 'Zásadní sommeliérský rozdíl:'}
              </strong>
              {isEn 
                ? 'Not every wine that aged in oak is a "barrique". A barrique is a strictly defined barrel of 225 liters with toast-charring that transforms wine chemically. A traditional large wooden cask (1,000–5,000+ liters) does not add vanilla or wood flavors—it provides pure micro-oxygenation while preserving 100% of the grape varietal purity.'
                : 'Ne každé víno, které leželo ve dřevě, je „barikové“. Barik je striktně vymezený sud o objemu 225 litrů s vnitřním pálením, který víno biochemicky obohacuje o nové látky. Tradiční velký dřevěný sud (1 000 až 5 000+ litrů) naopak žádné vanilkové ani kouřové tóny nepřidává – jeho cílem je čistá mikrooxygenace při zachování 100% čistoty odrůdy a terroiru.'}
            </div>
          </div>

          {/* Side by side comparison cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Barrique Card */}
            <div className="rounded-xl bg-stone-900/80 border border-amber-500/30 p-5 space-y-4 hover:border-amber-400/50 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-300">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-stone-100">
                      {isEn ? 'Barrique Barrel (Barik)' : 'Barikový sud (Barik)'}
                    </h3>
                    <span className="text-[11px] text-amber-400 font-mono">Bordeaux (225 L) / Bourgogne (228 L)</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {isEn ? 'Aroma Extraction' : 'Aromatická extrakce'}
                </span>
              </div>

              <div className="space-y-3 text-xs text-stone-300 leading-relaxed">
                <div>
                  <span className="text-stone-400 font-semibold block">{isEn ? 'Wood & Toasting:' : 'Dřevo & Vypalování (Toasting):'}</span>
                  <p>
                    {isEn 
                      ? 'Split French oak (Allier, Tronçais, Vosges) or sawn American oak. Toast levels: Light, Medium, Medium+, Heavy. Fire caramelizes wood starches into aromatic compounds.'
                      : 'Štípaný francouzský dub (Allier, Tronçais, Vosges) nebo americký bílý dub. Vnitřek se opaluje otevřeným ohněm (Light, Medium, Medium+, Heavy). Žár karamelizuje dřevní cukry.'}
                  </p>
                </div>

                <div>
                  <span className="text-stone-400 font-semibold block">{isEn ? 'Aromatic Compounds Extracted:' : 'Extrahované senzorické sloučeniny:'}</span>
                  <ul className="list-disc pl-4 space-y-1 text-stone-300">
                    <li><strong className="text-amber-300">Vanilin:</strong> {isEn ? 'Distinct Bourbon-like vanilla sweetness' : 'Výrazná sladká vanilková aromatika'}</li>
                    <li><strong className="text-amber-300">Laktony:</strong> {isEn ? 'Coconut, roasted hazelnuts, cedar notes' : 'Kokos, pražené lískové oříšky, cedr'}</li>
                    <li><strong className="text-amber-300">Guajakol:</strong> {isEn ? 'Smoke, dark chocolate, freshly roasted coffee' : 'Kouřovost, táborák, tmavá hořká čokoláda, káva'}</li>
                    <li><strong className="text-amber-300">Eugenol:</strong> {isEn ? 'Clove, nutmeg, warm baking spice' : 'Hřebíček, badyán, jemné koření'}</li>
                    <li><strong className="text-amber-300">Elagotaniny:</strong> {isEn ? 'Hydrolyzable oak tannins that soften wine astringency' : 'Dubové taniny, které polymerují a uhlazují třísloviny vína'}</li>
                  </ul>
                </div>

                <div>
                  <span className="text-stone-400 font-semibold block">{isEn ? 'Lifespan & Aging:' : 'Životnost sudu:'}</span>
                  <p className="text-amber-200/90 font-medium">
                    {isEn 
                      ? 'Only 3 to 5 years (2–3 fills max). After that, pores clog with tartrate crystals and aroma is fully extracted; it becomes sensory neutral.'
                      : 'Pouhých 3 až 5 let (maximálně 2–3 naplnění). Poté se póry ucpou vinným kamenem a aromatické látky jsou vyčerpány.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Traditional Large Cask Card */}
            <div className="rounded-xl bg-stone-900/80 border border-stone-700/80 p-5 space-y-4 hover:border-stone-600 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-stone-300">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-stone-100">
                      {isEn ? 'Traditional Large Wooden Cask' : 'Tradiční velký dřevěný sud'}
                    </h3>
                    <span className="text-[11px] text-stone-400 font-mono">1 000 – 5 000+ L (Foudre / Štuk / Botti)</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
                  {isEn ? 'Pure Micro-oxygenation' : 'Čistá mikrooxygenace'}
                </span>
              </div>

              <div className="space-y-3 text-xs text-stone-300 leading-relaxed">
                <div>
                  <span className="text-stone-400 font-semibold block">{isEn ? 'Wood & Toasting:' : 'Dřevo & Vypalování:'}</span>
                  <p>
                    {isEn 
                      ? 'Thick oak or acacia staves (40–60 mm). Little to no toasting. The surface area to wine ratio is very small compared to a 225 L barrique.'
                      : 'Silné dubové či akátové dužiny (40–60 mm). Žádné silné pálení. Poměr styčné plochy dřeva k objemu vína je 5× až 10× menší než u bariku.'}
                  </p>
                </div>

                <div>
                  <span className="text-stone-400 font-semibold block">{isEn ? 'Sensory Impact on Wine:' : 'Senzorický dopad na víno:'}</span>
                  <ul className="list-disc pl-4 space-y-1 text-stone-300">
                    <li><strong className="text-stone-200">{isEn ? 'No oak vanillin:' : 'Žádná vanilka ani kokos:'}</strong> {isEn ? 'Zero coconut or smoky campfire flavors.' : 'Víno nepřebírá aroma dřeva.'}</li>
                    <li><strong className="text-stone-200">{isEn ? 'Controlled oxygen intake:' : 'Jemný prostup kyslíku:'}</strong> {isEn ? 'Very slow micro-oxygenation softens tannins.' : 'Uhlazuje mladistvou drsnost a svíravost tříslovin.'}</li>
                    <li><strong className="text-stone-200">{isEn ? 'Terroir preservation:' : 'Zachování čisté odrůdy:'}</strong> {isEn ? '100% pure expression of grape, soil, and vintage.' : '100% čistý projev odrůdového ovoce, kyselin a půdy.'}</li>
                    <li><strong className="text-stone-200">{isEn ? 'Natural settling:' : 'Přirozená sedimentace:'}</strong> {isEn ? 'Clarification without excessive filtration.' : 'Samočiření vína bez nutnosti agresivní filtrace.'}</li>
                  </ul>
                </div>

                <div>
                  <span className="text-stone-400 font-semibold block">{isEn ? 'Lifespan & Usage:' : 'Životnost sudu:'}</span>
                  <p className="text-stone-200 font-medium">
                    {isEn 
                      ? '30 to 80+ years! Large casks serve for generations; they are scraped of tartrates, sulfur-steamed, and refilled vintage after vintage.'
                      : '30 až 80+ let! Sudy slouží celým generacím vinařů. Vinný kámen se mechanicky odstraňuje a sud se síří a znovu plní další ročníky.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Comparison Matrix Table */}
          <div className="overflow-x-auto rounded-xl border border-stone-800 bg-stone-950/70">
            <table className="w-full text-left text-xs text-stone-300">
              <thead className="bg-stone-900/90 text-stone-400 uppercase text-[10px] tracking-wider border-b border-stone-800">
                <tr>
                  <th className="py-2.5 px-3 font-semibold">{isEn ? 'Parameter' : 'Parametr'}</th>
                  <th className="py-2.5 px-3 font-semibold text-amber-300">{isEn ? 'Barrique (Barik)' : 'Barikový sud (Barik)'}</th>
                  <th className="py-2.5 px-3 font-semibold text-stone-200">{isEn ? 'Large Cask (Sud)' : 'Velký dřevěný sud'}</th>
                  <th className="py-2.5 px-3 font-semibold text-blue-300">{isEn ? 'Stainless Tank (Nerez)' : 'Nerezový tank'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60 font-mono text-[11px]">
                <tr className="hover:bg-stone-900/40">
                  <td className="py-2 px-3 font-sans font-medium text-stone-300">{isEn ? 'Standard Volume' : 'Objem'}</td>
                  <td className="py-2 px-3 text-amber-300">225 L (300 lahví)</td>
                  <td className="py-2 px-3 text-stone-300">1 000 – 5 000 L</td>
                  <td className="py-2 px-3 text-blue-300">1 000 – 50 000 L</td>
                </tr>
                <tr className="hover:bg-stone-900/40">
                  <td className="py-2 px-3 font-sans font-medium text-stone-300">{isEn ? 'Internal Toasting' : 'Pálení dřeva (Toasting)'}</td>
                  <td className="py-2 px-3 text-amber-300">{isEn ? 'Yes (Light / Medium / Heavy)' : 'Ano (Light / Medium / Heavy)'}</td>
                  <td className="py-2 px-3 text-stone-400">{isEn ? 'No / Neutral' : 'Ne / Neutrální'}</td>
                  <td className="py-2 px-3 text-stone-500">{isEn ? 'None' : 'Žádné'}</td>
                </tr>
                <tr className="hover:bg-stone-900/40">
                  <td className="py-2 px-3 font-sans font-medium text-stone-300">{isEn ? 'Flavor Transfer' : 'Vliv na chuť'}</td>
                  <td className="py-2 px-3 text-amber-300">{isEn ? 'Vanillin, coconut, smoke, coffee' : 'Vanilka, kokos, kouř, káva, čokoláda'}</td>
                  <td className="py-2 px-3 text-stone-300">{isEn ? 'Pure grape fruit & terroir' : 'Ryzí odrůdové ovoce, žádné dřevo'}</td>
                  <td className="py-2 px-3 text-blue-300">{isEn ? 'Fresh primary fruit & crisp acids' : 'Svěží primární ovoce, křupavá kyselinka'}</td>
                </tr>
                <tr className="hover:bg-stone-900/40">
                  <td className="py-2 px-3 font-sans font-medium text-stone-300">{isEn ? 'Useful Lifespan' : 'Životnost'}</td>
                  <td className="py-2 px-3 text-amber-300">{isEn ? '3 – 5 years (2–3 fills)' : '3 až 5 let (2–3 naplnění)'}</td>
                  <td className="py-2 px-3 text-stone-300">{isEn ? '30 – 80+ years' : '30 až 80+ let'}</td>
                  <td className="py-2 px-3 text-blue-300">{isEn ? '50+ years' : '50+ let'}</td>
                </tr>
                <tr className="hover:bg-stone-900/40">
                  <td className="py-2 px-3 font-sans font-medium text-stone-300">{isEn ? 'Depreciation per Bottle' : 'Odpis na 1 lahev'}</td>
                  <td className="py-2 px-3 text-amber-400 font-bold font-mono">80 – 100+ Kč</td>
                  <td className="py-2 px-3 text-stone-300 font-mono">0,50 – 1,50 Kč</td>
                  <td className="py-2 px-3 text-blue-300 font-mono">0,10 – 0,30 Kč</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: PRICING & COST BREAKDOWN                                          */}
      {/* ========================================================================= */}
      {activeTab === 'pricing' && (
        <div className="space-y-6 relative z-10 animate-fadeIn">
          {/* Sommelier economic explanation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-stone-900/80 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Coins className="w-4 h-4" />
                <span>{isEn ? '1. High Barrel Cost' : '1. Extrémní cena sudu'}</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {isEn 
                  ? 'A genuine French oak barrique (Seguin Moreau, Taransaud) costs 850–1,200 EUR (~25,000–30,000 CZK). It holds only 300 bottles of wine. In year 1, barrel depreciation alone is 80–100 CZK per bottle!'
                  : 'Nový francouzský barik (např. Seguin Moreau, Taransaud) stojí 850 až 1 200 EUR (cca 22 000–30 000 Kč). Pojme jen 300 lahví vína. V prvním roce je odpis sudu 80–100 Kč na lahev jen za samotné dřevo!'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-700/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Droplet className="w-4 h-4" />
                <span>{isEn ? '2. Angel’s Share (Evaporation)' : '2. Andělská daň (Odpar)'}</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {isEn 
                  ? 'Oak pores allow 2–5% of the wine volume to evaporate annually (~5–12 liters per barrel). Cellar masters must top up (ouillage) barrels every 1–2 weeks with matching fine wine to prevent oxidation.'
                  : 'Póry dřeva se ročně odpaří 2–5 % objemu vína (5–12 litrů na sud). Vinař musí sudy každé 1–2 týdny ručně dolévat (ouillage) špičkovým vínem stejné šarže, aby nevznikla octovatost.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-700/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>{isEn ? '3. Tied-up Capital & Labor' : '3. Vázaný kapitál a čas'}</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {isEn 
                  ? 'Barrique wines age 12 to 24 months in wood and 6–12 months in bottle. The winery ties up cash for 2–3 years before earning revenue, requiring climate-controlled barrel cellars.'
                  : 'Barikové víno zraje 12 až 24 měsíců v sudu a dalších 6–12 měsíců na lahvi. Vinař má 2–3 roky zablokované stovky tisíc korun bez tržby v klimatizovaném ležáckém sklepě.'}
              </p>
            </div>
          </div>

          {/* Interactive Cost Breakdown Selector */}
          <div className="p-5 rounded-xl bg-stone-950/80 border border-amber-500/20 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm sm:text-base font-bold text-stone-100">
                  {isEn ? 'Interactive Vessel Cost Calculator per Bottle' : 'Kalkulačka nákladů na lahev podle typu nádoby'}
                </h3>
              </div>
              <span className="text-xs text-stone-400">
                {isEn ? 'Select aging method:' : 'Zvolte technologii zrání:'}
              </span>
            </div>

            {/* Vessel buttons */}
            <div className="flex flex-wrap gap-2">
              {(Object.keys(calcData) as Array<keyof typeof calcData>).map((key) => {
                const item = calcData[key];
                const active = calculatorBarrel === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setCalculatorBarrel(key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      active
                        ? 'bg-amber-500 text-stone-950 font-bold shadow-md'
                        : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            {/* Selected Breakdown Card */}
            <div className="mt-4 p-4 rounded-xl bg-stone-900 border border-amber-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-amber-400">
                  {currentCalc.name}
                </h4>
                <p className="text-xs text-stone-300 max-w-xl">
                  {currentCalc.notes}
                </p>
                <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-400">
                  <span>{isEn ? 'Annual evaporation loss:' : 'Ztráta odparem:'} <strong className="text-stone-200">{currentCalc.angelShareLoss}</strong></span>
                </div>
              </div>

              <div className="shrink-0 text-right bg-stone-950/80 px-4 py-3 rounded-xl border border-stone-800 min-w-[180px]">
                <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                  {isEn ? 'Depreciation per Bottle' : 'Odpis sudu na 1 láhev'}
                </span>
                <span className="text-2xl font-black text-amber-400 font-mono">
                  {currentCalc.depreciationPerBottle.toFixed(2)} Kč
                </span>
                <span className="text-[10px] text-stone-500 block">
                  {isEn ? 'Pure barrel wood cost' : 'Pouze náklad na dřevo'}
                </span>
              </div>
            </div>

            <div className="text-[11px] text-stone-400 italic pt-1">
              {isEn 
                ? '💡 Why FUZE guest pricing reflects this: While basic wines by the glass are 98–145 CZK, premium bottle barrique reds and reserves range from 649 to 995 CZK due to barrel depreciation, French oak coopers, and cellar cellaring.'
                : '💡 Proč se to odráží v lístku FUZE: Zatímco mladá vína po skle stojí 98–145 Kč, lahvová bariková vína a cuvée stojí 649 až 995 Kč právě z důvodu ceny francouzského dubu, ručního dolévání a ležení ve sklepě.'}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: CUVÉE: RMUT VS. MÍCHÁNÍ HOTOVÝCH VÍN                               */}
      {/* ========================================================================= */}
      {activeTab === 'cuvee' && (
        <div className="space-y-6 relative z-10 animate-fadeIn">
          {/* Intro to Cuvée concept */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-stone-200 leading-relaxed">
            <strong className="text-amber-300 font-bold block mb-1">
              {isEn ? 'The Philosophy of Cuvée (1 + 1 = 3):' : 'Filozofie Cuvée (1 + 1 = 3):'}
            </strong>
            {isEn 
              ? 'A Cuvée (from French "cuve", vat) is the master art of blending grape varieties. The goal is never to dilute, but synergy—creating a harmonious wine where structured tannins (e.g. Cabernet or Frankovka) unite with lush fruitiness and velvety roundness (e.g. Merlot).'
              : 'Cuvée (z francouzského cuve = káď) představuje nejvyšší vinařské umění scelování odrůd. Cílem nikdy není „nastavit horší víno lepším“, ale dosáhnout synergie – vína, kde pevná páteř a třísloviny (např. Cabernet Sauvignon nebo Frankovka) splynou se sametovou ovocností a hebkým tělem (např. Merlot).'}
          </div>

          {/* 2 Methods Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Method A: Míchání ze rmutu */}
            <div className="rounded-xl bg-stone-900/80 border border-purple-500/40 p-5 space-y-4 hover:border-purple-400/60 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold">
                    A
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-stone-100">
                      {isEn ? 'Blending on the Mash (Co-fermentation)' : 'Míchání přímo z rmutu (Společná fermentace)'}
                    </h3>
                    <span className="text-[11px] text-purple-300 font-mono">Co-fermentation / Field Blend</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {isEn ? 'Biochemical Unity' : 'Biochemická jednota'}
                </span>
              </div>

              <div className="space-y-3 text-xs text-stone-300 leading-relaxed">
                <div>
                  <span className="text-stone-400 font-semibold block">{isEn ? 'How It Works:' : 'Jak probíhá:'}</span>
                  <p>
                    {isEn 
                      ? 'Grapes of two or more varieties are harvested simultaneously, destemmed together into the same vat, and ferment together from day zero.'
                      : 'Hrozny dvou odrůd se sklidí v tentýž den, společně se odzrní, pomelou do rmutu a kvasí společně v jedné kádi od nultého okamžiku.'}
                  </p>
                </div>

                <div>
                  <span className="text-stone-400 font-semibold block">{isEn ? 'Co-pigmentation Magic:' : 'Biochemická kopigmentace:'}</span>
                  <p>
                    {isEn 
                      ? 'During active alcoholic fermentation, yeast enzymes bind anthocyanins (color pigments) from one grape with flavanols from the other. This creates stable molecular color complexes impossible to replicate after fermentation!'
                      : 'Během bouřlivého kvašení aktivní kvasinky a enzymy prováží barviva (antokyany) a třísloviny obou odrůd. Vznikají stabilní molekulární komplexy, které po hotovém kvašení již nelze chemicky vytvořit.'}
                  </p>
                </div>

                <div>
                  <span className="text-stone-400 font-semibold block">{isEn ? 'Winery Risk:' : 'Vinařské riziko:'}</span>
                  <p className="text-amber-300/90">
                    {isEn 
                      ? 'Irreversible commitment! The ratio is locked on harvest day. If one grape matures early and another needs sun, the winemaker takes a big harvest bet.'
                      : 'Obrovské riziko sklizně! Poměr je nevratně fixován v den sběru. Vinař musí přesně vystihnout okamžik zralosti obou odrůd najednou.'}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-800">
                  <span className="text-[11px] text-stone-400 block font-semibold mb-1">
                    {isEn ? 'FUZE Flagship Example:' : 'Vlajkový příklad ve FUZE:'}
                  </span>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-950 border border-purple-500/30">
                    <div>
                      <strong className="text-stone-200 block text-xs">Nina Cuvée Bílkovi (699 Kč)</strong>
                      <span className="text-[11px] text-stone-400">Merlot + Frankovka (Velké Bílovice)</span>
                    </div>
                    {onSelectWine && (
                      <button
                        type="button"
                        onClick={() => onSelectWine('cervene-nina-cuvee-bilkovi')}
                        className="text-xs text-purple-300 hover:text-purple-200 flex items-center gap-1 font-semibold"
                      >
                        <span>{isEn ? 'Show' : 'Zobrazit'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Method B: Míchání hotových vín */}
            <div className="rounded-xl bg-stone-900/80 border border-amber-500/40 p-5 space-y-4 hover:border-amber-400/60 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-300 font-bold">
                    B
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-stone-100">
                      {isEn ? 'Blending Finished Wines (Assemblage)' : 'Míchání hotových vín (Klasická kupáž / Assemblage)'}
                    </h3>
                    <span className="text-[11px] text-amber-300 font-mono">Bordeaux-style Assemblage</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {isEn ? 'Cellar Precision' : 'Sklepmistrovská preciznost'}
                </span>
              </div>

              <div className="space-y-3 text-xs text-stone-300 leading-relaxed">
                <div>
                  <span className="text-stone-400 font-semibold block">{isEn ? 'How It Works:' : 'Jak probíhá:'}</span>
                  <p>
                    {isEn 
                      ? 'Each grape variety and vineyard block is harvested at its own ideal ripeness, fermented separately, and aged in individual oak barriques for 12–18 months.'
                      : 'Každá odrůda se sklízí v optimální technologické zralosti, kvasí odděleně a zraje v samostatných barikových sudech po dobu 12–18 měsíců.'}
                  </p>
                </div>

                <div>
                  <span className="text-stone-400 font-semibold block">{isEn ? 'Cellar Master Blending Trials:' : 'Laboratoř a scelovací zkoušky:'}</span>
                  <p>
                    {isEn 
                      ? 'After aging, the winemaker conducts blind tasting trials using graduated cylinders to test dozens of percentage ratios (e.g. 60:40 vs. 65:35) until flawless harmony is achieved.'
                      : 'Teprve po vyzrání zasedne sklepmistr s odměrnými válci a zkouší desítky poměrů (např. 60 % Cabernet + 40 % Merlot vs. 65:35). Hledá se absolutní harmonie taninů a kyselin.'}
                  </p>
                </div>

                <div>
                  <span className="text-stone-400 font-semibold block">{isEn ? 'Economic Cost:' : 'Cenová a technologická náročnost:'}</span>
                  <p className="text-amber-300/90">
                    {isEn 
                      ? 'Highest cellar footprint! Requires dozens of separate oak barrels, prolonged cellar management, laboratory testing, and resting tanks.'
                      : 'Vyžaduje násobně větší ležácký sklep, desítky samostatných barikových sudů, chemické rozbory a další měsíce harmonizace po scelení.'}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-800">
                  <span className="text-[11px] text-stone-400 block font-semibold mb-1">
                    {isEn ? 'FUZE Flagship Example:' : 'Vlajkový příklad ve FUZE:'}
                  </span>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-950 border border-amber-500/30">
                    <div>
                      <strong className="text-stone-200 block text-xs">Cuvée Red Kolby (649 Kč)</strong>
                      <span className="text-[11px] text-stone-400">Cabernet Sauvignon + Merlot (Pouzdřany)</span>
                    </div>
                    {onSelectWine && (
                      <button
                        type="button"
                        onClick={() => onSelectWine('cervene-cuvee-red-kolby')}
                        className="text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1 font-semibold"
                      >
                        <span>{isEn ? 'Show' : 'Zobrazit'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: FUZE WINE MATCHES                                                 */}
      {/* ========================================================================= */}
      {activeTab === 'wines' && (
        <div className="space-y-4 relative z-10 animate-fadeIn">
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            {isEn 
              ? 'Below are the key bottles from the FUZE beverage menu that put these aging and blending principles into practice. Click any card to inspect tasting notes, varietals, and pairings:'
              : 'Níže naleznete klíčová vína z nápojového lístku FUZE, která tyto postupy zrání a míchání reprezentují v praxi. Kliknutím zobrazíte detail, odrůdy a párování k jídlům:'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Nina Cuvée */}
            <div 
              onClick={() => onSelectWine && onSelectWine('cervene-nina-cuvee-bilkovi')}
              className="p-4 rounded-xl bg-stone-900 border border-purple-500/40 hover:border-purple-400 transition-all cursor-pointer group space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  {isEn ? 'Co-fermentation on Mash' : 'Společné kvašení rmutu'}
                </span>
                <span className="text-xs font-bold text-amber-400 font-mono">699 Kč</span>
              </div>
              <h4 className="text-base font-bold text-stone-100 group-hover:text-purple-300 transition-colors">
                Nina Cuvée Bílkovi
              </h4>
              <p className="text-xs text-stone-400">
                {isEn ? 'Velkopavlovicko, Morava · Merlot & Frankovka' : 'Velkopavlovicko, Morava · Merlot & Frankovka'}
              </p>
              <p className="text-xs text-stone-300 line-clamp-2">
                {isEn 
                  ? 'Grapes co-fermented together on mash, aged in oak. Deep blackberry and plum fruit with Frankovka spice.' 
                  : 'Společná macerace a fermentace hroznů na rmutu, školení v dubu. Šťavnaté moruše, švestky a kořenitá struktura.'}
              </p>
            </div>

            {/* Cuvée Red Kolby */}
            <div 
              onClick={() => onSelectWine && onSelectWine('cervene-cuvee-red-kolby')}
              className="p-4 rounded-xl bg-stone-900 border border-amber-500/40 hover:border-amber-400 transition-all cursor-pointer group space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {isEn ? 'French Barrique Assemblage' : 'Assemblage z barikových sudů'}
                </span>
                <span className="text-xs font-bold text-amber-400 font-mono">649 Kč</span>
              </div>
              <h4 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                Cuvée Red Kolby
              </h4>
              <p className="text-xs text-stone-400">
                {isEn ? 'Mikulovsko, Morava · Cabernet Sauvignon & Merlot' : 'Mikulovsko, Pouzdřany · Cabernet Sauvignon & Merlot'}
              </p>
              <p className="text-xs text-stone-300 line-clamp-2">
                {isEn 
                  ? 'Aged separately in French barrique barrels, then harmoniously blended. Cassis, dark cocoa, and cedar.' 
                  : 'Oddělené zrání ve francouzských barikových sudech a precizní kupáž. Černý rybíz, hořká čokoláda a cedr.'}
              </p>
            </div>

            {/* Pinot Noir Philip Kuhn */}
            <div 
              onClick={() => onSelectWine && onSelectWine('cervene-pinot-noir-kuhn')}
              className="p-4 rounded-xl bg-stone-900 border border-stone-700 hover:border-amber-400 transition-all cursor-pointer group space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
                  {isEn ? 'French Barrique Single Variety' : 'Odrůdový francouzský barik'}
                </span>
                <span className="text-xs font-bold text-amber-400 font-mono">959 Kč</span>
              </div>
              <h4 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                Pinot Noir Tradition Philip Kuhn
              </h4>
              <p className="text-xs text-stone-400">
                {isEn ? 'Pfalz, Germany · 100% Spätburgunder' : 'Pfalz, Německo · 100% Spätburgunder'}
              </p>
              <p className="text-xs text-stone-300 line-clamp-2">
                {isEn 
                  ? 'Grown on limestone, open-vat fermentation, aged in French oak barriques. Wild raspberry, smoke, and fine minerality.' 
                  : 'Vápencové podloží Laumersheimu, kvašení v kádích a zrání ve francouzském bariku. Lesní maliny, ušlechtilý kouř a minerální hloubka.'}
              </p>
            </div>

            {/* Cabernet Sauvignon Lapis Luna */}
            <div 
              onClick={() => onSelectWine && onSelectWine('cervene-cabernet-sauvignon-lapis-luna')}
              className="p-4 rounded-xl bg-stone-900 border border-stone-700 hover:border-amber-400 transition-all cursor-pointer group space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  {isEn ? 'American & French Oak' : 'Americký & Francouzský dub'}
                </span>
                <span className="text-xs font-bold text-amber-400 font-mono">789 Kč</span>
              </div>
              <h4 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                Cabernet Sauvignon Lapis Luna
              </h4>
              <p className="text-xs text-stone-400">
                {isEn ? 'Lodi, California, USA · 100% Cabernet Sauvignon' : 'Lodi, Kalifornie, USA · 100% Cabernet Sauvignon'}
              </p>
              <p className="text-xs text-stone-300 line-clamp-2">
                {isEn 
                  ? 'Aged 12 months in oak barrels. Robust blackberry, Madagascar vanilla, toasted cocoa, and supple velvety tannins.' 
                  : 'Zrání 12 měsíců v dubových sudech. Mohutné ostružiny, vanilka, kakao a sladké dubové koření se sametovým tělem.'}
              </p>
            </div>

            {/* Zweigelt Feiler-Artinger (Contrast - Large Casks!) */}
            <div 
              onClick={() => onSelectWine && onSelectWine('cervene-zweigelt-feiler-artinger')}
              className="p-4 rounded-xl bg-stone-900 border border-stone-700 hover:border-stone-500 transition-all cursor-pointer group space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
                  {isEn ? 'Large Casks (No Barrique Toast)' : 'Tradiční velký sud (Bez toastu)'}
                </span>
                <span className="text-xs font-bold text-amber-400 font-mono">660 Kč</span>
              </div>
              <h4 className="text-base font-bold text-stone-100 group-hover:text-stone-300 transition-colors">
                Zweigelt Weingut Feiler-Artinger
              </h4>
              <p className="text-xs text-stone-400">
                {isEn ? 'Burgenland, Austria · 100% Zweigelt' : 'Burgenland, Rakousko · 100% Zweigelt'}
              </p>
              <p className="text-xs text-stone-300 line-clamp-2">
                {isEn 
                  ? 'Aged in large neutral wooden casks. Pure expression of dark cherry, black pepper, and silky tannins with zero wood sweetness.' 
                  : 'Zrání ve velkých dřevěných sudech. Ryzí projev černých višní, pepře a měkké třísloviny bez vanilkové sladkosti dřeva.'}
              </p>
            </div>

            {/* Kraus Cuvée Bílé & Červené po skle */}
            <div 
              onClick={() => onSelectWine && onSelectWine('sklo-cuvee-cervene')}
              className="p-4 rounded-xl bg-stone-900 border border-stone-700 hover:border-stone-500 transition-all cursor-pointer group space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
                  {isEn ? 'Bohemian Table Cuvée' : 'České cuvée po skle'}
                </span>
                <span className="text-xs font-bold text-amber-400 font-mono">98 Kč / 0,15l</span>
              </div>
              <h4 className="text-base font-bold text-stone-100 group-hover:text-stone-300 transition-colors">
                Cuvée Červené & Bílé Kraus
              </h4>
              <p className="text-xs text-stone-400">
                {isEn ? 'Mělnicko, Bohemia · Kraus family winery' : 'Mělnicko, Čechy · Vinařství prof. Krause'}
              </p>
              <p className="text-xs text-stone-300 line-clamp-2">
                {isEn 
                  ? 'Accessible glass pours blending traditional Bohemian varieties for everyday balance, freshness, and food versatility.' 
                  : 'Dostupná cuvée po skle spojující tradiční mělnické odrůdy pro každodenní rovnováhu a svěžest.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
