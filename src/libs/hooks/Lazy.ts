import { useCallback } from 'react'
import { func } from '~/src/libs/functions'

type LZ = Parameters<typeof func.lazy>
type CB = Parameters<typeof useCallback>

// prettier-ignore
export function Lazy<R extends Function, L extends (...args: any) => any>(
  lazy:  LZ[0],
  input: L, // LZ[1],
  wait?: LZ[2],
  deps?: CB[1],
  opts?: LZ[3],
) {


  const fn = func.lazy<L>(lazy, input, wait, opts) as unknown as R  // as CB[0]


  return useCallback(fn, deps) as R
}
