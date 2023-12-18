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
searchBoxTxt: string = '';

searchValue:any;
searchBox:any;
myData:any;

mydata():void{
  this.service.mygetdata().subscribe((d)=>{
   console.log(d);
   this.datalist=d;
   this.myarry=this.datalist;
   this.myData=d;
   console.log(this.myarry)
  })
}

ngOnInit(): void {
    this.mydata()
}







}
