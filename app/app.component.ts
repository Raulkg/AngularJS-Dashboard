import { Component } from '@angular/core';
import { Item } from './item';



@Component({
  selector: 'my-app',
  template: `

  <h1>Hello {{name}}</h1>

	<input [(ngModel)]="myItem.name" placeholder="name">
  <h2> This is gonna display {{myItem.name}} </h2>

  `,
})
export class AppComponent  { name = 'Angular'; myItem = new Item(1,'No of API Calls',5) }
