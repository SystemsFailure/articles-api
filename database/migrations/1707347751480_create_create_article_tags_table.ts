import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tags'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('slug').notNullable().unique()
      table.timestamp('created_at').defaultTo(this.now()).notNullable()
      table.timestamp('updated_at').defaultTo(this.now()).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

/**
 * "1. id: number - уникальный идентификатор тега
2. name: string - название тега
3. slug: string - уникальный идентификатор тега в URL
4. created_at: timestamp - дата и время создания тега
5. updated_at: timestamp - дата и время последнего обновления тега
 */