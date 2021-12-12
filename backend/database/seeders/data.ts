import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Author from 'App/Models/Author'
import Book from 'App/Models/Book'

const authorsList = [
  {
    name: 'Alice Walker',
    age: 77,
    gender: 'F',
  },
  {
    name: 'Marilynne Robinson',
    age: 78,
    gender: 'F',
  },
  {
    name: 'Johathan Franzen',
    age: 62,
    gender: 'M',
  },
  {
    name: 'Michael Chabon',
    age: 58,
    gender: 'M',
  },
  {
    name: 'Bret Easton Ellis',
    age: 57,
    gender: 'M',
  },
]

const booksList = [
  {
    title: 'The Color Purple',
    publisher: 'Harcourt Brace Jovanovich',
    price: 16.10,
    year: 1982,
  },
  {
    title: 'Mother Country: Britain, the Welfare State, and Nuclear Pollution',
    publisher: 'FSG',
    price: 19.90,
    year: 1989,
  },
  {
    title: 'Freedom',
    publisher: 'Farrar, Straus and Giroux',
    price: 11.40,
    year: 2010,
  },
  {
    title: 'Moonglow',
    publisher: 'Harper',
    price: 20.00,
    year: 2016,
  },
  {
    title: 'Lunar park',
    publisher: 'Knopf',
    price: 25.90,
    year: 2015,
  },
]

export default class DataSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    const authors = await Author.createMany(authorsList)

    authors.map((author) => {
      author.save()
    })

    const books = await Book.createMany(booksList)

    for (let i = 0; i < books.length; i++) {
      await books[i].related('authors').attach([authors[i].id])
    }

  }
}
