import {Component, Input, OnInit} from '@angular/core';
import {Variant} from "../../../../../model/Variant";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() listItem: Array<any> | undefined;
  imageURL: string[] = [];
  variants: any[] = [];

  ngOnInit(): void {
    this.listItem?.forEach((item: any, index: number) => {
      this.imageURL.push(item.variants[0].image);
      this.variants[index] = this.transformVariant(item.variants);
      this.variants[index] = this.variants[index].map((item: any, i: number) => {
        return {...item, selected: i === 0};
      })
    });
  }

  transformVariant(variants: Variant[]) {
    let data: any[] = [];
    variants.forEach((variant: any) => {
      if (!data.some((item: Variant) => item.sku === variant.sku)) data.push(variant);
    })
    return data;
  }

  chooseOption(event: any, index: number, sku: string) {
    this.imageURL[index] = event.target.src;
    this.variants[index].map((value: any) => value.selected = value.sku === sku)
  }
}
