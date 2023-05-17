import { useState, useEffect } from 'react'
import { useFirstMountState } from 'react-use'

export function Effect(
  ...[callback, observers, options = { first: true, once: false }]: [
    Parameters<typeof useEffect>[0],
    Parameters<typeof useEffect>[1],
    { first?: boolean; once?: boolean }
  ]
) {
  // ====================== //
  // ======== VARS ======== //
  // ====================== //
  const [isFirstEffect, set_isFirstEffect] = useState(true)
  const isFirstMount = useFirstMountState()

  // ======================== //
  // ======== CHECKS ======== //
  // ======================== //
  const skipFirst = !options.first
  const countGuard = isFirstEffect ? true : !options.once

  // ======================== //
  // ======== EVENTS ======== //
  // ======================== //
  useEffect(() => {
    // execute always
    if (countGuard && skipFirst == false) {
      set_isFirstEffect(false)
      return callback()
    }
    // skip first
    if (countGuard && skipFirst == true && !isFirstMount) {
      set_isFirstEffect(false)
      return callback()
    }
  }, observers)
}
