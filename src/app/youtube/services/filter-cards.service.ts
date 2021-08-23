import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterCardsService {
  filterWord = '';

  filterWordChange$ = new BehaviorSubject<string>('');

  constructor() {
    this.filterWordChange$.subscribe((value) => {
      this.filterWord = value;
    });
  }

  changeFilterWord(value: string) {
    this.filterWord = value;
  }

  getFilterWord():Observable<string> {
    return this.filterWordChange$.asObservable();
  }
}
