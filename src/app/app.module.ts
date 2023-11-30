import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyheaderComponent } from './shares/myheader/myheader.component';
import { MyfooterComponent } from './shares/myfooter/myfooter.component';
import { MysidebarComponent } from './shares/mysidebar/mysidebar.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';
import { BlankpageComponent } from './layouts/blankpage/blankpage.component';
import { MyerrorpageComponent } from './shares/myerrorpage/myerrorpage.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MyheaderComponent,
    MyfooterComponent,
    MysidebarComponent,
    FullpageComponent,
    BlankpageComponent,
    MyerrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
