import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailPageRoutingModule } from './user-detail-page-routing.module';
import { UserDetailPageComponent } from './user-detail-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@NgModule({
  declarations: [
    UserDetailPageComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    UserDetailPageRoutingModule
  ]
})
export class UserDetailPageModule { }
