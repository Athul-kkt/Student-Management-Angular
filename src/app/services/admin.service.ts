import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:9091/userapi'; // Your Spring API endpoint
  constructor(private http: HttpClient) {}
  CreateAdmin(
    userName: String,
    userRole: String,
    email: string,
    password: string
  ): Observable<any> {
    console.log(
      'email:' +
        email +
        'userName:' +
        userName +
        'userRole:' +
        userRole +
        'password:' +
        password
    );
    return this.http
      .post<any>(this.apiUrl + '/adduser', {
        userName: userName,
        userRole: userRole,
        email: email,
        password: password,
      })
      .pipe(
        catchError((error) => {
          throw new Error(
            error.error.message || 'An error occurred during Admin creation.'
          );
        })
      );
  }

  GetAllAdmins(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/getAdminUsers').pipe(
      catchError((error) => {
        throw new Error(
          error.error.message || 'An error occurred during getting all admin.'
        );
      })
    );
  }
}
