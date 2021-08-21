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
    this.baseUrl = 'https://www.googleapis.com/youtube/v3/';
    this.apiToken = 'AIzaSyDL17DSc1BgZQNbxc39PlfGXL4B1lSGBts';
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const re = /^(\w+\?)/g;
    const reqCloned = request.clone({
      url: `${this.baseUrl}${request.url.match(re)}key=${this.apiToken}${request.url.match(/[^?]*$/)}`,
    });
    return next.handle(reqCloned);
  }
}
