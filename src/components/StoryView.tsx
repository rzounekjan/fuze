import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Heart, 
  ChefHat, 
  Volume2, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  Search, 
  CheckCircle2, 
  Flame, 
  Utensils, 
  Waves, 
  Beer,
  Bookmark,
  Share2,
  ExternalLink
} from 'lucide-react';
import { STORY_CHAPTERS, StoryChapter, StoryIngredientMention } from '../data/storyData';
import { CulinaryTerm } from '../data/libraryData';
import { speechManager } from '../utils/speech';

interface StoryViewProps {
  language?: 'cs' | 'en';
  culinaryTerms: CulinaryTerm[];
  onOpenCulinaryTerm: (term: CulinaryTerm) => void;
}

export const StoryView: React.FC<StoryViewProps> = ({
  language = 'cs',
  culinaryTerms,
  onOpenCulinaryTerm
}) => {
  const isEn = language === 'en';

  const [activeChapterId, setActiveChapterId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedIngredientFilter, setSelectedIngredientFilter] = useState<string | null>(null);
  const [isReadingAloud, setIsReadingAloud] = useState<boolean>(false);
  const [textSize, setTextSize] = useState<'normal' | 'large'>('normal');

  const storyTopRef = useRef<HTMLDivElement>(null);

  const activeChapter = useMemo(() => {
    return STORY_CHAPTERS.find(c => c.id === activeChapterId) || STORY_CHAPTERS[0];
  }, [activeChapterId]);

  // Lookup map for fast term opening
  const culinaryMap = useMemo(() => {
    const map = new Map<string, CulinaryTerm>();
    for (const term of culinaryTerms) {
      map.set(term.id, term);
    }
    return map;
  }, [culinaryTerms]);

  // Search filter across chapters
  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return STORY_CHAPTERS;
    const q = searchQuery.toLowerCase().trim();
    return STORY_CHAPTERS.filter(ch => {
      const title = (isEn ? ch.titleEn : ch.title).toLowerCase();
      const summary = (isEn ? ch.summaryEn : ch.summary).toLowerCase();
      const paragraphs = (isEn ? ch.paragraphsEn : ch.paragraphs).join(' ').toLowerCase();
      const ingNames = ch.ingredients.map(i => (isEn ? i.nameEn : i.name).toLowerCase()).join(' ');
      return title.includes(q) || summary.includes(q) || paragraphs.includes(q) || ingNames.includes(q);
    });
  }, [searchQuery, isEn]);

  useEffect(() => {
    const unsub = speechManager.subscribe((speakingId) => {
      setIsReadingAloud(speakingId === `chapter-${activeChapterId}`);
    });
    return () => unsub();
  }, [activeChapterId]);

  // Handle TTS reading of chapter
  const handleToggleReadAloud = () => {
    if (isReadingAloud) {
      speechManager.stop();
      setIsReadingAloud(false);
    } else {
      const title = isEn ? activeChapter.titleEn : activeChapter.title;
      const subtitle = isEn ? activeChapter.subtitleEn : activeChapter.subtitle;
      const fullText = (isEn ? activeChapter.paragraphsEn : activeChapter.paragraphs)
        .join(' ')
        .replace(/\[|\]/g, '');

      speechManager.speak(
        `chapter-${activeChapter.id}`,
        `${title}. ${subtitle}`,
        fullText,
        isEn ? 'en' : 'cs'
      );
      setIsReadingAloud(true);
    }
  };

  const handleSelectChapter = (id: number) => {
    if (isReadingAloud) {
      speechManager.stop();
      setIsReadingAloud(false);
    }
    setActiveChapterId(id);
    setSelectedIngredientFilter(null);
    storyTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Helper to render icon
  const renderChapterIcon = (iconName: string, className = "w-4 h-4") => {
    switch (iconName) {
      case 'Flame': return <Flame className={className} />;
      case 'Beer': return <Beer className={className} />;
      case 'Waves': return <Waves className={className} />;
      case 'Utensils': return <Utensils className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Heart': return <Heart className={className} />;
      default: return <BookOpen className={className} />;
    }
  };

  // Render paragraph with clickable ingredient pills
  const renderParagraphWithPills = (text: string) => {
    // Regex matching [Ingredient Name]
    const parts = text.split(/(\[[^\]]+\])/g);

    return parts.map((part, index) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        const rawName = part.slice(1, -1);
        
        // Find matching ingredient in activeChapter or global map
        const mention = activeChapter.ingredients.find(ing => 
          ing.name.toLowerCase() === rawName.toLowerCase() ||
          ing.nameEn.toLowerCase() === rawName.toLowerCase() ||
          rawName.toLowerCase().includes(ing.name.toLowerCase()) ||
          ing.name.toLowerCase().includes(rawName.toLowerCase())
        );

        const term = mention ? culinaryMap.get(mention.id) : null;

        return (
          <button
            key={index}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (term) {
                onOpenCulinaryTerm(term);
              }
            }}
            title={isEn ? `Click to view '${rawName}' in Culinary Glossary` : `Kliknutím otevřete '${rawName}' v Kulinářském lexikonu`}
            className="inline-flex items-center gap-1 mx-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 hover:bg-amber-500/25 border border-amber-500/35 hover:border-amber-400 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
          >
            <ChefHat className="w-3 h-3 text-amber-400 shrink-0" />
            <span>{rawName}</span>
          </button>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div ref={storyTopRef} className="space-y-6 animate-fade-in text-stone-200">
      
      {/* Hero Banner with Book & Story theme */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-950/40 via-stone-900 to-stone-950 border border-amber-500/30 p-6 md:p-8 shadow-2xl shadow-black/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{isEn ? 'Culinary Rom-Com & Gastro Novel' : 'Kulinářská komedie & gastronomický román'}</span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-stone-100 font-serif tracking-tight leading-tight">
              {isEn ? 'The Story of Ingredients' : 'Příběh o surovinách'}
            </h1>

            <p className="text-sm md:text-base text-stone-300 leading-relaxed">
              {isEn 
                ? 'Follow Nikolas (Alex) as he transforms an old tavern with inherited funds and falls in love with the spirited Vendy. All 43 ingredients from the Culinary Glossary woven into an unforgettable journey.'
                : 'Příběh o kuchaři Nikolasovi (Alexovi), který z dědictví po rodičích koupí starou hospodu a promění ji v luxusní podnik. Cestou pozná výjimečnou Vendy a pochopí, že největším kořením života je láska. Všech 43 surovin z Lexikonu zařazeno do děje.'}
            </p>

            {/* Badges bar */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-stone-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-900/80 border border-stone-800 text-amber-300">
                <ChefHat className="w-3.5 h-3.5 text-amber-400" />
                <strong>43 / 43</strong> {isEn ? 'glossary ingredients' : 'surovin z Lexikonu'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-900/80 border border-stone-800 text-stone-300">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <strong>7</strong> {isEn ? 'chapters' : 'kapitol'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-900/80 border border-stone-800 text-rose-300">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-500/20" />
                {isEn ? 'Guaranteed Happy End' : 'Garantovaný Happy End'}
              </span>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="shrink-0 flex flex-col gap-3 bg-stone-900/90 border border-amber-500/20 rounded-xl p-4 min-w-[220px] backdrop-blur-sm shadow-lg">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
              {isEn ? 'Reading Controls' : 'Ovládání četby'}
            </span>
            
            <button
              type="button"
              onClick={handleToggleReadAloud}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-md ${
                isReadingAloud
                  ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                  : 'bg-amber-500 hover:bg-amber-400 text-stone-950 hover:shadow-amber-500/20'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>{isReadingAloud ? (isEn ? 'Stop Audio' : 'Zastavit předčítání') : (isEn ? 'Listen to Chapter' : 'Přečíst nahlas')}</span>
            </button>

            <div className="flex items-center justify-between text-xs text-stone-400 pt-1">
              <span>{isEn ? 'Text size:' : 'Velikost písma:'}</span>
              <div className="inline-flex rounded-lg border border-stone-800 p-0.5 bg-stone-950/60">
                <button
                  type="button"
                  onClick={() => setTextSize('normal')}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                    textSize === 'normal' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setTextSize('large')}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                    textSize === 'large' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  A+
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapters Navigator Bar */}
      <div className="bg-stone-900/70 border border-stone-800 rounded-xl p-2 overflow-hidden shadow-sm">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-stone-700">
          {STORY_CHAPTERS.map((ch) => {
            const isSelected = ch.id === activeChapterId;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => handleSelectChapter(ch.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                  isSelected
                    ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-950/30 scale-102'
                    : 'bg-stone-950/60 text-stone-400 hover:text-stone-100 hover:bg-stone-800/80 border border-stone-800/80'
                }`}
              >
                {renderChapterIcon(ch.iconName, `w-3.5 h-3.5 ${isSelected ? 'text-stone-950' : 'text-amber-400'}`)}
                <span>{isEn ? `Ch. ${ch.id}` : `Kap. ${ch.id}`}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-black/20 text-stone-950' : 'bg-stone-800 text-stone-400'}`}>
                  {ch.ingredients.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chapter Reader Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Reading Column */}
        <div className="lg:col-span-8 space-y-6">
          <article className="rounded-2xl bg-stone-900/80 border border-stone-800/90 p-6 md:p-8 space-y-6 shadow-xl relative backdrop-blur-sm">
            
            {/* Chapter Header */}
            <header className="border-b border-stone-800 pb-5 space-y-2">
              <div className="flex items-center justify-between text-xs text-amber-400/90 font-medium">
                <span className="flex items-center gap-1.5 uppercase tracking-wider font-semibold">
                  {renderChapterIcon(activeChapter.iconName, "w-4 h-4 text-amber-400")}
                  {isEn ? `Chapter ${activeChapter.id} of 7` : `Kapitola ${activeChapter.id} ze 7`}
                </span>
                <span className="flex items-center gap-1 text-stone-400">
                  <Clock className="w-3.5 h-3.5" />
                  {isEn ? activeChapter.readTimeEn : activeChapter.readTime}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-stone-100 font-serif leading-snug">
                {isEn ? activeChapter.titleEn : activeChapter.title}
              </h2>

              <p className="text-sm md:text-base text-amber-200/80 font-medium italic">
                {isEn ? activeChapter.subtitleEn : activeChapter.subtitle}
              </p>
            </header>

            {/* Chapter Summary box */}
            <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 text-xs md:text-sm text-stone-300 flex items-start gap-3">
              <Bookmark className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {isEn ? activeChapter.summaryEn : activeChapter.summary}
              </p>
            </div>

            {/* Story Paragraphs */}
            <div className={`space-y-5 text-stone-200 font-serif leading-relaxed ${
              textSize === 'large' ? 'text-lg md:text-xl' : 'text-base md:text-lg'
            }`}>
              {(isEn ? activeChapter.paragraphsEn : activeChapter.paragraphs).map((para, idx) => (
                <p key={idx} className="first-letter:text-3xl first-letter:font-bold first-letter:text-amber-400 first-letter:float-left first-letter:mr-2">
                  {renderParagraphWithPills(para)}
                </p>
              ))}
            </div>

            {/* Chapter Bottom Navigation */}
            <footer className="border-t border-stone-800 pt-6 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => handleSelectChapter(Math.max(1, activeChapter.id - 1))}
                disabled={activeChapter.id === 1}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold border transition-all ${
                  activeChapter.id === 1
                    ? 'opacity-30 cursor-not-allowed border-stone-800 text-stone-600'
                    : 'bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-amber-300 border-stone-700'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{isEn ? 'Previous Chapter' : 'Předchozí kapitola'}</span>
              </button>

              <span className="text-xs text-stone-500 font-medium hidden sm:inline">
                {isEn ? `${activeChapter.id} / 7` : `${activeChapter.id} z 7`}
              </span>

              <button
                type="button"
                onClick={() => handleSelectChapter(Math.min(7, activeChapter.id + 1))}
                disabled={activeChapter.id === 7}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold border transition-all ${
                  activeChapter.id === 7
                    ? 'opacity-30 cursor-not-allowed border-stone-800 text-stone-600'
                    : 'bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold border-amber-400 shadow-md'
                }`}
              >
                <span>{isEn ? 'Next Chapter' : 'Další kapitola'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </footer>
          </article>
        </div>

        {/* Sidebar: Ingredients in This Chapter */}
        <aside className="lg:col-span-4 space-y-5">
          
          {/* Box: Ingredients in this Chapter */}
          <div className="rounded-2xl bg-stone-900 border border-stone-800 p-5 space-y-4 shadow-lg sticky top-24">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold text-stone-100">
                  {isEn ? 'Ingredients in this Chapter' : 'Suroviny v této kapitole'}
                </h3>
              </div>
              <span className="text-xs font-bold text-amber-400 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                {activeChapter.ingredients.length}
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              {isEn 
                ? 'Click on any ingredient below to explore its culinary profile, origin, and allergens in the Glossary:' 
                : 'Klikněte na libovolnou surovinu níže a prozkoumejte její chuťový profil, původ a receptury v Lexikonu:'}
            </p>

            <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-stone-700">
              {activeChapter.ingredients.map(ing => {
                const term = culinaryMap.get(ing.id);
                return (
                  <div
                    key={ing.id}
                    onClick={() => {
                      if (term) onOpenCulinaryTerm(term);
                    }}
                    className="group flex flex-col p-3 rounded-xl bg-stone-950/70 hover:bg-stone-800/90 border border-stone-800/80 hover:border-amber-500/50 transition-all cursor-pointer shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-amber-300 group-hover:text-amber-200 transition-colors">
                        {isEn ? ing.nameEn : ing.name}
                      </span>
                      <ExternalLink className="w-3 h-3 text-stone-500 group-hover:text-amber-400 shrink-0 transition-colors" />
                    </div>
                    <span className="text-[11px] text-stone-400 mt-1 line-clamp-2">
                      {isEn ? ing.roleInSceneEn : ing.roleInScene}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Total 43 terms progress meter */}
            <div className="pt-3 border-t border-stone-800 text-xs text-stone-400 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span>{isEn ? 'Glossary Coverage' : 'Pokrytí Lexikonu'}</span>
                <span className="font-bold text-amber-400">43 / 43 (100 %)</span>
              </div>
              <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full rounded-full w-full" />
              </div>
              <p className="text-[11px] text-stone-500 text-center italic">
                {isEn ? 'All 43 culinary items from the Glossary are logically included in Nikolas & Vendy’s journey.' : 'Všech 43 pojmů z Kulinářského lexikonu je logicky zapracováno do příběhu.'}
              </p>
            </div>
          </div>
        </aside>

      </div>

    </div>
  );
};
