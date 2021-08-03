import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ISearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit {
  @Input() items: ISearchItem[] = [];

  constructor() {
    console.log('empty constructor');
  }

  ngOnInit(): void {
    console.log('OnInite');
  }
}
