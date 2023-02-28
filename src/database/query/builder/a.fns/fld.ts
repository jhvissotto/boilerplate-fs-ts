import { Args } from '~/src/database/query/builder'

// prettier-ignore
export function fld(
    fk:     Args.FldKey,  
    field:  Args.Field, 
    lang?:  Args.Langs
) {

    if (fk == 'slug' && lang)
    return `${fk}_${lang}_${field}`
    
    else
    return `${fk}_${field}`
}
