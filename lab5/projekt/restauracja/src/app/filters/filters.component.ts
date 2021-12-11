import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dish } from '../Dish';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() selectCuisine: EventEmitter<string[]> = new EventEmitter();
  @Output() selectType: EventEmitter<string[]> = new EventEmitter();
  @Output() priceMinMax: EventEmitter<any> = new EventEmitter();

  italianCuisineChecked: boolean = false;
  chineseCuisineChecked: boolean = false;
  polishCuisineChecked: boolean = false;

  mainTypeChecked: boolean = false;
  soupTypeChecked: boolean = false;
  mainCourseTypeChecked: boolean = false;

  pricesForm = new FormGroup({
    priceMin: new FormControl(),
    priceMax: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

  /* cuisines */

  italianCuisineChange(){
    this.italianCuisineChecked = !this.italianCuisineChecked;
    if(this.italianCuisineChecked) this.selectCuisine.emit(["kuchnia włoska", "checked"]);
    else this.selectCuisine.emit(["kuchnia włoska", "unchecked"]);
  }

  chineseCuisineChange(){
    this.chineseCuisineChecked = !this.chineseCuisineChecked;
    if(this.chineseCuisineChecked) this.selectCuisine.emit(["kuchnia chińska", "checked"]);
    else this.selectCuisine.emit(["kuchnia chińska", "unchecked"]);
  }

  polishCuisineChange(){
    this.polishCuisineChecked = !this.polishCuisineChecked;
    if(this.polishCuisineChecked) this.selectCuisine.emit(["kuchnia polska", "checked"]);
    else this.selectCuisine.emit(["kuchnia polska", "unchecked"]);
  }

  /* types */

  mainTypeChange(){
    this.mainTypeChecked = !this.mainTypeChecked;
    if(this.mainTypeChecked) this.selectType.emit(["danie główne", "checked"]);
    else this.selectType.emit(["danie główne", "unchecked"]);
  }

  soupTypeChange(){
    this.soupTypeChecked = !this.soupTypeChecked;
    if(this.soupTypeChecked) this.selectType.emit(["zupa", "checked"]);
    else this.selectType.emit(["zupa", "unchecked"]);
  }

  mainCourseTypeChange() {
    this.mainCourseTypeChecked = !this.mainCourseTypeChecked;
    if(this.mainCourseTypeChecked) this.selectType.emit(["drugie danie", "checked"]);
    else this.selectType.emit(["drugie danie", "unchecked"]);
  }

  /* prices */

  onSubmit() {
    this.priceMinMax.emit(this.pricesForm.value);
  }
}
