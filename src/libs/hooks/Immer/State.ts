import { useImmer } from 'use-immer'

//
export function State<S = any>(initialValue: S | (() => S)) {
  //
  const [state, set] = useImmer<S>(initialValue)

  //
  return [state, set, { state, set }] as const
}
