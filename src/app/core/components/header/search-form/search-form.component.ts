import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { FilterCardsService } from '../../../../youtube/services/filter-cards.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements OnInit, OnDestroy {
  inputValue = '';

  inputValue$ = new Subject<string>();

  subscription = new Subscription();

  constructor(
    public filterCardsService: FilterCardsService,
    public youtubeService: YoutubeService
  ) {}

  ngOnInit() {
    this.subscription = this.inputValue$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(() => this.youtubeService.getCards(this.inputValue));;
  }

  setValue() {
    if (this.inputValue.length >= 3) {
      this.inputValue$.next(this.inputValue);
      this.inputValue = this.inputValue;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
