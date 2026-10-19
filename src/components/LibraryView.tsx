import React, { useState, useMemo, useEffect } from 'react';
import { BookOpen, Search, Wine, Sparkles, ChevronRight, Play, Info, HelpCircle } from 'lucide-react';
import { CULINARY_TERMS, CULINARY_TERMS_EN, BEVERAGE_ITEMS, BEVERAGE_ITEMS_EN, CulinaryTerm, BeverageItem } from '../data/libraryData';
import { ItemQuizModal } from './ItemQuizModal';

interface LibraryViewProps {
  language?: 'cs' | 'en';
  initialSelectedItemId?: string | null;
  onClearInitialSelectedItem?: () => void;
}

export const LibraryView: React.FC<LibraryViewProps> = ({
  language = 'cs',
  initialSelectedItemId,
  onClearInitialSelectedItem,
}) => {
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<'culinary' | 'beverage'>('culinary');
  const [search, setSearch] = useState('');

  const [quizItem, setQuizItem] = useState<{
    item: CulinaryTerm | BeverageItem;
    type: 'culinary' | 'beverage';
  } | null>(null);

  const culinaryData = isEn ? CULINARY_TERMS_EN : CULINARY_TERMS;
  const beverageData = isEn ? BEVERAGE_ITEMS_EN : BEVERAGE_ITEMS;

  useEffect(() => {
    if (initialSelectedItemId) {
      const matchCulinary = culinaryData.find(c => c.id === initialSelectedItemId);
      if (matchCulinary) {
        setActiveTab('culinary');
      } else {
        const matchBev = beverageData.find(b => b.id === initialSelectedItemId);
        if (matchBev) setActiveTab('beverage');
      }
    }
  }, [initialSelectedItemId, culinaryData, beverageData]);

  const filteredCulinary = useMemo(() => {
    if (!search.trim()) return culinaryData;
    const t = search.toLowerCase();
    return culinaryData.filter(c => 
      c.name.toLowerCase().includes(t) || 
      c.shortDescription.toLowerCase().includes(t) ||
      c.tags.some(tag => tag.toLowerCase().includes(t))
    );
  }, [culinaryData, search]);

  const filteredBeverages = useMemo(() => {
    if (!search.trim()) return beverageData;
    const t = search.toLowerCase();
    return beverageData.filter(b => 
      b.name.toLowerCase().includes(t) || 
      b.producer.toLowerCase().includes(t) ||
      b.origin.toLowerCase().includes(t) ||
      b.region.toLowerCase().includes(t)
    );
  }, [beverageData, search]);

  return (
    <div className="space-y-6">
      
      {/* Search Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-stone-900/80 p-5 rounded-2xl border border-stone-800">
        <div>
          <h2 className="text-xl font-black text-stone-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-500" />
            {isEn ? 'Gastronomy & Beverage Library' : 'Knihovna: Lexikon & Nápoje'}
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            {isEn ? 'Encyclopedic terms, ingredients, wines and spirits with instant question testing.' : 'Encyklopedie kulinářských pojmů a nápojů s tréninkovým systémem otázek.'}
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={isEn ? 'Search library...' : 'Hledat v knihovně...'}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Main Tabs: Culinary vs Beverage */}
      <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
        <button
          onClick={() => setActiveTab('culinary')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
            activeTab === 'culinary'
              ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20'
              : 'bg-stone-900 text-stone-400 border border-stone-800 hover:text-stone-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>{isEn ? 'Culinary Lexicon' : 'Kulinářský lexikon'}</span>
        </button>

        <button
          onClick={() => setActiveTab('beverage')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
            activeTab === 'beverage'
              ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20'
              : 'bg-stone-900 text-stone-400 border border-stone-800 hover:text-stone-200'
          }`}
        >
          <Wine className="w-4 h-4" />
          <span>{isEn ? 'Beverage Encyclopedia' : 'Nápojová encyklopedie'}</span>
        </button>
      </div>

      {/* Culinary Lexicon Content */}
      {activeTab === 'culinary' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCulinary.map((term) => (
            <div key={term.id} className="bg-stone-900 border border-stone-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    {term.categoryName}
                  </span>
                  <span className="text-[11px] text-stone-300 font-medium">{term.origin}</span>
                </div>

                <h3 className="text-lg font-bold text-stone-100">{term.name}</h3>
                <p className="text-xs text-stone-400 leading-relaxed">{term.shortDescription}</p>

                {term.flavorProfile && (
                  <p className="text-[11px] text-stone-300 bg-stone-950/60 p-2.5 rounded-xl border border-stone-800">
                    <strong className="text-amber-400">Chuťový profil:</strong> {term.flavorProfile}
                  </p>
                )}

                {term.staffTips && (
                  <div className="text-[11px] text-amber-200/90 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 space-y-1.5 mt-2">
                    <p className="font-bold text-amber-400 flex items-center gap-1.5 text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      {isEn ? 'History & Story / Tips' : 'Historie vzniku & Příběh'}
                    </p>
                    <p className="text-stone-300 leading-relaxed whitespace-pre-line text-[11px]">{term.staffTips}</p>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
                <button
                  onClick={() => setQuizItem({ item: term, type: 'culinary' })}
                  className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isEn ? 'Test Questions for Item' : 'Spustit test otázek k položce'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Beverage Encyclopedia Content */}
      {activeTab === 'beverage' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBeverages.map((bev) => (
            <div key={bev.id} className="bg-stone-900 border border-stone-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    {bev.categoryName}
                  </span>
                  <span className="text-[11px] text-amber-400 font-bold">{bev.price}</span>
                </div>

                <h3 className="text-lg font-bold text-stone-100">{bev.name}</h3>
                <p className="text-xs text-stone-300 font-medium">{bev.producer} · {bev.region}, {bev.origin}</p>
                
                {bev.flavorProfile && (
                  <p className="text-xs text-stone-400 leading-relaxed line-clamp-2">{bev.flavorProfile}</p>
                )}

                {bev.staffNotes && (
                  <div className="text-[11px] text-amber-200/90 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 space-y-0.5 mt-2">
                    <p className="font-bold text-amber-400 text-[11px] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {isEn ? 'Notes & Story' : 'Poznámka sommeliera & Příběh'}
                    </p>
                    <p className="text-stone-300 leading-relaxed text-[11px]">{bev.staffNotes}</p>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
                <button
                  onClick={() => setQuizItem({ item: bev, type: 'beverage' })}
                  className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isEn ? 'Test Questions for Item' : 'Spustit test otázek k položce'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quiz Modal */}
      {quizItem && (
        <ItemQuizModal
          item={quizItem.item}
          itemType={quizItem.type}
          allTerms={culinaryData}
          allBeverages={beverageData}
          language={language}
          onClose={() => setQuizItem(null)}
        />
      )}
    </div>
  );
};
