import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { createCustomCard } from 'src/app/redux/actions/customcards.actions';
import { AppState } from 'src/app/redux/state.models';
import { ICustomCard } from '../../models/custom-card';
import { CustomCardService } from '../../services/custom-card.service';

@Component({
  selector: 'app-admin-create-card-form',
  templateUrl: './admin-create-card-form.component.html',
  styleUrls: ['./admin-create-card-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCreateCardFormComponent implements OnInit, OnDestroy {
  // card = new Observable<ICustomCard>();

  subscribtion = new Subscription();

  title = '';

  description = '';

  imageLink = '';

  videoLink = '';

  constructor(
    private store: Store<AppState>,
    private customCardService: CustomCardService,
  ) {
    this.store.dispatch(createCustomCard());
    // this.card = this.store.select((state) => state.customCardsState.customCard);
    // console.log('2card was created', this.card);
  }

  ngOnInit() {
    this.subscribtion = this.customCardService.customCard$.subscribe();
  }

  createCustomCard() {
    const card = {} as ICustomCard;
    card.title = this.title;
    card.description = this.description;
    card.imageLink = this.imageLink;
    card.videoLink = this.videoLink;
    card.creationDate = String(new Date());
    console.log('card was created', card);
    this.customCardService.customCard$.next(card);
    // this.customCardService.print();
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
