import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean> {
    console.log(route, state);
    return this.loginService.isAuthentificated().then((isLogged) => {
      if (isLogged) return true;
      console.log('isLogged = ', isLogged);
      this.router.navigate(['/']);
      return false;
    });
  }
}
