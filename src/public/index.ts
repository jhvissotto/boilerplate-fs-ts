// libs
import { path } from '~/src/libs/helpers/system'
// local
import { icons } from './icons'

//
export const Public = {
  icons,
  dirname: __dirname,
  favicon: path.v1.join(__dirname, './favicon.ico'),
}
