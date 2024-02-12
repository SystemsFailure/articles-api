import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'articles'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('title').notNullable()
      table.text('content').notNullable()
      table.integer('author_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.timestamp('published_at', { useTz: true }).nullable()
      table.boolean('mode').notNullable()
      table.integer('views_count').unsigned().defaultTo(0)
      table.integer('likes_count').unsigned().defaultTo(0)
      table.integer('forks_count').unsigned().defaultTo(0)
      table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE')
      table.integer('tag_id').unsigned().references('id').inTable('tags').onDelete('CASCADE')
      table.boolean('is_featured').notNullable().defaultTo(false)
      table.boolean('is_archived').notNullable().defaultTo(false)
      table.boolean('is_deleted').notNullable().defaultTo(false)
      table.boolean('is_private').notNullable().defaultTo(false)
      table.boolean('is_moderated').notNullable().defaultTo(false)
      table.string('image_url').nullable()
      table.string('seo_title').nullable()
      table.string('seo_description').nullable()
      table.string('seo_keywords').nullable()
      table.string('meta_title').nullable()
      table.string('meta_description').nullable()
      table.string('meta_keywords').nullable()
      table.string('source_url').nullable()
      table.string('source_name').nullable()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('created_at')
      table.dropColumn('updated_at')
      table.dropColumn('published_at')
      table.dropColumn('mode')
      table.dropColumn('views_count')
      table.dropColumn('likes_count')
      table.dropColumn('forks_count')
      table.dropColumn('category_id')
      table.dropColumn('tag_id')
      table.dropColumn('is_featured')
      table.dropColumn('is_archived')
      table.dropColumn('is_deleted')
      table.dropColumn('is_private')
      table.dropColumn('is_moderated')
      table.dropColumn('image_url')
      table.dropColumn('seo_title')
      table.dropColumn('seo_description')
      table.dropColumn('seo_keywords')
      table.dropColumn('meta_title')
      table.dropColumn('meta_description')
      table.dropColumn('meta_keywords')
      table.dropColumn('source_url')
      table.dropColumn('source_name')
      table.dropColumn('author_id')
      table.dropColumn('title')
      table.dropColumn('content')
    })
  }
}

/**
 * 1. `id` - идентификатор статьи (integer)
2. `title` - заголовок статьи (string)
3. `content` - содержимое статьи (text)
4. `author_id` - идентификатор автора статьи (integer)
5. `created_at` - дата и время создания статьи (timestamp)
6. `updated_at` - дата и время последнего обновления статьи (timestamp)
7. `published_at` - дата и время публикации статьи (timestamp)
8. `mode` - режим статьи (boolean)
9. `views_count` - количество просмотров статьи (integer)
10. `likes_count` - количество лайков статьи (integer)
11. `forks_count` - количество отсылок на статью (integer)
12. `category_id` - идентификатор категории статьи (integer)
13. `tag_id` - идентификатор тега статьи (integer)
14. `is_featured` - флаг, указывающий на то, является ли статья рекомендуемой (boolean)
15. `is_archived` - флаг, указывающий на то, является ли статья архивированной (boolean)
16. `is_deleted` - флаг, указывающий на то, является ли статья удаленной (boolean)
17. `image_url` - ссылка на изображение, связанное со статьей (string)
18. `seo_title` - SEO-заголовок статьи (string)
19. `seo_description` - SEO-описание статьи (string)
20. `seo_keywords` - SEO-ключевые слова статьи (string)
21. `meta_title` - мета-заголовок статьи (string)
22. `meta_description` - мета-описание статьи (string)
23. `meta_keywords` - мета-ключевые слова статьи (string)
24. `source_url` - ссылка на источник, если статья была взята из другого источника (string)
25. `source_name` - название источника, если статья была взята из другого источника (string)
 */