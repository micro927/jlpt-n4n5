import type { VocabItem } from '../types'

interface VocabCardProps {
  item: VocabItem
  categoryLabel: string
}

export function VocabCard({ item, categoryLabel }: VocabCardProps) {
  return (
    <article className={[`card`, `cat-${item.cat}`].join(' ')}>
      <div className="card-jp">{item.jp}</div>
      <div className="card-furigana">{item.furi}</div>
      <div className="card-reading">{item.rom}</div>
      <div className="card-th">{item.th}</div>
      <span className="card-cat">{categoryLabel}</span>
    </article>
  )
}
