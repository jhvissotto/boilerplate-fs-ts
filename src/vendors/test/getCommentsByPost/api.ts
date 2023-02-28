// libs
import { resolvers } from '~/src/libs/helpers/operators'
// app
import { Api } from '~/src'
import { endpoints } from '~/src/vendors/test'
// local
import { Res } from '.'

// select endpoint
type Req = endpoints.getCommentsByPost.Req
const defs = endpoints.getCommentsByPost.defs

// prettier-ignore
export async function api(req: Req, opts?: Parameters<typeof Api.test.axios>[1]) {
  
  
  const call = await resolvers.obj.d<Res>(Api.test.axios({
    method: defs.method,
    url:    defs.url(req?.params, req?.query),
    data:   req?.body,
    ...opts
  }))


  // console.log('call', call)
  return call
}
