import type { Category } from '../types'

interface FilterGroupProps {
  categories: Category[]
  categoryLabels: Record<Category, string>
  activeFilters: Category[]
  onToggle: (category: Category) => void
}

export function FilterGroup({ categories, categoryLabels, activeFilters, onToggle }: FilterGroupProps) {
  return (
    <div className="filter-group">
      {categories.map((category) => {
        const isActive = activeFilters.includes(category)
        return (
          <button
            key={category}
            type="button"
            className={['filter-btn', isActive ? 'on' : ''].join(' ')}
            onClick={() => onToggle(category)}
          >
            {categoryLabels[category]}
          </button>
        )
      })}
    </div>
  )
}
