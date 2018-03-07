import { Component } from '@angular/core';
import { StylesCompileDependency } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Only single template allowed. 
  // template: '<app-servers></app-servers>',

  // styleUrls: ['./app.component.css'] // Array of css files, add mutiple css files in here. 

  // Following css styling overrides  
  styles: [` 
  h1 {
    color: red;
  }`]

})
export class AppComponent {
  title = 'Angular class';
}