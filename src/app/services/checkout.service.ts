import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IItem} from "../model/IItem";
import {IUser} from "../model/IUser";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http : HttpClient) { }
  checkout(formValue : any , items : IItem[], user : IUser){
    let itemsRequest : any = []
    items.map( item =>{
      itemsRequest.push(
        {
          variantId : item.variant.id,
          quantity: item.quantity
        }
      )
    })
    let checkoutRequest = {
      email : user.principle,
      address: formValue.address,
      paymentType: "COD",
      phone: formValue.phone,
      orderUsername: formValue.orderUsername,
      note: formValue.note,
      items : itemsRequest
    }
    return  this.http.post(environment.apiURL + "/orders", checkoutRequest)
  }
}
