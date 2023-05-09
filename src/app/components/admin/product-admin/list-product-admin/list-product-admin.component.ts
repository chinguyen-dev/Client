import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../../services/product.service";
import {Observable} from "rxjs";
import {ProductForm} from "../../../../model/ProductForm";

@Component({
  selector: 'app-list-product-admin',
  templateUrl: './list-product-admin.component.html',
  styleUrls: ['./list-product-admin.component.scss']
})
export class ListProductAdminComponent implements OnInit {
  title: string = "Danh sách sản phẩm";

  product$: Observable<any> | undefined;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.product$ = this.getProducts();
    this.product$.subscribe({
      next:(res: any) => console.log(res)
    })
  }

  getProducts(): Observable<any> {
    return this.productService.getAllProduct();
  }
}
