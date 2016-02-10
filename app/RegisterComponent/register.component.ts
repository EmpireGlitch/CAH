import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

declare var Auth0Lock;
/*
@Component({
  template: `
    <h1>RegisterComponent</h1>
    <button (click)=register()>Register</button>
  `
})
export class RegisterComponent {
  constructor(
    private _router: Router
  ) { }
  register(){
    this._router.navigate(['Home']);
  }
}*/

@Component({
  template: `
    <h1 class="outside">Login</h1>
    <div class="content-wrap">
    <paper-menu-button>
  <paper-icon-button icon="menu" class="dropdown-trigger"></paper-icon-button>
  <paper-menu class="dropdown-content">
    <paper-item>Share</paper-item>
    <paper-item>Settings</paper-item>
    <paper-item>Help</paper-item>
  </paper-menu>
</paper-menu-button>
    <paper-menu>
        <paper-item>Item 1</paper-item>
        <paper-item>Item 2</paper-item>
      </paper-menu>
      <paper-button *ngIf="!loggedIn()" class="loggin-button" (click)="login()">Login</paper-button>
      <paper-button *ngIf="loggedIn()" class="loggin-button" (click)="logout()">Logout</paper-button>
      <paper-spinner active></paper-spinner>
    </div>
  `
})

export class RegisterComponent {

  lock = new Auth0Lock('yb7rrG4tEdltdbf50CLSc7lAFm6hrqTy', 'kartis.eu.auth0.com');
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    private _router: Router
  ) { }

  login() {
    let self = this;
    this.lock.show(function(err:string, profile:string, id_token:string) {

      if(err) {
        throw new Error(err);
      }

      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', id_token);

      console.log(

      )
      self.loggedIn();
      self._router.navigate(['Home']);
    });
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    return tokenNotExpired();
  }

}
