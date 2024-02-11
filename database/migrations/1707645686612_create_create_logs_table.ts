import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'logs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.string('event_type').notNullable()
      table.string('event_description').nullable()
      table.dateTime('event_timestamp').notNullable()
      table.string('ip_address').notNullable()
      table.string('user_agent').notNullable()
      table.string('route').notNullable()
      table.text('request_body').nullable()
      table.integer('response_code').nullable()
      table.text('response_body').nullable()
      table.dateTime('created_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

/**
 * "1. id: number (primary key)
2. user_id: number (идентификатор пользователя, связанного с событием)
3. event_type: string (тип события, например, 'нажатие кнопки' или 'удаление комментария')
4. event_description: string (описание события)
5. event_timestamp: Date (время события)
6. ip_address: string (IP-адрес пользователя)
7. user_agent: string (информация о браузере и устройстве пользователя)
8. route: string (URL маршрута, на котором произошло событие)
9. request_body: string (тело запроса пользователя)
10. response_code: number (код HTTP-ответа сервера)
11. response_body: string (тело ответа сервера)
12. created_at: Date (дата создания записи)
 */