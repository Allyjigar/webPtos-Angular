import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public totalPrice: number = 0;
  public web: number = 0;
  public seo: number = 0;
  public ads: number = 0;

  public webForm: FormGroup = new FormGroup ({
    web: new FormControl(),
    seo: new FormControl(),
    ads: new FormControl()
  })


  constructor() { }

  ngOnInit(): void {
    this.webForm.get('web')!.valueChanges.subscribe(check =>{
      this.totalPriceCalculate(check, 500);
    })
    this.webForm.get('seo')!.valueChanges.subscribe(check =>{
      this.totalPriceCalculate(check, 300);
    })
    this.webForm.get('ads')!.valueChanges.subscribe(check => {
      this.totalPriceCalculate(check, 200);
    })
  }

  totalPriceCalculate(check: boolean, price: number) {
      if (check) {
        this.totalPrice += price
      } else {
        this.totalPrice -= price
      }
  }

}
