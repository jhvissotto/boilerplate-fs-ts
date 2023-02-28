// libs
import { cookie } from '~/src/libs/extensions/next'
// local
import { config } from '.'

//
// prettier-ignore
module Params {
  export type Has   = Parameters<typeof cookie.has>
  export type Hass  = Parameters<typeof cookie.hass>
  
  export type Get   = Parameters<typeof cookie.get>
  export type Gets  = Parameters<typeof cookie.gets>

  export type Set   = Parameters<typeof cookie.set>
  export type Sets  = Parameters<typeof cookie.sets>
  
  export type Del   = Parameters<typeof cookie.del>
  export type Dels  = Parameters<typeof cookie.dels>
}

//
//
export function has(...[key, opts = config()]: Params.Has) {
  return cookie.has(key, { ...opts })
}

export function hass(...[key, opts = config()]: Params.Hass) {
  return cookie.hass(key, { ...opts })
}

//
//
export function get(...[key, opts = config()]: Params.Get) {
  return cookie.get(key, { ...opts })
}

export function gets(...[opts = config()]: Params.Gets) {
  return cookie.gets({ ...opts })
}

//
//
export function set(...[key, data, opts = config()]: Params.Set) {
  return cookie.set(key, data, { ...opts })
}

export function sets(...[key, data, opts = config()]: Params.Sets) {
  return cookie.sets(key, data, { ...opts })
}

//
//
export function del(...[key, opts = config()]: Params.Del) {
  return cookie.del(key, { ...opts })
}

export function dels(...[key, opts = config()]: Params.Dels) {
  return cookie.dels(key, { ...opts })
}
