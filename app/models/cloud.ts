import { BaseModel, column } from "@adonisjs/lucid/orm";
import { DateTime } from "luxon";

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
}