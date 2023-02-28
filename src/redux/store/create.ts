//libs
// import type { Action } from '~/src/libs/Types'
import { Redux } from '~/src/libs/packages'
import { modify } from '~/src/libs/helpers'
// local
import { config } from '.'
import { persist } from '~/src/redux'

//
//
// prettier-ignore
export function create<
  // ================ Generics ================ //
  S = any,
  A extends Redux.Action          = Redux.AnyAction,
  M extends Redux.Middlewares<S>  = [Redux.ThunkMiddlewareFor<S>],
  E extends Redux.Enhancers       = [Redux.StoreEnhancer]
>(
  // ================ Props ================ //
  { 
    reducers, middlewares, devTools = config.devTools, ...opts 
  }:  
  // ================ Params ================ //
  Omit<Redux.ConfigureStoreOptions<S, A, M, E>, 'reducer' | 'middleware'> & { 
    reducers: 
      ReturnType<typeof Redux.combineReducers<S, A>> | 
      ReturnType<typeof Redux.Persist.reducer<S, A>>,
    middlewares: M,
  }, 
  // ================ Return ================ //
): Redux.EnhancedStore<S, A, M, E> {


  
  // ================ Function ================ //
  const ignoredActions = persist.actions

  
  
  const store = Redux.configureStore({ 
    // =================================== //
    // ============= reducer ============= //
    // =================================== //
    reducer: (state, action) => {
      if (action.type == Redux.HYDRATE) return modify('merge', state, action.payload)
      // @ts-ignore
      return reducers(state, action)
    },
    
    // ====================================== //
    // ============= middleware ============= //
    // ====================================== //
    // @ts-ignore
    middleware: getDeftMid => getDeftMid({
      serializableCheck: { ignoredActions } 
    }).concat(middlewares),

    
    // =================================== //
    // ============= options ============= //
    // =================================== //
    devTools, 
    ...opts,
  })



  // return store as unknown as Redux.EnhancedStore<S, A, M, E>
  // @ts-ignore
  return store
}
