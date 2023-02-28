// ========================================== //
// ================ original ================ //
// ========================================== //
export type { FC, PropsWithChildren, ReactNode as Node } from 'react'

export * as element from './element'
export * as event from './event'
export * as use from './hooks'

//
//
//
// ======================================== //
// ================ custom ================ //
// ======================================== //
import type { FC, PropsWithChildren } from 'react'

export type FCC<P = {} /*| unknown*/> = FC<PropsWithChildren<P>>

//
//
//
// ========================================= //
// ================ context ================ //
// ========================================= //
export { createContext, useContext } from 'react'
