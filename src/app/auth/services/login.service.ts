import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  name: string;

  password: string;

  isLogged: boolean;

  stream$: BehaviorSubject<string> = new BehaviorSubject<string>('Your name');

  isLoggedStream$: Observable<boolean> = new Observable<boolean>((observer) => {
    observer.next(this.isLogged);
  });

  sub: Subscription;

  constructor() {
    this.name = 'Your name';
    this.password = '';
    this.isLogged = Boolean(localStorage.getItem('name'));
    this.sub = this.stream$.subscribe((value) => {
      this.name = value;
    });

    this.isLoggedStream$.subscribe((value) => { this.isLogged = value; });
  }

  submitDateToLocalStorage(name: string, password: string) {
    this.name = name;
    this.password = password;
    localStorage.setItem('name', this.name);
    localStorage.setItem('password', this.password);
    this.isLogged = true;
    this.stream$.next(this.name);
  }

  clearDateInLocalStorage() {
    this.name = 'Your name';
    this.password = '';
    localStorage.removeItem('name');
    localStorage.removeItem('password');
    this.isLogged = false;
    this.stream$.next(this.name);
  }

  getName():Subject<string> {
    if (localStorage.getItem('name')) this.name = localStorage.getItem('name') as string;
    else this.name = 'Your name';
    this.stream$.next(this.name);
    return this.stream$;
  }
}