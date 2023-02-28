export type Pows = '_' | 'K' | 'M' | 'B' | 'T'

// prettier-ignore
export const pows = {
    '_': { base: 10^0, sfx: ''  },
    'K': { base: 10^1, sfx: 'K' },
    'M': { base: 10^2, sfx: 'M' },
    'B': { base: 10^3, sfx: 'B' },
    'T': { base: 10^4, sfx: 'T' },
}
