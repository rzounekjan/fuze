import React, { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';

interface OfflineIndicatorProps {
  language?: 'cs' | 'en';
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ language = 'cs' }) => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-stone-900 border border-amber-500/40 text-amber-300 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 text-xs font-bold animate-bounce">
      <WifiOff className="w-4 h-4 text-amber-400" />
      <span>{language === 'en' ? 'Offline Mode Active' : 'Aplikace pracují v offline režimu'}</span>
    </div>
  );
};
