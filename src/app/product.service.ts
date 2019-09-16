import { Injectable } from '@angular/core';
import { Product } from './types';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ProductsService } from './products.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { Product } from './products-container/products-container.component';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;

  private productsURL = 'http://localhost:3000/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsURL).pipe(
      tap(recproducts => console.log(`recproducts = ${JSON.stringify(recproducts)}`)),
      catchError(error => of([]))
      // catchError(this.handleError('getProducts', []))
    );
  }
  getProductFromId(id: number): Observable<Product> {
    const url = `${this.productsURL}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(selectedProduct => console.log(`selected product = ${JSON.stringify(selectedProduct)}`)),
      catchError(error => of(new Product()))
    );
  }
  getProduct(id: number): Observable<Product> {
    // const url = `${apiUrl}/${id}`;
    return this.http.get<Product>(this.productsURL).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError(`getProduct id=${id}`))
    );
  }
  updateProduct(product: Product): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(`${this.productsURL}/${product.id}`, product, httpOptions).pipe(
      tap(updatedProduct => console.log(`updated Product = ${JSON.stringify(updatedProduct)}`)),
      catchError(error => of(new Product()))
    );
  }
  addProduct(newProduct: Product): Observable<Product> {
    // tslint:disable-next-line: no-shadowed-variable
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Product>(this.productsURL, newProduct, httpOptions).pipe(
      tap((product: Product) => console.log(`inserted product = ${JSON.stringify(product)}`)),
      catchError(error => of(new Product()))
    );
  }
  deleteProduct(productId: number): Observable<Product> {
    // tslint:disable-next-line: no-shadowed-variable
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.productsURL}/${productId}`;
    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => console.log(`Deleted product with id = ${productId}`)),
      catchError(error => of(null))
    );
  }
  searchProducts(typedString: string): Observable<Product[]> {
    if (!typedString.trim()) {
      return of([]);
    }
    return this.http.get<Product[]>(`${this.productsURL}?name_like=${typedString}`).pipe(
      tap(foundedProducts => console.log(`founded products = ${JSON.stringify(foundedProducts)}`)),
      catchError(error => of(null))
    );
  }
  addItem(arg0: { id: number; name: string; quantity: number; price: number; }) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private http: HttpClient,
    public productsService: ProductsService) {

  }
}



/** PUT: update the product on the server */
  // updateProduct(product: Productt): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };
  //   return this.http.put(`${this.productsURL}/${product.id}`, product, httpOptions).pipe(
  //     tap(updatedProduct => console.log(`updated product = ${JSON.stringify(updatedProduct)}`)),
  //     catchError(error => of(new Productt()))
  //        );
  // }


/** POST: add a new product to the server */

/** DELETE: delete the product from the server */

/* GET products whose name contains searched string */

