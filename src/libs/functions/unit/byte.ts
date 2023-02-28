import type { Bytes } from '.'
import { bytes } from '.'

export function byte(val: number, unit: Bytes) {
  return val * bytes[unit].base
}
