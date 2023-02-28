// import { checkURL } from './langs'

// const { has_keywords } = checkURL('site.com/contato')

// console.log('has_keywords', has_keywords)

// prettier-ignore
export function includes(arr: any[]) {

    const has = {
        en: arr?.includes?.('en'),
        es: arr?.includes?.('es'),
        pt: arr?.includes?.('pt'),
        fr: arr?.includes?.('fr'),
        it: arr?.includes?.('it'),
    }
    
    return { has }
}

const r = includes(['pt', 'en'])
console.log('r', r)

// {
//     en: true,
//     pt: true,
//     es: false,
//     fr: false,
//     it: false
// }
