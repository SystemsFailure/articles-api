import { BaseModel, belongsTo, column } from "@adonisjs/lucid/orm";
import { DateTime } from "luxon";
import VideoFile from "./videoFile.js";
import type { BelongsTo } from "@adonisjs/lucid/types/relations";

export default class Cloud extends BaseModel {
    @column({ isPrimary: true })
    declare id: number;

    @column()
    declare name: string;

    @column()
    declare provider: string;

    @column()
    declare region: string;

    @column()
    declare access_key: string;

    // secret key
    @column()
    declare secret_key: string;

    // timestamps atCreated, atUpdated, atDeleted
    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime;
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime;

    @belongsTo(() => VideoFile, { foreignKey: 'cloud_id' })
    declare vidoFile: BelongsTo<typeof VideoFile>
}