import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-registorpage',
  templateUrl: './registorpage.component.html',
  styleUrls: ['./registorpage.component.scss']
})
export class RegistorpageComponent {

  myform = new FormGroup({
    fullname:new FormControl("kumar",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    phone: new FormControl("8945213625",[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[6-9]\d{9}$/)]),
    email:new FormControl("example@gmail.com"),
    dob:new FormControl('01/01/2000'),
    gender: new FormControl('male'),
    address: new FormControl('new delhi')
  });

myalldata:any[]=[];
submited=false;

get geterr()
{
  return this.myform.controls;
}

myregistor():void
{
  // console.log(this.myform.value); 
  this.submited=true;
  if(this.myform.invalid)
  {
    return
  }
  else{
    // console.log(this.myform.value);
    this.myalldata.push(this.myform.value);
    console.log(this.myalldata);
    localStorage.setItem("angulardata",JSON.stringify(this.myalldata))
  }
}







}
