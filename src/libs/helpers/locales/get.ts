import { lang, region, currency, config, list } from '.'

// prettier-ignore
export function get({ lang, wild, region, currency, regionDeft = config.regionDeft }: {
  lang?:        lang.LIST
  wild?:        lang.LIST | region.LIST
  region?:      region.LIST
  currency?:    currency.LIST
  regionDeft?:  region.LIST
}) {

  
  // ================================================ // 
  // ==================== search ==================== // 
  // ================================================ // 
  const search = list.filter(i => 
    i.lang      == lang     ||  
    i.lang      == wild     ||  
    i.region    == wild     ||  
    i.region    == region   ||  
    i.currency  == currency 
  )
  
  if (search?.length)
  return search[0]
  


  // ================================================= // 
  // ==================== default ==================== // 
  // ================================================= // 
  const deft = list.find(i => i.region == regionDeft)
  return deft

}
