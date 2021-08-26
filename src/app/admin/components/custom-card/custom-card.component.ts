import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ICustomCard } from '../../models/custom-card';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCardComponent implements OnInit {
  card = {} as ICustomCard;
  constructor() { }

  ngOnInit(): void {
  }
}
