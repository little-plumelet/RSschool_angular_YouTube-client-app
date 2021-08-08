import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { FilterCardsService } from 'src/app/services/filter-cards.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {
  filterW: string;

  sortCount: boolean;

  sortDate: boolean;

  iconDateContent: string;

  iconViewsCountContent: string;

  constructor(public filterCardsService: FilterCardsService, public cardsService: CardsService) {
    this.filterW = '';
    this.sortCount = true;
    this.sortDate = true;
    this.iconDateContent = 'vertical_align_center';
    this.iconViewsCountContent = 'vertical_align_center';
  }

  ngOnInit(): void {
    console.log('OnInit');
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
