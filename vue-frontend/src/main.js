import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'
import Home from './views/Home.vue'
import Books from './components/Books.vue';
import Authors from './components/Authors.vue';
import AuthorsNew from './components/AuthorsNew.vue';
import BooksNew from './components/BooksNew.vue';
import 'milligram/dist/milligram.min.css'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        name: 'authors',
        path: 'authors',
        component: Authors,
      },
      {
        name: 'authors-new',
        path: 'authors-new',
        component: AuthorsNew,
      },
      {
        name: 'books',
        path: 'books',
        component: Books,
      },
      {
        name: 'books-new',
        path: 'books-new',
        component: BooksNew,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
