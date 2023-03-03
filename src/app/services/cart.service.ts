import { Injectable } from '@angular/core';
import {Item} from "../model/Item";
import {BehaviorSubject} from "rxjs";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Item[] = [];
  subject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  constructor() {
    this.getData()
    this.setData();
  }
  addToCart(product: Product, quantity: number) {
    let exItem = this.items.find(i => i.product.id == product.id);
    if (exItem == undefined) {
      let item: Item = new Item(product, quantity);
      this.items.push(item);

    } else {
      exItem.quantity += quantity;
    }
    this.setData();
  }
  remove(item:Item){
    let index = this.items.indexOf(item,0);
    this.items.splice(index,1);
    this.setData();
    this.subject.next(this.items);
  }
  minus(item: Item) {
    let index = this.items.indexOf(item,0);
    let exItem = this.items[index];
    if(exItem.quantity >0){
      exItem.quantity--;
    }
    this.setData();
  }
  plus(item: Item) {
    let index = this.items.indexOf(item,0);
    let exItem = this.items[index];
    exItem.quantity++;
    this.setData();
  }

  getData() {
    let jsonCart = localStorage.getItem('cart');
    let data: any = jsonCart != null ? JSON.parse(jsonCart) : [];
    data.forEach((value: any) => {
      let product: Product = value.product;
      let quantity: number = value.quantity
      this.items.push(new Item(product, quantity))
    })
  }

  setData() {
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.subject.next(this.items);
  }
}
