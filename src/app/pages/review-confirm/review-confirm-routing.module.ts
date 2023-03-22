import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewConfirmComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: ReviewConfirmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewConfirmRoutingModule {}
