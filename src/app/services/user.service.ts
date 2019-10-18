import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<any> {
    return this.http.post(`${environment.API_ENDPOINT}/users/register`, {user});
  }

  authenticate(user: User): Observable<any> {
    return this.http.post(`${environment.API_ENDPOINT}/users/register`, {user});
  }
}
