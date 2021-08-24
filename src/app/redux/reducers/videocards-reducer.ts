import { createReducer, on } from '@ngrx/store';
import * as videCardsActions from '../actions/videocards.actions';
import { AppState } from '../state.models';

const initialState: AppState = {
  videoCardsState: { videoCardsArray: [] },
};

export const videoCardsReducer = createReducer(initialState,
  on(videCardsActions.getVideoCards, (state) => {
    console.log('!!!!state', state);
    return { ...state };
  }));
