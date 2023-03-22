import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '404',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (module) => module.PageNotFoundModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((module) => module.LoginModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: 'home',
      //   loadChildren: () =>
      //     import('./home/home.module').then((module) => module.HomeModule),
      //   //canActivate: [AuthGuard],
      // },
      {
        path: 'inputDetail',
        loadChildren: () =>
          import('./input-detail/input-detail.module').then(
            (module) => module.InputDetailModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'reviewConfirm',
        loadChildren: () =>
          import('./review-confirm/review-confirm.module').then(
            (module) => module.ReviewConfirmModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
