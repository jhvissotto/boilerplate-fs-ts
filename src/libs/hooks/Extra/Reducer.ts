import { useMethods } from 'react-use'

//
type CreateMethods<M, T> = (state: T) => {
  [P in keyof M]: (payload?: any) => T
}
type WrappedMethods<M> = {
  [P in keyof M]: (...payload: any) => void
}

//
// prettier-ignore
export function Reducer<M, T>(createMethods: CreateMethods<M, T>, initialState: T) {

  const [state, actions] = useMethods(createMethods, initialState) as [T, WrappedMethods<M>]


  return [state, actions, { state, actions }] as const
}
