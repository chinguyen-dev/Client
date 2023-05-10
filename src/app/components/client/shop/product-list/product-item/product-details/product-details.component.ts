import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../../../../services/product.service";
import {Observable} from "rxjs";
import {CartService} from "../../../../../../services/cart.service";
import {Product} from "../../../../../../model/Product";
import {IProduct} from "../../../../../../model/IProduct";
import {IProductVariant} from "../../../../../../model/IProductVariant";
import {color} from "chart.js/types/helpers";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  quantity: number = 1;
  product !: IProduct;
  variantsColors : IProductVariant[] = []
  selectedVariants !: any;
  variantsImage : string[] = []
  currentVariant !: IProductVariant
  variantImages: string[]= [];
  constructor(private activateRoute: ActivatedRoute, private productService : ProductService, private carService: CartService) {
  }
  ngOnInit() {
    this.activateRoute.params.subscribe(
      value => {
        this.productService.getProductById(value.id).subscribe((product: IProduct) =>{
          this.product = product;
          this.getVariantColor();
          if (this.variantsColors.length > 0){
            this.currentVariant = this.variantsColors[0];
            this.getVariantImags()
          }
        })
      }
    )
  }
  getVariantImags(){
    this.product.images.map(img =>{
      if (img.name.includes(this.currentVariant.sku)){
        this.variantImages.push(img.src);
      }
    })
  }
  getVariantColor(){
    let colors = new Set();
    this.product.variants.map(value => {
      colors.add(value.color);
    })
    colors.forEach(value => {
      let variantColor = this.product.variants.find( variant => variant.color == value)
      if (variantColor){
        this.variantsColors.push(variantColor);
      }
    })

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

  variantChange(variant: IProductVariant) {
    this.variantImages = []
    this.currentVariant = variant;
    this.getVariantImags();
  }
}
