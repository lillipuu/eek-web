import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { BookViewed } from './messages';
import { ApiService } from 'shared/services/apiService';

interface Book {
  title: string;
  publisher: string;
  price: string;
  year: string;
  // authors: Author[];
}

@inject(ApiService, EventAggregator)
export class BookDetail {
  routeConfig;
  book: Book;

  constructor(private api: ApiService, private ea: EventAggregator) { }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;

    return this.api.get(`/books/${params.id}`).then(book => {
      this.book = <Book>book;
      this.routeConfig.navModel.setTitle(this.book.title);
      this.ea.publish(new BookViewed(this.book));
    });
  }
}
