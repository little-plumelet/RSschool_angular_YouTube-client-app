import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ShowSettingsService } from '../../../services/show-settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(public showSettingsService: ShowSettingsService) {}
}
