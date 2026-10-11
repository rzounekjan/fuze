import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore';
import { db, auth } from '../firebase';
import { EMBEDDED_AUDIO_TRACKS, AudioTrackInfo } from '../data/audioManifest';
import { speechManager } from './speech';

export interface SharedAudioRecording {
  id: string;
  name: string;
  audioData: string; // Base64 data URL
  duration: number; // in seconds
  recordedBy?: string;
  lang?: 'cs' | 'en';
  createdAt?: string;
  updatedAt?: string;
  isCustom?: boolean;
}

export interface AudioPlaybackState {
  currentId: string | null;
  isPlaying: boolean;
  duration: number;
  currentTime: number;
  source: 'custom' | 'embedded' | 'speech' | null;
}

type AudioStateListener = (state: AudioPlaybackState) => void;
type RecordingsChangeListener = (recordings: Record<string, SharedAudioRecording>) => void;

class SharedAudioService {
  private customRecordings: Record<string, SharedAudioRecording> = {};
  private activeAudio: HTMLAudioElement | null = null;
  private currentPlayingId: string | null = null;
  private currentSource: 'custom' | 'embedded' | 'speech' | null = null;
  private stateListeners: Set<AudioStateListener> = new Set();
  private recordingsListeners: Set<RecordingsChangeListener> = new Set();
  private unsubscribeFirestore: (() => void) | null = null;
  private isInitialized: boolean = false;

  constructor() {
    this.loadFromLocalStorage();
    this.initFirestoreSync();

    // Listen to speechManager changes to synchronize UI state if speech fallback is used
    speechManager.subscribe((speakingId) => {
      if (this.currentSource === 'speech') {
        if (!speakingId) {
          this.currentPlayingId = null;
          this.currentSource = null;
          this.notifyState();
        }
      }
    });
  }

  private loadFromLocalStorage() {
    try {
      const raw = localStorage.getItem('fuze_audio_recordings_cache');
      if (raw) {
        this.customRecordings = JSON.parse(raw);
      }
    } catch (e) {
      console.warn('Failed to load cached audio recordings from localStorage', e);
    }
  }

  private saveToLocalStorage() {
    try {
      localStorage.setItem('fuze_audio_recordings_cache', JSON.stringify(this.customRecordings));
    } catch (e) {
      console.warn('Failed to save audio recordings to localStorage', e);
    }
  }

  /**
   * Initializes real-time Firestore sync for shared recordings across all devices
   */
  public initFirestoreSync() {
    if (this.isInitialized || typeof window === 'undefined') return;
    this.isInitialized = true;

    try {
      const recordingsCol = collection(db, 'audio_recordings');
      this.unsubscribeFirestore = onSnapshot(
        recordingsCol,
        (snapshot) => {
          const updated: Record<string, SharedAudioRecording> = { ...this.customRecordings };
          snapshot.docs.forEach((docSnap) => {
            const data = docSnap.data();
            if (data && data.audioData) {
              updated[docSnap.id] = {
                id: docSnap.id,
                name: data.name || docSnap.id,
                audioData: data.audioData,
                duration: data.duration || 0,
                recordedBy: data.recordedBy || 'Personál Fuze',
                lang: data.lang || 'cs',
                createdAt: data.createdAt?.toDate?.() ? data.createdAt.toDate().toISOString() : data.createdAt,
                updatedAt: data.updatedAt?.toDate?.() ? data.updatedAt.toDate().toISOString() : data.updatedAt,
                isCustom: true
              };
            }
          });
          this.customRecordings = updated;
          this.saveToLocalStorage();
          this.notifyRecordings();
        },
        (error) => {
          console.warn('Firestore audio recordings sync error (offline or permission):', error);
        }
      );
    } catch (err) {
      console.warn('Could not attach Firestore listener for audio recordings:', err);
    }
  }

  public subscribeState(listener: AudioStateListener): () => void {
    this.stateListeners.add(listener);
    listener(this.getState());
    return () => {
      this.stateListeners.delete(listener);
    };
  }

  public subscribeRecordings(listener: RecordingsChangeListener): () => void {
    this.recordingsListeners.add(listener);
    listener(this.customRecordings);
    return () => {
      this.recordingsListeners.delete(listener);
    };
  }

  private notifyState() {
    const state = this.getState();
    this.stateListeners.forEach((l) => l(state));
  }

  private notifyRecordings() {
    this.recordingsListeners.forEach((l) => l(this.customRecordings));
  }

  public getState(): AudioPlaybackState {
    return {
      currentId: this.currentPlayingId,
      isPlaying: this.currentPlayingId !== null,
      duration: this.activeAudio ? this.activeAudio.duration || 0 : 0,
      currentTime: this.activeAudio ? this.activeAudio.currentTime || 0 : 0,
      source: this.currentSource
    };
  }

  /**
   * Checks whether an audio recording is contained on the site for this item
   * (either human custom recording or pre-recorded static audio track)
   */
  public hasAudioRecording(itemId: string): boolean {
    if (this.customRecordings[itemId]?.audioData) return true;
    if (EMBEDDED_AUDIO_TRACKS[itemId]) return true;
    return false;
  }

  public getTrackInfo(itemId: string): {
    id: string;
    name: string;
    type: 'custom' | 'embedded' | 'synthetic';
    audioUrl?: string;
    audioData?: string;
    recordedBy?: string;
    duration?: number;
  } {
    if (this.customRecordings[itemId]) {
      const rec = this.customRecordings[itemId];
      return {
        id: itemId,
        name: rec.name,
        type: 'custom',
        audioData: rec.audioData,
        recordedBy: rec.recordedBy,
        duration: rec.duration
      };
    }
    if (EMBEDDED_AUDIO_TRACKS[itemId]) {
      const track = EMBEDDED_AUDIO_TRACKS[itemId];
      return {
        id: itemId,
        name: track.name,
        type: 'embedded',
        audioUrl: track.audioUrl,
        recordedBy: 'FUZE Archiv'
      };
    }
    return {
      id: itemId,
      name: itemId,
      type: 'synthetic'
    };
  }

  /**
   * Plays an audio recording with highest quality priority:
   * 1. Custom user/staff recording (from Firestore or cache)
   * 2. Embedded pre-recorded audio track (public/audio/*.mp3)
   * 3. Fallback to speechManager
   */
  public async play(
    itemId: string,
    fallbackName: string,
    fallbackDescription: string,
    lang: 'cs' | 'en' = 'cs'
  ): Promise<void> {
    // If already playing this item, toggle stop
    if (this.currentPlayingId === itemId) {
      this.stop();
      return;
    }

    // Stop any existing playback
    this.stop();

    // 1. Check for custom cloud/cached recording
    const custom = this.customRecordings[itemId];
    if (custom && custom.audioData) {
      await this.playAudioElement(itemId, custom.audioData, 'custom');
      return;
    }

    // 2. Check for pre-recorded embedded audio
    const embedded = EMBEDDED_AUDIO_TRACKS[itemId];
    if (embedded && embedded.audioUrl) {
      await this.playAudioElement(itemId, embedded.audioUrl, 'embedded');
      return;
    }

    // 3. Fallback to speech synthesis
    this.currentPlayingId = itemId;
    this.currentSource = 'speech';
    this.notifyState();
    speechManager.speak(itemId, fallbackName, fallbackDescription, lang);
  }

  private async playAudioElement(
    itemId: string,
    src: string,
    source: 'custom' | 'embedded'
  ): Promise<void> {
    try {
      const audio = new Audio();
      audio.src = src;
      audio.preload = 'auto';

      this.activeAudio = audio;
      this.currentPlayingId = itemId;
      this.currentSource = source;

      audio.onended = () => {
        if (this.currentPlayingId === itemId) {
          this.currentPlayingId = null;
          this.currentSource = null;
          this.activeAudio = null;
          this.notifyState();
        }
      };

      audio.onerror = (e) => {
        console.warn(`Audio playback error for ${itemId}:`, e);
        if (this.currentPlayingId === itemId) {
          this.currentPlayingId = null;
          this.currentSource = null;
          this.activeAudio = null;
          this.notifyState();
        }
      };

      audio.ontimeupdate = () => {
        this.notifyState();
      };

      this.notifyState();
      await audio.play();
    } catch (err) {
      console.warn(`Failed to play audio element for ${itemId}:`, err);
      this.currentPlayingId = null;
      this.currentSource = null;
      this.activeAudio = null;
      this.notifyState();
    }
  }

  public stop(): void {
    if (this.activeAudio) {
      try {
        this.activeAudio.pause();
        this.activeAudio.currentTime = 0;
      } catch {}
      this.activeAudio = null;
    }

    speechManager.stop();
    this.currentPlayingId = null;
    this.currentSource = null;
    this.notifyState();
  }

  /**
   * Saves a custom voice recording for an item to Firestore
   * so all other users immediately receive and play it!
   */
  public async saveRecording(
    itemId: string,
    name: string,
    audioData: string,
    duration: number,
    authorName?: string,
    lang: 'cs' | 'en' = 'cs'
  ): Promise<void> {
    const user = auth.currentUser;
    const author = authorName || user?.displayName || user?.email?.split('@')[0] || 'Tým Fuze';

    const recording: SharedAudioRecording = {
      id: itemId,
      name,
      audioData,
      duration,
      recordedBy: author,
      lang,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isCustom: true
    };

    // 1. Immediately update local state & cache
    this.customRecordings[itemId] = recording;
    this.saveToLocalStorage();
    this.notifyRecordings();

    // 2. Persist to Firestore for other users
    try {
      const docRef = doc(db, 'audio_recordings', itemId);
      await setDoc(docRef, {
        id: itemId,
        name,
        audioData,
        duration,
        recordedBy: author,
        lang,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }, { merge: true });
    } catch (err) {
      console.warn('Error saving audio recording to Firestore:', err);
    }
  }

  /**
   * Deletes a custom recording from Firestore and local cache
   */
  public async deleteRecording(itemId: string): Promise<void> {
    delete this.customRecordings[itemId];
    this.saveToLocalStorage();
    this.notifyRecordings();

    try {
      const docRef = doc(db, 'audio_recordings', itemId);
      await deleteDoc(docRef);
    } catch (err) {
      console.warn('Error deleting recording from Firestore:', err);
    }
  }

  public getAllRecordingsList(): Array<{
    id: string;
    name: string;
    categoryName: string;
    source: 'custom' | 'embedded';
    author?: string;
    audioUrl?: string;
    audioData?: string;
    duration?: number;
  }> {
    const list: Array<{
      id: string;
      name: string;
      categoryName: string;
      source: 'custom' | 'embedded';
      author?: string;
      audioUrl?: string;
      audioData?: string;
      duration?: number;
    }> = [];

    // Add embedded tracks
    for (const [id, track] of Object.entries(EMBEDDED_AUDIO_TRACKS)) {
      const custom = this.customRecordings[id];
      if (custom) {
        list.push({
          id,
          name: custom.name || track.name,
          categoryName: track.categoryName || 'Kategorie',
          source: 'custom',
          author: custom.recordedBy,
          audioData: custom.audioData,
          duration: custom.duration
        });
      } else {
        list.push({
          id,
          name: track.name,
          categoryName: track.categoryName || 'Kategorie',
          source: 'embedded',
          author: 'Přednahrané audio Fuze',
          audioUrl: track.audioUrl
        });
      }
    }

    // Add any custom recordings that weren't in embedded tracks
    for (const [id, custom] of Object.entries(this.customRecordings)) {
      if (!EMBEDDED_AUDIO_TRACKS[id]) {
        list.push({
          id,
          name: custom.name,
          categoryName: 'Vlastní nahrávky personálu',
          source: 'custom',
          author: custom.recordedBy,
          audioData: custom.audioData,
          duration: custom.duration
        });
      }
    }

    return list;
  }
}

export const sharedAudioService = new SharedAudioService();
