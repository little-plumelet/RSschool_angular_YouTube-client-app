import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { YoutubeService } from '../../../services/youtube.service';
import { FilterCardsService } from '../../../services/filter-cards.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  constructor(
    public filterCardsService: FilterCardsService,
    public youtubeService: YoutubeService,
  ) {}
}
