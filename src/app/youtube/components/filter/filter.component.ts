import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { FilterCardsService } from '../../services/filter-cards.service';

export const sortingOrder = {
  asc: 'ascending',
  dsc: 'discending',
  unsorted: 'unsorted'
};

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

  sortOrderCount = sortingOrder.unsorted;

  sortOrderDate = sortingOrder.unsorted;

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
    this.sortOrderCount = sortingOrder.unsorted;
    switch (this.sortOrderDate) {
      case 'unsorted':
        this.sortOrderDate = sortingOrder.dsc;
        break;
      case 'discending':
        this.sortOrderDate = sortingOrder.asc;
        break;
      default:
        this.sortOrderDate = sortingOrder.dsc;
    }
    this.youtubeService.sortDate(this.sortOrderDate);
  }

  sortByViewsCount() {
    this.sortOrderDate = sortingOrder.unsorted;
    switch (this.sortOrderCount) {
      case 'unsorted':
        this.sortOrderCount = sortingOrder.dsc;
        break;
      case 'discending':
        this.sortOrderCount = sortingOrder.asc;
        break;
      default:
        this.sortOrderCount = sortingOrder.dsc;
    }
    this.youtubeService.sortViewsCount(this.sortOrderCount);
  }
}
