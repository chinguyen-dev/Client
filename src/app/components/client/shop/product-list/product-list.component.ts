import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../model/Product";
import {ProductService} from "../../../../services/product.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent{

  @Input() listItem: Array<any> | undefined;
  @Input() products$ !: Observable<any>;
  constructor(private productService: ProductService) {
  }
}
