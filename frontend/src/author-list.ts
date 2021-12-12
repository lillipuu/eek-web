import { EventAggregator } from 'aurelia-event-aggregator';
import { AuthorViewed } from './messages';
import { inject } from 'aurelia-framework';
import { ApiService } from 'shared/services/apiService';

@inject(ApiService, EventAggregator)
export class AuthorList {
  authorlist;
  selectedId = 0;

  constructor(private api: ApiService, ea: EventAggregator) {
    ea.subscribe(AuthorViewed, msg => this.select(msg.author));
  }

  created() {
    this.api.get('/authors').then(authors => this.authorlist = authors);
  }

  select(author) {
    this.selectedId = author.id;
    return true;
  }
}
