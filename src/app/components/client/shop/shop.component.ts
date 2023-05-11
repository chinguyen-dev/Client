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
  subCategory$ !: Observable<Category[]>;
  categorySlugs: string[] = [];
  sizes = ['S', 'M', 'L'];
  colors = ['ĐỎ', 'VÀNG', 'XANH'];
  sizesFilter: string[] = [];
  colorsFilter: string[] = [];
  categoryFilter : Category[] = [];
  sort = window.sessionStorage.getItem('sortingType') || this.sortingTypes[0]
  page: number = 0;
  isActive = true;
  products$ !: Observable<IProduct[]>;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      let slug = params['slug'];
      this.categorySlugs = []
      this.categorySlugs.push(slug)
      this.getProducts();
      this.getSubcategories(slug);
    })
  }

  getProducts() {
    this.products$ = this.productService.filterProduct(this.categorySlugs, this.sort, this.colorsFilter, this.sizesFilter);

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
    if (!exSize){
      this.sizesFilter.push(size);
      this.getProducts();
    }

  }

  addColor(color: string) {
    let exColor = this.colorsFilter.includes(color);
    if (!exColor) {
      this.colorsFilter.push(color);
      this.getProducts();
    }

  }

  private getSubcategories(slug: any) {
    this.subCategory$ = this.categoryService.getSubCategories(slug);
  }

  addCategory(category: Category) {
    let exCate = this.categoryFilter.includes(category);
    if(!exCate) {
      this.categoryFilter.push(category);
      this.categorySlugs.push(category.slug)
      this.getProducts();
    }
  }

  removeCategory(category: Category) {
    let index = this.categoryFilter.indexOf(category, 0);
    this.categoryFilter.splice(index, 1);
    this.getProducts();
  }
}
