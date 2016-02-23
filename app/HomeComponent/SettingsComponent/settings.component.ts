import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { logoutService } from '../../services/logout.service';
@Component({
  template: `
    <h1 class="outside">Settings Component</h1>
    <div class="content-wrap layout vertical">
      <div class="menu-wrap center">
        <paper-icon-button (click)="back()" icon="arrow-back"></paper-icon-button>
        <paper-material class="settings-card">
          <img class="avatar-small" src="">
          <p>
            John Doe<br>
            username
          </p>
          <paper-button (click)="logout()" class="settings-button right">Logout</paper-button>
        </paper-material>
        <paper-material class="settings-card">
            <paper-dropdown-menu label="Language">
            <paper-menu class="dropdown-content" selected="0">
              <paper-item>English</paper-item>
              <paper-item>Latvian</paper-item>
              <paper-item>German</paper-item>
            </paper-menu>
          </paper-dropdown-menu>
          <div class="seperator"></div>
          <paper-dropdown-menu label="Theme">
          <paper-menu class="dropdown-content" selected="0">
            <paper-item>Light</paper-item>
            <paper-item>Blue</paper-item>
            <paper-item>Dark</paper-item>
          </paper-menu>
        </paper-dropdown-menu>
        </paper-material>
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
    this._logoutService.logout();
    this._router.navigate(['/Register']);
  }

  back(){
    console.debug('going back')
    window.history.back();
  }

  getThemes(){
    console.debug('gathering themes');
    //Access DB for themes
    //Create array with themes
    //Get current theme, select current in list
  }
  setTheme(id){
    console.debug('set theme number:',id);
    //Save theme to settings in DB
  }
}
