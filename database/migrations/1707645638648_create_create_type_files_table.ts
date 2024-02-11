import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'type_files'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('extension').notNullable()
      table.string('icon').notNullable()
      table.boolean('is_active').defaultTo(true)
      table.boolean('is_default').defaultTo(false)
      table.string('description').nullable()
      table.json('allowed_mimetypes').nullable()
      table.dateTime('created_at').notNullable()
      table.dateTime('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

/**
 * 1. id: number (primary key)
2. name: string (название типа файла)
3. extension: string (расширение файла)
4. icon: string (путь к иконке файла)
5. created_at: Date (дата создания записи)
6. updated_at: Date (дата обновления записи)
7. is_active: boolean (показывает, активен ли тип файла или нет)
8. is_default: boolean (показывает, является ли тип файла по умолчанию)
9. description: string (описание типа файла)
10. allowed_mimetypes: string[] (список разрешенных MIME-типов, связанных с данным типом файла)
 */