import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'categories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title').notNullable()
      table.string('slug').notNullable().unique()
      table.text('description').notNullable()
      table.timestamp('created_at').defaultTo(this.now()).notNullable()
      table.timestamp('updated_at').defaultTo(this.now()).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

/**
 * "1. id: number - уникальный идентификатор категории
2. title: string - заголовок категории
3. slug: string - уникальный идентификатор категории в URL
4. description: string - описание категории
5. created_at: timestamp - дата и время создания категории
6. updated_at: timestamp - дата и время последнего обновления категории
 */