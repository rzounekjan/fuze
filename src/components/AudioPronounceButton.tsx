import React, { useEffect, useState, useRef } from 'react';
import { Volume2 } from 'lucide-react';
import { speechManager } from '../utils/speech';

interface AudioPronounceButtonProps {
  itemId: string;
  name: string;
  description: string;
  lang?: 'cs' | 'en';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
  title?: string;
}

export const AudioPronounceButton: React.FC<AudioPronounceButtonProps> = ({
  itemId,
  name,
  description,
  lang = 'cs',
  size = 'sm',
  showLabel = false,
  className = '',
  title
}) => {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const unsubscribe = speechManager.subscribe((speakingId) => {
      const active = speakingId === itemId;
      setIsSpeaking(active);

      if (!active && timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    });

    return () => {
      unsubscribe();
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [itemId]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (isSpeaking) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      speechManager.stop();
      setIsSpeaking(false);
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // Safety timer auto-reverting yellow back to gray on mobile if Web Speech gets silenced
      const totalChars = (name + ' ' + description).length;
      const estimatedMs = Math.min(18000, Math.max(4000, totalChars * 100 + 1500));

      timerRef.current = setTimeout(() => {
        if (speechManager.getCurrentId() === itemId) {
          speechManager.stop();
        }
        setIsSpeaking(false);
      }, estimatedMs);

      speechManager.speak(itemId, name, description, lang);
    }
  };

  const buttonTitle =
    title ||
    (isSpeaking
      ? (lang === 'en' ? 'Stop pronunciation' : 'Zastavit předčítání')
      : (lang === 'en' ? 'Pronounce in English' : 'Přečíst syntetickým hlasem'));

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
    <button
      type="button"
      onClick={handleToggle}
      className={`inline-flex items-center justify-center gap-1.5 rounded-lg transition-all select-none shrink-0 ${
        isSpeaking
          ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/30 scale-105 animate-pulse'
          : 'bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-amber-300 border border-stone-700/60 hover:border-amber-500/40 active:scale-95'
      } ${sizeClasses} ${className}`}
      title={buttonTitle}
      aria-label={buttonTitle}
    >
      {isSpeaking ? (
        <>
          <Volume2 className={`${iconSizes} animate-bounce text-stone-950`} />
          <span className="inline-flex items-center gap-0.5 ml-0.5">
            <span className="w-0.5 h-2 bg-stone-950 rounded-full animate-ping" />
            <span className="w-0.5 h-3 bg-stone-950 rounded-full animate-pulse" />
            <span className="w-0.5 h-2 bg-stone-950 rounded-full animate-ping" />
          </span>
          {showLabel && <span className="ml-1 font-bold">{lang === 'en' ? 'Speaking...' : 'Předčítám...'}</span>}
        </>
      ) : (
        <>
          <Volume2 className={iconSizes} />
          {showLabel && <span>{lang === 'en' ? 'Pronounce' : 'Přečíst'}</span>}
        </>
      )}
    </button>
  );
};
