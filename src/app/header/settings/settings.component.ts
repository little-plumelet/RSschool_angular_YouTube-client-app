import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ShowSettingsService } from 'src/app/services/show-settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
  constructor(public showSettingsService: ShowSettingsService) {
    console.log(showSettingsService);
  }

  ngOnInit(): void {
    console.log('On init');
  }
}
