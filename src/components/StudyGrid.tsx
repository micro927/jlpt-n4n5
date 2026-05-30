import type { StudyItem, Tab } from '../types'
import { VocabCard } from './VocabCard'
import { KanjiCard } from './KanjiCard'

interface StudyGridProps {
  items: StudyItem[]
  tab: Tab
  categoryLabels: Record<string, string>
}

export function StudyGrid({ items, tab, categoryLabels }: StudyGridProps) {
  if (items.length === 0) {
    return <div className="empty-state">ไม่พบรายการที่ค้นหา</div>
  }

  return (
    <div className="grid-container">
      <div className="grid">
        {items.map((item) => {
          if (tab === 'kanji' && 'on' in item) {
            return <KanjiCard key={item.jp} item={item} categoryLabel={categoryLabels[item.cat]} />
          }

          if (tab === 'vocab' && 'rom' in item) {
            return <VocabCard key={item.jp} item={item} categoryLabel={categoryLabels[item.cat]} />
          }

          return null
        })}
      </div>
    </div>
  )
}
