import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
@Component({
  template: `
    <div class="content-wrap layout vertical">
      <h1 class="outside">Home menu</h1>
      <div class="menu-wrap center">
        <paper-icon-button icon="arrow-back"></paper-icon-button>
        <div calss="user-data">
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
