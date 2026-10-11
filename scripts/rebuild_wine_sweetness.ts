import fs from 'fs';

console.log('Rebuilding wine sweetness with clean JSON parse & stringify...');

interface WineSweetnessConfig {
  sweetnessCz: string;
  sweetnessEn: string;
  distractorsCz: [string, string];
  distractorsEn: [string, string];
}

const WINE_SWEETNESS_MAP: Record<string, WineSweetnessConfig> = {
  // Vína po skle
  'sklo-charmat-palava': {
    sweetnessCz: 'extra sec',
    sweetnessEn: 'extra sec',
    distractorsCz: ['brut', 'demi-sec'],
    distractorsEn: ['brut', 'demi-sec']
  },
  'sklo-cremant-vinselekt': {
    sweetnessCz: 'extra brut',
    sweetnessEn: 'extra brut',
    distractorsCz: ['extra sec', 'sec'],
    distractorsEn: ['extra sec', 'sec']
  },
  'sklo-rulandske-sede': {
    sweetnessCz: 'polosuché',
    sweetnessEn: 'polosuché (medium dry)',
    distractorsCz: ['suché', 'sladké'],
    distractorsEn: ['dry', 'sweet']
  },
  'sklo-cuvee-bile': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'sklo-gruner-veltliner': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'polosladké'],
    distractorsEn: ['medium dry', 'medium sweet']
  },
  'sklo-chardonnay': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'sklo-modry-portugal-rose': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'sklo-modry-portugal': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'sklo-cuvee-cervene': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'sklo-pinot-noir': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },

  // Bubliny
  'bubliny-charmat-palava': {
    sweetnessCz: 'extra sec',
    sweetnessEn: 'extra sec',
    distractorsCz: ['brut', 'demi-sec'],
    distractorsEn: ['brut', 'demi-sec']
  },
  'bubliny-cremant-vinselekt': {
    sweetnessCz: 'extra brut',
    sweetnessEn: 'extra brut',
    distractorsCz: ['extra sec', 'sec'],
    distractorsEn: ['extra sec', 'sec']
  },
  'bubliny-angels-cowboys': {
    sweetnessCz: 'brut',
    sweetnessEn: 'brut',
    distractorsCz: ['extra brut', 'demi-sec'],
    distractorsEn: ['extra brut', 'demi-sec']
  },

  // Bílá vína
  'bile-ryzlink-gotberg': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'bile-pinot-gris-reisten': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'bile-hibernal-bilkovi': {
    sweetnessCz: 'polosuché',
    sweetnessEn: 'polosuché (medium dry)',
    distractorsCz: ['suché', 'sladké'],
    distractorsEn: ['dry', 'sweet']
  },
  'bile-sauvignon-halkoci': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'bile-ryzlink-vlassky-sukal': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'bile-palava-michlovsky': {
    sweetnessCz: 'polosuché',
    sweetnessEn: 'polosuché (medium dry)',
    distractorsCz: ['suché', 'sladké'],
    distractorsEn: ['dry', 'sweet']
  },
  'bile-poysdorfer-saurussel': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'bile-gruner-satzen-schwarzbock': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'bile-riesling-eva-fricke': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (trocken / dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'bile-riesling-gunderloch-red-stone': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (trocken / dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'bile-riesling-fritz-haag': {
    sweetnessCz: 'polosuché',
    sweetnessEn: 'polosuché (feinherb / medium dry)',
    distractorsCz: ['suché', 'sladké'],
    distractorsEn: ['dry', 'sweet']
  },
  'bile-weisser-burgunder-philipp-kuhn': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (trocken / dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'bile-sauvignon-lapis-luna': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'bile-chardonnay-knotty-vines': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },

  // Růžová vína
  'ruzove-merlot-rose-bilkovi': {
    sweetnessCz: 'polosuché',
    sweetnessEn: 'polosuché (medium dry)',
    distractorsCz: ['suché', 'sladké'],
    distractorsEn: ['dry', 'sweet']
  },

  // Červená vína
  'cervene-pinot-noir-kraus': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'cervene-dornfelder-bilkovi': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'cervene-cuvee-red-kolby': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'cervene-nina-cuvee-bilkovi': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'cervene-zweigelt-feiler-artinger': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'cervene-pinot-noir-kuhn': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'cervene-cabernet-sauvignon-lapis-luna': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  },
  'cervene-zinfandel-hendry-ranch': {
    sweetnessCz: 'suché',
    sweetnessEn: 'suché (dry)',
    distractorsCz: ['polosuché', 'sladké'],
    distractorsEn: ['medium dry', 'sweet']
  }
};

// ==========================================
// 1. CLEAN & REBUILD src/data/menuData.ts
// ==========================================
let md = fs.readFileSync('src/data/menuData.ts', 'utf8');

// Strip out the broken inserted objects inside distractors
md = md.replace(/,\s*\{\s*"id":\s*"[^"]+-sweetness"[^}]+\}[^}]+\}/g, '');

const markerCz = 'export const MENU_CATEGORIES: MenuCategory[] = ';
const startCz = md.indexOf(markerCz) + markerCz.length;
const endCz = md.lastIndexOf('];') + 1;
const jsonStrCz = md.slice(startCz, endCz);

const categoriesCz = JSON.parse(jsonStrCz);

for (const cat of categoriesCz) {
  for (const item of cat.items) {
    const config = WINE_SWEETNESS_MAP[item.id];
    if (config) {
      item.sweetness = config.sweetnessCz;
      if (!item.description.toLowerCase().includes(config.sweetnessCz.toLowerCase())) {
        item.description = `${item.description}, ${config.sweetnessCz}`;
      }

      // Clean questions: remove any existing sweetness questions first to avoid duplicates
      item.questions = item.questions.filter((q: any) => 
        !q.id.endsWith('-sweetness') &&
        !q.question.toLowerCase().includes('cukernatosti')
      );

      // Check if an existing question already tests sweetness
      const alreadyHasSweetness = item.questions.some((q: any) => 
        q.question.toLowerCase().includes('cukr') || 
        q.question.toLowerCase().includes('suchost') || 
        q.correctAnswer.toLowerCase() === config.sweetnessCz.toLowerCase()
      );

      if (!alreadyHasSweetness) {
        item.questions.push({
          id: `${item.id}-sweetness`,
          question: `Jaký je druh cukernatosti vína ${item.name}?`,
          correctAnswer: config.sweetnessCz,
          distractors: config.distractorsCz,
          explanation: `Víno ${item.name} spadá podle zbytkového cukru do kategorie ${config.sweetnessCz}.`
        });
      }
    }
  }
}

const prefixCz = md.slice(0, startCz);
const suffixCz = md.slice(endCz);
const updatedMd = prefixCz + JSON.stringify(categoriesCz, null, 2) + suffixCz;
fs.writeFileSync('src/data/menuData.ts', updatedMd, 'utf8');
console.log('src/data/menuData.ts successfully rebuilt with clean JSON!');

// ==========================================
// 2. CLEAN & REBUILD src/data/menuDataEn.ts
// ==========================================
let mdEn = fs.readFileSync('src/data/menuDataEn.ts', 'utf8');

mdEn = mdEn.replace(/,\s*\{\s*"id":\s*"[^"]+-sweetness-en"[^}]+\}[^}]+\}/g, '');

const markerEn = 'export const MENU_CATEGORIES_EN: MenuCategory[] = ';
const startEn = mdEn.indexOf(markerEn) + markerEn.length;
const endEn = mdEn.lastIndexOf('];') + 1;
const jsonStrEn = mdEn.slice(startEn, endEn);

const categoriesEn = JSON.parse(jsonStrEn);

for (const cat of categoriesEn) {
  for (const item of cat.items) {
    const config = WINE_SWEETNESS_MAP[item.id];
    if (config) {
      item.sweetness = config.sweetnessEn;
      if (!item.description.toLowerCase().includes(config.sweetnessEn.toLowerCase())) {
        item.description = `${item.description}, ${config.sweetnessEn}`;
      }

      item.questions = item.questions.filter((q: any) => 
        !q.id.endsWith('-sweetness-en') &&
        !q.question.toLowerCase().includes('sweetness classification')
      );

      const alreadyHasSweetness = item.questions.some((q: any) => 
        q.question.toLowerCase().includes('sugar') || 
        q.question.toLowerCase().includes('dryness') || 
        q.correctAnswer.toLowerCase() === config.sweetnessEn.toLowerCase()
      );

      if (!alreadyHasSweetness) {
        item.questions.push({
          id: `${item.id}-sweetness-en`,
          question: `What is the sweetness / residual sugar classification of ${item.name}?`,
          correctAnswer: config.sweetnessEn,
          distractors: config.distractorsEn,
          explanation: `${item.name} is classified in the ${config.sweetnessEn} category.`
        });
      }
    }
  }
}

const prefixEn = mdEn.slice(0, startEn);
const suffixEn = mdEn.slice(endEn);
const updatedMdEn = prefixEn + JSON.stringify(categoriesEn, null, 2) + suffixEn;
fs.writeFileSync('src/data/menuDataEn.ts', updatedMdEn, 'utf8');
console.log('src/data/menuDataEn.ts successfully rebuilt with clean JSON!');
