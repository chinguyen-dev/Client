import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../../services/product.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  @Input() listItem: Array<any> | undefined;
  products$ !: Observable<any>;
  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    this.products$ = this.getAllProduct();
  }
  getAllProduct() : Observable<any>{
    return this.productService.getAllProduct();
  }
}
