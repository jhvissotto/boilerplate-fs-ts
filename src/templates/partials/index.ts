import { path } from '~/src/libs/helpers/system'

// prettier-ignore
export const partial = {
  dirname:  __dirname,
  partial1: path.v1.join(__dirname, './partial1.html'),
  partial2: path.v1.join(__dirname, './partial2.html'),
}
