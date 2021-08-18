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
  filterW: string;

  sortCount: boolean;

  sortDate: boolean;

  iconDateContent: string;

  iconViewsCountContent: string;

  constructor(
    public filterCardsService: FilterCardsService,
    public youtubeService: YoutubeService,
  ) {
    this.filterW = '';
    this.sortCount = true;
    this.sortDate = true;
    this.iconDateContent = 'vertical_align_center';
    this.iconViewsCountContent = 'vertical_align_center';
  }

  toggleIcon(key: keyof FilterComponent) {
    if (this[key] === 'vertical_align_center') (this[key] as string) = 'arrow_downward';
    else if (this[key] === 'arrow_downward') (this[key] as string) = 'arrow_upward';
    else (this[key] as string) = 'arrow_downward';
    if (key === 'iconDateContent') this.iconViewsCountContent = 'vertical_align_center';
    else if (key === 'iconViewsCountContent') this.iconDateContent = 'vertical_align_center';
  }

  clearIcons() {
    this.iconViewsCountContent = 'vertical_align_center';
    this.iconDateContent = 'vertical_align_center';
  }
}