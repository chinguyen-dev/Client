import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../../services/storage.service";
import {ProductService} from "../../../services/product.service";
import {Observable} from "rxjs";
import {ProductSearch} from "../../../model/ProductSearch";
import {IProduct} from "../../../model/IProduct";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user!: any;
  isModal: boolean = false;
  search$: Observable<IProduct[]> | undefined;

  toggle: boolean = false;

  constructor(private storageService: StorageService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.storageService.isAuthenticate.subscribe(user => this.user = user)
  }

  logOut() {
    this.storageService.signOut();
  }

  search(event: any) {
    let value = event.target.value;
    if (value) this.search$ = this.productService.search(value);
  }

  onBlur(){
    this.search$ = undefined;
    this.toggle = !this.toggle;
  }
}
