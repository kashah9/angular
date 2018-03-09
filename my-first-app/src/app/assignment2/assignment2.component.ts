import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  Username: String = " "; 
  buttonStatus = true;

  constructor(){ 
  }

  // onKeyStroke(event: Event){
  //   if (this.Username == null) {
  //     console.log(event);
  //     this.buttonStatus = true;
     
  //   }
  //   else {
  //     this.buttonStatus = false;
  //   }
  // }
  onButtonClick(){
    this.Username = ' ';
  }

   ngOnInit() {
  }

}
