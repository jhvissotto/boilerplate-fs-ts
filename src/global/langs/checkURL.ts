// libs
import { includes } from '~/src/libs/functions/check'
// local
import { keywords } from '.'

//
export function checkURL(url: string) {
  //
  //
  const has_keywords = {
    en: includes.some(url, keywords.en),
    pt: includes.some(url, keywords.pt),
  }

  return { has_keywords }
}
