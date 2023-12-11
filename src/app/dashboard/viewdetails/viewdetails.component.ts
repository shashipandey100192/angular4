import { Component, OnInit } from '@angular/core';
import { GenralService } from 'src/app/servers/genral.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss']
})
export class ViewdetailsComponent implements OnInit{
  constructor( private http:ActivatedRoute, private service:GenralService){}

single:any;
id:any;
ngOnInit(): void {
this.id = this.http.snapshot.paramMap.get('id');
this.mysingledata();
}


mysingledata():void
{
   this.service.singledata(this.id).subscribe((d)=>{
    console.log(d);
    this.single = d;
   })
}

}
