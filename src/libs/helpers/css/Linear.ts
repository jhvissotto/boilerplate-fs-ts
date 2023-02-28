import type { UNITS } from '.'
import { Var } from '.'

type X = string | number

//
// prettier-ignore
export const Linear = (A: X = 'A',  B: X = 'B')  =>  (min: number, max: number, unit: UNITS = '') => {
  //
  //
  return `calc(${Var(A)}*${min}${unit} + ${Var(B)}*${max}${unit})`
}
