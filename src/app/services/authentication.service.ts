import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  auth_api = 'http://localhost:8080/api/v1/admin/users';
  constructor(private http : HttpClient) {

  }
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.auth_api + 'login', {
      username,
      password
    });
  }
  setCurrentUser(user: any): void {
    window.sessionStorage.setItem('user', user);
  }
  currentUser(): Observable<any>{
    window.sessionStorage.setItem('user', 'sss')
    return of(window.sessionStorage.getItem('user'));
  }
  register(fullName: string, email: string, password: string): Observable<any> {
    return this.http.post(this.auth_api, {
      fullName,
      email,
      password
    });
  }
}
