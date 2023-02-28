import { useMemo } from 'react'

type Args = Parameters<typeof useMemo>

// prettier-ignore
export function Value<V>(
    value: V, 
    deps?: Args[1],
) {

    return useMemo<V>(() => value, deps)
}
