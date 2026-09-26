import React, { useState, useEffect, useMemo, useRef } from 'react';
import { MenuCategory, MenuItem, Question } from '../data/menuData';
import { soundManager } from '../utils/sound';
import { recordAnswer } from '../utils/storage';
import { AudioPronounceButton } from './AudioPronounceButton';
import { 
  ArrowLeft, CheckCircle2, XCircle, ChevronRight, 
  RotateCcw, Sparkles, BookOpen, AlertCircle, 
  Award, HelpCircle 
} from 'lucide-react';

interface QuizViewProps {
  category: MenuCategory;
  item: MenuItem;
  onBackToItems: () => void;
  onBackToMainMenu?: () => void;
  onNextItem?: () => void;
  hasNextItem?: boolean;
  onAnswerRecorded: () => void;
  language?: 'cs' | 'en';
}

interface ShuffledOption {
  letter: 'A' | 'B' | 'C';
  text: string;
  isCorrect: boolean;
}

export const QuizView: React.FC<QuizViewProps> = ({
  category,
  item,
  onBackToItems,
  onBackToMainMenu,
  onNextItem,
  hasNextItem,
  onAnswerRecorded,
  language = 'cs'
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<ShuffledOption | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [scoreHistory, setScoreHistory] = useState<boolean[]>([]);
  const [showFullRecipe, setShowFullRecipe] = useState(false);
  
  // Guard timestamp to prevent ghost clicks, key releases, and rapid touch events on new questions
  const transitionTimestampRef = useRef<number>(Date.now());

  // Reset state whenever the item changes
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScoreHistory([]);
    setShowFullRecipe(false);
    transitionTimestampRef.current = Date.now();
  }, [item.id]);

  const currentQuestion = item.questions[currentQuestionIndex] || item.questions[0];

  // Shuffle options A, B, C deterministically per question index
  const options: ShuffledOption[] = useMemo(() => {
    if (!currentQuestion) return [];
    const pool = [
      { text: currentQuestion.correctAnswer, isCorrect: true },
      { text: currentQuestion.distractors[0], isCorrect: false },
      { text: currentQuestion.distractors[1], isCorrect: false }
    ];

    // Seeded shuffle using question id length + index
    const seed = (currentQuestion.id.charCodeAt(0) + currentQuestionIndex) % 3;
    const shuffled = [...pool];
    if (seed === 1) {
      const temp = shuffled[0];
      shuffled[0] = shuffled[1];
      shuffled[1] = temp;
    } else if (seed === 2) {
      const temp = shuffled[0];
      shuffled[0] = shuffled[2];
      shuffled[2] = temp;
    }

    const letters: ('A' | 'B' | 'C')[] = ['A', 'B', 'C'];
    return shuffled.map((opt, i) => ({
      letter: letters[i],
      text: opt.text,
      isCorrect: opt.isCorrect
    }));
  }, [currentQuestion, currentQuestionIndex]);

  // Handle answering with cooldown guard
  const handleSelect = (option: ShuffledOption) => {
    if (hasAnswered) return;
    // Guard against accidental double taps / ghost clicks right after question transition (400ms buffer)
    if (Date.now() - transitionTimestampRef.current < 400) return;

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    setSelectedOption(option);
    setHasAnswered(true);

    const isCorrect = option.isCorrect;
    if (isCorrect) {
      soundManager.playCorrect();
    } else {
      soundManager.playIncorrect();
    }

    // Save to storage
    recordAnswer(currentQuestion.id, item.id, isCorrect, language);
    setScoreHistory(prev => [...prev, isCorrect]);
    onAnswerRecorded();
  };

  // Keyboard shortcut listener: A, B, C or 1, 2, 3 or Space/Enter for Next
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key repetitions (holding down a key)
      if (e.repeat) return;
      // Ignore if inside input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      const key = e.key.toUpperCase();
      if (!hasAnswered) {
        if (Date.now() - transitionTimestampRef.current < 400) return;
        if (key === 'A' || key === '1') {
          const opt = options.find(o => o.letter === 'A');
          if (opt) handleSelect(opt);
        } else if (key === 'B' || key === '2') {
          const opt = options.find(o => o.letter === 'B');
          if (opt) handleSelect(opt);
        } else if (key === 'C' || key === '3') {
          const opt = options.find(o => o.letter === 'C');
          if (opt) handleSelect(opt);
        }
      } else {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
          e.preventDefault();
          e.stopPropagation();
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }
          handleNextQuestion();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasAnswered, options]);

  const handleNextQuestion = () => {
    transitionTimestampRef.current = Date.now();
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    if (currentQuestionIndex + 1 < item.questions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else if (hasNextItem && onNextItem) {
      onNextItem();
    } else {
      // Finished all questions for this item
      setShowFullRecipe(true);
    }
  };

  const handleRestartQuiz = () => {
    transitionTimestampRef.current = Date.now();
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScoreHistory([]);
    setShowFullRecipe(false);
  };

  const isQuizComplete = hasAnswered && currentQuestionIndex + 1 >= item.questions.length;
  const correctCount = scoreHistory.filter(Boolean).length;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-800">
        <div className="flex items-center gap-2 text-xs font-semibold">
          {onBackToMainMenu && (
            <>
              <button
                onClick={onBackToMainMenu}
                className="inline-flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors group"
                title={language === 'en' ? 'Return to Main Menu' : 'Zpět do Hlavní nabídky'}
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                <span>{language === 'en' ? 'Main Menu' : 'Hlavní nabídka'}</span>
              </button>
              <span className="text-stone-600">/</span>
            </>
          )}
          <button
            onClick={onBackToItems}
            className="inline-flex items-center gap-1.5 text-stone-300 hover:text-amber-300 transition-colors group"
            title={language === 'en' ? `Back to items in ${category.name}` : `Zpět na položky: ${category.name}`}
          >
            <span>{category.name}</span>
          </button>
        </div>

        <div className="text-xs text-stone-400 flex items-center gap-2">
          <span>{language === 'en' ? 'Question' : 'Otázka'}</span>
          <span className="font-bold text-stone-200">
            {currentQuestionIndex + 1} / {item.questions.length}
          </span>
        </div>
      </div>

      {/* Target Dish Card */}
      <div className="rounded-2xl bg-stone-900/90 border border-stone-800 p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">
              <span>{category.name}</span>
              <span>·</span>
              <span>{language === 'en' ? 'Ingredient Quiz A, B, C' : 'Test ingrediencí A, B, C'}</span>
            </div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 font-serif">
                {item.name}
              </h2>
              <AudioPronounceButton
                itemId={item.id}
                name={item.name}
                description={item.description}
                lang={language}
                size="md"
                showLabel={true}
                title={language === 'en' ? 'Pronounce name & ingredients in English' : 'Přečíst název a složení česky'}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {item.weight && (
              <span className="text-xs font-semibold text-stone-300 bg-stone-800/90 border border-stone-700/60 px-2.5 py-1 rounded-md">
                {item.weight}
              </span>
            )}
            {item.price && (
              <span className="text-sm font-bold text-amber-400 bg-amber-950/40 border border-amber-800/40 px-3 py-1 rounded-md">
                {item.price}
              </span>
            )}
          </div>
        </div>

        {/* Progress bar inside card */}
        <div className="w-full h-1 bg-stone-800 rounded-full mt-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / item.questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Question Box */}
      <div className="rounded-2xl bg-stone-900/60 border border-stone-800/80 p-6 sm:p-8 space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md mb-3 border border-amber-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Zadání otázky</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-stone-100 leading-snug">
            {currentQuestion.question}
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Zvolte správnou možnost <strong className="text-stone-300">A</strong>, <strong className="text-stone-300">B</strong> nebo <strong className="text-stone-300">C</strong> (kliknutím nebo stisknutím klávesy na klávesnici):
          </p>
        </div>

        {/* The 3 Options A, B, C */}
        <div className="grid grid-cols-1 gap-3.5">
          {options.map((option) => {
            const isChosen = selectedOption?.letter === option.letter;
            let containerStyle = "bg-stone-900/80 border-stone-800 text-stone-200 hover:border-amber-500/60 hover:bg-stone-800/80";
            let badgeStyle = "bg-stone-800 text-amber-400 border-stone-700";

            if (hasAnswered) {
              if (option.isCorrect) {
                containerStyle = "bg-emerald-950/60 border-emerald-500 text-emerald-100 shadow-md shadow-emerald-950/30 ring-1 ring-emerald-500";
                badgeStyle = "bg-emerald-500 text-stone-950 font-black border-emerald-400";
              } else if (isChosen && !option.isCorrect) {
                containerStyle = "bg-rose-950/60 border-rose-500 text-rose-100 shadow-md shadow-rose-950/30 ring-1 ring-rose-500";
                badgeStyle = "bg-rose-500 text-white font-black border-rose-400";
              } else {
                containerStyle = "bg-stone-900/40 border-stone-800/60 text-stone-500 opacity-60";
                badgeStyle = "bg-stone-800/40 text-stone-500 border-stone-800";
              }
            }

            return (
              <button
                key={`${currentQuestion.id}-${option.letter}`}
                onClick={(e) => {
                  e.currentTarget.blur();
                  handleSelect(option);
                }}
                disabled={hasAnswered}
                className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-150 flex items-center justify-between gap-4 group ${containerStyle}`}
              >
                <div className="flex items-center gap-3.5">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm border shrink-0 transition-colors ${badgeStyle}`}>
                    {option.letter}
                  </span>
                  <span className="text-sm sm:text-base font-medium leading-snug">
                    {option.text}
                  </span>
                </div>

                <div className="shrink-0">
                  {hasAnswered && option.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  )}
                  {hasAnswered && isChosen && !option.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Answer Feedback & Explanation Card */}
        {hasAnswered && (
          <div className={`p-5 rounded-xl border transition-all animate-in fade-in slide-in-from-bottom-2 duration-200 ${
            selectedOption?.isCorrect
              ? 'bg-emerald-950/40 border-emerald-800/60'
              : 'bg-rose-950/40 border-rose-800/60'
          }`}>
            <div className="flex items-start gap-3">
              {selectedOption?.isCorrect ? (
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
              )}

              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className={`font-bold text-sm ${
                    selectedOption?.isCorrect ? 'text-emerald-300' : 'text-rose-300'
                  }`}>
                    {selectedOption?.isCorrect ? 'Výborně! Správná odpověď.' : 'Bohužel, toto není správně.'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                  {currentQuestion.explanation}
                </p>

                {/* Official description text strictly from menu */}
                {item.description && (
                  <div className="pt-2 mt-2 border-t border-stone-800/80">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                        {language === 'en' ? 'Official FUZE menu recipe:' : 'Text z lístku FUZE:'}
                      </span>
                      <AudioPronounceButton
                        itemId={`explanation-${item.id}`}
                        name={item.name}
                        description={item.description}
                        lang={language}
                        size="sm"
                        title={language === 'en' ? 'Listen to English pronunciation' : 'Přečíst recept česky'}
                      />
                    </div>
                    <p className="text-xs text-stone-300 italic">
                      "{item.description}"
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Next Action Buttons */}
            <div className="mt-5 pt-4 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-stone-400">
                Tip: K přechodu na další otázku stiskněte <kbd className="px-1.5 py-0.5 rounded bg-stone-800 border border-stone-700 text-stone-300 font-mono text-[10px]">Enter</kbd> nebo <kbd className="px-1.5 py-0.5 rounded bg-stone-800 border border-stone-700 text-stone-300 font-mono text-[10px]">Mezerník</kbd>
              </div>

              <div className="flex items-center gap-2">
                {currentQuestionIndex + 1 < item.questions.length ? (
                  <button
                    onClick={(e) => {
                      e.currentTarget.blur();
                      handleNextQuestion();
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-950/40 hover:scale-[1.02]"
                  >
                    <span>Další otázka k této podsložce</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    {hasNextItem && onNextItem ? (
                      <button
                        onClick={(e) => {
                          e.currentTarget.blur();
                          onNextItem();
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-950/40 hover:scale-[1.02]"
                      >
                        <span>Další podsložka ve skupině</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.currentTarget.blur();
                          onBackToItems();
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-950/40"
                      >
                        <span>{language === 'en' ? 'Done! Back to items' : 'Hotovo! Zpět na položky'}</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Completion Modal / Summary banner if all questions for this dish answered */}
      {isQuizComplete && (
        <div className="rounded-2xl p-6 bg-gradient-to-r from-amber-950/40 via-stone-900 to-stone-900 border border-amber-600/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-stone-100">
                Položka "{item.name}" dokončena!
              </h4>
              <p className="text-xs text-stone-300">
                Úspěšnost v této podsložce: <strong className="text-amber-400">{correctCount} z {item.questions.length}</strong> správně.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleRestartQuiz}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Zopakovat test</span>
            </button>

            {onBackToMainMenu && (
              <button
                onClick={onBackToMainMenu}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-amber-950/40 text-stone-300 hover:text-amber-300 border border-stone-700 hover:border-amber-600/50 text-xs font-semibold transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Main Menu' : 'Hlavní nabídka'}</span>
              </button>
            )}

            {hasNextItem && onNextItem && (
              <button
                onClick={onNextItem}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition-all shadow-md shadow-amber-950/40"
              >
                <span>Další podsložka</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
