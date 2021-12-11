import { Component, OnInit, OnChanges } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../Dish';
import { CuisineFilterPipe } from '../shared/cuisine-filter.pipe';
import { TypeFilterPipe } from '../shared/type-filter.pipe';
import { Price } from '../Price';
import { CartService } from '../services/cart.service';

export enum AmountChange {
  PLUS,
  MINUS
}

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit, OnChanges {
  dishes: Dish[] = [];
  reservedDishes: number = 0;

  cuisineFilter: string[] = ["all"];
  typeFilter: string[] = ["all"];
  priceMinFilter: number = 0;
  priceMaxFilter: number = 100;

  constructor(private dishService: DishService, private cartService: CartService) { }

  ngOnInit(): void {
    this.dishService.getDishes()
      .subscribe((dishes) => this.dishes = dishes);
  }

  ngOnChanges() {
    this.dishService.getDishes()
      .subscribe((dishes) => this.dishes = dishes);
  }

  changeAmount(amountChange: AmountChange) {
    if (amountChange == AmountChange.MINUS) {
      this.reservedDishes--;
      this.cartService.deleteDish("danie");
    }
    else if (amountChange == AmountChange.PLUS) {
      this.reservedDishes++;
      this.cartService.addDish("danie");
    }
  }

  /* filters */

  cuisineFilterBy(args: string[]) {
    let index = this.cuisineFilter.indexOf("all");
    if (index > -1) this.cuisineFilter = [];
    this.cuisineFilter = this.cuisineFilter.map(cuisine => cuisine);

    let cuisine = args[0];
    let checked = args[1];
    if (checked === "checked") {
      this.cuisineFilter.push(cuisine);
    }
    else {
      let index = this.cuisineFilter.indexOf(cuisine);
      if (index > -1) this.cuisineFilter.splice(index, 1);
    }

    if (this.cuisineFilter.length == 0){
      this.cuisineFilter.push("all");
    }
  }

  typeFilterBy(args: string[]) {
    let index = this.typeFilter.indexOf("all");
    if (index > -1) this.typeFilter = [];
    this.typeFilter = this.typeFilter.map(type => type);

    let type = args[0];
    let checked = args[1];
    if (checked === "checked") {
      this.typeFilter.push(type);
    }
    else {
      let index = this.typeFilter.indexOf(type);
      if (index > -1) this.typeFilter.splice(index, 1);
    }

    if (this.typeFilter.length == 0){
      this.typeFilter.push("all");
    }
  }

  pricesFilterBy(price: Price) {
    this.priceMinFilter = price.priceMin;
    this.priceMaxFilter = price.priceMax;
  }

  /* CRUD */

  deleteDish(dish: Dish) {
    this.dishService.deleteDish(dish)
      .subscribe(() => this.dishes = this.dishes.filter(d => d.id != dish.id));
  }
}
