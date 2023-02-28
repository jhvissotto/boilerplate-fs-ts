// app
import { create } from '~/src/handlers'
// local
import { schema } from '.'

export const ctrl = create<
  schema.Req['params'],
  schema.Req['query'],
  schema.Req['body'],
  schema.Res
>((req, res) => {
  //
  const { params, query, body } = req
  const {} = params
  const {} = query
  const {} = body

  return res.status(200).json({ test: true })
})
