import { ICustomCard } from '../admin/models/custom-card';
import { ISearchItem } from '../youtube/models/search-item.model';

export interface ICustomCardsState {
  customCardsArray: ICustomCard[];
  // customCard: ICustomCard;
}

export interface IVideoCardsState {
  videoCardsArray: ISearchItem[];
  loading: boolean;
  loaded: boolean;
  error: Error | null;
}

export interface AppState {
  videoCardsState: IVideoCardsState;
  customCardsState: ICustomCardsState;
}

export const initialState: AppState = {
  videoCardsState: {
    videoCardsArray: [],
    loading: false,
    loaded: false,
    error: null,
  },
  customCardsState: { customCardsArray: [] },
  // customCardsState: { customCard: {} as ICustomCard },
};
