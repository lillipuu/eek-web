import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Author from 'App/Models/Author';
import Book from 'App/Models/Book';

export default class BooksController {
  public async index({}: HttpContextContract) {
    return await Book.query().preload('authors')
  }

  public async create({}: HttpContextContract) {}

  public async store(ctx: HttpContextContract) {
    const body = ctx.request.body()

    console.log(body)
    console.log(body.authors)

    const book = await Book.create(body)
    for (let i = 0; i < body.authors.length; i++) {
      await book.related('authors').attach([body.authors[i]])
    }
    book.save()

    return ctx.response.status(201)
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy(ctx: HttpContextContract) {
    const { id } = ctx.request.params();
    const book = await Book.findOrFail(id)
    await book.delete()

    return ctx.response.status(200)
  }
}
