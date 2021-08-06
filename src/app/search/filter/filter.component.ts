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

  constructor(public filterCardsService: FilterCardsService, public cardsService: CardsService) {
    this.filterW = '';
    this.sortCount = true;
    this.sortDate = true;
  }

  ngOnInit(): void {
    console.log('OnInit');
  }
}
