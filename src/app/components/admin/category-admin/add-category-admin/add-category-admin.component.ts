import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../../services/category.service";
import {Category} from "../../../../model/Category";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-category-admin',
  templateUrl: './add-category-admin.component.html',
  styleUrls: ['./add-category-admin.component.scss']
})
export class AddCategoryAdminComponent implements OnInit {
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

  public transformData(id: number = 0, str: string = '|--') {
    for (let item of this.categories) {
      if (item.parentId == id) {
        item.name = str + item.name;
        if (this.hasChild(item)) this.transformData(item.id, str + '--')
      }
    }
  }

  public hasChild(category: Category) {
    for (let item of this.categories)
      if (item.parentId == category.id) return true;
    return false;
  }
}
