import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MyhomeComponent } from './myhome/myhome.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'about',
    component:AboutusComponent
  },
  {
    path:'home',
    component:MyhomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
