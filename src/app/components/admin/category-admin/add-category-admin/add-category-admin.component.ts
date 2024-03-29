import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../../services/category.service";
import {Category} from "../../../../model/Category";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-category-admin',
  templateUrl: './add-category-admin.component.html',
  styleUrls: ['./add-category-admin.component.scss'],
})
export class AddCategoryAdminComponent implements OnInit {
  categories: any[] = [];

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private router: Router,
  ) {
  }

  form = this.fb.group({
    name: ['', [Validators.required]],
    parentId: ['', []],
  });


  ngOnInit(): void {
    this.getCategories();
  }

  public onSubmit() {
    this.categoryService.addCategory(this.form.value).subscribe({
      next: (res: Category) => this.router.navigateByUrl("/admin/categories"),
      error: (error: HttpErrorResponse) => console.log(error),
    });
  }

  public getCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (response: Category[]) => {
        this.categoryService.transformData(response);
        this.categories = [{id: 0, name: 'Danh mục cha'}, ...this.categoryService.sortParentChild(response)];
      },
      error: (error: HttpErrorResponse) => console.log(error)
    });
  }
}
