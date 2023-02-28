// libs
import { persistReducer } from 'redux-persist'
import { Redux } from '~/src/libs/packages'

//
// prettier-ignore
export function reducer<
  // ================ Generics ================ //
  S, A extends Redux.Action = Redux.Action
>(
  // ================ Params ================ //
  reducer:  Redux.Reducer<S, A>,
  config:   Redux.Persist.Config<S>,
  opts?:    { enable?: boolean },
  // ================ Return ================ //
): Redux.Reducer<S & Redux.Persist.Partial, A> | Redux.Reducer<S, A> {


  
  // ================ Function ================ //
  if (opts?.enable)
  return persistReducer<S, A>(config, reducer)

  else
  return reducer


}
