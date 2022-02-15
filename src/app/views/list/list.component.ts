import { Pto } from 'src/app/shared/interfaces/pto';
import { PressupostService } from 'src/app/shared/services/pressupost.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  searchPressupost: string = '';
  filterpost: string = '';
  pressupostList: Pto[] = [];
  webCheck: boolean = false;
  seoCheck: boolean = false;
  adsCheck: boolean = false;

  constructor(private _pressupostService: PressupostService) { }

  ngOnInit(): void {
    this.pressupostList = this._pressupostService.pressupostList;
  }

  // funció que ordena alfabéticament
  ordenaAlfa(){
    this._pressupostService.ordenaAlfa();
    this.pressupostList = this._pressupostService.listAlfaOrder;
  }

  // funció que ordena per data de creació
  ordenaDate(){
    this._pressupostService.ordenaDate();
    this.pressupostList = this._pressupostService.listDateOrder;
  }
  // funció que reinicia l'ordre
  resetOrdena(){
    this.pressupostList = this._pressupostService.pressupostList;
  }

  //funció per buscar de manera no reactiva
  // searchPto(){
  //   this._pressupostService.searchPto(this.searchPressupost);
  //   this.pressupostList = this._pressupostService.searchList;
  //   if( this.searchPressupost == ''){
  //     this.pressupostList = this._pressupostService.pressupostList;
  //   }
  //   if(this._pressupostService.searchList.length<1){
  //     alert("Lo sentimos, no hemos encontrado ninguna coincidencia");
  //   }
  // }

}
