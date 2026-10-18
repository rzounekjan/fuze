import React, { useState, useMemo } from 'react';
import { 
  Utensils, 
  Beer, 
  Wine, 
  Flame, 
  Sparkles, 
  Soup, 
  Salad, 
  Cake, 
  ChevronRight, 
  Search,
  CheckCircle2,
  BookOpen,
  Award,
  Layers
} from 'lucide-react';
import { MenuCategory } from '../data/menuData';
import { UserStats } from '../utils/storage';

interface CategorySelectorProps {
  categories: MenuCategory[];
  onSelectCategory: (cat: MenuCategory) => void;
  stats: UserStats;
  lastSelectedCategoryId: string | null;
  onClearLastSelectedCategory: () => void;
  language: 'cs' | 'en';
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  onSelectCategory,
  stats,
  lastSelectedCategoryId,
  onClearLastSelectedCategory,
  language,
}) => {
  const [search, setSearch] = useState('');
  const isEn = language === 'en';

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return categories;
    const term = search.toLowerCase();
    return categories.filter(cat => 
      cat.name.toLowerCase().includes(term) || 
      cat.description.toLowerCase().includes(term) ||
      cat.items.some(it => it.name.toLowerCase().includes(term))
    );
  }, [categories, search]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Utensils': return <Utensils className="w-5 h-5 text-amber-400" />;
      case 'Beer': return <Beer className="w-5 h-5 text-amber-400" />;
      case 'Wine': return <Wine className="w-5 h-5 text-amber-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Soup': return <Soup className="w-5 h-5 text-amber-400" />;
      case 'Salad': return <Salad className="w-5 h-5 text-amber-400" />;
      case 'Cake': return <Cake className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Search Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-stone-900/60 p-4 rounded-2xl border border-stone-800">
        <div>
          <h2 className="text-xl font-black text-stone-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-500" />
            {isEn ? 'Select Menu Category' : 'Vyberte kategorii menu'}
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            {isEn 
              ? 'Train knowledge for each specific food section or beverage list.' 
              : 'Trénujte znalosti pro jednotlivé sekce jídelního i nápojového lístku.'}
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={isEn ? 'Search category or item...' : 'Hledat kategorii nebo jídlo...'}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCategories.map((cat) => {
          const catStat = stats.categoryStats[cat.id] || { total: 0, correct: 0 };
          const percent = catStat.total > 0 ? Math.round((catStat.correct / catStat.total) * 100) : 0;

          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="group bg-stone-900 border border-stone-800 hover:border-amber-500/50 rounded-2xl p-5 cursor-pointer transition-all hover:shadow-xl hover:shadow-amber-950/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(cat.iconName)}
                  </div>
                  {cat.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      {cat.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>{cat.name}</span>
                  <ChevronRight className="w-4 h-4 text-stone-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                </h3>
                <p className="text-xs text-stone-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                <span className="font-semibold text-stone-400">
                  {cat.items.length} {isEn ? 'items' : 'položek'}
                </span>
                {catStat.total > 0 && (
                  <div className="flex items-center gap-1.5 font-bold text-amber-400">
                    <Award className="w-3.5 h-3.5" />
                    <span>{percent}%</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
