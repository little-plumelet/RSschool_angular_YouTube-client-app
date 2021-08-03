import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ISearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent implements OnInit {
  @Input() item?: ISearchItem;

  dateStr: string = '';

  date = new Date();

  diff = 0;

  ngOnInit(): void {
    const currentDate = new Date();
    if (this.item) this.dateStr = this.item.snippet.publishedAt.replace('/(T[A-Za-z0-9_-]*/g', '');
    this.date = new Date(this.dateStr);
    this.diff = Math.floor((Date.UTC(currentDate.getFullYear(),
      currentDate.getMonth(), currentDate.getDate())
    - Date.UTC(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()))
    / (1000 * 60 * 60 * 24));
  }
}
