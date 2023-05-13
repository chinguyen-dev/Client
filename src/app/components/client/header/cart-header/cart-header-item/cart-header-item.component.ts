import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IItem} from "../../../../../model/IItem";
import {IProduct} from "../../../../../model/IProduct";
import {CartService} from "../../../../../services/cart.service";
import {ProductService} from "../../../../../services/product.service";

@Component({
  selector: 'app-cart-header-item',
  templateUrl: './cart-header-item.component.html',
  styleUrls: ['./cart-header-item.component.scss']
})
export class CartHeaderItemComponent implements OnInit{
  @Input() item !: IItem;
  @Input() product !: IProduct
  @Output() itemToRemove : EventEmitter<IItem> = new EventEmitter<IItem>();
  constructor(private cartService : CartService) {
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
    this.itemToRemove.emit(this.item);
  }
}
