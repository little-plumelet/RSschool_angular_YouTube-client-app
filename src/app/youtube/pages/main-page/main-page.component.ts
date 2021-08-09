import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  constructor(public cardsService: CardsService) {}

  ngOnInit(): void {
    console.log('OnInit');
  }
}
