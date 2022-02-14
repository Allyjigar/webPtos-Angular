import { BnvComponent } from './views/bnv/bnv.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: BnvComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: '/HomeComponent', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
