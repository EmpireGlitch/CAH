import { Component } from 'angular2/core';
@Component({
  template: `
    <h1 class="outside">CreateGame</h1>
    <paper-input label="Game name" class="game-label center"></paper-input>
    <paper-card class="player-lobby-card center">
      <div class="card-content">
        <img class="avatar small" src="">
        <p>John Doe</p>
      </div>
      <div class="card-actions">
        <paper-button>Some action</paper-button>
      </div>
    </paper-card>
    <paper-icon-button icon="arrow-forward"></paper-icon-button>
  `
})
export class CreateGameComponent {
  constructor() { }
}
