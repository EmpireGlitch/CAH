import { Component } from 'angular2/core';
import { Router, Location } from 'angular2/router';
@Component({
  selector: 'interface-header',
  templateUrl: 'app/GlobalComponents/interface-header.component.html'
})
export class InterfaceHeaderComponent {
  constructor(public _router : Router, public _location: Location) { }
  back(){
    let urlPath = this._location.path();
    let pathArray = urlPath.split('/');
    pathArray.splice(-1,1);
    urlPath = pathArray.join('/');
    this._router.navigateByUrl(urlPath);
  }
}
