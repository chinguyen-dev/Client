import {Component, Input, OnInit} from '@angular/core';
import {Variant} from "../../../../../model/Variant";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() listItem: Array<any> | undefined;

  ngOnInit(): void {
    console.log(this.listItem)
  }

  transformVariant(variants: Variant[]) {
    let data: any[] = [];
    variants.forEach((variant: Variant) => {
      if (!data.some((item: Variant) => item.sku === variant.sku)) {
        data.push(variant);
      }
    })
    return data;
  }
}
