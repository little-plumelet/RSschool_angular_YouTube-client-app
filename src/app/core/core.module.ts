import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchFormComponent } from './components/header/search-form/search-form.component';
import { SettingsComponent } from './components/header/settings/settings.component';
import { LoginComponent } from './components/header/login/login.component';
import { LoginPageComponent } from '../auth/pages/login-page/login-page.component';
import { FilterComponent } from '../youtube/components/filter/filter.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { AdminPageComponent } from '../admin/pages/admin-page/admin-page.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    LogoComponent,
    SearchFormComponent,
    SettingsComponent,
    LoginComponent,
    FilterComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
    AuthModule,
    RouterModule.forChild([
      { path: '', component: LoginPageComponent },
      { path: 'admin', component: AdminPageComponent },
    ]),
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
