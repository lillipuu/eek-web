import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BookAuthors extends BaseSchema {
  protected tableName = 'author_book'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('book_id').unsigned().references('books.id').onDelete('CASCADE')
      table.integer('author_id').unsigned().references('authors.id').onDelete('CASCADE')
      table.unique(['book_id', 'author_id'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
