import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Injectable({
  providedIn: 'root',
})
export class SearchInputService {
  inputValue: string;

  public inputValue$: Observable<string>;

  private inputValue$$ = new BehaviorSubject<string>('');

  constructor(private youtubeService: YoutubeService) {
    this.inputValue = '';

    this.inputValue$ = this.inputValue$$.asObservable();

    this.inputValue$$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      // switchMap(() => this.setInputValue()),
    ).subscribe(() => this.getCards());
  }

  setValue(value: string) {
    if (value.length >= 3) {
      this.inputValue$$.next(value);
      this.inputValue = value;
      console.log('----', this.inputValue);
    }
  }

  getCards() {
    console.log('----', this.inputValue);
    this.youtubeService.getCards(this.inputValue);
    return this.inputValue$;
  }
}
