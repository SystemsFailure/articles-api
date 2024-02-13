import { BaseModel, column, manyToMany, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { ManyToMany, BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Tag from '#models/tag'
import Category from './category.js'
import TextFile from './textFile.js'
import ImageFile from './imageFile.js'
import VideoFile from './videoFile.js'
import Cloud from './cloud.js'

export default class Article extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare cloud_id: number

    @column()
    declare title: string

    @column()
    declare content: string

    @column()
    declare authorId: number

    @column()
    declare publishedAt: Date

    @column()
    declare mode: boolean

    @column()
    declare viewsCount: number

    @column()
    declare likesCount: number

    @column()
    declare forksCount: number

    @column()
    declare isFeatured: boolean

    @column()
    declare isArchived: boolean

    @column()
    declare isDeleted: boolean

    @column()
    declare isPrivate: boolean

    @column()
    declare isModerated: boolean

    @column()
    declare imageUrl: string

    @column()
    declare seoTitle: string

    @column()
    declare seoDescription: string

    @column()
    declare seoKeywords: string

    @column()
    declare metaTitle: string

    @column()
    declare metaDescription: string

    @column()
    declare metaKeywords: string

    @column()
    declare sourceUrl: string

    @column()
    declare sourceName: string
    
    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @manyToMany(() => Tag, {
        pivotTable: 'article_tag',
        pivotForeignKey: 'article_id',
        pivotRelatedForeignKey: 'tag_id',
    })
    declare tags: ManyToMany<typeof Tag>

    @belongsTo(() => Category)
    declare category: BelongsTo<typeof Category>

    @hasMany(() => TextFile, { foreignKey: 'article_id' })
    declare textFiles: HasMany<typeof TextFile>

    @hasMany(() => ImageFile, { foreignKey: 'article_id' })
    declare iamgeFiles: HasMany<typeof ImageFile>

    @hasMany(() => VideoFile, { foreignKey: 'article_id' })
    declare videoFiles: HasMany<typeof VideoFile>

    @belongsTo(() => Cloud)
    declare cloud: BelongsTo<typeof Cloud>
}