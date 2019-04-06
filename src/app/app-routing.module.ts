import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// the routes is an array
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
