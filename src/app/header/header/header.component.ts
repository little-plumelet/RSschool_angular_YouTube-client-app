import { Component, OnInit, ChangeDetectionStrategy,  Input, Output, EventEmitter } from '@angular/core';
import { ISearchItem } from 'src/app/search/search-item.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Output() searchResultH: EventEmitter<ISearchItem[]> = new EventEmitter<ISearchItem[]>()

  searchResultArrH: ISearchItem[];

  constructor() {
    this.searchResultArrH = [];
  }

  ngOnInit(): void {
    console.log('OnInite');
  }

  // работа через input/output - позже заменить на сервисы или на подписку
  updateSearchResult(searchResultArr: ISearchItem[]) {
   this.searchResultArrH = searchResultArr;
   this.searchResultH.emit(this.searchResultArrH);
  }
}
