import { Component } from 'angular2/core';
import { BlackCardsComponent } from './black-cards.component';
import { CardComponent } from './card.component';

@Component({
  templateUrl: 'app/GamePlayComponent/gameplay.component.html',
  directives: [ BlackCardsComponent, CardComponent]
})
export class GamePlayComponent {
  constructor() { }
  whitecard: Whitecard = {
    text: "White cards is this card ______ some space and _______ some other space",
    spaces: 2
  };
  blackcards: string[] = ["Black here", "Black there", "Gray.. no. Black here", "Some Other Random black"];
}

export interface Whitecard{
  text: string;
  spaces: number;
}
