import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { MsgService } from '../msg_service/msg.service';

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private base_url = environment.api_url;
  decoded_token: any = null;
  checkLoginSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.isLoggedIn());
  checkLogIn$ = this.checkLoginSubject.asObservable();

  // checkAdminSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.isAdmin());
  // checkAdmin$ = this.checkAdminSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private messageService: MsgService,
    private router: Router,
  ) {}

  signIn(userName: string, password: string): Observable<any> {
    return this.httpClient
      .post<any>(this.base_url + "/auth/login", { userName, password })
      .pipe(
        map((res) => {
          console.log("res test :", res);
          // if (res.jwt) {
          //   this.decoded_token = this.getDecodedAccessToken(res.jwt);
          //   localStorage.setItem("token", res.jwt);       
          //   this.checkLoginSubject.next(this.isLoggedIn());
          //   this.checkAdminSubject.next(this.isAdmin());
          //   return res;
          // }
          return null;
        })
      );
  }

  // signOut() {
  //   localStorage.removeItem('token');
  //   localStorage.clear();
  //   this.checkLoginSubject.next(this.isLoggedIn());
  //   this.checkAdminSubject.next(this.isAdmin());
  // }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // getDecodedAccessToken(token: string): any {
  //   try {
  //     return jwt_decode(token);
  //   } catch (Error) {
  //     return null;
  //   }
  // }

  // isAdmin(): boolean {
  //   const token = this.getToken();
  //   if (token && this.isLoggedIn()) {
  //     const decodedToken = jwt_decode(token) as any;
  //     if (decodedToken.scopes[0].authority === 'ROLE_ADMIN') {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  getEmail(): string | null {
    const token = this.getToken();
    // if (token && this.isLoggedIn()) {
    //   const decodedToken = this.getDecodedAccessToken(token);
    //   return decodedToken ? decodedToken.user_name : null;
    // }
    return null;
  }
}
