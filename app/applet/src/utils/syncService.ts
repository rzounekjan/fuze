export interface SyncState {
  status: 'idle' | 'syncing' | 'success' | 'error';
  lastSyncedAt: string | null;
  deviceId: string;
}

class SyncService {
  private deviceId: string;

  constructor() {
    let id = localStorage.getItem('fuze_device_id');
    if (!id) {
      id = 'dev-' + Math.random().toString(36).substring(2, 9);
      localStorage.setItem('fuze_device_id', id);
    }
    this.deviceId = id;
  }

  getDeviceId(): string {
    return this.deviceId;
  }

  async syncNow(): Promise<SyncState> {
    return {
      status: 'success',
      lastSyncedAt: new Date().toLocaleTimeString('cs-CZ'),
      deviceId: this.deviceId,
    };
  }
}

export const syncService = new SyncService();
