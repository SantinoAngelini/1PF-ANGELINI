import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutpruebaComponent } from './layout/layoutprueba/layoutprueba.component';

const routes: Routes = [
  { path: '', component: LayoutpruebaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
