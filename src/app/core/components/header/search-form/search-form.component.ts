import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ISearchItem } from '../../../../youtube/models/search-item.model';
import { YoutubeService } from '../../../../youtube/services/youtube.service';
import { FilterCardsService } from '../../../../youtube/services/filter-cards.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent {
  searchInput;

  searchResultArr: ISearchItem[];

  constructor(public youtubeService: YoutubeService,
    public filterCardsService: FilterCardsService) {
    this.searchInput = '';
    this.searchResultArr = [];
  }

  getResult() {
    this.youtubeService.createCards(); // временный код - здесь мы должны получить результат поиска
    this.searchInput = '';
  }
}
