import React, { useState, useEffect, useRef } from 'react';
import { MenuCategory, MenuItem, Question } from '../data/menuData';
import { soundManager } from '../utils/sound';
import { recordAnswer } from '../utils/storage';
import { AudioPronounceButton } from './AudioPronounceButton';
import { 
  CheckCircle2, XCircle, ChevronRight, RotateCcw, 
  Trophy, ArrowLeft, Sparkles
} from 'lucide-react';

interface ExamQuestionItem {
  category: MenuCategory;
  item: MenuItem;
  question: Question;
  shuffledOptions: { letter: 'A' | 'B' | 'C' | 'D'; text: string; isCorrect: boolean }[];
}

interface RandomExamProps {
  categories: MenuCategory[];
  onFinishExam: () => void;
  onExit: () => void;
  onAnswerRecorded?: () => void;
  language?: 'cs' | 'en';
}

export const RandomExam: React.FC<RandomExamProps> = ({
  categories,
  onFinishExam,
  onExit,
  onAnswerRecorded,
  language = 'cs'
}) => {
  const [examQuestions, setExamQuestions] = useState<ExamQuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLetter, setSelectedLetter] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [firstAttemptCorrect, setFirstAttemptCorrect] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ isCorrect: boolean; selected: string; question: ExamQuestionItem }[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  // Transition timestamp & timer ref
  const transitionTimestampRef = useRef<number>(Date.now());
  const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Clean timer on unmount
  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, []);

  // Filter allowed categories and exclude allergen questions for Mix 100
  const ALLOWED_EXAM_CATEGORY_IDS = new Set([
    'predkrmy', 'chutovky', 'polevky', 'salaty', 'sporak', 'gril',
    'teple-omacky', 'studene-omacky', 'prilohy', 'dezerty',
    'pivo-na-cepu', 'vina-po-skle', 'bila-vina', 'cervena-vina',
    'ruzova-vina', 'bubliny'
  ]);

  const isAllergenQuestion = (q: Question) => {
    const text = (q.question || '').toLowerCase();
    const id = (q.id || '').toLowerCase();
    return text.includes('alergen') || text.includes('allergen') || id.includes('alergen') || id.includes('allergen');
  };

  // Generate 100 questions with 4 options (A, B, C, D)
  const initExam = () => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }

    // Filter categories to only allowed categories
    const allowedCategories = categories.filter(cat => ALLOWED_EXAM_CATEGORY_IDS.has(cat.id));

    // Gather global answers pool for dynamic 4th distractors from non-allergen questions
    const allAnswersPool: string[] = [];
    allowedCategories.forEach(cat => {
      cat.items.forEach(item => {
        item.questions.forEach(q => {
          if (isAllergenQuestion(q)) return;
          if (q.correctAnswer) allAnswersPool.push(q.correctAnswer);
          if (q.distractors && q.distractors[0]) allAnswersPool.push(q.distractors[0]);
          if (q.distractors && q.distractors[1]) allAnswersPool.push(q.distractors[1]);
        });
      });
    });

    const pool: { category: MenuCategory; item: MenuItem; question: Question }[] = [];
    allowedCategories.forEach(cat => {
      cat.items.forEach(item => {
        item.questions.forEach(q => {
          if (isAllergenQuestion(q)) return;
          pool.push({ category: cat, item, question: q });
        });
      });
    });

    // Shuffle pool
    const shuffledPool = [...pool].sort(() => 0.5 - Math.random());
    const selected100 = shuffledPool.slice(0, 100);

    const questionsWithShuffledOptions: ExamQuestionItem[] = selected100.map((entry) => {
      const existingSet = new Set([
        entry.question.correctAnswer.trim().toLowerCase(),
        entry.question.distractors[0].trim().toLowerCase(),
        entry.question.distractors[1].trim().toLowerCase()
      ]);

      const candidateDistractors = allAnswersPool.filter(a => a && !existingSet.has(a.trim().toLowerCase()));
      let thirdDistractor = candidateDistractors.length > 0 
        ? candidateDistractors[Math.floor(Math.random() * candidateDistractors.length)] 
        : (language === 'en' ? 'None of the above' : 'Žádná z uvedených ingrediencí');

      const rawOpts = [
        { text: entry.question.correctAnswer, isCorrect: true },
        { text: entry.question.distractors[0], isCorrect: false },
        { text: entry.question.distractors[1], isCorrect: false },
        { text: thirdDistractor, isCorrect: false }
      ].sort(() => 0.5 - Math.random());

      const letters: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
      return {
        ...entry,
        shuffledOptions: rawOpts.map((o, i) => ({
          letter: letters[i],
          text: o.text,
          isCorrect: o.isCorrect
        }))
      };
    });

    setExamQuestions(questionsWithShuffledOptions);
    setCurrentIndex(0);
    setSelectedLetter(null);
    setHasAnswered(false);
    setFirstAttemptCorrect(false);
    setUserAnswers([]);
    setIsFinished(false);
  };

  const EXAM_STORAGE_KEY = `fuze_exam_session_${language}_v100_cat_filtered`;

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(EXAM_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.examQuestions) && parsed.examQuestions.length > 0) {
          setExamQuestions(parsed.examQuestions);
          setCurrentIndex(typeof parsed.currentIndex === 'number' ? parsed.currentIndex : 0);
          setUserAnswers(parsed.userAnswers || []);
          setIsFinished(Boolean(parsed.isFinished));
          setHasAnswered(Boolean(parsed.hasAnswered));
          setSelectedLetter(parsed.selectedLetter || null);
          setFirstAttemptCorrect(Boolean(parsed.firstAttemptCorrect));
          return;
        }
      }
    } catch (e) {}
    initExam();
  }, [categories, language]);

  useEffect(() => {
    if (examQuestions.length > 0) {
      try {
        sessionStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify({
          examQuestions,
          currentIndex,
          userAnswers,
          isFinished,
          hasAnswered,
          selectedLetter,
          firstAttemptCorrect
        }));
      } catch (e) {}
    }
  }, [examQuestions, currentIndex, userAnswers, isFinished, hasAnswered, selectedLetter, firstAttemptCorrect, EXAM_STORAGE_KEY]);

  const handleExitExam = () => {
    if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
    try {
      sessionStorage.removeItem(EXAM_STORAGE_KEY);
    } catch (e) {}
    onExit();
  };

  const handleRestartExam = () => {
    if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
    try {
      sessionStorage.removeItem(EXAM_STORAGE_KEY);
    } catch (e) {}
    initExam();
  };

  const currentQ = examQuestions[currentIndex];

  const handleNext = () => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
    transitionTimestampRef.current = Date.now();

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    if (currentIndex + 1 < examQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedLetter(null);
      setHasAnswered(false);
      setFirstAttemptCorrect(false);
    } else {
      setIsFinished(true);
      soundManager.playFanfare();
      onFinishExam();
    }
  };

  const handleSelectOption = (letter: 'A' | 'B' | 'C' | 'D') => {
    if (!currentQ) return;
    if (Date.now() - transitionTimestampRef.current < 250) return;

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    const option = currentQ.shuffledOptions.find(o => o.letter === letter);
    if (!option) return;

    // 1st attempt on this question
    if (!hasAnswered) {
      setSelectedLetter(letter);
      setHasAnswered(true);

      const isCorrect = option.isCorrect;
      setFirstAttemptCorrect(isCorrect);

      if (isCorrect) {
        soundManager.playCorrect();
        recordAnswer(currentQ.question.id, currentQ.item.id, true, language);
        setUserAnswers(prev => [...prev, { isCorrect: true, selected: option.text, question: currentQ }]);
        onAnswerRecorded?.();

        // Automatic advance without confirmation for correct answer
        autoAdvanceTimerRef.current = setTimeout(() => {
          handleNext();
        }, 400);
      } else {
        soundManager.playIncorrect();
        recordAnswer(currentQ.question.id, currentQ.item.id, false, language);
        setUserAnswers(prev => [...prev, { isCorrect: false, selected: option.text, question: currentQ }]);
        onAnswerRecorded?.();
      }
    } 
    // If user already answered wrong, clicking the CORRECT option moves to next
    else if (!firstAttemptCorrect && option.isCorrect) {
      handleNext();
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFinished || !currentQ) return;
      if (e.repeat) return;
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      const key = e.key.toUpperCase();
      if (!hasAnswered) {
        if (Date.now() - transitionTimestampRef.current < 250) return;
        if (key === 'A' || key === '1') handleSelectOption('A');
        if (key === 'B' || key === '2') handleSelectOption('B');
        if (key === 'C' || key === '3') handleSelectOption('C');
        if (key === 'D' || key === '4') handleSelectOption('D');
      } else if (!firstAttemptCorrect) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
          e.preventDefault();
          e.stopPropagation();
          handleNext();
        } else {
          const correctOpt = currentQ.shuffledOptions.find(o => o.isCorrect);
          if (correctOpt) {
            if (
              key === correctOpt.letter ||
              (correctOpt.letter === 'A' && key === '1') ||
              (correctOpt.letter === 'B' && key === '2') ||
              (correctOpt.letter === 'C' && key === '3') ||
              (correctOpt.letter === 'D' && key === '4')
            ) {
              handleNext();
            }
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasAnswered, firstAttemptCorrect, isFinished, currentQ]);

  if (!currentQ && !isFinished) {
    return (
      <div className="p-12 text-center text-stone-400">
        {language === 'en' ? 'Preparing 100 questions exam...' : 'Příprava zkušebního testu (100 otázek)...'}
      </div>
    );
  }

  // Final Results Screen
  if (isFinished) {
    const total = examQuestions.length;
    const correct = userAnswers.filter(a => a.isCorrect).length;
    const incorrect = total - correct;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    return (
      <div className="max-w-xl mx-auto space-y-6 animate-in fade-in duration-300 py-4">
        <div className="rounded-2xl bg-stone-900 border border-amber-500/40 p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center">
            <Trophy className="w-10 h-10" />
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              {language === 'en' ? 'Exam Results (Mix 100)' : 'Výsledek zkoušky (Mix 100)'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 font-serif">
              {language === 'en' ? '100 Questions Test Completed' : 'Zkouška ze 100 otázek dokončena'}
            </h2>
          </div>

          {/* Centered Large Stats Display: Percentage & Correct vs Incorrect */}
          <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800 space-y-5 max-w-md mx-auto">
            {/* Procentuální úspěšnost */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">
                {language === 'en' ? 'Accuracy' : 'Procentuální úspěšnost'}
              </span>
              <div className="text-5xl font-black text-amber-400 font-mono tracking-tight">
                {percentage}%
              </div>
            </div>

            <div className="h-px bg-stone-800/80 w-full" />

            {/* Číselné zobrazení správné vs špatné */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-2.5">
                {language === 'en' ? 'Score (Correct vs Incorrect)' : 'Správné odpovědi vs Špatné'}
              </span>
              <div className="flex items-center justify-center gap-3 text-lg sm:text-xl font-black">
                <span className="text-emerald-400 px-3.5 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-800/60">
                  {correct} {language === 'en' ? 'correct' : 'správně'}
                </span>
                <span className="text-stone-500 font-normal">vs</span>
                <span className="text-rose-400 px-3.5 py-1.5 rounded-xl bg-rose-950/60 border border-rose-800/60">
                  {incorrect} {language === 'en' ? 'špatně' : 'špatně'}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleRestartExam}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm transition-all shadow-md shadow-amber-950/40 active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{language === 'en' ? 'Start new exam (Mix 100)' : 'Spustit nový test (Mix 100)'}</span>
            </button>
            <button
              type="button"
              onClick={handleExitExam}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-semibold transition-colors active:scale-95"
            >
              <span>{language === 'en' ? 'Exit to Training' : 'Zpět na výuku po skupinách'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active question view
  return (
    <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-stone-800">
        <button
          type="button"
          onClick={handleExitExam}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-800/90 hover:bg-stone-700/90 text-stone-200 hover:text-amber-300 border border-stone-700/80 hover:border-amber-500/40 text-xs font-semibold transition-all shadow-sm active:scale-[0.98] group"
        >
          <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-amber-400 group-hover:-translate-x-0.5 transition-all" />
          <span>{language === 'en' ? 'Exit exam' : 'Ukončit zkoušku'}</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-stone-300 font-medium">
          <span>{language === 'en' ? 'Question' : 'Otázka'}</span>
          <strong className="text-amber-400 font-bold text-sm">{currentIndex + 1}</strong>
          <span>{language === 'en' ? 'of' : 'z'} {examQuestions.length}</span>
        </div>
      </div>

      {/* Instructions callout bubble on question 1 */}
      {currentIndex === 0 && (
        <div className="rounded-2xl bg-amber-950/40 border border-amber-500/40 p-4 sm:p-5 text-amber-100 space-y-2 shadow-lg animate-in fade-in duration-300">
          <div className="font-bold text-amber-300 flex items-center gap-2 text-sm sm:text-base">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{language === 'en' ? 'Exam Instructions (Mix 100):' : 'Instrukce ke zkoušce (Mix 100):'}</span>
          </div>
          <ul className="space-y-1.5 text-stone-300 text-xs sm:text-sm pl-1">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">•</span>
              <span>
                {language === 'en'
                  ? 'Correct answer turns green with automatic move to the next question.'
                  : 'Správná odpověď se zbarví zeleně a automaticky se posuneme k další otázce.'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">•</span>
              <span>
                {language === 'en'
                  ? 'If incorrect, correct answer is shown – click it to move to the next question.'
                  : 'Při špatné odpovědi se zobrazí správná odpověď – po kliknutí na opravenou odpověď se posuneme k další otázce.'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">•</span>
              <span>
                {language === 'en'
                  ? 'At the end of the exam, a summary of statistics will be displayed.'
                  : 'Na konci zkoušky bude souhrn statistiky.'}
              </span>
            </li>
          </ul>
        </div>
      )}

      {/* Item info header */}
      <div className="rounded-xl bg-stone-900 border border-stone-800 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wide">
            <span>{currentQ.category.name}</span>
            <span>·</span>
            <span>{language === 'en' ? 'Dish Item' : 'Položka menu'}</span>
          </div>
          {currentQ.item.weight && (
            <span className="text-xs text-stone-300 bg-stone-800 px-2 py-0.5 rounded">
              {currentQ.item.weight}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-100 font-serif">
            {currentQ.item.name}
          </h2>
          <AudioPronounceButton
            itemId={`exam-${currentQ.item.id}`}
            name={currentQ.item.name}
            description={currentQ.item.description}
            lang={language}
            size="md"
            showLabel={true}
            title={language === 'en' ? 'Pronounce name & ingredients in English' : 'Přečíst název a složení česky'}
          />
        </div>
        {currentQ.item.price && (
          <div className="text-xs text-amber-400 font-semibold mt-1">
            {language === 'en' ? 'Price:' : 'Cena:'} {currentQ.item.price}
          </div>
        )}

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-stone-800 rounded-full mt-3.5 overflow-hidden">
          <div
            className="h-full bg-amber-500 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / examQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="rounded-2xl bg-stone-900/60 border border-stone-800 p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-100 leading-snug">
          {currentQ.question.question}
        </h3>

        {/* Options A, B, C, D */}
        <div className="space-y-3 sm:space-y-4">
          {currentQ.shuffledOptions.map((opt) => {
            const isChosen = selectedLetter === opt.letter;
            let containerStyle = "bg-stone-900/80 border-stone-800 text-stone-200 hover:border-amber-500/60 hover:bg-stone-800/80 active:scale-[0.99]";
            let badgeStyle = "bg-stone-800 text-amber-400 border-stone-700";

            if (hasAnswered) {
              if (opt.isCorrect) {
                containerStyle = "bg-emerald-950/70 border-emerald-500 text-emerald-100 ring-2 ring-emerald-500/50 shadow-lg shadow-emerald-950/40";
                badgeStyle = "bg-emerald-500 text-stone-950 font-black border-emerald-400";
              } else if (isChosen && !opt.isCorrect) {
                containerStyle = "bg-rose-950/70 border-rose-500 text-rose-100 ring-2 ring-rose-500/50 shadow-lg shadow-rose-950/40";
                badgeStyle = "bg-rose-500 text-white font-black border-rose-400";
              } else {
                containerStyle = "bg-stone-900/40 border-stone-800/60 text-stone-500 opacity-50";
                badgeStyle = "bg-stone-800/40 text-stone-500 border-stone-800";
              }
            }

            return (
              <button
                key={`${currentQ.question.id}-${opt.letter}`}
                type="button"
                onClick={(e) => {
                  e.currentTarget.blur();
                  handleSelectOption(opt.letter);
                }}
                disabled={hasAnswered && (firstAttemptCorrect || !opt.isCorrect)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between gap-3 sm:gap-4 min-h-[60px] ${containerStyle}`}
              >
                <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                  <span className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-black text-base sm:text-lg border shrink-0 ${badgeStyle}`}>
                    {opt.letter}
                  </span>
                  <span className="text-base sm:text-lg font-medium leading-relaxed">{opt.text}</span>
                </div>

                {hasAnswered && opt.isCorrect && (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                )}
                {hasAnswered && isChosen && !opt.isCorrect && (
                  <XCircle className="w-6 h-6 text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback explanation if answered wrong */}
        {hasAnswered && !firstAttemptCorrect && (
          <div className="pt-4 border-t border-stone-800 space-y-4 animate-in fade-in duration-200">
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3 text-xs sm:text-sm text-amber-300 font-semibold">
              <span>
                {language === 'en'
                  ? 'Incorrect. Click the correct answer (in green) to move to the next question.'
                  : 'Špatně. Klikněte na správnou odpověď (zeleně zvýrazněnou) pro přesun na další otázku.'
                }
              </span>
              <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
            </div>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed bg-stone-950/60 p-4 rounded-xl border border-stone-800 font-normal">
              💡 {currentQ.question.explanation}
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.currentTarget.blur();
                handleNext();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-base transition-all shadow-lg shadow-amber-950/40 min-h-[52px]"
            >
              <span>{currentIndex + 1 < examQuestions.length ? (language === 'en' ? 'Next Question' : 'Další otázka zkoušky') : (language === 'en' ? 'Evaluate Exam' : 'Vyhodnotit zkoušku')}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
