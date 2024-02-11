import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'image_files'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('article_id').unsigned().notNullable().references('id').inTable('articles').onDelete('CASCADE')
      table.string('title').notNullable()
      table.text('content').notNullable()
      table.integer('size').notNullable()
      table.string('format').notNullable()
      table.string('path').notNullable()
      
      table.index(['article_id'])

      table.timestamp('created_at').notNullable().defaultTo(this.now())
      table.timestamp('updated_at').notNullable().defaultTo(this.now())
      table.timestamp('deleted_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

/**
 * 1. `id` - уникальный идентификатор текстового файла
2. `article_id` - идентификатор статьи, к которой относится текстовый файл
3. `title` - название текстового файла
4. `content` - содержимое текстового файла
5. `size` - размер текстового файла
6. `format` - формат текстового файла
7. `path` - путь к файлу на сервере
8. `created_at` - дата и время создания текстового файла
9. `updated_at` - дата и время последнего обновления текстового файла
10. `deleted_at` - дата и время удаления текстового файла (если есть)
 */