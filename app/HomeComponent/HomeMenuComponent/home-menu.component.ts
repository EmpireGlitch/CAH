import { Component } from 'angular2/core';
import { Router, CanActivate } from 'angular2/router';
import { tokenNotExpired } from 'angular2-jwt';
import { accountService } from '../../services/account.service';

@Component({
  templateUrl:'app/HomeComponent/HomeMenuComponent/home-menu.component.html',
})
//@CanActivate(()=>tokenNotExpired())

export class HomeMenuComponent {
  constructor(
      public accountService: accountService,
      private _router: Router
  ){ }
  create(){
    this._router.navigate(['CreateGame']);
  }
  join(){
    this._router.navigate(['JoinGame']);
  }
  settings(){
    this._router.navigate(['Settings']);
  }

}
