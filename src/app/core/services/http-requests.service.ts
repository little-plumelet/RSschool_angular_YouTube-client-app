import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ISearchResponse } from 'src/app/youtube/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestsService {
  url = '';

  smallUrl = '';

  constructor(private http: HttpClient) {}

  getCards(value: string) {
    // `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDL17DSc1BgZQNbxc39PlfGXL4B1lSGBts&type=video&part=snippet&maxResults=10&q=${value}`;
    this.url = `search?&type=video&part=snippet&maxResults=10&q=${value}`;
    const idArr: string[] = [];
    return this.http.get<ISearchResponse>(this.url)
      .pipe(
        switchMap((response) => {
          response.items.forEach((el) => idArr.push(el.id.videoId));
          this.smallUrl = `videos?&id=${[...idArr]}&part=snippet,statistics`;
          return this.http.get<ISearchResponse>(this.smallUrl)
            .pipe(
              map((response2) => response2.items),
            );
        }),
        catchError((error) => {
          console.log('Error is caught!', error);
          return throwError(error);
        }),
      );
  }

  getCardById(id: string) {
    this.smallUrl = `videos?&id=${id}&part=snippet,statistics`;
    return this.http.get<ISearchResponse>(this.smallUrl)
      .pipe(
        map((response) => response.items),
        catchError((error) => {
          console.log('Error is caught!', error);
          return throwError(error);
        }),
      );
  }
}
