import { lang, region, currency } from '.'

export type List = {
  lang: lang.LIST
  region: region.LIST
  currency: currency.LIST
}

export const list: List[] = [
  { lang: 'en', region: 'us', currency: 'USD' },
  { lang: 'en', region: 'uk', currency: 'GBP' },
  { lang: 'en', region: 'ca', currency: 'CAD' },
  { lang: 'en', region: 'au', currency: 'AUD' },
  { lang: 'en', region: 'nz', currency: 'NZD' },

  { lang: 'es', region: 'es', currency: 'EUR' },
  { lang: 'es', region: 'ar', currency: 'ARS' },

  { lang: 'pt', region: 'br', currency: 'BRL' },
  { lang: 'pt', region: 'pt', currency: 'EUR' },

  { lang: 'fr', region: 'fr', currency: 'EUR' },
  { lang: 'it', region: 'it', currency: 'EUR' },
]
