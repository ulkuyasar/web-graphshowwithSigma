import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphSimplePageComponent } from './business/graph-simple-page/graph-simple-page.component';

const routes: Routes = [
  {path:'GraphSimplePageComponent',component:GraphSimplePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
