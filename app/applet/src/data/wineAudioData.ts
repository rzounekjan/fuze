export interface AudioDialogueLine {
  id: string;
  speaker: string;
  text: string;
  startTime: number;
}

export interface AudioChapter {
  id: string;
  title: string;
  startTime: number;
  endTime: number;
}

export const WINE_AUDIO_CHAPTERS: AudioChapter[] = [
  { id: 'ch1', title: 'Úvod a koncepce vinařského lístku FUZE', startTime: 0, endTime: 120 },
  { id: 'ch2', title: 'Bílá vína - Morava a Rakousko', startTime: 120, endTime: 300 },
  { id: 'ch3', title: 'Červená vína a párování k masům', startTime: 300, endTime: 480 },
];

export const WINE_AUDIO_TRANSCRIPT: AudioDialogueLine[] = [
  { id: 'l1', speaker: 'Sommelier', text: 'Vítejte u zvukového průvodce nápojovou kartou FUZE.', startTime: 0 },
  { id: 'l2', speaker: 'Gastro Specialist', text: 'Dnes si probereme profilaci našich vín po skle i na lahve.', startTime: 10 },
];
