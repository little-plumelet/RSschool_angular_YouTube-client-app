import { createAction, props } from '@ngrx/store';
import { ICustomCard } from 'src/app/admin/models/custom-card';

export const createCustomCard = createAction(
  '[VIDEOCARDS PAGE] CREATE CARD',
);

export const createCustomCardSuccessful = createAction(
  '[VIDEOCARDS PAGE] SET CREATED CARD',
  props<{ customCard: ICustomCard }>(),
);

export const createCustomCardFailed = createAction(
  '[VIDEOCARDS PAGE] CARD CREATION FAILED',
  props<{ error: Error }>(),
);

export const updateCustomCards = createAction(
  '[VIDEOCARDS PAGE] CARDS UPDATE',
  props<{ customCardsArray: ICustomCard[] }>(),
);
