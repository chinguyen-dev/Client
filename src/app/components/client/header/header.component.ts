import {Component, OnInit} from '@angular/core';
import {fromEvent, map, merge} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../../../services/category.service";
import {Category} from "../../../model/Category";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isModal: boolean | undefined;
  user!: any;
  categories: Category[] | undefined;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.toggleModal();
    this.getCategories();
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
}
