import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PanellComponent } from './views/panell/panell.component';
import { BnvComponent } from './views/bnv/bnv.component';
import { ModalComponent } from './views/modal/modal.component';
import { ListComponent } from './views/list/list.component';
import { FilterPipe } from './pipes/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    BnvComponent,
    ModalComponent,
    ListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
