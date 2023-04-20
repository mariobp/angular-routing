import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './user-page.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    UserPageComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatListModule,
    MatRippleModule,
    MatButtonModule
  ],
})
export class UserModule { }
