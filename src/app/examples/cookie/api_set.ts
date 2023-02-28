import { Next } from '~/src/libs/packages'
import { cookie } from '~/src/libs/extensions/next'

export function Example(req: Next.Req, res: Next.Res) {
  try {
    cookie.set('api-cookie', 'mock-value', { req, res, maxAge: 24 * 60 * 60 })

    res.status(200).send('set api cookies')
  } catch (error) {
    res.status(400).send(error.message)
  }
}
