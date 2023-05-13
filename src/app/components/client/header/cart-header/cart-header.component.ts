import {Component} from '@angular/core';
import {CartService} from "../../../../services/cart.service";
import {IItem} from "../../../../model/IItem";
import {IProduct} from "../../../../model/IProduct";
import {ProductService} from "../../../../services/product.service";
import {StorageService} from "../../../../services/storage.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent {
  items: IItem[] = [];
  product !: IProduct
  qty = 0
  subscribes: Subscription[] = [];

  constructor(private cartService: CartService,
              private productService: ProductService,
              private storageService: StorageService) {
  }

  ngOnDestroy(): void {
    this.subscribes.forEach(s => {
      s.unsubscribe();
    });
  }

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.cartService.getCartByUserEmail(this.storageService.getUser().principle);
    let sub = this.cartService.subject.subscribe(items => {
      this.items = items
      let variantId = this.items[0]?.variant.id;
      if (variantId) {
       let productSub = this.productService.getProductByVariantId(this.items[0].variant.id).subscribe((product) => {
          this.product = product;
        });
       this.subscribes.push(productSub)
        let quantity = 0;
        items.map(item => {
          quantity += item.quantity
        })
        this.qty = quantity;
      }
    })
    this.subscribes.push(sub);
  }

  removeItem(item: IItem) {
    this.cartService.remove(item)
  }

  getTotal() {
    let total = 0;
    this.items.map(item => {
      total += item.quantity * this.product?.price;
    })
    return total
  }

}
