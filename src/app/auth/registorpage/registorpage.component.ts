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
    phone: new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    gender: new FormControl(),
    address: new FormControl()
  });


myregistor():void
{
  console.log(this.myform.value);
  
}

}
