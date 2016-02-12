import { Component } from 'angular2/core';
@Component({
  template: `
    <h1 class="outside">CreateGame</h1>
    <div class="menu-wrap center">
      <paper-icon-button icon="arrow-back"></paper-icon-button>
      <paper-input label="Game name" class="game-label center-horizontal"></paper-input>

      <paper-card class="player-lobby-card center-horizontal">
        <div class="card-content">
          <img class="avatar small" src="">
          <p>John Doe</p>
          <paper-icon-button icon="more-vert"></paper-icon-button>
        </div>
      </paper-card>

      <paper-material class="player-lobby-card center-horizontal">
          <img class="avatar-small" src="" class="avatart-small center-vertical">
          <p class="center-vertical">John Doe</p>
          <paper-icon-button icon="more-vert"></paper-icon-button>
      </paper-material>

      <paper-icon-button icon="arrow-forward" class="forward-icon"></paper-icon-button>
    </div>
  `
})
export class CreateGameComponent {
  constructor() { }
}
