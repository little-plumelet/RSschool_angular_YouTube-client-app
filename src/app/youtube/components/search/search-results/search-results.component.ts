import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/state.models';
import { Observable } from 'rxjs';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';
import { getVideoCards } from 'src/app/redux/actions/videocards.actions';
import { YoutubeService } from '../../../services/youtube.service';
import { FilterCardsService } from '../../../services/filter-cards.service';
import { selectVideoCardsArray } from 'src/app/redux/selectors/selectors';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  cards: Observable<ISearchItem[]>;

  constructor(
    public filterCardsService: FilterCardsService,
    public youtubeService: YoutubeService,
    private store: Store<AppState>,
  ) {
    this.store.dispatch(getVideoCards());
    this.cards = this.store.select(selectVideoCardsArray);
  }
}
