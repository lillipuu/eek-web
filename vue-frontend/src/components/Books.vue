<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Publisher</th>
          <th>Authors</th>
          <th>Price</th>
          <th>Year</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.title }}</td>
          <td>{{ book.publisher }}</td>
          <td><div v-for="author in book.authors" :key="author.id">{{ author.name }}</div></td>
          <td>{{ book.price }}$</td>
          <td>{{ book.year }}</td>
          <td><button class="delete" @click.prevent="deleteBook(book.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Books',
  data() {
    return {
      books: []
    }
  },
  created() {
    axios.get(`http://localhost:3333/books`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.books = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    deleteBook(id) {
      const booksTemp = [...this.books];
      axios.delete(`http://localhost:3333/books/${id}`)
        .then(() => {
          this.books = booksTemp.filter(book => book.id !== id)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style>

</style>
