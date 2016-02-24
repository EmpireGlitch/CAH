import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { Player } from './create-game.component';
@Component({
  selector: 'host-card',
  // template: '{{debug}}'
  templateUrl: 'app/HomeComponent/CreateGameComponent/host-card.component.html'
})
export class HostCardComponent {
  constructor() { }
  @Input() me: Player;
  //remove for pruduction
  get debug(){
    return JSON.stringify(this.me);
  }
}
