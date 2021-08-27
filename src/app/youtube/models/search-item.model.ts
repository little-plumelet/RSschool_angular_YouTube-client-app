interface IThumbnail {
  url: string,
  width: number,
  height: number,
}

export interface ISearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: IThumbnail,
      medium: IThumbnail,
      high: IThumbnail,
      standard: IThumbnail,
      maxres: IThumbnail
    },
    channelTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    localized: {
      title: string,
      description: string,
    },
    defaultLanguage?: string,
    defaultAudioLanguage: string,
  },
  statistics: {
    viewCount: number,
    likeCount: number,
    dislikeCount: number,
    favoriteCount: number,
    commentCount: number
  }
}
