export interface UserStats {
  totalQuestionsAnswered: number;
  correctAnswers: number;
  wrongAnswers: number;
  streak: number;
  categoryStats: Record<string, { total: number; correct: number }>;
  masteredItemIds?: string[];
  masteredQuestionIds?: string[];
}

const STATS_KEY_CS = 'fuze_user_stats_cs';
const STATS_KEY_EN = 'fuze_user_stats_en';

export const getStoredStats = (lang: string = 'cs'): UserStats => {
  try {
    const key = lang === 'en' ? STATS_KEY_EN : STATS_KEY_CS;
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load stats', e);
  }
  return {
    totalQuestionsAnswered: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    streak: 0,
    categoryStats: {},
    masteredItemIds: [],
    masteredQuestionIds: [],
  };
};

export const saveStats = (stats: UserStats, lang: string = 'cs'): void => {
  try {
    const key = lang === 'en' ? STATS_KEY_EN : STATS_KEY_CS;
    localStorage.setItem(key, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save stats', e);
  }
};

export const resetStats = (lang: string = 'cs'): UserStats => {
  const initial: UserStats = {
    totalQuestionsAnswered: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    streak: 0,
    categoryStats: {},
    masteredItemIds: [],
    masteredQuestionIds: [],
  };
  saveStats(initial, lang);
  return initial;
};
