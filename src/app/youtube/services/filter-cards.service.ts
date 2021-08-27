import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterCardsService {
  filterWord: string;

  filterWordChange: Subject<string> = new BehaviorSubject<string>('');

  constructor() {
    this.filterWord = '';

    this.filterWordChange.subscribe((fw) => {
      this.filterWord = fw;
    });
  }

  changeFilterWord(fw: string) {
    this.filterWord = fw;
  }

  getFilterWord():Observable<string> {
    return this.filterWordChange.asObservable();
  }
}
