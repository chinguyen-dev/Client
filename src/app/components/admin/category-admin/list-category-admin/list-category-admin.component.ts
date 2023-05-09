import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../../services/category.service";
import {Category} from "../../../../model/Category";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-list-category-admin',
  templateUrl: './list-category-admin.component.html',
  styleUrls: ['./list-category-admin.component.scss']
})
export class ListCategoryAdminComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (response: Category[]) => {
        this.categoryService.transformData(response);
        this.categories = this.categoryService.sortParentChild(response);
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
}
