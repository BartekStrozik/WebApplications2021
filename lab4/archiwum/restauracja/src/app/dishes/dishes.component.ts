import { Component, OnInit, OnChanges } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../Dish';
import { CuisineFilterPipe } from '../shared/cuisine-filter.pipe';
import { TypeFilterPipe } from '../shared/type-filter.pipe';
import { Price } from '../Price';

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
  typeFilter: string = "all";
  priceMinFilter: number = 0;
  priceMaxFilter: number = 100;

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.getDishes()
      .subscribe((dishes) => this.dishes = dishes);
  }

  ngOnChanges() {
    this.dishService.getDishes()
      .subscribe((dishes) => this.dishes = dishes);
  }

  changeAmount(amountChange: AmountChange) {
    if(amountChange == AmountChange.MINUS) this.reservedDishes--;
    else if(amountChange == AmountChange.PLUS) this.reservedDishes++;
  }

  cuisineFilterBy(cuisine: string){
    //if(cuisine === "wszystkie kuchnie") this.cuisineFilter = "all";
    //else this.cuisineFilter = cuisine;
    let index = this.cuisineFilter.indexOf("all");
    if(index > -1) this.cuisineFilter = [];
    this.cuisineFilter = this.cuisineFilter.map(cuisine => cuisine);
    this.cuisineFilter.push(cuisine);
  }

  typeFilterBy(type: string){
    if(type === "wszystkie typy") this.typeFilter = "all";
    else this.typeFilter = type;
  }

  pricesFilterBy(price: Price){
    this.priceMinFilter = price.priceMin;
    this.priceMaxFilter = price.priceMax;
  }

  deleteDish(dish: Dish){
    this.dishService.deleteDish(dish)
      .subscribe(() => this.dishes = this.dishes.filter(d => d.id != dish.id));
  }

  addDish(dish: Dish){
    this.dishService.addDish(dish)
      .subscribe((dish) => (this.dishes.push(dish)));
  }
}
