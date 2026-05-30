import type { GrammarItem } from '../types'

interface GrammarCardProps {
  item: GrammarItem
  categoryLabel: string
}

export function GrammarCard({ item, categoryLabel }: GrammarCardProps) {
  return (
    <article className={[`card`, `cat-grammar`].join(' ')}>
      <div className="card-jp grammar-pattern">{item.jp}</div>
      <div className="card-furigana">{item.furi}</div>
      <div className="card-th">{item.th}</div>
      {item.explain && <div className="card-explain">{item.explain}</div>}
      {item.ex && item.ex.length > 0 && (
        <div className="card-example">
          <div>例:</div>
          <ul>
            {item.ex.map((example) => (
              <li key={example.jp}>
                <div className="example-jp">{example.jp}</div>
                <div className="example-th">{example.th}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <span className="card-cat">{categoryLabel}</span>
    </article>
  )
}
