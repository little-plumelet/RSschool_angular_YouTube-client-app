import { createAction, props } from '@ngrx/store';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';

export const getVideoCards = createAction(
  '[VIDEOCASDS PAGE] GET VIDEOS',
);

export const getVideoCardsSuccessful = createAction(
  '[VIDEOCARDS EFFECT] SET FETCHED CARDS',
  props<{ videoCardsArray: ISearchItem[] }>(),
);

export const getVideoCardsFailed = createAction(
  '[VIDEOCARDS EFFECT] FETCHED CARDS FAILED',
  props<{ error: Error }>(),
);

export const getVideoCardById = createAction(
  '[VIDEOCARDS PAGE] GET VIDEO BY ID',
  props<{ videoId: string }>(),
);
