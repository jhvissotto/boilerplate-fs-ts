// libs
import { use } from '~/src/libs'
import { Rdx } from '~/src/libs/packages'
import { string } from '~/src/libs/functions'
import { promiser } from '~/src/libs/helpers/operators'
// app
import type { Store } from '~/src/redux'
import { temp } from '~/src/api/temp'
// local
import { namespace } from '.'

// ====================================================== //
// ======================== DEFS ======================== //
// ====================================================== //
export const name = 'calc'

const namer = append => string.append('@', [namespace, name, append])

// ======================================================= //
// ======================== STATE ======================== //
// ======================================================= //
export type State = {
  status: 'idle' | 'fetching' | 'success' | 'error'
  counter: number
}

export const initialState: State = {
  status: 'idle',
  counter: 0,
}

// ===================================================== //
// ======================== API ======================== //
// ===================================================== //
export const api = temp.injectEndpoints({
  endpoints: builder => ({
    test: builder.query({
      query: () => '/api/test',
    }),
  }),
})

// export const { endpoints } = api
// ======================================================== //
// ======================== THUNKS ======================== //
// ======================================================== //
// prettier-ignore
export const thunks = {
  async_add: () =>  Rdx.createAsyncThunk(namer(thunks.async_add.name),  async (payload: { value: number }) => {
    await promiser({ delay: 1500 })
    return payload
  }),
}

// ======================================================= //
// ======================== SLICE ======================== //
// ======================================================= //
export const slice = Rdx.createSlice({
  name,
  initialState,
  reducers: {
    add: (state, _: Rdx.ActPld<{ value: number }>) => {
      state.counter += _.payload.value
    },
  },
  extraReducers: builder => {
    builder
      .addCase(thunks.async_add().fulfilled, (state, action) => {
        state.counter += action.payload.value
      })
      .addMatcher(api.endpoints.test.matchPending, (state, action) => {
        state.status = 'fetching'
      })
      .addMatcher(api.endpoints.test.matchFulfilled, (state, action) => {
        state.status = 'success'
      })
      .addMatcher(api.endpoints.test.matchRejected, (state, action) => {
        state.status = 'error'
      })
  },
})

export const { actions, caseReducers, getInitialState, reducer } = slice

// =========================================================== //
// ======================== SELECTORS ======================== //
// =========================================================== //
export const selectors = {
  getState: Rdx.createSelector([(state: Store.State) => state.test.calc], calc => {
    return calc
  }),
}

// ============================================================ //
// ======================== DISPATCHES ======================== //
// ============================================================ //
export const dispatches = {
  increment: (): Store.Thunk => (dispatch, getState) => {
    const { counter } = selectors.getState(getState())
    const value = counter + 1
    dispatch(slice.actions.add({ value }))
  },
}

// ========================================================= //
// ======================== EFFECTS ======================== //
// ========================================================= //
export function effect() {
  // use.Extra.Change(() => {}, [])
}
