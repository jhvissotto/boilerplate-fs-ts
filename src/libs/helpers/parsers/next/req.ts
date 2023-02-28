import type { Next } from '~/src/libs/packages'
import { pick, omit } from 'lodash'
import qs from 'query-string'

// prettier-ignore
export function req<
  Params = {}, 
  Query  = {}, 
  Body   = {},
>(req: Next.Req) {
  //
  const parsed = qs.parseUrl(req.url)


  const params = omit(req.query, Object.keys(parsed.query)) as ({} & Params)
  const query  = pick(req.query, Object.keys(parsed.query)) as ({} & Query)
  const body   =      req.body                              as ({} & Body)
  

  return {
    params,
    query,
    body,
  }
}
