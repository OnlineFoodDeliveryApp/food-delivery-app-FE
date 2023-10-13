import { FoodItem } from "src/app/Shared/Model/FoodItem";
import { Restaurant } from "src/app/Shared/Model/Restaurant";

export interface OrderDTO{

    foodItemsList?: FoodItem[];
    userId?: number;
    restaurant?: Restaurant;
}