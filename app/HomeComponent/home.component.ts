import { Component } from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import { CreateGameComponent } from './CreateGameComponent/create-game.component';
import { HomeMenuComponent } from './HomeMenuComponent/home-menu.component';
import { SettingsComponent } from './SettingsComponent/settings.component';
import { JoinGameComponent } from './JoinGameComponent/join-game.component';
import { GamePlayComponent } from '../GamePlayComponent/gameplay.component';

@Component({
  template: `
  <router-outlet></router-outlet>`,
  directives: [RouterOutlet]
})

@RouteConfig([
  { path:'/',         name: 'HomeMenu',   component: HomeMenuComponent, useAsDefault: true},
  { path:'/create',   name: 'CreateGame', component: CreateGameComponent},
  { path:'/join',     name: 'JoinGame',   component: JoinGameComponent},
  { path:'/settings', name: 'Settings',   component: SettingsComponent},
  { path:'/gameplay', name: 'Gameplay',   component: GamePlayComponent}
])

export class HomeComponent {
  constructor() { }
}
