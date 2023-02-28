import { Req, Res } from '~/src/libs/packages/Next'
import { parsers } from '~/src/libs/helpers'
import { func } from '~/src/libs/functions'

//
// =============================================== //
// ==================== types ==================== //
// =============================================== //
// type Schema = { params: {}; query: {}; body: {} }

// type Params<S = Schema> = Omit<S, 'query' | 'body'>
// type Query<S = Schema> = Omit<S, 'params' | 'body'>
// type Body<S = Schema> = Omit<S, 'params' | 'query'>

//
//
// ====================================================== //
// ==================== cb, req, res ==================== //
// ====================================================== //
// prettier-ignore
type Request<P={},Q={},B={}> = Res & {
  params: P // Params<S>,
  query:  Q // Query<S>,
  body:   B // Body<S>,
}

type Response<D = any> = Res<D>

// prettier-ignore
type CB<P={},Q={},B={},D=any> = (req: Request<P,Q,B>, res: Response<D>) => void

//
//
// ================================================ //
// ==================== module ==================== //
// ================================================ //
// prettier-ignore
export const create = <P={},Q={},B={},D=any>  (cb: CB<P,Q,B,D>)  =>  (req: Req, res: Res<D>) => {



  // ======== parse schema req ======== //
  const { params, query, body } = parsers.next.req<P, Q, B>(req)


  
  // ======== omit items from req ======== //
  const _req = func.run(() => {
    const { query, body, ..._req } = req
    return _req
  })



  // ======== prepare params ======== //
  const request  = { ..._req, params, query, body }  
  const response = res



  // ======== execute callback ======== //
  cb(request, response)
}

//
//
// ====================================== //
// ================ test ================ //
// ====================================== //
// type MySchema = {
//   params: { slug: string }
//   query: { qs: number }
//   body: { data: boolean }
// }

// const example = create<MySchema['params'], MySchema['query'], MySchema['body']>((req, res) => {
//   const { params, query, body } = req
//   const {} = params
//   const {} = query
//   const {} = body
// })
