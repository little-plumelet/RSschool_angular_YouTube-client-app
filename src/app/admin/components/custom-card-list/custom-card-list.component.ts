import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/redux/state.models';
import { ICustomCard } from '../../models/custom-card';

@Component({
  selector: 'app-custom-card-list',
  templateUrl: './custom-card-list.component.html',
  styleUrls: ['./custom-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCardListComponent {
  customCardsArray: Observable<ICustomCard[]>;

  constructor(private store: Store<AppState>) {
    this.customCardsArray = this.store.select((state) => state.customCardsState.customCardsArray);
  }
}
