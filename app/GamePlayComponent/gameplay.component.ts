import { Component } from 'angular2/core';
import { WhiteCardComponent } from './white-card.component';
@Component({
  templateUrl: 'app/GamePlayComponent/gameplay.component.html',
  directives: [WhiteCardComponent]
})
export class GamePlayComponent {
  constructor() { }
  
}
