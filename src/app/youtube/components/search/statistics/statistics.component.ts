import {
  Component,
  OnInit,
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
export class StatisticsComponent implements OnInit {
  @Input() item: ISearchItem;

  constructor() {
    this.item = {} as ISearchItem;
  }

  ngOnInit(): void {
    console.log('OnInit');
  }
}
