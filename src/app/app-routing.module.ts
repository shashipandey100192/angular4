import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { MypipeComponent } from './mypipe/mypipe.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path:'',
    component:LandingpageComponent
  },
  {
    path:'about',
    component:AboutusComponent
  },
  {
    path:'home',
    component:MyhomeComponent
  },
  {
    path:'pipe',
    component:MypipeComponent
  },
  {
    path:'mydirective',
    component:FeaturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
