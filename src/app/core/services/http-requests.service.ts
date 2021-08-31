import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ISearchResponse } from 'src/app/youtube/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestsService {
  baseUrl = '';

  urlForStatistics = '';

  constructor(private http: HttpClient) {}

  getCards(value: string) {
    // `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDL17DSc1BgZQNbxc39PlfGXL4B1lSGBts&type=video&part=snippet&maxResults=10&q=${value}`;
    this.baseUrl = `search?&type=video&part=snippet&maxResults=10&q=${value}`;
    const idArr: string[] = [];
    return this.http.get<ISearchResponse>(this.baseUrl)
      .pipe(
        switchMap((videoList) => {
          videoList.items.forEach((el) => idArr.push(el.id.videoId));
          this.urlForStatistics = `videos?&id=${[...idArr]}&part=snippet,statistics`;
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
    this.urlForStatistics = `videos?&id=${id}&part=snippet,statistics`;
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
