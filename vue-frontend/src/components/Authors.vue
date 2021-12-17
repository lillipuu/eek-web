<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="author in authors" :key="author.id">
          <td>{{ author.name }}</td>
          <td>{{ author.age }}</td>
          <td>{{ author.gender == 'F' ? 'Female' : 'Male' }}</td>
          <td><button class="delete" @click.prevent="deleteAuthor(author.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Authors',
  data() {
    return {
      authors: []
    }
  },
  created() {
    axios.get(`http://localhost:3333/authors`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.authors = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    deleteAuthor(id) {
      const authorsTemp = [...this.authors];
      axios.delete(`http://localhost:3333/authors/${id}`)
        .then(() => {
          this.authors = authorsTemp.filter(author => author.id !== id)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style>
.delete {
  background-color: tomato;
  border-color: tomato;
  cursor: pointer;
}

</style>
