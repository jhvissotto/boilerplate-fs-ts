import type { ReducerMap, UseLocalSliceOptions } from 'use-local-slice'
import { useLocalSlice } from 'use-local-slice'

//
// prettier-ignore
export function Slice<State, Reducers extends ReducerMap<State>>(args: UseLocalSliceOptions<State, Reducers>) {
  //
  const [state, actions] = useLocalSlice<State, Reducers>(args)


  //
  return [state, actions, { state, actions }] as const
}
