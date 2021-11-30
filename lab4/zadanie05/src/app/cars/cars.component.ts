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

  displayMarkSelect: boolean = true;
  displayModelSelect: boolean = false;
  displayColorSelect: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.cars = CARS;
    this.marks = this.cars.map(car => car.mark);
    this.marks = Array.from(new Set(this.marks));
  }

  onMarkSelect(selectedMark: any) {
    this.displayMarkSelect = false;
    this.selectedMark = selectedMark;
    const filteredCars = this.cars.filter(car => car.mark === this.selectedMark);
    if(!filteredCars) return;
    this.models = filteredCars.map(car => car.model);
    this.models = Array.from(new Set(this.models));
    this.displayModelSelect = true;
  }

  onModelSelect(selectedModel: any) {
    this.displayModelSelect = false;
    this.selectedModel = selectedModel;
    const filteredCars = this.cars.find(car => car.model === this.selectedModel);
    if(!filteredCars) return;
    this.colors = filteredCars.colors;
    this.colors = Array.from(new Set(this.colors));
    this.displayColorSelect = true;
  }

  onColorSelect(selectedColor : any){
    this.displayColorSelect = false;
    this.selectedColor = selectedColor;
    this.selectedCar = this.selectedModel + ", " + this.selectedMark + ", " + this.selectedColor;
  }
}
