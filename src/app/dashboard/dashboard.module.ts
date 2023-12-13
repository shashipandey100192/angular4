import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ApidataComponent } from './apidata/apidata.component';
import { AccountComponent } from './account/account.component';
import { PersonalinfoComponent } from './components/personalinfo/personalinfo.component';
import { BankinfoComponent } from './components/bankinfo/bankinfo.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    LandingComponent,
    ApidataComponent,
    AccountComponent,
    PersonalinfoComponent,
    BankinfoComponent,
    ViewdetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxPaginationModule
    
  ]
})
export class DashboardModule { }
