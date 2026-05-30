export type Level = 'n4' | 'n5'
export type Tab = 'vocab' | 'kanji'
export type VocabCategory =
  | 'time'
  | 'daily'
  | 'work'
  | 'emotion'
  | 'transport'
  | 'body'
  | 'nature'
  | 'action'
export type KanjiCategory = 'kanji'
export type Category = VocabCategory | KanjiCategory

export interface VocabItem {
  jp: string
  furi: string
  rom: string
  th: string
  cat: VocabCategory
}

export interface KanjiItem {
  jp: string
  furi: string
  on: string
  kun: string
  th: string
  ex: string
  cat: KanjiCategory
}

export type StudyItem = VocabItem | KanjiItem
