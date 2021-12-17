<template>
  <div class="authors-new row">
    <div class="column column-50">
      <form>
        <fieldset>
          <label for="nameField">Name</label>
          <input v-model="name" type="text" placeholder="J. K. Rowling" id="nameField">
          <label for="ageField">Age</label>
          <input v-model="age" type="number" placeholder="56" id="ageField">
          <label for="genderField">Gender</label>
          <select v-model="gender" id="genderField">
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>

          <input @click.prevent="addNewAuthor()" class="button-primary" type="submit" value="Add Author">
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AuthorsNew',
  data() {
    return {
      name: '',
      age: null,
      gender: null,
    }
  },
  methods: {
    addNewAuthor() {
      const author = {
        name: this.name,
        age: this.age,
        gender: this.gender,
      };
      axios.post(`http://localhost:3333/authors`, author)
      .then(response => {
        if (201 == response.status) {
          this.$router.push('authors');
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
