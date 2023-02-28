import { useRouter } from 'next/router'
import { pick, omit } from 'lodash'
import qs from 'query-string'

// prettier-ignore
export function Router<
  Params = {}, 
  Query  = {},
>() {


  const { query: router_query, ...router } = useRouter()

  const parsed = qs.parseUrl(router.asPath)

  const params = omit(router_query, Object.keys(parsed.query)) as ({} & Params)
  const query  = pick(router_query, Object.keys(parsed.query)) as ({} & Query)


  return {
    params,
    query,
    ...router,
  }
}
