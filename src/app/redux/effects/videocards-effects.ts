import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SearchInputService } from 'src/app/core/services/search-input.service';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { getVideoCards, getVideoCardsFailed, getVideoCardsSuccessful } from '../actions/videocards.actions';

@Injectable({
  providedIn: 'any',
})
export class VideoCardsEffects {
  constructor(
    private actions: Actions,
    private youtubeService: YoutubeService,
    private searchInputValue: SearchInputService,
  ) {}

  getVideoCards: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(getVideoCards),
    switchMap(() => this.youtubeService.cardsArrObservable$.pipe(
      map((videoCardsArray) => getVideoCardsSuccessful({ videoCardsArray })),
      catchError((error) => of(getVideoCardsFailed({ error }))),
    )),
  ));
}
