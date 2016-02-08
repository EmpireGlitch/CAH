import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

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
}
