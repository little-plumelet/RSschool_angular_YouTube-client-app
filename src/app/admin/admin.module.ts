import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminCreateCardFormComponent } from './components/admin-create-card-form/admin-create-card-form.component';
// import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { customCardsReducer } from '../redux/reducers/customcards-reducer';
import { CustomCardsEffects } from '../redux/effects/customcards-effects';

@NgModule({
  declarations: [
    AdminPageComponent,
    AdminCreateCardFormComponent,
    // CustomCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature(
      'customCardsState', customCardsReducer,
    ),
    EffectsModule.forFeature([CustomCardsEffects]),
    RouterModule,
  ],
})
export class AdminModule { }
