import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
// import Article from './Article'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare slug: string

  @column()
  declare description: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

//   @hasMany(() => Article)
//   declare articles: HasMany<typeof Article>
}