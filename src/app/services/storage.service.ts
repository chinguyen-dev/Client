import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {IItem} from "../model/IItem";
import {IUser} from "../model/IUser";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  static TOKEN_KEY = 'auth-token';
  static USER_KEY = 'auth-user';
  stored = window.sessionStorage;
  isAuthenticate : BehaviorSubject<IUser> = new BehaviorSubject(this.getUser())

  signOut(): void {
    window.sessionStorage.removeItem(StorageService.USER_KEY);
    this.isAuthenticate.next( this.getUser())
  }

  public saveUser(user: IUser): void {
    window.sessionStorage.removeItem(StorageService.USER_KEY);
    window.sessionStorage.setItem(StorageService.USER_KEY, JSON.stringify(user));
    this.isAuthenticate.next(this.getUser())
  }

  public getUser(): IUser{
    const user = JSON.parse(window.sessionStorage.getItem(StorageService.USER_KEY) || 'null')
    return user;
  }
  public saveCart(items : Map<number, IItem>){
    window.sessionStorage.setItem('cart' ,JSON.stringify(items))
  }
}
