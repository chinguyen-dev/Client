import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
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
export class CartComponent implements OnInit{
    items : IItem[] = [];
    product !: IProduct
    constructor(private cartService: CartService,
                private productService : ProductService,
                private storageService : StorageService) {
    }
    ngOnInit() {
      this.getCart();

    }
    getCart(){
      this.cartService.getCartByUserEmail(this.storageService.getUser().principle);
      this.cartService.subject.subscribe( items =>{
        this.items = items
        let variantId = this.items[0]?.variant.id;
        if (variantId){
          this.productService.getProductByVariantId(this.items[0].variant.id).subscribe((product ) =>{
            this.product = product;
          });
        }
      })
    }
    removeItem(item :IItem){
      this.cartService.remove(item).subscribe((deletedItem:any) => {
        const index = this.items.findIndex(i => i.id === deletedItem.id);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
      });
    }
    getTotal(){
      let total = 0;
      this.items.map(item => {
        total += item.quantity * this.product?.price;
      })
      return total
    }


}
