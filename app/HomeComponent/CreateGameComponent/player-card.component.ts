import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { Player } from './create-game.component';
@Component({
  selector: 'player-card',
  templateUrl: 'app/HomeComponent/CreateGameComponent/player-card.component.html'
})
export class PlayerCardComponent {
  constructor() { }
  @Input() player: Player;
  @Output() kick = new EventEmitter();
  @Output() ban = new EventEmitter();

  kickClick(player){
    this.kick.next({
      id: player.id
    });
  }
  banClick(player){
    this.ban.next({
      id: player.id
    });
  }
  //remove for pruduction
  get debug(){
    return JSON.stringify(this.player);
  }
}
