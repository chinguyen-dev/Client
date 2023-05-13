import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {CartService} from "../../../services/cart.service";
import {Item} from "../../../model/Item";
import {log} from "util";
import {IItem} from "../../../model/IItem";
import {StorageService} from "../../../services/storage.service";
import {ProductService} from "../../../services/product.service";
import {IProduct} from "../../../model/IProduct";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy{
    items : IItem[] = [];
    product !: IProduct;
    subscribes : Subscription[] = [];


  ngOnDestroy(): void {
    this.subscribes.forEach(s => {
      s.unsubscribe();
    });
  }
  constructor(private cartService: CartService,
              private productService : ProductService,
              private storageService : StorageService) {
  }
    ngOnInit() {
      this.getCart();

    }
    getCart(){
      let cartSub : Subscription
      let productSub : Subscription
      this.cartService.getCartByUserEmail(this.storageService.getUser().principle);
      cartSub = this.cartService.subject.subscribe(items =>{
        this.items = items
        let variantId = this.items[0]?.variant.id;
        if (variantId){
         productSub = this.productService.getProductByVariantId(this.items[0].variant.id).subscribe((product ) =>{
            this.product = product;
          });
         this.subscribes.push(productSub);
        }
      })
      this.subscribes.push(cartSub);
    }
    removeItem(item :IItem){
      this.cartService.remove(item)
    }
    getTotal(){
      let total = 0;
      this.items.map(item => {
        total += item.quantity * this.product?.price;
      })
      return total
    }


}
