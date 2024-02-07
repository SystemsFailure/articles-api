import { defineConfig } from '@adonisjs/lucid'
import env from '#start/env'


const dbConfig = defineConfig({
  connection: env.get('DB_CONNECTION', 'pg'),
  connections: {
    pg: {
      client: 'pg',
      connection: {
        host: env.get('PG_HOST'),
        port: 5432,
        user: env.get('PG_USER'),
        password: env.get('PG_PASSWORD'),
        database: env.get('PG_DATABASE'),
      },
      debug: undefined
    },
  },
})

export default dbConfig