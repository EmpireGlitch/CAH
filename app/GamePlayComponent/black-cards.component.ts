import { Component, Input, OnInit } from 'angular2/core';
import { CardComponent } from './card.component';

@Component({
  selector: 'black-cards',
  templateUrl: 'app/GamePlayComponent/black-cards.component.html',
  directives: [CardComponent]
})
export class BlackCardsComponent implements OnInit{
  @Input() cards: string[];
  @Input() free_spaces: number;

  constructor(){}

  ngOnInit() {
    this.mapBlackCards(this.cards);
    console.log(JSON.stringify(this.blackcards))
  }

  public blackcards: BlackCard[];
  public selected_cards: string[];

  public selectCard(card: any){

  }
  public mapBlackCards(cards: string[]): void{
     let blackcards: BlackCard[] = this.cards.map((text)=>{
      return {
        text: text,
        selected: false
      }
    })
    this.blackcards = blackcards;
  }
  // public blackys: BlackCard[] = [
  //  {text: "Hey", selected: false},
  //  {text: "Hey", selected: false},
  //  {text: "Hey", selected: false},
  //  {text: "Hey", selected: false},
  //  {text: "Hey", selected: false},
  //  {text: "Hey", selected: false},
  // ]
}

export interface BlackCard{
  text: string;
  selected: boolean;
}
