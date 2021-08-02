import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ISearchItem } from 'src/app/search/search-item.model';
//import { EventEmitter } from 'stream';
import { items } from '../../search/search-results/temporary-constants';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements OnInit {
  @Output() searchResult: EventEmitter<ISearchItem[]> = new EventEmitter<ISearchItem[]>()

  searchInput;
  searchResultArr: ISearchItem[];

  constructor() {
    this.searchInput = '';
    this.searchResultArr = []
   }

  ngOnInit(): void {
    console.log('On init');
  }

  getResult() {
    this.searchResultArr = items; // этот код временно - здесь мы должны получить результат поиска
    this.searchResult.emit(this.searchResultArr);
    this.searchInput = '';
  }

}
