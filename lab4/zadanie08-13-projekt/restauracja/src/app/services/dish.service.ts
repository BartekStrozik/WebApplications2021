import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DISHES } from '../mock-dishes';
import { Dish } from '../Dish';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private apiUrl = 'http://localhost:3000/dishes';

  constructor(private http:HttpClient) { }

  getDishes(): Observable<Dish[]> { 
    return this.http.get<Dish[]>(this.apiUrl);
  }

  deleteDish(dish: Dish): Observable<Dish> {
    const url = `${this.apiUrl}/${dish.id}`;
    console.log(url);
    return this.http.delete<Dish>(url);
  }

  addDish(dish: Dish): Observable<Dish>{
    return this.http.post<Dish>(this.apiUrl, dish, httpOptions);
  }
}
