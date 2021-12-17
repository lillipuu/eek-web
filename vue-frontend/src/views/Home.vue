<template>
  <h1>EEK Web Application</h1>
  <div class="container">
    <div class="row">
      <div class="column">
        <div class="buttons">
          <span class="buttons-left">
            <button @click="changeList('books')">Books</button>
            <button @click="changeList('authors')">Authors</button>
          </span>
          <span v-if="isBookOrAuthorRouteActive" class="buttons-right">
            <button class="button-green" @click="createNew()">New</button>
          </span>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isBookOrAuthorRouteActive: false,
    }
  },
  mounted() {
    this.computeIsBookOrAuthorRouteActive()
  },
  methods: {
    async changeList(routename) {
      await this.$router.push(routename)
      this.computeIsBookOrAuthorRouteActive()
    },
    createNew() {
      switch(this.$route.name) {
        case 'authors':
          this.$router.push('authors-new');
          break;
        case 'books':
          this.$router.push('books-new');
          break;
        default:
          break;
      }
    },
    computeIsBookOrAuthorRouteActive() {
      const match = (routename) => routename === this.$route.name
      this.isBookOrAuthorRouteActive = ['authors', 'books'].some(match)
    },
  }
}
</script>

<style scoped>
.buttons-left > button {
  margin-right: 1em;
}

.buttons {
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
}

.button-green {
  background-color: mediumseagreen;
  border-color: mediumseagreen;
}

</style>
