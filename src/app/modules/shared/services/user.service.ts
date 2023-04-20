import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, IUserDetail } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<IUser[]> { 
    return this.http.get<IUser[]>(`${this.apiURL}?/per_page=10`);
  }

  getSingleUser(username: string): Observable<IUserDetail> {
    return this.http.get<IUserDetail>(`${this.apiURL}/${username}`);
  }

}
