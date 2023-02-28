// libs
import { next } from '~/src/libs/extensions'
// app
import { locales } from '~/src/global'

// prettier-ignore
export function Locale() {


  const slug  = next.useTranslation().lang
  const { t } = next.useTranslation()



  // parse lang from slug
  const { lang } = locales.get({ 
    // @ts-ignore
    slug, 
  })



  function setSlug(slug: locales.slugs.LIST) {
    return next.setLanguage(slug)
  }



  return {
    t,
    lang,
    slug,
    setSlug,
  }
}
