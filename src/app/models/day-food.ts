import { FoodDetail } from './fooddetail';
import { UUID } from 'angular2-uuid';

export class DayFood {

    name: string;
    UUID: string;
    outletName: string;
    foodDetail: [FoodDetail];
    foodType: string;
    curryCount: number;
    date: string;

}