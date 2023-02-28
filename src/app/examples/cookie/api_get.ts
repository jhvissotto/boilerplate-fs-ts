import { Next } from '~/src/libs/packages'
import { cookie } from '~/src/libs/extensions/next'

export function Example(req: Next.Req, res: Next.Res) {
  try {
    const currentCookie = cookie.get('api-cookie', { req, res })
    const allCookies = cookie.gets({ req, res })

    console.log('currentCookie: ', currentCookie)
    console.log('allCookies: ', allCookies)

    res.status(200).send('get api cookies')
  } catch (error) {
    res.status(400).send(error.message)
  }
}
