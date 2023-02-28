import type { Dispatch } from 'react'
import type { Draft } from 'immer'
import type { ImmerReducer } from 'use-immer'

import { useImmerReducer } from 'use-immer'
import { modify } from '~/src/libs/helpers'

//
// export declare function useImmerReducer<S, A, I>(reducer: ImmerReducer<S, A>, initializerArg: S & I, initializer: (arg: S & I) => S):   [S, Dispatch<A>];
// export declare function useImmerReducer<S, A, I>(reducer: ImmerReducer<S, A>, initializerArg: I,     initializer: (arg: I    ) => S):   [S, Dispatch<A>];
// export declare function useImmerReducer<S, A   >(reducer: ImmerReducer<S, A>, initialState:   S,     initializer?: undefined       ):   [S, Dispatch<A>];

//
// prettier-ignore
export function Reducer<S=any, I=any>(
    iniState:                S & I, 
    initializer?: (stateIni: S & I) => S
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
        // IMMER:  'IMMER',
    }


    
    // ================================================== //
    // ================ REDUCER FUNCTION ================ //
    // ================================================== //
    const reducer: ImmerReducer<S, any> = (draft, { type, payload }) => {

        switch (type as keyof typeof TYPES) {
            case 'RESET':
            return iniState

            case 'DEF':
            return payload



            case 'SPREAD':
            return modify<Draft<S>>('spread', draft, payload)
            
            case 'ASSIGN':
            return modify<Draft<S>>('assign', draft, payload)

            case 'MERGE':
            return modify<Draft<S>>('merge', draft, payload)



            case 'SET':
            return modify<Draft<S>>('idem', draft, null, payload)

            case 'CLONE':
            return modify<Draft<S>>('clone', draft, null, payload)
            
            // case 'IMMER':
            // return modify<Draft<S>>('immer', draft, null, payload)
        }
    }


    
    // ============================================== //
    // ==================== HOOK ==================== //
    // ============================================== //
    const [state, dispatch] = useImmerReducer<S, any, I>(reducer, iniState, initializer) as [S, Dispatch<any>]
    

    

    // ================================================= //
    // ==================== ACTIONS ==================== //
    // ================================================= //
    const actions = {
        reset:  (                 ) => dispatch({ type: TYPES.RESET,   payload: null }),
        def:    (payload: Draft<S>) => dispatch({ type: TYPES.DEF,     payload       }),

        spread: (payload: Draft<S>) => dispatch({ type: TYPES.SPREAD,  payload       }),
        assign: (payload: Draft<S>) => dispatch({ type: TYPES.ASSIGN,  payload       }),
        merge:  (payload: Draft<S>) => dispatch({ type: TYPES.MERGE,   payload       }),

        set:    (callback: (state: Draft<S>) => void) => dispatch({ type: TYPES.SET,    payload: callback }),
        clone:  (callback: (clone: Draft<S>) => void) => dispatch({ type: TYPES.CLONE,  payload: callback }),
        // immer:  (callback: (draft: Draft<S>) => void) => dispatch({ type: TYPES.IMMER,  payload: callback }),
    }

    

    return [state, actions, { state, actions }] as const
}
