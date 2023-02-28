// libs
import { use } from '~/src/libs'
// app
import type { Store } from '~/src/redux'
import { wrapper } from '~/src/redux'

export const Selector = use.Redux.Selector<Store.State>()
export const Dispatch = use.Redux.Dispatch<Store.Dispatch>

export const Wrapped = wrapper.useWrappedStore
