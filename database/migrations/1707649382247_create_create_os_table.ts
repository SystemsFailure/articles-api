import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'os'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('ip_address').notNullable()
      table.string('user_agent').notNullable()
      table.string('language').notNullable()
      table.string('platform').notNullable()
      table.string('browser_name').notNullable()
      table.string('browser_version').notNullable()
      table.string('device_name').notNullable()
      table.string('device_type').notNullable()
      table.string('device_vendor').notNullable()
      table.boolean('is_bot').defaultTo(false).notNullable()
      table.string('referring_url')
      table.string('country')
      table.string('region')
      table.string('city')
      table.double('longitude')
      table.double('latitude')
      table.string('connection_type')
      table.string('isp')
      table.timestamp('created_at').defaultTo(this.now()).notNullable()
      table.timestamp('updated_at').defaultTo(this.now()).notNullable()
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

/**
 * "\"1. id: number - уникальный идентификатор записи\n
2. ip_address: string - IP-адрес клиента\n
3. user_agent: string - User Agent браузера или приложения\n
4. language: string - Преференциальный язык клиента\n
5. platform: string - Операционная система клиента\n
6. browser_name: string - Название браузера клиента\n
7. browser_version: string - Версия браузера клиента\n
8. device_name: string - Название устройства клиента\n
9. device_type: string - Тип устройства клиента (например, Мобильное устройство, ПК)\n
10. device_vendor: string - Производитель устройства клиента\n
11. is_bot: boolean - Флаг, указывающий, является ли клиент ботом\n
12. referring_url: string - URL источника, с которого был совершен запрос\n
13. country: string - Страна клиента\n
14. region: string - Регион клиента\n
15. city: string - Город клиента\n
16. longitude: number - Долгота местоположения клиента\n
17. latitude: number - Широта местоположения клиента\n
18. connection_type: string - Тип соединения клиента (например, проводное, беспроводное)\n
19. isp: string - Провайдер интернет-услуг клиента\n
20. created_at: timestamp - Дата и время создания записи\n
21. updated_at: timestamp - Дата и время последнего обновления записи\n
 */