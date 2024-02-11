import { DateTime } from 'luxon'
import { withAuthFinder } from '@adonisjs/auth'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import Article from '#models/article'
import type { HasMany } from '@adonisjs/lucid/types/relations'


const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column()
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  // Новые поля
  @column()
  declare author: boolean | null

  @column()
  declare admin: boolean | null

  @column()
  declare role: string

  @column()
  declare active: boolean | null

  @column()
  declare verified: boolean | null

  @column()
  declare banned: boolean | null

  @column()
  declare deleted: boolean | null

  @column()
  declare avatar: string | null

  @column()
  declare cover: string | null

  @column()
  declare bio: string | null

  @column()
  declare location: string | null

  @column()
  declare website: string | null

  @column()
  declare facebook: string | null

  @column()
  declare twitter: string | null

  @column()
  declare instagram: string | null

  @column()
  declare linkedin: string | null

  @column()
  declare youtube: string | null

  @column()
  declare pinterest: string | null

  @column()
  declare google: string | null

  @column()
  declare github: string | null

  @column()
  declare medium: string | null

  @column()
  declare telegram: string | null

  @column()
  declare reddit: string | null

  @column()
  declare tumblr: string | null

  @column()
  declare articleId: number | null

  // Определение отношения к модели Article
  @hasMany(() => Article)
  declare posts: HasMany<typeof Article>

  static accessTokens = DbAccessTokensProvider.forModel(User, {
    expiresIn: '30 days',
    prefix: 'oat_',
    table: 'auth_access_tokens',
    type: 'auth_token',
    tokenSecretLength: 40,
  })
}
