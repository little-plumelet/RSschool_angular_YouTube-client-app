import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createCustomCard } from 'src/app/redux/actions/customcards.actions';
import { AppState } from 'src/app/redux/state.models';
import { ICustomCard } from '../../models/custom-card';
import { CustomCardService } from '../../services/custom-card.service';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCardComponent {
  card: Observable<ICustomCard>;

  constructor(
    private store: Store<AppState>,
    private customCardService: CustomCardService,
  ) {
    // this.store.dispatch(createCustomCard());
    this.card = this.store.select((state) => state.customCardsState.customCard);
  }
}
