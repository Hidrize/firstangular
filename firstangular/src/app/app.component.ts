import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ul>
  <li *ngif = "myArr; else idTemplate"> Type array is present </li>
  </ul>
  <ng-template  #idTemplate > Array is empty </ng-template> `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
title(title: any) {
  throw new Error('Method not implemented.');
}

myArr = ['a','e','i'];



}
