import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductT } from './types';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HttpClient API get() method => Fetch products list
  getProducts(): Observable<ProductT> {
    return this.http.get<ProductT>(this.apiURL + '/products')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API get() method => Fetch product
  getProduct(id): Observable<ProductT> {
    return this.http.get<ProductT>(this.apiURL + '/products/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create product
  createProduct(product): Observable<ProductT> {
    return this.http.post<ProductT>(this.apiURL + '/products', JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update product
  updateProduct(id, product): Observable<ProductT> {
    return this.http.put<ProductT>(this.apiURL + '/products/' + id, JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API delete() method => Delete product
  deleteProduct(id) {
    return this.http.delete<ProductT>(this.apiURL + '/products/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
