import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SharedModule } from './shared/shared.module';
import { LogoComponent } from './header/logo/logo.component';
import { SearchFormComponent } from './header/search-form/search-form.component';
import { SettingsComponent } from './header/settings/settings.component';
import { LoginFormComponent } from './header/login-form/login-form.component';
import { FilterComponent } from './search/filter/filter.component';
import { SearchItemStyleDirective } from './search/search-item-style.directive';
import { FilterCardsPipe } from './pipes/filter-cards.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    LogoComponent,
    SearchFormComponent,
    SettingsComponent,
    LoginFormComponent,
    FilterComponent,
    SearchItemStyleDirective,
    FilterCardsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  exports: [
    SearchResultsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
