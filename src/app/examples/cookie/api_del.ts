import { Next } from '~/src/libs/packages'
import { cookie } from '~/src/libs/extensions/next'

export function Example(req: Next.Req, res: Next.Res) {
  try {
    cookie.del('api-cookie', { req, res })

    res.status(200).send('remove api cookies')
  } catch (error) {
    res.status(400).send(error.message)
  }
}
