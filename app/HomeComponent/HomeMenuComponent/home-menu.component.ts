import { Component } from 'angular2/core';
import { Router, CanActivate } from 'angular2/router';
import { tokenNotExpired } from 'angular2-jwt';
@Component({
  template: `
    <div class="content-wrap layout vertical">
      <h1 class="outside">Home menu</h1>
      <div class="menu-wrap center">
        <div class="user-data">
          <img class="avatar" src="">
          <p>
            John Doe<br>
            username
          </p>
        </div>
        <paper-button (click)=create() class="menu-button">Create Game</paper-button>
        <paper-button (click)=join() class="menu-button">Join Game</paper-button>
        <paper-button (click)=settings() class="menu-button">Settings</paper-button>
      </div>
    </div>
  `
})
@CanActivate(()=>tokenNotExpired())

export class HomeMenuComponent {
  constructor(
      private _router: Router
  ){ }

  create(){
    this._router.navigate(['CreateGame'])
  }
  join(){
    this._router.navigate(['JoinGame'])
  }
  settings(){
    this._router.navigate(['Settings'])
  }

}
