import type { Category } from '../types'
import { SearchInput } from './SearchInput'
import { FilterGroup } from './FilterGroup'

interface StudyControlsProps {
  query: string
  activeFilters: Category[]
  categories: Category[]
  categoryLabels: Record<string, string>
  onQueryChange: (value: string) => void
  onToggleFilter: (category: Category) => void
  countLabel: string
}

export function StudyControls({
  query,
  activeFilters,
  categories,
  categoryLabels,
  onQueryChange,
  onToggleFilter,
  countLabel,
}: StudyControlsProps) {
  return (
    <div className="controls">
      <SearchInput value={query} onChange={onQueryChange} />
      <FilterGroup
        categories={categories}
        categoryLabels={categoryLabels}
        activeFilters={activeFilters}
        onToggle={onToggleFilter}
      />
      <span className="count-label">{countLabel}</span>
    </div>
  )
}
