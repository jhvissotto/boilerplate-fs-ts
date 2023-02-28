// libs
import { Material } from '~/src/libs/packages'
// app
import { fonts } from '~/src/view/design'

export const material = Material.theme_create({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: Material.colors.red.A400,
    },
  },
  typography: {
    fontFamily: fonts.roboto.style.fontFamily,
  },
})
