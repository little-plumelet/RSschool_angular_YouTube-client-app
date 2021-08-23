import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Injectable({
  providedIn: 'root',
})
export class SearchInputService {
  inputValue = '';

  public inputValue$: Observable<string>;

  private inputValue$$ = new BehaviorSubject<string>('');

  constructor(private youtubeService: YoutubeService) {
    this.inputValue$ = this.inputValue$$.asObservable();

    this.inputValue$$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(() => this.getCards());
  }

  setValue(value: string) {
    if (value.length >= 3) {
      this.inputValue$$.next(value);
      this.inputValue = value;
    }
  }

  getCards() {
    if (this.inputValue) this.youtubeService.getCards(this.inputValue);
    return this.inputValue$;
  }
}
