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
console.log(typeof(this.mygetdata));
this.myobjdata = JSON.parse(this.mygetdata);
console.log(typeof(this.myobjdata));
console.log(this.myobjdata);
}

}
