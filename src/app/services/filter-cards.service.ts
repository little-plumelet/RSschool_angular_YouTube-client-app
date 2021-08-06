import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterCardsService {
  filterWord: string;

  constructor() {
    this.filterWord = '';
  }

  changeFilterWord(fw: string)
  {
    this.filterWord = fw;
    console.log('this.filterWord', this.filterWord);
  }

  getFilterWord():Observable<string>
  {
    const word = of (this.filterWord)
    console.log('this.filterWord', this.filterWord, word);
    return word;
  }
}
