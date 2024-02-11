import Tag from '#models/tag'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    const tagsData = [
      { name: 'Технологии', slug: 'технологии' },
      { name: 'Искусство', slug: 'искусство' },
      // Добавьте остальные данные для тегов
    ]

    await Tag.createMany(tagsData)
  }
}