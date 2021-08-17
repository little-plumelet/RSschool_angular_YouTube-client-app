import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  canActivate(): Promise<boolean> {
    return this.loginService.isAuthentificated().then((isLogged) => {
      if (isLogged) return true;
      this.router.navigate(['/']);
      return false;
    });
  }
}
