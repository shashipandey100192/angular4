import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit{

abc:string =''
ngOnInit(): void {
    this.myalert();
}


myalert()
{
  alert("welcome to msg");
}
 
}
