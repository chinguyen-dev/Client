import {Component} from '@angular/core';
import {CartService} from "../../../../services/cart.service";

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.scss']
})
export class CartHeaderComponent {
  qty: number = 0;

  constructor(private cart: CartService) {
  }

  ngOnInit() {
    // this.cart.subject.subscribe(
    //   value => {
    //     this.qty = value.length
    //   }
    // );
  }
}
