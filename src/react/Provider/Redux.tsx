// global
import { config } from '~/src/global'
// libs
import { React } from '~/src/libs/packages'
import { Provider, Persist } from '~/src/libs/packages/Redux'
// app
import { store, stores } from '~/src/redux'

//
// prettier-ignore
export const Redux: React.FCC<{ with_persist?: boolean }> = ({ 
  children, 
  with_persist = config().with_persist
}) => {
  

  // create persistor from store
  const persistor = Persist.store(store)


  // initialize store effects
  stores.effect()


  return (
    <Provider store={store}>
      {with_persist 
      ? <Persist.Gate persistor={persistor}>{children}</Persist.Gate>
      : children}
    </Provider>
  )
}
