// implements
import type { DebouncedFunc, DebouncedFuncLeading } from 'lodash'
import { debounce, throttle } from 'lodash'
// libs
import { convert } from '~/src/libs/functions'

//
type Args = Parameters<typeof debounce> & Parameters<typeof throttle>

//
// prettier-ignore
export function lazy<R extends (...args: any) => any>(
    lazy:   'debounce' | 'throttle', 
    input:  R, // Args[0], 
    wait?:  Args[1], 
    opts?:  Args[2],
) {


    const fn = convert.valToFn<R>(input) as R // as Args[0]

    
    if (wait && lazy == 'debounce')
    return debounce(fn, wait, opts) as DebouncedFunc<R> | DebouncedFuncLeading<R> // as R 


    if (wait && lazy == 'throttle')
    return throttle(fn, wait, opts) as DebouncedFunc<R> // as R 


    return input as R
}
