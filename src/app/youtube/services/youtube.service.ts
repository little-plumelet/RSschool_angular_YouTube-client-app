import { Injectable } from '@angular/core';
import {
  Observable,
  Subject,
  BehaviorSubject,
} from 'rxjs';
import { ISearchItem } from '../models/search-item.model';
import { items } from '../components/search/search-results/temporary-constants';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  cardsArr: ISearchItem[];

  cardsArrChange: Subject<ISearchItem[]> = new BehaviorSubject<ISearchItem[]>([] as ISearchItem[]);

  card: ISearchItem | undefined;

  constructor() {
    this.cardsArr = [];

    this.card = {} as ISearchItem;

    this.cardsArrChange.subscribe((arr) => {
      this.cardsArr = arr;
    });

    // this.cardChange.subscribe((card) => {
    //   this.card = card;
    // });
  }

  createCards(): void {
    this.cardsArr = Array.from(items);
    this.cardsArrChange.next(this.cardsArr);
  }

  getCards(): Observable<ISearchItem[]> {
    return this.cardsArrChange.asObservable();
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
    this.card = this.cardsArr.find((el) => el.id === id);
    return this.card;
  }
}
