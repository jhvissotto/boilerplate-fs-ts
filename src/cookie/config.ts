// libs
import { Cookie } from '~/src/libs/Types'
// global
import { config as global_config } from '~/src/global'

//
// prettier-ignore
export const config = () => {
  const global = global_config().cookie
  return {
    domain:     global.domain   ,
    expires:    global.expires  ,
    httpOnly:   global.httpOnly ,
    maxAge:     global.maxAge   ,
    path:       global.path     ,
    sameSite:   global.sameSite ,
    secure:     global.secure   ,
  } as Cookie.Options
}
