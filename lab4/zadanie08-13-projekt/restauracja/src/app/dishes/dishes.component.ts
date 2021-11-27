import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../Dish';

export enum AmountChange {
  PLUS,
  MINUS
}

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: Dish[] = [];
  reservedDishes: number = 0;

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.getDishes()
      .subscribe((dishes) => this.dishes = dishes);
  }

  changeAmount(amountChange: AmountChange) {
    if(amountChange == AmountChange.MINUS) this.reservedDishes--;
    else if(amountChange == AmountChange.PLUS) this.reservedDishes++;
  }

  deleteDish(dish: Dish){
    console.log("Delete dish!");
    this.dishService.deleteDish(dish)
      .subscribe(() => this.dishes = this.dishes.filter(d => d.id != dish.id));
  }

}
