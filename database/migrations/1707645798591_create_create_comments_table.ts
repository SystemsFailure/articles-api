import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('article_id').references('id').inTable('articles').onDelete('CASCADE')
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.text('content').notNullable()
      table.timestamp('created_at').defaultTo(this.now()).notNullable()
      table.timestamp('updated_at').defaultTo(this.now()).notNullable()
      table.integer('likes_count').unsigned().defaultTo(0)
      table.integer('dislikes_count').unsigned().defaultTo(0)
      table.integer('parent_id').unsigned().nullable()
      table.boolean('is_approved').defaultTo(false)
      table.boolean('is_deleted').defaultTo(false)
      table.integer('reply_count').unsigned().defaultTo(0)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

/**
 * 1. id: number - уникальный идентификатор комментария
2. article_id: number - идентификатор статьи, к которой относится комментарий
3. user_id: number - идентификатор пользователя, который оставил комментарий
4. content: string - содержание комментария
5. created_at: timestamp - дата и время создания комментария
6. updated_at: timestamp - дата и время последнего обновления комментария
7. likes_count: number - количество лайков комментария
8. dislikes_count: number - количество дизлайков комментария
9. parent_id: number - идентификатор родительского комментария (если имеется)
10. is_approved: boolean - флаг, указывающий на то, был ли комментарий одобрен модератором
11. is_deleted: boolean - флаг, указывающий на то, был ли комментарий удален
12. reply_count: number - количество ответов на данный комментарий
 */