import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from "../../../../model/Category";
import {CategoryService} from "../../../../services/category.service";
import {from, fromEvent, map, merge, Observable, of} from "rxjs";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-mega-menu-header',
  templateUrl: './mega-menu-header.component.html',
  styleUrls: ['./mega-menu-header.component.scss']
})
export class MegaMenuHeaderComponent implements OnInit {
  @Output() isModal = new EventEmitter<boolean>();
  categories: Category[] = [];
  categoriesParent$: Observable<any> | undefined;

  constructor(private categoryService: CategoryService,) {
  }

  ngOnInit(): void {
    this.getCategories();
    setTimeout(() => this.toggleModal(), 1500);
  };


  public getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (res: Category[]) => {
        this.categories = res;
        const payLoad: any = [];
        from(res).pipe(
          filter((item: Category) => item.parentId == 0),
        ).subscribe({
          next: res => {
            payLoad.push(res);
            this.categoriesParent$ = of(payLoad);
            console.log(payLoad)
          }
        });
      },
      error: err => console.log(err),
    });
  }

  getChildren(parentId: number): Observable<any> {
    const data: any = [];
    from(this.categories).pipe(
      filter((item: Category) => item.parentId == parentId),
    ).subscribe({
      next: value => data.push(value),
      error: err => console.log(err),
    })
    return of(data);
  }

  toggleModal() {
    const element = document.querySelectorAll('li.hover');
    merge(
      fromEvent(element, 'mouseover').pipe(map(() => true)),
      fromEvent(element, 'mouseleave').pipe(map(() => false)),
    ).subscribe(value => this.isModal.emit(value));
  }
}
