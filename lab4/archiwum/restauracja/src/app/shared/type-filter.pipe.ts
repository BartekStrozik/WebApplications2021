import { Pipe, PipeTransform } from "@angular/core";
import { Dish } from "../Dish";

@Pipe({'name': 'typePipe'})
export class TypeFilterPipe implements PipeTransform{
    transform (dishes: Dish[], typeCriteria: string): Dish[]{
        if(typeCriteria === "all") return dishes;
        return dishes.filter(dish => dish.type === typeCriteria);
    }
}