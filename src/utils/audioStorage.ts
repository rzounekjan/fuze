// IndexedDB utility for persistent client-side storage of the Sommelier Audio Track
const DB_NAME = 'fuze_sommelier_audio_db';
const DB_VERSION = 1;
const STORE_NAME = 'audio_tracks';
const TRACK_KEY = 'vina_po_skle_track';

export interface StoredAudioTrack {
  id: string;
  blob: Blob;
  name: string;
  type: string;
  size: number;
  updatedAt: number;
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported in this environment'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveSommelierAudioTrack(file: File | Blob, name = 'vina-po-skle.mp3'): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    const record: StoredAudioTrack = {
      id: TRACK_KEY,
      blob: file,
      name,
      type: file.type || 'audio/mpeg',
      size: file.size,
      updatedAt: Date.now()
    };

    const putRequest = store.put(record);
    putRequest.onsuccess = () => resolve();
    putRequest.onerror = () => reject(putRequest.error);
  });
}

export async function getSommelierAudioTrack(): Promise<StoredAudioTrack | null> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);

      const getRequest = store.get(TRACK_KEY);
      getRequest.onsuccess = () => {
        resolve(getRequest.result || null);
      };
      getRequest.onerror = () => reject(getRequest.error);
    });
  } catch (err) {
    console.warn('Failed to retrieve audio track from IndexedDB', err);
    return null;
  }
}

export async function removeSommelierAudioTrack(): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);

      const delRequest = store.delete(TRACK_KEY);
      delRequest.onsuccess = () => resolve();
      delRequest.onerror = () => reject(delRequest.error);
    });
  } catch (err) {
    console.warn('Failed to delete audio track from IndexedDB', err);
  }
}
