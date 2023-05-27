import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Observable, Subscription} from "rxjs";
import {IProduct} from "../../../model/IProduct";
import {Category} from "../../../model/Category";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../../services/category.service";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy {
  sortingTypes: string[] = [
    'MẶC ĐỊNH', 'TỪ A - Z', 'TỪ Z - A', 'GIÁ GIẢM DẦN', 'GIÁ TĂNG DẦN'
  ];
  sizes = ['S', 'M', 'L', 'XL'];
  colors = [
    {value: '1', label: 'Nâu'},
    {value: '2', label: 'Đỏ'},
    {value: '3', label: 'Đen'},
    {value: '4', label: 'Cam'},
    {value: '5', label: 'Tím'},
    {value: '6', label: 'Hồng'},
    {value: '7', label: 'Trắng'},
    {value: '8', label: 'Xanh'},
    {value: '9', label: 'Vàng'},
    {value: '10', label: 'Xám'}

  ];
  subCategories : Category[] = [];
  categoryIds: number[] = [];
  sizesFilter: string[] = [];
  currentCateId !: number
  colorsFilter: string[] = [];
  categoryFilter : Category[] = [];
  sort = window.sessionStorage.getItem('sortingType') || this.sortingTypes[0]
  page: number = 1;
  totalPage !: number;
  isActive = true;

  products : IProduct[] = [];
  subscribes : Subscription[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: ActivatedRoute) {
  }



  ngOnInit(): void {
    this.router.params.subscribe(params => {
      let cateId : number = params['cateId'];
      this.currentCateId = cateId;
      this.categoryIds = []
      this.categoryIds.push(cateId)
      this.categoryService.getSubCategories(cateId).subscribe( res => {
        this.subCategories = res
        if (this.subCategories){
          this.subCategories.map(sub =>{
            this.categoryIds.push(sub.id)
          })
          this.getProducts();
        }
      })
    })
  }
  getProducts() {
      let productSub = this.productService.filterProduct(this.categoryIds, this.sort, this.colorsFilter, this.sizesFilter , this.page).subscribe( page =>{
        this.products = page.products;
        this.totalPage = page.totalPages
        console.log(this.products)
      });
      this.subscribes.push(productSub);
  }

  sortingTypeChanged(type: string) {
    this.sort = type;
    this.page = 1;
    window.sessionStorage.setItem('sortingType', type);
    this.getProducts();
  }

  removeSize(size: string) {
    this.page = 1;
    let index = this.sizesFilter.indexOf(size, 0);
    this.sizesFilter.splice(index, 1);
    this.getProducts();
  }

  removeColor(color: string) {
    this.page = 1;
    let index = this.colorsFilter.indexOf(color, 0);
    this.colorsFilter.splice(index, 1);
    this.getProducts();
  }

  addSize(size: string) {
    this.page = 1;
    let exSize = this.sizesFilter.includes(size);
    if (!exSize){
      this.sizesFilter.push(size);
      this.getProducts();
    }

  }

  addColor(color: string) {
    this.page = 1;
    let exColor = this.colorsFilter.includes(color);
    if (!exColor) {
      this.colorsFilter.push(color);
      this.getProducts();
    }

  }

  addCategory(category: Category) {
    this.page = 1;
    if (this.categoryFilter.length <= 0 ) this.categoryIds = []
    let exCate = this.categoryFilter.includes(category);
    if(!exCate) {
      this.categoryFilter.push(category);
      this.categoryIds.push(category.id)
      this.getProducts();
    }
  }

  removeCategory(category: Category) {
    this.page = 1;
    let filterIndex = this.categoryFilter.indexOf(category, 0);
    let idIndex = this.categoryIds.indexOf(category.id, 0);
    this.categoryFilter.splice(filterIndex, 1);
    this.categoryIds.splice(idIndex, 1);
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.subscribes.forEach(s => {
      s.unsubscribe();
    });
  }

  setPage(number: number) {
    this.page = number;
    this.getProducts();
  }

  minusOnePage() {
    this.page = this.page -1;
  }

  plusOnePage() {
    this.page++;
  }
}
