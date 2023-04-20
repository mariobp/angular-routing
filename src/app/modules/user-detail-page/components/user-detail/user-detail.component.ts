import { Component, Input } from '@angular/core';
import { IUserDetail } from '../../../../models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  @Input() userDetail: IUserDetail;
}
