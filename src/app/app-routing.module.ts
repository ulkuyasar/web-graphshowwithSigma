import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphSimplePageComponent } from './business/graph-simple-page/graph-simple-page.component';
import { GraphCompleksPageComponent } from './business/graph-compleks-page/graph-compleks-page.component';
import { GraphSimple2PageComponent } from './business/graph-simple2-page/graph-simple2-page.component';

const routes: Routes = [
  {path:'GraphSimplePageComponent',component:GraphSimplePageComponent},
  {path:'GraphSimple2PageComponent',component:GraphSimple2PageComponent}  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
