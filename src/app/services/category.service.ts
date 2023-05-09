import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/Category";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [];

  private url = environment.apiURL + '/admin/categories';

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<Category[]> {
    this.categories = [];
    return this.http.get<Category[]>(`${this.url}`);
  }

  public getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.url}/${id}`);
  }

  public addCategory(categoryAddRequest: any): Observable<Category> {
    return this.http.post<Category>(`${this.url}`, categoryAddRequest);
  }

  public updateCategory(id: number, category: any): Observable<Category> {
    return this.http.put<Category>(`${this.url}/${id}`, category);
  }

  public deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`)
  }

  public transformData(categories: Category[], id: number = 0, str: string = '|--') {
    for (let item of categories) {
      if (item.parentId == id) {
        item.name = str + item.name;
        if (this.hasChild(categories, item)) this.transformData(categories, item.id, str + '--')
      }
    }
  }

  public hasChild(categories: Category[], category: Category): boolean {
    for (let item of categories) if (item.parentId === category.id) return true;
    return false;
  }

  public sortParentChild(categories: Category[], id: number = 0): Category[] {
    for (let item of categories) {
      if (item.parentId === id) {
        this.categories?.push(item);
        if (this.hasChild(categories, item)) this.sortParentChild(categories, item.id);
      }
    }
    return this.categories;
  }
}
