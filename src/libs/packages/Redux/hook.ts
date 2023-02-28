import type { TypedUseSelectorHook } from 'react-redux'
import type { Dispatch, AnyAction } from 'redux'

export type Hook_Selector<StoreState> = TypedUseSelectorHook<StoreState>
export type Hook_Dispatch = Dispatch<AnyAction>
