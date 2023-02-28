import { env } from '~/src/global'
import { Knex } from '~/src/libs/packages'

export function init_knex(opts?: { log_onQuery?: boolean }) {
  //
  // prettier-ignore
  const knex = Knex.create({
    client: 'mysql2',
    connection: {
      user:     env().DATABASE_USER,
      password: env().DATABASE_PASS,
      host:     env().DATABASE_HOST,
      port:     env().DATABASE_PORT,
      database: env().DATABASE_NAME,
    },
    debug:      env().DATABASE_DEBUG,
    // useNullAsDefault: true,
  })

  knex.on('connection', () => {
    console.log('>> Database connected')
  })

  knex.on('start', builder => {
    console.log('>> onStart:', builder.toQuery())
  })

  knex.on('query', query => {
    if (opts?.log_onQuery) console.log('>> onQuery', query)
  })

  return { knex }
}
