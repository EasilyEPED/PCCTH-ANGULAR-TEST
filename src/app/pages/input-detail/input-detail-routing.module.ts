import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputDetailComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: InputDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputDetailRoutingModule {}
