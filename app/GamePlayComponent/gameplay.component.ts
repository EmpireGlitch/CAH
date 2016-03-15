import { Component } from 'angular2/core';
import { WhiteCardsComponent } from './white-cards.component';
import { CardComponent } from './card.component';

@Component({
  templateUrl: 'app/GamePlayComponent/gameplay.component.html',
  directives: [ WhiteCardsComponent, CardComponent]
})
export class GamePlayComponent {
  constructor() { }
  blackcard: BlackCard = {
    text: "White cards is this card ______ some space and _______ some other space",
    spaces: 2
  };
  whitecards: string[] = ["Black here", "Black there", "Gray.. no. Black here", "Some Other Random black"];
}

export interface BlackCard{
  text: string;
  spaces: number;
}
