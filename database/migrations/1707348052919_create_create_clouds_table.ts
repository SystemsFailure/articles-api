import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clouds'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('provider').notNullable()
      table.string('region').notNullable()
      table.string('access_key').notNullable()
      table.string('secret_key').notNullable()
      table.timestamp('created_at').defaultTo(this.now()).notNullable()
      table.timestamp('updated_at').defaultTo(this.now()).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

/**
 * "\"1. id: number - уникальный идентификатор облачного хранилища\n
2. name: string - название облачного хранилища\n
3. provider: string - провайдер облачного хранилища (например, AWS, Google Cloud, Azure)\n
4. region: string - регион облачного хранилища\n
5. access_key: string - ключ доступа к облачному хранилищу\n
6. secret_key: string - секретный ключ доступа к облачному хранилищу\n
7. created_at: timestamp - дата и время создания облачного хранилища\n
8. updated_at: timestamp - дата и время последнего обновления облачного хранилища\n\n
 */