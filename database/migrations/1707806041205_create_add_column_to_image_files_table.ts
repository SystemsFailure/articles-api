import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'image_files'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('cloud_id').unsigned().references('id').inTable('clouds').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('cloud_id')
    })
  }
}