// implements
import { useReducer } from 'react'
// libs
import type { Dispatch } from '~/src/libs/Types'
import { modify } from '~/src/libs/helpers'

//
// prettier-ignore
export function Reducer<S>(
    iniState: S, 
    initializer?: Parameters<typeof useReducer>[2]
) {

    // =============================================== //
    // ==================== TYPES ==================== //
    // =============================================== //
    const TYPES = {
        RESET:  'RESET',
        DEF:    'DEF',

        SPREAD: 'SPREAD',
        ASSIGN: 'ASSIGN',
        MERGE:  'MERGE',
        
        SET:    'SET',
        CLONE:  'CLONE',
        IMMER:  'IMMER',
    }


    
    // ================================================== //
    // ================ REDUCER FUNCTION ================ //
    // ================================================== //
    function reducer(state: S, { type, payload }) {

        switch (type as keyof typeof TYPES) {
            case 'RESET':
            return iniState

            case 'DEF':
            return payload



            case 'SPREAD':
            return modify<S>('spread', state, payload)
            
            case 'ASSIGN':
            return modify<S>('assign', state, payload)

            case 'MERGE':
            return modify<S>('merge', state, payload)



            case 'SET':
            return modify<S>('idem', state, null, payload)

            case 'CLONE':
            return modify<S>('clone', state, null, payload)
            
            case 'IMMER':
            return modify<S>('immer', state, null, payload)
        }
    }


    
    // ============================================== //
    // ==================== HOOK ==================== //
    // ============================================== //
    const [state, dispatch] = useReducer(reducer, iniState, initializer) as [S, Dispatch]
    


    // ================================================= //
    // ==================== ACTIONS ==================== //
    // ================================================= //
    const actions = {
        reset:  (          ) => dispatch({ type: TYPES.RESET,   payload: null }),
        def:    (payload: S) => dispatch({ type: TYPES.DEF,     payload       }),

        spread: (payload: S) => dispatch({ type: TYPES.SPREAD,  payload       }),
        assign: (payload: S) => dispatch({ type: TYPES.ASSIGN,  payload       }),
        merge:  (payload: S) => dispatch({ type: TYPES.MERGE,   payload       }),

        set:    (callback: (state: S) => void) => dispatch({ type: TYPES.SET,    payload: callback }),
        clone:  (callback: (clone: S) => void) => dispatch({ type: TYPES.CLONE,  payload: callback }),
        immer:  (callback: (draft: S) => void) => dispatch({ type: TYPES.IMMER,  payload: callback }),
    }



    return [state, actions, { state, actions }] as const
}
