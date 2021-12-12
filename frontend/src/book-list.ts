import {EventAggregator} from 'aurelia-event-aggregator';
import { BookViewed } from './messages';
import {inject} from 'aurelia-framework';
import { ApiService } from 'shared/services/apiService';

@inject(ApiService, EventAggregator)
export class BookList {
  booklist;
  selectedId = 0;

  constructor(private api: ApiService, ea: EventAggregator) {
    ea.subscribe(BookViewed, msg => this.select(msg.book));
  }

  created() {
    this.api.get('/books').then(books => this.booklist = books);
  }

  select(book) {
    this.selectedId = book.id;
    return true;
  }
}
