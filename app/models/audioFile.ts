import { BaseModel, belongsTo, column } from "@adonisjs/lucid/orm";
import type { BelongsTo } from "@adonisjs/lucid/types/relations";
import { DateTime } from "luxon";
import Cloud from "./cloud.js";


export default class AudioFile extends BaseModel {
    @column({ isPrimary: true })
    declare id: number;

    @column()
    declare article_id: number

    @column()
    declare cloud_id: number

    @column()
    declare title: string;

    @column()
    declare duration: number;

    @column()
    declare format: string;

    @column()
    declare size: number;

    @column()
    declare path: string;

    @column()
    declare created_at: DateTime;

    @column()
    declare updated_at: DateTime;

    @column()
    declare deleted_at: DateTime | null;

    @belongsTo(() => Cloud)
    declare cloud: BelongsTo<typeof Cloud>
}