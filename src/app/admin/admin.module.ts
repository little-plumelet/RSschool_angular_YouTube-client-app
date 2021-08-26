import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminCreateCardFormComponent } from './components/admin-create-card-form/admin-create-card-form.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    AdminCreateCardFormComponent,
    CustomCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class AdminModule { }
