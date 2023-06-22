import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartService} from "../../../../services/cart.service";
import {IItem} from "../../../../model/IItem";
import {ProductService} from "../../../../services/product.service";

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit{
  @Input() item !: IItem;
  constructor(private cartService : CartService,
              private productService : ProductService) {
  }
  ngOnInit(): void {

  }
  minus(qty: number) {
    this.cartService.minus(this.item, qty)
  }
  plus(qty : number){
    this.cartService.plus(this.item, qty)
  }

  removeItem() {
   this.cartService.remove(this.item)
  }

}
