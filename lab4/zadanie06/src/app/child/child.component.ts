import { Component, OnInit } from '@angular/core';
import { Input, Output }  from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() counter: number = 0;
  @Input() available: boolean = true;
  @Output() onCntClick = new EventEmitter();
  @Output() onRstClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  onClick() {
    if(this.available){
      this.onCntClick.emit();
    }
  }

  onReset() {
    this.onRstClick.emit();
  }
}
