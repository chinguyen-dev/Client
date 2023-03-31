import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Observable} from "rxjs";
import {filter} from "rxjs/operators";

interface sortingType {
  type: string;
  value: string;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  sortingTypes: sortingType[] = [
    {type: 'DEFAULT', value: 'Mặc định'},
    {type: 'ALPHA_ASC', value: 'Từ A - Z'},
    {type: 'ALPHA_DESC', value: 'Từ Z - A'},
    {type: 'PRICE_ASC', value: 'Giá giảm dần'},
    {type: 'PRICE_DESC', value: 'Giá tăng dần'},
  ]
  sizes = ['S', 'M', 'L'];
  colors = ['red', 'green', 'blue'];
  sizesFilter : string[] = []
  colorsFilter : string[] = []
  sort = window.sessionStorage.getItem('sortingType') || this.sortingTypes[0].value
  page: number = 0;
  isActive = true;
  sizePerPage: number = 10;
  products$ !: Observable<any>

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products$ = this.productService.getAllProduct().pipe(
      filter(
        product => this.checkFilter(this.colors, product.variant.color)
          && this.checkFilter(this.sizes, product.variant.size)
      )
    );
  }

  sortingTypeChange(type: string) {
    this.sort = type
    window.sessionStorage.setItem('sortingType', type)
  }

  checkFilter(attributeFilter: any, attribute: any) {
    if (attributeFilter.length === 0 || attributeFilter.includes(attribute)) {
      return true;
    }
      return false;
  }

  addFilterSize(size: string) {
    this.sizes.push(size);
  }

  removeSize(size: string) {
    let index = this.sizesFilter.indexOf(size,0);
    this.sizesFilter.splice(index, 1);
  }

  removeColor(color: string) {
    let index = this.colorsFilter.indexOf(color,0);
    this.colorsFilter.splice(index, 1);
  }

  addSize(size: string) {
    let exSize = this.sizesFilter.includes(size);
    if (!exSize) this.sizesFilter.push(size)
  }
  addColor(color: string) {
    let exColor = this.colorsFilter.includes(color);
    if (!exColor) this.colorsFilter.push(color)
  }
}
