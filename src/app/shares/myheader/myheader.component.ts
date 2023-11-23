import { Component } from '@angular/core';

@Component({
  selector: 'app-myheader',
  templateUrl: './myheader.component.html',
  styleUrls: ['./myheader.component.scss'],
  
})
export class MyheaderComponent {

myapp:string='none';
mycount:number=1;
myapplication():void
{
    if(this.mycount==1)
    {
      this.myapp="block";
      this.mycount++;
    }
    else{
      this.myapp="none";
      this.mycount=1;
    }
}


}
