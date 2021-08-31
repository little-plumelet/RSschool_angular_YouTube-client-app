import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const BASE_URL = 'https://www.googleapis.com/youtube/v3/';
const API_TOKEN = 'AIzaSyDL17DSc1BgZQNbxc39PlfGXL4B1lSGBts';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const regexFirstHalfOfUrl = /^(\w+\?)/g;
    const regexLastHalfOfUrl = /[^?]*$/;
    const reqCloned = request.clone({
      url: `${BASE_URL}${request.url.match(regexFirstHalfOfUrl)}key=${API_TOKEN}${request.url.match(regexLastHalfOfUrl)}`,
    });
    return next.handle(reqCloned);
  }
}
