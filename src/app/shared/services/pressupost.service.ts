
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PressupostService {

  subTotalPrice: number = 0;
  totalPrice: number = this.subTotalPrice;
  result: number = 0;


constructor() { }



subtotalPriceCalculate(check: boolean, price: number){
    if(check){
      this.subTotalPrice += price;
      this.totalPrice += price;

    } else {
      this.subTotalPrice -= price;
      this.totalPrice -= price;
    }
  }

  setTotal(total: number){
    this.totalPrice = total;
  }
  
  totalPriceCalculate(subTotal: number, pages: number, languages: number, price: number = 30): number{

    if (pages <= 1 && languages <= 1) {
      return subTotal;
    }

    pages = pages <= 1 ? 1 : pages -1;
    languages = languages <= 1 ? 1 : languages;
    this.result = (subTotal + ((pages*languages)*price));
    return this.result;
  }

}
