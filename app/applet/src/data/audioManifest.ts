export interface EmbeddedAudioTrack {
  id: string;
  title: string;
  category: string;
  url: string;
}

export const EMBEDDED_AUDIO_TRACKS: EmbeddedAudioTrack[] = [
  { id: 'predkrmy', title: 'Předkrmy a malá jídla', category: 'Předkrmy', url: '/audio/predkrmy.mp3' },
  { id: 'pivni-zmrzlina', title: 'Povní zmrzlina', category: 'Dezerty', url: '/audio/pivni-zmrzlina.mp3' },
  { id: 'sklo-charmat-palava', title: 'Pálava Charmat', category: 'Bubliny', url: '/audio/sklo-charmat-palava.mp3' },
  { id: 'bila-vina', title: 'Bílá vína přehled', category: 'Vína', url: '/audio/bila-vina.mp3' },
  { id: 'ruzove-merlot-rose-bilkovi', title: 'Merlot Rosé Bílkovi', category: 'Růžová vína', url: '/audio/ruzove-merlot-rose-bilkovi.mp3' },
  { id: 'bile-ryzlink-gotberg', title: 'Ryzlink rýnský Gotberg', category: 'Bílá vína', url: '/audio/bile-ryzlink-gotberg.mp3' },
  { id: 'cervene-cabernet-sauvignon-lapis-luna', title: 'Cabernet Sauvignon Lapis Luna', category: 'Červená vína', url: '/audio/cervene-cabernet-sauvignon-lapis-luna.mp3' },
  { id: 'bile-pinot-gris-reisten', title: 'Pinot Gris Reisten', category: 'Bílá vína', url: '/audio/bile-pinot-gris-reisten.mp3' },
  { id: 'vina-po-skle', title: 'Vína po skle', category: 'Vína', url: '/audio/vina-po-skle.mp3' },
];
