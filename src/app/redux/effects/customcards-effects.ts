import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CustomCardService } from 'src/app/admin/services/custom-card.service';
import { createCustomCard, createCustomCardFailed, createCustomCardSuccessful } from '../actions/customcards.actions';

@Injectable({
  providedIn: 'any',
})
export class CustomCardsEffects {
  constructor(
    private actions: Actions,
    private customCardService: CustomCardService,
  ) {}

  createCard: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(createCustomCard),
    switchMap(() => this.customCardService.customCard$.pipe(
      map((customCard) => createCustomCardSuccessful({ customCard })),
      catchError((error) => of(createCustomCardFailed({ error }))),
    )),
  ));
}
