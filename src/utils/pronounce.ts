const JAPANESE_LANG = 'ja-JP';
const PREFERRED_JAPANESE_VOICES = [
  'Kyoko',
  'Google 日本語',
  'Microsoft Haruka Desktop',
  'Microsoft Haruka',
  'Otona',
  'Takumi',
  'Ichiro',
  'Aoi',
  'Mei'
].map((voice) => voice.toLowerCase());

const getJapaneseVoice = (): SpeechSynthesisVoice | undefined => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return undefined;
  }

  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) {
    return undefined;
  }

  const japaneseVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith('ja'));
  const voiceCandidates = japaneseVoices.length > 0 ? japaneseVoices : voices;

  for (const preferred of PREFERRED_JAPANESE_VOICES) {
    const matchingVoice = voiceCandidates.find(
      (voice) =>
        voice.name.toLowerCase().includes(preferred) ||
        voice.voiceURI.toLowerCase().includes(preferred)
    );
    if (matchingVoice) {
      return matchingVoice;
    }
  }

  return voiceCandidates[0];
};

export const read = (text: string, phoneticText?: string, lang = JAPANESE_LANG): void => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('SpeechSynthesis API is not available in this environment.');
    return;
  }

  const utteranceText = phoneticText?.trim() ? phoneticText : text;
  const utterance = new SpeechSynthesisUtterance(utteranceText);
  utterance.lang = lang;
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;

  const voice = getJapaneseVoice();
  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};
