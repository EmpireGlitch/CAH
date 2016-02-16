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
        <paper-material class="settings-card">
          <img class="avatar-small" src="">
          <p>
            John Doe<br>
            username
          </p>
          <paper-button (click)="logout()" class="settings-button right">Logout</paper-button>
        </paper-material>
        <paper-button (click)="theme()" class="settings-button layout center">Theme</paper-button>
        <paper-button (click)="language()" class="settings-button layout center">Language</paper-button>
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
    console.debug('Settings, logout')
    this._logoutService.logout()
    this._router.navigate(['/Register'])
  }

  theme(){
    console.debug('Settings, theme')
  }

  language(){
    console.debug('Settings, language')
  }
}
