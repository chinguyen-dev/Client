import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {IProduct} from "../model/IProduct";
import {IProductVariant} from "../model/IProductVariant";
import {ProductSearch} from "../model/ProductSearch";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = environment.apiURL + '/admin/products';
  private API_SELL = environment.apiURL + '/products';

  constructor(private http: HttpClient) {
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.API_URL, product);
  }

  getProductByCategory(id : number | undefined): Observable<any> {
    return this.http.get<any>(`${this.API_SELL}/${id}/show`)
  }

  searchByName(value: any): Observable<any> {
    return this.http.post<ProductSearch[]>(`${this.API_SELL}/search`, {name: value});
  }

  getProducts(page: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}?page=${page}`);
  }

  getAllProduct(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  getProductById(id: any) {
    return this.http.get<IProduct>(this.API_URL + '/' + id)
  }

  getVariantsByProductId(id: any) {
    return this.http.get<IProductVariant[]>(this.API_URL + '/' + id + "/variants")
  }
  filterProduct(cateIds: number[], sortType: string, colors : string[], sizes : string[], page : number){
    const params = {cateIds : cateIds, sortType : sortType, colors : colors, sizes : sizes, page : page}
    return this.http.get<any>(this.API_SELL + '/' + 'search/filter', {params});
  }

  getProductByVariantId(id: number) {
    return this.http.get<IProduct>(`${environment.apiURL}/variants/${id}`);
  }
}
