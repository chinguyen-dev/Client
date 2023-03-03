import { Component } from '@angular/core';

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  quantity: number = 1;


  minus() {
    if (this.quantity>1) this.quantity--;
  }
  plus(){
    this.quantity++;
  }
}
