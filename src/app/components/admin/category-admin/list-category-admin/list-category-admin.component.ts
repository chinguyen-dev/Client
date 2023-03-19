import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../../services/category.service";
import {Category} from "../../../../model/Category";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-list-category-admin',
  templateUrl: './list-category-admin.component.html',
  styleUrls: ['./list-category-admin.component.scss']
})
export class ListCategoryAdminComponent implements OnInit{
  categories: any[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }


  public getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (response: Category[]) => {
        this.categories = response;
        this.transformData();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public transformData() {
    for (let item of this.categories) {
      if (this.hasChild(item)) {
        this.transformData();
      } else {
        item.parentId = item.name;
      }
    }
  }

  public hasChild(category: Category) {
    for (let item of this.categories)
      if (item.id == category.parentId) {
        category.parentId = item.name;
        return true;
      }
    return false;
  }
}
