import type { StudyItem } from '../types';

const normalize = (value: string) => value.trim().toLocaleLowerCase();

export const matchesSearch = (item: StudyItem, query: string) => {
  if (!query) return true;
  const normalizedQuery = normalize(query);
  const searchableFields = [] as string[];

  if ('jp' in item) searchableFields.push(item.jp);
  if ('furi' in item) searchableFields.push(item.furi);
  if ('th' in item) searchableFields.push(item.th);
  if ('title' in item) searchableFields.push(item.title);
  if ('subtitle' in item && item.subtitle) searchableFields.push(item.subtitle);
  if ('description' in item && item.description) searchableFields.push(item.description);
  if ('list' in item && item.list) searchableFields.push(...item.list);
  if ('bullets' in item && item.bullets) {
    searchableFields.push(...item.bullets.map((bullet) => `${bullet.label ?? ''} ${bullet.value}`));
  }

  if ('rom' in item) searchableFields.push(item.rom);
  if ('on' in item) searchableFields.push(item.on);
  if ('kun' in item) searchableFields.push(item.kun);

  return searchableFields.some((value) => normalize(value).includes(normalizedQuery));
};
