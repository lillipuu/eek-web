import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Author from './Author'

export default class Book extends BaseModel {
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
  public title: string

  @column()
  public publisher: string

  @column()
  public price: number

  @column()
  public year: number

  @manyToMany(() => Author)
  public authors: ManyToMany<typeof Author>
}
