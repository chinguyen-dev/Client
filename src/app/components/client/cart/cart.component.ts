import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CartService} from "../../../services/cart.service";
import {Item} from "../../../model/Item";
import {log} from "util";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
    items : Item[]= [];
    constructor(private cartService: CartService) {
    }
    ngOnInit() {
     this.cartService.subject.subscribe( items => this.items = items);
    }
    total(){
      return this.items.reduce((accumulator, currentValue) => accumulator + currentValue.product.price, 0)
    }

}
