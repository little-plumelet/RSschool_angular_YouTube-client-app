import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ISearchItem } from '../../models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-detailed-item-card',
  templateUrl: './detailed-item-card.component.html',
  styleUrls: ['./detailed-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedItemCardComponent implements OnInit, OnDestroy {
  item = {} as ISearchItem;

  subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    public youtubeService: YoutubeService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.youtubeService.getCardById(params.id);
      this.youtubeService.cardObservable$.subscribe(
        (res) => {
          if (res === undefined) {
            this.router.navigate(['/main/error']);
          } else if (Object.keys(res).length) {
            this.item = res;
          }
        },
      );
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
