import { Ingredient } from "./Ingredient";

export class Dish {
    id: number;
    dishName: string;
    cuisine: string;
    category: string;
    type: string;
    ingredients: Ingredient[];
    amountOfDishes: number;
    price: number;
    description: string;
    url: string;

    constructor(id: number, dishName: string, cuisine: string, category: string, type: string, ingredients: Ingredient[],
        amountOfDishes: number, price: number, description: string, url: string){
        this.id = id;
        this.dishName = dishName;
        this.cuisine = cuisine;
        this.category = category;
        this.type = type;
        this.ingredients = ingredients;
        this.amountOfDishes = amountOfDishes;
        this.price = price;
        this.description = description;
        this.url = url;
    }
}