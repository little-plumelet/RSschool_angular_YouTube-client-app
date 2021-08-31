import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Injectable({
  providedIn: 'root',
})
export class SearchInputService {
  inputValue = '';

  public inputValue$ = new BehaviorSubject<string>('');

  constructor(private youtubeService: YoutubeService) {}

  getCards() {
    if (this.inputValue) this.youtubeService.getCards(this.inputValue);
    return this.inputValue$;
  }
}
