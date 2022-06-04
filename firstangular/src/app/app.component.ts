import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ul> 
  <li *ngif = "myArr; else idTemplate"
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
myArr = ['a','e','i'];



}
