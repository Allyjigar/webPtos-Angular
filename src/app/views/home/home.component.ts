import { Pto } from '../../shared/interfaces/pto';
import { PressupostService } from './../../shared/services/pressupost.service';

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {

  public totalPrice: number = 0;
  public webCheck: boolean = false;
  public subTotalPrice: number = 0;
  public client: string = '';
  public ptoName: string = '';

  constructor(private _pressupostService: PressupostService) { }

  ngOnInit(): void {
    this._pressupostService.totalPrice = 0;
    this._pressupostService.subTotalPrice = 0;
  }

  public webForm: FormGroup = new FormGroup ({
    client: new FormControl('', [Validators.required]),
    pto: new FormControl('', [Validators.required]),
    web: new FormControl(),
    seo: new FormControl(),
    ads: new FormControl()
  })

  // passa el valors dels checks a la funció del servei
  ngAfterViewInit():void{
    this.webForm.controls['web'].valueChanges.subscribe(check => {
      this.webCheck = check;
      this._pressupostService.subtotalPriceCalculate(check, 500);
      this.refreshPrice();
    })
    this.webForm.controls['seo'].valueChanges.subscribe(check => {
      this._pressupostService.subtotalPriceCalculate(check, 300);
      this.refreshPrice();
    })
    this.webForm.controls['ads'].valueChanges.subscribe(check => {
      this._pressupostService.subtotalPriceCalculate(check, 200);
      this.refreshPrice();
    })
  }
  //agafa el valor total
  setTotal(value: number): void{
    this._pressupostService.setTotal(value);
    this.refreshPrice();
  }
  //passa els valors al total i subtotal del servei
  refreshPrice(): void{
    this.totalPrice = this._pressupostService.totalPrice;
    this.subTotalPrice = this._pressupostService.subTotalPrice;
    }

    //funció per guardar el pressupost

    savePto(): void{
      const newPto: Pto = {
      date: new Date(),
      client: this.webForm.value.client,
      ptoName: this.webForm.value.pto,
      web: this.webForm.value.web,
      seo: this.webForm.value.seo,
      ads: this.webForm.value.ads,
      totalPrice: this.totalPrice
      }

      localStorage.setItem('PRESSUPOST LIST', JSON.stringify(newPto));
      this._pressupostService.addPto(newPto);
      this.webForm.reset();
      this._pressupostService.totalPrice = 0;
      this._pressupostService.subTotalPrice = 0;
      this.totalPrice = 0;
    };
  }
