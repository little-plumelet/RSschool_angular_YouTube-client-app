import { createReducer, on } from '@ngrx/store';
import * as videCardsActions from '../actions/videocards.actions';
import { initialState } from '../state.models';

export const videoCardsReducer = createReducer(initialState.videoCardsState,
  on(videCardsActions.getVideoCardsFailed, (state, { error }) => {
    const result = {
      ...state,
      error,
      loading: false,
      loaded: false,
    };
    return result;
  }),
  on(videCardsActions.getVideoCardsSuccessful, (state, { videoCardsArray }) => {
    const result = {
      ...state,
      videoCardsArray,
      loading: false,
      loaded: true,
    };
    return result;
  }),
  on(videCardsActions.getVideoCards, (state) => {
    const result = { ...state, loading: true };
    return result;
  }));
