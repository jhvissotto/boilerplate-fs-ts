// global
const { locales } = require('./src/global')

// prettier-ignore
module.exports = {
  // ====================================== //
  // ================ defs ================ //
  // ====================================== //
  locales:        locales.slugs.List,
  defaultLocale:  locales.get({ slugDeft: 'en' }).slug,

  
  // ====================================== //
  // ================ bind ================ //
  // ====================================== //
  pages: {
    '*': ['dictionary'],
  },

  // ======================================== //
  // ================ loader ================ //
  // ======================================== //
  loadLocaleFrom: (slug, dictionary) => {
    
    const { lang } = locales.get({ slug })

    return import(`./src/content/dictionaries/${lang}.json`).then(m => m.default)
  },
}
