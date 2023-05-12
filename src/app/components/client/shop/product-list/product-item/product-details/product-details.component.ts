import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../../../../services/product.service";
import {CartService} from "../../../../../../services/cart.service";
import {IProduct} from "../../../../../../model/IProduct";
import {IProductVariant} from "../../../../../../model/IProductVariant";

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
  currentVariant !: IProductVariant
  variantImages: string[]= [];
  variantSizes = new Set<IProductVariant>();
  user : any;
  constructor(private activateRoute: ActivatedRoute,
              private productService : ProductService,
              private carService: CartService) {
  }
  ngOnInit() {
    this.activateRoute.params.subscribe(
      value => {
        this.productService.getProductById(value.id).subscribe((product: IProduct) =>{
          this.product = product;
          this.getVariantColor();
          if (this.variantsColors.length > 0){
            this.currentVariant = this.variantsColors[0];
            this.getVariantImages()
            this.getVariantSizes()
          }
        })
      }
    )
  }
  getVariantImages(){
    this.product.images.map(img =>{
      if (img.name.includes(this.currentVariant.sku)){
        this.variantImages.push(img.src);
      }
    })
  }
  getVariantSizes(){
    this.product.variants.map(variant =>{
      if ( this.currentVariant.color === variant.color){
        this.variantSizes.add(variant)
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

  addToCart(variant : IProductVariant , quantity : number) {
    this.carService.addToCart(variant, quantity);
  }

  variantChange(variant: IProductVariant) {
    this.variantImages = []
    this.variantSizes.clear()
    this.currentVariant = variant;
    this.getVariantImages();
    this.getVariantSizes()
  }

}
