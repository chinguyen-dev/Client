import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Observable} from "rxjs";
import {IProduct} from "../../../model/IProduct";
import {Category} from "../../../model/Category";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../../services/category.service";



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  sortingTypes: string[] = [
    'MẶC ĐỊNH', 'TỪ A - Z', 'TỪ Z - A', 'GIÁ GIẢM DẦN', 'GIÁ TĂNG DẦN'
  ];
  subCategory$ ! : Observable<any>;
  categoryIds: number[] = [];
  sizes = ['S', 'M', 'L'];
  colors = ['ĐỎ', 'VÀNG', 'XANH'];
  sizesFilter: string[] = [];
  colorsFilter: string[] = [];
  sort = window.sessionStorage.getItem('sortingType') || this.sortingTypes[0]
  page: number = 0;
  isActive = true;
  sizePerPage: number = 10;
  products$ !: Observable<IProduct[]>;

  constructor(private productService: ProductService, private categoryService : CategoryService,private router : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      let id = params['id'];
      console.log(id)
      this.categoryIds.push(id);
    })
    this.getProducts();
  }
  getCategoryByParentId(id : number){
    this.subCategory$ = this.categoryService.getCategory(id);
  }
  getProducts() {
    this.products$ = this.productService.filterProduct(this.categoryIds,this.sort, this.colorsFilter, this.sizesFilter);

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
