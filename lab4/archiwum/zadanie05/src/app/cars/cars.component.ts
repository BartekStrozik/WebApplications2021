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
  selectedMark: string = "";
  models: string[] = [];
  selectedModel: string = "";
  colors: string[] = [];
  selectedColor: string = "";
  selectedCar: string = "";
  
  constructor() { }

  ngOnInit(): void {
    this.cars = CARS;
    this.marks = this.cars.map(car => car.mark);
    this.marks = Array.from(new Set(this.marks));
  }

  onMarkSelect() {
    this.marks = [];
    const filteredCars = this.cars.filter(car => car.mark === this.selectedMark);
    if(!filteredCars) return;
    this.models = filteredCars.map(car => car.model);
    this.models = Array.from(new Set(this.models));
  }

  onModelSelect() {
    this.models = [];
    const filteredCars = this.cars.filter(car => car.model === this.selectedModel);
    if(!filteredCars) return;
    const colorsArrays = filteredCars.map(car => car.colors);
    for(let colors of colorsArrays){
      for(let color of colors){
        this.colors.push(color);
      }
    }
    this.colors = Array.from(new Set(this.colors));
  }

  onColorSelect(){
    this.colors = [];
    this.selectedCar =  this.selectedModel + ", " + this.selectedMark + ", " + this.selectedColor;
  }
}
