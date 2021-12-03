import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish } from '../Dish';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  cuisines: string[] = ["kuchnia chińska", "kuchnia francuska", "kuchnia włoska", "kuchnia polska"];
  types: string[] = ["danie główne", "zupa", "drugie danie"];

  @Output() selectCuisine: EventEmitter<any> = new EventEmitter();
  @Output() selectType: EventEmitter<any> = new EventEmitter();
  @Output() priceMinMax: EventEmitter<any> = new EventEmitter();
  
  /*filtersForm = new FormGroup({
    italianCuisine: new FormControl(),
    chineseCuisine: new FormControl(),
    polishCuisine: new FormControl()
  })*/

  pricesForm = new FormGroup({
    priceMin: new FormControl(),
    priceMax: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

  onCuisineSelect(selectedCuisine: string){
    this.selectCuisine.emit(selectedCuisine);
  }

  onTypeSelect(selectedType: string){
    this.selectType.emit(selectedType);
  }

  onSubmit() {
    this.priceMinMax.emit(this.pricesForm.value);
  }

  
}
