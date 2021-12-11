import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishItemComponent } from './dish-item/dish-item.component';
import { DishService } from './services/dish.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddDishComponent } from './add-dish/add-dish.component';
import { FiltersComponent } from './filters/filters.component';
import { CuisineFilterPipe } from './shared/cuisine-filter.pipe';
import { TypeFilterPipe } from './shared/type-filter.pipe';
import { PriceminFilterPipe } from './shared/pricemin-filter.pipe';
import { PricemaxFilterPipe } from './shared/pricemax-filter.pipe';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DishesComponent,
    DishItemComponent,
    AddDishComponent,
    FiltersComponent,
    CuisineFilterPipe,
    TypeFilterPipe,
    PriceminFilterPipe,
    PricemaxFilterPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    CuisineFilterPipe,
    TypeFilterPipe,
    PriceminFilterPipe,
    PricemaxFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
