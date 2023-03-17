import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../../../model/Item";
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item !: Item;
  quantity: number = 1;
  constructor(private cartService : CartService) {
  }

  minus() {
    if (this.quantity>1) this.quantity--;
  }
  plus(){
    this.quantity++;
  }

  removeItem(item : Item) {
   this.cartService.remove(item);
  }
}
