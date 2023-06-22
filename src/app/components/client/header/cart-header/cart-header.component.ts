import {Component} from '@angular/core';
import {CartService} from "../../../../services/cart.service";
import {IItem} from "../../../../model/IItem";
import {IProduct} from "../../../../model/IProduct";
import {ProductService} from "../../../../services/product.service";
import {Subscription} from "rxjs";
import {StorageService} from "../../../../services/storage.service";

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent {
  items: IItem[] = [];
  subscribes: Subscription[] = [];

  constructor(private cartService: CartService,
              private productService: ProductService,
              private storageService : StorageService
             ) {
  }

  ngOnDestroy(): void {
    this.subscribes.forEach(s => {
      s.unsubscribe();
    });
  }

  ngOnInit() {
    let userSub =  this.storageService.isAuthenticate.subscribe(user => {
      if (user) this.getCart();
    })
    this.subscribes.push(userSub);
  }

  getCart() {
    this.cartService.getCartByUser();
    let sub = this.cartService.subject.subscribe(items => {
      this.items = items;
    })
    this.subscribes.push(sub);
  }


  getTotal() {
    return this.cartService.getTotal();
  }
}
