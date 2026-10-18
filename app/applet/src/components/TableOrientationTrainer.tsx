import React, { useState } from 'react';
import { ArrowLeft, LayoutGrid, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface TableOrientationTrainerProps {
  onBack: () => void;
  language?: 'cs' | 'en';
}

const TABLES = [
  { id: 't1', name: 'Stůl 101', section: 'Hlavní sál - Okno', seats: 4 },
  { id: 't2', name: 'Stůl 102', section: 'Hlavní sál - Střed', seats: 6 },
  { id: 't3', name: 'Stůl 201', section: 'Pivnice - Výčep', seats: 8 },
  { id: 't4', name: 'Stůl 301', section: 'Galerie', seats: 2 },
  { id: 't5', name: 'Stůl 302', section: 'VIP Salónek', seats: 10 },
];

export const TableOrientationTrainer: React.FC<TableOrientationTrainerProps> = ({
  onBack,
  language = 'cs',
}) => {
  const isEn = language === 'en';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const currentTable = TABLES[currentIndex % TABLES.length];

  const options = TABLES.map(t => t.section).filter((v, i, a) => a.indexOf(v) === i);

  const handleSelect = (section: string) => {
    setSelectedAnswer(section);
    if (section === currentTable.section) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setCurrentIndex(i => i + 1);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between bg-stone-900/80 p-4 rounded-2xl border border-stone-800">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-400 hover:text-stone-200"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h3 className="text-base font-bold text-stone-100">{isEn ? 'Table Orientation' : 'Orientace na stoly a sekce'}</h3>
            <p className="text-xs text-stone-400">{isEn ? 'Practice floor positions' : 'Trénink rozmístění stolů v restauraci'}</p>
          </div>
        </div>

        <div className="text-xs font-bold text-amber-400 bg-stone-950 px-3 py-1.5 rounded-xl border border-stone-800">
          {isEn ? 'Score:' : 'Skóre:'} {score}
        </div>
      </div>

      {/* Card */}
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 text-center shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center">
          <LayoutGrid className="w-8 h-8" />
        </div>

        <div>
          <h2 className="text-2xl font-black text-stone-100">{currentTable.name}</h2>
          <p className="text-xs text-stone-400 mt-1">Kde v restauraci FUZE se nachází tento stůl?</p>
        </div>

        <div className="grid grid-cols-1 gap-3 text-left">
          {options.map((sec, idx) => {
            let btnStyle = "bg-stone-950 border-stone-800 hover:border-amber-500/50 text-stone-200";
            if (selectedAnswer) {
              if (sec === currentTable.section) {
                btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
              } else if (sec === selectedAnswer) {
                btnStyle = "bg-rose-500/20 border-rose-500 text-rose-300";
              } else {
                btnStyle = "bg-stone-950/40 border-stone-800/40 text-stone-600 opacity-50";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => !selectedAnswer && handleSelect(sec)}
                className={`p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
              >
                <span>{sec}</span>
                {selectedAnswer && sec === currentTable.section && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                )}
              </button>
            );
          })}
        </div>

        {selectedAnswer && (
          <button
            onClick={handleNext}
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-all shadow-lg shadow-amber-500/20"
          >
            {isEn ? 'Next Table' : 'Další stůl'}
          </button>
        )}
      </div>
    </div>
  );
};
