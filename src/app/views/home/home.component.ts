import { PressupostService } from './../../shared/services/pressupost.service';

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {

  public totalPrice: number = 0;
  public webCheck: boolean = false;
  public subTotalPrice: number = 0;

  constructor(private pressupostService: PressupostService) { }

  ngOnInit(): void {
    this.pressupostService.totalPrice = 0;
    this.pressupostService.subTotalPrice = 0;
  }

  public webForm: FormGroup = new FormGroup ({
    web: new FormControl(),
    seo: new FormControl(),
    ads: new FormControl()
  })


  ngAfterViewInit():void{
    this.webForm.controls['web'].valueChanges.subscribe(check => {
      this.webCheck = check;
      this.pressupostService.subtotalPriceCalculate(check, 500);
      this.refreshPrice();
    })
    this.webForm.controls['seo'].valueChanges.subscribe(check => {
      this.pressupostService.subtotalPriceCalculate(check, 300);
      this.refreshPrice();
    })
    this.webForm.controls['ads'].valueChanges.subscribe(check => {
      this.pressupostService.subtotalPriceCalculate(check, 200);
      this.refreshPrice();
    })
  }

  setTotal(value: number): void{
    this.pressupostService.setTotal(value);
    this.refreshPrice();
  }

  refreshPrice(): void{
    this.totalPrice = this.pressupostService.totalPrice;
    this.subTotalPrice = this.pressupostService.subTotalPrice;
    }
  }
