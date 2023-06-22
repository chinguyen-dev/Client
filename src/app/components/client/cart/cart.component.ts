import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {CartService} from "../../../services/cart.service";
import {IItem} from "../../../model/IItem";
import {ProductService} from "../../../services/product.service";
import {IProduct} from "../../../model/IProduct";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy{
    items : IItem[] = [];
    subscribes : Subscription[] = [];


  ngOnDestroy(): void {
    this.subscribes.forEach(s => {
      s.unsubscribe();
    });
  }
  constructor(private cartService: CartService,
              private productService : ProductService,
              ) {
  }
    ngOnInit() {
      this.getCart();
      console.log(this.items)

    }
    getCart(){
      let cartSub : Subscription
      let productSub : Subscription
      this.cartService.getCartByUser();
      cartSub = this.cartService.subject.subscribe(items =>{
        this.items = items
      })
      this.subscribes.push(cartSub);
    }
    removeItem(item :IItem){
      this.cartService.remove(item)
    }

  getTotal() {
    return this.cartService.getTotal();
  }
}
