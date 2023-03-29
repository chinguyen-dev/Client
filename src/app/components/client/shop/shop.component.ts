import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {log} from "util";
import {Observable} from "rxjs";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
  selectedFilters: any[] = []
  products$ !: Observable<any>
  constructor(private productService: ProductService, private router: Router) {
  }

  onFilterClick(key: string, value: string) {
    let exAttribute = this.selectedFilters.find(item => item.key = key && item.value == value)
    if (exAttribute == undefined) {
      let attribute = {key: key, value: value}
      this.selectedFilters.push(attribute)
    }
  }

  deleteAttribute(item: any) {
    let index = this.selectedFilters.indexOf(item, 0);
    this.selectedFilters.splice(index, 1);
  }

  ngOnInit(): void {
    this.products$ = this.productService.getAllProduct();
  }
}
