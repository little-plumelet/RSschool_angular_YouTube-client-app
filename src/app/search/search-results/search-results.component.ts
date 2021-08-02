import {
  Component,
  OnInit,
  OnChanges,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ISearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnChanges {
  @Input() items: ISearchItem[] = [];

  constructor() {
    console.log('empty constructor');
  }
/*
  ngOnInit(): void {
    console.log('OnInite');
  }
*/
  ngOnChanges() {
    console.log('OnChanges', this.items);
}
/*
  updateSearchResult(searchResultArr: ISearchItem[]) {
    this.items = searchResultArr; // на будущее надо будет сделать через сервис
    this.items = items;
  }
*/
}
