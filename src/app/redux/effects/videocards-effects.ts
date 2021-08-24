import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { Observable } from 'rxjs';
// import { Action } from 'rxjs/internal/scheduler/Action';
// import { switchMap } from 'rxjs/operators';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
// import { getVideoCards } from '../actions/videocards.actions';

@Injectable({
  providedIn: 'any',
})
export class VideoCardsEffects {
  constructor(
    // private actions: Actions,
    private youtubeService: YoutubeService,
  ) {}
/*
  getVideoCards: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(getVideoCards)
      switchMap(() =>
        this.youtubeService.getCards().p)
    )
  )
  */
}
