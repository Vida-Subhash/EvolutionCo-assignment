import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productModel } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class MockServiceService {
  private baseUrl = 'https://dummyjson.com';
  constructor(private http: HttpClient) {}

  // get products
  getProductData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products?limit=10`);
  }

  addProduct(data:productModel) {
    return this.http.post(`${this.baseUrl}/products/add`, data)
  }

  // edit single products
  editProductData(id: number, data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/products/${id}`, data);
  }

  // delete product
  deleteProductData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/products/${id}`);
  }
}
