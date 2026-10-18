import React from 'react';
import { ArrowLeft, Play, LayoutGrid, ChevronRight, Award } from 'lucide-react';
import { MenuCategory, MenuItem } from '../data/menuData';
import { UserStats } from '../utils/storage';

interface ItemSelectorProps {
  category: MenuCategory;
  onBack: () => void;
  onSelectItem: (item: MenuItem) => void;
  onQuizEntireCategory: () => void;
  onOpenTableTrainer: () => void;
  stats: UserStats;
  language: 'cs' | 'en';
}

export const ItemSelector: React.FC<ItemSelectorProps> = ({
  category,
  onBack,
  onSelectItem,
  onQuizEntireCategory,
  onOpenTableTrainer,
  stats,
  language,
}) => {
  const isEn = language === 'en';

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-stone-900/80 p-5 rounded-2xl border border-stone-800">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl bg-stone-950 border border-stone-800 hover:border-amber-500/50 text-stone-300 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                {category.badge || category.name}
              </span>
            </div>
            <h2 className="text-xl font-black text-stone-100">{category.name}</h2>
          </div>
        </div>

        <button
          onClick={onQuizEntireCategory}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>{isEn ? 'Quiz Entire Category' : 'Spustit kvíz celé kategorie'}</span>
        </button>
      </div>

      {/* Items List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {category.items.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="group bg-stone-900 border border-stone-800 hover:border-amber-500/50 rounded-2xl p-5 cursor-pointer transition-all hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                  {item.name}
                </h3>
                {item.price && (
                  <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-stone-950 border border-stone-800 text-amber-400">
                    {item.price}
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-400 leading-relaxed line-clamp-3">
                {item.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
              <span>{item.questions?.length || 0} {isEn ? 'questions' : 'otázek'}</span>
              <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                {isEn ? 'Start Test' : 'Spustit test'}
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
