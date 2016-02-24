import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { Player } from './create-game.component';
@Component({
  selector: 'player-card',
  templateUrl: 'app/HomeComponent/CreateGameComponent/player-card.component.html',
  events: [ 'kick' ]
})
export class PlayerCardComponent {
  constructor() { }
  @Input() player: Player;
  @Output() kick = new EventEmitter;
  kickClick($event, username){
    console.log("childEmiter!")
    this.kick.next({event: $event,username: username});
  }
  //remove for pruduction
  get debug(){
    return JSON.stringify(this.player);
  }
}
