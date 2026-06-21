import type { Level, Tab, VocabCategory, KanjiCategory } from './types';

export const LEVELS = ['n4', 'n5'] as const;
export const TABS = ['vocab', 'kanji', 'grammar'] as const;

export const levelLabels: Record<Level, string> = {
  n4: 'JLPT N4',
  n5: 'JLPT N5'
};

export type LevelLabels = Record<Level, string>;
export type TabLabels = Record<Tab, string>;

export const tabLabels: Record<Tab, string> = {
  vocab: '📖 คำศัพท์',
  kanji: '🈳 คันจิ',
  grammar: '📚 ไวยากรณ์'
};

const vocabCategoryLabels: Record<VocabCategory, string> = {
  time: '⏰ เวลา/วันที่',
  daily: '🏠 ชีวิตประจำวัน',
  work: '💼 ที่ทำงาน/โรงเรียน',
  emotion: '💬 อารมณ์/ความรู้สึก',
  transport: '🚃 การเดินทาง',
  body: '🩺 ร่างกาย/สุขภาพ',
  nature: '🌿 ธรรมชาติ',
  action: '⚡ กริยาสำคัญ',
  none: '📓 คำศัพท์หลัก'
};

const kanjiCategoryLabelsN4: Record<KanjiCategory, string> = {
  kanji: '🈳 คันจิ N4'
};

const kanjiCategoryLabelsN5: Record<KanjiCategory, string> = {
  kanji: '🈳 คันจิ N5'
};

const grammarCategoryLabelsN4: Record<string, string> = {
  grammar: '📚 ไวยากรณ์ N4'
};

const grammarCategoryLabelsN5: Record<string, string> = {
  grammar: '📚 ไวยากรณ์ N5'
};

export const categoryLabels = {
  n4: {
    vocab: vocabCategoryLabels,
    kanji: kanjiCategoryLabelsN4,
    grammar: grammarCategoryLabelsN4
  },
  n5: {
    vocab: vocabCategoryLabels,
    kanji: kanjiCategoryLabelsN5,
    grammar: grammarCategoryLabelsN5
  }
} as const;

export const getCategoryLabels = (level: Level, tab: Tab) => categoryLabels[level][tab];

export const defaultLevel: Level = 'n4';
export const defaultTab: Tab = 'vocab';
