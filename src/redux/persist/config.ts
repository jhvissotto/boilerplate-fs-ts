// libs
import { Redux } from '~/src/libs/packages'

export const config = <S>(): Redux.Persist.Config<S> => ({
  key: 'REDUX_PERSISTOR',
  storage: Redux.Persist.storage,
})
