import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Article from '#models/article'


export default class Tag extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare name: string

    @column()
    declare slug: string

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @manyToMany(() => Article, {
        pivotTable: 'article_tag',
        pivotForeignKey: 'tag_id',
        pivotRelatedForeignKey: 'article_id',
    })
    declare articles: ManyToMany<typeof Article>
}