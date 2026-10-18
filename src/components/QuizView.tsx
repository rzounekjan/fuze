import React, { useState, useMemo, useCallback } from 'react';
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw, ChevronRight, HelpCircle, Award, Sparkles, LogOut } from 'lucide-react';
import { MenuCategory, MenuItem, Question } from '../data/menuData';

interface QuizViewProps {
  category: MenuCategory;
  item: MenuItem;
  onBackToItems: () => void;
  onBackToMainMenu: () => void;
  onNextItem?: () => void;
  hasNextItem?: boolean;
  onAnswerRecorded?: () => void;
  language?: 'cs' | 'en';
}

export const QuizView: React.FC<QuizViewProps> = ({
  category,
  item,
  onBackToItems,
  onBackToMainMenu,
  onNextItem,
  hasNextItem,
  onAnswerRecorded,
  language = 'cs',
}) => {
  const isEn = language === 'en';
  const questions = item.questions || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ: Question | undefined = questions[currentIndex];

  const shuffledOptions = useMemo(() => {
    if (!currentQ) return [];
    const opts = [currentQ.correctAnswer, ...currentQ.distractors];
    return opts.sort(() => Math.sin(opts.length * 999 + currentIndex) - 0.5);
  }, [currentQ, currentIndex]);

  const handleSelect = (option: string) => {
    if (isAnswered || !currentQ) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const correct = option === currentQ.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setCorrectCount(prev => prev + 1);
    } else {
      setWrongCount(prev => prev + 1);
    }

    if (onAnswerRecorded) onAnswerRecorded();
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setCorrectCount(0);
    setWrongCount(0);
    setIsFinished(false);
  };

  if (isFinished || questions.length === 0) {
    const total = correctCount + wrongCount;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    return (
      <div className="max-w-2xl mx-auto bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-2xl animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center">
          <Award className="w-8 h-8" />
        </div>

        <div>
          <h2 className="text-2xl font-black text-stone-100">{item.name}</h2>
          <p className="text-xs text-stone-400 mt-1">{isEn ? 'Quiz summary' : 'Souhrn výsledků kvízu'}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
          <div>
            <p className="text-3xl font-black text-emerald-400">{percentage}%</p>
            <p className="text-xs text-stone-400 mt-1">{isEn ? 'Success Rate' : 'Úspěšnost'}</p>
          </div>
          <div>
            <p className="text-3xl font-black text-amber-400">{correctCount} / {total}</p>
            <p className="text-xs text-stone-400 mt-1">{isEn ? 'Correct answers' : 'Správné odpovědi'}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={handleRestart}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{isEn ? 'Repeat Quiz' : 'Opakovat kvíz'}</span>
          </button>
          
          <button
            onClick={onBackToItems}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-amber-500/20"
          >
            <ChevronRight className="w-4 h-4" />
            <span>{isEn ? 'Back to Items' : 'Zpět na položky'}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Quiz Top Header */}
      <div className="flex items-center justify-between bg-stone-900/80 p-4 rounded-2xl border border-stone-800">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToItems}
            className="p-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-400 hover:text-stone-200"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider">{category.name}</span>
            <h3 className="text-base font-bold text-stone-100">{item.name}</h3>
          </div>
        </div>

        <div className="text-xs font-bold text-stone-400 bg-stone-950 px-3 py-1.5 rounded-xl border border-stone-800">
          {currentIndex + 1} / {questions.length}
        </div>
      </div>

      {/* Active Question Box */}
      {currentQ && (
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <h2 className="text-lg sm:text-xl font-bold text-stone-100 leading-snug">
            {currentQ.question}
          </h2>

          <div className="grid grid-cols-1 gap-3">
            {shuffledOptions.map((opt, idx) => {
              let btnStyle = "bg-stone-950 border-stone-800 hover:border-amber-500/50 text-stone-200";
              if (isAnswered) {
                if (opt === currentQ.correctAnswer) {
                  btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
                } else if (opt === selectedOption) {
                  btnStyle = "bg-rose-500/20 border-rose-500 text-rose-300";
                } else {
                  btnStyle = "bg-stone-950/40 border-stone-800/40 text-stone-600 opacity-60";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(opt)}
                  disabled={isAnswered}
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

          {/* Explanation Banner */}
          {isAnswered && (
            <div className={`p-4 rounded-2xl text-xs leading-relaxed border ${
              isCorrect ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
            }`}>
              <p className="font-bold mb-1">{isCorrect ? (isEn ? 'Correct!' : 'Správně!') : (isEn ? 'Incorrect answer:' : 'Špatná odpověď:')}</p>
              <p>{currentQ.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <button
              onClick={handleNext}
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
            >
              <span>{currentIndex + 1 < questions.length ? (isEn ? 'Next Question' : 'Další otázka') : (isEn ? 'View Results' : 'Zobrazit výsledky')}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

          {/* End Test Button under question */}
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
      )}
    </div>
  );
};
