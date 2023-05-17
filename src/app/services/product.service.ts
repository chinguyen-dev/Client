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

  getProductByCategory(id: number | undefined): Observable<any> {
    return this.http.get<any>(`${this.API_SELL}/${id}/show`)
  }

  search(name: string | undefined): Observable<ProductSearch[]> {
    return this.http.post<ProductSearch[]>(`${this.API_SELL}/search`, {name});
  }

  getProducts(page: number | undefined): Observable<any> {
    return this.http.get<any>(`${this.API_URL}?page=${page}`);
  }

  deleteProductById(id: number | undefined): Observable<any> {
    return this.http.get<any>(this.API_URL + '/delete/' + id);
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

  filterProduct(slugs: string[], sortType: string, colors: string[], sizes: string[]) {
    const params = {slugs: slugs, sortType: sortType, colors: colors, sizes: sizes}
    return this.http.get<IProduct[]>(this.API_SELL + '/' + 'search', {params});
  }

  getProductByVariantId(id: number) {
    return this.http.get<IProduct>(`${environment.apiURL}/variants/${id}`);
  }
}
