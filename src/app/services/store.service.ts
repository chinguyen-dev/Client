import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  static TOKEN_KEY = 'auth-token';
  static USER_KEY = 'auth-user';
  stored  = window.sessionStorage;
  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
  }public saveToken(token: string): void {
    window.sessionStorage.removeItem(StoreService.TOKEN_KEY);
    window.sessionStorage.setItem(StoreService.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(StoreService.TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(StoreService.USER_KEY);
    window.sessionStorage.setItem(StoreService.USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = JSON.parse(window.sessionStorage.getItem(StoreService.USER_KEY) || 'null')
    return user;
  }
}
