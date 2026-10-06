import React from 'react';
import { Volume2, VolumeX, BookOpen, Trophy, Sparkles, Utensils, RotateCcw, MapPin, Library, Sun, Moon, ChevronLeft, ChevronRight } from 'lucide-react';
import { UserStats } from '../utils/storage';
import { soundManager } from '../utils/sound';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  currentTab: 'train' | 'exam' | 'catalog' | 'tables' | 'library';
  setCurrentTab: (tab: 'train' | 'exam' | 'catalog' | 'tables' | 'library') => void;
  stats: UserStats;
  totalItemsCount: number;
  totalQuestionsCount?: number;
  onResetStats: () => void;
  language?: 'cs' | 'en';
  onLanguageChange?: (lang: 'cs' | 'en') => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  stats,
  totalItemsCount,
  totalQuestionsCount,
  onResetStats,
  language = 'cs',
  onLanguageChange,
  theme = 'dark',
  onToggleTheme
}) => {
  const [soundOn, setSoundOn] = React.useState<boolean>(soundManager.isEnabled());
  const tabsRef = React.useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = React.useState(false);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const updateScrollButtons = React.useCallback(() => {
    const el = tabsRef.current;
    if (!el) return;
    const overflow = el.scrollWidth > el.clientWidth + 4;
    setHasOverflow(overflow);
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  React.useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);

    // Ensure active tab is gently scrolled into view if clipped
    const activeBtn = el.querySelector('[data-active="true"]') as HTMLElement | null;
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }

    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons, currentTab]);

  const handleScrollLeft = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  const handleToggleSound = () => {
    const next = soundManager.toggle();
    setSoundOn(next);
  };

  const accuracy = stats.totalAnswered > 0
    ? Math.round((stats.correctCount / stats.totalAnswered) * 100)
    : 0;

  const masteredQuestionsCount = stats.masteredQuestionIds ? stats.masteredQuestionIds.length : 0;
  const totalQuestions = totalQuestionsCount || 1048;

  return (
    <header className="border-b border-stone-800 bg-stone-900/95 backdrop-blur-md sticky top-0 z-50 shadow-md transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        <div className="header-nav-container flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-4 flex-wrap">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 sm:gap-3 w-full lg:w-auto justify-between lg:justify-start min-w-0 shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-950/40 text-stone-950 font-black tracking-wider text-base sm:text-xl border border-amber-400/30 shrink-0">
                FZ
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <h1 className="text-base sm:text-lg lg:text-xl font-black text-stone-100 tracking-tight">
                    FUZE
                  </h1>
                  {/* Klikací tlačítka CZ / EN pro přepínání jazyka */}
                  <div className="inline-flex items-center p-0.5 rounded-lg bg-stone-950 border border-stone-800 shadow-inner shrink-0">
                    <button
                      type="button"
                      onClick={() => onLanguageChange?.('cs')}
                      className={`flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-semibold transition-all ${
                        language === 'cs'
                          ? 'bg-amber-600 text-stone-100 shadow-sm border border-amber-500/50'
                          : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60 border border-transparent'
                      }`}
                      title="Čeština"
                      aria-label="Přepnout do češtiny"
                    >
                      <span className="text-xs">🇨🇿</span>
                      <span>CZ</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onLanguageChange?.('en')}
                      className={`flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-semibold transition-all ${
                        language === 'en'
                          ? 'bg-amber-600 text-stone-100 shadow-sm border border-amber-500/50'
                          : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60 border border-transparent'
                      }`}
                      title="English"
                      aria-label="Switch to English"
                    >
                      <span className="text-xs">🇬🇧</span>
                      <span>EN</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons: Zvuk, Stáhnutí, Světlý/Tmavý režim (řadí se vedle sebe nebo pod sebe dle šířky) */}
            <div className="lg:hidden flex flex-wrap items-center justify-end gap-1 sm:gap-1.5 shrink-0 max-w-[125px] sm:max-w-none">
              {/* 1. Zvuk */}
              <button
                type="button"
                onClick={handleToggleSound}
                title={soundOn ? (language === 'en' ? 'Mute' : 'Vypnout zvuky') : (language === 'en' ? 'Unmute' : 'Zapnout zvuky')}
                className="p-1.5 sm:p-2 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-300 transition-colors shrink-0"
                aria-label={soundOn ? 'Vypnout zvuky' : 'Zapnout zvuky'}
              >
                {soundOn ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-stone-500" />}
              </button>

              {/* 2. Stáhnutí */}
              <PWAInstallButton language={language} />

              {/* 3. Světlý / tmavý režim */}
              {onToggleTheme && (
                <button
                  type="button"
                  onClick={onToggleTheme}
                  title={theme === 'dark' ? (language === 'en' ? 'Switch to Light Mode' : 'Přepnout na světlý režim') : (language === 'en' ? 'Switch to Dark Mode' : 'Přepnout na tmavý režim')}
                  aria-label={theme === 'dark' ? 'Světlý režim' : 'Tmavý režim'}
                  className="p-1.5 sm:p-2 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-300 transition-colors shrink-0"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-amber-600" />}
                </button>
              )}
            </div>
          </div>

          {/* Nav Tabs Container with Scroll Buttons on both sides */}
          <div className="header-nav-tabs relative flex items-center w-full lg:w-auto min-w-0">
            {/* Tlačítko posunu doleva */}
            <button
              type="button"
              onClick={handleScrollLeft}
              disabled={!canScrollLeft}
              title={language === 'en' ? 'Scroll tabs left' : 'Posunout záložky doleva'}
              aria-label={language === 'en' ? 'Scroll tabs left' : 'Posunout záložky doleva'}
              className={`p-2 rounded-xl border transition-all shrink-0 mr-1.5 ${
                hasOverflow ? 'flex' : 'hidden lg:hidden'
              } items-center justify-center min-w-[34px] min-h-[34px] ${
                canScrollLeft
                  ? 'bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-amber-400 border-stone-800 hover:border-amber-500/50 shadow-sm active:scale-95'
                  : 'bg-stone-950/40 text-stone-600 border-stone-900/60 opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Nav Tabs - Swipable on mobile with no-scrollbar */}
            <div
              ref={tabsRef}
              className="flex-1 flex items-center gap-1 sm:gap-1.5 bg-stone-950 p-1 rounded-xl border border-stone-800 justify-start lg:justify-center overflow-x-auto no-scrollbar scroll-smooth min-w-0"
            >
              <button
                onClick={() => setCurrentTab('train')}
                data-active={currentTab === 'train'}
                className={`shrink-0 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentTab === 'train'
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-900/40'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
                }`}
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Learn A, B, C' : 'Výuka A, B, C'}</span>
              </button>

              <button
                onClick={() => setCurrentTab('exam')}
                data-active={currentTab === 'exam'}
                className={`shrink-0 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentTab === 'exam'
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-900/40'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Exam (Mix 10)' : 'Zkouška (Mix 10)'}</span>
              </button>

              <button
                onClick={() => setCurrentTab('catalog')}
                data-active={currentTab === 'catalog'}
                className={`shrink-0 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentTab === 'catalog'
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-900/40'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Menu Book' : 'Kniha menu'}</span>
              </button>

              <button
                onClick={() => setCurrentTab('tables')}
                data-active={currentTab === 'tables'}
                className={`shrink-0 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentTab === 'tables'
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-900/40'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'en' ? 'Floor Plan' : 'Plán stolů'}</span>
              </button>

              <button
                onClick={() => setCurrentTab('library')}
                data-active={currentTab === 'library'}
                className={`shrink-0 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentTab === 'library'
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-900/40'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
                }`}
              >
                <Library className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'en' ? 'Library' : 'Knihovna'}</span>
              </button>
            </div>

            {/* Tlačítko posunu doprava */}
            <button
              type="button"
              onClick={handleScrollRight}
              disabled={!canScrollRight}
              title={language === 'en' ? 'Scroll tabs right' : 'Posunout záložky doprava'}
              aria-label={language === 'en' ? 'Scroll tabs right' : 'Posunout záložky doprava'}
              className={`p-2 rounded-xl border transition-all shrink-0 ml-1.5 ${
                hasOverflow ? 'flex' : 'hidden lg:hidden'
              } items-center justify-center min-w-[34px] min-h-[34px] ${
                canScrollRight
                  ? 'bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-amber-400 border-stone-800 hover:border-amber-500/50 shadow-sm active:scale-95'
                  : 'bg-stone-950/40 text-stone-600 border-stone-900/60 opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop Stats & Controls */}
          <div className="hidden lg:flex items-center gap-3 text-xs">
            {/* Úspěšné otázky v řadě (ikona ohně) */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800/60 border border-stone-800 text-stone-300" title={language === 'en' ? 'Consecutive correct answers streak' : 'Úspěšné otázky v řadě'}>
              <span className="text-amber-400 font-bold">🔥 {stats.currentStreak}</span>
              <span className="text-stone-400">{language === 'en' ? 'streak' : 'v řadě'}</span>
            </div>

            {/* Přehled splněných otázek/ingrediencí označené ikonou poháru */}
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800/60 border border-stone-800 text-stone-300"
              title={language === 'en'
                ? `Mastered ${masteredQuestionsCount} of ${totalQuestions} questions (${stats.masteredItemIds.length} of ${totalItemsCount} menu items)`
                : `Splněno ${masteredQuestionsCount} z ${totalQuestions} otázek/ingrediencí (${stats.masteredItemIds.length} z ${totalItemsCount} položek menu plně)`
              }
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                <strong className="text-stone-100 font-bold">{masteredQuestionsCount}</strong>/{totalQuestions} {language === 'en' ? 'mastered' : 'splněno'}
              </span>
              <span className="text-stone-400 text-[11px] hidden xl:inline">
                ({stats.masteredItemIds.length}/{totalItemsCount} {language === 'en' ? 'items' : 'položek'})
              </span>
            </div>

            {/* Percentuální úspěšnost */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800/60 border border-stone-800 text-stone-300" title={language === 'en' ? 'Percentage accuracy' : 'Percentuální úspěšnost'}>
              <span className="text-stone-400">{language === 'en' ? 'Accuracy:' : 'Úspěšnost:'}</span>
              <span className={`font-bold ${accuracy >= 80 ? 'text-emerald-400' : accuracy >= 50 ? 'text-amber-400' : 'text-stone-300'}`}>
                {stats.totalAnswered > 0 ? `${accuracy}%` : '–'}
              </span>
            </div>

            {/* Sound toggle */}
            <button
              onClick={handleToggleSound}
              title={soundOn ? (language === 'en' ? 'Mute sound' : 'Vypnout zvuky') : (language === 'en' ? 'Unmute sound' : 'Zapnout zvuky')}
              className="p-1.5 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-300 transition-colors"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-stone-500" />}
            </button>

            {/* Theme toggle button */}
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                title={theme === 'dark' ? (language === 'en' ? 'Switch to Light Mode' : 'Přepnout na světlý režim') : (language === 'en' ? 'Switch to Dark Mode' : 'Přepnout na tmavý režim')}
                aria-label={theme === 'dark' ? (language === 'en' ? 'Switch to Light Mode' : 'Přepnout na světlý režim') : (language === 'en' ? 'Switch to Dark Mode' : 'Přepnout na tmavý režim')}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-stone-100 border border-stone-700/60 transition-colors"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span className="font-medium hidden xl:inline">{language === 'en' ? 'Light' : 'Světlý'}</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-amber-600" />
                    <span className="font-medium hidden xl:inline">{language === 'en' ? 'Dark' : 'Tmavý'}</span>
                  </>
                )}
              </button>
            )}

            {/* Reset button */}
            <button
              onClick={onResetStats}
              title={language === 'en' ? 'Reset score and statistics' : 'Resetovat skóre a statistiky'}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-stone-800/80 hover:bg-rose-950/40 text-stone-400 hover:text-rose-300 border border-stone-700/60 hover:border-rose-900/50 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Reset score' : 'Resetovat skóre'}</span>
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Stats Bar (lg:hidden) */}
        {/* Pouze: ikona ohně a úspěšné otázky v řadě, přehled splněných podsložek označené ikonou poháru, percentuální úspěšnost a reset */}
        <div className="lg:hidden mt-2.5 pt-2.5 border-t border-stone-800/80 grid grid-cols-4 gap-1.5 text-xs">
          {/* Úspěšné otázky v řadě (ikona ohně) */}
          <div className="flex items-center justify-center gap-1 px-1.5 py-1.5 rounded-lg bg-stone-800/70 border border-stone-800 text-stone-300 text-center" title={language === 'en' ? 'Consecutive correct answers streak' : 'Úspěšné otázky v řadě'}>
            <span className="text-amber-400 font-bold text-xs">🔥 {stats.currentStreak}</span>
            <span className="text-[10px] text-stone-400 hidden xs:inline">{language === 'en' ? 'streak' : 'v řadě'}</span>
          </div>

          {/* Přehled splněných otázek/ingrediencí označené ikonou poháru */}
          <div
            className="flex items-center justify-center gap-1 px-1.5 py-1.5 rounded-lg bg-stone-800/70 border border-stone-800 text-stone-300 text-center"
            title={language === 'en'
              ? `Mastered ${masteredQuestionsCount} of ${totalQuestions} questions (${stats.masteredItemIds.length}/${totalItemsCount} items)`
              : `Splněno ${masteredQuestionsCount} z ${totalQuestions} otázek/ingrediencí (${stats.masteredItemIds.length}/${totalItemsCount} položek menu plně)`
            }
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-[11px] truncate">
              <strong className="text-stone-100 font-bold">{masteredQuestionsCount}</strong>/{totalQuestions}
            </span>
          </div>

          {/* Percentuální úspěšnost */}
          <div className="flex items-center justify-center gap-1 px-1.5 py-1.5 rounded-lg bg-stone-800/70 border border-stone-800 text-stone-300 text-center" title={language === 'en' ? 'Percentage accuracy' : 'Percentuální úspěšnost'}>
            <span className={`font-bold text-[11px] ${accuracy >= 80 ? 'text-emerald-400' : accuracy >= 50 ? 'text-amber-400' : 'text-stone-300'}`}>
              {stats.totalAnswered > 0 ? `${accuracy}%` : '0%'}
            </span>
          </div>

          {/* Resetování skóre */}
          <button
            onClick={onResetStats}
            title={language === 'en' ? 'Reset score and statistics' : 'Resetovat skóre a statistiky'}
            className="flex items-center justify-center gap-1 px-1.5 py-1.5 rounded-lg bg-stone-800/80 hover:bg-rose-950/50 text-stone-300 hover:text-rose-300 border border-stone-700/70 hover:border-rose-900/50 active:scale-95 transition-all text-center"
          >
            <RotateCcw className="w-3 h-3 text-rose-400 shrink-0" />
            <span className="text-[11px] font-medium">Reset</span>
          </button>
        </div>
      </div>
    </header>
  );
};
