import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SearchInputService } from 'src/app/core/services/search-input.service';
import { FilterCardsService } from '../../../../youtube/services/filter-cards.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent {
  constructor(
    public filterCardsService: FilterCardsService,
    public inputService: SearchInputService,
  ) {}
}
