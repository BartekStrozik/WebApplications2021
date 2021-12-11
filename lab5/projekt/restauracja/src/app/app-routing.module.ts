import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDishComponent } from './add-dish/add-dish.component';
import { CartComponent } from './cart/cart.component';
import { DishesComponent } from './dishes/dishes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dishes', component: DishesComponent },
  { path: 'add-dish', component: AddDishComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
