export const getSommelierAudioTrack = (trackId: string): string | null => {
  return localStorage.getItem(`fuze_audio_track_${trackId}`);
};

export const saveSommelierAudioTrack = (trackId: string, dataUrl: string): void => {
  try {
    localStorage.setItem(`fuze_audio_track_${trackId}`, dataUrl);
  } catch (e) {
    console.error('Failed to store audio track', e);
  }
};

export const removeSommelierAudioTrack = (trackId: string): void => {
  localStorage.removeItem(`fuze_audio_track_${trackId}`);
};
