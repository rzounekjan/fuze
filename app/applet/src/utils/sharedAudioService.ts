import { EMBEDDED_AUDIO_TRACKS } from '../data/audioManifest';

export interface SharedAudioRecording {
  id: string;
  name: string;
  categoryName: string;
  audioUrl: string;
  source: 'embedded' | 'custom';
  author?: string;
  timestamp?: string;
  duration?: number;
}

type RecordingsCallback = (recs: Record<string, SharedAudioRecording>) => void;
type StateCallback = (state: { currentId: string | null; isPlaying: boolean }) => void;

class SharedAudioService {
  private customRecordings: Record<string, SharedAudioRecording> = {};
  private recordingSubscribers: Set<RecordingsCallback> = new Set();
  private stateSubscribers: Set<StateCallback> = new Set();
  private currentId: string | null = null;
  private currentAudio: HTMLAudioElement | null = null;

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      const raw = localStorage.getItem('fuze_shared_audio_recordings');
      if (raw) {
        this.customRecordings = JSON.parse(raw);
      }
    } catch (e) {
      console.error('Failed to load shared audio recordings', e);
    }
  }

  private saveToStorage() {
    try {
      localStorage.setItem('fuze_shared_audio_recordings', JSON.stringify(this.customRecordings));
    } catch (e) {
      console.error('Failed to save shared audio recordings', e);
    }
  }

  subscribeRecordings(cb: RecordingsCallback): () => void {
    this.recordingSubscribers.add(cb);
    cb(this.customRecordings);
    return () => {
      this.recordingSubscribers.delete(cb);
    };
  }

  subscribeState(cb: StateCallback): () => void {
    this.stateSubscribers.add(cb);
    cb({ currentId: this.currentId, isPlaying: !!this.currentAudio && !this.currentAudio.paused });
    return () => {
      this.stateSubscribers.delete(cb);
    };
  }

  private notifyState() {
    const isPlaying = !!this.currentAudio && !this.currentAudio.paused;
    this.stateSubscribers.forEach(cb => cb({ currentId: this.currentId, isPlaying }));
  }

  private notifyRecordings() {
    this.recordingSubscribers.forEach(cb => cb(this.customRecordings));
  }

  getAllRecordingsList(): SharedAudioRecording[] {
    const list: SharedAudioRecording[] = [];

    // Custom recordings first
    Object.values(this.customRecordings).forEach(rec => {
      list.push(rec);
    });

    // Embedded tracks
    EMBEDDED_AUDIO_TRACKS.forEach(track => {
      if (!this.customRecordings[track.id]) {
        list.push({
          id: track.id,
          name: track.title,
          categoryName: track.category,
          audioUrl: track.url,
          source: 'embedded',
          author: 'FUZE',
        });
      }
    });

    return list;
  }

  async saveRecording(
    itemId: string,
    itemName: string,
    dataUrl: string,
    duration: number,
    author?: string,
    lang: string = 'cs'
  ) {
    const recording: SharedAudioRecording = {
      id: itemId,
      name: itemName,
      categoryName: 'Vlastní audio',
      audioUrl: dataUrl,
      source: 'custom',
      author: author || 'Personál',
      timestamp: new Date().toLocaleDateString('cs-CZ'),
      duration,
    };

    this.customRecordings[itemId] = recording;
    this.saveToStorage();
    this.notifyRecordings();
  }

  async deleteRecording(itemId: string) {
    delete this.customRecordings[itemId];
    this.saveToStorage();
    this.notifyRecordings();
  }

  play(id: string, name?: string, text?: string, lang: string = 'cs') {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }

    const rec = this.customRecordings[id];
    let url = rec?.audioUrl;

    if (!url) {
      const embedded = EMBEDDED_AUDIO_TRACKS.find(t => t.id === id);
      if (embedded) {
        url = embedded.url;
      }
    }

    if (!url) return;

    this.currentId = id;
    const audio = new Audio(url);
    this.currentAudio = audio;

    audio.onended = () => {
      this.currentId = null;
      this.currentAudio = null;
      this.notifyState();
    };

    audio.onerror = () => {
      this.currentId = null;
      this.currentAudio = null;
      this.notifyState();
    };

    audio.play().then(() => {
      this.notifyState();
    }).catch(e => {
      console.error('Audio play failed', e);
      this.currentId = null;
      this.currentAudio = null;
      this.notifyState();
    });
  }

  stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }
    this.currentId = null;
    this.notifyState();
  }
}

export const sharedAudioService = new SharedAudioService();
