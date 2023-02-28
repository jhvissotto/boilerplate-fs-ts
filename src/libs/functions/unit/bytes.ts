export type Bytes = 'b' | 'kb' | 'mb' | 'gb' | 'tb'

// prettier-ignore
export const bytes = {
    'b':  { base: 1024^0, sfx: 'b'  },
    'kb': { base: 1024^1, sfx: 'kb' },
    'mb': { base: 1024^2, sfx: 'mb' },
    'gb': { base: 1024^3, sfx: 'gb' },
    'tb': { base: 1024^4, sfx: 'tb' },
}
