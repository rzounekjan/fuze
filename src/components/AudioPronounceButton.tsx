import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Mic, Radio } from 'lucide-react';
import { sharedAudioService, AudioPlaybackState } from '../utils/sharedAudioService';

interface AudioPronounceButtonProps {
  itemId: string;
  name: string;
  description: string;
  lang?: 'cs' | 'en';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
  title?: string;
  onOpenRecord?: (itemId: string, name: string) => void;
}

export const AudioPronounceButton: React.FC<AudioPronounceButtonProps> = ({
  itemId,
  name,
  description,
  lang = 'cs',
  size = 'sm',
  showLabel = false,
  className = '',
  title,
  onOpenRecord
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasRecording, setHasRecording] = useState<boolean>(false);
  const [recordingType, setRecordingType] = useState<'custom' | 'embedded' | 'synthetic'>('synthetic');

  useEffect(() => {
    // Check initial recording availability
    const info = sharedAudioService.getTrackInfo(itemId);
    setHasRecording(info.type !== 'synthetic');
    setRecordingType(info.type);

    // Listen to recordings changes (e.g. newly synced from Firestore)
    const unsubRec = sharedAudioService.subscribeRecordings(() => {
      const updatedInfo = sharedAudioService.getTrackInfo(itemId);
      setHasRecording(updatedInfo.type !== 'synthetic');
      setRecordingType(updatedInfo.type);
    });

    // Listen to playback state
    const unsubState = sharedAudioService.subscribeState((state: AudioPlaybackState) => {
      setIsPlaying(state.currentId === itemId);
    });

    return () => {
      unsubRec();
      unsubState();
    };
  }, [itemId]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isPlaying) {
      sharedAudioService.stop();
    } else {
      sharedAudioService.play(itemId, name, description, lang);
    }
  };

  const handleRecordClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (onOpenRecord) {
      onOpenRecord(itemId, name);
    }
  };

  const defaultTitle = isPlaying
    ? (lang === 'en' ? 'Stop audio' : 'Zastavit přehrávání audio nahrávky')
    : hasRecording
    ? (recordingType === 'custom'
      ? (lang === 'en' ? 'Play team recording' : 'Přehrát sdílenou hlasovou nahrávku personálu')
      : (lang === 'en' ? 'Play embedded audio recording' : 'Přehrát audio nahrávku (obsažena na stránkách)'))
    : (lang === 'en' ? 'Pronounce in English' : 'Přečíst hlasem');

  const buttonTitle = title || defaultTitle;

  const sizeClasses = {
    xs: 'p-1 text-[10px]',
    sm: 'p-1.5 text-xs',
    md: 'px-2.5 py-1.5 text-xs',
    lg: 'px-3 py-2 text-sm'
  }[size];

  const iconSizes = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  }[size];

  return (
    <div className="inline-flex items-center gap-1">
      <button
        type="button"
        onClick={handleToggle}
        className={`inline-flex items-center justify-center gap-1.5 rounded-lg transition-all select-none ${
          isPlaying
            ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/30 scale-105 animate-pulse'
            : hasRecording
            ? 'bg-stone-800/90 hover:bg-amber-500/25 text-amber-300 hover:text-amber-200 border border-amber-500/40 hover:border-amber-400 shadow-xs'
            : 'bg-stone-800/80 hover:bg-amber-500/20 text-stone-300 hover:text-amber-400 border border-stone-700/60 hover:border-amber-500/40'
        } ${sizeClasses} ${className}`}
        title={buttonTitle}
        aria-label={buttonTitle}
      >
        {isPlaying ? (
          <>
            <Volume2 className={`${iconSizes} animate-bounce`} />
            {/* Animated sound wave bars */}
            <span className="inline-flex items-center gap-0.5 ml-0.5">
              <span className="w-0.5 h-2 bg-stone-950 rounded-full animate-ping" />
              <span className="w-0.5 h-3 bg-stone-950 rounded-full animate-pulse" />
              <span className="w-0.5 h-2 bg-stone-950 rounded-full animate-ping" />
            </span>
            {showLabel && <span className="ml-1 font-bold">{lang === 'en' ? 'Playing...' : 'Přehrávám...'}</span>}
          </>
        ) : (
          <>
            <Volume2 className={iconSizes} />
            {showLabel && (
              <span className="flex items-center gap-1">
                <span>{hasRecording ? (lang === 'en' ? 'Play audio' : 'Přehrát audio') : (lang === 'en' ? 'Listen' : 'Přečíst')}</span>
                {hasRecording && (
                  <span className="text-[9px] uppercase tracking-wider px-1 py-0.2 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded font-semibold">
                    {recordingType === 'custom' ? 'Tým' : 'Nahrávka'}
                  </span>
                )}
              </span>
            )}
          </>
        )}
      </button>

      {/* Optional quick record button for staff if onOpenRecord handler is provided */}
      {onOpenRecord && (
        <button
          type="button"
          onClick={handleRecordClick}
          className="p-1 rounded-md text-stone-400 hover:text-amber-400 hover:bg-stone-800 transition-colors"
          title={lang === 'en' ? 'Record voice for this item' : 'Nahrát vlastní hlasové audio pro tuto položku'}
          aria-label={lang === 'en' ? 'Record voice' : 'Nahrát hlas'}
        >
          <Mic className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
