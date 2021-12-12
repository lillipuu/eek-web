import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from 'App/Models/Book';

export default class BooksController {
  public async index({}: HttpContextContract) {
    const books = await Book.query().preload('authors')
    const booksJSON = books.map((book) => book.serialize())

    return booksJSON
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
