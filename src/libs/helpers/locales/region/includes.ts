import type { LIST } from '.'

// prettier-ignore
export function includes(arr: LIST[]) {

    const has = {
        us: arr?.includes?.('us'),
        uk: arr?.includes?.('uk'),
        au: arr?.includes?.('au'),
        nz: arr?.includes?.('nz'),
        es: arr?.includes?.('es'),
        ar: arr?.includes?.('ar'),
        br: arr?.includes?.('br'),
        pt: arr?.includes?.('pt'),
        fr: arr?.includes?.('fr'),
        it: arr?.includes?.('it'),
    }
    
    return { has }
}
