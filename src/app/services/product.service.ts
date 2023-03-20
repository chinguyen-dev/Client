import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private PRODUCT_API = 'http://localhost:8080/api/v1/product'
  constructor(private http : HttpClient) { }
  getAllProduct(): Observable<any>{
    return this.http.get<any>(this.PRODUCT_API);
  }

  getProductById(id: any) {
    this.http.get(this.PRODUCT_API + '/' + id).subscribe(value => console.log(value))
    return this.http.get(this.PRODUCT_API + '/' + id)
  }
}
