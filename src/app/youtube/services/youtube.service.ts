import { Injectable } from '@angular/core';
import {
  Observable,
  Subject,
  BehaviorSubject,
} from 'rxjs';
import { HttpRequestsService } from 'src/app/core/services/http-requests.service';
import { ISearchItem } from '../models/search-item.model';
// import { items } from '../components/search/search-results/temporary-constants';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  cardsArr: ISearchItem[];

  cardsArrObservable$: Observable<ISearchItem[]>;

  cardsArrChange: Subject<ISearchItem[]> = new BehaviorSubject<ISearchItem[]>([] as ISearchItem[]);

  card: ISearchItem | undefined;

  constructor(private httpRequests: HttpRequestsService) {
    this.cardsArr = [];

    this.card = {} as ISearchItem;

    this.cardsArrObservable$ = this.cardsArrChange.asObservable();
  }

  createCards(): void {
    // this.cardsArr = Array.from(items);
    this.cardsArrChange.next(this.cardsArr);
  }

  getCards(value: string) {
    this.httpRequests.getCards(value).subscribe((cards) => {
      this.cardsArrChange.next(cards);
      this.cardsArr = cards;
      console.log('11111', this.cardsArr);
    });
  }

  sortViewsCount(sort: boolean) {
    if (sort) {
      this.cardsArr.sort((a, b): number => {
        if (a.statistics.viewCount > b.statistics.viewCount) return 1;
        return -1;
      });
    } else {
      this.cardsArr.sort((a, b): number => {
        if (a.statistics.viewCount < b.statistics.viewCount) return 1;
        return -1;
      });
    }
    this.cardsArr = Array.from(this.cardsArr);
    this.cardsArrChange.next(this.cardsArr);
  }

  sortDate(sort: boolean) {
    if (sort) {
      this.cardsArr.sort((a, b) => {
        const el1 = new Date(a.snippet.publishedAt.replace('/(T[A-Za-z0-9_-]*/g', ''));
        const el2 = new Date(b.snippet.publishedAt.replace('/(T[A-Za-z0-9_-]*/g', ''));
        if (Math.floor((Date.UTC(el1.getFullYear(), el1.getMonth(), el1.getDate())
            - Date.UTC(el2.getFullYear(), el2.getMonth(), el2.getDate()))
            / (1000 * 60 * 60 * 24)) > 0) return -1;
        return 1;
      });
    } else {
      this.cardsArr.sort((a, b) => {
        const el1 = new Date(a.snippet.publishedAt.replace('/(T[A-Za-z0-9_-]*/g', ''));
        const el2 = new Date(b.snippet.publishedAt.replace('/(T[A-Za-z0-9_-]*/g', ''));
        if (Math.floor((Date.UTC(el1.getFullYear(), el1.getMonth(), el1.getDate())
            - Date.UTC(el2.getFullYear(), el2.getMonth(), el2.getDate()))
            / (1000 * 60 * 60 * 24)) > 0) return 1;
        return -1;
      });
    }

    this.cardsArr = Array.from(this.cardsArr);
    this.cardsArrChange.next(this.cardsArr);
  }

  filter() {
    this.cardsArr = Array.from(this.cardsArr);
    this.cardsArrChange.next(this.cardsArr);
  }

  getCardById(id: string): ISearchItem | undefined {
    this.card = this.cardsArr.find((el) => el.id.videoId === id);
    console.log('ffff', this.card);
    return this.card;
  }
}
