import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private base_url = environment.api_url;
  private userDetailsSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  userDetails$ = this.userDetailsSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  signIn(userName: string, password: string): Observable<any> {
    return this.httpClient
      .post<any>(`${this.base_url}/auth/login`, { userName, password })
      .pipe(
        map((res) => {
          // Handle successful response
          if (res.accessToken) {
            this.setUserDetails(res.userDto);
            localStorage.setItem('token', res.accessToken);
            localStorage.setItem('userDetails', JSON.stringify(res.userDto));
            console.log(res);
            return res;
          }
          return null;
        }),
        // Catch any errors from the HTTP call
        catchError((error: HttpErrorResponse) => {
          let errorMsg: string;

          // Customize error messages based on status or error body
          if (error.status === 400) {
            errorMsg = 'Invalid username or password';
          } else if (error.status === 0) {
            errorMsg = 'Network issue: Unable to reach the server';
          } else {
            errorMsg = `Unexpected error occurred: ${error.message}`;
          }

          // Log the error to the console (optional)
          console.error('Login failed: ', error);

          // Throw the error so the caller (component) can handle it
          return throwError(() => new Error(errorMsg));
        })
      );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  setUserDetails(userDetails: any): void {
    this.userDetailsSubject.next(userDetails);
  }

  getUserDetails(): any {
    if (!this.userDetailsSubject.value) {
      const userDetails = JSON.parse(
        localStorage.getItem('userDetails') || '{}'
      );
      this.userDetailsSubject.next(userDetails);
    }
    return this.userDetailsSubject.value;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userDetails');
    this.userDetailsSubject.next(null);
  }
}
