import React, { useState, useMemo } from 'react';
import { Compass, Search, ChevronRight, Play, CheckCircle2, BookOpen } from 'lucide-react';
import { MenuCategory, MenuItem } from '../data/menuData';

interface MenuExplorerProps {
  categories: MenuCategory[];
  onStartQuiz: (cat: MenuCategory, item: MenuItem) => void;
  onNavigateToLibraryItem: (item: MenuItem) => void;
  masteredIds?: string[];
  language?: 'cs' | 'en';
}

export const MenuExplorer: React.FC<MenuExplorerProps> = ({
  categories,
  onStartQuiz,
  onNavigateToLibraryItem,
  masteredIds = [],
  language = 'cs',
}) => {
  const isEn = language === 'en';
  const [search, setSearch] = useState('');
  const [selectedCatId, setSelectedCatId] = useState<string>('all');

  const filteredCategories = useMemo(() => {
    return categories.filter(cat => {
      if (selectedCatId !== 'all' && cat.id !== selectedCatId) return false;
      if (!search.trim()) return true;

      const term = search.toLowerCase();
      return (
        cat.name.toLowerCase().includes(term) ||
        cat.items.some(it => 
          it.name.toLowerCase().includes(term) || 
          it.description.toLowerCase().includes(term)
        )
      );
    });
  }, [categories, selectedCatId, search]);

  return (
    <div className="space-y-6">
      
      {/* Search Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-stone-900/80 p-5 rounded-2xl border border-stone-800">
        <div>
          <h2 className="text-xl font-black text-stone-100 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-500" />
            {isEn ? 'Menu Catalog' : 'Katalog menu FUZE'}
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            {isEn ? 'Browse all dishes and beverages with complete recipes and ingredients.' : 'Procházejte všechna jídla a nápoje s podrobnými recepturami.'}
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={isEn ? 'Search item...' : 'Hledat položku...'}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        <button
          onClick={() => setSelectedCatId('all')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
            selectedCatId === 'all'
              ? 'bg-amber-500 text-stone-950'
              : 'bg-stone-900 text-stone-400 border border-stone-800 hover:text-stone-200'
          }`}
        >
          {isEn ? 'All Categories' : 'Všechny kategorie'}
        </button>

        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCatId(cat.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              selectedCatId === cat.id
                ? 'bg-amber-500 text-stone-950'
                : 'bg-stone-900 text-stone-400 border border-stone-800 hover:text-stone-200'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Items list */}
      <div className="space-y-6">
        {filteredCategories.map(cat => (
          <div key={cat.id} className="space-y-3">
            <h3 className="text-base font-bold text-amber-500 flex items-center gap-2">
              <span>{cat.name}</span>
              <span className="text-xs text-stone-500 font-normal">({cat.items.length})</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.items.map(item => (
                <div key={item.id} className="bg-stone-900 border border-stone-800 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-base font-bold text-stone-100">{item.name}</h4>
                      {item.price && (
                        <span className="px-2 py-0.5 rounded text-xs font-bold bg-stone-950 text-amber-400 border border-stone-800">
                          {item.price}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">{item.description}</p>
                    {item.notes && (
                      <p className="text-[11px] text-amber-400/80 mt-2 bg-amber-500/5 p-2 rounded-lg border border-amber-500/10">
                        💡 {item.notes}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                    <button
                      onClick={() => onStartQuiz(cat, item)}
                      className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{isEn ? 'Test item' : 'Vyzkoušet jídlo'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
