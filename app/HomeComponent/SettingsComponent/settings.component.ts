import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { accountService } from '../../services/account.service';
@Component({
  templateUrl:'app/HomeComponent/SettingsComponent/settings.component.html',
  styles: ['label{background: red;}']
  // styles: [`
  //     	label{
  //         background: red;
  //       }
  //   `]

})
export class SettingsComponent {
  constructor(
    private _accountService:accountService,
    private _router:Router
  ) { }

  logout(){
    this._accountService.logout();
    this._router.navigate(['/Register']);
  }

  back(){
    console.debug('going back')
    window.history.back();
  }

  getThemes(){
    console.debug('gathering themes');
    //Access DB for themes
    //Create array with themes
    //Get current theme, select current in list
  }
  setTheme(id){
    console.debug('set theme number:',id);
    //Save theme to settings in DB
  }
}
