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
  initialItemId?: string;
  initialItemName?: string;
  language: 'cs' | 'en';
}

export const AudioStudioModal: React.FC<AudioStudioModalProps> = ({
  isOpen,
  onClose,
  initialItemId,
  initialItemName,
  language = 'cs'
}) => {
  const isCs = language === 'cs';
  const [selectedItemId, setSelectedItemId] = useState<string>(initialItemId || 'fuze-welcome');
  const [selectedItemName, setSelectedItemName] = useState<string>(initialItemName || 'Úvodní slovo Fuze');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  
  // Recording state
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);
  const [recordedAudioBlob, setRecordedAudioBlob] = useState<Blob | null>(null);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [authorName, setAuthorName] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Playback state
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [customRecordings, setCustomRecordings] = useState<Record<string, SharedAudioRecording>>({});

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (initialItemId) {
      setSelectedItemId(initialItemId);
      if (initialItemName) setSelectedItemName(initialItemName);
    }
  }, [initialItemId, initialItemName]);

  useEffect(() => {
    const unsubRecordings = sharedAudioService.subscribeRecordings((recs) => {
      setCustomRecordings(recs);
    });
    const unsubState = sharedAudioService.subscribeState((state) => {
      setPlayingId(state.currentId);
    });

    return () => {
      unsubRecordings();
      unsubState();
      cleanupRecording();
    };
  }, []);

  const cleanupRecording = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      try {
        mediaRecorderRef.current.stop();
      } catch {}
    }
  };

  const handleStartRecording = async () => {
    setErrorMessage(null);
    setSaveSuccess(false);
    setRecordedAudioBlob(null);
    setRecordedAudioUrl(null);
    audioChunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = MediaRecorder.isTypeSupported('audio/webm') 
        ? 'audio/webm' 
        : (MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '');
      
      const mediaRecorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop());
        const blobType = mimeType || 'audio/webm';
        const blob = new Blob(audioChunksRef.current, { type: blobType });
        setRecordedAudioBlob(blob);
        const url = URL.createObjectURL(blob);
        setRecordedAudioUrl(url);
      };

      mediaRecorder.start(200); // 200ms chunks
      setIsRecording(true);
      setRecordingSeconds(0);

      timerIntervalRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } catch (err: any) {
      console.error('Mikrofon error:', err);
      setErrorMessage(
        isCs 
          ? 'Nepodařilo se získat přístup k mikrofonu. Zkontrolujte oprávnění v prohlížeči.' 
          : 'Could not access microphone. Please check browser permissions.'
      );
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage(isCs ? 'Soubor je příliš velký (max 5 MB).' : 'File is too large (max 5 MB).');
      return;
    }

    setRecordedAudioBlob(file);
    const url = URL.createObjectURL(file);
    setRecordedAudioUrl(url);
    setSaveSuccess(false);
    setErrorMessage(null);
  };

  const handleSaveToCloud = async () => {
    if (!recordedAudioBlob || !selectedItemId) return;
    setIsSaving(true);
    setErrorMessage(null);

    try {
      // Convert blob to base64 Data URL
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result as string;
        await sharedAudioService.saveRecording(
          selectedItemId,
          selectedItemName,
          base64data,
          recordingSeconds || 5,
          authorName.trim() || undefined,
          'cs'
        );

        setIsSaving(false);
        setSaveSuccess(true);
        setRecordedAudioBlob(null);
        setRecordedAudioUrl(null);
        setRecordingSeconds(0);
      };
      reader.readAsDataURL(recordedAudioBlob);
    } catch (err: any) {
      console.error('Save to cloud failed:', err);
      setIsSaving(false);
      setErrorMessage(isCs ? 'Chyba při ukládání nahrávky do cloudu.' : 'Failed to save recording to cloud.');
    }
  };

  const handleDeleteCustom = async (itemId: string) => {
    if (confirm(isCs ? 'Opravdu smazat vlastní nahrávku? Vrátí se výchozí přednahrané audio.' : 'Delete custom recording? Embedded default audio will be restored.')) {
      await sharedAudioService.deleteRecording(itemId);
    }
  };

  const allTracks = sharedAudioService.getAllRecordingsList();

  const filteredTracks = allTracks.filter((track) => {
    const matchesSearch = 
      track.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategoryFilter === 'all') return matchesSearch;
    if (selectedCategoryFilter === 'custom') return matchesSearch && track.source === 'custom';
    if (selectedCategoryFilter === 'embedded') return matchesSearch && track.source === 'embedded';
    return matchesSearch && track.categoryName.toLowerCase().includes(selectedCategoryFilter.toLowerCase());
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden text-stone-100">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-stone-800 bg-stone-900/90 sticky top-0 z-10 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Disc3 className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-stone-100">
                  {isCs ? 'Audio Studio & Nahrávky na stránkách' : 'Audio Studio & Embedded Voice'}
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  {isCs ? 'Obsaženo na stránkách' : 'Contained on site'}
                </span>
              </div>
              <p className="text-xs text-stone-400 mt-0.5">
                {isCs 
                  ? 'Zvukové nahrávky jsou již obsaženy přímo na webu a fungují pro všechny ostatní uživatele i bez hlasových balíčků'
                  : 'Audio recordings are already embedded on the pages for all users without device voice packs'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition-colors"
            title={isCs ? 'Zavřít' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Status info banner */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/20 text-amber-300 rounded-lg shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-amber-200">
                  {isCs ? 'Přednahrané audio pro celý tým' : 'Pre-recorded audio for the whole team'}
                </h4>
                <p className="text-xs text-amber-300/80 mt-0.5">
                  {isCs
                    ? '76+ nahrávek kategorií, vín a pokrmů je uloženo na stránkách. Kdykoliv kdokoliv klikne na ikonu reproduktoru, nahrávka se ihned přehraje.'
                    : '76+ tracks for categories, wines and dishes are ready on site. Click any speaker to play instantly.'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-mono px-2.5 py-1 bg-stone-900 border border-stone-700 rounded-md text-amber-300 font-bold">
                {allTracks.length} {isCs ? 'nahrávek aktivních' : 'tracks ready'}
              </span>
            </div>
          </div>

          {/* Record / Upload Studio Box */}
          <div className="rounded-xl border border-stone-800 bg-stone-950/60 p-4 sm:p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-semibold text-stone-200">
                  {isCs ? 'Nahrát vlastní hlasové audio personálu' : 'Record custom staff voice audio'}
                </h3>
              </div>
              <span className="text-xs text-stone-400 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-sky-400" />
                {isCs ? 'Sdíleno se všemi kolegy přes Cloud' : 'Shared with all staff via Cloud'}
              </span>
            </div>

            {/* Target Item Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-stone-400 mb-1">
                  {isCs ? 'Položka nebo kategorie k nahrání:' : 'Target item or category:'}
                </label>
                <select
                  value={selectedItemId}
                  onChange={(e) => {
                    setSelectedItemId(e.target.value);
                    const t = allTracks.find((x) => x.id === e.target.value);
                    if (t) setSelectedItemName(t.name);
                  }}
                  className="w-full px-3 py-2 bg-stone-900 border border-stone-700 rounded-lg text-sm text-stone-200 focus:outline-none focus:border-amber-500"
                >
                  <optgroup label={isCs ? 'Přednahrané položky' : 'Pre-recorded items'}>
                    {allTracks.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name} ({t.categoryName})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-400 mb-1">
                  {isCs ? 'Jméno mluvčího / autora (volitelné):' : 'Speaker / Author name (optional):'}
                </label>
                <input
                  type="text"
                  placeholder={isCs ? 'např. Jan (Manažer), Tereza (Sommelier)' : 'e.g. Head Bartender'}
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-900 border border-stone-700 rounded-lg text-sm text-stone-200 focus:outline-none focus:border-amber-500 placeholder:text-stone-600"
                />
              </div>
            </div>

            {/* Recording Controls */}
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-stone-800/80">
              {!isRecording ? (
                <button
                  type="button"
                  onClick={handleStartRecording}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-lg transition-colors shadow-md shadow-red-600/20"
                >
                  <Mic className="w-4 h-4" />
                  {isCs ? 'Spustit nahrávání z mikrofonu' : 'Start microphone recording'}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleStopRecording}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-stone-700 hover:bg-stone-600 text-white text-xs font-bold rounded-lg transition-colors animate-pulse"
                >
                  <Square className="w-4 h-4 fill-white" />
                  {isCs ? `Zastavit nahrávání (${recordingSeconds}s)` : `Stop recording (${recordingSeconds}s)`}
                </button>
              )}

              {/* Upload file alternative */}
              <label className="inline-flex items-center gap-2 px-3 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-xs font-medium rounded-lg cursor-pointer transition-colors border border-stone-700">
                <Upload className="w-4 h-4" />
                <span>{isCs ? 'Nahrát audio soubor (MP3/WAV)' : 'Upload audio file'}</span>
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              {/* Preview & Save if recorded */}
              {recordedAudioUrl && (
                <div className="flex items-center gap-2 ml-auto w-full sm:w-auto">
                  <audio src={recordedAudioUrl} controls className="h-8 max-w-[200px]" />
                  <button
                    type="button"
                    onClick={handleSaveToCloud}
                    disabled={isSaving}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold rounded-lg transition-colors disabled:opacity-50"
                  >
                    {isSaving ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                    <span>{isCs ? 'Uložit pro ostatní uživatele' : 'Save for all users'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Error or Success feedback */}
            {errorMessage && (
              <p className="text-xs text-red-400 bg-red-950/40 border border-red-800/40 p-2.5 rounded-lg">
                {errorMessage}
              </p>
            )}
            {saveSuccess && (
              <p className="text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 p-2.5 rounded-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{isCs ? 'Nahrávka byla úspěšně uložena do cloudu a je okamžitě dostupná pro všechny kolegy!' : 'Recording saved to cloud and immediately available to all staff!'}</span>
              </p>
            )}
          </div>

          {/* Audio Library Table / Playlist */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-stone-200 flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-amber-400" />
                <span>{isCs ? 'Seznam audio nahrávek obsažených na stránkách' : 'Audio recordings contained on pages'}</span>
                <span className="text-xs text-stone-400 font-normal">({filteredTracks.length})</span>
              </h3>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-500" />
                  <input
                    type="text"
                    placeholder={isCs ? 'Hledat položku...' : 'Search track...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 pr-3 py-1 bg-stone-950 border border-stone-800 rounded-lg text-xs text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <select
                  value={selectedCategoryFilter}
                  onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                  className="px-2 py-1 bg-stone-950 border border-stone-800 rounded-lg text-xs text-stone-300 focus:outline-none focus:border-amber-500"
                >
                  <option value="all">{isCs ? 'Všechny nahrávky' : 'All recordings'}</option>
                  <option value="custom">{isCs ? 'Pouze týmové' : 'Team only'}</option>
                  <option value="embedded">{isCs ? 'Pouze přednahrané' : 'Embedded only'}</option>
                  <option value="Kategorie menu">{isCs ? 'Kategorie menu' : 'Menu categories'}</option>
                  <option value="Vína">{isCs ? 'Vína' : 'Wines'}</option>
                  <option value="Hlavní chody">{isCs ? 'Hlavní chody' : 'Main dishes'}</option>
                  <option value="Předkrmy">{isCs ? 'Předkrmy' : 'Starters'}</option>
                </select>
              </div>
            </div>

            {/* Track list */}
            <div className="border border-stone-800 rounded-xl overflow-hidden divide-y divide-stone-800/60 bg-stone-950/40 max-h-80 overflow-y-auto">
              {filteredTracks.length === 0 ? (
                <div className="p-6 text-center text-xs text-stone-500">
                  {isCs ? 'Nenalezena žádná nahrávka.' : 'No recordings match the filter.'}
                </div>
              ) : (
                filteredTracks.map((track) => {
                  const isCurrentPlaying = playingId === track.id;
                  const hasCustom = track.source === 'custom';

                  return (
                    <div
                      key={track.id}
                      className={`flex items-center justify-between p-2.5 sm:px-4 sm:py-3 transition-colors ${
                        isCurrentPlaying
                          ? 'bg-amber-500/10 border-l-2 border-amber-500'
                          : 'hover:bg-stone-800/40'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-2">
                        <button
                          type="button"
                          onClick={() => {
                            if (isCurrentPlaying) {
                              sharedAudioService.stop();
                            } else {
                              sharedAudioService.play(track.id, track.name, track.name, 'cs');
                            }
                          }}
                          className={`p-2 rounded-lg transition-all shrink-0 ${
                            isCurrentPlaying
                              ? 'bg-amber-500 text-stone-950 font-bold scale-105 shadow-md shadow-amber-500/30'
                              : 'bg-stone-800 hover:bg-amber-500/20 text-stone-300 hover:text-amber-400 border border-stone-700'
                          }`}
                          title={isCurrentPlaying ? 'Zastavit' : 'Přehrát'}
                        >
                          {isCurrentPlaying ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4 fill-current" />
                          )}
                        </button>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-medium text-stone-200 truncate">
                              {track.name}
                            </span>
                            {hasCustom ? (
                              <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold shrink-0">
                                {isCs ? 'Tým' : 'Team'}
                              </span>
                            ) : (
                              <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold shrink-0">
                                {isCs ? 'Obsaženo na stránkách' : 'Embedded'}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-stone-400 mt-0.5">
                            <span>{track.categoryName}</span>
                            <span>•</span>
                            <span>{track.author || (hasCustom ? 'Personál' : 'FUZE')}</span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedItemId(track.id);
                            setSelectedItemName(track.name);
                          }}
                          className="p-1.5 rounded-lg text-stone-400 hover:text-amber-400 hover:bg-stone-800 transition-colors text-xs"
                          title={isCs ? 'Vybrat k nahrání nového audia' : 'Select for recording'}
                        >
                          <Mic className="w-3.5 h-3.5" />
                        </button>

                        {hasCustom && (
                          <button
                            type="button"
                            onClick={() => handleDeleteCustom(track.id)}
                            className="p-1.5 rounded-lg text-stone-400 hover:text-red-400 hover:bg-stone-800 transition-colors text-xs"
                            title={isCs ? 'Smazat vlastní nahrávku' : 'Delete custom'}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-800 bg-stone-900/90 flex items-center justify-between text-xs text-stone-400">
          <div className="flex items-center gap-1.5">
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>
              {isCs 
                ? 'Plná podpora pro iPhone, Android, tablet i PC bez instalace hlasů' 
                : 'Full support for iPhone, Android, tablet and PC'}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg font-medium transition-colors"
          >
            {isCs ? 'Zavřít' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
