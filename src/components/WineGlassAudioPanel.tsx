import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  RotateCw, 
  Wine, 
  Music,
  Radio,
  Globe2
} from 'lucide-react';

interface WineGlassAudioPanelProps {
  language?: 'cs' | 'en';
  audioUrl?: string;
}

export const WineGlassAudioPanel: React.FC<WineGlassAudioPanelProps> = ({
  language = 'cs',
  audioUrl = '/audio/vina-po-skle.mp3'
}) => {
  const isEn = language === 'en';
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(1351); // 22:31
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.muted = isMuted;
    }
  }, [playbackRate, isMuted]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration) && audioRef.current.duration > 0) {
      setDuration(audioRef.current.duration);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Audio playback error:', err);
      });
    }
  };

  const handleSeekRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  const skipSeconds = (secs: number) => {
    if (!audioRef.current) return;
    const newTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + secs));
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleRate = () => {
    const rates = [1, 1.25, 1.5, 2];
    const nextIdx = (rates.indexOf(playbackRate) + 1) % rates.length;
    const nextRate = rates[nextIdx];
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="my-6 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950/40 border border-amber-500/30 p-5 sm:p-7 shadow-2xl space-y-5 text-stone-100 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      {/* HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />

      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800/80 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Radio className={`w-3.5 h-3.5 ${isPlaying ? 'animate-pulse text-amber-400' : 'text-amber-500'}`} />
            <span>{isEn ? 'Audio Recording • Vína po skle' : 'Audio nahrávka • Vína po skle'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-stone-100 tracking-tight flex items-center gap-2">
            <Wine className="w-5 h-5 text-amber-400 shrink-0" />
            <span>{isEn ? 'Audio Recording: Wine by the Glass' : 'Audio nahrávka: Vína po skle'}</span>
          </h3>
          <p className="text-xs text-stone-400 max-w-2xl leading-relaxed flex items-center gap-1.5">
            <Globe2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              {isEn
                ? 'Official 22-minute sommelier audio guide for wines by the glass in Fuze restaurant.'
                : 'Oficiální 22minutová audio nahrávka rozboru 10 vín po skle restaurace FUZE.'}
            </span>
          </p>
        </div>
      </div>

      {/* Main Player Control Box */}
      <div className="bg-stone-950/80 border border-stone-800 rounded-2xl p-4 sm:p-5 space-y-4">
        {/* Scrubber & Timestamps */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-mono text-stone-400">
            <span className="text-amber-400 font-bold">{formatTime(currentTime)}</span>
            <div className="flex items-center gap-2 text-stone-300 font-medium text-xs">
              <Music className={`w-3.5 h-3.5 ${isPlaying ? 'text-amber-400 animate-spin' : 'text-stone-500'}`} />
              <span>{isEn ? 'Vína po skle (Audio)' : 'Vína po skle (Oficiální nahrávka)'}</span>
            </div>
            <span>{formatTime(duration)}</span>
          </div>

          <input
            type="range"
            min="0"
            max={duration || 1351}
            step="0.5"
            value={currentTime}
            onChange={handleSeekRange}
            className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
          />
        </div>

        {/* Big Control Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => skipSeconds(-10)}
              className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/50 text-stone-300 hover:text-amber-400 transition-colors active:scale-95"
              title={isEn ? 'Back 10 seconds' : 'Zpět o 10 sekund'}
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={togglePlay}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black text-sm shadow-lg shadow-amber-950/50 transition-all transform active:scale-95"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-5 h-5 fill-current" />
                  <span>{isEn ? 'Pause' : 'Pozastavit'}</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                  <span>{isEn ? 'Play Audio' : 'Přehrát nahrávku'}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => skipSeconds(10)}
              className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/50 text-stone-300 hover:text-amber-400 transition-colors active:scale-95"
              title={isEn ? 'Forward 10 seconds' : 'Vpřed o 10 sekund'}
            >
              <RotateCw className="w-4 h-4" />
            </button>
          </div>

          {/* Speed & Volume */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleRate}
              className="px-3 py-2 rounded-xl bg-stone-900 border border-stone-800 text-xs font-mono font-bold text-amber-300 hover:border-amber-500/50 transition-colors"
              title={isEn ? 'Change speed' : 'Rychlost přehrávání'}
            >
              {playbackRate}x
            </button>

            <button
              type="button"
              onClick={toggleMute}
              className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-400 hover:text-stone-200 transition-colors"
              title={isMuted ? (isEn ? 'Unmute' : 'Zapnout zvuk') : (isEn ? 'Mute' : 'Ztišit')}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
