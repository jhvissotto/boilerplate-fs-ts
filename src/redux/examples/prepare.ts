// // libs
// import { environment } from '~/src/libs/helpers'
// // local
// import { store } from '.'
// import { create } from './modules'

// export const prepareStore = preloadedState => {
//   let _store = store ?? create(preloadedState)

//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     _store = create({
//       ...store.getState(),
//       ...preloadedState,
//     })
//     // Reset the current store
//     store = undefined
//   }

//   // For SSG and SSR always create a new store
//   if (environment.check().isServer) return _store

//   // Create the store once in the client
//   if (!store) store = _store

//   return _store
// }
