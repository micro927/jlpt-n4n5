import type { StudyItem, Tab } from '../types';
import { VocabCard } from './VocabCard';
import { KanjiCard } from './KanjiCard';
import { GrammarCard } from './GrammarCard';
import { OverallCard } from './OverallCard';
import { useEffect } from 'react';

interface StudyGridProps {
  items: StudyItem[];
  tab: Tab;
  categoryLabels: Record<string, string>;
}

export function StudyGrid({ items, tab, categoryLabels }: StudyGridProps) {
  useEffect(() => {
    return () => window.scrollTo(0, 0);
  }, [items]);

  if (items.length === 0) {
    return <div className="empty-state">ไม่พบรายการที่ค้นหา</div>;
  }

  return (
    <div className="grid-container">
      <div className={['grid', tab === 'overall' ? 'overall-grid' : ''].join(' ')}>
        {items.map((item, index) => {
          const itemKey = `${tab}-${'jp' in item ? item.jp : 'overall'}-${index}`;

          if (tab === 'kanji' && 'on' in item) {
            return <KanjiCard key={itemKey} item={item} categoryLabel={categoryLabels[item.cat]} />;
          }

          if (tab === 'vocab' && 'rom' in item) {
            return <VocabCard key={itemKey} item={item} categoryLabel={categoryLabels[item.cat]} />;
          }

          if (tab === 'grammar' && 'explain' in item) {
            return (
              <GrammarCard key={itemKey} item={item} categoryLabel={categoryLabels[item.cat]} />
            );
          }

          if (tab === 'overall' && 'title' in item) {
            return <OverallCard key={itemKey} item={item} />;
          }

          return null;
        })}
      </div>
    </div>
  );
}
