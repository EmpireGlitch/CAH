import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { logoutService } from '../../services/logout.service';
@Component({
  template: `
    <h1 class="outside">Settings Component</h1>
    <div class="content-wrap layout vertical">
      <div class="menu-wrap center">
        <paper-icon-button icon="arrow-back"></paper-icon-button>
        <paper-card class="settings-card">
        <div class="card-content">
        <img class="avatar-small" src="">
        <p>
        John Doe<br>
        username
        </p>
        </div>
        <div class="card-actions">
          <paper-button (click)="logout()">Logout</paper-button>
          </div>
        </paper-card>
        <paper-button class="settings-button layout center">Theme</paper-button>
        <paper-button class="settings-button layout center">Language</paper-button>
      </div>
    </div>
  `
})
export class SettingsComponent {
  constructor(
    private _logoutService:logoutService,
    private _router:Router
  ) { }
  logout(){
    this._logoutService.logout()
    this._router.navigate(['/Register'])
  }
}
