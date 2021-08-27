import { Injectable } from '@angular/core';
import {
  Observable,
  Subject,
  BehaviorSubject,
} from 'rxjs';
import { HttpRequestsService } from 'src/app/core/services/http-requests.service';
import { ISearchItem } from '../models/search-item.model';

const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  cardsArr: ISearchItem[] = [];

  cardsArrObservable$: Observable<ISearchItem[]>;

  private cardsArrChange = new BehaviorSubject<ISearchItem[]>([]);

  cardObservable$: Observable<ISearchItem>;

  private cardChange = new Subject<ISearchItem>();

  card: ISearchItem | undefined = {} as ISearchItem;

  constructor(private httpRequests: HttpRequestsService) {
    this.cardsArrObservable$ = this.cardsArrChange.asObservable();
    this.cardObservable$ = this.cardChange.asObservable();
  }

  createCards(): void {
    this.cardsArrChange.next(this.cardsArr);
  }

  getCards(value: string) {
    this.httpRequests.getCards(value).subscribe((cards) => {
      this.cardsArrChange.next(cards);
      this.cardsArr = cards;
    });
  }

  sortViewsCount(sort: boolean) {
    this.cardsArr = this.cardsArr.slice().sort((a, b): number => {
      if (a.statistics.viewCount > b.statistics.viewCount) return sort ? 1 : -1;
      return -1;
    });

    this.cardsArr = Array.from(this.cardsArr);
    this.cardsArrChange.next(this.cardsArr);
  }

  sortDate(sort: boolean) {
    this.cardsArr = this.cardsArr.slice().sort((a, b) => {
      const el1 = new Date(a.snippet.publishedAt);
      const el2 = new Date(b.snippet.publishedAt);
      if (Math.floor((Date.UTC(el1.getFullYear(), el1.getMonth(), el1.getDate())
          - Date.UTC(el2.getFullYear(), el2.getMonth(), el2.getDate()))
          / MILLISECONDS_IN_DAY) > 0) {
        return (sort ? -1 : 1);
      }
      return sort ? 1 : -1;
    });

    this.cardsArr = Array.from(this.cardsArr);
    this.cardsArrChange.next(this.cardsArr);
  }

  filter() {
    this.cardsArr = Array.from(this.cardsArr);
    this.cardsArrChange.next(this.cardsArr);
  }

  getCardById(id: string) {
    this.httpRequests.getCardById(id).subscribe((card) => {
      this.cardChange.next(card[0]);
      [this.card] = card;
    });
  }
}
