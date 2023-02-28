import { env } from '~/src/global'
import { Cloudinary } from '~/src/libs/packages'

// prettier-ignore
export const client = Cloudinary.config({
    cloud_name: env().CLOUDINARY_CLOUD_NAME,
    api_key:    env().CLOUDINARY_KEY_PUBLIC,
    api_secret: env().CLOUDINARY_KEY_PRIVATE,
    secure:     true,
})
