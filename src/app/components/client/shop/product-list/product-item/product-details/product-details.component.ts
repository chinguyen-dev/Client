import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  quantity: number = 1;


  minus() {
    if (this.quantity>1) this.quantity--;
  }
  plus(){
    this.quantity++;
  }
}
