// libs
import type { Z } from '~/src/libs/helpers/schema'
import { _ } from '~/src/libs/utils'
import { resolvers } from '~/src/libs/helpers/operators'
// app
import { E, mids } from '~/src'

// prettier-ignore
export type Validation = {
  isSanitized:  boolean | null
  hasError:     boolean | null
  errors:   Array<Error | any>
}

// prettier-ignore
export function validator(zSchema: Z.AnyZodObject, { canSanitize = false }) {
  
  // handler
  return async (req: mids.Req, res: mids.Res, next: mids.Next) => {

    // ======== define variables ======== //
    const validation = {
      isSanitized: null,
      hasError: null,
      errors: []
    } as Validation


    // ======== validation ======== //
    const { data, error, isSuccess, isError } = await resolvers.d(zSchema.parseAsync({
      params: req.params,
      query: req.query,
      body: req.body,
    }))


    // ======== set errors ======== //
    if (isError) {
      validation.hasError = true
      validation.errors.push(error)
    } else {
      validation.hasError = false
    }


    // ======== conditional sanitize ======== //
    if (canSanitize && isSuccess) {
      validation.isSanitized = true
      _.L.merge(req, data)
    } else {
      validation.isSanitized = false
    }


    // ======== assign variables ======== //
    req['middlewares']['validation'] = validation


    
    return next()
  }
}
