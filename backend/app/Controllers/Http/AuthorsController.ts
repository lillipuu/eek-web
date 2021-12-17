import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Author from './../../Models/Author'

export default class AuthorsController {
  public async index({}: HttpContextContract) {
    return Database.from('authors')
  }

  public async create({}: HttpContextContract) {}

  public async store(ctx: HttpContextContract) {
    const body = ctx.request.body()

    const author = await Author.create(body)
    author.save()

    return ctx.response.status(201)
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy(ctx: HttpContextContract) {
    const { id } = ctx.request.params();
    const author = await Author.findOrFail(id)
    await author.delete()

    return ctx.response.status(200)
  }
}
