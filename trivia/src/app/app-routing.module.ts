import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GetValueComponent} from './get-value/get-value.component';
import {ShowValueComponent} from './show-value/show-value.component';

const routes: Routes = [
  {path: 'firstScreen', component: GetValueComponent},
  {path: 'secondScreen', component: ShowValueComponent},
  {path: '', component:GetValueComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
