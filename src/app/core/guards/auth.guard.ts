import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  canActivate(): Observable<boolean> {
    return this.loginService.isLoggedStream$.pipe(map((isAuthentificated) => {
      if (!isAuthentificated) {
        this.router.navigate(['/']);
      }
      return isAuthentificated;
    }));
  }
}
