import { ISearchItem } from '../youtube/models/search-item.model';

export interface IVideoCardsState {
  videoCardsArray: ISearchItem[];
}

export interface AppState {
  videoCardsState: IVideoCardsState;
}
