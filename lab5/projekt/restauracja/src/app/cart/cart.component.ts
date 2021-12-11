import { Component, OnInit } from '@angular/core';
import { Dish } from '../Dish';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dishes: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.dishes = this.cartService.dishes;
  }

}
