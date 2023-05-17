import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../../services/product.service";
import {Observable} from "rxjs";
import {IProduct} from "../../../../model/IProduct";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent{

  @Input() listItem: Array<any> | undefined;
  @Input() products !: IProduct[];
  constructor(private productService: ProductService) {
  }
}
