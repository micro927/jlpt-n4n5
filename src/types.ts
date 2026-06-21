export type Level = 'n4' | 'n5';
export type Tab = 'vocab' | 'kanji' | 'grammar';
export type VocabCategory =
  | 'time'
  | 'daily'
  | 'work'
  | 'emotion'
  | 'transport'
  | 'body'
  | 'nature'
  | 'action'
  | 'none';
export type KanjiCategory = 'kanji';
export type GrammarCategory = 'grammar';
export type Category = VocabCategory | KanjiCategory | GrammarCategory;

export interface VocabItem {
  jp: string;
  furi: string;
  rom: string;
  th: string;
  cat: VocabCategory;
}

export interface KanjiItem {
  jp: string;
  furi: string;
  on: string;
  kun: string;
  th: string;
  ex: string;
  cat: KanjiCategory;
}

export interface GrammarExample {
  jp: string;
  th: string;
}

export interface GrammarItem {
  jp: string;
  furi: string;
  th: string;
  explain?: string;
  ex?: GrammarExample[];
  cat: GrammarCategory;
}

export type StudyItem = VocabItem | KanjiItem | GrammarItem;
