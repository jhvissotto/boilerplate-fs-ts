// global
import { config as global_cofing } from '~/src/global'
// libs
import { environment } from '~/src/libs/helpers'

// prettier-ignore
export const config = {
  with_persist: global_cofing().with_persist,
  devTools:     environment.check().isDev,
}
