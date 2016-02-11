import { Component } from 'angular2/core';
@Component({
  template: `
    <h1 class="outside">Settings Component</h1>
    <paper-button *ngIf="loggedIn()" class="loggin-button layout center" (click)="logout()">Logout</paper-button>
  `
})
export class SettingsComponent {
  constructor() { }
}
