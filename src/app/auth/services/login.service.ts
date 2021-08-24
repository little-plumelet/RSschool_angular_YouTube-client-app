import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subscription,
} from 'rxjs';

const DEFAULT_USERNAME = 'Your name';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  name: string;

  password: string;

  isLogged: boolean;

  userName$: BehaviorSubject<string> = new BehaviorSubject<string>('Your name');

  isLoggedStream$: Observable<boolean> = new Observable<boolean>((observer) => {
    observer.next(this.isLogged);
  });

  sub: Subscription;

  constructor() {
    this.name = DEFAULT_USERNAME;
    this.password = '';
    this.isLogged = Boolean(localStorage.getItem('name'));
    this.sub = this.userName$.subscribe((value) => {
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
    this.userName$.next(this.name);
  }

  clearDateInLocalStorage() {
    this.name = 'Your name';
    this.password = '';
    localStorage.removeItem('name');
    localStorage.removeItem('password');
    this.isLogged = false;
    this.userName$.next(this.name);
  }

  getName():BehaviorSubject<string> {
    if (localStorage.getItem('name')) this.name = localStorage.getItem('name') as string;
    else this.name = 'Your name';
    this.userName$.next(this.name);
    return this.userName$;
  }
}
