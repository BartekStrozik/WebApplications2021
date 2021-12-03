import { Pipe, PipeTransform } from "@angular/core";
import { Dish } from "../Dish";

@Pipe({'name': 'cuisinePipe'})
export class CuisineFilterPipe implements PipeTransform{
    transform (dishes: Dish[], cuisineCriteria: string): Dish[]{
        if(cuisineCriteria === "all") return dishes;
        return dishes.filter(dish => dish.cuisine === cuisineCriteria);
    }
}