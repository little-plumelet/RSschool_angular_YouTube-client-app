import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, IVideoCardsState } from '../state.models';

export const selectVideoCardsState = createFeatureSelector<AppState, IVideoCardsState>('videoCardsState');

export const selectVideoCardsArray = createSelector(
  selectVideoCardsState,
  (videoCardsState) => videoCardsState.videoCardsArray,
);
