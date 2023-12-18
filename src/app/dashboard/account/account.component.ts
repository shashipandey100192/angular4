import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MymodelComponent } from '../mymodel/mymodel.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']


})
export class AccountComponent implements OnInit{
  constructor(public dialog: MatDialog) {}
name:string="angular pro";
ngOnInit(): void {
  this.openDialog()

}
openDialog() {
  const dialogRef = this.dialog.open(MymodelComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

}
