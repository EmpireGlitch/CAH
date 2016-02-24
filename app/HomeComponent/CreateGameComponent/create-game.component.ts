import { Component } from 'angular2/core';
import { PlayerCardComponent } from './player-card.component';
import { HostCardComponent } from './host-card.component';
@Component({
  templateUrl:'app/HomeComponent/CreateGameComponent/create-game.component.html',
  directives: [PlayerCardComponent,HostCardComponent]
})


export class CreateGameComponent {
  constructor() {

  }
  public me: Player = {id:1,
                  name: 'John Doe',
                  username: 'John Doe',
                  imageUrl: ''};
  public one: Player = {id:2,
                  name: 'Gorge Hammond',
                  username: 'Gorge Hammond',
                  imageUrl: ''};
  public two: Player = {id:3,
                  name: 'Peter Smith',
                  username: 'Peter Smith',
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
  public players: Player[]=[this.one,this.two];
  /*
  addPlayer(newPlayer : Player){
    this.players.push(newPlayer);
    //Generate dom element
    var list = document.getElementById('player-list');
    var card = `<paper-material class="player-lobby-card center-horizontal" id="`+newPlayer.username+`">
        <img src="`+newPlayer.imageUrl+`" class="avatar-small center-vertical">
        <p class="center-vertical">`+newPlayer.username+`</p>
        <paper-menu-button>
          <paper-icon-button icon="more-vert" class="dropdown-trigger"></paper-icon-button>
          <paper-menu varticalAlign='top' class="dropdown-content layout vertical">
            <paper-item (click)="kick('`+newPlayer.username+`',toast)">Kick</paper-item>
            <paper-item #item (click)="ban(`+newPlayer.username+`,toast)">Ban</paper-item>
          </paper-menu>
        </paper-menu-button>
    </paper-material>
    `
    angular.element(list).append(card);
    // list.appendChild(card);
  }


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
