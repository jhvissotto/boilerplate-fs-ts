import { Linear } from '.'

//
type Params = Parameters<ReturnType<typeof Linear>>

//
export function lin(...params: Params) {
  return Linear()(...params)
}
