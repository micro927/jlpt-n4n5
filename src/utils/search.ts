import type { StudyItem } from '../types'

const normalize = (value: string) => value.trim().toLocaleLowerCase()

export const matchesSearch = (item: StudyItem, query: string) => {
  if (!query) return true
  const normalizedQuery = normalize(query)
  const searchableFields = [item.jp, item.furi, item.th]

  if ('rom' in item) searchableFields.push(item.rom)
  if ('on' in item) searchableFields.push(item.on)
  if ('kun' in item) searchableFields.push(item.kun)

  return searchableFields.some((value) => normalize(value).includes(normalizedQuery))
}
