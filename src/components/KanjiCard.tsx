import type { KanjiItem } from '../types'

interface KanjiCardProps {
  item: KanjiItem
  categoryLabel: string
}

export function KanjiCard({ item, categoryLabel }: KanjiCardProps) {
  return (
    <article className="card cat-kanji">
      <div className="card-jp kanji-symbol">{item.jp}</div>
      <div className="card-th">{item.th}</div>
      <div className="kanji-on">
        <span className="kanji-label">音</span>
        {item.on}
      </div>
      <div className="kanji-kun">
        <span className="kanji-label">訓</span>
        {item.kun}
      </div>
      <div className="kanji-example">例: {item.ex}</div>
      <span className="card-cat">{categoryLabel}</span>
    </article>
  )
}
