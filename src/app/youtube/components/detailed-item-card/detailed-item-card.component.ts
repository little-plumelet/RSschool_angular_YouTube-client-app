import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ISearchItem } from '../../models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-detailed-item-card',
  templateUrl: './detailed-item-card.component.html',
  styleUrls: ['./detailed-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedItemCardComponent implements OnInit {
  item: ISearchItem | undefined;

  constructor(
    private route: ActivatedRoute,
    public youtubeService: YoutubeService,
    private router: Router,
  ) {
    this.item = {} as ISearchItem;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.item = this.youtubeService.getCardById(params.id);
      if (!this.item) this.router.navigate(['/main/error']);
    });
  }
}
