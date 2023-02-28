import { pow } from '.'

// prettier-ignore
export function toPow(num: number, precision = 2) {

    if (num === undefined)
    return ''


    if (num === null)
    return ''

    
    if (Number.isNaN(num))
    return ''


    // ======== hundred ======== //
    if (1e0 <= num && num < 1e3)
    return pow(num, '_', precision)


    // ======== thousand ======== //
    if (1e3 <= num && num < 1e6)
    return pow(num, 'K', precision)


    // ======== million ======== //
    if (1e6 <= num && num < 1e9)
    return pow(num, 'M', precision)


    // ======== billion ======== //
    if (1e9 <= num && num < 1e12)
    return pow(num, 'B', precision)


    // ======== trillion ======== //
    if (1e12 <= num && num < 1e15)
    return pow(num, 'T', precision)


    return ''
}
