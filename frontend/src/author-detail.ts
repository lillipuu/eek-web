import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { AuthorViewed } from './messages';
import { ApiService } from 'shared/services/apiService';

interface Author {
  name: string;
  age: string;
  gender: string;
  // authors: Author[];
}

@inject(ApiService, EventAggregator)
export class AuthorDetail {
  routeConfig;
  author: Author;

  constructor(private api: ApiService, private ea: EventAggregator) { }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;

    return this.api.get(`/author/${params.id}`).then(author => {
      this.author = <Author>author;
      this.routeConfig.navModel.setTitle(this.author.name);
      this.ea.publish(new AuthorViewed(this.author));
    });
  }
}
