import { useMemo } from 'react'
import type { StudyItem, Category } from '../types'
import { matchesSearch } from '../utils/search'

export function useFilteredItems(
  items: StudyItem[],
  query: string,
  activeFilters: Category[],
) {
  return useMemo(
    () => {
      const normalizedQuery = query.trim()
      return items.filter((item) => {
        const matchesQuery = matchesSearch(item, normalizedQuery)
        const matchesFilter = activeFilters.length === 0 || activeFilters.includes(item.cat)
        return matchesQuery && matchesFilter
      })
    },
    [items, query, activeFilters],
  )
}
