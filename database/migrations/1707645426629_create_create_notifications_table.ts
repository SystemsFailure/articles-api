import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'notifications'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('message').notNullable()
      table.boolean('read').defaultTo(false)
      table.string('type').notNullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now()).notNullable()
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now()).notNullable()
      table.timestamp('deleted_at', { useTz: true }).nullable()
      table.integer('sender_id').unsigned().nullable()
      table.json('data').nullable()
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE')

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

/**
 * 1. id: number - уникальный идентификатор уведомления
  2. userId: number - идентификатор пользователя, который получит уведомление
  3. message: string - текст уведомления
  4. read: boolean - флаг, указывающий, прочитано ли уведомление пользователем
  5. type: string - тип уведомления (например, "системное", "личное" и т. д.)
  6. createdAt: Date - дата и время создания уведомления
  7. updatedAt: Date - дата и время последнего обновления уведомления
  8. deletedAt: Date | null - дата и время удаления уведомления (null, если уведомление не было удалено)
  9. senderId: number - идентификатор отправителя уведомления (если есть)
  10. data: object - дополнительные данные уведомления в виде объекта (например, с информацией о событии, на которое уведомление отправлено)
 */