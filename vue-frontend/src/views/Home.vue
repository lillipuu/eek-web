<template>
  <h1>EEK Web Application</h1>
  <div class="container">
    <div class="row">
      <div class="column">
        <button @click="$router.push('books')">Books</button>
        <button @click="$router.push('authors')">Authors</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
button {
  margin: 0 1em;
}

</style>
