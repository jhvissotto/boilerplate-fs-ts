import diacritics from 'diacritics'

// prettier-ignore
export function slugify(text: string) {
  
  return diacritics
    .remove(text)
    .toLowerCase()
    .split(' ').filter(Boolean).join('-')    
}
