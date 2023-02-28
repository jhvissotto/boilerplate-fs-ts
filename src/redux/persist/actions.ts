import { Persist } from '~/src/libs/packages/Redux'

export const actions = [
  Persist.actions.FLUSH,
  Persist.actions.REHYDRATE,
  Persist.actions.PAUSE,
  Persist.actions.PERSIST,
  Persist.actions.PURGE,
  Persist.actions.REGISTER,
]
