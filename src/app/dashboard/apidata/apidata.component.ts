import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenralService } from 'src/app/servers/genral.service';


@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.scss']
})
export class ApidataComponent implements OnInit{
p: string|number|undefined;


  constructor( private http:HttpClient, private service:GenralService){}
datalist:any;
myarry:any[]=[];

mydata():void{
  this.service.mygetdata().subscribe((d)=>{
   console.log(d);
   this.datalist=d;
   this.myarry=this.datalist;
  })
}

ngOnInit(): void {
    this.mydata()
}




}
