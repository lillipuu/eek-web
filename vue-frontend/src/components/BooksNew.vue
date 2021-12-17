<template>
  <div class="authors-new row">
    <div class="column column-50">
      <form>
        <fieldset>
          <label for="titleField">Title</label>
          <input v-model="title" type="text" placeholder="" id="titleField">
          <label for="publisherField">Publisher</label>
          <input v-model="publisher" type="text" placeholder="" id="publisherField">
          <label for="priceField">Price</label>
          <input v-model="price" type="number" placeholder="" id="priceField">
          <label for="priceField">Year</label>
          <input v-model="year" type="number" placeholder="" id="yearField">

          <label for="authorsField">Author(s)</label>
          <select v-model="authors" id="authorsField" multiple>
            <option v-for="option in authorsOptions" :value="option.id" :key="option.id">{{ option.name }}</option>
          </select>

          <input @click.prevent="addNewNook()" class="button-primary" type="submit" value="Add Book">
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BooksNew',
  data() {
    return {
      title: '',
      publisher: '',
      price: null,
      year: null,
      authors: [],
      authorsOptions: []
    }
  },
  mounted() {
    this.getAuthors()
  },
  methods: {
    getAuthors() {
      axios.get(`http://localhost:3333/authors`)
        .then(response => {
          this.authorsOptions = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    authorIds(authors) {
      const ids = [];
      authors.map(author => ids.push(author.id))
      return ids
    },
    addNewNook() {
      const book = {
        title: this.title,
        publisher: this.publisher,
        price: this.price,
        year: this.year,
        authors: this.authors
      };
      axios.post(`http://localhost:3333/books`, book)
      .then(response => {
        if (201 == response.status) {
          this.$router.push('books')
        }
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>

.authors-new {
  display: flex;
  justify-content: space-around;
}

</style>
