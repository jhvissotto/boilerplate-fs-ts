import { Args } from '~/src/database/query/builder'
import { __ } from '~/src/database/query/builder/a.fns'
import {} from '~/src/database/query/builder/b.commands'

type Elem = [string, { disable?: boolean }?]
type List = Elem[]

// prettier-ignore
export function WITH(list: List) {

    const list_flt = list.filter(([cte, opts]) => !opts?.disable)


    // const hasWith  = Boolean(list_flt?.length)
    // ${__(hasWith)}


    const qs = `
        WITH 
        ${list_flt.map(([cte, opts]) => cte).join('\n,\n')}
    `

    
    // console.log('qs', qs)
    return qs
}
