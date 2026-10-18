import React, { useState, useMemo } from 'react';
import { Sparkles, CheckCircle2, XCircle, RotateCcw, LogOut, Award, HelpCircle, Info } from 'lucide-react';
import { MenuCategory, Question } from '../data/menuData';

interface RandomExamProps {
  categories: MenuCategory[];
  onFinishExam?: () => void;
  onAnswerRecorded?: () => void;
  onExit: () => void;
  language?: 'cs' | 'en';
}

const ALLOWED_CATEGORY_IDS = [
  'predkrmy', 'chutovky', 'polevky', 'salaty', 'sporak-trouba', 
  'gril-pec', 'teple-omacky', 'studene-omacky', 'prilohy', 'dezerty', 
  'pivo', 'vina-sklo', 'bila-vina', 'cervena-vina', 'ruzova-vina', 'bubliny'
];

interface GeneratedExamQuestion {
  id: string;
  question: string;
  correctAnswer: string;
  distractors: [string, string, string]; // 4 choices total
  itemName: string;
  categoryName: string;
}

export const RandomExam: React.FC<RandomExamProps> = ({
  categories,
  onFinishExam,
  onAnswerRecorded,
  onExit,
  language = 'cs',
}) => {
  const isEn = language === 'en';

  // Build 100 questions pool excluding allergens and restricted to specified categories
  const examQuestions = useMemo(() => {
    const pool: GeneratedExamQuestion[] = [];
    const targetCats = categories.filter(cat => ALLOWED_CATEGORY_IDS.includes(cat.id));

    // Gather all candidate questions from target categories
    for (const cat of targetCats) {
      for (const item of cat.items) {
        for (const q of item.questions || []) {
          // Exclude allergen questions per rule 6
          if (q.id.includes('allergen') || q.question.toLowerCase().includes('alergen') || q.question.toLowerCase().includes('allergen')) {
            continue;
          }

          // Build a 3rd distractor if only 2 exist in base data to ensure 4 total choices
          const distractors3: [string, string, string] = [
            q.distractors[0],
            q.distractors[1],
            q.distractors[0] === '100g' ? '150g' : 'Naše doporučení'
          ];

          pool.push({
            id: q.id,
            question: q.question,
            correctAnswer: q.correctAnswer,
            distractors: distractors3,
            itemName: item.name,
            categoryName: cat.name,
          });
        }
      }
    }

    // Shuffle and pick 100 questions
    const shuffled = pool.sort(() => Math.sin(pool.length * 777) - 0.5);
    return shuffled.slice(0, 100);
  }, [categories]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = examQuestions[currentIndex];

  const currentOptions = useMemo(() => {
    if (!currentQ) return [];
    const choices = [currentQ.correctAnswer, ...currentQ.distractors];
    return choices.sort(() => Math.sin(choices.length * 123 + currentIndex) - 0.5);
  }, [currentQ, currentIndex]);

  const handleSelectOption = (option: string) => {
    if (isAnswered || !currentQ) return;
    
    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = option === currentQ.correctAnswer;

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
      setIsWrong(false);
      if (onAnswerRecorded) onAnswerRecorded();

      // Automatic advance on correct answer
      setTimeout(() => {
        advanceToNext();
      }, 500);
    } else {
      setWrongCount(prev => prev + 1);
      setIsWrong(true);
      if (onAnswerRecorded) onAnswerRecorded();
      // On wrong answer, user must click the correct answer to advance
    }
  };

  const handleCorrectClickOnWrong = () => {
    if (isAnswered && isWrong) {
      advanceToNext();
    }
  };

  const advanceToNext = () => {
    if (currentIndex + 1 < examQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsWrong(false);
    } else {
      setIsFinished(true);
      if (onFinishExam) onFinishExam();
    }
  };

  if (isFinished || examQuestions.length === 0) {
    const total = correctCount + wrongCount;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    return (
      <div className="max-w-xl mx-auto bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-2xl animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center">
          <Award className="w-8 h-8" />
        </div>

        <div>
          <h2 className="text-2xl font-black text-stone-100">{isEn ? 'Exam Results' : 'Výsledky zkoušky (Mix 100)'}</h2>
          <p className="text-xs text-stone-400 mt-1">{isEn ? 'Final performance summary' : 'Souhrnné statistické výsledky'}</p>
        </div>

        {/* Statistical Summary ONLY (No text dump) */}
        <div className="grid grid-cols-2 gap-4 bg-stone-950/80 p-5 rounded-2xl border border-stone-800">
          <div>
            <p className="text-4xl font-black text-emerald-400">{percentage}%</p>
            <p className="text-xs text-stone-400 mt-1 font-semibold">{isEn ? 'Success Rate' : 'Procentuální úspěšnost'}</p>
          </div>
          <div>
            <p className="text-4xl font-black text-amber-400">{correctCount} <span className="text-stone-500 text-2xl">vs</span> {wrongCount}</p>
            <p className="text-xs text-stone-400 mt-1 font-semibold">{isEn ? 'Correct vs Wrong' : 'Správné vs Špatné'}</p>
          </div>
        </div>

        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={onExit}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
          >
            <span>{isEn ? 'Back to Training' : 'Zpět do tréninku'}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Exam Header */}
      <div className="flex items-center justify-between bg-stone-900/80 p-4 rounded-2xl border border-stone-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider">{currentQ.categoryName}</span>
            <h3 className="text-base font-bold text-stone-100">{isEn ? 'Exam (Mix 100)' : 'Zkouška (Mix 100)'}</h3>
          </div>
        </div>

        <div className="text-xs font-bold text-stone-400 bg-stone-950 px-3.5 py-1.5 rounded-xl border border-stone-800">
          {currentIndex + 1} / 100
        </div>
      </div>

      {/* Concise Rules Tooltip Bubble on First Question */}
      {currentIndex === 0 && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-xs text-amber-300 leading-relaxed flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">{isEn ? 'Exam Rules:' : 'Pravidla zkoušky (Mix 100):'}</p>
            <ul className="list-disc list-inside space-y-0.5 text-stone-300">
              <li>{isEn ? 'Correct answer turns green and advances automatically.' : 'Správná odpověď se zbarví zeleně a posune vás automaticky.'}</li>
              <li>{isEn ? 'If wrong, the correct answer is shown; click it to proceed.' : 'Při chybě se zobrazí správná odpověď; po kliknutí na ni pokračujete.'}</li>
              <li>{isEn ? 'Final summary will present percentage and correct vs wrong stats.' : 'Na konci bude zobrazen souhrn statistiky (% a správně vs chyby).'}</li>
            </ul>
          </div>
        </div>
      )}

      {/* Question Card */}
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-stone-400">{currentQ.itemName}</span>
          <h2 className="text-lg sm:text-xl font-bold text-stone-100 leading-snug">
            {currentQ.question}
          </h2>
        </div>

        {/* 4 Choices */}
        <div className="grid grid-cols-1 gap-3">
          {currentOptions.map((opt, idx) => {
            let btnStyle = "bg-stone-950 border-stone-800 hover:border-amber-500/50 text-stone-200";

            if (isAnswered) {
              if (opt === currentQ.correctAnswer) {
                btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold shadow-lg shadow-emerald-950/40";
              } else if (opt === selectedOption) {
                btnStyle = "bg-rose-500/20 border-rose-500 text-rose-300";
              } else {
                btnStyle = "bg-stone-950/40 border-stone-800/40 text-stone-600 opacity-50";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => {
                  if (!isAnswered) {
                    handleSelectOption(opt);
                  } else if (isWrong && opt === currentQ.correctAnswer) {
                    handleCorrectClickOnWrong();
                  }
                }}
                className={`p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
              >
                <span>{opt}</span>
                {isAnswered && opt === currentQ.correctAnswer && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                )}
                {isAnswered && opt === selectedOption && opt !== currentQ.correctAnswer && (
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Hint if wrong */}
        {isWrong && (
          <p className="text-xs text-amber-400 font-semibold text-center animate-pulse">
            {isEn ? 'Click the correct green answer to proceed.' : 'Klikněte na označenou zelenou odpověď pro posun na další otázku.'}
          </p>
        )}

        {/* End Test Button */}
        <div className="pt-4 border-t border-stone-800 flex justify-center">
          <button
            onClick={() => setIsFinished(true)}
            className="px-4 py-2 rounded-xl bg-stone-800/80 hover:bg-rose-900/40 border border-stone-700/60 hover:border-rose-500/50 text-stone-400 hover:text-rose-300 text-xs font-bold flex items-center gap-2 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{isEn ? 'End test & view results' : 'Ukončit test a zobrazit výsledky'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
