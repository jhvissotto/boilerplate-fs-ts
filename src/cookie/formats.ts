// libs
import { z } from '~/src/libs/helpers/schema'
// app
import { Format } from '~/src/common/types'

export const formats = {
  testA: {
    name: 'testA',
    zPayload: z.object({
      welcomeA: z.string(),
    }),
  },

  testB: {
    name: 'testB',
    zPayload: z.object({
      welcomeB: z.string(),
    }),
  },
}
