import { Component } from 'angular2/core';
@Component({
  template: `
    <h1 class="outside">CreateGame</h1>
    <div class="menu-wrap center">
      <paper-icon-button icon="arrow-back"></paper-icon-button>
      <paper-input label="Game name" class="game-label center-horizontal"></paper-input>

      <paper-card class="player-lobby-card center-horizontal">
        <div class="card-content">
          <img class="avatar-small" src="">
          <p>John Doe</p>
          <paper-icon-button icon="more-vert"></paper-icon-button>
        </div>
      </paper-card>

      <paper-material class="player-lobby-card center-horizontal" id="John Doe">
          <img src="" class="avatar-small center-vertical">
          <p class="center-vertical">John Doe</p>
          <paper-menu-button>
            <paper-icon-button icon="more-vert" class="dropdown-trigger"></paper-icon-button>
            <paper-menu varticalAlign='top' class="dropdown-content layout vertical">
              <paper-item (click)="kick('John Doe',toast)">Kick</paper-item>
              <paper-item #item (click)="ban('John Doe',toast)">Ban</paper-item>
            </paper-menu>
          </paper-menu-button>
      </paper-material>

      <paper-icon-button icon="arrow-forward" class="forward-icon"></paper-icon-button>
      <paper-toast #toast id="toast" text=""></paper-toast>
    </div>
  `
})


export class CreateGameComponent {
  constructor() { }
  debugStart(){
   var one: Player = {id:1,
                   name: 'John Doe',
                   username: 'John Doe',
                   imageUrl: ''};
   var two: Player = {id:2,
                  name: 'Peter Smith',
                  username: 'Peter Smith',
                  imageUrl: ''};
   this.addPlayer(one);
   this.addPlayer(two);

  }

  public players: Player[]=[];
  addPlayer(newPlayer : Player){
    this.players.push(newPlayer);

  }

  // for now 'name' later on use player ID for identification
  removePlayer(name){
    var card = document.getElementById(name);
    // card.content = "";
    return true;
  }

  kick(name,toast){
    console.debug('create-game, kick');
    toast.text = name + " has been kicked";
    toast.open();
    this.removePlayer(name);
    return true;
  }

  ban(name,toast){
    console.debug('create-game, ban');
    console.debug(toast);
    toast.text = name + " has been banned for 5 minutes";
    toast.open();
    this.removePlayer(name);
    return true;
  }

}

export interface Player{
  id: number,
  name: string,
  username: string,
  imageUrl: string
}
