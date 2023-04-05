import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../../../../services/product.service";
import {Observable} from "rxjs";
import {CartService} from "../../../../../../services/cart.service";
import {Product} from "../../../../../../model/Product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  quantity: number = 1;
  product$ !: Observable<any>
  variants !: Observable<any>
  selectedVariants !: any;
  constructor(private activateRoute: ActivatedRoute, private productService : ProductService, private carService: CartService) {
  }
  ngOnInit() {
    this.activateRoute.params.subscribe(
      value => {
        this.product$ = this.productService.getProductById(value.id)
        this.variants = this.productService.getVariantsByProductId(value.id);
        this.variants.subscribe(variants => {
          this.selectedVariants = variants[0];
        } )
      }
    )
  }

  minus() {
    if (this.quantity>1) this.quantity--;
  }
  plus(){
    this.quantity++;
  }

  addToCart(product$: Observable<any>, selectedVariants: any) {
    product$.subscribe( p  => {
      let product: Product = new Product(p.id, p.name, p.price, p.imgUrl, selectedVariants.size, selectedVariants.color)
      this.carService.addToCart(product, this.quantity)
    });
  }
}
