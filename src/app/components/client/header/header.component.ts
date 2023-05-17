import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../../services/storage.service";
import {ProductService} from "../../../services/product.service";
import {Observable} from "rxjs";
import {ProductSearch} from "../../../model/ProductSearch";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user!: any;
  isModal: boolean = false;
  search$: Observable<ProductSearch[]> | undefined;

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
    this.toggle = !this.toggle;
    this.search$ = undefined;
  }
}
