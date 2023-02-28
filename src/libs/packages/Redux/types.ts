// ============================================== //
// ================ config store ================ //
// ============================================== //
export type { Action, AnyAction, StoreEnhancer } from 'redux'
export type { ConfigureStoreOptions, EnhancedStore } from '@reduxjs/toolkit'
export type { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

//
import type { StoreEnhancer, Middleware } from 'redux'

export type Middlewares<S> = ReadonlyArray<Middleware<{}, S>>
export type Enhancers = ReadonlyArray<StoreEnhancer>
