import { Component, Input } from 'angular2/core';

@Component({
  selector: 'white-card',
  template: ` <paper-material #card class="white-card" elevation="1" (mouseover)="card.elevation=2" (mouseleave)="card.elevation=1">
                {{text}}
              </paper-material>`
})
export class WhiteCardComponent {
  constructor() { }
  @Input() text: string;
}
