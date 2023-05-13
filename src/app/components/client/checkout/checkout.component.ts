import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CheckoutService} from "../../../services/checkout.service";
import {IItem} from "../../../model/IItem";
import {IProduct} from "../../../model/IProduct";
import {CartService} from "../../../services/cart.service";
import {ProductService} from "../../../services/product.service";
import {StorageService} from "../../../services/storage.service";

interface IOrder {
  id : number
  createAt : Date
  updateAt : Date
  paymentType : string
  orderUsername : string
  phone : string,
  note : string,
  address : string
  items: IItem[]
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
  order !: IOrder;
  items : IItem[] = []
  product !: IProduct
  qty = 0;
  constructor(private checkoutService : CheckoutService,
              private cartService : CartService,
              private productService : ProductService,
              private storageService : StorageService) {
  }

  ngOnInit(): void {
    this.cartService.subject.subscribe(items => {
      this.items = items
      let variantId = this.items[0]?.variant.id;
      if (variantId){
        this.productService.getProductByVariantId(this.items[0].variant.id).subscribe((product ) =>{
          this.product = product;
        });
      }
      let quantity = 0;
      items.map(item =>{
        quantity += item.quantity
      })
      this.qty = quantity;
    })
  }
  onSubmit(f: NgForm) {
    this.checkoutService.checkout(f.value, this.items, this.storageService.getUser()).subscribe( (order : any) => {
      this.order = order;
    })
  }
  getTotal(){
    let total = 0;
    this.items.map(item => {
      total += item.quantity * this.product?.price;
    })
    return total
  }
}
