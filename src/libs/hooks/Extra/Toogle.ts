import { useState } from 'react'
import { useUpdateEffect as useChange } from 'react-use'

type Ternary = null | boolean

export function Toogle(initialValue = null, onChangeCallback?: (state: Ternary) => void) {
  // ====================== //
  // ======== VARS ======== //
  // ====================== //
  const [state, set] = useState<Ternary>(initialValue)

  // ========================== //
  // ======== CHECKERS ======== //
  // ========================== //
  const isInitialValue = state === initialValue

  const isOn = state === true
  const isOff = state === false
  const isNull = state === null

  const hasValue = state === true || state === false
  const isDisable = state === false || state === null

  // =============================== //
  // ======== BASIC SETTERS ======== //
  // =============================== //
  function reset() {
    set(initialValue)
  }

  function toNull() {
    set(null)
  }
  function turnOn() {
    set(true)
  }
  function turnOff() {
    set(false)
  }

  // ================================== //
  // ======== ADVANCED SETTERS ======== //
  // ================================== //
  function alternate() {
    if (hasValue) {
      set(state => !state)
    }
  }

  function alternate_force() {
    set(state => !state)
  }

  // ======================== //
  // ======== EVENTS ======== //
  // ======================== //
  useChange(() => {
    return onChangeCallback?.(state)
  }, [state])

  // ======================== //
  // ======== PUBLIC ======== //
  // ======================== //
  const toogle = {
    state,
    set,

    isInitialValue,
    isOn,
    isOff,
    isNull,
    hasValue,
    isDisable,

    reset,
    toNull,
    turnOn,
    turnOff,

    alternate,
    alternate_force,
  }

  return { toogle, ...toogle }
}
