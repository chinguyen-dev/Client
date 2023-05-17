import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {IProduct} from "../model/IProduct";
import {IProductVariant} from "../model/IProductVariant";

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

  getProductByCategorySlug(param: string | undefined): Observable<any> {
    const slug = param?.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-').toLowerCase();
    return this.http.get<any>(`${this.API_SELL}/category/${slug}`)
  }

  getAllProduct(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  getProductById(id: any) {
    return this.http.get<IProduct>(this.API_URL + '/' + id)
  }
  getVariantsByProductId(id : any){
    return this.http.get<IProductVariant[]>(this.API_URL + '/' + id +"/variants")
  }
  filterProduct(cateIds: number[], sortType: string, colors : string[], sizes : string[], page : number){
    const params = {cateIds : cateIds, sortType : sortType, colors : colors, sizes : sizes, page : page}
    return this.http.get<any>(this.API_SELL + '/' + 'search/filter', {params});
  }
  getAllProductByCategoryId(id : number, sort: string){
    const  params = {cateId : id, sort : sort}
    this.http.get<IProduct[]>(`${this.API_SELL}/category`, {params}).subscribe(value => {
    })
    return this.http.get<IProduct[]>(`${this.API_SELL}/category`, {params})
  }

  getProductByVariantId(id: number) {
    return this.http.get<IProduct>(`${environment.apiURL}/variants/${id}`);
  }
}
