import { Redux } from '~/src/libs/packages'

export function Selector<StoreState>(): Redux.Hook_Selector<StoreState> {
  return Redux.use.Selector
}

// // prettier-ignore
// export const useSelector: <
//   TState    = unknown,
//   Selected  = unknown
// >(
//   selector:     (state: TState) => Selected,
//   equalityFn?:  EqualityFn<Selected> | undefined
// ) => Selected
