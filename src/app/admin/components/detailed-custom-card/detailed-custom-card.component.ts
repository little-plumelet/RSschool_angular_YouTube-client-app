import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/redux/state.models';
import { ICustomCard } from '../../models/custom-card';

@Component({
  selector: 'app-detailed-custom-card',
  templateUrl: './detailed-custom-card.component.html',
  styleUrls: ['./detailed-custom-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedCustomCardComponent implements OnInit, OnDestroy {
  customCard$: Observable<ICustomCard>;

  subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) {
    this.customCard$ = new Observable<ICustomCard>();
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      const result = this.store.select(
        (state) => state.customCardsState.customCardsArray.find((el) => el.id === params.id),
      );
      if (result) {
        this.customCard$ = result as Observable<ICustomCard>;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
