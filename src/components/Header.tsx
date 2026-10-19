import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  BarChart3, 
  RotateCcw, 
  Globe, 
  Moon, 
  Sun, 
  Mic, 
  BookOpen, 
  Compass, 
  LayoutGrid, 
  Flame,
  Award
} from 'lucide-react';
import { UserStats } from '../utils/storage';

interface HeaderProps {
  currentTab: 'train' | 'exam' | 'catalog' | 'tables' | 'library';
  setCurrentTab: (tab: 'train' | 'exam' | 'catalog' | 'tables' | 'library') => void;
  stats: UserStats;
  totalItemsCount: number;
  totalQuestionsCount: number;
  onResetStats: () => void;
  language: 'cs' | 'en';
  onLanguageChange: (lang: 'cs' | 'en') => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenAudioStudio?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  stats,
  totalItemsCount,
  totalQuestionsCount,
  onResetStats,
  language,
  onLanguageChange,
  theme,
  onToggleTheme,
  onOpenAudioStudio,
}) => {
  const isEn = language === 'en';
  const total = stats.totalAnswered ?? stats.totalQuestionsAnswered ?? 0;
  const correct = stats.correctCount ?? stats.correctAnswers ?? 0;
  const percentage = total > 0 
    ? Math.round((correct / total) * 100) 
    : 0;

  return (
    <header className="bg-stone-900 border-b border-stone-800 sticky top-0 z-40 backdrop-blur-md bg-stone-900/90 shadow-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentTab('train')}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-900/30">
              <div className="w-full h-full bg-stone-950 rounded-[14px] flex items-center justify-center">
                <Flame className="w-6 h-6 text-amber-500 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg sm:text-xl tracking-wider text-stone-100 uppercase">
                  FUZE
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  AKADEMIE
                </span>
              </div>
              <p className="text-[11px] text-stone-400 font-medium hidden sm:block">
                {isEn ? 'Gastronomy Training & Knowledge System' : 'Vzdělávací systém a trénink menu'}
              </p>
            </div>
          </div>

          {/* Stats Badges */}
          <div className="hidden lg:flex items-center gap-4 bg-stone-950/60 border border-stone-800 px-4 py-2 rounded-2xl">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <div>
                <p className="text-[10px] text-stone-300 uppercase tracking-wider font-semibold">
                  {isEn ? 'Success Rate' : 'Úspěšnost'}
                </p>
                <p className="text-sm font-bold text-amber-400">{percentage}%</p>
              </div>
            </div>
            <div className="w-px h-6 bg-stone-800" />
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <div>
                <p className="text-[10px] text-stone-300 uppercase tracking-wider font-semibold">
                  {isEn ? 'Answers' : 'Správně / Celkem'}
                </p>
                <p className="text-sm font-bold text-stone-200">
                  {correct} / {total}
                </p>
              </div>
            </div>
          </div>

          {/* Top Actions & Language Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Audio Studio Modal Trigger */}
            {onOpenAudioStudio && (
              <button
                onClick={onOpenAudioStudio}
                className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-medium flex items-center gap-1.5 transition-colors"
                title={isEn ? 'Audio Studio' : 'Zvukové studio'}
              >
                <Mic className="w-4 h-4" />
                <span className="hidden sm:inline font-semibold">{isEn ? 'Audio Studio' : 'Zvukové studio'}</span>
              </button>
            )}

            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(isEn ? 'cs' : 'en')}
              className="px-2.5 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
              title={isEn ? 'Switch to Czech' : 'Přepnout do angličtiny'}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{isEn ? 'EN' : 'CZ'}</span>
            </button>

            {/* Reset Stats */}
            <button
              onClick={onResetStats}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-400 hover:text-stone-200 text-xs transition-colors"
              title={isEn ? 'Reset statistics' : 'Resetovat statistiky'}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2 border-t border-stone-800/60 no-scrollbar">
          <button
            onClick={() => setCurrentTab('train')}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              currentTab === 'train'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>{isEn ? 'Training' : 'Trénink (Kategorie)'}</span>
          </button>

          <button
            onClick={() => setCurrentTab('exam')}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              currentTab === 'exam'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{isEn ? 'Exam (Mix 100)' : 'Zkouška (Mix 100)'}</span>
          </button>

          <button
            onClick={() => setCurrentTab('catalog')}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              currentTab === 'catalog'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>{isEn ? 'Menu Catalog' : 'Katalog menu'}</span>
          </button>

          <button
            onClick={() => setCurrentTab('library')}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              currentTab === 'library'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{isEn ? 'Library & Beverages' : 'Knihovna & Nápoje'}</span>
          </button>

          <button
            onClick={() => setCurrentTab('tables')}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              currentTab === 'tables'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>{isEn ? 'Table Layout' : 'Orientace na stoly'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
