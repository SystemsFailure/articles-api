import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.boolean('author').nullable().defaultTo(false)
      table.boolean('admin').nullable().defaultTo(false)
      table.string('role').notNullable().defaultTo('customer')
      table.boolean('active').nullable().defaultTo(true)
      table.boolean('verified').nullable().defaultTo(false)
      table.boolean('banned').nullable().defaultTo(false)
      table.boolean('deleted').nullable().defaultTo(false)
      table.string('avatar').nullable()
      table.string('cover').nullable()
      table.string('bio').nullable()
      table.string('location').nullable()
      table.string('website').nullable()
      table.string('facebook').nullable()
      table.string('twitter').nullable()
      table.string('instagram').nullable()
      table.string('linkedin').nullable()
      table.string('youtube').nullable()
      table.string('pinterest').nullable()
      table.string('google').nullable()
      table.string('github').nullable()
      table.string('medium').nullable()
      table.string('telegram').nullable()
      table.string('reddit').nullable()
      table.string('tumblr').nullable()
      table.integer('article_id').unsigned().references('id').inTable('articles').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('author')
      table.dropColumn('admin')
      table.dropColumn('role')
      table.dropColumn('active')
      table.dropColumn('verified')
      table.dropColumn('banned')
      table.dropColumn('deleted')
      table.dropColumn('avatar')
      table.dropColumn('cover')
      table.dropColumn('bio')
      table.dropColumn('location')
      table.dropColumn('website')
      table.dropColumn('facebook')
      table.dropColumn('twitter')
      table.dropColumn('instagram')
      table.dropColumn('linkedin')
      table.dropColumn('youtube')
      table.dropColumn('pinterest')
      table.dropColumn('google')
      table.dropColumn('github')
      table.dropColumn('medium')
      table.dropColumn('telegram')
      table.dropColumn('reddit')
      table.dropColumn('tumblr')
      table.dropColumn('article_id')
    })
  }
}