import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  CloudOff, 
  RefreshCw, 
  Smartphone, 
  Laptop, 
  LogOut, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { syncService, SyncState } from '../utils/syncService';
import { getStoredStats, UserStats } from '../utils/storage';

interface CloudSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'cs' | 'en';
}

export const CloudSyncModal: React.FC<CloudSyncModalProps> = ({
  isOpen,
  onClose,
  language = 'cs',
}) => {
  const isEn = language === 'en';
  const [syncState, setSyncState] = useState<SyncState>({
    status: 'idle',
    lastSyncedAt: null,
    deviceId: syncService.getDeviceId(),
  });

  if (!isOpen) return null;

  const handleSync = async () => {
    setSyncState(prev => ({ ...prev, status: 'syncing' }));
    const result = await syncService.syncNow();
    setSyncState(result);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-6">
        
        <div className="flex items-center justify-between border-b border-stone-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-100">{isEn ? 'Cloud Sync' : 'Synchronizace dat'}</h3>
              <p className="text-xs text-stone-400">{isEn ? 'Device backup & progress' : 'Záloha a přenos pokroku'}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-950 text-stone-400 hover:text-stone-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-stone-950/80 p-4 rounded-2xl border border-stone-800 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-stone-400">{isEn ? 'Device ID:' : 'ID Zařízení:'}</span>
            <span className="font-mono text-amber-400 font-bold">{syncState.deviceId}</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-stone-400">{isEn ? 'Last Sync:' : 'Poslední synchronizace:'}</span>
            <span className="text-stone-200">{syncState.lastSyncedAt || (isEn ? 'Not synced' : 'Zatím nesynchronizováno')}</span>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={handleSync}
            disabled={syncState.status === 'syncing'}
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
          >
            <RefreshCw className={`w-4 h-4 ${syncState.status === 'syncing' ? 'animate-spin' : ''}`} />
            <span>{syncState.status === 'syncing' ? (isEn ? 'Syncing...' : 'Synchronizuji...') : (isEn ? 'Sync Now' : 'Synchronizovat nyní')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
