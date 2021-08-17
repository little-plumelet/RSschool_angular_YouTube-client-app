import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  name: string;

  password: string;

  constructor(public loginService: LoginService) {
    this.name = '';
    this.password = '';
  }
}
