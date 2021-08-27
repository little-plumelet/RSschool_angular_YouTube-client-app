import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminCreateCardFormComponent } from './components/admin-create-card-form/admin-create-card-form.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { customCardsReducer } from '../redux/reducers/customcards-reducer';
import { CustomCardsEffects } from '../redux/effects/customcards-effects';
import { CustomCardListComponent } from './components/custom-card-list/custom-card-list.component';
import { CustomCardStyleDirective } from './directives/customcard-style.directive';

@NgModule({
  declarations: [
    AdminPageComponent,
    AdminCreateCardFormComponent,
    CustomCardListComponent,
    CustomCardComponent,
    CustomCardStyleDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature(
      'customCardsState', customCardsReducer,
    ),
    EffectsModule.forFeature([CustomCardsEffects]),
    RouterModule.forChild([
      // {
      //   path: 'main',
      //   component: MainPageComponent,
      //   canActivate: [AuthGuard],
      // },
      // { path: 'main/:id', component: DetailedPageComponent, pathMatch: 'full' },

    ]),
  ],
  exports: [
    CustomCardListComponent,
  ],
})
export class AdminModule { }
