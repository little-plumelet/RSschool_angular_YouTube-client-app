import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ISearchResponse } from 'src/app/youtube/models/search-response.model';

const YOUTUBE_SEARCH_URL = 'search?&type=video&part=snippet&maxResults=10&q=';
const YOUTUBE_STATISTICS_URL_ID = 'videos?&id=';
const YOUTUBE_STATISTICS_URL_QUERY = '&part=snippet,statistics';

@Injectable({
  providedIn: 'root',
})
export class YoutubeRequestsService {
  searchUrl = '';

  urlForStatistics = '';

  constructor(private http: HttpClient) {}

  getCards(value: string) {
    // `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDL17DSc1BgZQNbxc39PlfGXL4B1lSGBts&type=video&part=snippet&maxResults=10&q=${value}`;
    this.searchUrl = `${YOUTUBE_SEARCH_URL}${value}`;
    const idArr: string[] = [];
    return this.http.get<ISearchResponse>(this.searchUrl)
      .pipe(
        switchMap((videoList) => {
          videoList.items.forEach((el) => idArr.push(el.id.videoId));
          this.urlForStatistics = `${YOUTUBE_STATISTICS_URL_ID}${[...idArr]}${YOUTUBE_STATISTICS_URL_QUERY}`;
          return this.http.get<ISearchResponse>(this.urlForStatistics)
            .pipe(
              map((videListWithStatistics) => videListWithStatistics.items),
            );
        }),
        catchError((error) => {
          console.log('Error is caught!', error);
          return throwError(error);
        }),
      );
  }

  getCardById(id: string) {
    this.urlForStatistics = `${YOUTUBE_STATISTICS_URL_ID}${id}${YOUTUBE_STATISTICS_URL_QUERY}`;
    return this.http.get<ISearchResponse>(this.urlForStatistics)
      .pipe(
        map((videoList) => videoList.items),
        catchError((error) => {
          console.log('Error is caught!', error);
          return throwError(error);
        }),
      );
  }
}
