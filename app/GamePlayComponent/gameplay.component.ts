import { Component, OnInit } from 'angular2/core';
import { WhiteCardsComponent } from './white-cards.component';
import { CardComponent } from './card.component';

//Services and data
import { BlackCard, WhiteCard, DatabaseService } from '../services/database.service';

@Component({
  templateUrl: 'app/GamePlayComponent/gameplay.component.html',
  directives: [ WhiteCardsComponent, CardComponent],
  providers: [ DatabaseService ]
})
export class GamePlayComponent implements OnInit {
  constructor(private _databaseService : DatabaseService) {
  }
  public allBlackCards: BlackCard[] = [];
  public allWhiteCards: WhiteCard[] = [];

  public blackcard: BlackCard = { text: "", spaces: 0 }
  public whitecards: string[] = ["hey"];
  
  resetWhiteCards(){
    let cards: string [] = [];
    for(let i:number = 0; i < 10; i++){
      cards.push(this.allWhiteCards[Math.floor((Math.random()*this.allWhiteCards.length)+1)].text);
    }
    this.whitecards = cards;
  }
  resetBlackCard(){
    this.blackcard.text = this.allBlackCards[Math.floor((Math.random()*this.allBlackCards.length)+1)].text;
  }
  getWhiteCards(){
    this._databaseService.getWhiteCards().then(cards => {
      this.allWhiteCards = cards
      this.resetWhiteCards();
    });
  }
  getBlackCards(){
    this._databaseService.getBlackCards().then(cards => {
      this.allBlackCards = cards
      this.resetBlackCard();
    });
  }
  ngOnInit(){
    this.getWhiteCards();
    this.getBlackCards();
    console.log(this.allWhiteCards);
  }
}
