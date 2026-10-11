import React, { useState, useRef, useEffect } from 'react';
import { useWineAudio } from '../context/WineAudioContext';
import { WINE_AUDIO_CHAPTERS, WINE_AUDIO_TRANSCRIPT } from '../data/wineAudioData';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  RotateCw, 
  X, 
  Minimize2, 
  Maximize2, 
  GripHorizontal, 
  Wine, 
  Upload,
  BookOpen,
  ChevronRight,
  Headphones,
  CheckCircle2,
  RefreshCw,
  FileAudio,
  ExternalLink
} from 'lucide-react';

interface FloatingAudioPlayerProps {
  onSelectWine?: (wineId: string) => void;
}

export const FloatingAudioPlayer: React.FC<FloatingAudioPlayerProps> = ({ onSelectWine }) => {
  const {
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
    togglePlay,
    seekTo,
    skipForward,
    skipBackward,
    setRate,
    closePlayer,
    toggleExpanded,
    setShowUploadModal,
    loadAudioFile,
    resetAudioTrack,
    formatTime
  } = useWineAudio();

  const [activeTab, setActiveTab] = useState<'chapters' | 'transcript' | 'info'>('chapters');
  const [isDragOver, setIsDragOver] = useState(false);
  
  // Draggable position state
  const [position, setPosition] = useState<{ x: number; y: number }>(() => {
    if (typeof window !== 'undefined') {
      const savedX = sessionStorage.getItem('fuze_audio_pos_x');
      const savedY = sessionStorage.getItem('fuze_audio_pos_y');
      if (savedX && savedY) {
        return { x: parseInt(savedX, 10), y: parseInt(savedY, 10) };
      }
      const defX = Math.max(16, window.innerWidth - 400);
      const defY = Math.max(80, window.innerHeight - 240);
      return { x: defX, y: defY };
    }
    return { x: 20, y: 100 };
  });

  const isDraggingRef = useRef(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const startPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const modalFileInputRef = useRef<HTMLInputElement | null>(null);
  const transcriptContainerRef = useRef<HTMLDivElement | null>(null);

  // Drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    startPosRef.current = { ...position };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    const cardWidth = isExpanded ? 390 : 220;
    const cardHeight = isExpanded ? 540 : 64;

    const maxX = Math.max(0, window.innerWidth - cardWidth);
    const maxY = Math.max(0, window.innerHeight - cardHeight);

    const newX = Math.min(Math.max(10, startPosRef.current.x + dx), maxX);
    const newY = Math.min(Math.max(60, startPosRef.current.y + dy), maxY);

    setPosition({ x: newX, y: newY });
    try {
      sessionStorage.setItem('fuze_audio_pos_x', newX.toString());
      sessionStorage.setItem('fuze_audio_pos_y', newY.toString());
    } catch {}
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Auto-scroll active line into view when transcript tab is open
  useEffect(() => {
    if (activeTab === 'transcript' && currentLine && transcriptContainerRef.current) {
      const activeEl = transcriptContainerRef.current.querySelector(`[data-line-id="${currentLine.id}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [currentLine, activeTab]);

  // Handle file drop on upload modal
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      loadAudioFile(file);
    }
  };

  return (
    <>
      {/* 1. UPLOAD MODAL FOR USER ATTACHED AUDIO (when audio is not yet loaded) */}
      {showUploadModal && (
        <div 
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowUploadModal(false)}
        >
          <div 
            className="relative w-full max-w-md bg-stone-900 border-2 border-amber-500/60 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5 text-stone-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowUploadModal(false)}
              className="absolute top-5 right-5 p-1.5 rounded-xl bg-stone-800 text-stone-400 hover:text-stone-100 hover:bg-stone-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-stone-950 flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Přiložená audio nahrávka
                </span>
                <h3 className="text-lg font-bold text-stone-100 leading-tight">
                  Sommeliérský průvodce degustací
                </h3>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              Přehrávač používá <strong>výhradně vámi přiložený originální audio soubor</strong>. Vyberte nebo přetáhněte přiloženou nahrávku (MP3 / M4A / WAV) – soubor se uloží trvale do paměti aplikace (IndexedDB) a spustí se.
            </p>

            {/* Drag & Drop Area */}
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
              onClick={() => modalFileInputRef.current?.click()}
              className={`p-6 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-center space-y-3 ${
                isDragOver 
                  ? 'border-amber-400 bg-amber-500/15 scale-[1.01]' 
                  : 'border-stone-700 hover:border-amber-500/60 bg-stone-950/60 hover:bg-stone-950'
              }`}
            >
              <input
                ref={modalFileInputRef}
                type="file"
                accept="audio/*,.mp3,.m4a,.wav,.ogg,.aac"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) loadAudioFile(file);
                }}
              />
              <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/20">
                <Upload className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-amber-300 block">
                  Klikněte sem pro výběr audio souboru
                </span>
                <span className="text-xs text-stone-400 mt-0.5 block">
                  nebo přetáhněte nahrávku myší přímo sem
                </span>
              </div>
              <span className="inline-block text-[11px] font-mono text-stone-500 bg-stone-900 px-2.5 py-1 rounded-md border border-stone-800">
                Podporováno: MP3, M4A, WAV, OGG (délka cca 22:31)
              </span>
            </div>

            <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Trvalé uložení v prohlížeči (IndexedDB)</span>
              </span>
              <span>10 vín po skle</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. FLOATING DRAGGABLE BUBBLE & EXPANDED PLAYER */}
      {!isPlayerVisible ? null : !isExpanded ? (
        /* COMPACT FLOATING BUBBLE */
        <div
          ref={cardRef}
          style={{
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            zIndex: 9999
          }}
          className="touch-none select-none"
        >
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="flex items-center gap-2.5 p-2 pr-3 bg-stone-900/95 border-2 border-amber-500/60 shadow-2xl rounded-full backdrop-blur-md cursor-grab active:cursor-grabbing hover:border-amber-400 transition-colors group"
          >
            {/* Drag grip icon */}
            <div className="pl-1 text-stone-500 group-hover:text-amber-400 transition-colors">
              <GripHorizontal className="w-4 h-4" />
            </div>

            {/* Play/Pause round button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 flex items-center justify-center shadow-md transition-transform active:scale-95 shrink-0"
              title={isPlaying ? 'Pozastavit' : 'Přehrát originální nahrávku'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            {/* Info pill & time */}
            <div 
              onClick={toggleExpanded}
              className="flex flex-col cursor-pointer max-w-[125px]"
              title="Kliknutím rozbalíte přehrávač a kapitoly"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-amber-300 truncate">
                  {currentChapter.title}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-stone-400 font-mono">
                <span>{formatTime(currentTime)}</span>
                <span>/</span>
                <span>{formatTime(duration)}</span>
                {isPlaying && (
                  <span className="flex items-center gap-0.5 ml-1">
                    <span className="w-1 h-3 bg-amber-400 rounded-full animate-pulse" />
                    <span className="w-1 h-2 bg-amber-500 rounded-full animate-pulse delay-75" />
                    <span className="w-1 h-4 bg-amber-400 rounded-full animate-pulse delay-150" />
                  </span>
                )}
              </div>
            </div>

            {/* Expand & Close buttons */}
            <div className="flex items-center gap-1 ml-1 border-l border-stone-800 pl-2">
              <button
                onClick={toggleExpanded}
                className="p-1 rounded-full text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
                title="Rozbalit přehrávač"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <button
                onClick={closePlayer}
                className="p-1 rounded-full text-stone-500 hover:text-red-400 hover:bg-stone-800 transition-colors"
                title="Zavřít"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* EXPANDED DRAGGABLE CARD */
        <div
          ref={cardRef}
          style={{
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '390px',
            maxWidth: 'calc(100vw - 24px)',
            zIndex: 9999
          }}
          className="bg-stone-900/95 border border-amber-500/50 shadow-2xl rounded-3xl backdrop-blur-xl flex flex-col overflow-hidden text-stone-100 select-none font-sans"
        >
          {/* Draggable Header */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="px-4 py-3 bg-stone-950/80 border-b border-stone-800/80 flex items-center justify-between cursor-grab active:cursor-grabbing"
          >
            <div className="flex items-center gap-2">
              <GripHorizontal className="w-4 h-4 text-stone-500" />
              <div className="flex items-center gap-1.5">
                <Headphones className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Originální audio nahrávka
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={toggleExpanded}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
                title="Minimalizovat do plovoucí bubliny"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={closePlayer}
                className="p-1.5 rounded-lg text-stone-500 hover:text-red-400 hover:bg-stone-800 transition-colors"
                title="Zavřít přehrávač"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Playing Information */}
          <div className="p-4 border-b border-stone-800/80 bg-gradient-to-b from-stone-900 to-stone-950">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-amber-400/90 uppercase tracking-wider block">
                    Kapitola {WINE_AUDIO_CHAPTERS.indexOf(currentChapter) + 1} z {WINE_AUDIO_CHAPTERS.length}
                  </span>
                  {hasAudioLoaded && (
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-1.5 py-0.2 rounded">
                      Audio zdroj aktivní
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-stone-100 leading-snug mt-0.5">
                  {currentChapter.title}
                </h3>
                <p className="text-xs text-stone-400 mt-0.5 line-clamp-1">
                  {currentChapter.subtitle}
                </p>
              </div>
              {isPlaying && (
                <div className="flex items-end gap-1 h-5 px-2 py-1 bg-amber-500/10 border border-amber-500/20 rounded-md shrink-0">
                  <span className="w-1 h-3 bg-amber-400 rounded-full animate-bounce" />
                  <span className="w-1 h-4 bg-amber-500 rounded-full animate-bounce delay-100" />
                  <span className="w-1 h-2 bg-amber-400 rounded-full animate-bounce delay-200" />
                </div>
              )}
            </div>

            {/* Native Audio Scrubbing Progress Bar */}
            <div className="space-y-1.5 mt-3">
              <input
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                onChange={(e) => seekTo(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                <span>{formatTime(currentTime)}</span>
                <span>-{formatTime(Math.max(0, duration - currentTime))}</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-between mt-3 pt-2">
              {/* Speed selector */}
              <div className="flex items-center gap-1">
                {[0.8, 1, 1.25, 1.5].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setRate(rate)}
                    className={`px-2 py-1 text-[11px] font-mono rounded ${
                      playbackRate === rate
                        ? 'bg-amber-500 text-stone-950 font-bold'
                        : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/80'
                    } transition-colors`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>

              {/* Central Play/Pause & Skip */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => skipBackward(15)}
                  className="p-2 rounded-full text-stone-300 hover:text-stone-100 hover:bg-stone-800 transition-colors"
                  title="Zpět o 15 sekund"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={togglePlay}
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 flex items-center justify-center shadow-lg transition-transform active:scale-95"
                  title={hasAudioLoaded ? (isPlaying ? 'Pauza' : 'Přehrát') : 'Vybrat audio nahrávku'}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  )}
                </button>

                <button
                  onClick={() => skipForward(15)}
                  className="p-2 rounded-full text-stone-300 hover:text-stone-100 hover:bg-stone-800 transition-colors"
                  title="Vpřed o 15 sekund"
                >
                  <RotateCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Tabs navigation */}
          <div className="flex border-b border-stone-800 bg-stone-950/60 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('chapters')}
              className={`flex-1 py-2 text-center border-b-2 transition-colors ${
                activeTab === 'chapters'
                  ? 'border-amber-500 text-amber-400 bg-stone-900/40'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              Kapitoly ({WINE_AUDIO_CHAPTERS.length})
            </button>
            <button
              onClick={() => setActiveTab('transcript')}
              className={`flex-1 py-2 text-center border-b-2 transition-colors ${
                activeTab === 'transcript'
                  ? 'border-amber-500 text-amber-400 bg-stone-900/40'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              Přepis dialogu
            </button>
            <button
              onClick={() => setActiveTab('info')}
              className={`flex-1 py-2 text-center border-b-2 transition-colors ${
                activeTab === 'info'
                  ? 'border-amber-500 text-amber-400 bg-stone-900/40'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              Audio soubor
            </button>
          </div>

          {/* Tab 1: Chapters & Wines */}
          {activeTab === 'chapters' && (
            <div className="p-3 max-h-60 overflow-y-auto space-y-2 text-xs">
              {WINE_AUDIO_CHAPTERS.map((ch) => {
                const isCurrent = currentChapter.id === ch.id;
                return (
                  <div
                    key={ch.id}
                    onClick={() => seekTo(ch.startTime)}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                      isCurrent
                        ? 'bg-amber-500/10 border-amber-500/50 text-amber-300'
                        : 'bg-stone-900/50 border-stone-800 hover:border-stone-700 text-stone-300'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 font-bold">
                        <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-300">
                          {ch.timeFormatted}
                        </span>
                        <span>{ch.title}</span>
                      </div>
                      <p className="text-[11px] text-stone-400 mt-0.5 line-clamp-1">
                        {ch.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {ch.wineIds && ch.wineIds.length > 0 && onSelectWine && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectWine(ch.wineIds[0]);
                          }}
                          className="px-2 py-0.5 rounded text-[10px] font-semibold bg-stone-800 hover:bg-amber-500/20 text-amber-300 border border-stone-700 hover:border-amber-500/40 flex items-center gap-1 transition-colors"
                          title="Zobrazit detail vína"
                        >
                          <span>Karta</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </button>
                      )}
                      <ChevronRight className="w-4 h-4 text-stone-500 shrink-0" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Tab 2: Synchronized Interactive Transcript */}
          {activeTab === 'transcript' && (
            <div 
              ref={transcriptContainerRef}
              className="p-3 max-h-64 overflow-y-auto space-y-3 text-xs"
            >
              {WINE_AUDIO_TRANSCRIPT.map((line) => {
                const isActive = currentLine?.id === line.id;
                return (
                  <div
                    key={line.id}
                    data-line-id={line.id}
                    onClick={() => seekTo(line.timeSec)}
                    className={`p-2.5 rounded-xl transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-amber-500/15 border-amber-500/60 shadow-sm'
                        : 'bg-stone-900/40 border-stone-800/60 hover:bg-stone-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className={`font-bold ${line.speaker === 'host' ? 'text-amber-400' : 'text-emerald-400'}`}>
                        {line.speakerName}
                      </span>
                      <span className="font-mono text-stone-500 hover:text-amber-300">
                        {line.timeFormatted}
                      </span>
                    </div>
                    <p className={`leading-relaxed ${isActive ? 'text-stone-100 font-medium' : 'text-stone-300'}`}>
                      {line.text}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Tab 3: Audio File Info & Source Management */}
          {activeTab === 'info' && (
            <div className="p-4 space-y-4 text-xs">
              <div className="p-3 rounded-2xl bg-stone-950/70 border border-stone-800 space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-amber-400 block">
                  Aktivní zdroj nahrávky
                </span>
                <div className="flex items-center gap-2">
                  <FileAudio className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-stone-200 block truncate">
                      {audioFileName || 'Výchozí nahrávka (vina-po-skle.mp3)'}
                    </strong>
                    <span className="text-[11px] text-stone-400">
                      Uloženo v paměti prohlížeče (IndexedDB)
                    </span>
                  </div>
                </div>
              </div>

              {/* Replace / re-upload file button */}
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="audio/*,.mp3,.m4a,.wav,.ogg,.aac"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) loadAudioFile(file);
                  }}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <RefreshCw className="w-4 h-4 text-amber-400" />
                  <span>Nahrát / vyměnit přiložený audio soubor</span>
                </button>
              </div>

              <p className="text-[11px] text-stone-400 leading-relaxed">
                Přehrávač přehrává <strong>výhradně originální zvukovou stopu</strong>. Přehrávání se nepřeruší ani při přechodu mezi záložkami (Knihovna, Kniha menu, Výuka ABC).
              </p>
            </div>
          )}

          {/* Footer Info */}
          <div className="px-4 py-2.5 bg-stone-950 border-t border-stone-800 text-[11px] text-stone-500 flex items-center justify-between">
            <span>🎧 Plovoucí bublinu můžete posouvat po obrazovce</span>
            <button
              onClick={toggleExpanded}
              className="text-amber-400 hover:underline"
            >
              Sbalit do bubliny
            </button>
          </div>
        </div>
      )}
    </>
  );
};
