import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { FilterCardsPipe } from './pipes/filter-cards.pipe';
import { SearchItemStyleDirective } from './directives/search-item-style.directive';

@NgModule({
  declarations: [
    MainPageComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilterCardsPipe,
    SearchItemStyleDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: MainPageComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class YoutubeModule { }
