import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 
import { EventEmitter } from '@angular/core';
import { Dish } from '../Dish';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  dishForm = new FormGroup({
    dishName: new FormControl(),
    cuisine: new FormControl(),
    category: new FormControl(),
    ingredients: new FormGroup({

    }),
    amountOfDishes: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    url: new FormControl()
  });
  @Output() dishJSON: EventEmitter<Dish> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.dishForm.value.dishName){
      alert('Podaj nazwę dania, które chcesz dodać');
      return;
    }

    this.dishJSON.emit(this.dishForm.value);

  }

}
