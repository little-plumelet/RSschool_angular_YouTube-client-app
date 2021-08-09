import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchFormComponent } from './components/header/search-form/search-form.component';
import { SettingsComponent } from './components/header/settings/settings.component';
import { LoginFormComponent } from './components/header/login-form/login-form.component';
import { FilterComponent } from '../youtube/components/search/filter/filter.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    LogoComponent,
    SearchFormComponent,
    SettingsComponent,
    LoginFormComponent,
    FilterComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
