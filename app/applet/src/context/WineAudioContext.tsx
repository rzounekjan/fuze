import React, { createContext, useContext, useState, useRef } from 'react';
import { WINE_AUDIO_CHAPTERS, WINE_AUDIO_TRANSCRIPT, AudioChapter, AudioDialogueLine } from '../data/wineAudioData';
import { getSommelierAudioTrack, saveSommelierAudioTrack, removeSommelierAudioTrack } from '../utils/audioStorage';

interface WineAudioContextType {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  activeChapter: AudioChapter | null;
  togglePlay: () => void;
  seekTo: (timeSec: number) => void;
  customTrackUrl: string | null;
  setCustomTrack: (url: string | null) => void;
}

const WineAudioContext = createContext<WineAudioContextType | undefined>(undefined);

export const WineAudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(480);
  const [customTrackUrl, setCustomTrackUrl] = useState<string | null>(null);

  const togglePlay = () => setIsPlaying(p => !p);
  const seekTo = (timeSec: number) => setCurrentTime(timeSec);

  const activeChapter = WINE_AUDIO_CHAPTERS.find(
    ch => currentTime >= ch.startTime && currentTime <= ch.endTime
  ) || null;

  return (
    <WineAudioContext.Provider
      value={{
        isPlaying,
        currentTime,
        duration,
        activeChapter,
        togglePlay,
        seekTo,
        customTrackUrl,
        setCustomTrack: setCustomTrackUrl,
      }}
    >
      {children}
    </WineAudioContext.Provider>
  );
};

export const useWineAudio = () => {
  const ctx = useContext(WineAudioContext);
  if (!ctx) throw new Error('useWineAudio must be used within WineAudioProvider');
  return ctx;
};
