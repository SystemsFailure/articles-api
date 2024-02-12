import { BaseModel, belongsTo, column } from "@adonisjs/lucid/orm";
import { DateTime } from "luxon";
import Article from "./article.js";
import type { BelongsTo } from "@adonisjs/lucid/types/relations";


export default class TextFile extends BaseModel {
    @column({ isPrimary: true })
    declare id: number;

    @column()
    declare article_id: number
    
    @column()
    declare title: string;

    @column()
    declare content: string;

    @column()
    declare size: number;

    @column()
    declare format: string;

    @column()
    declare path: string;

    // timestamps atCreated, atUpdated, atDeleted
    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime;
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime;
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare deletedAt: DateTime | null;

    // Связи
    @belongsTo(() => Article, { foreignKey: 'article_id' })
    declare article: BelongsTo<typeof Article>
}