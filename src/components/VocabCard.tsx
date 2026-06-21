import type { VocabItem } from '../types';
import { read } from '../utils/pronounce';

interface VocabCardProps {
  item: VocabItem;
  categoryLabel: string;
}

export function VocabCard({ item, categoryLabel }: VocabCardProps) {
  return (
    <article className={[`card`, `cat-${item.cat}`].join(' ')}>
      <div className="card-jp">
        <span>{item.jp}</span>
        <span className="card-speaker" onClick={() => read(item.jp)}>
          📢
        </span>
      </div>
      <div className="card-furigana">{item.furi}</div>
      <div className="card-reading">{item.rom}</div>
      <div className="card-th">{item.th}</div>
      <span className="card-cat">{categoryLabel}</span>
    </article>
  );
}
