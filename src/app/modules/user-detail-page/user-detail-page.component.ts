import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUserDetail } from 'src/app/models';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss']
})
export class UserDetailPageComponent implements OnInit {

  public userDetail:IUserDetail;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.userDetail = data?.detail;
    })
  }
}
