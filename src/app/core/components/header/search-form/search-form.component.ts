import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchInputService } from 'src/app/core/services/search-input.service';
import { FilterCardsService } from '../../../../youtube/services/filter-cards.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements OnInit, OnDestroy {
  inputValue = '';

  subscription = new Subscription();

  constructor(
    public filterCardsService: FilterCardsService,
    public inputService: SearchInputService,
  ) {}

  ngOnInit() {
    this.subscription = this.inputService.inputValue$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(() => this.inputService.getCards());;
  }

  setValue() {
    if (this.inputValue.length >= 3) {
      this.inputService.inputValue$.next(this.inputValue);
      this.inputService.inputValue = this.inputValue;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
