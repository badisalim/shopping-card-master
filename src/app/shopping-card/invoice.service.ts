import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

export interface Product {

  id: number;
  name: string;
  quantity: number;
  price: number;

}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient, private productsService: ProductsService, private router: Router) { }
  // host = 'https://my-json-server.typicode.com/badisalim/shopping-card/data';
  host = 'https://localhost:3000/api/products';
  product: { id: any; name: any; quantity: any; price: any; };


  getProducts(): Observable<Product[]> {

    return this.httpClient.get<Product[]>(this.host);
  }
  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>('${this.host}/${id}');
  }


  addItem(product: Product) {

    return this.httpClient.post(this.host, product).subscribe(data => console.log(data));
  }
  // async addItem(product: Product) {
  //   await this.httpClient.post('http://localhost:3000/products', product).toPromise();
  //   this.router.navigateByUrl('/products');
  // }
  addProduct(product: Product) {
    console.log('1234', product);
    return this.httpClient.post(this.host, product).subscribe(data => console.log(data));
  }
  editProduct(product: Product) {
    return this.httpClient.put(this.host, product);

  }
  deleteProduct(id: number) {
    return this.httpClient.delete<Product>('${this.host}/${id}');

  }

}
