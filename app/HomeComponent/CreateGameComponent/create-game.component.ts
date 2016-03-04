import { Component } from 'angular2/core';
import { PlayerCardComponent } from './player-card.component';
import { HostCardComponent } from './host-card.component';
@Component({
  templateUrl:'app/HomeComponent/CreateGameComponent/create-game.component.html',
  directives: [PlayerCardComponent,HostCardComponent]
})

export class CreateGameComponent {
  constructor() { }
  public banList: BannedPlayer[] = [];
  public me: Player = MOCKME;
  public players: Player[] = MOCKPLAYERS;
  public submited: boolean = false;

  submitGameLabel(field){
    field.disabled = true;
    this.submited = true;
  }
  onKick(event, toast){
    this.players.forEach((player, i)=>{
      if(player.id === event.id){
        this.players.splice(i, 1);
        toast.text = player.username + " has been kicked";
        toast.open();
      }
    });
  }
  onBan(event, toast){
    this.players.forEach((player, i)=>{
      if(player.id === event.id){
        this.players.splice(i, 1);
        this.banList.push(this.convertToBanned(player));
        toast.text = player.username + " has been banned for 5 minutes";
        toast.open();
      }
    });
  }
  convertToBanned(player){
    let bannedPlayer: BannedPlayer = {
      name: player.name,
      username: player.username,
      banTime: new Date()
    }
    return bannedPlayer;
  }

  get list(){
    return JSON.stringify(this.players);
  }
  get bans(){
    return JSON.stringify(this.banList);
  }
}
export var MOCKME: Player = {
                id:1,
                name: 'John Doe',
                username: 'John Doe',
                imageUrl: ''
};
export var MOCKPLAYERS: Player[] = [
  {id:2, name: 'George Hammond', username: 'George Hammond', imageUrl: ''},
  {id:3, name: 'Jenny Frey', username: 'Zebiegste', imageUrl: ''},
  {id:4, name: 'Roberto Benini', username: 'RobertoGuy', imageUrl: ''}
]
export interface Player{
  id: number,
  name: string,
  username: string,
  imageUrl: string
}
export interface BannedPlayer{
  name: string,
  username: string,
  banTime: Date
}
