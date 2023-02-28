import { web } from '~/src/libs/helpers'

// prettier-ignore
export function createDef<Params = {}, Query = {}>(props: {
  name:   string
  method: web.Methods
  url:    (params: Params, query: Query) => string
}) {
  return props
}
