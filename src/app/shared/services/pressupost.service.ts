import { Pto } from './../interfaces/pto';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PressupostService {

  public subTotalPrice: number = 0;
  public totalPrice: number = this.subTotalPrice;
  public result: number = 0;
  public pressupostList: Pto [] = [];
  public listAlfaOrder: Pto [] = [];
  public listDateOrder: Pto [] = [];
  public searchList: Pto [] = [];


constructor() { }


//calcula el subtotal que fan els checks
subtotalPriceCalculate(check: boolean, price: number){
    if(check){
      this.subTotalPrice += price;
      this.totalPrice += price;

    } else {
      this.subTotalPrice -= price;
      this.totalPrice -= price;
    }
  }
  //agafa el valor del total
  setTotal(total: number){
    this.totalPrice = total;
  }


  //calcula el valor total, afegint al subtotal el resultat del cálcul del preu per les pages i els languages
  totalPriceCalculate(subTotal: number, pages: number, languages: number, price: number = 30): number{

    if (pages <= 1 && languages <= 1) {
      return subTotal;
    }

    pages = pages <= 1 ? 1 : pages -1;
    languages = languages <= 1 ? 1 : languages;
    this.result = (subTotal + ((pages*languages)*price));
    return this.result;
  }
  //afegeix un pressupost a la llista
  addPto(pto: Pto){
    this.pressupostList.push(pto);
  }


// funcions d'ordre de ListComponent
  ordenaAlfa(){
    const listAlfaOrderCopy = this.pressupostList.map(list => { return { ...list}});
    this.listAlfaOrder = listAlfaOrderCopy.sort((a, b) => a.client > b.client ? 1 : -1 );
  }

  ordenaDate(){
    const listDateOrderCopy = this.pressupostList.map(list => { return { ...list}});
    this.listDateOrder = listDateOrderCopy.sort((a, b) => a.date > b.date ? 1 : -1);
  }

  // searchPto(search: string):void{
  //   this.searchList = this.pressupostList.filter(pressupost => pressupost.ptoName.includes(search));
  // }


}
