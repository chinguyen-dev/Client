import {Injectable} from '@angular/core';
import {Item} from "../model/Item";
import {BehaviorSubject} from "rxjs";
import {Product} from "../model/Product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Item[] = [];
  subject: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() {
    this.getData()
    this.setData();
    this.subject.next([
      new Item(new Product(1, "áo", 200000,'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apn6008-tpv-7.jpg?v=1678671119000'), 2),
      new Item(new Product(2, "áo len", 200000,'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apn6008-tpv-7.jpg?v=1678671119000'), 3),
      new Item(new Product(3, "áo oversize", 200000,'https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apn6008-tpv-7.jpg?v=1678671119000'), 1),
    ])
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

  remove(item: Item) {
    let index = this.items.indexOf(item, 0);
    this.items.splice(index, 1);
    this.setData();
    this.subject.next(this.items);
  }

  minus(item: Item) {
    let index = this.items.indexOf(item, 0);
    let exItem = this.items[index];
    if (exItem.quantity > 0) {
      exItem.quantity--;
    }
    this.setData();
  }

  plus(item: Item) {
    let index = this.items.indexOf(item, 0);
    this.items[index].quantity++;
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
