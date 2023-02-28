import { Request } from 'express'

// prettier-config
export const config = {
  appendKey: (req: Request, res: Response) => {
    const { host } = req.headers

    const isApp = host?.includes('app.')

    const prefix = isApp ? 'app' : ''

    return prefix
  },
}
