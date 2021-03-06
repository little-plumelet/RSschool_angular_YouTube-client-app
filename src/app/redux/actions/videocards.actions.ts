import { createAction, props } from '@ngrx/store';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';

export const getVideoCards = createAction(
  '[VIDEOCARDS PAGE] GET VIDEOS',
);

export const getVideoCardsSuccessful = createAction(
  '[VIDEOCARDS EFFECT] SET FETCHED CARDS',
  props<{ videoCardsArray: ISearchItem[] }>(),
);

export const getVideoCardsFailed = createAction(
  '[VIDEOCARDS EFFECT] FETCHED CARDS FAILED',
  props<{ error: Error }>(),
);

export const updateVideoCards = createAction(
  '[VIDEOCARDS PAGE] UPDATE VIDEOS',
);
