import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:9091/userapi/login'; // Your Spring API endpoint
  constructor(private http: HttpClient) {
    console.log('sucess ');
  }
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password }).pipe(
      catchError((error) => {
        throw new Error(
          error.error.message || 'An error occurred during login.'
        );
      })
    );
  }
}
