import {Component, OnInit} from '@angular/core';
import {fromEvent, map, merge, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../../../services/category.service";
import {Category} from "../../../model/Category";
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isModal: boolean | undefined;
  user!: any;
  categories: Category[] | undefined;
  constructor(private categoryService: CategoryService, private storageService : StorageService) {
  }

  ngOnInit(): void {
    this.toggleModal();
    this.getCategories();
    this.storageService.isAuthenticate.subscribe(user => this.user = user)
    console.log(this.user)
  }

  public getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (res: Category[]) => this.categories = res,
      error: err => console.log(err),
    })
  }

  toggleModal() {
    const element = document.querySelectorAll('li.hover');
    const hover$ = merge(
      fromEvent(element, 'mouseover').pipe(map(() => true)),
      fromEvent(element, 'mouseleave').pipe(map(() => false)),
    ).subscribe(value => this.isModal = value);
  }

  logOut() {
    this.storageService.signOut();
  }
}
