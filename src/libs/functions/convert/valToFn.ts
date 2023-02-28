// prettier-ignore
export function valToFn<Return>(input) {

    
    if (typeof input == 'function')
    return input as Return


    else
    return () => input as Return

}
