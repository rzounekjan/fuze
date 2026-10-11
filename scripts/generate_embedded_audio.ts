import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { MENU_CATEGORIES } from '../src/data/menuData';

console.log('Generating pre-recorded audio files for FUZE Gastro Akademie...');

const outDir = path.resolve('public/audio');
fs.mkdirSync(outDir, { recursive: true });

interface AudioItemToGen {
  id: string;
  name: string;
  text: string;
  categoryName?: string;
}

const itemsToGenerate: AudioItemToGen[] = [
  // Welcome & orientation
  {
    id: 'fuze-welcome',
    name: 'Úvodní slovo Fuze Gastro Akademie',
    text: 'Vítejte ve Fuze Gastro Akademii. Tréninkový portál pro personál restaurace Fuze v centru Prahy.',
    categoryName: 'Trénink Fuze'
  },
  {
    id: 'fuze-stoly-guide',
    name: 'Průvodce trenažérem stolů',
    text: 'Trenažér orientace stolů. Rychlý trénink prostorové paměti třímístných čísel stolů v restauraci Fuze.',
    categoryName: 'Trenažér stolů'
  }
];

// Add all 25 categories
for (const cat of MENU_CATEGORIES) {
  itemsToGenerate.push({
    id: cat.id,
    name: cat.name,
    text: `${cat.name}. ${cat.description || ''}`,
    categoryName: 'Kategorie menu'
  });
}

// Add all wines in vina-po-skle, bubliny, bila-vina, ruzova-vina, cervena-vina
const wineCatIds = ['vina-po-skle', 'bubliny', 'bila-vina', 'ruzova-vina', 'cervena-vina'];
for (const cid of wineCatIds) {
  const cat = MENU_CATEGORIES.find(c => c.id === cid);
  if (cat) {
    for (const it of cat.items) {
      itemsToGenerate.push({
        id: it.id,
        name: it.name,
        text: `${it.name}. ${it.description || ''}. Druh cukernatosti: ${it.sweetness || 'suché'}.`,
        categoryName: cat.name
      });
    }
  }
}

// Add signature food & drink items from predkrmy, hlavni-chody, dezerty, pivo, koktejly
const foodCatIds = ['predkrmy', 'hlavni-chody', 'dezerty', 'pivo', 'koktejly', 'nealko'];
for (const cid of foodCatIds) {
  const cat = MENU_CATEGORIES.find(c => c.id === cid);
  if (cat) {
    for (const it of cat.items) {
      itemsToGenerate.push({
        id: it.id,
        name: it.name,
        text: `${it.name}. ${it.description || ''}.`,
        categoryName: cat.name
      });
    }
  }
}

console.log(`Total audio tracks to generate: ${itemsToGenerate.length}`);

const manifest: Record<string, { id: string; name: string; audioUrl: string; text: string; categoryName: string }> = {};

for (const item of itemsToGenerate) {
  const wavPath = path.join(outDir, `${item.id}.wav`);
  const mp3Path = path.join(outDir, `${item.id}.mp3`);

  // Clean text for speech
  const cleanText = item.text
    .replace(/[•;·]/g, ', ')
    .replace(/\s*\/\s*/g, ', ')
    .replace(/["']/g, '')
    .trim();

  try {
    // Generate wav via espeak-ng and compress to clean mp3 via ffmpeg
    // -v cs+f3 for pleasant melodic Czech voice, speed 135
    execSync(`espeak-ng -v cs+f3 -s 135 -p 50 "${cleanText}" --stdout | ffmpeg -y -i - -af "volume=1.6,highpass=f=90,lowpass=f=7500" -b:a 64k "${mp3Path}" 2>/dev/null`);

    manifest[item.id] = {
      id: item.id,
      name: item.name,
      audioUrl: `/audio/${item.id}.mp3`,
      text: cleanText,
      categoryName: item.categoryName || 'FUZE'
    };
    process.stdout.write('.');
  } catch (err: any) {
    console.error(`\nFailed for ${item.id}:`, err.message);
  }
}

console.log('\nAudio generation finished!');

// Write src/data/audioManifest.ts
const manifestTs = `// Generated pre-recorded audio manifest for FUZE Gastro Akademie
// Stored in public/audio/ and available immediately on page load for all users

export interface AudioTrackInfo {
  id: string;
  name: string;
  audioUrl: string;
  text: string;
  categoryName: string;
}

export const EMBEDDED_AUDIO_TRACKS: Record<string, AudioTrackInfo> = ${JSON.stringify(manifest, null, 2)};

export const EMBEDDED_TRACK_IDS = new Set(Object.keys(EMBEDDED_AUDIO_TRACKS));
`;

fs.writeFileSync('src/data/audioManifest.ts', manifestTs, 'utf8');
console.log('src/data/audioManifest.ts generated successfully with ' + Object.keys(manifest).length + ' tracks!');
