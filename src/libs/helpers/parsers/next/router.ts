import type { Next } from '~/src/libs/packages'
import { pick, omit } from 'lodash'
import qs from 'query-string'

// prettier-ignore
export function router<
  Params = {}, 
  Query  = {}, 
  // Body   = {},
>(router: Next.Router) {
  //
  const parsed = qs.parseUrl(router.asPath)


  const params = omit(router.query, Object.keys(parsed.query)) as ({} & Params)
  const query  = pick(router.query, Object.keys(parsed.query)) as ({} & Query)
  // const body   =      router.body                              as ({} & Body)
  

  return {
    params,
    query,
    // body,
  }
}
