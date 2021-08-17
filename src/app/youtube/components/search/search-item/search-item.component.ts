import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ISearchItem } from '../../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent {
  @Input() item?: ISearchItem;
}
