import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Dish } from 'src/app/Dish';
import { AmountChange } from '../dishes/dishes.component'

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.css']
})

export class DishItemComponent implements OnInit {
  changeType = AmountChange;
  amount: number = 0;
  @Input() dish!: Dish;
  @Output() reserveDish: EventEmitter<AmountChange> = new EventEmitter();
  @Output() onDeleteDish: EventEmitter<Dish> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeAmount(amountChange: AmountChange){
    this.reserveDish.emit(amountChange);
    if(amountChange == AmountChange.MINUS && this.amount > 0){
      this.amount--;
    }
    else if(amountChange == AmountChange.PLUS && this.amount < this.dish.amountOfDishes){
      this.amount++;
    }
  }

  onDelete(dish: Dish) {
    this.onDeleteDish.emit(dish);
  }

}
