import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Teacher } from '../model/Teacher';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private apiUrl = 'http://localhost:9091/teacherapi'; // Your Spring API endpoint
  constructor(private http: HttpClient) {}
  CreateTeacher(
    email: String,
    firstName: String,
    lastName: String,
    dept: String
  ): Observable<any> {
    console.log(
      'email:' +
        email +
        'firstname:' +
        firstName +
        'lastname:' +
        lastName +
        'dpt:' +
        dept
    );
    return this.http
      .post<any>(this.apiUrl + '/addteacher', {
        firstName: firstName,
        lastName: lastName,
        dept: dept,
        email: email,
      })
      .pipe(
        catchError((error) => {
          throw new Error(
            error.error.message || 'An error occurred during Student creation.'
          );
        })
      );
  }

  GetAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrl + '/getallteachers').pipe(
      catchError((error) => {
        throw new Error(
          error.error.message || 'An error occurred during getting all Student.'
        );
      })
    );
  }
}
