import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routeConfig } from './app.routing';

import { AppComponent } from './app.component';
import { Shenyuan } from './components/shenyuan/shenyuan.component';
import { Banbi } from './components/banbi/banbi.component';
import { Yuyan } from './components/yuyan/yuyan.component';
import { Wode } from './components/wode/wode.component';

@NgModule({
  declarations: [
    AppComponent,
    Shenyuan,
    Banbi,
    Yuyan,
    Wode
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
