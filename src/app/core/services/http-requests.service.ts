import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ISearchResponse } from 'src/app/youtube/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestsService {
  constructor(private http: HttpClient) {}

  getCards(value: string) {
    const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDL17DSc1BgZQNbxc39PlfGXL4B1lSGBts&type=video&type=video&part=snippet&maxResults=10&q=${value}`;
    console.log('url =', value);
    return this.http.get<ISearchResponse>(url)
      .pipe(
        map((response) => response.items),
        catchError((error) => {
          console.log('Error is caught!', error);
          return throwError(error);
        }),
      );
  }
}
