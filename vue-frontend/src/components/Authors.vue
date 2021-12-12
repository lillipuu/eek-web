<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="author in authors" :key="author.id">
          <td>{{ author.name }}</td>
          <td>{{ author.age }}</td>
          <td>{{ author.gender == 'F' ? 'Female' : 'Male' }}</td>
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
  }
}
</script>

<style>

</style>
