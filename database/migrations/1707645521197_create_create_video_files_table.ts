import { BaseSchema } from '@adonisjs/lucid/schema'

// enum Status {
//   published = 'published',
//   noPublished = 'noPublished',
//   queued = 'queued',
// }

export default class extends BaseSchema {
  protected tableName = 'video_files'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('article_id').unsigned().references('id').inTable('articles').onDelete('CASCADE')
      table.string('title').notNullable()
      table.string('file_path').notNullable()
      table.string('file_size').notNullable()
      table.string('file_extension').notNullable()
      table.boolean('is_published').notNullable().defaultTo(false)
      table.json('meta').notNullable().defaultTo(JSON.stringify(''))
      table.integer('cloud_id').unsigned().references('id').inTable('clouds').onDelete('CASCADE')
      table.enum('status', ['published', 'noPublished', 'queued']).defaultTo('queued')

      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

/**
 * 1. `id` - идентификатор видеофайла (integer)
2. `article_id` - идентификатор статьи, к которой относится видеофайл (integer)
3. `title` - заголовок видеофайла (string)
4. `file_path` - путь к файлу видео (string)
5. `file_size` - размер файла видео (string)
6. `file_extension` - расширение файла видео (string)
7. `is_published` - флаг, указывающий, опубликовано ли видео (boolean)
8. `created_at` - дата и время создания записи (timestamp)
9. `updated_at` - дата и время последнего обновления записи (timestamp)
 */