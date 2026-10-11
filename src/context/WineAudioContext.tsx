import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { WINE_AUDIO_CHAPTERS, WINE_AUDIO_TRANSCRIPT, AudioChapter, AudioDialogueLine } from '../data/wineAudioData';
import { getSommelierAudioTrack, saveSommelierAudioTrack, removeSommelierAudioTrack } from '../utils/audioStorage';

interface WineAudioContextType {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
  currentChapter: AudioChapter;
  currentLine: AudioDialogueLine | null;
  isPlayerVisible: boolean;
  isExpanded: boolean;
  hasAudioLoaded: boolean;
  audioFileName: string | null;
  showUploadModal: boolean;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  seekTo: (seconds: number) => void;
  skipForward: (seconds?: number) => void;
  skipBackward: (seconds?: number) => void;
  setRate: (rate: number) => void;
  openPlayer: (startPlaying?: boolean, jumpToChapterId?: string) => void;
  closePlayer: () => void;
  setIsExpanded: (expanded: boolean) => void;
  toggleExpanded: () => void;
  setShowUploadModal: (show: boolean) => void;
  loadAudioFile: (file: File) => Promise<void>;
  resetAudioTrack: () => Promise<void>;
  formatTime: (seconds: number) => string;
}

const WineAudioContext = createContext<WineAudioContextType | null>(null);

const DEFAULT_TOTAL_DURATION = 1351; // 22:31 in seconds for full sommelier masterclass

export const WineAudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(DEFAULT_TOTAL_DURATION);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasAudioLoaded, setHasAudioLoaded] = useState(true);
  const [audioFileName, setAudioFileName] = useState<string | null>('vina-po-skle-rozbor.mp3');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const activeBlobUrlRef = useRef<string | null>(null);

  // Initialize HTML5 Audio element and check IndexedDB / server audio file
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'auto';

    audio.addEventListener('timeupdate', () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    });

    audio.addEventListener('durationchange', () => {
      if (audioRef.current && audioRef.current.duration && !isNaN(audioRef.current.duration) && isFinite(audioRef.current.duration)) {
        setDuration(Math.round(audioRef.current.duration));
      }
    });

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      setCurrentTime(0);
    });

    audio.addEventListener('pause', () => {
      setIsPlaying(false);
    });

    audio.addEventListener('play', () => {
      setIsPlaying(true);
    });

    audioRef.current = audio;

    // 1. First check IndexedDB for stored custom user audio override
    getSommelierAudioTrack().then((stored) => {
      if (stored && stored.blob) {
        const url = URL.createObjectURL(stored.blob);
        activeBlobUrlRef.current = url;
        audio.src = url;
        audio.load();
        setHasAudioLoaded(true);
        setAudioFileName(stored.name);
      } else {
        // 2. Load the bundled audio file already contained on the website
        audio.src = '/audio/vina-po-skle.mp3';
        audio.load();
        setHasAudioLoaded(true);
        setAudioFileName('vina-po-skle.mp3');
      }
    }).catch(() => {
      audio.src = '/audio/vina-po-skle.mp3';
      audio.load();
      setHasAudioLoaded(true);
      setAudioFileName('vina-po-skle.mp3');
    });

    return () => {
      audio.pause();
      if (activeBlobUrlRef.current) {
        URL.revokeObjectURL(activeBlobUrlRef.current);
      }
    };
  }, []);

  // Update playback rate
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // Current chapter and dialogue line derived directly from currentTime
  const currentChapter = WINE_AUDIO_CHAPTERS.find(
    ch => currentTime >= ch.startTime && currentTime <= ch.endTime
  ) || WINE_AUDIO_CHAPTERS[0];

  const currentLine = WINE_AUDIO_TRANSCRIPT.reduce<AudioDialogueLine | null>((prev, line) => {
    if (line.timeSec <= currentTime) {
      return line;
    }
    return prev;
  }, null);

  // Play handler: plays exclusively the actual audio element
  const play = useCallback(() => {
    if (!hasAudioLoaded || !audioRef.current?.src) {
      // Audio not loaded yet -> prompt user to provide their attached audio file
      setIsPlayerVisible(true);
      setShowUploadModal(true);
      return;
    }

    setIsPlayerVisible(true);
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch((err) => {
      console.warn('Playback error:', err);
      // If autoplay was blocked or source issue, show modal
      setShowUploadModal(true);
    });
  }, [hasAudioLoaded]);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  // Seeking directly inside the audio element
  const seekTo = useCallback((seconds: number) => {
    const clamped = Math.max(0, Math.min(seconds, duration));
    setCurrentTime(clamped);

    if (audioRef.current && audioRef.current.src) {
      audioRef.current.currentTime = clamped;
    }
  }, [duration]);

  const skipForward = useCallback((seconds = 15) => {
    seekTo(currentTime + seconds);
  }, [currentTime, seekTo]);

  const skipBackward = useCallback((seconds = 15) => {
    seekTo(currentTime - seconds);
  }, [currentTime, seekTo]);

  const setRate = useCallback((rate: number) => {
    setPlaybackRate(rate);
  }, []);

  const openPlayer = useCallback((startPlaying = true, jumpToChapterId?: string) => {
    setIsPlayerVisible(true);

    if (jumpToChapterId) {
      const ch = WINE_AUDIO_CHAPTERS.find(c => c.id === jumpToChapterId);
      if (ch) {
        seekTo(ch.startTime);
      }
    }

    if (startPlaying) {
      if (!hasAudioLoaded) {
        setShowUploadModal(true);
      } else {
        play();
      }
    }
  }, [hasAudioLoaded, seekTo, play]);

  const closePlayer = useCallback(() => {
    pause();
    setIsPlayerVisible(false);
  }, [pause]);

  const toggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  // Handler to load the user's attached audio file
  const loadAudioFile = useCallback(async (file: File) => {
    try {
      // 1. Clean previous URL
      if (activeBlobUrlRef.current) {
        URL.revokeObjectURL(activeBlobUrlRef.current);
      }

      // 2. Create client blob URL
      const url = URL.createObjectURL(file);
      activeBlobUrlRef.current = url;

      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.load();
      }

      // 3. Save permanently to IndexedDB
      await saveSommelierAudioTrack(file, file.name);

      // 4. Try posting to server backend middleware
      fetch('/api/upload-sommelier-audio', {
        method: 'POST',
        headers: { 'Content-Type': file.type || 'audio/mpeg' },
        body: file
      }).catch(() => {});

      setHasAudioLoaded(true);
      setAudioFileName(file.name);
      setShowUploadModal(false);
      setIsPlayerVisible(true);

      // 5. Start playing the real audio file
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }, 150);
    } catch (err) {
      console.error('Error loading audio track:', err);
    }
  }, []);

  const resetAudioTrack = useCallback(async () => {
    pause();
    await removeSommelierAudioTrack();
    if (activeBlobUrlRef.current) {
      URL.revokeObjectURL(activeBlobUrlRef.current);
      activeBlobUrlRef.current = null;
    }
    if (audioRef.current) {
      audioRef.current.src = '';
    }
    setHasAudioLoaded(false);
    setAudioFileName(null);
    setCurrentTime(0);
    setShowUploadModal(true);
  }, [pause]);

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) secs = 0;
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <WineAudioContext.Provider
      value={{
        isPlaying,
        currentTime,
        duration,
        playbackRate,
        currentChapter,
        currentLine,
        isPlayerVisible,
        isExpanded,
        hasAudioLoaded,
        audioFileName,
        showUploadModal,
        play,
        pause,
        togglePlay,
        seekTo,
        skipForward,
        skipBackward,
        setRate,
        openPlayer,
        closePlayer,
        setIsExpanded,
        toggleExpanded,
        setShowUploadModal,
        loadAudioFile,
        resetAudioTrack,
        formatTime
      }}
    >
      {children}
    </WineAudioContext.Provider>
  );
};

export const useWineAudio = () => {
  const ctx = useContext(WineAudioContext);
  if (!ctx) {
    throw new Error('useWineAudio must be used within a WineAudioProvider');
  }
  return ctx;
};
