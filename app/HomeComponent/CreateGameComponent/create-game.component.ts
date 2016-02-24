import { Component } from 'angular2/core';
import { PlayerCardComponent } from './player-card.component';
@Component({
  templateUrl:'app/HomeComponent/CreateGameComponent/create-game.component.html',
  directives: [PlayerCardComponent]
})


export class CreateGameComponent {
  constructor() { }
  public me: Player = {id:1,
                  name: 'John Doe',
                  username: 'John Doe',
                  imageUrl: ''};

  public submited: boolean = false;
  submitGameLabel(field){
    field.disabled = true;
    this.submited = true;
  //  this.addSelf();
  //  this.debugStart();
  //  this.getPlayers();
  }
  addSelf(){
    this.players.push(this.me);
    // generate dom element

  }

  public players: Player[]=[this.me,this.me,this.me];

  /*
  addPlayer(newPlayer : Player){}
*/
  // for now 'name' later on use player ID for identification
  removePlayer(name){
    var card = document.getElementById(name);
    // card.content = "";
    return true;
  }

  kick(name,toast){
    toast.close();
    toast.text = name + " has been kicked";
    toast.open();
    this.removePlayer(name);
    return true;
  }

  onKick(eventObj){
    console.log("kick Event");
    console.log(JSON.stringify(eventObj.username));
  }

  ban(name,toast){
    toast.close();
    toast.text = name + " has been banned for 5 minutes";
    toast.open();
    this.removePlayer(name);
    return true;
  }

  get list(){
    return JSON.stringify(this.players);
  }
}

export interface Player{
  id: number,
  name: string,
  username: string,
  imageUrl: string
}
