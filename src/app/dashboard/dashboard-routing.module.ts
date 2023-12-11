import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ApidataComponent } from './apidata/apidata.component';
import { AccountComponent } from './account/account.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [
  {
    path:'',
    component: LandingComponent
  },
  {
    path:'api',
    component:ApidataComponent
  },
  {
    path:'accounts',
    component:AccountComponent
  },
  {
    path:'api/detailspage/:id',
    component:ViewdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
