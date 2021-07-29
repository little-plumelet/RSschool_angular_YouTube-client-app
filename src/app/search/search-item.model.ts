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
    defaultAudioLanguage: string,
  },
  statistics: {
    viewCount: number,
    ikeCount: number,
    islikeCount: number,
    avoriteCount: number,
    ommentCount: number
  }
}
