import { BaseSchema } from '@adonisjs/lucid/schema'

// enum Priority {
//   Low = "low",
//   Medium = "medium",
//   High = "high"
// }

// enum Status {
//   Delivered = "delivered",
//   Undelivered = "undelivered",
//   Queued = "queued"
// }

export default class extends BaseSchema {
  protected tableName = 'messages'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('sender_id').unsigned().notNullable()
      table.integer('receiver_id').unsigned().notNullable()
      table.text('message').notNullable()
      table.dateTime('date_read').nullable()
      table.boolean('is_read').defaultTo(false)
      table.boolean('is_deleted').defaultTo(false)
      table.boolean('is_archived').defaultTo(false)
      table.boolean('is_important').defaultTo(false)
      table.string('subject').nullable()
      table.string('attachment').nullable()
      table.enum('priority', ['low', 'medium', 'high']).defaultTo('medium')
      table.string('category').notNullable()
      table.string('language').notNullable()
      table.enum('status', ['delivered', 'undelivered', 'queued']).defaultTo('queued')
      table.boolean('is_draft').defaultTo(false)
      table.boolean('is_flagged').defaultTo(false)
      table.boolean('is_spam').defaultTo(false)
      table.integer('thread_id').unsigned().nullable()
      table.boolean('is')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

/**
 * 1. id - идентификатор сообщения
2. sender_id - идентификатор отправителя сообщения
3. receiver_id - идентификатор получателя сообщения
4. message - текст сообщения
5. date_sent - дата и время отправки сообщения
6. date_read - дата и время прочтения сообщения
7. is_read - указатель, прочитано ли сообщение получателем
8. is_deleted - указатель, удалено ли сообщение отправителем или получателем
9. is_archived - указатель, архивировано ли сообщение отправителем или получателем
10. is_important - указатель, является ли сообщение важным
11. subject - тема сообщения
12. attachment - ссылка или путь к прикрепленному файлу
13. priority - приоритет сообщения
14. category - категория сообщения (например, личное, работа, уведомление и т.д.)
15. language - язык сообщения
16. status - статус сообщения (например, доставлено, не доставлено, в очереди и т.д.)
17. is_draft - указатель, является ли сообщение черновиком
18. is_flagged - указатель, помечено ли сообщение как важное/флажок
19. is_spam - указатель, является ли сообщение спамом
20. thread_id - идентификатор нити сообщений, если сообщение является частью дискуссии
 */