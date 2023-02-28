// ======================================== //
// ================ config ================ //
// ======================================== //
export type { PersistConfig as Config } from 'redux-persist'
export { default as storage } from 'redux-persist/lib/storage'
export { default as storage_web } from 'redux-persist/lib/storage/createWebStorage'
export { default as storage_session } from 'redux-persist/lib/storage/session'

//
//
// ================================================= //
// ================ persist_reducer ================ //
// ================================================= //
import type { PersistState } from 'redux-persist'
export interface Partial {
  _persist: PersistState
}

//
//
// ========================================== //
// ================ provider ================ //
// ========================================== //
export { PersistGate as Gate } from 'redux-persist/integration/react'

//
//
// ========================================= //
// ================ modules ================ //
// ========================================= //
export { persistStore as store } from 'redux-persist'
export * from './reducer'
export * as actions from './actions'
