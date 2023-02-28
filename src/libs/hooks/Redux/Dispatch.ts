import { Redux } from '~/src/libs/packages'

// prettier-ignore
export function Dispatch<StoreDispatch extends Redux.Hook_Dispatch = Redux.Hook_Dispatch>() {

    const dispatch = Redux.use.Dispatch<StoreDispatch>()

    return { dispatch }
}
