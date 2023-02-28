import { useState } from 'react'

// prettier-ignore
export function State<S>(initialState: S | (() => S)) {

    const [state, set] = useState<S>(initialState)

    //
    return [state, set, { state, set }] as const
}
