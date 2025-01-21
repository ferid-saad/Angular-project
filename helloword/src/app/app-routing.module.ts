import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'test',component:TestComponent},
  {path:'**',component:Page404Component}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
