import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'http://localhost:8080/api/v1/admin/categories';

  constructor(private http: HttpClient) {
  }

  public getCategories(): Observable<Category[]> {
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

}
