import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable } from 'rxjs';
import { YoutubeService } from '../../../services/youtube.service';
import { FilterCardsService } from '../../../services/filter-cards.service';
import { ISearchItem } from '../../../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit {
  itemsArrObservable: Observable<ISearchItem[]>;

  constructor(
    public filterCardsService: FilterCardsService,
    public youtubeService: YoutubeService,
  ) {
    this.itemsArrObservable = this.youtubeService.getCards();
  }

  ngOnInit(): void {
    console.log('OnInit');
  }
}
