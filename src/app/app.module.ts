import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routeConfig } from './app.routing';

import { AppComponent } from './app.component';
import { Shenyuan } from './components/shenyuan/shenyuan.component';
import { Banbi } from './components/banbi/banbi.component';
import { Yuyan } from './components/yuyan/yuyan.component';
import { Wode } from './components/wode/wode.component';

import { HttpService } from './http.service';
import { HttpInterceptorService } from './httpUtils.service';

import { GreenDirective } from './directive/green.directive';

@NgModule({
  declarations: [
    AppComponent,
    Shenyuan,
    Banbi,
    Yuyan,
    Wode,
    GreenDirective,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [HttpInterceptorService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
