import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { FilterCardsPipe } from './pipes/filter-cards.pipe';
import { SearchItemStyleDirective } from './directives/search-item-style.directive';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { DetailedItemCardComponent } from './components/detailed-item-card/detailed-item-card.component';
import { StatisticsComponent } from './components/search/statistics/statistics.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { NotFoundComponent } from '../core/pages/not-found/not-found.component';
import { videoCardsReducer } from '../redux/reducers/videocards-reducer';

@NgModule({
  declarations: [
    MainPageComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilterCardsPipe,
    SearchItemStyleDirective,
    DetailedPageComponent,
    DetailedItemCardComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'main',
        component: MainPageComponent,
        canActivate: [AuthGuard],
      },
      { path: 'main/error', component: NotFoundComponent, pathMatch: 'full' },
      { path: 'main/:id', component: DetailedPageComponent, pathMatch: 'full' },

    ]),
    StoreModule.forFeature(
      'videoCardsState', videoCardsReducer,
    ),
  ],
  exports: [RouterModule],
})
export class YoutubeModule { }
