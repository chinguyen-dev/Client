import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

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
  ];
  sizes = ['S', 'M', 'L'];
  colors = ['RED', 'GREEN', 'BLUE'];
  sizesFilter: string[] = [];
  colorsFilter: string[] = [];
  sort = window.sessionStorage.getItem('sortingType') || this.sortingTypes[0].value
  page: number = 0;
  isActive = true;
  sizePerPage: number = 10;
  products$ !: Observable<any>;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products$ = this.productService.getAllProduct().pipe(
      map(products => {
        return products.sort((a: any, b: any) => {
          let result
          switch (this.sort) {
            case 'Mặc định':
              result = 0;
              break;
            case 'Từ A - Z' :
              result = b.name - a.name;
              break;
            case 'Từ Z - A' :
              result = a.name - b.name;
              break;
            case 'Giá tăng dần' :
              result = a.price - b.price;
              break;
            case 'Giá giảm dần' :
              result = b.price - a.price
              break
          }
          return result
        })
      }),
      map(products => {
        return products.filter((product: any) => {
          return this.checkFilter(this.colorsFilter, product.variants, 'color')
            && this.checkFilter(this.sizesFilter, product.variants, 'size')
        })
      })
    );
  }

  checkFilter(filter: any, variants: any, type: string) {
    if (filter.length == 0) return true;
    return variants.some((variant: any) => {
      let variantAttribute = ''
      switch (type) {
        case 'color':
          variantAttribute = variant.color;
          break;
        case 'size':
          variantAttribute = variant.size;
          break;
        case 'category' :
          variantAttribute = variant.category;
          break;
      }
      return filter.includes(variantAttribute);
    })
  }

  sortingTypeChanged(type: string) {
    this.sort = type;
    window.sessionStorage.setItem('sortingType', type);
    this.getProducts();
  }


  removeSize(size: string) {
    let index = this.sizesFilter.indexOf(size, 0);
    this.sizesFilter.splice(index, 1);
    this.getProducts();
  }

  removeColor(color: string) {
    let index = this.colorsFilter.indexOf(color, 0);
    this.colorsFilter.splice(index, 1);
    this.getProducts();
  }

  addSize(size: string) {
    let exSize = this.sizesFilter.includes(size);
    if (!exSize) this.sizesFilter.push(size);
    this.getProducts();
  }

  addColor(color: string) {
    let exColor = this.colorsFilter.includes(color);
    if (!exColor) this.colorsFilter.push(color);
    this.getProducts();
  }
}
