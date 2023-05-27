import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CheckoutService} from "../../../services/checkout.service";
import {IItem} from "../../../model/IItem";
import {IProduct} from "../../../model/IProduct";
import {CartService} from "../../../services/cart.service";
import {ProductService} from "../../../services/product.service";
import {Subscription} from "rxjs";

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
  subscribes : Subscription[] = [] ;


  ngOnDestroy(): void {
    this.subscribes.forEach(s => {
      s.unsubscribe();
    });
  }
  constructor(private checkoutService : CheckoutService,
              private cartService : CartService,
              private productService : ProductService,
           ) {
  }

  ngOnInit(): void {
    let subscribe = this.cartService.subject.subscribe(items => {
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
    this.subscribes.push(subscribe)
  }
  onSubmit(f: NgForm) {
    let subscribe = this.checkoutService.checkout(f.value, this.items).subscribe( (order : any) => {
      if (order){
        this.order = order;
        this.cartService.subject.next([])
      }
    })
    this.subscribes.push(subscribe)
  }
  getTotal(){
    let total = 0;
    this.items.map(item => {
      total += item.quantity * this.product?.price;
    })
    return total
  }
}
