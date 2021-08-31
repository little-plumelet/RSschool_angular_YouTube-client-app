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
    const newArray = state.customCardsArray.slice().filter((el) => el.id);
    if (!state.customCardsArray.find((el) => el.id === customCard.id)) {
      newArray.push(customCard);
    }
    const result = {
      ...state,
      customCardsArray: newArray,
    };
    return result;
  }),
  on(customCardsActions.updateCustomCards, (state) => {
    const result = { ...state, loading: true };
    return result;
  }));
