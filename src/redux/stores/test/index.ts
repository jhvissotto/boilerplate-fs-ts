// libs
import { Redux } from '~/src/libs/packages'
// local
import * as calc from './calc'

// =========================================== //
// ================ namespace ================ //
// =========================================== //
export const namespace = 'test'

export const reducer = Redux.combineReducers({
  [calc.name]: calc.reducer,
})

export function effect() {
  calc.effect()
}

export { calc }
