import { Router, RouterConfiguration } from 'aurelia-router';
import { inject, PLATFORM } from 'aurelia-framework';
import { ApiService } from 'shared/services/apiService';
@inject(ApiService)
export class App {
  router: Router;
  api: ApiService;

  constructor(api: ApiService) {
    this.api = api;
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'EEK Web';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      {
        route: ['', 'home'],
        name: 'home',
        moduleId: PLATFORM.moduleName('components/home/home-component'),
      },
      {
        route: 'books',
        moduleId: PLATFORM.moduleName('book-list'),
        title: 'Books',
      },
      {
        route: 'books/:id',
        moduleId: PLATFORM.moduleName('book-detail'),
        title: 'Book`s detail',
      },
      {
        route: 'authors',
        moduleId: PLATFORM.moduleName('author-list'),
        title: 'Authors',
      },
      {
        route: 'authors/:id',
        moduleId: PLATFORM.moduleName('author-detail'),
        title: 'Author`s detail',
      },
    ]);

    this.router = router;
  }
}
