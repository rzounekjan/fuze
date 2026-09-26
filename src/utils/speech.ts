// Web Speech API utility for bilingual (Czech & English) audio pronunciation of dishes and ingredients
// Features:
// 1. Sentence/clause chunking (prevents mobile buffer overflow & mid-speech freeze)
// 2. Dual-voice pronunciation & phonetic English dialect transcription for Czech menu
// 3. Absolute mobile safety: NO destructive pause/resume calls
// 4. Watchdog failsafe timer preventing endless blinking speaker icons
// 5. Strong garbage-collection protection across WebKit and Chromium

import { soundManager } from './sound';

type SpeechListener = (speakingId: string | null) => void;

interface SpeechChunk {
  text: string;
  lang: 'en' | 'cs';
  voice: SpeechSynthesisVoice | null;
  rate: number;
}

// Comprehensive phonetic English dialect mapping for terms in Czech menu:
// Allows the Czech TTS voice to pronounce English dishes, cocktails, and ingredients
// with authentic English dialect, phonetics, and accent.
const ENGLISH_DIALECT_MAP: [RegExp, string][] = [
  // Brand & Concept
  [/\bFUZEro\b/gi, 'Fjúzro'],
  [/\bTransFUZE\b/gi, 'Transfjúz'],
  [/\bDisFUZE\b/gi, 'Disfjúz'],
  [/\bInFUZE\b/gi, 'Infjúz'],
  [/\bFUZEnáč\b/gi, 'Fjúzenáč'],
  [/\bFuzovice\b/gi, 'Fjúzovice'],
  [/\bFUZE\b/gi, 'Fjúz'],
  [/\bFuze\b/gi, 'Fjúz'],

  // Cocktails & Signatures
  [/\bOld\s+Fashioned\b/gi, 'Ould Fešnd'],
  [/\bFlorencia\s+Fashion\b/gi, 'Florencija Fešn'],
  [/\bWhiskey\s+Sour\b/gi, 'Viski Saur'],
  [/\bWhisky\s+Sour\b/gi, 'Viski Saur'],
  [/\bApricot\s+Daniel'?s\s+Sour\b/gi, 'Ejjprikot Denijels Saur'],
  [/\bEspresso\s+Martini\b/gi, 'Espreso Martíni'],
  [/\bFrench\s+Martini\b/gi, 'Frenč Martíni'],
  [/\bPorn\s*star\s+Martini\b/gi, 'Pórn star Martíni'],
  [/\bMartini\s+Dry\b/gi, 'Martíni Draj'],
  [/\bDark\s*(&|'n'|and)\s*Stormy\b/gi, 'Dárk end Stórmi'],
  [/\bFrench\s+75\b/gi, 'Frenč sefnty fájv'],
  [/\bFrozen\s+Strawberry\s+Daiquiri\b/gi, 'Frouzn Stróberi Dajkiri'],
  [/\bStrawberry\b/gi, 'Stróberi'],
  [/\bDaiquiri\b/gi, 'Dajkiri'],
  [/\bSkinny\s+bitch\b/gi, 'Skiny bič'],
  [/\bMoscow\s+mule\b/gi, 'Moskou mjúl'],
  [/\bTruffle\s+Negroni\b/gi, 'Trafl Negróni'],
  [/\bFizzy\s+Fuze\b/gi, 'Fizi Fjúz'],
  [/\bA\.?M\.?\s+Spritz\b/gi, 'Ej Em Špric'],
  [/\bAperol\s+Spritz\b/gi, 'Aperol Špric'],
  [/\bHugo\s+Spritz\b/gi, 'Húgo Špric'],
  [/\bSpritz\b/gi, 'Špric'],
  [/\bSpicy\s+Apricot\s+Margarita\b/gi, 'Spajsi Ejjprikot Margaríta'],
  [/\bMargarita\b/gi, 'Margaríta'],
  [/\bCuba\s+Libre\b/gi, 'Kuba Líbre'],
  [/\bMai[\s-]Tai\b/gi, 'Máj Táj'],
  [/\bPaloma\b/gi, 'Palóma'],
  [/\bCosmopolitan\b/gi, 'Kozmopolitn'],
  [/\bPassionata\b/gi, 'Pasionáta'],
  [/\bApricot\s+Cabaret\b/gi, 'Ejjprikot Kabare'],
  [/\bCampari\s+Bitter\b/gi, 'Kampari Bitr'],
  [/\bBitter\s+soda\b/gi, 'Bitr souda'],

  // Gin & Tonics, Mixers & Soft Drinks
  [/\bGin\s*(&|and)?\s*Tonic\b/gi, 'Džin end Tonik'],
  [/\bPink\s+Gin\b/gi, 'Pink Džin'],
  [/\bDry\s+Gin\b/gi, 'Draj Džin'],
  [/\bThomas\s+Henry\b/gi, 'Tomas Henri'],
  [/\bFever[\s-]Tree\b/gi, 'Fívr Trí'],
  [/\bGinger\s+Beer\b/gi, 'Džindžr bír'],
  [/\bGinger\s+Ale\b/gi, 'Džindžr ejl'],
  [/\bMediterranean\b/gi, 'Mediterénien'],
  [/\bGuilti\s+tonic\s+lime\b/gi, 'Gilti tonik lajm'],
  [/\bHendrick'?s\b/gi, 'Hendriks'],
  [/\bEndorphin\s+Magic\s+imaGINe\b/gi, 'Endorfin Medžik Imedžin'],
  [/\bEndorphin\s+Copper\s+Moon\b/gi, 'Endorfin Kopr Mún'],
  [/\bFlame\s+of\s+Passion\b/gi, 'Flejm of Pešn'],
  [/\bPink\s+Grapefruit\b/gi, 'Pink Grepfrút'],
  [/\bFresh\s+juice\b/gi, 'Freš džus'],
  [/\bFresh\b/gi, 'Freš'],
  [/\bJuice\b/gi, 'Džus'],
  [/\bCoca\s+Cola\b/gi, 'Koka Kola'],
  [/\bzero\b/gi, 'zíro'],
  [/\bRed\s+Bull\b/gi, 'Red Bul'],
  [/\bCider\b/gi, 'Sajdr'],
  [/\bGingerbread\b/gi, 'Džindžrbred'],
  [/\bSour\s+Cherry\b/gi, 'Saur Čeri'],
  [/\bPassion\s+Fruit\b/gi, 'Pešn frút'],
  [/\bSencha\s*(&|and)?\s*Assam\b/gi, 'Senča end Asam'],
  [/\bAlcohol\s+free\b/gi, 'Alkohól frí'],

  // Coffee & Hot Drinks
  [/\bEspresso\s+macchiato\b/gi, 'Espreso makjáto'],
  [/\bDouble\s+espresso\b/gi, 'Dabl espreso'],
  [/\bFlat\s+white\b/gi, 'Flet vajt'],
  [/\bAmericano\s+caff[eé]\b/gi, 'Amerikáno kafé'],
  [/\bCaff[eé]\s+latte\b/gi, 'Kafé laté'],
  [/\bChai\s+latte\b/gi, 'Čaj laté'],
  [/\bCappuccino\b/gi, 'Kapučíno'],
  [/\bEspresso\b/gi, 'Espreso'],
  [/\bIce\s+Tea\b/gi, 'Ájs Tí'],
  [/\bIrish\s+Coffee\b/gi, 'Ajriš Kófi'],
  [/\bHot\s+Toddy\b/gi, 'Hot Tody'],

  // Food, Dishes & Steaks
  [/\bThor'?s\s+Hammer\b/gi, 'Tórs Hemr'],
  [/\bShrimp\s+roll\b/gi, 'Šrimp rol'],
  [/\bBeef\s+Tartare\b/gi, 'Bíf Tartár'],
  [/\bCaesar\s+salát\b/gi, 'Cézar salát'],
  [/\bWaldorf\s+salát\b/gi, 'Valdorf salát'],
  [/\bCaesar\b/gi, 'Cézar'],
  [/\bWaldorf\b/gi, 'Valdorf'],
  [/\bSvíčková\s+Wellington\b/gi, 'Svíčková Velingtn'],
  [/\bWellington\b/gi, 'Velingtn'],
  [/\bUS\s+Prime\s+Steaky\b/gi, 'Jú Es Prajm Stejky'],
  [/\bUS\s+Prime\s+hovězí\s+burger\b/gi, 'Jú Es Prajm hovězí börgr'],
  [/\bUS\s+Prime\b/gi, 'Jú Es Prajm'],
  [/\bRed\s+Leicester\b/gi, 'Red Lestr'],
  [/\bWagyu\s+Pastrami\b/gi, 'Vagjú Pastrámi'],
  [/\bWagyu\b/gi, 'Vagjú'],
  [/\bPastrami\b/gi, 'Pastrámi'],
  [/\bClub\s+Sandwich\b/gi, 'Klab Sendvič'],
  [/\bSandwich\b/gi, 'Sendvič'],
  [/\bFish\s*(&|and)?\s*Chips\b/gi, 'Fiš end Čips'],
  [/\bNew\s+York\s+Cheesecake\b/gi, 'Ňú Jork Čízkéjk'],
  [/\bCheesecake\b/gi, 'Čízkéjk'],
  [/\bPork\s+[Bb]elly\b/gi, 'Pórk beli'],
  [/\bSmoked\s+[Ss]almon\b/gi, 'Smoukt Semn'],
  [/\bRib[\s-]Eye\b/gi, 'Rib Áj'],
  [/\bTenderloin\b/gi, 'Tendrlojn'],
  [/\bFlank\b/gi, 'Flenk'],
  [/\bSteaky\b/gi, 'Stejky'],
  [/\bSteak\b/gi, 'Stejk'],
  [/\bSteaku\b/gi, 'Stejku'],
  [/\bBurger\b/gi, 'Börgr'],
  [/\bPopcorn\b/gi, 'Popkórn'],
  [/\bDuroc\b/gi, 'Dýrok'],
  [/\bColeslaw\b/gi, 'Koulsló'],
  [/\bCheddar\b/gi, 'Čedar'],
  [/\bBacon\b/gi, 'Bejkn'],
  [/\bTruffle\b/gi, 'Trafl'],
  [/\bCrunchy\b/gi, 'Kranči'],
  [/\bCrispy\b/gi, 'Krispi'],
  [/\bDressing\b/gi, 'Dresink'],
  [/\bTopping\b/gi, 'Topink'],
  [/\bDip\b/gi, 'Dip'],
  [/\bJalape[ñn]os\b/gi, 'Chalapeňos'],
  [/\bJalape[ñn]o\b/gi, 'Chalapeňo'],

  // Culinary French/International Terms
  [/\bSous[\s-]vide\b/gi, 'Sú víd'],
  [/\bDemi[\s-]glace\b/gi, 'Demi glás'],
  [/\bFoie\s+gras\b/gi, 'Foa grá'],
  [/\bBrioška\b/gi, 'Brioška'],
  [/\bBriošce\b/gi, 'Briošce'],
  [/\bConsomm[eé]\b/gi, 'Konsomé'],
  [/\bGanache\b/gi, 'Ganáš'],
  [/\bFines\s+herbes\b/gi, 'Fin zerb'],
  [/\bChoron\b/gi, 'Šorón'],
  [/\bChimichurri\b/gi, 'Čimičuri'],
  [/\bCornichons\b/gi, 'Kornišonky'],
  [/\bYuzu\b/gi, 'Juzu'],

  // Spirits & Wine Terms
  [/\bAngels\s*(&|and)?\s*Cowboys\b/gi, 'Ejndžls end Kaubojs'],
  [/\bAngostura\s+Bitters\b/gi, 'Angostura bitrs'],
  [/\bAngostura\b/gi, 'Angostura'],
  [/\bBitters\b/gi, 'Bitrs'],
  [/\bBourbon\b/gi, 'Burbon'],
  [/\bWhiskey\b/gi, 'Viski'],
  [/\bWhisky\b/gi, 'Viski'],
  [/\bGin\b/gi, 'Džin'],
  [/\bTonic\b/gi, 'Tonik'],
  [/\bSour\b/gi, 'Saur'],
  [/\bTwist\b/gi, 'Tvist'],
  [/\bMonkey\s+Shoulder\b/gi, 'Manki Šouldr'],
  [/\bJack\s+Daniel'?s\b/gi, 'Džek Denijels'],
  [/\bGoldcock\b/gi, 'Gouldkok'],
  [/\bGlenfiddich\b/gi, 'Glenfidyk'],
  [/\bJameson\b/gi, 'Džejmsn'],
  [/\bGrey\s+Goose\b/gi, 'Grej Gús'],
  [/\bHavana\s+Club\b/gi, 'Havana Klab'],
  [/\bEl\s+Dorado\b/gi, 'El Dorádo'],
  [/\bMount\s+Gay\b/gi, 'Maunt Gej'],
  [/\bDiplom[aá]tico\b/gi, 'Diplomatiko'],
  [/\bJ[aä]germeister\b/gi, 'Jégrmajstr'],
  [/\bChardonnay\b/gi, 'Šardoné'],
  [/\bSauvignon\s+Blanc\b/gi, 'Sovinjón Blank'],
  [/\bSauvignon\b/gi, 'Sovinjón'],
  [/\bPinot\s+Noir\b/gi, 'Píno Noár'],
  [/\bPinot\s+Gris\b/gi, 'Píno Grí'],
  [/\bMerlot\b/gi, 'Merló'],
  [/\bCabernet\b/gi, 'Kaberné'],
  [/\bCr[eé]mant\b/gi, 'Kremán'],
  [/\bCuv[eé]e\b/gi, 'Kyvé'],
  [/\bBrut\b/gi, 'Brýt'],
  [/\bProsecco\b/gi, 'Proseko'],
  [/\bZweigelt\b/gi, 'Cvajgelt'],
  [/\bZinfandel\b/gi, 'Cinfandl'],
];

// Detect if a title is primarily an English / international cocktail or dish name
function isEnglishOrInternationalTitle(title: string): boolean {
  const normalized = title.trim();
  const englishKeywords = [
    'old fashioned', 'whiskey', 'whisky', 'martini', 'daiquiri', 'sour', 'mule',
    'bitch', 'french', 'fuze', 'spritz', 'mai-tai', 'mai tai', 'mojito', 'margarita',
    'paloma', 'cosmopolitan', 'tonic', 'gin', 'shrimp roll', 'burger', 'steak',
    'pastrami', 'cheesecake', 'tartare', 'chips', 'sandwich', 'flat white',
    'cappuccino', 'espresso', 'fresh', 'juice', 'cola', 'red bull', 'cider',
    'hammer', 'prime', 'leicester', 'angels', 'cowboys', 'monkey shoulder',
    'jack daniel', 'grey goose', 'havana club', 'negroni'
  ];
  const lower = normalized.toLowerCase();
  return englishKeywords.some(kw => lower.includes(kw));
}

class SpeechManager {
  private currentId: string | null = null;
  private listeners: Set<SpeechListener> = new Set();
  private voicesLoaded: boolean = false;
  private activeUtterances: Set<SpeechSynthesisUtterance> = new Set();
  private watchdogTimer: NodeJS.Timeout | null = null;
  private queue: SpeechChunk[] = [];
  private isProcessingQueue: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.initVoices();
      try {
        window.speechSynthesis.addEventListener('voiceschanged', () => this.initVoices());
      } catch {
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = () => this.initVoices();
        }
      }
    }
  }

  private initVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        this.voicesLoaded = true;
      }
    } catch {}
  }

  public areVoicesReady(): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return true;
    const voices = window.speechSynthesis.getVoices();
    return (voices && voices.length > 0) || this.voicesLoaded;
  }

  public ensureVoicesReady(): Promise<boolean> {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return Promise.resolve(true);
    if (this.areVoicesReady()) {
      this.initVoices();
      return Promise.resolve(true);
    }

    return new Promise<boolean>((resolve) => {
      let resolved = false;
      const onDone = () => {
        if (!resolved) {
          resolved = true;
          this.initVoices();
          resolve(true);
        }
      };

      const handler = () => {
        onDone();
        try {
          window.speechSynthesis.removeEventListener('voiceschanged', handler);
        } catch {}
      };

      try {
        window.speechSynthesis.addEventListener('voiceschanged', handler);
      } catch {
        window.speechSynthesis.onvoiceschanged = handler;
      }

      setTimeout(onDone, 800);
    });
  }

  public subscribe(listener: SpeechListener): () => void {
    this.listeners.add(listener);
    listener(this.currentId);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach(fn => fn(this.currentId));
  }

  public isSpeaking(id?: string): boolean {
    if (id) {
      return this.currentId === id;
    }
    return this.currentId !== null;
  }

  private clearWatchdog() {
    if (this.watchdogTimer) {
      clearTimeout(this.watchdogTimer);
      this.watchdogTimer = null;
    }
  }

  public stop() {
    this.clearWatchdog();
    this.queue = [];
    this.isProcessingQueue = false;

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }

    this.activeUtterances.clear();
    if (typeof window !== 'undefined') {
      (window as unknown as { __fuzeActiveUtterances?: unknown }).__fuzeActiveUtterances = null;
    }

    if (this.currentId !== null) {
      this.currentId = null;
      this.notify();
    }
  }

  /**
   * Split a block of text into natural, digestible sentence/clause chunks (<85 chars).
   * This completely prevents mobile buffer timeouts, audio buffer overflows, and
   * ensures speech never cuts off in the middle on Android or iOS.
   */
  private splitIntoChunks(text: string, maxLen = 85): string[] {
    const rawParts = text.split(/(?<=[.?!,;–—])\s+/);
    const chunks: string[] = [];
    let current = '';

    for (const part of rawParts) {
      const trimmed = part.trim();
      if (!trimmed) continue;

      if (!current) {
        current = trimmed;
      } else if ((current + ' ' + trimmed).length <= maxLen) {
        current += ' ' + trimmed;
      } else {
        chunks.push(current.trim());
        current = trimmed;
      }
    }

    if (current && current.trim()) {
      chunks.push(current.trim());
    }

    // Safety fallback: if any individual chunk exceeds maxLen * 1.5, break it at word boundaries
    const safeChunks: string[] = [];
    for (const chunk of chunks) {
      if (chunk.length <= maxLen * 1.4) {
        safeChunks.push(chunk);
      } else {
        const words = chunk.split(' ');
        let sub = '';
        for (const w of words) {
          if (!sub) {
            sub = w;
          } else if ((sub + ' ' + w).length <= maxLen) {
            sub += ' ' + w;
          } else {
            safeChunks.push(sub.trim());
            sub = w;
          }
        }
        if (sub.trim()) safeChunks.push(sub.trim());
      }
    }

    return safeChunks.length > 0 ? safeChunks : [text];
  }

  /**
   * Cleans text for Czech speech:
   * 1. Replaces units with smooth Czech spoken words
   * 2. Replaces English loanwords with authentic Czech phonetic dialect transcription
   */
  private cleanCzechTextWithEnglishDialect(text: string): string {
    let result = text || '';

    // Apply phonetic dialect map so Czech speaker pronounces English terms naturally
    for (const [regex, phonetic] of ENGLISH_DIALECT_MAP) {
      result = result.replace(regex, phonetic);
    }

    // Expand measurement units
    return result
      .replace(/\bml\b/gi, 'mililitrů')
      .replace(/\bcl\b/gi, 'centilitrů')
      .replace(/\bl\b/gi, 'litrů')
      .replace(/\bg\b/gi, 'gramů')
      .replace(/\bkg\b/gi, 'kilogramů')
      .replace(/\bks\b/gi, 'kusů')
      .replace(/[•;·]/g, ', ')
      .replace(/\s*\/\s*/g, ', ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Cleans text for English speech:
   * Formats abbreviations and units for natural English pronunciation
   */
  private cleanEnglishText(text: string): string {
    return (text || '')
      .replace(/\bml\b/gi, 'milliliters')
      .replace(/\bcl\b/gi, 'centiliters')
      .replace(/\bl\b/gi, 'liters')
      .replace(/\bg\b/gi, 'grams')
      .replace(/\bkg\b/gi, 'kilograms')
      .replace(/\bks\b/gi, 'pieces')
      .replace(/\bFUZE\b/g, 'Fuse')
      .replace(/[•;·]/g, ', ')
      .replace(/\s*\/\s*/g, ', ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Resolves appropriate voices:
   * English: ONLY genuine English voice (en-US, en-GB, en-AU)
   * Czech: High-quality or local Czech voice (with Slovak fallback if missing on PC)
   */
  private getVoices(): { enVoice: SpeechSynthesisVoice | null; csVoice: SpeechSynthesisVoice | null } {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return { enVoice: null, csVoice: null };
    }

    const voices = window.speechSynthesis.getVoices() || [];
    const isOffline = typeof navigator !== 'undefined' && !navigator.onLine;

    // 1. English voice (STRICTLY 'en')
    const enVoices = voices.filter(v => v.lang.toLowerCase().startsWith('en'));
    let enVoice: SpeechSynthesisVoice | null = null;
    if (enVoices.length > 0) {
      if (isOffline) {
        enVoice = enVoices.find(v => v.localService) || enVoices[0];
      } else {
        enVoice =
          enVoices.find(v => v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('David') || v.name.includes('Zira') || v.name.includes('Premium')) ||
          enVoices.find(v => v.localService) ||
          enVoices[0];
      }
    }

    // 2. Czech voice
    const csVoices = voices.filter(v => v.lang.toLowerCase().startsWith('cs'));
    let csVoice: SpeechSynthesisVoice | null = null;
    if (csVoices.length > 0) {
      if (isOffline) {
        csVoice = csVoices.find(v => v.localService) || csVoices[0];
      } else {
        csVoice =
          csVoices.find(v => v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Premium') || v.name.includes('Jakub') || v.name.includes('Vlasta') || v.name.includes('Zuzana')) ||
          csVoices.find(v => v.localService) ||
          csVoices[0];
      }
    } else {
      // Slovak fallback if Czech is missing on device
      csVoice = voices.find(v => v.lang.toLowerCase().startsWith('sk')) || null;
    }

    return { enVoice, csVoice };
  }

  /**
   * Processes the speech chunk queue sequentially.
   * On mobile, sequentially playing small chunks is 100% reliable,
   * never pauses or freezes, and always completes the full text.
   */
  private processQueue(sessionId: string) {
    if (this.currentId !== sessionId) return;

    if (this.queue.length === 0) {
      // All chunks finished cleanly!
      this.clearWatchdog();
      this.activeUtterances.clear();
      this.currentId = null;
      this.isProcessingQueue = false;
      this.notify();
      return;
    }

    const currentChunk = this.queue.shift();
    if (!currentChunk || !currentChunk.text.trim()) {
      this.processQueue(sessionId);
      return;
    }

    try {
      const utterance = new SpeechSynthesisUtterance(currentChunk.text);

      if (currentChunk.voice) {
        utterance.voice = currentChunk.voice;
        utterance.lang = currentChunk.voice.lang;
      } else {
        utterance.lang = currentChunk.lang === 'en' ? 'en-US' : 'cs-CZ';
      }

      utterance.rate = currentChunk.rate;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      // Keep strong reference to prevent GC on mobile WebKit and Chrome
      this.activeUtterances.add(utterance);
      (window as unknown as { __fuzeActiveUtterances?: Set<SpeechSynthesisUtterance> }).__fuzeActiveUtterances = this.activeUtterances;

      utterance.onend = () => {
        this.activeUtterances.delete(utterance);
        // Continue to next chunk
        this.processQueue(sessionId);
      };

      utterance.onerror = (e) => {
        this.activeUtterances.delete(utterance);
        if (e.error !== 'canceled' && e.error !== 'interrupted') {
          console.warn('Speech synthesis chunk notice:', e.error);
        }
        // Even on individual chunk error, continue playing next chunk!
        this.processQueue(sessionId);
      };

      // Speak current chunk
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn('Chunk playback error:', err);
      this.processQueue(sessionId);
    }
  }

  public speak(id: string, name: string, description: string, lang: 'cs' | 'en' = 'cs') {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('SpeechSynthesis is not supported in this browser.');
      return;
    }

    // Toggle off if currently speaking the exact same item
    if (this.currentId === id) {
      this.stop();
      return;
    }

    // 1. Play subtle audio click so Web Audio is unlocked
    try {
      soundManager.playClick();
    } catch {}

    // 2. Stop any existing playback
    this.stop();

    // 3. Refresh voices
    this.initVoices();
    const { enVoice, csVoice } = this.getVoices();

    const chunksToPlay: SpeechChunk[] = [];
    let totalTextChars = 0;

    // ==========================================
    // 1. ENGLISH MODE (English Menu)
    // ==========================================
    if (lang === 'en') {
      const cleanName = this.cleanEnglishText(name);
      let cleanDesc = this.cleanEnglishText(description);

      if (cleanDesc && !cleanDesc.toLowerCase().startsWith('ingredients') && !cleanDesc.toLowerCase().startsWith('recipe')) {
        cleanDesc = `Ingredients: ${cleanDesc}`;
      }

      const fullText = cleanName ? `${cleanName}. ${cleanDesc}` : cleanDesc;
      totalTextChars = fullText.length;
      const textChunks = this.splitIntoChunks(fullText, 85);

      for (const t of textChunks) {
        chunksToPlay.push({
          text: t,
          lang: 'en',
          voice: enVoice,
          rate: 0.95
        });
      }
    }
    // ==========================================
    // 2. CZECH MODE (Czech Menu)
    // ==========================================
    else {
      const hasEnglishTitle = isEnglishOrInternationalTitle(name);

      // A) Title pronunciation:
      if (hasEnglishTitle && enVoice) {
        // DUAL-VOICE FEATURE:
        // Use genuine native English voice to pronounce the English cocktail/dish name!
        const cleanEnName = this.cleanEnglishText(name);
        totalTextChars += cleanEnName.length;
        chunksToPlay.push({
          text: `${cleanEnName}.`,
          lang: 'en',
          voice: enVoice,
          rate: 0.92
        });
      } else {
        // Pure Czech title, or phonetized English title if no English voice is installed
        const phonetizedName = this.cleanCzechTextWithEnglishDialect(name);
        totalTextChars += phonetizedName.length;
        chunksToPlay.push({
          text: `${phonetizedName}.`,
          lang: 'cs',
          voice: csVoice,
          rate: 0.98
        });
      }

      // B) Ingredients / Description pronunciation:
      // Formatted in Czech with complete English dialect phonetic conversion
      // so any English loanwords sound authentic when read by the Czech speaker!
      if (description && description.trim()) {
        let cleanDesc = this.cleanCzechTextWithEnglishDialect(description);
        if (!cleanDesc.toLowerCase().startsWith('složení') && !cleanDesc.toLowerCase().startsWith('popis')) {
          cleanDesc = `Složení: ${cleanDesc}`;
        }
        totalTextChars += cleanDesc.length;

        const descChunks = this.splitIntoChunks(cleanDesc, 85);
        for (const c of descChunks) {
          chunksToPlay.push({
            text: c,
            lang: 'cs',
            voice: csVoice,
            rate: 0.98
          });
        }
      }
    }

    if (chunksToPlay.length === 0) return;

    // Chromium/Mobile IPC workaround: wait 30ms after cancel() to start queue
    setTimeout(() => {
      this.currentId = id;
      this.queue = chunksToPlay;
      this.isProcessingQueue = true;
      this.notify();

      // SAFETY WATCHDOG TIMER:
      // Guarantees that the speaker icon will NEVER blink endlessly if the mobile OS
      // drops speech events or cuts off audio in background!
      // Estimated reading time: ~14 characters per second + 5000ms buffer
      const safeDurationMs = Math.max(9000, totalTextChars * 125 + 5000);
      this.clearWatchdog();
      this.watchdogTimer = setTimeout(() => {
        if (this.currentId === id) {
          console.warn('Speech watchdog failsafe: cleanly ending speech session.');
          this.stop();
        }
      }, safeDurationMs);

      // Start sequential queue processing
      this.processQueue(id);
    }, 30);
  }
}

export const speechManager = new SpeechManager();
