import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../../services/category.service";
import {Category} from "../../../../model/Category";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-list-filter-bar-admin',
  templateUrl: './list-category-admin.component.html',
  styleUrls: ['./list-category-admin.component.scss']
})
export class ListCategoryAdminComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }


  public getCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (response: Category[]) => {
        this.categories = response;
        this.transformData(response);
      },
      error: (error: HttpErrorResponse) => console.log(error)
    });
  }

  public onDeleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe({
      next: (response: any) => this.getCategories(),
      error: (error: HttpErrorResponse) => console.log(error)
    })
  }

  public transformData(data: any) {
    for (let item of data) {
      if (item.parentId != 0) {
        if (this.hasChild(data, item)) this.transformData(data)
      } else {
        item.parentId = item.name;
      }
    }
  }

  public hasChild(data: any, category: Category) {
    for (let item of data) {
      if (item.id == category.parentId) {
        category.parentId = item.name;
        return true;
      }
    }
    return false;
  }
}
