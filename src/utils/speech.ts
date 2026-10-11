// Web Speech API utility for autonomous synthetic voice pronunciation of dishes and ingredients
// - Completely isolated from pre-recorded audio files
// - Czech Menu: Spoken naturally by a Czech speaker in Czech (cs-CZ)
// - English Menu: Spoken naturally by an English speaker in English (en-US / en-GB)
// - Synchronous user-gesture execution for Android & iOS mobile safety
// - Automatic active speech verification check resetting state if mobile browser ignores speech
// - Watchdog failsafe timer preventing endless yellow speaker icons on mobile

import { soundManager } from './sound';

type SpeechListener = (speakingId: string | null) => void;

interface SpeechChunk {
  text: string;
  lang: 'en' | 'cs';
  voice: SpeechSynthesisVoice | null;
  rate: number;
}

class SpeechManager {
  private currentId: string | null = null;
  private listeners: Set<SpeechListener> = new Set();
  private voicesLoaded: boolean = false;
  private activeUtterances: Set<SpeechSynthesisUtterance> = new Set();
  private watchdogTimer: NodeJS.Timeout | null = null;
  private pollInterval: NodeJS.Timeout | null = null;
  private queue: SpeechChunk[] = [];
  private isUnlocked: boolean = false;

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

      // Unlock iOS Safari / Mobile Chrome SpeechSynthesis on first user interaction
      const unlock = () => {
        if (!this.isUnlocked) {
          this.isUnlocked = true;
          try {
            window.speechSynthesis.resume();
            // Silent dummy utterance to prime WebSpeech engine on WebKit/iOS
            const dummy = new SpeechSynthesisUtterance('');
            dummy.volume = 0;
            window.speechSynthesis.speak(dummy);
          } catch {}
        }
        window.removeEventListener('click', unlock);
        window.removeEventListener('touchstart', unlock);
      };
      window.addEventListener('click', unlock, { passive: true });
      window.addEventListener('touchstart', unlock, { passive: true });
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

      setTimeout(onDone, 500);
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

  public getCurrentId(): string | null {
    return this.currentId;
  }

  private clearTimers() {
    if (this.watchdogTimer) {
      clearTimeout(this.watchdogTimer);
      this.watchdogTimer = null;
    }
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
      this.pollInterval = null;
    }
  }

  public stop() {
    this.clearTimers();
    this.queue = [];

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
   * Split text into short, natural sentence/phrase chunks (<60 chars) to prevent iOS 15s speech timeout.
   */
  private splitIntoChunks(text: string, maxLen = 60): string[] {
    if (!text || !text.trim()) return [];

    const rawParts = text.split(/(?<=[.?!,;:–—\n])\s+/);
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

    const safeChunks: string[] = [];
    for (const chunk of chunks) {
      if (chunk.length <= maxLen * 1.3) {
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

  private cleanCzechText(text: string): string {
    return (text || '')
      .replace(/<[^>]*>/g, '')
      .replace(/\b(\d+)\s*ml\b/gi, '$1 mililitrů')
      .replace(/\b(\d+)\s*cl\b/gi, '$1 centilitrů')
      .replace(/\b(\d+)\s*dl\b/gi, '$1 decilitrů')
      .replace(/\b(\d+)\s*l\b/gi, '$1 litrů')
      .replace(/\b(\d+)\s*g\b/gi, '$1 gramů')
      .replace(/\b(\d+)\s*kg\b/gi, '$1 kilogramů')
      .replace(/\b(\d+)\s*ks\b/gi, '$1 kusů')
      .replace(/\b(\d+)\s*%\b/gi, '$1 procent')
      .replace(/\bml\b/gi, 'mililitrů')
      .replace(/\bcl\b/gi, 'centilitrů')
      .replace(/\bdl\b/gi, 'decilitrů')
      .replace(/\bg\b/gi, 'gramů')
      .replace(/\bks\b/gi, 'kusů')
      .replace(/&/g, ' a ')
      .replace(/[•;·]/g, ', ')
      .replace(/\s*\/\s*/g, ', ')
      .replace(/["'“”«»]/g, '')
      .replace(/[\r\n]+/g, '. ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private cleanEnglishText(text: string): string {
    return (text || '')
      .replace(/<[^>]*>/g, '')
      .replace(/\b(\d+)\s*ml\b/gi, '$1 milliliters')
      .replace(/\b(\d+)\s*cl\b/gi, '$1 centiliters')
      .replace(/\b(\d+)\s*l\b/gi, '$1 liters')
      .replace(/\b(\d+)\s*g\b/gi, '$1 grams')
      .replace(/\b(\d+)\s*kg\b/gi, '$1 kilograms')
      .replace(/\b(\d+)\s*ks\b/gi, '$1 pieces')
      .replace(/\b(\d+)\s*%\b/gi, '$1 percent')
      .replace(/\bml\b/gi, 'milliliters')
      .replace(/\bcl\b/gi, 'centiliters')
      .replace(/\bl\b/gi, 'liters')
      .replace(/\bg\b/gi, 'grams')
      .replace(/\bkg\b/gi, 'kilograms')
      .replace(/\bks\b/gi, 'pieces')
      .replace(/\bFUZE\b/g, 'Fuse')
      .replace(/&/g, ' and ')
      .replace(/[•;·]/g, ', ')
      .replace(/\s*\/\s*/g, ', ')
      .replace(/["'“”«»]/g, '')
      .replace(/[\r\n]+/g, '. ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private getVoices(): { enVoice: SpeechSynthesisVoice | null; csVoice: SpeechSynthesisVoice | null } {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return { enVoice: null, csVoice: null };
    }

    const voices = window.speechSynthesis.getVoices() || [];

    const enVoices = voices.filter(v => v.lang.toLowerCase().startsWith('en'));
    let enVoice: SpeechSynthesisVoice | null = null;
    if (enVoices.length > 0) {
      enVoice =
        enVoices.find(v => v.localService && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('David') || v.name.includes('Zira'))) ||
        enVoices.find(v => v.localService) ||
        enVoices[0] ||
        null;
    }

    const csVoices = voices.filter(v => v.lang.toLowerCase().startsWith('cs'));
    let csVoice: SpeechSynthesisVoice | null = null;
    if (csVoices.length > 0) {
      csVoice =
        csVoices.find(v => v.localService && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Jakub') || v.name.includes('Zuzana') || v.name.includes('Jan') || v.name.includes('Vlasta'))) ||
        csVoices.find(v => v.localService) ||
        csVoices[0] ||
        null;
    }

    return { enVoice, csVoice };
  }

  private processQueue(sessionId: string) {
    if (this.currentId !== sessionId) return;

    if (this.queue.length === 0) {
      this.stop();
      return;
    }

    const currentChunk = this.queue.shift();
    if (!currentChunk || !currentChunk.text.trim()) {
      this.processQueue(sessionId);
      return;
    }

    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      }

      const utterance = new SpeechSynthesisUtterance(currentChunk.text);
      utterance.lang = currentChunk.lang === 'cs' ? 'cs-CZ' : 'en-US';

      if (currentChunk.voice) {
        try {
          utterance.voice = currentChunk.voice;
        } catch {}
      }

      utterance.rate = currentChunk.rate;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      this.activeUtterances.add(utterance);
      if (typeof window !== 'undefined') {
        (window as unknown as { __fuzeActiveUtterances?: Set<SpeechSynthesisUtterance> }).__fuzeActiveUtterances = this.activeUtterances;
      }

      utterance.onend = () => {
        this.activeUtterances.delete(utterance);
        this.processQueue(sessionId);
      };

      utterance.onerror = () => {
        this.activeUtterances.delete(utterance);
        this.processQueue(sessionId);
      };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn('Speech chunk playback notice:', err);
      this.processQueue(sessionId);
    }
  }

  /**
   * Main entry point for synthetic text-to-speech pronunciation.
   * Completely autonomous, synchronous user-gesture start, with mobile auto-reset safety.
   */
  public speak(id: string, name: string, description: string, lang: 'cs' | 'en' = 'cs') {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('SpeechSynthesis is not supported in this browser environment.');
      return;
    }

    // Toggle off if currently speaking exact same item
    if (this.currentId === id) {
      this.stop();
      return;
    }

    // Play subtle click sound for UI feedback
    try {
      soundManager.playClick();
    } catch {}

    // Cancel any previous speech
    this.stop();

    // Direct synchronous speech engine preparation
    try {
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    } catch {}

    this.initVoices();
    const { enVoice, csVoice } = this.getVoices();

    const chunksToPlay: SpeechChunk[] = [];
    let totalTextChars = 0;

    if (lang === 'en') {
      const cleanName = this.cleanEnglishText(name);
      const cleanDesc = this.cleanEnglishText(description);
      const fullText = cleanName ? (cleanDesc ? `${cleanName}. ${cleanDesc}` : cleanName) : cleanDesc;
      totalTextChars = fullText.length;
      const textChunks = this.splitIntoChunks(fullText, 60);

      for (const t of textChunks) {
        chunksToPlay.push({
          text: t,
          lang: 'en',
          voice: enVoice,
          rate: 0.95
        });
      }
    } else {
      const cleanName = this.cleanCzechText(name);
      const cleanDesc = this.cleanCzechText(description);
      const fullText = cleanDesc ? `${cleanName}. ${cleanDesc}` : `${cleanName}.`;
      totalTextChars = fullText.length;
      const descChunks = this.splitIntoChunks(fullText, 60);

      for (const c of descChunks) {
        chunksToPlay.push({
          text: c,
          lang: 'cs',
          voice: csVoice,
          rate: 0.98
        });
      }
    }

    if (chunksToPlay.length === 0) return;

    this.currentId = id;
    this.queue = chunksToPlay;
    this.notify();

    // SAFETY WATCHDOG & MOBILE MONITOR:
    // Periodically verifies if speech ended or was aborted on mobile browsers, preventing stuck yellow state!
    const maxDurationMs = Math.max(5000, Math.min(25000, totalTextChars * 110 + 2000));
    let silentCounter = 0;

    this.watchdogTimer = setTimeout(() => {
      if (this.currentId === id) {
        this.stop();
      }
    }, maxDurationMs);

    this.pollInterval = setInterval(() => {
      if (this.currentId !== id) {
        this.clearTimers();
        return;
      }

      const isSpeakingInBrowser = typeof window !== 'undefined' && 'speechSynthesis' in window && (window.speechSynthesis.speaking || window.speechSynthesis.pending);

      if (!isSpeakingInBrowser) {
        silentCounter++;
        // If browser speech synthesis is silent for 3 consecutive poll cycles (750ms) and queue is empty, auto-reset!
        if (silentCounter >= 3 && this.queue.length === 0) {
          this.stop();
        }
      } else {
        silentCounter = 0;
      }
    }, 250);

    // Start processing queue synchronously within click event
    this.processQueue(id);
  }

  public speakItem(id: string, name: string, description: string, lang: 'cs' | 'en' = 'cs') {
    this.speak(id, name, description, lang);
  }
}

export const speechManager = new SpeechManager();
