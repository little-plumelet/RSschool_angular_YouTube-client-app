import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  constructor(public cardsService: YoutubeService) {}

  ngOnInit(): void {
    console.log('OnInit');
  }
}
