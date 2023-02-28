import { langs, slugs } from '.'

export type List = {
  slug: slugs.LIST
  lang: langs.LIST
}

export const list: List[] = [
  { slug: 'en', lang: 'en' },
  { slug: 'br', lang: 'pt' },
]
