import { Injectable } from '@angular/core';
import { Dish } from '../Dish';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  dishes: any[] = [];

  constructor() { }

  addDish(dish: any){
    this.dishes.push(dish);
  }

  deleteDish(dish: any){
    this.dishes.slice(this.dishes.indexOf(dish), 1);
  }
}
