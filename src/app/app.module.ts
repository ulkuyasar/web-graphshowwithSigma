import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphSimplePageComponent } from './business/graph-simple-page/graph-simple-page.component';
import { GraphCompleksPageComponent } from './business/graph-compleks-page/graph-compleks-page.component';
import { GraphSimple2PageComponent } from './business/graph-simple2-page/graph-simple2-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphSimplePageComponent,
    GraphCompleksPageComponent,
    GraphSimple2PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
