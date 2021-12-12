<template>
  <div>
    <li v-for="book in books" :key="book.id">
      <a href="">{{ book.title }}</a>
    </li>
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
  }
}
</script>

<style>

</style>
