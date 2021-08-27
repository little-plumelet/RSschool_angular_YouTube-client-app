import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/state.models';
import { ICustomCard } from '../../models/custom-card';
import { CustomCardService } from '../../services/custom-card.service';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCardComponent {
  @Input() customCard?: ICustomCard;

  constructor(
    private store: Store<AppState>,
    private customCardService: CustomCardService,
  ) {}
}
