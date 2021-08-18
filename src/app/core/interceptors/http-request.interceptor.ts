import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  baseUrl: string;

  apiToken: string;

  constructor() {
    this.baseUrl = 'https://www.googleapis.com/youtube/v3/search?';
    this.apiToken = 'AIzaSyDL17DSc1BgZQNbxc39PlfGXL4B1lSGBts';
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const reqCloned = request.clone({
      url: `${this.baseUrl}key=${this.apiToken}${request.url}`,
    });
    return next.handle(reqCloned);
  }
}
