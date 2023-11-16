import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyheaderComponent } from './shares/myheader/myheader.component';
import { MyfooterComponent } from './shares/myfooter/myfooter.component';
import { MysidebarComponent } from './shares/mysidebar/mysidebar.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';
import { BlankpageComponent } from './layouts/blankpage/blankpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MyheaderComponent,
    MyfooterComponent,
    MysidebarComponent,
    FullpageComponent,
    BlankpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
