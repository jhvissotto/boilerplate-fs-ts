import type { LIST } from '.'

// prettier-ignore
export function includes(arr: LIST[]) {

    const has = {
        en: arr?.includes?.('en'),
        es: arr?.includes?.('es'),
        pt: arr?.includes?.('pt'),
        fr: arr?.includes?.('fr'),
        it: arr?.includes?.('it'),
    }
    
    return { has }
}
