import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public totalPrize: number = 0;
  public web: number = 0;
  public seo: number = 0;
  public ads: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalPrizeCalculate();
  }

  totalPrizeCalculate(){
    this.web = this.totalPrize + 500;
  }




}
