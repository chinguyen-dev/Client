import {Component, OnInit} from '@angular/core';
import {Category} from "../../../model/Category";
import {CategoryService} from "../../../services/category.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.scss']
})
export class CategoryAdminComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (response: Category[]) => {
        console.log(response)
        this.categories = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
