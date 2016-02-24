import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { Player } from './create-game.component';
@Component({
  selector: 'player-card',
  templateUrl: 'app/HomeComponent/CreateGameComponent/player-card.component.html'
})
export class PlayerCardComponent {
  constructor() { }
  @Input() player: Player;

  //remove for pruduction
  get debug(){
    return JSON.stringify(this.player);
  }
}
