import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = '/api/users/';

  constructor(private http: HttpClient) { }

  findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  findUserById(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + id);
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(this.apiUrl + id, user);
  }
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + id);
  }
  
}
