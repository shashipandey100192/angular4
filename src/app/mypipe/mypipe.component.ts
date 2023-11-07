import { Component } from '@angular/core';

@Component({
  selector: 'app-mypipe',
  templateUrl: './mypipe.component.html',
  styleUrls: ['./mypipe.component.scss']
})
export class MypipeComponent {

a:string ="this is text filter in angular";

price:number=4500;
mydate:any = Date.now();

myarray:string[]=["kumar","singh","rohit","pooja","pinku"];


}
