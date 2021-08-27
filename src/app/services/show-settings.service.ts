import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ShowSettingsService {
  showFilterPanel: boolean;

  constructor() {
    this.showFilterPanel = false;
  }

  toggleFilterPanel() {
    this.showFilterPanel = !this.showFilterPanel;
  }
}
