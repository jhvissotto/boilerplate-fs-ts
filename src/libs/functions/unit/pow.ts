// local
import type { Pows } from '.'
import { pows } from '.'

// prettier-ignore
export function pow(number: number, unit: Pows, precision = 2) {


    if (number === undefined)
    return ''
    
    if (number === null)
    return ''
    
    if (Number.isNaN(number))
    return ''



    // select
    const u = pows[unit]


    // abbreviation
    const num = Number(number / u.base).toPrecision(precision) 


    // expression
    const numUnit = `${num}${u.sfx}`


    // return
    return numUnit
}
