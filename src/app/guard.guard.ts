import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "./services/authentication.service";
import {map} from "rxjs/operators";
import {log} from "util";
import {userInfo} from "os";

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private auth : AuthenticationService, private router : Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user = null;
    this.auth.currentUser().subscribe(value => user = value);
    if (user){
      return true;
    }
    this.router.navigateByUrl("/account/login");
    return false;
  }

}
