import { and, nc, or } from '.'

const { log } = console

log('-')
log('' && 'pass')
log(0 && 'pass')
log(NaN && 'pass')
log(false && 'pass')
log(null && 'pass')
log(undefined && 'pass')

log('-')
log(and('', 'pass'))
log(and(0, 'pass'))
log(and(NaN, 'pass'))
log(and(false, 'pass'))
log(and(null, 'pass'))
log(and(undefined, 'pass'))
