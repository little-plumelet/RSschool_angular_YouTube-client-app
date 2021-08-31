import { Injectable } from '@angular/core';
import {
  Observable,
  Subject,
  BehaviorSubject,
} from 'rxjs';
import { ISearchItem } from '../models/search-item.model';
import { YoutubeRequestsService } from './youtube-requests.service';

const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
export const sortingOrder = {
  asc: 'ascending',
  dsc: 'discending',
  unsorted: 'unsorted',
};

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

  constructor(private youtubeRequests: YoutubeRequestsService) {
    this.cardsArrObservable$ = this.cardsArrChange.asObservable();
    this.cardObservable$ = this.cardChange.asObservable();
  }

  getCards(value: string) {
    this.youtubeRequests.getCards(value).subscribe((cards) => {
      this.cardsArrChange.next(cards);
      this.cardsArr = cards;
    });
  }

  sortViewsCount(sortingDirection: string) {
    this.cardsArr = this.cardsArr.slice().sort((a, b): number => {
      if (Number(a.statistics.viewCount) > Number(b.statistics.viewCount)) {
        return ((sortingDirection === sortingOrder.dsc) ? -1 : 1);
      }
      return ((sortingDirection === sortingOrder.asc) ? -1 : 1);
    });

    this.cardsArr = Array.from(this.cardsArr);
    this.cardsArrChange.next(this.cardsArr);
  }

  sortDate(sortingDirection: string) {
    this.cardsArr = this.cardsArr.slice().sort((a, b) => {
      const el1 = new Date(a.snippet.publishedAt);
      const el2 = new Date(b.snippet.publishedAt);
      if (Math.floor((Date.UTC(el1.getFullYear(), el1.getMonth(), el1.getDate())
          - Date.UTC(el2.getFullYear(), el2.getMonth(), el2.getDate()))
          / MILLISECONDS_IN_DAY) > 0) {
        return ((sortingDirection === sortingOrder.dsc) ? -1 : 1);
      }
      return ((sortingDirection === sortingOrder.asc) ? -1 : 1);
    });
    this.cardsArr = Array.from(this.cardsArr);
    this.cardsArrChange.next(this.cardsArr);
  }

  filterByWord() {
    this.cardsArr = Array.from(this.cardsArr);
    this.cardsArrChange.next(this.cardsArr);
  }

  getCardById(id: string) {
    this.youtubeRequests.getCardById(id).subscribe((card) => {
      this.cardChange.next(card[0]);
      [this.card] = card;
    });
  }
}
