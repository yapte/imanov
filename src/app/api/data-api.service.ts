import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  baseUrl = `${environment.host}/data-api`;

  constructor(private _http: HttpClient) { }

  getCategories() {
    return this._http.get<Category[]>(`${this.baseUrl}/categories`);
  }

  getProductsForCategory(categoryId: number) {
    return this._http.get<{ category: Category, products: Product[] }>(`${this.baseUrl}/products?category_id=${categoryId}`);
  }

  getProductsItem(productId: number) {
    return this._http.get<Product>(`${this.baseUrl}/products-item?product_id=${productId}`);
  }
}

