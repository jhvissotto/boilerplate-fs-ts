// libs
import type { SetOptional } from '~/src/libs/Types'
import { Redux } from '~/src/libs/packages'
// local
import { config } from '.'

//
type Params = Parameters<typeof Redux.Persist.reducer>

//
//
// prettier-ignore
export function reducer<
  // ================ Generics ================ //
  S, A extends Redux.Action = Redux.Action
>(
  // ================ Params ================ //
  reducer: Redux.Reducer<S, A>,
  { 
    key     = config<S>().key, 
    storage = config<S>().storage, 
    ...props
  }: SetOptional<Redux.Persist.Config<S>, 'key' | 'storage'>,
  opts?: Params[2]
  // ================ Return ================ //
): Redux.Reducer<S & Redux.Persist.Partial, A> | Redux.Reducer<S, A> {

  
  // ================ Function ================ //
  return Redux.Persist.reducer<S, A>(reducer, { key, storage, ...props }, opts)
  
}
