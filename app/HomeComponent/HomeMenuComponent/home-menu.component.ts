import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
@Component({
  template: `
    <h1>Home menu</h1>
    <button (click)=create()>Create Game</button>
    <button (click)=join()>Join Game</button>
    <button (click)=settings()>Settings</button>
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
