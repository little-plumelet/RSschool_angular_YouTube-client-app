import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ShowSettingsService {
  showFilterPanel = false;

  toggleFilterPanel() {
    this.showFilterPanel = !this.showFilterPanel;
  }
}
