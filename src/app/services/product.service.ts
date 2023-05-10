import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = environment.apiURL + '/admin/products';
  private API_SELL = environment.apiURL + '/product';

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
    this.http.get(this.API_URL + '/' + id).subscribe(value => console.log(value))
    return this.http.get(this.API_URL + '/' + id)
  }
  getVariantsByProductId(id : any){
    return this.http.get(this.API_URL + '/' + id +"/variants")
  }
  filterProduct(cateId: string, sortType: string, colors : string[], sizes : string[]){
    const params = {cateId : cateId, sortType : sortType, colors : colors, sizes : sizes}
    return this.http.get(this.API_SELL + '/' + 'search', {params});
  }
}
