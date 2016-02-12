import { Component } from 'angular2/core';
import { logoutService } from '../../services/logout.service';
@Component({
  template: `
    <h1 class="outside">Settings Component</h1>
    <div class="content-wrap layout vertical">
      <div class="menu-wrap center">
        <paper-icon-button icon="arrow-back"></paper-icon-button>
        <paper-button class="settings-button layout center">Theme</paper-button>
        <paper-button class="settings-button layout center">Language</paper-button>
        <paper-button class="settings-button layout center" (click)="logout()">Logout</paper-button>
      </div>
    </div>
  `
})
export class SettingsComponent {
  constructor(
    private _logoutService:logoutService
  ) { }
  logout(){
    console.debug('logout');
    this._logoutService.logout()
  }
}
