import { ThunkAction, Action } from '@reduxjs/toolkit'

export type Thunk<StoreState, ReturnType = void> = ThunkAction<
  ReturnType,
  StoreState,
  unknown,
  Action<string>
>

export { createAsyncThunk } from '@reduxjs/toolkit'
