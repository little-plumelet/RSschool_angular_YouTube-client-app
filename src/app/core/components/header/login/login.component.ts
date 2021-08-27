import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  stream$: Subject<string>;

  constructor(public loginService: LoginService) {
    this.stream$ = this.loginService.getName();
  }
}
