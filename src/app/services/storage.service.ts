import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  static TOKEN_KEY = 'auth-token';
  static USER_KEY = 'auth-user';
  stored = window.sessionStorage;
  constructor() {
    this.isAuthenticate.next( this.getUser())
  }

  isAuthenticate = new BehaviorSubject(null);

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(StorageService.TOKEN_KEY);
    window.sessionStorage.setItem(StorageService.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(StorageService.TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(StorageService.USER_KEY);
    window.sessionStorage.setItem(StorageService.USER_KEY, JSON.stringify(user));
    this.isAuthenticate.next(user)
  }

  public getUser(): any{
    const user = JSON.parse(window.sessionStorage.getItem(StorageService.USER_KEY) || 'null')
    return user;
  }
}
