import {Injectable, OnInit} from '@angular/core';
import {Item} from "../model/Item";
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../model/IProduct";
import {IItem} from "../model/IItem";
import {StorageService} from "./storage.service";
import {environment} from "../../environments/environment";
import {IProductVariant} from "../model/IProductVariant";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {IUser} from "../model/IUser";

export interface AddToCartRequest {
  variantId: number
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private api_url = environment.apiURL
  items : IItem[] = [];
  subject :BehaviorSubject<IItem[]> = new BehaviorSubject(this.items);
  constructor(private storageService: StorageService,
              private router : Router,
              private http: HttpClient) {
  }
  getCartByUser(){
    this.http.get<any>(this.api_url + "/carts").subscribe(cart =>{
      this.items = cart.items;
      this.subject.next(this.items)
    })

  }

  addToCart(variant: IProductVariant, quantity: number) {
    let user : IUser = this.storageService.getUser();
    if (user) {
      console.log(user.token)
      let request :AddToCartRequest = {quantity : quantity, variantId: variant.id}
      let res =  this.http.post<any>(`${this.api_url}/carts`, request);
      res.subscribe(cart => {
        this.items = cart.items;
        this.subject.next(this.items);
      })

    }
    else {
      this.router.navigateByUrl("/account/login")
    }

  }

  remove(item: IItem) {
    return  this.http.delete(this.api_url + "/carts" + "/" + item.id).subscribe((deletedItem:any) => {
      const index = this.items.findIndex(i => i.id === deletedItem.id);
      if (index !== -1) {
        this.items.splice(index, 1);
        this.subject.next(this.items)
      }
    });
  }

  minus(item: IItem, quantity : number) {
   return  this.http.get<any>(this.api_url + "/carts" +"/minus" +"/" + item.id + "/" + quantity).subscribe( item =>{
     this.items.forEach(i =>{
       if (i.id === item.id) {
         i.quantity = item.quantity;
         this.subject.next(this.items)
       }
     })
   });

  }

  plus(item: IItem , quantity : number) {
    return  this.http.get<any>(this.api_url + "/carts" +"/plus" +"/" + item.id + "/" + quantity).subscribe( item =>{
      this.items.forEach(i =>{
        if (i.id === item.id) {
          i.quantity = item.quantity;
          this.subject.next(this.items)
        }
      })
    });
  }



}
