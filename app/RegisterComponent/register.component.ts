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
    <div class="content-wrap layout vertical">
      <paper-button *ngIf="!loggedIn()" class="loggin-button center-horizontal" (click)="login()">Login</paper-button>
      <paper-button *ngIf="loggedIn()" class="loggin-button layout center-horizontal" (click)="logout()">Logout</paper-button>
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
