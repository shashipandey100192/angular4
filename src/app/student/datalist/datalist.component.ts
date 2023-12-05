import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent implements OnInit{

mygetdata:any;
myobjdata:any[]=[];

ngOnInit(): void {
    
this.mygetdata = localStorage.getItem("angulardata");
this.myobjdata = JSON.parse(this.mygetdata);
console.log(this.myobjdata);

}

}
