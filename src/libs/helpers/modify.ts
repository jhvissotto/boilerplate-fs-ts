import type { Draft } from 'immer'
import produce from 'immer'
import { cloneDeep, merge } from 'lodash'

export type Methods =
  | 'def'
  | 'spread'
  | 'assign'
  | 'merge'
  | 'idem'
  | 'clone'
  | 'immer'
  | 'skip'

// prettier-ignore
export function modify<S>(
  method:  Methods,
  state:   S,
  payload: S,
  callback?: (state: S | Draft<S>) => S,
) {


  switch (method) {

    case 'def':
    return payload



    case 'spread':
    return { ...state, ...payload }

    case 'assign':
    return Object.assign({}, state, payload)

    case 'merge':
    return merge({}, state, payload)


    
    case 'idem':
    return callback(state)

    case 'clone':
    return callback(cloneDeep(state))

    case 'immer':
    return produce(state, draft => { callback(draft) })



    case 'skip':
    return state
  }

}
