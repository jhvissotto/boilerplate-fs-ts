// libs
// import { Initialize } from '~/src/libs/packages/Prisma'
// local
import { config, generated } from '../'

export const db = new generated.db.PrismaClient({
  datasources: { db: { url: config.uri_db } },
})
