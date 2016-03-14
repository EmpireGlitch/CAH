import { Component, Input } from 'angular2/core';
import { CardComponent } from './card.component';


@Component({
  selector: 'black-cards',
  templateUrl: 'app/GamePlayComponent/black-cards.component.html',
  directives: [CardComponent]
})
export class BlackCardsComponent {
  constructor() { }
  @Input() blackcards: string[];

}
