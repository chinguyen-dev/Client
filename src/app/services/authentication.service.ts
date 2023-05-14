import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  auth_api = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) {}

  login(authenticationRequest: any): Observable<any> {
    return this.http.post(this.auth_api + '/login', authenticationRequest);
  }

  register(user: any): Observable<any> {
    return this.http.post(this.auth_api + '/register', user);
  }
  validateEmail(email : any) {
    return  this.http.get(this.auth_api + "/validate" + "/" + email)
  }

}
