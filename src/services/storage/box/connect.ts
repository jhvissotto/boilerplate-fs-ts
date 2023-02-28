import { Box } from '~/src/libs/packages'

// prettier-ignore
export function connect(keys) {

    const instance  = Box.getPreconfiguredInstance(keys)
    const client    = instance.getAppAuthClient('enterprise')

    return { client }
}
