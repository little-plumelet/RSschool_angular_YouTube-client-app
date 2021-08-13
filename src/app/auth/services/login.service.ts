import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  name: string;

  password: string;

  isLogged: boolean;

  stream$: BehaviorSubject<string> = new BehaviorSubject<string>('Your name');

  sub: Subscription;

  constructor() {
    this.name = 'Your name';
    console.log('name = ', this.name);
    this.password = '';
    this.isLogged = Boolean(localStorage.getItem('name'));
    console.log('name = ', this.isLogged);
    this.sub = this.stream$.subscribe((value) => {
      this.name = value;
    });
  }

  isAuthentificated():Promise<boolean> {
    console.log('logservice ', this.isLogged);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isLogged);
      }, 1000);
    });
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
