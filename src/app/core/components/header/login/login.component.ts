import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { LoginService } from 'src/app/auth/auth.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  name$: Subject<string>;

  constructor(public loginService: LoginService) {
    this.name$ = this.loginService.getName();
  }

  clearData() {
    this.loginService.clearDataInLocalStorage()
  }
}
