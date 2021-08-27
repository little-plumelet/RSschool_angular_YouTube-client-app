import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { createCustomCard } from 'src/app/redux/actions/customcards.actions';
import { AppState } from 'src/app/redux/state.models';
import { ICustomCard } from '../../models/custom-card';
import { CustomCardService } from '../../services/custom-card.service';

const ID_LENGTH = 6;

@Component({
  selector: 'app-admin-create-card-form',
  templateUrl: './admin-create-card-form.component.html',
  styleUrls: ['./admin-create-card-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCreateCardFormComponent implements OnInit, OnDestroy {
  subscribtion = new Subscription();

  title = '';

  description = '';

  imageLink = '';

  videoLink = '';

  idSet = new Set();

  constructor(
    private store: Store<AppState>,
    private customCardService: CustomCardService,
  ) {
    this.store.dispatch(createCustomCard());
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
    card.id = this.createId();
    while (this.idSet.has(card.id)) {
      card.id = this.createId();
    }
    this.idSet.add(card.id);
    this.customCardService.customCard$.next(card);
    this.clearInputs();
  }

  createId(): string {
    let id = '';
    for (let i = 0; i < ID_LENGTH; i += 1) {
      id += String((Math.random() * 100) / 100);
    }
    return id;
  }

  clearInputs() {
    this.title = '';
    this.description = '';
    this.imageLink = '';
    this.videoLink = '';
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
