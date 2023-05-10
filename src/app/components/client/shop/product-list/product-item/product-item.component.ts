import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../../../../model/IProduct";
import {IProductVariant} from "../../../../../model/IProductVariant";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product !: IProduct;
  variantsColors: IProductVariant[] = []

  ngOnInit(): void {
    this.getVariantColor();
  }

  getVariantColor() {
    let colors = new Set();
    this.product.variants.map(value => {
      colors.add(value.color);
    })
    colors.forEach(value => {
      let variantColor = this.product.variants.find(variant => variant.color == value)
      if (variantColor) {
        this.variantsColors.push(variantColor);
      }
    })

  }
}
