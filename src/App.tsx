import { useMemo, useState } from 'react'
import { StudyHeader } from './components/StudyHeader'
import { StudyControls } from './components/StudyControls'
import { StudyGrid } from './components/StudyGrid'
import { useFilteredItems } from './hooks/useFilteredItems'
import { defaultLevel, defaultTab, getCategoryLabels, levelLabels, tabLabels } from './constants'
import { getStudyData } from './data'
import type { Category, Level, Tab } from './types'
import './App.css'

function App() {
  const [level, setLevel] = useState<Level>(defaultLevel)
  const [tab, setTab] = useState<Tab>(defaultTab)
  const [query, setQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState<Category[]>([])

  const studyData = useMemo(() => getStudyData(level, tab), [level, tab])
  const categoryLabels = useMemo(() => getCategoryLabels(level, tab), [level, tab])
  const categories = useMemo(() => Object.keys(categoryLabels) as Category[], [categoryLabels])
  const filteredItems = useFilteredItems(studyData, query, activeFilters)

  const handleLevelChange = (nextLevel: Level) => {
    setLevel(nextLevel)
    // setTab('vocab')
    setActiveFilters([])
    // setQuery('')
  }

  const handleTabChange = (nextTab: Tab) => {
    setTab(nextTab)
    setActiveFilters([])
    // setQuery('')
  }

  const handleToggleFilter = (category: Category) => {
    setActiveFilters((current) =>
      current.includes(category)
        ? current.filter((active) => active !== category)
        : [...current, category],
    )
  }

  return (
    <div className="app-shell">
      <StudyHeader
        level={level}
        tab={tab}
        onLevelChange={handleLevelChange}
        onTabChange={handleTabChange}
        levelLabels={levelLabels}
        tabLabels={tabLabels}
      />

      <StudyControls
        query={query}
        activeFilters={activeFilters}
        categories={categories}
        categoryLabels={categoryLabels}
        onQueryChange={setQuery}
        onToggleFilter={handleToggleFilter}
        countLabel={`${filteredItems.length} รายการ`}
      />

      <main className="main-content">
        <StudyGrid items={filteredItems} tab={tab} categoryLabels={categoryLabels} />
      </main>
    </div>
  )
}

export default App
