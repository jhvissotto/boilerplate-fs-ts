// implements
import type { BareFetcher, PublicConfiguration } from 'swr/_internal'
import useSWR from 'swr'
// libs
import type { ActPld } from '~/src/libs/Types'
import { array } from '~/src/libs/functions'
import { use } from '~/src/libs'

type Args = Parameters<typeof useSWR>

// prettier-ignore
export function SWR<Data, E = Error>(
    key:     Args[0], 
    fetcher: BareFetcher<Data>, 
    opts?:   Partial<PublicConfiguration<Data, E, BareFetcher<Data>>>,
) {



    // =========================================================== //
    // ======================== variables ======================== //
    // =========================================================== //
    let isFirstTry: boolean = null
    let isLoaded:   boolean = null
    let isSuccess:  boolean = null
    let isError:    boolean = null


    
    const [state, actions] = use.Slice({
        initialState: {
            start:      Date.now(),
            end:        null,
            loadCount:  0,
            retryCount: 0,
        },
        reducers: {
            setEnd:   (state, _:ActPld<number>)   => { state.end = _.payload  },
            loadInc:  (state)                     => { state.loadCount++      },
            retryInc: (state)                     => { state.retryCount++     },
        }
    })    


    
    // ====================================================== //
    // ======================== hook ======================== //
    // ====================================================== //
    const { data, error, isLoading, isValidating, mutate } = useSWR<Data, E>(key, fetcher, {
        
        onSuccess(data, key, config) {
            isLoaded  = true
            isSuccess = true
            isError   = false
            actions.setEnd(Date.now())
            opts?.onSuccess?.(data, key, config)
        },

        onError(err, key, config) {
            isLoaded  = true
            isSuccess = false
            isError   = true
            actions.setEnd(Date.now())
            opts?.onError?.(err, key, config)
        },

        onErrorRetry(err, key, config, revalidate, revalidateOpts) {
            actions.retryInc()
            opts?.onErrorRetry?.(err, key, config, revalidate, revalidateOpts)
        },

        ...opts,
    })

    
    
    // =========================================================== //
    // ======================== selectors ======================== //
    // =========================================================== //
    class get {
        static isFirstTry() {
            return Boolean(state.retryCount === 0 && isLoading)
        }
        static duration() {
            return (state.end - state.start) / 1000
        }
    }



    // ============================================================ //
    // ======================== parse data ======================== //
    // ============================================================ //
    const {
        isEmpty,    isFilled,
        isArray,    length,
        isZero,     isUnique,   isMany,
        itemFirst,  itemLast,
        //@ts-ignore
    } = array.parse(data)



    
    // ======================================================== //
    // ======================== return ======================== //
    // ======================================================== //
    return {
        data,
        error,

        isLoading,
        isLoaded,
        isSuccess,
        isError,
        
        isFirstTry: get.isFirstTry(),
        retryCount: state.retryCount,
        duration:   get.duration(),
        
        isValidating,
        mutate,

        // parsed data
        isEmpty,    isFilled,
        isArray,    length,
        isZero,     isUnique,   isMany,
        itemFirst,  itemLast,
    }
}
