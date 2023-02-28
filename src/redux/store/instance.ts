//libs
import { Redux } from '~/src/libs/packages'
// app
import { temp } from '~/src/api/temp'
// local
import { config, create } from '.'
import { persist, stores } from '~/src/redux'

//
// prettier-ignore
export const store = create({
  // ================ reducers ================ //
  reducers: persist.reducer(Redux.combineReducers({
    [temp.reducerPath]:       temp.reducer,
    [stores.test.namespace]:  stores.test.reducer,
  }), {}, { 
    enable: config.with_persist, 
  }),
  // ================ middlewares ================ //
  // @ts-ignore
  middlewares: [temp.middleware],
})

//
//
// prettier-ignore
export module Store {
  export type State           = ReturnType<typeof store.getState>
  export type Dispatch        =            typeof store.dispatch
  export type Thunk<R = void> = Redux.Thunk<State, R>
}
