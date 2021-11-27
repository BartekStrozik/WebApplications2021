import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishItemComponent } from './dish-item/dish-item.component';
import { DishService } from './services/dish.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddDishComponent } from './add-dish/add-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishItemComponent,
    AddDishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
