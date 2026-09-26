import React, { useState } from 'react';
import { MENU_CATEGORIES, MenuCategory, MenuItem, TOTAL_ITEMS_COUNT, TOTAL_QUESTIONS_COUNT } from './data/menuData';
import { MENU_CATEGORIES_EN } from './data/menuDataEn';
import { getStoredStats, resetStats, UserStats } from './utils/storage';
import { Header } from './components/Header';
import { CategorySelector } from './components/CategorySelector';
import { ItemSelector } from './components/ItemSelector';
import { QuizView } from './components/QuizView';
import { RandomExam } from './components/RandomExam';
import { MenuExplorer } from './components/MenuExplorer';
import { OfflineIndicator } from './components/OfflineIndicator';
import { RotateCcw } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'train' | 'exam' | 'catalog'>('train');
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);
  const [lastSelectedCategoryId, setLastSelectedCategoryId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [language, setLanguage] = useState<'cs' | 'en'>(() => {
    const saved = localStorage.getItem('fuze_language');
    return saved === 'en' || saved === 'cs' ? saved : 'cs';
  });
  const [stats, setStats] = useState<UserStats>(() => getStoredStats(language));
  const [showResetModal, setShowResetModal] = useState<boolean>(false);

  // Dynamic categories based on active language
  const activeCategories = language === 'en' ? MENU_CATEGORIES_EN : MENU_CATEGORIES;

  const handleLanguageChange = (lang: 'cs' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('fuze_language', lang);
    setStats(getStoredStats(lang));

    // Keep active selection in sync across languages
    const targetCats = lang === 'en' ? MENU_CATEGORIES_EN : MENU_CATEGORIES;
    if (selectedCategory) {
      const matchCat = targetCats.find(c => c.id === selectedCategory.id) || null;
      setSelectedCategory(matchCat);
      if (selectedItem && matchCat) {
        const matchItem = matchCat.items.find(i => i.id === selectedItem.id) || null;
        setSelectedItem(matchItem);
      }
    }
  };

  // Category quiz runner state (when testing all items in category sequentially)
  const [isCategoryRunner, setIsCategoryRunner] = useState<boolean>(false);
  const [categoryItemIndex, setCategoryItemIndex] = useState<number>(0);

  const refreshStats = () => {
    setStats(getStoredStats(language));
  };

  const handleConfirmReset = () => {
    const fresh = resetStats(language);
    setStats(fresh);
    setShowResetModal(false);
  };

  // Nav actions
  const handleSelectCategory = (cat: MenuCategory) => {
    setLastSelectedCategoryId(cat.id);
    setSelectedCategory(cat);
    setSelectedItem(null);
    setIsCategoryRunner(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectItem = (item: MenuItem) => {
    setSelectedItem(item);
    setIsCategoryRunner(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleStartQuizFromExplorer = (cat: MenuCategory, item: MenuItem) => {
    setLastSelectedCategoryId(cat.id);
    setSelectedCategory(cat);
    setSelectedItem(item);
    setCurrentTab('train');
    setIsCategoryRunner(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToCategories = () => {
    if (selectedCategory) {
      setLastSelectedCategoryId(selectedCategory.id);
    }
    setSelectedCategory(null);
    setSelectedItem(null);
    setIsCategoryRunner(false);
  };

  const handleQuizEntireCategory = () => {
    if (!selectedCategory || selectedCategory.items.length === 0) return;
    setIsCategoryRunner(true);
    setCategoryItemIndex(0);
    setSelectedItem(selectedCategory.items[0]);
  };

  const handleNextItemInCategory = () => {
    if (!selectedCategory) return;
    const nextIdx = categoryItemIndex + 1;
    if (nextIdx < selectedCategory.items.length) {
      setCategoryItemIndex(nextIdx);
      setSelectedItem(selectedCategory.items[nextIdx]);
    } else {
      // Completed all items in category
      setSelectedItem(null);
      setIsCategoryRunner(false);
    }
  };

  // Check if there is a next item in the current category
  const currentItemIndex = selectedCategory && selectedItem
    ? selectedCategory.items.findIndex(it => it.id === selectedItem.id)
    : -1;
  const hasNextItem = selectedCategory
    ? currentItemIndex >= 0 && currentItemIndex + 1 < selectedCategory.items.length
    : false;

  const handleStepToNextItem = () => {
    if (!selectedCategory || currentItemIndex < 0) return;
    const next = selectedCategory.items[currentItemIndex + 1];
    if (next) {
      setSelectedItem(next);
      setCategoryItemIndex(currentItemIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans">
      {/* Top App Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          if (tab !== 'train') {
            // Keep category if returning, but clean sub-quiz if moving away
          }
        }}
        stats={stats}
        totalItemsCount={TOTAL_ITEMS_COUNT}
        totalQuestionsCount={TOTAL_QUESTIONS_COUNT}
        onResetStats={() => setShowResetModal(true)}
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {language === 'en' && (
          <div className="mb-6 p-4 rounded-xl bg-amber-950/30 border border-amber-800/40 text-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm animate-fadeIn">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇬🇧</span>
              <div>
                <p className="font-semibold text-amber-100">Anglická verze menu a trenažéru (English Menu Training)</p>
                <p className="text-xs text-stone-300">Skupiny, položky menu i testové otázky jsou v angličtině. Statistiky úspěšnosti a sérií jsou pro anglickou verzi vedeny odděleně.</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleLanguageChange('cs')}
              className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 font-semibold text-xs whitespace-nowrap transition-colors border border-amber-800/40"
            >
              🇨🇿 Přepnout do CZ
            </button>
          </div>
        )}
        {currentTab === 'train' && (
          <>
            {/* View 1: Quiz screen when Item is selected */}
            {selectedCategory && selectedItem ? (
              <QuizView
                key={`${selectedCategory.id}-${selectedItem.id}`}
                category={selectedCategory}
                item={selectedItem}
                onBackToItems={() => setSelectedItem(null)}
                onBackToMainMenu={handleBackToCategories}
                onNextItem={hasNextItem ? handleStepToNextItem : undefined}
                hasNextItem={hasNextItem}
                onAnswerRecorded={refreshStats}
                language={language}
              />
            ) : selectedCategory ? (
              /* View 2: Item selector inside selected Category */
              <ItemSelector
                category={selectedCategory}
                onBack={handleBackToCategories}
                onSelectItem={handleSelectItem}
                onQuizEntireCategory={handleQuizEntireCategory}
                stats={stats}
                language={language}
              />
            ) : (
              /* View 3: Category selector (Root training screen) */
              <CategorySelector
                categories={activeCategories}
                onSelectCategory={handleSelectCategory}
                stats={stats}
                lastSelectedCategoryId={lastSelectedCategoryId}
                language={language}
              />
            )}
          </>
        )}

        {currentTab === 'exam' && (
          <RandomExam
            categories={activeCategories}
            onFinishExam={refreshStats}
            onAnswerRecorded={refreshStats}
            onExit={() => {
              refreshStats();
              setCurrentTab('train');
            }}
            language={language}
          />
        )}

        {currentTab === 'catalog' && (
          <MenuExplorer
            categories={activeCategories}
            onStartQuiz={handleStartQuizFromExplorer}
            masteredIds={stats.masteredItemIds}
            language={language}
          />
        )}
      </main>

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 mx-auto flex items-center justify-center">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-100">
                Resetovat skóre pro {language === 'en' ? 'anglické menu' : 'české menu'}?
              </h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Tato akce vymaže vaši aktuální sérii, procentuální úspěšnost i splněné položky pro {language === 'en' ? 'anglickou verzi' : 'českou verzi'}. Statistiky pro {language === 'en' ? 'české menu' : 'anglické menu'} zůstanou beze změny.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold transition-colors"
              >
                Zrušit
              </button>
              <button
                onClick={handleConfirmReset}
                className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-lg shadow-rose-900/40 transition-colors"
              >
                Ano, resetovat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-stone-800/80 bg-stone-900/60 py-6 text-center text-xs text-stone-300">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="font-semibold text-stone-300">FUZE Restaurant & Brewery Prague</span>
            </div>
            <span className="hidden sm:inline text-stone-600">·</span>
            <span className="text-stone-400">Všechna práva vyhrazena</span>
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <span className="text-stone-300 font-medium">Vytvořil: Jan Rzounek</span>
          </div>
        </div>
      </footer>

      {/* PWA Offline Connectivity Indicator */}
      <OfflineIndicator language={language} />
    </div>
  );
}
