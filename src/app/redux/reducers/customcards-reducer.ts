import { createReducer, on } from '@ngrx/store';
import * as customCardsActions from '../actions/customcards.actions';
import { initialState } from '../state.models';

export const customCardsReducer = createReducer(initialState.customCardsState,
  on(customCardsActions.createCustomCardFailed, (state, { error }) => {
    const result = {
      ...state,
      error,
    };
    return result;
  }),
  on(customCardsActions.createCustomCardSuccessful, (state, { customCard }) => {
    const result = {
      ...state,
      customCard,
    };
    return result;
  }),
  on(customCardsActions.updateCustomCards, (state) => {
    const result = { ...state, loading: true };
    return result;
  }));
