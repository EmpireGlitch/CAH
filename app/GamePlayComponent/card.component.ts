import { Component, Input } from 'angular2/core';

@Component({
  selector: 'card',
  template: ` <paper-material #card elevation="1" (mouseover)="card.elevation=2" (mouseleave)="card.elevation=1">
                <ng-content></ng-content>
              </paper-material>`
})
export class CardComponent {
  constructor() { }
}
