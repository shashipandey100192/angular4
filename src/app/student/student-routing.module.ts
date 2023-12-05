import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatalistComponent } from './datalist/datalist.component';

const routes: Routes = [
  {
    path:'',
    component: DatalistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
