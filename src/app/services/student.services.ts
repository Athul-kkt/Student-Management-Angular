import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:9091/studentapi'; // Your Spring API endpoint
  constructor(private http: HttpClient) {}
  CreateStudent(
    email: String,
    firstName: String,
    lastName: String,
    dept: String,
    dob: String
  ): Observable<any> {
    console.log(
      'email:' +
        email +
        'firstname:' +
        firstName +
        'lastname:' +
        lastName +
        'dpt:' +
        dept +
        'dob:' +
        dob
    );
    return this.http
      .post<any>(this.apiUrl + '/addstudent', {
        firstName: firstName,
        lastName: lastName,
        dept: dept,
        email: email,
        dob: dob,
      })
      .pipe(
        catchError((error) => {
          throw new Error(
            error.error.message || 'An error occurred during Student creation.'
          );
        })
      );
  }
  GetAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl + '/getallstudents').pipe(
      catchError((error) => {
        throw new Error(
          error.error.message || 'An error occurred during getting all Student.'
        );
      })
    );
  }
}
