import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  counter: number = 0;
  available: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  counterPlusPlus() {
    this.counter++;
    if(this.counter >= 10){
      this.available = false;
    }
  }

  reset(){
    this.counter = 0;
    this.available = true;
  }
}
