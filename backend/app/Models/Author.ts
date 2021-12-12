import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Book from './Book'

export default class Author extends BaseModel {
  public static boot () {
    if (this.booted) {
      return
    }

    super.boot()
  }

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: string

  @column()
  public age: number

  @column()
  public gender: string

  @manyToMany(() => Book)
  public books: ManyToMany<typeof Book>
}
