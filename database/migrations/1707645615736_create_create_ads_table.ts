import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'ads'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('article_id').unsigned().notNullable().references('id').inTable('articles').onDelete('CASCADE')
      table.string('title').notNullable()
      table.text('description').nullable()
      table.string('image_url').nullable()
      table.string('video_url').nullable()
      table.string('cta_url').notNullable()
      table.timestamp('start_date').notNullable()
      table.timestamp('end_date').notNullable()
      table.timestamp('created_at').notNullable().defaultTo(this.now())
      table.timestamp('updated_at').notNullable().defaultTo(this.now())
      table.timestamp('deleted_at').nullable()

      table.index(['article_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

/**1. `id` - уникальный идентификатор рекламы
2. `article_id` - идентификатор статьи, к которой относится реклама
3. `title` - название рекламы
4. `description` - описание рекламы
5. `image_url` - URL изображения для рекламы
6. `video_url` - URL видео для рекламы
7. `cta_url` - URL для клика по рекламе (call-to-action)
8. `start_date` - дата и время начала показа рекламы
9. `end_date` - дата и время окончания показа рекламы
10. `created_at` - дата и время создания рекламы
11. `updated_at` - дата и время последнего обновления рекламы
12. `deleted_at` - дата и время удаления рекламы (если есть)
 */