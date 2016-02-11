import { Component } from 'angular2/core';
@Component({
  template: `
    <h1 class="outside">Settings Component</h1>
    <div class="content-wrap layout vertical">
      <paper-icon-button icon="arrow-back"></paper-icon-button>
      <paper-button class="loggin-button layout center">Theme</paper-button>
      <paper-button class="loggin-button layout center">Language</paper-button>
      <paper-button class="loggin-button layout center" (click)="logout()">Logout</paper-button>
    </div>
  `
})
export class SettingsComponent {
  constructor() { }
}
