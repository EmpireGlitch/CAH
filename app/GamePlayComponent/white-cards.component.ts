import { Component, Input, OnInit } from 'angular2/core';
import { CardComponent } from './card.component';

@Component({
  selector: 'white-cards',
  templateUrl: 'app/GamePlayComponent/white-cards.component.html',
  directives: [CardComponent]
})
export class WhiteCardsComponent implements OnInit{
  @Input() cards: string[];
  @Input() free_spaces: number;

  constructor(){}

  ngOnInit() {
    this.mapWhiteCards(this.cards);
    console.log(JSON.stringify(this.whitecards))
  }

  public whitecards: WhiteCard[];
  public selected_cards: string[];

  public selectCard(card: any){

  }
  public mapWhiteCards(cards: string[]): void{
     let whitecards: WhiteCard[] = this.cards.map((text)=>{
      return {
        text: text,
        selected: false
      }
    })
    this.whitecards = whitecards;
  }
}

export interface WhiteCard{
  text: string;
  selected: boolean;
}
