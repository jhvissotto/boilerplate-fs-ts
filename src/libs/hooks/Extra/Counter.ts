import { useState } from 'react'
import { useUpdateEffect as useChange } from 'react-use'

export function Counter(initialValue = 0, onChangeCallback?: (value: number) => void) {
  // ====================== //
  // ======== VARS ======== //
  // ====================== //
  const [value, set] = useState(initialValue)

  // ========================== //
  // ======== CHECKERS ======== //
  // ========================== //
  const isZero = value == 0
  const isInitialValue = value == initialValue

  // ========================= //
  // ======== SETTERS ======== //
  // ========================= //
  function reset() {
    set(initialValue)
  }

  function toZero() {
    set(0)
  }

  function increment() {
    set(value => value + 1)
  }

  function decrement() {
    set(value => value - 1)
  }

  // ======================== //
  // ======== EVENTS ======== //
  // ======================== //
  useChange(() => {
    return onChangeCallback?.(value)
  }, [value])

  // ======================== //
  // ======== PUBLIC ======== //
  // ======================== //
  const counter = {
    value,
    set,
    isZero,
    isInitialValue,
    reset,
    toZero,
    increment,
    decrement,
  }

  return { counter, ...counter }
}
