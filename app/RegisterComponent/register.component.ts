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
      <div class="menu-wrap center">
        <h1 id="login-label" class="center-horizontal">Sign in</h1>
        <paper-button id="login-google-button" class="login-button" (click)="googleLogin()">Google+</paper-button>
        <paper-button id="login-facebook-button" class="login-button" (click)="facebookLogin()">facebook</paper-button>
        <paper-button *ngIf="!loggedIn()" class="login-button center-horizontal" (click)="login()">Legacy Login</paper-button>
        <paper-button *ngIf="loggedIn()" class="login-button layout center-horizontal" (click)="logout()">Legacy Logout</paper-button>
      </div>
    </div>
  `
})

export class RegisterComponent {

  lock = new Auth0Lock('yb7rrG4tEdltdbf50CLSc7lAFm6hrqTy', 'kartis.eu.auth0.com');
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    private _router: Router
  ) { }

  googleLogin(){
    console.debug('attempt Google+ login');
  }

  facebookLogin(){
    console.debug('attempt facebook login');

  }

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
