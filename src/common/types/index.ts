import { Z } from '~/src/libs/helpers/schema'

export type Trinary = boolean | null

export type Format = {
  name: string
  zPayload: Z.AnyZodObject
}
