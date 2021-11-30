import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Car } from './car.model';
import { CARS } from './mock.cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  marks: string[] = [];
  models: string[] = [];
  colors: string[] = [];
  chosenColor: string = "";
  chosenCar: string = "";
  
  constructor() { }

  ngOnInit(): void {
    this.cars = CARS;
    for(let car of this.cars){
      this.marks.push(car.mark);
    }
    this.marks = Array.from(new Set(this.marks));
  }

  onMarkChoose(selectedMark: any) {
    this.models = [];
    const filteredCars = this.cars.filter(car => car.mark === selectedMark);
    this.marks = [];
    for(let car of filteredCars){
      this.models.push(car.model);
    }
    this.models = Array.from(new Set(this.models));
  }

  onModelChoose(selectedModel: any) {
    this.colors = [];
    const filteredCars = this.cars.find(car => car.model === selectedModel);
    this.models = [];
    // const colors1 = //filteredCars.map(car => car.colors);
    // console.log(colors1);
    // for(let car of filteredCars){
    //   for(let color of car.colors){
    //     this.colors.push(color);
    //   }
    // }
    if(!filteredCars) return;
    this.colors = filteredCars.colors;
    // this.colors = Array.from(new Set(this.colors));
  }

  onColorChoose(selectedColor : any){
    this.colors = [];
    //this.chosenCar =  this.chosenModel + ", " + this.chosenMark + ", " + this.chosenColor;
  }
}
