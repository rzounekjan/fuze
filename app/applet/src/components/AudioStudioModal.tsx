import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Mic, 
  Square, 
  Play, 
  Pause, 
  Volume2, 
  Trash2, 
  Upload, 
  CheckCircle2, 
  Sparkles, 
  Radio, 
  RefreshCw, 
  Search,
  Users,
  ShieldCheck,
  Disc3
} from 'lucide-react';
import { sharedAudioService, SharedAudioRecording } from '../utils/sharedAudioService';
import { EMBEDDED_AUDIO_TRACKS } from '../data/audioManifest';
import { MENU_CATEGORIES } from '../data/menuData';

interface AudioStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'cs' | 'en';
}

export const AudioStudioModal: React.FC<AudioStudioModalProps> = ({
  isOpen,
  onClose,
  language = 'cs',
}) => {
  const isEn = language === 'en';
  const [playingId, setPlayingId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePlayToggle = (id: string, url: string) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 max-w-xl w-full shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        <div className="flex items-center justify-between border-b border-stone-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-100">{isEn ? 'Audio Studio' : 'Zvukové studio FUZE'}</h3>
              <p className="text-xs text-stone-400">{isEn ? 'Embedded voice tracks & recording' : 'Vestavěné hlasové nahrávky k menu'}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-950 text-stone-400 hover:text-stone-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Embedded tracks list */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">{isEn ? 'Embedded Tracks' : 'Oficiální hlasové nahrávky'}</h4>
          
          <div className="space-y-2">
            {EMBEDDED_AUDIO_TRACKS.map(track => (
              <div key={track.id} className="bg-stone-950/80 p-3.5 rounded-2xl border border-stone-800 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold text-stone-200">{track.title}</p>
                  <p className="text-[10px] text-stone-400">{track.category}</p>
                </div>

                <button
                  onClick={() => handlePlayToggle(track.id, track.url)}
                  className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
                >
                  {playingId === track.id ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{playingId === track.id ? (isEn ? 'Pause' : 'Pauza') : (isEn ? 'Play' : 'Přehrát')}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
