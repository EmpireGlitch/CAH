import { Component } from 'angular2/core';
import { BlackCardsComponent } from './black-cards.component';
import { CardComponent } from './card.component';

@Component({
  templateUrl: 'app/GamePlayComponent/gameplay.component.html',
  directives: [ BlackCardsComponent, CardComponent]
})
export class GamePlayComponent {
  constructor() { }
  whitecard: string = "White cards is this card ______ some space and _______ some other space"
  blackcards: string[] = ["Black here", "Black there", "Gray.. no. Black here", "Some Other Random black"];
}
