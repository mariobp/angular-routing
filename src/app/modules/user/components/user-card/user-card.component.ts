import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser } from '../../../../models';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
  @Input() user: IUser;
}
