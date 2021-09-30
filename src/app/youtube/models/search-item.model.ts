import { ItemStatistics } from './item-statistics';

interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IThumbnail;
    medium: IThumbnail;
    high: IThumbnail;
    standard: IThumbnail;
    maxres: IThumbnail
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultLanguage?: string;
  defaultAudioLanguage: string;
}

interface IId {
  kind: string;
  videoId: string;
  channelId: string;
  playlistId: string;
}

export interface ISearchItem {
  kind: string;
  etag: string;
  id: IId;
  snippet: ISnippet;
  statistics: ItemStatistics;
}
