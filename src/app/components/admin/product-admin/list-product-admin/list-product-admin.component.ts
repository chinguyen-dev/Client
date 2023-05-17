import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../../services/product.service";
import {Observable, of} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

export interface Page {
  page: number;
  active: boolean;
}

@Component({
  selector: 'app-list-product-admin',
  templateUrl: './list-product-admin.component.html',
  styleUrls: ['./list-product-admin.component.scss']
})
export class ListProductAdminComponent implements OnInit {
  title: string = "Danh sách sản phẩm";
  product$: Observable<any> | undefined;
  pagination$: Observable<any> | undefined;
  isActive: boolean = false;
  pre: boolean = true;
  next: boolean = true;
  pages: Page[] = [];

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    const page = this.route.snapshot.queryParamMap.get('page');
    let pageDefault: number = page == null ? 1 : parseInt(page);
    this.getProducts(pageDefault - 1, pageDefault);
  }

  delete(id: number | undefined) {
    const page = this.route.snapshot.queryParamMap.get('page');
    let pageDefault: number = page == null ? 1 : parseInt(page);
    this.productService.deleteProductById(id).subscribe({
      next: response => {
        console.log(response);
        this.getProducts(pageDefault - 1, pageDefault);
      },
      error: err => console.log(err)
    });
  }

  getProducts(page: number, pageCurrent: number) {
    this.pages = [];
    this.productService.getProducts(page).subscribe({
      next: res => {
        this.isActive = res.totalPages > 1;
        if (this.isActive) for (let i = 1; i <= res.totalPages; i++) this.pages.push({
          page: i,
          active: i == pageCurrent
        })
        this.pagination$ = of(this.pages);
        this.product$ = of(res.products);
        this.pre = pageCurrent != 1;
        this.next = pageCurrent != res.totalPages;
      },
      error: err => console.log(err)
    });
  }

  onPageChange(page: number) {
    this.router.navigate([], {
      queryParams: {page: page},
      queryParamsHandling: 'merge'
    });
    this.getProducts(page - 1, page)
  }

  changePage(value: boolean) {
    const pageParam = this.route.snapshot.queryParamMap.get('page');
    let page: number = pageParam == null ? 1 : parseInt(pageParam);
    if (value) {
      page = page - 1;
      if (page < 1) page = 1;
    } else {
      page = page + 1;
      if (page > this.pages.length) page = this.pages.length;
    }
    this.router.navigate([], {
      queryParams: {page: page},
      queryParamsHandling: 'merge'
    });
    this.getProducts(page - 1, page);
  }
}
