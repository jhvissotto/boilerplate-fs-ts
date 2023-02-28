import { locales } from '~/src/global'

type Keywords = Record<locales.langs.LIST, string[]>

export const keywords: Keywords = {
  en: ['home', 'contact'],
  pt: ['inicio', 'contato'],
}
