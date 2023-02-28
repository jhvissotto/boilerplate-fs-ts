// libs
import { Redux } from '~/src/libs/packages'
// local
import { Store, store } from '.'

export const wrapper = Redux.createWrapper(() => store)
