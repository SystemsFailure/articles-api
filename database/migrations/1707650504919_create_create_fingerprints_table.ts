import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'fingerprints'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE')

      table.string('browser_name').nullable()
      table.string('browser_version').nullable()
      table.string('operating_system').nullable()
      table.enum('device_type', ['computer', 'smartphone', 'tablet']).nullable()
      table.string('screen_resolution').nullable()
      table.string('user_agent').nullable()
      table.string('ip_address').nullable()
      table.string('mac_address').nullable()
      table.string('device_id').nullable()
      table.boolean('cookies_enabled').nullable()
      table.boolean('javascript_enabled').nullable()
      table.integer('timezone_offset').nullable()
      table.string('language').nullable()
      table.boolean('is_mobile').nullable()
      table.boolean('is_tablet').nullable()
      table.boolean('is_desktop').nullable()
      table.boolean('is_bot').nullable()
      table.string('fingerprint_hash').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

/**
 * 1. id (уникальный идентификатор записи)
2. user_id (идентификатор пользователя)
3. browser_name (название браузера)
4. browser_version (версия браузера)
5. operating_system (операционная система)
6. device_type (тип устройства, например, компьютер, смартфон, планшет)
7. screen_resolution (разрешение экрана)
8. user_agent (user agent браузера)
9. ip_address (IP-адрес клиента)
10. mac_address (MAC-адрес клиента)
11. device_id (идентификатор устройства клиента)
12. cookies_enabled (включены ли cookies)
13. javascript_enabled (включен ли JavaScript)
14. timezone_offset (смещение часового пояса)
15. language (язык клиента)
16. is_mobile (является ли устройство мобильным)
17. is_tablet (является ли устройство планшетом)
18. is_desktop (является ли устройство компьютером)
19. is_bot (является ли клиент ботом)
20. fingerprint_hash (хэш отпечатка для сравнения и аутентификации)
 */