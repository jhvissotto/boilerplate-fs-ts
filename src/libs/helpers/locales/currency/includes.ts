import type { LIST } from '.'

// prettier-ignore
export function includes(arr: LIST[]) {

    const has = {
        USD: arr?.includes?.('USD'),
        GBP: arr?.includes?.('GBP'),
        AUD: arr?.includes?.('AUD'),
        NZD: arr?.includes?.('NZD'),
        EUR: arr?.includes?.('EUR'),
        BRL: arr?.includes?.('BRL'),
        ARS: arr?.includes?.('ARS'),
    }
    
    return { has }
}
