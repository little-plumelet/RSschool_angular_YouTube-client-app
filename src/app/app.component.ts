import { Component } from '@angular/core';
import { items } from './search/search-results/temporary-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'YouTube-client-app';

  items = items;
}
