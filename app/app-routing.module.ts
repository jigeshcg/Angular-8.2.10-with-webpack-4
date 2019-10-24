import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent} from './app.component'
import {LayoutComponent } from './common/layout/layout.component';


const routes: Routes = [
  {
    path:'',
    component:LayoutComponent
}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }

//export const AppRoutingModule = RouterModule.forRoot(routes);
