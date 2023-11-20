import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankpageComponent } from './layouts/blankpage/blankpage.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';
const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        redirectTo:'auth',
        pathMatch:'full'
      },
      {
        path:'auth',
        component:BlankpageComponent,
        loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path:'',
    children:[
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {
        path:'dashboard',
        component:FullpageComponent,
        loadChildren:()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path:'student',
        component:FullpageComponent,
        loadChildren: ()=> import('./student/student.module').then(m => m.StudentModule)
      }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
