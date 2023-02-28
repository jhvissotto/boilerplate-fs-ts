import { langs, slugs, config, list } from '.'

// prettier-ignore
export function get({ lang, wild, slug, /*currency,*/ slugDeft = config.slugDeft }: {
  lang?:        langs.LIST
  wild?:        langs.LIST | slugs.LIST
  slug?:        slugs.LIST
  // currency?:    currency.LIST
  slugDeft?:    slugs.LIST
}) {

  
  // ================================================ // 
  // ==================== search ==================== // 
  // ================================================ // 
  const search = list.filter(i => 
    i.lang      == lang     ||
    i.lang      == wild     ||
    i.slug      == wild     ||
    i.slug      == slug   
    // i.currency  == currency 
  )
  
  if (search?.length)
  return search[0]
  


  // ================================================= // 
  // ==================== default ==================== // 
  // ================================================= // 
  const deft = list.find(i => i.slug == slugDeft)
  return deft

}
