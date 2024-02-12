import { BaseModel, belongsTo, column, hasOne } from "@adonisjs/lucid/orm";
import type { BelongsTo, HasOne } from "@adonisjs/lucid/types/relations";
import { DateTime } from "luxon";
import Article from "./article.js";
import Cloud from "./cloud.js";

export enum Status {
    published = 'published',
    noPublished = 'noPublished',
    queued = 'queued',
}


export default class VideoFile extends BaseModel {
    @column({ isPrimary: true })
    declare id: number;

    @column()
    declare article_id: number

    @column()
    declare title: string;

    @column()
    declare file_path: string;

    @column()
    declare file_size: string;

    @column()
    declare file_extension: string;

    @column()
    declare is_published: boolean;

    // json parse, stringify
    @column({
        consume: (value) => JSON.parse(value),
        prepare: (value) => JSON.stringify(value),
    })
    declare meta: any;

    @column()
    declare cloud_id: number;

    @column()
    declare status: Status;

    // timestamps atCreated, atUpdated, atDeleted
    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime;
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime;

    @belongsTo(() => Article, { foreignKey: 'article_id' })
    declare article: BelongsTo<typeof Article>

    @hasOne(() => Cloud)
    declare cloud: HasOne<typeof Cloud>
}