import { PressupostService } from './../../shared/services/pressupost.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AfterContentInit, Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements AfterContentInit{

  @Input() subTotal: number = 0;
  @Output() newTotal = new EventEmitter<number>();
  inputPages: number = 0;
  inputLanguages: number = 0;
  

  public detailsForm: FormGroup = new FormGroup ({
    pages: new FormControl(1, [Validators.required, Validators.min(1)]),
    languages: new FormControl(1, [Validators.required, Validators.min(1)])
  })

  constructor(private pressupostService: PressupostService) {
  }

  addP(){
    this.inputPages = this.detailsForm.get('pages')!.value;
    this.inputPages++;
  }

  quitP(){
    if(this.inputPages <= 1){
      this.inputPages = 1;
    } else {
    this.inputPages = this.detailsForm.get('pages')!.value;
    this.inputPages--;
    }
  }

  addL(){
    this.inputLanguages = this.detailsForm.get('languages')!.value;
    this.inputLanguages++;
  }

  quitL(){
    if(this.inputLanguages <= 1){
      this.inputLanguages = 1;
    } else {
    this.inputLanguages = this.detailsForm.get('languages')!.value;
    this.inputLanguages--;
    }
  }


  ngAfterContentInit(){
    this.detailsForm.get('pages')!.valueChanges.subscribe(pages => {
      let languages = parseInt(this.detailsForm.get('languages')!.value);
      this.newTotal.emit(this.pressupostService.totalPriceCalculate(this.subTotal, pages, languages));
    });
    this.detailsForm.get('languages')!.valueChanges.subscribe(languages => {
      let pages = parseInt(this.detailsForm.get('pages')!.value);
      this.newTotal.emit(this.pressupostService.totalPriceCalculate(this.subTotal,pages, languages));
    });
  }

}
