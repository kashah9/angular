import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers', // defined element as class name
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  
  // Inline template 
  // template: '<app-servers></app-servers>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
