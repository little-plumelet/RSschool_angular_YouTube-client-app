import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CardsService } from 'src/app/services/cards.service';
import { FilterCardsService } from 'src/app/services/filter-cards.service';
import { ISearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit, OnChanges {
  // @Input() items: ISearchItem[] = [];

  itemsArr: ISearchItem[];

  filterW: string;

  bool: boolean;

  subscription: Subscription;

  constructor(
    public filterCardsService: FilterCardsService,
    public cardsService: CardsService,
  ) {
    this.itemsArr = [];
    this.filterW = '';
    this.bool = true;
    console.log('empty constructor', filterCardsService);
    this.subscription = this.cardsService.getCards().subscribe((cards) => {
      this.itemsArr = cards;
    });
  }

  ngOnInit(): void {
    // this.cardsService.getCards();
    // this.getCards();
    // this.itemsArr = this.cardsService.sortViewsCount(this.bool = !this.bool);
    // this.sortCardsViewCounts();
    // this.getFilterWord();
    console.log('OnInit', this.itemsArr);
  }

  ngOnChanges(): void {
    console.log('@@@888fffff!', this.itemsArr);
    // this.sortCardsViewCounts();
    // this.sortCardsDate();
  }

  getCards(): void {
    console.log('fffff');
    // this.cardsService.getCards()
    //   .subscribe(cardsArr => this.itemsArr = cardsArr);
  }

  sortCardsViewCounts(): void {
    console.log('888fffff!');
    this.cardsService.getCards();
    //   .subscribe(cardsArr => this.itemsArr = Array.from(cardsArr));
    // console.log('888fffff!', this.itemsArr)
  }

  sortCardsDate(): void {
    this.cardsService.sortDate(this.bool = !this.bool)
      .subscribe((cardsArr) => { this.itemsArr = Array.from(cardsArr); });
    console.log('888fffff!', this.itemsArr);
  }

  getFilterWord(): void {
    console.log('6666');
    this.filterCardsService.getFilterWord()
      .subscribe((word) => { this.filterW = word; });
  }
}
