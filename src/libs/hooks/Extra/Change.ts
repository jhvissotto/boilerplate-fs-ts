import { useEffect } from 'react'
import { useFirstMountState } from 'react-use'

export function Change(
  callback: Parameters<typeof useEffect>[0],
  observers: Parameters<typeof useEffect>[1],
  options = { first: true }
) {
  // ====================== //
  // ======== VARS ======== //
  // ====================== //
  const isFirstMount = useFirstMountState()

  // ======================== //
  // ======== CHECKS ======== //
  // ======================== //
  const skipFirst = !options.first

  // ======================== //
  // ======== EVENTS ======== //
  // ======================== //
  useEffect(() => {
    // execute always
    if (skipFirst == false) {
      return callback()
    }
    // skip first
    if (skipFirst == true && !isFirstMount) {
      return callback()
    }
  }, observers)
}
