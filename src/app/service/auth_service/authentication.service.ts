import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
          if (res.accessToken) {
            this.setUserDetails(res.userDto);
            localStorage.setItem('token', res.accessToken);
            localStorage.setItem('userDetails', JSON.stringify(res.userDto));
            return res;
          }
          return null;
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
