import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { RegistorpageComponent } from './registorpage/registorpage.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'forget',
    component:ForgetComponent
  },
  {
    path:'registor',
    component:RegistorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
