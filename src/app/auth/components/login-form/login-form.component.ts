import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  name = '';

  password = '';

  constructor(public loginService: LoginService) {}

  onLogin() {
    this.loginService.submitDateToLocalStorage(this.name, this.password);
  }
}
