import React, { useState, useMemo, useCallback } from 'react';
import { 
  X, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  ChevronRight, 
  Brain, 
  Sparkles,
  Info,
  BookOpen,
  Wine,
  UtensilsCrossed,
  LogOut
} from 'lucide-react';
import { CulinaryTerm, BeverageItem } from '../data/libraryData';

export interface ItemQuizModalProps {
  item: CulinaryTerm | BeverageItem;
  itemType: 'culinary' | 'beverage';
  allTerms: CulinaryTerm[];
  allBeverages: BeverageItem[];
  language?: 'cs' | 'en';
  onClose: () => void;
}

export interface Question {
  id: string;
  questionText: string;
  options: string[];
  correctIndex: number;
}

// Utility function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Pick N unique items from pool excluding correct value
function getUniqueDistractors(correctValue: string, pool: string[], count = 3): string[] {
  const filtered = Array.from(new Set(pool.filter(val => val && val.trim() !== '' && val.trim() !== correctValue.trim())));
  const shuffled = shuffleArray(filtered);
  const result = shuffled.slice(0, count);
  // Fillers if pool is too small
  let fillerIdx = 1;
  while (result.length < count) {
    const filler = `Alternativní možnost ${fillerIdx++}`;
    if (!result.includes(filler) && filler !== correctValue) {
      result.push(filler);
    }
  }
  return result;
}

// Helper function to split multi-sentence or multi-clause text into concise atomic facts
function splitTextIntoAtomicParts(text: string): string[] {
  if (!text) return [];
  // Split by sentence boundaries, semicolons, bullet points, or newlines
  const rawParts = text
    .split(/(?<=[.!?])\s+|[;\n•–-]+/)
    .map(s => s.trim())
    .filter(s => s.length >= 6);
  
  if (rawParts.length === 0) return [text.trim()];
  return rawParts;
}

// Helper to split comma-separated items or tasting notes into atomic phrases
function splitByCommaOrList(text: string): string[] {
  if (!text) return [];
  const parts = text
    .split(/[,;\n•/]+/)
    .map(s => s.trim())
    .filter(s => s.length >= 3);
  return parts.length > 0 ? parts : [text.trim()];
}

export const ItemQuizModal: React.FC<ItemQuizModalProps> = ({
  item,
  itemType,
  allTerms,
  allBeverages,
  language = 'cs',
  onClose
}) => {
  const isEn = language === 'en';

  // Generate question pool for this specific item, breaking down sentences into atomic questions
  const rawQuestions = useMemo(() => {
    const qList: Question[] = [];

    if (itemType === 'culinary') {
      const term = item as CulinaryTerm;
      const otherTerms = allTerms.filter(t => t.id !== term.id);

      // Pre-extract pools for distractors
      const allShortDescPool = otherTerms.flatMap(t => splitTextIntoAtomicParts(t.shortDescription || ''));
      const allFlavorPool = otherTerms.flatMap(t => splitByCommaOrList(t.flavorProfile || ''));
      const allUsagePool = otherTerms.flatMap(t => splitTextIntoAtomicParts(t.culinaryUsage || ''));
      const allStaffTipsPool = otherTerms.flatMap(t => splitTextIntoAtomicParts(t.staffTips || ''));
      const allIngredientsPool = Array.from(new Set(otherTerms.flatMap(t => t.ingredients || [])));

      // 1. Origin
      if (term.origin) {
        const correct = term.origin;
        const distractors = getUniqueDistractors(correct, otherTerms.map(t => t.origin));
        const options = shuffleArray([correct, ...distractors]);
        qList.push({
          id: 'origin',
          questionText: isEn 
            ? `What is the origin of "${term.name}"?` 
            : `Odkud pochází kulinářský pojem nebo položka "${term.name}"?`,
          options,
          correctIndex: options.indexOf(correct)
        });
      }

      // 2. Category
      if (term.categoryName) {
        const correct = term.categoryName;
        const distractors = getUniqueDistractors(correct, otherTerms.map(t => t.categoryName));
        const options = shuffleArray([correct, ...distractors]);
        qList.push({
          id: 'category',
          questionText: isEn 
            ? `Which category does "${term.name}" belong to?` 
            : `Do jaké kategorie kulinářského lexikonu patří "${term.name}"?`,
          options,
          correctIndex: options.indexOf(correct)
        });
      }

      // 3. Short Description - Split sentences into atomic sub-questions
      if (term.shortDescription) {
        const descParts = splitTextIntoAtomicParts(term.shortDescription);
        descParts.forEach((part, idx) => {
          const distractors = getUniqueDistractors(part, allShortDescPool);
          const options = shuffleArray([part, ...distractors]);
          
          let qText = isEn
            ? `Which description best characterizes "${term.name}"?`
            : `Co nejlépe vystihuje charakteristiku a popis položky "${term.name}"?`;

          if (descParts.length > 1) {
            qText = isEn
              ? `Which characteristic applies to "${term.name}" (part ${idx + 1})?`
              : `Která z následujících částí popisu přesně vystihuje položku "${term.name}" (${idx + 1}. část)?`;
          }

          qList.push({
            id: `description_part_${idx}`,
            questionText: qText,
            options,
            correctIndex: options.indexOf(part)
          });
        });
      }

      // 4. Ingredients - Full combination AND atomic key ingredients
      if (term.ingredients && term.ingredients.length > 0) {
        // Full combination question
        const correctFull = term.ingredients.join(', ');
        const distractorsFull = getUniqueDistractors(correctFull, otherTerms.map(t => (t.ingredients || []).join(', ')));
        const optionsFull = shuffleArray([correctFull, ...distractorsFull]);
        qList.push({
          id: 'ingredients_full',
          questionText: isEn 
            ? `Which key ingredients compose "${term.name}"?` 
            : `Které ingredience a suroviny tvoří položku "${term.name}"?`,
          options: optionsFull,
          correctIndex: optionsFull.indexOf(correctFull)
        });

        // Individual ingredient sub-questions
        term.ingredients.forEach((ing, idx) => {
          const distractors = getUniqueDistractors(ing, allIngredientsPool.filter(i => !term.ingredients.includes(i)));
          const options = shuffleArray([ing, ...distractors]);
          qList.push({
            id: `ingredient_sub_${idx}`,
            questionText: isEn
              ? `Which of these ingredients is a key component of "${term.name}"?`
              : `Která z následujících surovin je klíčovou součástí položky "${term.name}"?`,
            options,
            correctIndex: options.indexOf(ing)
          });
        });
      }

      // 5. Flavor Profile - Split into atomic tasting notes
      if (term.flavorProfile) {
        const flavorParts = splitByCommaOrList(term.flavorProfile);
        flavorParts.forEach((part, idx) => {
          const distractors = getUniqueDistractors(part, allFlavorPool);
          const options = shuffleArray([part, ...distractors]);
          qList.push({
            id: `flavor_part_${idx}`,
            questionText: isEn 
              ? `Which flavor profile or note characterizes "${term.name}"?` 
              : `Který chuťový profil a tón charakterizuje položku "${term.name}"?`,
            options,
            correctIndex: options.indexOf(part)
          });
        });
      }

      // 6. Culinary Usage - Split sentences into atomic questions
      if (term.culinaryUsage) {
        const usageParts = splitTextIntoAtomicParts(term.culinaryUsage);
        usageParts.forEach((part, idx) => {
          const distractors = getUniqueDistractors(part, allUsagePool);
          const options = shuffleArray([part, ...distractors]);
          
          let qText = isEn
            ? `How is "${term.name}" prepared or used in cooking?`
            : `Jak se v gastronomické praxi používá nebo připravuje "${term.name}"?`;

          if (usageParts.length > 1) {
            qText = isEn
              ? `Which preparation method or usage detail applies to "${term.name}" (part ${idx + 1})?`
              : `Který detail přípravy nebo využití platí pro "${term.name}" (${idx + 1}. část)?`;
          }

          qList.push({
            id: `usage_part_${idx}`,
            questionText: qText,
            options,
            correctIndex: options.indexOf(part)
          });
        });
      }

      // 7. Fuze Menu Appearances
      if (term.fuzeMenuAppearances && term.fuzeMenuAppearances.length > 0) {
        const correct = term.fuzeMenuAppearances.join(' / ');
        const distractors = getUniqueDistractors(correct, otherTerms.map(t => (t.fuzeMenuAppearances || []).join(' / ')));
        const options = shuffleArray([correct, ...distractors]);
        qList.push({
          id: 'menu',
          questionText: isEn 
            ? `In which FUZE dish does "${term.name}" appear?` 
            : `Ve kterém pokrmu v menu FUZE najdeme položku "${term.name}"?`,
          options,
          correctIndex: options.indexOf(correct)
        });
      }

      // 8. Staff Tips - Split into sentence parts
      if (term.staffTips) {
        const tipParts = splitTextIntoAtomicParts(term.staffTips);
        tipParts.forEach((part, idx) => {
          const distractors = getUniqueDistractors(part, allStaffTipsPool);
          const options = shuffleArray([part, ...distractors]);
          
          let qText = isEn
            ? `What is the key staff recommendation for "${term.name}"?`
            : `Jaké doporučení nebo tip pro obsluhu platí pro položku "${term.name}"?`;

          if (tipParts.length > 1) {
            qText = isEn
              ? `What is the staff recommendation detail for "${term.name}" (part ${idx + 1})?`
              : `Jaký tip pro obsluhu platí pro "${term.name}" (${idx + 1}. část)?`;
          }

          qList.push({
            id: `staffTips_part_${idx}`,
            questionText: qText,
            options,
            correctIndex: options.indexOf(part)
          });
        });
      }
    } else {
      // Beverage item
      const bev = item as BeverageItem;
      const otherBevs = allBeverages.filter(b => b.id !== bev.id);

      // Pre-extract pools for beverage distractors
      const allProdProcessPool = otherBevs.flatMap(b => splitTextIntoAtomicParts(b.productionProcess || ''));
      const allBevFlavorPool = otherBevs.flatMap(b => splitByCommaOrList(b.flavorProfile || ''));
      const allStaffNotesPool = otherBevs.flatMap(b => splitTextIntoAtomicParts(b.staffNotes || ''));
      const allPairingsPool = otherBevs.flatMap(b => splitByCommaOrList(b.foodPairing || ''));
      const allRawIngsPool = otherBevs.flatMap(b => splitByCommaOrList(b.rawIngredients || ''));

      // 1. Producer
      if (bev.producer) {
        const correct = bev.producer;
        const distractors = getUniqueDistractors(correct, otherBevs.map(b => b.producer));
        const options = shuffleArray([correct, ...distractors]);
        qList.push({
          id: 'producer',
          questionText: isEn 
            ? `Who produces "${bev.name}"?` 
            : `Kdo je výrobcem, lihovarem nebo vinařstvím nápoje "${bev.name}"?`,
          options,
          correctIndex: options.indexOf(correct)
        });
      }

      // 2. Category
      if (bev.categoryName) {
        const correct = bev.categoryName;
        const distractors = getUniqueDistractors(correct, otherBevs.map(b => b.categoryName));
        const options = shuffleArray([correct, ...distractors]);
        qList.push({
          id: 'category',
          questionText: isEn 
            ? `Which beverage category does "${bev.name}" belong to?` 
            : `Do jaké kategorie nápojů patří "${bev.name}"?`,
          options,
          correctIndex: options.indexOf(correct)
        });
      }

      // 3. Origin & Region
      if (bev.origin) {
        const correct = bev.region ? `${bev.origin} (${bev.region})` : bev.origin;
        const distractors = getUniqueDistractors(correct, otherBevs.map(b => b.region ? `${b.origin} (${b.region})` : b.origin));
        const options = shuffleArray([correct, ...distractors]);
        qList.push({
          id: 'origin',
          questionText: isEn 
            ? `Where does "${bev.name}" originate from?` 
            : `Z jaké země nebo oblasti pochází nápoj "${bev.name}"?`,
          options,
          correctIndex: options.indexOf(correct)
        });
      }

      // 4. ABV & Volume
      if (bev.abv) {
        const correct = bev.abv;
        const distractors = getUniqueDistractors(correct, otherBevs.map(b => b.abv));
        const options = shuffleArray([correct, ...distractors]);
        qList.push({
          id: 'abv',
          questionText: isEn 
            ? `What is the alcohol content (ABV) of "${bev.name}"?` 
            : `Jaký je obsah alkoholu (ABV) u nápoje "${bev.name}"?`,
          options,
          correctIndex: options.indexOf(correct)
        });
      }

      // 5. Raw Ingredients - Split into individual varietals / raw ingredients
      if (bev.rawIngredients) {
        const ingParts = splitByCommaOrList(bev.rawIngredients);
        ingParts.forEach((part, idx) => {
          const distractors = getUniqueDistractors(part, allRawIngsPool);
          const options = shuffleArray([part, ...distractors]);
          qList.push({
            id: `rawIngredients_part_${idx}`,
            questionText: isEn 
              ? `Which raw ingredient or varietal is used to make "${bev.name}"?` 
              : `Z jaké odrůdy nebo suroviny se vyrábí nápoj "${bev.name}"?`,
            options,
            correctIndex: options.indexOf(part)
          });
        });
      }

      // 6. Production Process - Split sentences into atomic steps
      if (bev.productionProcess) {
        const prodParts = splitTextIntoAtomicParts(bev.productionProcess);
        prodParts.forEach((part, idx) => {
          const distractors = getUniqueDistractors(part, allProdProcessPool);
          const options = shuffleArray([part, ...distractors]);

          let qText = isEn
            ? `How is "${bev.name}" produced and aged?`
            : `Jak probíhá výroba a zrání nápoje "${bev.name}"?`;

          if (prodParts.length > 1) {
            qText = isEn
              ? `Which production or aging detail applies to "${bev.name}" (part ${idx + 1})?`
              : `Který detail výroby nebo zrání vystihuje nápoj "${bev.name}" (${idx + 1}. část)?`;
          }

          qList.push({
            id: `production_part_${idx}`,
            questionText: qText,
            options,
            correctIndex: options.indexOf(part)
          });
        });
      }

      // 7. Flavor Profile - Split into atomic tasting notes
      if (bev.flavorProfile) {
        const flavorParts = splitByCommaOrList(bev.flavorProfile);
        flavorParts.forEach((part, idx) => {
          const distractors = getUniqueDistractors(part, allBevFlavorPool);
          const options = shuffleArray([part, ...distractors]);
          qList.push({
            id: `flavor_part_${idx}`,
            questionText: isEn 
              ? `Which tasting note or flavor profile characterizes "${bev.name}"?` 
              : `Jaké aroma nebo chuťový tón charakterizuje nápoj "${bev.name}"?`,
            options,
            correctIndex: options.indexOf(part)
          });
        });
      }

      // 8. Food Pairing - Split into pairings
      if (bev.foodPairing) {
        const pairingParts = splitByCommaOrList(bev.foodPairing);
        pairingParts.forEach((part, idx) => {
          const distractors = getUniqueDistractors(part, allPairingsPool);
          const options = shuffleArray([part, ...distractors]);
          qList.push({
            id: `pairing_part_${idx}`,
            questionText: isEn 
              ? `Which FUZE dish is recommended to pair with "${bev.name}"?` 
              : `S jakým jídlem z menu FUZE se doporučuje párovat nápoj "${bev.name}"?`,
            options,
            correctIndex: options.indexOf(part)
          });
        });
      }

      // 9. Staff Notes - Split into sentence parts
      if (bev.staffNotes) {
        const noteParts = splitTextIntoAtomicParts(bev.staffNotes);
        noteParts.forEach((part, idx) => {
          const distractors = getUniqueDistractors(part, allStaffNotesPool);
          const options = shuffleArray([part, ...distractors]);

          let qText = isEn
            ? `What is the key staff story or service note for "${bev.name}"?`
            : `Co je klíčovým příběhem nebo tipem pro obsluhu u nápoje "${bev.name}"?`;

          if (noteParts.length > 1) {
            qText = isEn
              ? `What is the service tip detail for "${bev.name}" (part ${idx + 1})?`
              : `Jaký detail z tipů pro obsluhu platí pro "${bev.name}" (${idx + 1}. část)?`;
          }

          qList.push({
            id: `staffNotes_part_${idx}`,
            questionText: qText,
            options,
            correctIndex: options.indexOf(part)
          });
        });
      }

      // 10. Price
      if (bev.price) {
        const correct = bev.price;
        const distractors = getUniqueDistractors(correct, otherBevs.map(b => b.price));
        const options = shuffleArray([correct, ...distractors]);
        qList.push({
          id: 'price',
          questionText: isEn 
            ? `What is the price of "${bev.name}" on the FUZE menu?` 
            : `Jaká je cena nápoje "${bev.name}" v menu FUZE?`,
          options,
          correctIndex: options.indexOf(correct)
        });
      }
    }

    return shuffleArray(qList);
  }, [item, itemType, allTerms, allBeverages, isEn]);

  // Quiz State
  const [questionsPool, setQuestionsPool] = useState<Question[]>(rawQuestions);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionCountNum, setQuestionCountNum] = useState(1);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);
  const [canAdvance, setCanAdvance] = useState(false);

  // Statistics
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questionsPool[questionIndex % questionsPool.length];

  // Advance to next question
  const advanceToNext = useCallback(() => {
    setSelectedOption(null);
    setIsWrongAnswer(false);
    setCanAdvance(false);

    setQuestionCountNum(prev => prev + 1);
    setQuestionIndex(prev => {
      const nextIdx = prev + 1;
      // If completed full loop, reshuffle pool for continuous endless practice
      if (nextIdx >= questionsPool.length) {
        setQuestionsPool(shuffleArray(rawQuestions));
        return 0;
      }
      return nextIdx;
    });
  }, [questionsPool.length, rawQuestions]);

  // Handle Option Click
  const handleOptionClick = (index: number) => {
    if (!currentQuestion) return;

    // If user previously selected a wrong answer and is now clicking the correct answer to advance
    if (isWrongAnswer && canAdvance) {
      if (index === currentQuestion.correctIndex) {
        advanceToNext();
      }
      return;
    }

    // First time clicking an answer for this question
    if (selectedOption !== null) return; // already answered

    setSelectedOption(index);

    if (index === currentQuestion.correctIndex) {
      // Correct answer
      setCorrectCount(prev => prev + 1);
      setTotalAnswered(prev => prev + 1);
      // Auto-advance after brief pause
      setTimeout(() => {
        advanceToNext();
      }, 650);
    } else {
      // Wrong answer
      setWrongCount(prev => prev + 1);
      setTotalAnswered(prev => prev + 1);
      setIsWrongAnswer(true);
      setCanAdvance(true);
    }
  };

  // Restart Quiz
  const handleRestart = () => {
    setQuestionsPool(shuffleArray(rawQuestions));
    setQuestionIndex(0);
    setQuestionCountNum(1);
    setSelectedOption(null);
    setIsWrongAnswer(false);
    setCanAdvance(false);
    setCorrectCount(0);
    setWrongCount(0);
    setTotalAnswered(0);
    setIsFinished(false);
  };

  const percentageScore = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-stone-900 border border-amber-500/30 p-5 sm:p-7 shadow-2xl space-y-5 text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-800/80 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                <span>{item.categoryName}</span>
                <span>·</span>
                <span>{isEn ? 'Item Mastery Quiz' : 'Testování znalosti položky'}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-100 truncate">
                {item.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-800 text-stone-400 hover:text-stone-100 hover:bg-stone-700 transition-colors"
              title={isEn ? 'Close' : 'Zavřít'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* SUMMARY & STATISTICS SCREEN */}
        {isFinished ? (
          <div className="space-y-6 py-2 animate-in zoom-in-95 duration-200">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-1">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-stone-100 tracking-tight">
                {isEn ? 'Quiz Summary' : 'Souhrn statistiky testu'}
              </h4>
              <p className="text-xs text-stone-400 max-w-md mx-auto">
                {isEn 
                  ? `Completed test session for item: ${item.name}` 
                  : `Ukončili jste testování položky: ${item.name}`}
              </p>
            </div>

            {/* Score Ring / Percentage Display */}
            <div className="p-6 rounded-2xl bg-stone-950/70 border border-stone-800 text-center space-y-2">
              <div className="text-5xl font-black text-amber-400 tracking-tight font-mono">
                {percentageScore} <span className="text-2xl">%</span>
              </div>
              <div className="text-xs font-semibold text-stone-300 uppercase tracking-wider">
                {percentageScore >= 90
                  ? (isEn ? 'Outstanding Mastery!' : 'Špičková znalost!')
                  : percentageScore >= 75
                  ? (isEn ? 'Great job!' : 'Výborný výsledek!')
                  : percentageScore >= 50
                  ? (isEn ? 'Good effort, keep practicing!' : 'Dobrá práce, pokračuj v procvičování!')
                  : (isEn ? 'Keep learning this item!' : 'Doporučujeme si položku znovu prostudovat!')}
              </div>
            </div>

            {/* Numbers breakdown: Correct vs Wrong */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 block mb-0.5">
                  {isEn ? 'Correct' : 'Správně'}
                </span>
                <span className="text-2xl font-black text-emerald-300 font-mono">{correctCount}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-400 block mb-0.5">
                  {isEn ? 'Errors' : 'Chyby'}
                </span>
                <span className="text-2xl font-black text-rose-300 font-mono">{wrongCount}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-800/60 border border-stone-800">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-0.5">
                  {isEn ? 'Total' : 'Celkem'}
                </span>
                <span className="text-2xl font-black text-stone-200 font-mono">{totalAnswered}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-stone-800/80">
              <button
                type="button"
                onClick={handleRestart}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{isEn ? 'Restart Practice' : 'Znovu procvičit'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs transition-colors"
              >
                {isEn ? 'Back to Library' : 'Ukončit a zavřít'}
              </button>
            </div>
          </div>
        ) : (
          /* ACTIVE QUIZ QUESTION SCREEN */
          <div className="space-y-4">
            {/* Instruction Bubble (bullet point format) on First Question */}
            {questionCountNum === 1 && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 leading-relaxed space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-amber-300 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{isEn ? 'How to answer:' : 'Pravidla testu:'}</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-stone-300">
                  <li>{isEn ? 'Selecting the correct answer highlights green and advances.' : 'Správná odpověď se zbarví zeleně a automaticky vás posune dále.'}</li>
                  <li>{isEn ? 'If wrong, the correct answer is displayed. Click it to continue.' : 'Pokud odpovíte špatně, správná odpověď se zobrazí zeleně — po kliknutí na ni pokračujete na další otázku.'}</li>
                  <li>{isEn ? 'Questions loop continuously until you click "End Test".' : 'Otázky se neustále opakují, dokud nestisknete tlačítko "Ukončit test".'}</li>
                </ul>
              </div>
            )}

            {/* Question Counter & Score Bar */}
            <div className="flex items-center justify-between text-xs font-medium text-stone-400 bg-stone-950/60 p-2.5 rounded-xl border border-stone-800">
              <span className="font-bold text-amber-400 font-mono">
                {isEn ? `Question #${questionCountNum}` : `Otázka č. ${questionCountNum}`}
              </span>
              <div className="flex items-center gap-3 font-mono">
                <span className="text-emerald-400 font-bold">✓ {correctCount}</span>
                <span className="text-rose-400 font-bold">✗ {wrongCount}</span>
              </div>
            </div>

            {/* Question Text Box */}
            <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800 min-h-[80px] flex items-center">
              <h4 className="text-base sm:text-lg font-bold text-stone-100 leading-snug">
                {currentQuestion?.questionText}
              </h4>
            </div>

            {/* Feedback alert banner if user picked wrong option */}
            {isWrongAnswer && (
              <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-xs text-rose-200 flex items-center gap-2 animate-in fade-in duration-150">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>
                  {isEn 
                    ? 'Incorrect answer. The correct answer is highlighted in green — click it to move to the next question.' 
                    : 'Špatná odpověď. Správná odpověď je vyznačena zeleně — klikněte na ni pro posun na další otázku.'}
                </span>
              </div>
            )}

            {/* 4 Options Grid */}
            <div className="grid grid-cols-1 gap-2.5 pt-1">
              {currentQuestion?.options.map((optionText, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQuestion.correctIndex;

                let btnStyle = 'bg-stone-900 border-stone-800 text-stone-200 hover:border-amber-500/50 hover:bg-stone-800/80';
                
                if (selectedOption !== null) {
                  if (isCorrect) {
                    // Correct answer turns green
                    btnStyle = 'bg-emerald-600 border-emerald-400 text-white font-bold ring-2 ring-emerald-500/50 shadow-lg shadow-emerald-950/50';
                  } else if (isSelected && !isCorrect) {
                    // Selected wrong answer turns red
                    btnStyle = 'bg-rose-600 border-rose-400 text-white font-bold';
                  } else {
                    // Other unselected options fade out
                    btnStyle = 'bg-stone-900/50 border-stone-800/50 text-stone-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleOptionClick(idx)}
                    disabled={selectedOption !== null && !isWrongAnswer}
                    className={`w-full p-3.5 sm:p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 ${btnStyle}`}
                  >
                    <span className={`w-6 h-6 rounded-lg font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                      isCorrect && selectedOption !== null
                        ? 'bg-emerald-700 text-white'
                        : isSelected && !isCorrect
                        ? 'bg-rose-700 text-white'
                        : 'bg-stone-800 text-stone-400'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 leading-snug">{optionText}</span>
                    {selectedOption !== null && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5 animate-bounce" />
                    )}
                    {selectedOption !== null && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* END TEST BUTTON BELOW QUESTIONS */}
            <div className="pt-4 flex justify-center border-t border-stone-800/80 mt-2">
              <button
                type="button"
                onClick={() => setIsFinished(true)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 hover:text-rose-200 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-rose-950/40 active:scale-95"
              >
                <LogOut className="w-4 h-4 text-rose-400" />
                <span>{isEn ? 'End Test & View Results' : 'Ukončit test a zobrazit výsledky'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
