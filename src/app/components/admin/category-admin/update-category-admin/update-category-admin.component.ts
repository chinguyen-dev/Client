import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CategoryService} from "../../../../services/category.service";
import {Category} from "../../../../model/Category";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {find, from} from "rxjs";
import {log} from "util";

@Component({
  selector: 'app-update-category-admin',
  templateUrl: './update-category-admin.component.html',
  styleUrls: ['./update-category-admin.component.scss']
})
export class UpdateCategoryAdminComponent {
  categories: any[] = [];

  category: any = {parentId: 0, name: ''};

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private _route: ActivatedRoute,
    private router: Router,
  ) {
  }

  form = this.fb.group({
    name: ['', [Validators.required]],
    parentId: '',
  });

  onSubmit() {
    this.categoryService.updateCategory(this.category.id, this.form.value).subscribe({
      next: res => this.router.navigateByUrl('/admin/categories'),
      error: err => console.log(err),
    })
  }

  ngOnInit(): void {
    this.getCategories();
    this.getCategory();
  }


  public getCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (response: Category[]) => {
        this.transformData(response);
        this.categories = [{id: 0, name: 'Danh mục cha'}, ...this.categories];
      },
      error: err => console.log(err),
    });
  }

  public getCategory(): void {
    let {id} = this._route.snapshot.params;
    this.categoryService.getCategory(id).subscribe({
      next: value => this.category = value,
      error: err => console.log(err),
    })
  }

  public transformData(data: any, id: number = 0, str: string = '|--'): void {
    for (let item of data) {
      if (item.parentId == id) {
        item.name = str + item.name;
        this.categories?.push(item);
        if (this.hasChild(data, item)) this.transformData(data, item.id, str + '--')
      }
    }
  }

  public hasChild(data: any, category: Category): boolean {
    for (let item of data) if (item.parentId == category.id) return true;
    return false;
  }
}
