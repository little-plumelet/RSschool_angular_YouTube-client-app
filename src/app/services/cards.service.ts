import { Injectable } from '@angular/core';
import {
  Observable,
  Subject,
  BehaviorSubject,
} from 'rxjs';
import { ISearchItem } from '../search/search-item.model';
import { items } from '../search/search-results/temporary-constants';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  cardsArr: ISearchItem[];

  cardsArrChange: Subject<ISearchItem[]> = new BehaviorSubject<ISearchItem[]>([] as ISearchItem[]);

  constructor() {
    this.cardsArr = [];

    this.cardsArrChange.subscribe((arr) => {
      this.cardsArr = arr;
    });
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
}
