import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { FilterCardsService } from '../../services/filter-cards.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  filterWord = '';

  sortCount = true;

  sortDate = true;

  iconDateContent = 'vertical_align_center';

  iconViewsCountContent = 'vertical_align_center';

  constructor(
    public filterCardsService: FilterCardsService,
    public youtubeService: YoutubeService,
  ) {}

  toggleIcon(key: keyof FilterComponent) {
    switch (this[key]) {
      case 'vertical_align_center':
        (this[key] as string) = 'arrow_downward';
        break;
      case 'arrow_downward':
        (this[key] as string) = 'arrow_upward';
        break;
      default:
        (this[key] as string) = 'arrow_downward';
        break;
    }

    if (key === 'iconDateContent') this.iconViewsCountContent = 'vertical_align_center';
    else this.iconDateContent = 'vertical_align_center';
  }

  clearIcons() {
    this.iconViewsCountContent = 'vertical_align_center';
    this.iconDateContent = 'vertical_align_center';
  }

  sortByDate() {
    this.youtubeService.sortDate(this.sortDate = !this.sortDate);
  }

  sortByViewsCount() {
    this.youtubeService.sortViewsCount(this.sortCount = !this.sortCount);
  }
}
