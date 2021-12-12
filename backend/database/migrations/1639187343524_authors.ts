import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Authors extends BaseSchema {
  protected tableName = 'authors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.string('name').notNullable()
      table.integer('age').notNullable()
      table.string('gender').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
