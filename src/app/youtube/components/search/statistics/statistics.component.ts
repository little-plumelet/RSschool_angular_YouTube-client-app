import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent {
  @Input() item = {} as ISearchItem;
}
