import type { OverallItem } from '../types';

interface OverallCardProps {
  item: OverallItem;
}

export function OverallCard({ item }: OverallCardProps) {
  return (
    <article className="overall-card">
      <div className="overall-title">{item.title}</div>
      {item.subtitle && <div className="overall-subtitle">{item.subtitle}</div>}
      {item.description && <p className="overall-description">{item.description}</p>}

      {item.list && item.list.length > 0 && (
        <ul className="overall-body">
          {item.list.map((entry) => (
            <li key={entry} className="overall-paragraph">
              {entry}
            </li>
          ))}
        </ul>
      )}

      {item.bullets && item.bullets.length > 0 && (
        <ul className="overall-bullets">
          {item.bullets.map((bullet, index) => (
            <li key={`${bullet.label ?? 'bullet'}-${index}`} className="overall-bullet">
              {bullet.label && <strong>{bullet.label}</strong>}
              <span>{bullet.value}</span>
            </li>
          ))}
        </ul>
      )}

      {item.sections && item.sections.length > 0 && (
        <div className="overall-sections">
          {item.sections.map((section) => (
            <div key={section.title} className="overall-section">
              <div className="overall-section-title">{section.title}</div>

              {section.rows && section.rows.length > 0 && (
                <div className="overall-table">
                  {section.rows.map((row) => (
                    <div key={`${section.title}-${row.label}`} className="overall-table-row">
                      <div className="overall-table-label">{row.label}</div>
                      <div className="overall-table-value">{row.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {section.bullets && section.bullets.length > 0 && (
                <ul className="overall-bullets">
                  {section.bullets.map((bullet, index) => (
                    <li
                      key={`${section.title}-${bullet.label ?? 'bullet'}-${index}`}
                      className="overall-bullet"
                    >
                      {bullet.label && <strong>{bullet.label}</strong>}
                      <span>{bullet.value}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.list && section.list.length > 0 && (
                <ul className="overall-body">
                  {section.list.map((entry) => (
                    <li key={`${section.title}-${entry}`} className="overall-paragraph">
                      {entry}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
