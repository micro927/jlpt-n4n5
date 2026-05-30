import type { Level, Tab } from '../types'
import type { LevelLabels, TabLabels } from '../constants'

interface StudyHeaderProps {
  level: Level
  tab: Tab
  onLevelChange: (level: Level) => void
  onTabChange: (tab: Tab) => void
  levelLabels: LevelLabels
  tabLabels: TabLabels
}

export function StudyHeader({ level, tab, onLevelChange, onTabChange, levelLabels, tabLabels }: StudyHeaderProps) {
  return (
    <header className="page-header">
      <div className="header-top">
        <h1>{levelLabels[level]}</h1>
        <span className="badge">{level.toUpperCase()}</span>
      </div>

      <div className="level-selector">
        {(['n4', 'n5'] as Level[]).map((option) => (
          <button
            key={option}
            type="button"
            className={[
              'level-btn',
              option === level ? `active-${option}` : '',
            ].join(' ')}
            onClick={() => onLevelChange(option)}
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="tabs">
        {(['vocab', 'kanji'] as Tab[]).map((option) => (
          <button
            key={option}
            type="button"
            className={['tab', option === tab ? 'active' : ''].join(' ')}
            onClick={() => onTabChange(option)}
          >
            {tabLabels[option]}
          </button>
        ))}
      </div>
    </header>
  )
}
