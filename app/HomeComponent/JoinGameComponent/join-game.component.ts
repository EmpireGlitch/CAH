import { Component } from 'angular2/core';
import { InterfaceHeaderComponent } from '../../GlobalComponents/interface-header.component';

@Component({
  templateUrl:'app/HomeComponent/JoinGameComponent/join-game.component.html',
  directives: [InterfaceHeaderComponent]
})
export class JoinGameComponent {
  constructor() { }
}
