import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: string = "";
  longButtons: string[] = ["AC", "CE"];
  buttons: string[] = [
      "7", "8", "9", "/", "4", "5", "6", "*",
      "1", "2", "3", "-", ".", "0", "+", "="
  ]; 

  private prevVal: string = "";
  private currVal: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addToExpression(value: string){
    if(this.result != ""){
      this.prevVal = this.currVal;
      this.currVal = value;
    }

    if(value == "AC"){
      this.result = "";
    }
    else if(value == "CE"){
      this.result = this.prevVal != "=" ? this.result.slice(0, -1) : this.result;
    }
    else if(value == "="){
      this.result = eval(this.result);
    }
    else {
      this.result += value;
    }
  }

}
