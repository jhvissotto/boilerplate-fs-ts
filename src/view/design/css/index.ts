import { path } from '~/src/libs/helpers/system'

// prettier-ignore
export const css = {
  dirname:          __dirname,
  global_bootstrap: path.v1.join(__dirname, './global_bootstrap.css'),
  global_tailwind:  path.v1.join(__dirname, './global_tailwind.css'),
  global_vanilla:   path.v1.join(__dirname, './global_vanilla.css'),
}
