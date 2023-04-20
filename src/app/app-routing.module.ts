import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule), },
  { path: 'not-found', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'signup', loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule) },
  { path: 'user-detail/:id', loadChildren: () => import('./modules/user-detail-page/user-detail-page.module').then(m => m.UserDetailPageModule) },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
