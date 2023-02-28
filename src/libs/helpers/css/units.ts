// https://www.w3schools.com/cssref/css_units.php

export type UNITS = '' | 'px' | 'pt' | 'em' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%'

export const Units = ['', 'px', 'pt', 'em', 'rem', 'vw', 'vh', 'vmin', 'vmax', '%']

// prettier-ignore
export const units = {
  '':   '',
  px:   'px',
  pt:   'pt',
  em:   'em',
  rem:  'rem',
  vw:   'vw',
  vh:   'vh',
  vmin: 'vmin',
  vmax: 'vmax',
  '%':  '%',
} as const
