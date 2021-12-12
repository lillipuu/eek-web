import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Books extends BaseSchema {
  protected tableName = 'books'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.string('title').notNullable()
      table.string('publisher').notNullable()
      table.float('price').notNullable()
      table.integer('year').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
