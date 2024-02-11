import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'audio_files'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('article_id').unsigned().notNullable().references('id').inTable('articles').onDelete('CASCADE')
      table.string('title').notNullable()
      table.integer('duration').notNullable()
      table.string('format').notNullable()
      table.integer('size').notNullable()
      table.string('path').notNullable()
      table.index(['article_id'])
      
      table.timestamp('deleted_at').nullable()
      table.timestamp('created_at').notNullable().defaultTo(this.now())
      table.timestamp('updated_at').notNullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}


/**
 * 1. id (уникальный идентификатор аудио файла)
2. article_id (идентификатор статьи, к которой относится аудио файл)
3. title (название аудио файла)
4. duration (продолжительность аудио файла)
5. format (формат аудио файла)
6. size (размер аудио файла)
7. path (путь к файлу на сервере)
8. created_at (дата и время создания аудио файла)
9. updated_at (дата и время последнего обновления аудио файла)
10. deleted_at (дата и время удаления аудио файла, если есть)
 */