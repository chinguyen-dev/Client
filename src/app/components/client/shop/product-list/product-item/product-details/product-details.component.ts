import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../../../../services/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  quantity: number = 1;
  product !: any
  constructor(private activateRoute: ActivatedRoute, private productService : ProductService) {
  }
  ngOnInit() {
    this.activateRoute.params.subscribe(
      value => {
        this.productService.getProductById(value.id).subscribe(
          {
            next: product => this.product = product,
            error: err => alert(err)
          }
        )
      }
    )
  }

  minus() {
    if (this.quantity>1) this.quantity--;
  }
  plus(){
    this.quantity++;
  }
}
