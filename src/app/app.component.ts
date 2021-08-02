import { Component } from '@angular/core';
import { ISearchItem } from './search/search-item.model';
//import { items } from './search/search-results/temporary-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'YouTube-client-app';
  items: ISearchItem[] = [];

  // работа через input/output - позже заменить на сервисы или на подписку
  updateSearchResult2(searchResultArrH: ISearchItem[]) {
    this.items = searchResultArrH;
  }
}
