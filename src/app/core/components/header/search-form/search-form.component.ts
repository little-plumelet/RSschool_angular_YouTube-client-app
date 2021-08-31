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

const DEBOUNCE_TIME = 1000;
const INPUT_VALUE_MIN_LENGTH = 3;

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
    public youtubeService: YoutubeService,
  ) {}

  ngOnInit() {
    this.subscription = this.inputValue$.pipe(
      debounceTime(DEBOUNCE_TIME),
      distinctUntilChanged(),
    ).subscribe(() => this.youtubeService.getCards(this.inputValue));
  }

  setValue() {
    if (this.inputValue.length >= INPUT_VALUE_MIN_LENGTH) {
      this.inputValue$.next(this.inputValue);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
