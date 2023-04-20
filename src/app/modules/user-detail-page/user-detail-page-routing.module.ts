import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailPageComponent } from './user-detail-page.component';
import { userDetailResolver } from './guards/user-detail.resolver';

const routes: Routes = [
  { path: '', component: UserDetailPageComponent, resolve: { detail: userDetailResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailPageRoutingModule { }
